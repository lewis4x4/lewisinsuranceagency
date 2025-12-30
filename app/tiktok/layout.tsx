import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Get Your Free Quote | Lewis Insurance Agency",
    description: "Compare insurance quotes from 20+ carriers in minutes. Connect your current policy and see how much you could save with Lewis Insurance.",
    robots: {
        index: false,
        follow: false,
    },
}

export default function TikTokLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
