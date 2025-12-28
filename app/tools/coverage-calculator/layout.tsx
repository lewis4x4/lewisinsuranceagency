import type { Metadata } from "next"
import { siteConfig } from "@/config/site"

const baseUrl = `https://${siteConfig.domain}`

export const metadata: Metadata = {
    title: "Coverage Needs Calculator | Lewis Insurance",
    description: "Calculate your ideal insurance coverage amounts for homeowners, auto, flood, and umbrella policies. Free interactive tool for Florida residents.",
    alternates: {
        canonical: `${baseUrl}/tools/coverage-calculator`,
    },
    openGraph: {
        title: "Coverage Needs Calculator | Lewis Insurance",
        description: "Calculate your ideal insurance coverage amounts for homeowners, auto, flood, and umbrella policies.",
        url: `${baseUrl}/tools/coverage-calculator`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Coverage Needs Calculator | Lewis Insurance",
        description: "Calculate your ideal insurance coverage amounts for homeowners, auto, flood, and umbrella policies.",
    },
}

export default function CoverageCalculatorLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
