interface SocialImage {
    url: string
    width?: number
    height?: number
}

export const socialImages: Readonly<Record<string, { url: string; width: 1200; height: 630 }>> = {
    "/images/florida-insurance-tax-documents-2026.png": {
        url: "/images/og/florida-insurance-tax-documents-2026-og.jpg",
        width: 1200,
        height: 630,
    },
    "/images/2026_Homeowners_Checklist.jpg": {
        url: "/images/og/2026_Homeowners_Checklist-og.jpg",
        width: 1200,
        height: 630,
    },
    "/images/2026_Auto_Insurance_Review.jpg": {
        url: "/images/og/2026_Auto_Insurance_Review-og.jpg",
        width: 1200,
        height: 630,
    },
    "/images/blog/florida-auto-rates-shop-renewal-2026.png": {
        url: "/images/og/florida-auto-rates-shop-renewal-2026-og.jpg",
        width: 1200,
        height: 630,
    },
    "/images/blog/nfip-september-30-2026-florida-flood-deadline.png": {
        url: "/images/og/nfip-september-30-2026-florida-flood-deadline-og.jpg",
        width: 1200,
        height: 630,
    },
    "/images/blog/how-to-read-florida-home-insurance-renewal-notice.png": {
        url: "/images/og/how-to-read-florida-home-insurance-renewal-notice-og.jpg",
        width: 1200,
        height: 630,
    },
    "/images/blog/florida-workers-comp-rates-2026-2027-ncci.png": {
        url: "/images/og/florida-workers-comp-rates-2026-2027-ncci-og.jpg",
        width: 1200,
        height: 630,
    },
    "/images/blog/twenty-minutes-florida-home-policy-peak-hurricane.png": {
        url: "/images/og/twenty-minutes-florida-home-policy-peak-hurricane-og.jpg",
        width: 1200,
        height: 630,
    },
    "/images/articles/2026/01/progressive-insurance-florida-rebate-2026-featured.png": {
        url: "/images/og/progressive-insurance-florida-rebate-2026-featured-og.jpg",
        width: 1200,
        height: 630,
    },
    "/images/blog/florida-crash-report-threshold-2000-october-2026.jpg": {
        url: "/images/og/florida-crash-report-threshold-2000-october-2026-og.jpg",
        width: 1200,
        height: 630,
    },
}

export function socialImageFor(src?: string): SocialImage {
    const url = src || "/images/og-default.png"
    if (Object.hasOwn(socialImages, url)) return socialImages[url]
    if (url === "/images/og-default.png") return { url, width: 1200, height: 630 }
    return { url }
}
