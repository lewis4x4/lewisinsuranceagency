import Link from "next/link"
import {
    CreditCard,
    FileText,
    AlertTriangle,
    Edit,
    User,
    ArrowRight,
    ExternalLink,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Client Tools & Service Center",
    description: "Access your insurance portal, make payments, file claims, and manage your policies online. Lewis Insurance self-service tools for Florida clients.",
}

const clientTools = [
    {
        title: "Make a Payment",
        description: "Pay your premium online quickly and securely.",
        icon: CreditCard,
        href: siteConfig.portal.makePayment,
        external: true,
    },
    {
        title: "View Your Policies",
        description: "Access your policy documents and coverage details.",
        icon: FileText,
        href: siteConfig.portal.viewPolicy,
        external: true,
    },
    {
        title: "File a Claim",
        description: "Report a claim or check the status of an existing claim.",
        icon: AlertTriangle,
        href: siteConfig.portal.fileClaim,
        external: true,
    },
    {
        title: "Request a Change",
        description: "Update your address, add a vehicle, or make other policy changes.",
        icon: Edit,
        href: siteConfig.portal.requestChange,
        external: true,
    },
    {
        title: "Account Settings",
        description: "Update your contact information and preferences.",
        icon: User,
        href: siteConfig.portal.login,
        external: true,
    },
]

export default function ClientToolsPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-16 md:py-20">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-lewis-ink mb-4">Client Service Center</h1>
                        <p className="text-xl text-lewis-body mb-8">
                            Manage your insurance policies, make payments, and access your documents—all in one place.
                        </p>
                        <Button asChild className="btn-accent rounded-full">
                            <a
                                href={siteConfig.portal.login}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Log In to Your Portal
                                <ExternalLink className="h-4 w-4 ml-2" />
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Client Tools Grid */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {clientTools.map((tool) => {
                            const Icon = tool.icon
                            return (
                                <a
                                    key={tool.title}
                                    href={tool.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group"
                                >
                                    <Card className="h-full card-hover">
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-lewis-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-lewis-blue transition-colors">
                                                    <Icon className="h-6 w-6 text-lewis-blue group-hover:text-white transition-colors" />
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-semibold text-lewis-ink mb-2 group-hover:text-lewis-blue transition-colors flex items-center gap-2">
                                                        {tool.title}
                                                        {tool.external && <ExternalLink className="h-4 w-4" />}
                                                    </h3>
                                                    <p className="text-sm text-lewis-body">{tool.description}</p>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Need Help Section */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <Card className="max-w-3xl mx-auto">
                        <CardContent className="p-8 text-center">
                            <h2 className="text-2xl font-bold text-lewis-ink mb-4">
                                Need Help?
                            </h2>
                            <p className="text-lewis-body mb-6">
                                Our team is here to assist you with any questions about your policy or account.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <a
                                    href={`tel:${siteConfig.contact.phone.main.replace(/[^0-9]/g, "")}`}
                                    className="inline-flex items-center gap-2 text-lewis-blue font-medium hover:underline"
                                >
                                    Call: {siteConfig.contact.phone.main}
                                </a>
                                <span className="hidden sm:inline text-lewis-border">|</span>
                                <a
                                    href={`mailto:${siteConfig.contact.email.info}`}
                                    className="inline-flex items-center gap-2 text-lewis-blue font-medium hover:underline"
                                >
                                    Email: {siteConfig.contact.email.info}
                                </a>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </>
    )
}
