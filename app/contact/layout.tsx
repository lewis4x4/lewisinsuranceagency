import type { Metadata } from "next"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
    title: "Contact Lewis Insurance | Free Quote",
    description: "Contact Lewis Insurance for Florida insurance quotes. Call, email, or visit our Lake City office. Free quotes, fast response.",
    alternates: {
        canonical: `https://${siteConfig.domain}/contact`,
    },
    openGraph: {
        title: "Contact Lewis Insurance | Free Quote",
        description: `Get in touch with Lewis Insurance for a free quote. Call ${siteConfig.contact.phone.main} or fill out our contact form.`,
        url: `https://${siteConfig.domain}/contact`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Contact Lewis Insurance | Free Quote",
        description: `Get in touch with Lewis Insurance for a free quote. Call ${siteConfig.contact.phone.main} or fill out our contact form.`,
    },
}

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
