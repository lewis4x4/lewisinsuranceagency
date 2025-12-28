import type { Metadata } from "next"
import { siteConfig } from "@/config/site"

const baseUrl = `https://${siteConfig.domain}`

export const metadata: Metadata = {
    title: "Hurricane Prep Checklist | Lewis Insurance",
    description: "Comprehensive hurricane preparation checklist for Florida residents. Covers insurance, documents, home protection, and supplies. Be ready for hurricane season.",
    alternates: {
        canonical: `${baseUrl}/tools/hurricane-prep`,
    },
    openGraph: {
        title: "Hurricane Prep Checklist | Lewis Insurance",
        description: "Comprehensive hurricane preparation checklist for Florida residents. Covers insurance, documents, home protection, and supplies.",
        url: `${baseUrl}/tools/hurricane-prep`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Hurricane Prep Checklist | Lewis Insurance",
        description: "Comprehensive hurricane preparation checklist for Florida residents. Covers insurance, documents, home protection, and supplies.",
    },
}

export default function HurricanePrepLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
