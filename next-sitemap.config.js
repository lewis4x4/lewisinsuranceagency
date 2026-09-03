/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('node:fs')
const path = require('node:path')
const { execFileSync } = require('node:child_process')

const duplicateBlogSlugs = new Set([
    'citizens-property-insurance-florida-eligibility-your-2025-gu',
    'citizens-insurance-florida-eligibility-complete-2025-guide',
    'citizens-insurance-florida-eligibility-2026-update-guide',
    'citizens-insurance-florida-eligibility-2026-complete-guide',
    'florida-pip-coverage-explained-what-every-north-florida-driv',
    'florida-pip-coverage-explained-your-complete-guide-for-2026',
    'florida-nofault-insurance-2026-what-changes-mean-for-drivers',
    'florida-uninsured-motorist-coverage-essential-protection-in-',
    'florida-roof-insurance-requirements-your-2026-complete-guide',
    'florida-roof-insurance-requirements-guide-for-2026',
    'florida-roof-insurance-requirements-your-2026-guide-to-cover',
    'florida-roof-insurance-requirements-2026-guide-for-homeowner',
    'florida-wind-mitigation-savings-how-north-florida-homeowners',
    'florida-wind-mitigation-savings-your-guide-to-lower-home-ins',
    'florida-hurricane-deductible-guide-understanding-your-costs',
    'florida-hurricane-deductibles-explained-what-you-need-to-kno',
    'florida-sr22-insurance-complete-guide-for-north-florida-driv',
    'florida-sr22-insurance-complete-guide-for-2026-requirements-',
])

const nextErrorRoutes = ['/_not-found', '/_error', '/_global-error', '/404', '/500']

function isExcludedPath(urlPath) {
    return /\.[a-z0-9]+$/i.test(urlPath)
        || ['/thank-you', '/import-policy', '/google', '/facebook', '/tiktok', '/robots.txt', ...nextErrorRoutes].includes(urlPath)
        || ['/thanks/', '/api/', '/admin/', '/portal/', '/import-policy/', '/tiktok/'].some((prefix) => urlPath.startsWith(prefix))
        || urlPath === '/thanks'
        || urlPath === '/portal'
        || (urlPath.startsWith('/blog/') && duplicateBlogSlugs.has(urlPath.slice('/blog/'.length)))
}

function sourceFileForUrl(urlPath) {
    if (urlPath.startsWith('/blog/')) {
        const slug = urlPath.slice('/blog/'.length)
        const match = fs.readdirSync('content/blog').find((file) => file.endsWith(`-${slug}.md`))
        return match ? path.join('content/blog', match) : 'src/lib/blog/posts.ts'
    }
    if (urlPath.startsWith('/learn/')) {
        return path.join('content/learn', `${urlPath.slice('/learn/'.length)}.md`)
    }
    const route = urlPath === '/' ? 'app/page.tsx' : path.join('app', urlPath.slice(1), 'page.tsx')
    return fs.existsSync(route) ? route : 'app/layout.tsx'
}

function lastModified(urlPath) {
    const file = sourceFileForUrl(urlPath)
    if (file.endsWith('.md') && fs.existsSync(file)) {
        const match = fs.readFileSync(file, 'utf8').match(/^date:\s*["']?(\d{4}-\d{2}-\d{2})/m)
        if (match) return match[1]
    }
    if (urlPath.startsWith('/blog/') && file === 'src/lib/blog/posts.ts') {
        const slug = urlPath.slice('/blog/'.length).replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
        const source = fs.readFileSync(file, 'utf8')
        const post = source.match(new RegExp(`slug:\s*["']${slug}["']([\\s\\S]*?)(?=\\n\\s*\\},\\n\\s*\\{|\\n\\s*\\},?\\n\\])`))
        const updatedAt = post?.[1].match(/updatedAt:\s*["'](\d{4}-\d{2}-\d{2})["']/)
        const publishedAt = post?.[1].match(/publishedAt:\s*["'](\d{4}-\d{2}-\d{2})["']/)
        if (updatedAt || publishedAt) return (updatedAt || publishedAt)[1]
    }
    try {
        return execFileSync('git', ['log', '-1', '--format=%cI', '--', file], { encoding: 'utf8' }).trim()
    } catch (error) {
        const output = error && typeof error === 'object' && 'stdout' in error ? error.stdout : undefined
        return typeof output === 'string' ? output.trim() : undefined
    }
}

/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://lewisinsurance.com',
    generateRobotsTxt: false,
    generateIndexSitemap: false,
    autoLastmod: false,
    exclude: [
        '/thank-you', '/thanks/*', '/api/*', '/admin/*', '/portal', '/portal/*',
        '/import-policy', '/import-policy/*', '/google', '/facebook', '/tiktok/*',
        '/robots.txt', ...nextErrorRoutes, '/apple-icon.png', '/icon.png',
    ],
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
    transform: async (config, urlPath) => {
        if (isExcludedPath(urlPath)) return null
        return {
            loc: urlPath,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: lastModified(urlPath),
        }
    },
    additionalPaths: async (config) => {
        const manifest = JSON.parse(fs.readFileSync('.next/prerender-manifest.json', 'utf8'))
        const paths = Object.keys(manifest.routes).filter((urlPath) => !isExcludedPath(urlPath))
        return Promise.all(paths.map((urlPath) => config.transform(config, urlPath)))
    },
}

module.exports = config
