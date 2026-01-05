import Link from "next/link"
import {
    BookOpen,
    Calculator,
    FileText,
    ArrowRight,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CTABand } from "@/components/sections"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Florida Insurance Resources & Guides | Lewis Insurance",
    description: "Learn about insurance in Florida. Guides, articles, and tools to help you understand your coverage options and make informed decisions.",
    alternates: {
        canonical: "https://lewisinsurance.com/resources",
    },
}

const resourceCategories = [
    {
        title: "Personal Insurance Guides",
        description: "In-depth guides for homeowners, drivers, and families.",
        icon: BookOpen,
        items: [
            { title: "Florida Homeowners Insurance Guide", href: "/blog/florida-homeowners-insurance-guide-2025", comingSoon: false },
            { title: "Understanding Flood Insurance in Florida", href: "/blog/understanding-flood-insurance-florida", comingSoon: false },
            { title: "Florida Auto Insurance Requirements", href: "/blog/florida-auto-insurance-requirements", comingSoon: false },
            { title: "Hurricane Season Checklist", href: "/blog/hurricane-season-insurance-checklist", comingSoon: false },
            { title: "Wind Mitigation Inspection Guide", href: "/blog/wind-mitigation-inspection-guide", comingSoon: false },
        ],
    },
    {
        title: "Business Insurance Guides",
        description: "Essential resources for Florida business owners.",
        icon: FileText,
        items: [
            { title: "Business Insurance 101", href: "/blog/business-insurance-101-florida", comingSoon: false },
            { title: "General Liability Insurance", href: "/business/general-liability-florida", comingSoon: false },
            { title: "Workers' Compensation", href: "/business/workers-compensation-florida", comingSoon: false },
            { title: "Cyber Liability Insurance", href: "/business/cyber-liability-florida", comingSoon: false },
            { title: "View All Business Coverage", href: "/business", comingSoon: false },
        ],
    },
    {
        title: "Tools & Forms",
        description: "Calculators and checklists to help you manage your coverage.",
        icon: Calculator,
        items: [
            { title: "Coverage Needs Calculator", href: "/tools/coverage-calculator", comingSoon: false },
            { title: "Home Inventory Checklist", href: "/tools/home-inventory", comingSoon: false },
            { title: "Hurricane Prep Checklist", href: "/tools/hurricane-prep", comingSoon: false },
            { title: "View All Tools", href: "/tools", comingSoon: false },
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

            {/* Blog CTA */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="text-center max-w-2xl mx-auto">
                        <BookOpen className="h-12 w-12 text-lewis-blue mx-auto mb-6" />
                        <h2 className="text-lewis-ink mb-4">Insurance Blog</h2>
                        <p className="text-lewis-body mb-6">
                            Read our latest articles about Florida insurance, hurricane preparedness,
                            coverage tips, and more from our team of licensed agents.
                        </p>
                        <Button asChild className="btn-primary rounded-full">
                            <Link href="/blog">
                                Visit Our Blog
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTABand />
        </>
    );
}
