import { readFileSync } from 'node:fs'

const sitemap = readFileSync('public/sitemap.xml', 'utf8')
const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1])
const errorRoutes = new Set(['/_not-found', '/_error', '/_global-error', '/404', '/500'])
const invalidLocations = locations.filter((location) => {
    const pathname = new URL(location).pathname
    return errorRoutes.has(pathname)
})

if (invalidLocations.length > 0) {
    console.error(`Sitemap contains error routes:\n${invalidLocations.join('\n')}`)
    process.exit(1)
}

console.log(`PASS: checked ${locations.length} sitemap URLs; no Next.js error routes found.`)
