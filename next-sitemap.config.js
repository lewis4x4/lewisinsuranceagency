/** @type {import('next-sitemap').IConfig} */
const config = {
    siteUrl: process.env.SITE_URL || 'https://lewisinsurance.com',
    generateRobotsTxt: false, // We generate robots.txt via Next.js
    generateIndexSitemap: false,
    exclude: ['/thank-you', '/thanks/*', '/api/*', '/admin/*', '/portal/*', '/import-policy'],
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
}

module.exports = config
