import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Import Your Insurance Policy | Lewis Insurance",
    description: "Connect your existing insurance policy to Lewis Insurance for a free comparison quote. We'll automatically pull your coverage details and find you better rates from multiple carriers.",
    alternates: {
        canonical: "https://lewisinsurance.com/import-policy",
    },
}

export default function ImportPolicyLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return children
}
