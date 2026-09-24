import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { COIRequestForm } from "@/components/forms"
import { MailtoInfo } from "@/components/MailtoInfo"
import { generateBreadcrumbSchema, SchemaScripts } from "@/lib/schema"
import { siteConfig } from "@/config/site"

const baseUrl = `https://${siteConfig.domain}`
const pageTitle = `Request a Certificate of Insurance | ${siteConfig.legalName}`
const pageDescription =
    "Request a certificate of insurance (COI) from Lewis Insurance in Lake City, FL. Send your job, landlord, or contract details and our team will follow up fast."

export const metadata: Metadata = {
    title: { absolute: pageTitle },
    description: pageDescription,
    alternates: {
        canonical: `${baseUrl}/coi-request`,
    },
    openGraph: {
        title: pageTitle,
        description: pageDescription,
        url: `${baseUrl}/coi-request`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
        images: [{ url: "https://lewisinsurance.com/images/og-default.png", width: 1200, height: 630, alt: "Lewis Insurance — Florida insurance" }],
    },
    twitter: {
        card: "summary_large_image",
        title: pageTitle,
        description: pageDescription,
        images: ["https://lewisinsurance.com/images/og-default.png"],
    },
}

export default function COIRequestPage() {
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Certificate of Insurance Request", url: `${baseUrl}/coi-request` },
    ])

    return (
        <>
            <SchemaScripts schemas={[breadcrumbSchema]} />

            {/* Breadcrumbs */}
            <nav className="bg-white border-b border-lewis-border" aria-label="Breadcrumb">
                <div className="container-lg py-3">
                    <ol className="flex items-center gap-2 text-sm">
                        <li>
                            <Link href="/" className="text-lewis-body hover:text-lewis-blue">
                                Home
                            </Link>
                        </li>
                        <li className="text-lewis-border" aria-hidden="true">/</li>
                        <li className="text-lewis-blue font-medium" aria-current="page">Certificate of Insurance Request</li>
                    </ol>
                </div>
            </nav>

            {/* Hero */}
            <section className="hero-gradient py-16 md:py-20">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-lewis-ink mb-4">Request a Certificate of Insurance</h1>
                        <p className="text-xl text-lewis-body">
                            Need a COI for a job, landlord, or contract in Florida? Send the details below. Our Lake City team will follow up from{" "}
                            <MailtoInfo className="text-lewis-blue underline" />. For urgent needs call{" "}
                            <a
                                href={`tel:${siteConfig.contact.phone.main.replace(/[^0-9]/g, "")}`}
                                className="text-lewis-blue underline"
                            >
                                {siteConfig.contact.phone.main}
                            </a>
                            .
                        </p>
                    </div>
                </div>
            </section>

            {/* Form */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <Card className="max-w-3xl mx-auto">
                        <CardContent className="p-6 md:p-8">
                            <h2 className="text-2xl font-bold text-lewis-ink mb-6">Certificate details</h2>
                            <COIRequestForm />
                        </CardContent>
                    </Card>
                </div>
            </section>
        </>
    )
}
