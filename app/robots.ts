import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: [
                    '/api/',
                    '/thank-you',
                    '/_next/',
                    '/admin/',
                ],
            },
        ],
        sitemap: 'https://lewisinsurance.com/sitemap.xml',
    }
}
