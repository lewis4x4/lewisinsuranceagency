import Link from "next/link"
import {
    BookOpen,
    Calculator,
    FileText,
    HelpCircle,
    ArrowRight,
    Download,
    ExternalLink,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CTABand } from "@/components/sections"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Insurance Resources",
    description: "Learn about insurance in Florida. Guides, articles, and tools to help you understand your coverage options and make informed decisions.",
}

const resourceCategories = [
    {
        title: "Insurance Guides",
        description: "In-depth guides to help you understand your coverage options.",
        icon: BookOpen,
        items: [
            { title: "Florida Homeowners Insurance Guide", href: "#", comingSoon: true },
            { title: "Understanding Flood Insurance in Florida", href: "#", comingSoon: true },
            { title: "Auto Insurance Requirements in FL", href: "#", comingSoon: true },
            { title: "Business Insurance 101", href: "#", comingSoon: true },
        ],
    },
    {
        title: "Helpful Tools",
        description: "Calculators and tools to help you plan your coverage.",
        icon: Calculator,
        items: [
            { title: "Coverage Needs Calculator", href: "#", comingSoon: true },
            { title: "Home Inventory Checklist", href: "#", comingSoon: true },
            { title: "Hurricane Prep Checklist", href: "#", comingSoon: true },
        ],
    },
    {
        title: "Forms & Documents",
        description: "Common forms you may need for your policies.",
        icon: FileText,
        items: [
            { title: "Claim Report Form", href: "#", comingSoon: true },
            { title: "Policy Change Request", href: "#", comingSoon: true },
            { title: "Certificate of Insurance Request", href: "#", comingSoon: true },
        ],
    },
]

const quickLinks = [
    { title: "Client Portal", href: "/portal", description: "Access your policies and documents" },
    { title: "File a Claim", href: "/claims", description: "Report a claim or get help" },
    { title: "Contact Us", href: "/contact", description: "Get in touch with our team" },
    { title: "FAQ", href: "/#faq", description: "Common questions answered" },
]

export default function ResourcesPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-16 md:py-20">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-lewis-ink mb-4">Insurance Resources</h1>
                        <p className="text-xl text-lewis-body">
                            Guides, tools, and information to help you make informed insurance decisions.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-8 bg-white border-b border-lewis-border">
                <div className="container-lg">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {quickLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="p-4 rounded-lg hover:bg-gray-50 transition-colors text-center"
                            >
                                <div className="font-medium text-lewis-blue">{link.title}</div>
                                <div className="text-xs text-lewis-body mt-1">{link.description}</div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resource Categories */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {resourceCategories.map((category) => {
                            const Icon = category.icon
                            return (
                                <Card key={category.title} className="h-full">
                                    <CardHeader>
                                        <div className="w-12 h-12 rounded-xl bg-lewis-blue/10 flex items-center justify-center mb-4">
                                            <Icon className="h-6 w-6 text-lewis-blue" />
                                        </div>
                                        <CardTitle className="text-lg">{category.title}</CardTitle>
                                        <p className="text-sm text-lewis-body">{category.description}</p>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3">
                                            {category.items.map((item) => (
                                                <li key={item.title}>
                                                    {item.comingSoon ? (
                                                        <span className="flex items-center gap-2 text-sm text-gray-400">
                                                            {item.title}
                                                            <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                                                                Coming Soon
                                                            </span>
                                                        </span>
                                                    ) : (
                                                        <Link
                                                            href={item.href}
                                                            className="flex items-center gap-2 text-sm text-lewis-body hover:text-lewis-blue transition-colors"
                                                        >
                                                            {item.title}
                                                            <ArrowRight className="h-3 w-3" />
                                                        </Link>
                                                    )}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Blog Placeholder */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="text-center max-w-2xl mx-auto">
                        <HelpCircle className="h-12 w-12 text-lewis-blue/50 mx-auto mb-6" />
                        <h2 className="text-lewis-ink mb-4">Blog Coming Soon</h2>
                        <p className="text-lewis-body mb-6">
                            We're working on helpful articles about insurance in Florida.
                            Check back soon for tips, guides, and industry news.
                        </p>
                        <Button asChild variant="outline" className="rounded-full">
                            <Link href="/contact">
                                Have a Question? Ask Us
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTABand />
        </>
    )
}
