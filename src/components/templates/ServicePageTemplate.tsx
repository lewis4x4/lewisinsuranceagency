import Link from "next/link"
import {
    CheckCircle,
    ArrowRight,
    AlertTriangle,
    HelpCircle,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { HeroForm } from "@/components/forms"
import { CTABand } from "@/components/sections"
import { cn } from "@/lib/utils"

export interface ServicePageData {
    // SEO
    title: string
    description: string

    // Hero
    badge: string
    headline: string
    subheadline: string

    // Content
    overview: string[]
    coverageIncludes: {
        title: string
        description: string
    }[]
    commonExclusions?: string[]
    floridaSpecific?: {
        title: string
        content: string
    }[]

    // FAQ
    faqs: {
        question: string
        answer: string
    }[]

    // Related
    relatedCoverage: {
        title: string
        href: string
        description: string
    }[]

    // Page info
    slug: string
    category: "personal" | "business"
}

interface ServicePageTemplateProps {
    data: ServicePageData
}

export function ServicePageTemplate({ data }: ServicePageTemplateProps) {
    return (
        <>
            {/* Breadcrumbs */}
            <nav className="bg-white border-b border-lewis-border" aria-label="Breadcrumb">
                <div className="container-lg py-3">
                    <ol className="flex items-center gap-2 text-sm">
                        <li>
                            <Link href="/" className="text-lewis-body hover:text-lewis-blue">
                                Home
                            </Link>
                        </li>
                        <li className="text-lewis-border">/</li>
                        <li>
                            <Link
                                href={data.category === "personal" ? "/personal" : "/business"}
                                className="text-lewis-body hover:text-lewis-blue"
                            >
                                {data.category === "personal" ? "Personal" : "Business"}
                            </Link>
                        </li>
                        <li className="text-lewis-border">/</li>
                        <li className="text-lewis-blue font-medium">{data.title}</li>
                    </ol>
                </div>
            </nav>

            {/* Hero */}
            <section className="hero-gradient py-12 md:py-16">
                <div className="container-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Content */}
                        <div>
                            <Badge className="mb-4 bg-lewis-blue/10 text-lewis-blue border-lewis-blue/20">
                                {data.badge}
                            </Badge>
                            <h1 className="text-lewis-ink mb-4">{data.headline}</h1>
                            <p className="text-xl text-lewis-body mb-6">{data.subheadline}</p>

                            {/* Quick benefits */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Free Quotes
                                </Badge>
                                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Compare Carriers
                                </Badge>
                                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Local Experts
                                </Badge>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                            <h2 className="text-lg font-semibold text-lewis-ink mb-4">
                                Get Your Free Quote
                            </h2>
                            <HeroForm source={`service-${data.slug}`} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Overview */}
                            <div>
                                <h2 className="text-lewis-ink mb-6">Overview</h2>
                                <div className="prose prose-lg max-w-none">
                                    {data.overview.map((paragraph, index) => (
                                        <p key={index} className="text-lewis-body">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* What's Covered */}
                            <div>
                                <h2 className="text-lewis-ink mb-6">What's Typically Covered</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {data.coverageIncludes.map((item, index) => (
                                        <Card key={index}>
                                            <CardContent className="p-4">
                                                <div className="flex items-start gap-3">
                                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <div>
                                                        <h3 className="font-medium text-lewis-ink text-sm">
                                                            {item.title}
                                                        </h3>
                                                        <p className="text-xs text-lewis-body mt-1">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            {/* Exclusions */}
                            {data.commonExclusions && data.commonExclusions.length > 0 && (
                                <div>
                                    <h2 className="text-lewis-ink mb-6">Common Exclusions</h2>
                                    <Card>
                                        <CardContent className="p-6">
                                            <div className="flex items-start gap-4">
                                                <AlertTriangle className="h-6 w-6 text-amber-500 flex-shrink-0" />
                                                <div>
                                                    <p className="text-sm text-lewis-body mb-4">
                                                        These items are typically not covered by standard policies.
                                                        Ask us about additional coverage options.
                                                    </p>
                                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                        {data.commonExclusions.map((item, index) => (
                                                            <li key={index} className="text-sm text-lewis-body flex items-center gap-2">
                                                                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                                                                {item}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            )}

                            {/* Florida-Specific */}
                            {data.floridaSpecific && data.floridaSpecific.length > 0 && (
                                <div>
                                    <h2 className="text-lewis-ink mb-6">Florida-Specific Considerations</h2>
                                    <div className="space-y-4">
                                        {data.floridaSpecific.map((item, index) => (
                                            <Card key={index}>
                                                <CardContent className="p-6">
                                                    <h3 className="font-semibold text-lewis-ink mb-2">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-sm text-lewis-body">{item.content}</p>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* FAQ */}
                            <div>
                                <h2 className="text-lewis-ink mb-6">Frequently Asked Questions</h2>
                                <Accordion type="single" collapsible className="space-y-4">
                                    {data.faqs.map((faq, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`item-${index}`}
                                            className="bg-white rounded-lg shadow-sm border border-lewis-border px-6"
                                        >
                                            <AccordionTrigger className="text-left text-lewis-ink font-medium py-4 hover:no-underline hover:text-lewis-blue">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-lewis-body pb-4">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Related Coverage */}
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-lewis-ink mb-4">
                                        Related Coverage
                                    </h3>
                                    <div className="space-y-3">
                                        {data.relatedCoverage.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span className="font-medium text-sm text-lewis-ink group-hover:text-lewis-blue">
                                                        {item.title}
                                                    </span>
                                                    <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-lewis-blue" />
                                                </div>
                                                <p className="text-xs text-lewis-body mt-1">{item.description}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Help Card */}
                            <Card className="bg-lewis-blue text-white">
                                <CardContent className="p-6">
                                    <HelpCircle className="h-8 w-8 mb-4 text-white/80" />
                                    <h3 className="font-semibold text-white mb-2">
                                        Need Help Deciding?
                                    </h3>
                                    <p className="text-sm text-white/80 mb-4">
                                        Not sure what coverage you need? Our team can help you understand your options.
                                    </p>
                                    <Button asChild variant="secondary" className="w-full rounded-full">
                                        <Link href="/contact">Talk to an Agent</Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTABand />
        </>
    )
}
