import type { Metadata } from "next"
import { siteConfig } from "@/config/site"

export const siteOpenGraph: NonNullable<Metadata["openGraph"]> = {
    type: "website",
    locale: "en_US",
    title: siteConfig.seo.defaultTitle,
    description: siteConfig.seo.defaultDescription,
    siteName: siteConfig.name,
    images: [
        {
            url: "https://lewisinsurance.com/images/og-default.png",
            width: 1200,
            height: 630,
            alt: "Lewis Insurance — Florida insurance",
        },
    ],
}
