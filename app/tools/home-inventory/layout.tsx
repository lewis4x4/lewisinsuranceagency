import type { Metadata } from "next"
import { siteConfig } from "@/config/site"

const baseUrl = `https://${siteConfig.domain}`

export const metadata: Metadata = {
    title: "Home Inventory Checklist | Lewis Insurance",
    description: "Create a detailed home inventory room-by-room. Essential for insurance claims and ensuring proper coverage. Free interactive tool for Florida homeowners.",
    alternates: {
        canonical: `${baseUrl}/tools/home-inventory`,
    },
    openGraph: {
        title: "Home Inventory Checklist | Lewis Insurance",
        description: "Create a detailed home inventory room-by-room. Essential for insurance claims and ensuring proper coverage.",
        url: `${baseUrl}/tools/home-inventory`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Home Inventory Checklist | Lewis Insurance",
        description: "Create a detailed home inventory room-by-room. Essential for insurance claims and ensuring proper coverage.",
    },
}

export default function HomeInventoryLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
