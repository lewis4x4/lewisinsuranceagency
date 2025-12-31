import Link from "next/link"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    Users,
    Shield,
    Phone,
    MapPin,
    CheckCircle,
    XCircle,
    ArrowRight,
    Building2,
    HeartHandshake,
    Scale,
    HelpCircle,
} from "lucide-react"
import { CTABand } from "@/components/sections"
import { siteConfig } from "@/config/site"
import { generateFAQSchema, generateBreadcrumbSchema, SchemaScripts } from "@/lib/schema"

const baseUrl = `https://${siteConfig.domain}`

export const metadata: Metadata = {
    title: "Local Insurance Agent vs Direct Insurance | Lewis Insurance",
    description: "Compare Lewis Insurance vs direct/online insurance. Get multi-carrier options, Florida-specific guidance, renewal reviews, and claims advocacy.",
    alternates: {
        canonical: `${baseUrl}/why-local-agent`,
    },
    openGraph: {
        title: "Local Insurance Agent vs Direct Insurance | Lewis Insurance",
        description: "Compare Lewis Insurance vs direct/online insurance. Get multi-carrier options, Florida-specific guidance, renewal reviews, and claims advocacy.",
        url: `${baseUrl}/why-local-agent`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Local Insurance Agent vs Direct Insurance | Lewis Insurance",
        description: "Compare Lewis Insurance vs direct/online insurance. Get multi-carrier options, Florida-specific guidance, renewal reviews, and claims advocacy.",
    },
}

const benefits = [
    {
        icon: Users,
        title: "Personal Relationship",
        description: "Know your agent by name. We remember your family, your situation, and your needs—not just your policy number.",
    },
    {
        icon: Scale,
        title: "Multiple Carrier Options",
        description: "We compare quotes from 20+ insurance companies to find you the best coverage at the best price.",
    },
    {
        icon: HeartHandshake,
        title: "Claims Advocacy",
        description: "When you need to file a claim, we help you understand the process and communicate clearly with the carrier.",
    },
    {
        icon: MapPin,
        title: "Local Knowledge",
        description: "We understand Florida's unique insurance challenges—hurricanes, flood zones, wind mitigation, and more.",
    },
    {
        icon: Phone,
        title: "Real Human Support",
        description: "Call us and talk to a real person who knows your policy. No automated phone trees or overseas call centers.",
    },
    {
        icon: Shield,
        title: "Year-Round Service",
        description: "We proactively review your coverage annually to ensure you're properly protected as your life changes.",
    },
]

const comparisonData = [
    {
        feature: "Multiple carrier options",
        local: true,
        direct: false,
    },
    {
        feature: "Personalized coverage advice",
        local: true,
        direct: false,
    },
    {
        feature: "Claims assistance & advocacy",
        local: true,
        direct: false,
    },
    {
        feature: "Annual policy reviews",
        local: true,
        direct: false,
    },
    {
        feature: "Local office to visit",
        local: true,
        direct: false,
    },
    {
        feature: "Same agent every time",
        local: true,
        direct: false,
    },
    {
        feature: "Understanding of local risks",
        local: true,
        direct: false,
    },
    {
        feature: "Bundle discounts across carriers",
        local: true,
        direct: false,
    },
    {
        feature: "Wind mitigation / inspection guidance (Florida)",
        local: true,
        direct: false,
    },
    {
        feature: "Flood education & zone awareness",
        local: true,
        direct: false,
    },
    {
        feature: "Renewal re-shopping to fight rate increases",
        local: true,
        direct: false,
    },
]

const faqs = [
    {
        question: "What's the difference between an independent agent and direct insurance?",
        answer: "An independent agent can compare coverage across multiple insurance companies to find the best fit for your needs. Direct insurance typically offers only one company's products.",
    },
    {
        question: "Does using a local agent cost more?",
        answer: "In most cases, no. The premium is set by the carrier, and an independent agent can often help you compare options to find better value for your coverage needs.",
    },
    {
        question: "Can Lewis Insurance help if I have a claim?",
        answer: "Yes. We can help you understand the claim process, gather the right documentation, and communicate clearly so you know what to expect. Claims decisions are made by the carrier, but we help you navigate the steps.",
    },
    {
        question: "What Florida-specific issues should my policy consider?",
        answer: "Florida policies often involve wind and hurricane deductibles, roof-related underwriting, and flood considerations depending on your area. We help you understand these factors so your coverage matches your real risk.",
    },
    {
        question: "Will you re-shop my policy at renewal?",
        answer: "We can review your renewal and compare options when it makes sense—especially when rates change or your situation changes. The goal is to keep coverage strong while looking for better value.",
    },
    {
        question: "What do you need to compare my options?",
        answer: "A current declarations page is the fastest start. If you have it, we'll also review key details like deductibles, drivers/vehicles, property details, and any recent changes.",
    },
]

export default function WhyLocalAgentPage() {
    // Generate schemas
    const faqSchema = generateFAQSchema(faqs)
    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Why Local Agent", url: `${baseUrl}/why-local-agent` },
    ])

    return (
        <>
            {/* JSON-LD Schemas */}
            <SchemaScripts schemas={[faqSchema, breadcrumbSchema]} />

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
                        <li className="text-lewis-blue font-medium">
                            Why Local Agent
                        </li>
                    </ol>
                </div>
            </nav>

            {/* Hero */}
            <section className="hero-gradient py-16 md:py-24">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-4 bg-lewis-blue/10 text-lewis-blue border-lewis-blue/20">
                            The Independent Agent Advantage
                        </Badge>
                        <h1 className="text-lewis-ink mb-6">
                            Why Choose a Local Insurance Agent?
                        </h1>
                        <p className="text-xl text-lewis-body mb-8">
                            In a world of online quotes and 1-800 numbers, there's still no substitute
                            for a local expert who knows you, your family, and your community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="btn-primary rounded-full">
                                <Link href="/contact">
                                    Get a Free Quote
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="rounded-full">
                                <Link href={`tel:${siteConfig.contact.phone.main}`}>
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call {siteConfig.contact.phone.main}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem with Direct Insurance - Softened Tone */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                                <Building2 className="h-6 w-6 text-red-600" />
                            </div>
                            <h2 className="text-lewis-ink">Understanding Direct Insurance</h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-lewis-body">
                            <p>
                                Those catchy commercials make it seem so simple: "15 minutes could save you 15%."
                                But what they don't always explain is what happens after you buy the policy.
                            </p>
                            <p>
                                Direct insurance is built for speed and scale. When you need guidance on
                                coverage decisions—or help navigating a claim—having a local independent
                                agent can add clarity and advocacy. Whether you're looking for{" "}
                                <Link href="/personal/homeowners-insurance-florida" className="text-lewis-blue hover:underline">
                                    homeowners insurance
                                </Link>,{" "}
                                <Link href="/personal/auto-insurance-florida" className="text-lewis-blue hover:underline">
                                    auto insurance
                                </Link>, or{" "}
                                <Link href="/personal/flood-insurance-florida" className="text-lewis-blue hover:underline">
                                    flood insurance
                                </Link>, the personal guidance matters.
                            </p>
                            <p>
                                <strong>There's a better way.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="text-center mb-12">
                        <h2 className="text-lewis-ink mb-4">The Local Agent Difference</h2>
                        <p className="text-xl text-lewis-body max-w-2xl mx-auto">
                            Working with an independent local agent means you get personalized service
                            and the power of choice—all in one place.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit) => (
                            <Card key={benefit.title} className="card-hover">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 rounded-full bg-lewis-orange/10 flex items-center justify-center mb-4">
                                        <benefit.icon className="h-6 w-6 text-lewis-orange" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-lewis-ink mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-lewis-body">
                                        {benefit.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-8">
                            <h2 className="text-lewis-ink mb-4">Local Agent vs. Direct Insurance</h2>
                            <p className="text-xl text-lewis-body">
                                See the difference for yourself.
                            </p>
                        </div>

                        {/* Quotable Summary - Section B */}
                        <div className="prose prose-lg max-w-none text-lewis-body mb-8">
                            <p>
                                Lewis Insurance is a Florida-based independent agency. That means we can
                                compare multiple carriers, explain Florida-specific coverages, and help
                                you make confident decisions—not just click through a one-size-fits-all quote.
                            </p>
                            <p>
                                Direct/online insurance can be convenient, but it typically offers fewer
                                choices and less personal guidance. If you want coverage tailored to your
                                household and your local risks, a local independent agent can make a real difference.
                            </p>
                        </div>

                        {/* Enhanced Table with Accessibility */}
                        <Card>
                            <CardContent className="p-0">
                                <div className="overflow-x-auto">
                                    <table className="w-full" role="table">
                                        <thead>
                                            <tr className="border-b border-lewis-border">
                                                <th scope="col" className="text-left p-4 font-semibold text-lewis-ink">
                                                    Feature
                                                </th>
                                                <th scope="col" className="text-center p-4 font-semibold text-lewis-blue bg-lewis-blue/5">
                                                    Lewis Insurance (Independent Agent)
                                                </th>
                                                <th scope="col" className="text-center p-4 font-semibold text-lewis-body">
                                                    Direct/Online Insurance
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {comparisonData.map((row, index) => (
                                                <tr
                                                    key={row.feature}
                                                    className={index < comparisonData.length - 1 ? "border-b border-lewis-border" : ""}
                                                >
                                                    <th scope="row" className="p-4 text-lewis-body font-normal text-left">
                                                        {row.feature}
                                                    </th>
                                                    <td className="p-4 text-center bg-lewis-blue/5">
                                                        {row.local ? (
                                                            <CheckCircle
                                                                className="h-5 w-5 text-green-600 mx-auto"
                                                                aria-label="Included"
                                                            />
                                                        ) : (
                                                            <XCircle
                                                                className="h-5 w-5 text-red-500 mx-auto"
                                                                aria-label="Not typically included"
                                                            />
                                                        )}
                                                        <span className="sr-only">
                                                            {row.local ? "Included" : "Not typically included"}
                                                        </span>
                                                    </td>
                                                    <td className="p-4 text-center">
                                                        {row.direct ? (
                                                            <CheckCircle
                                                                className="h-5 w-5 text-green-600 mx-auto"
                                                                aria-label="Included"
                                                            />
                                                        ) : (
                                                            <XCircle
                                                                className="h-5 w-5 text-red-500 mx-auto"
                                                                aria-label="Not typically included"
                                                            />
                                                        )}
                                                        <span className="sr-only">
                                                            {row.direct ? "Included" : "Not typically included"}
                                                        </span>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Mini-FAQ Section - Section E */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-12 h-12 rounded-full bg-lewis-blue/10 flex items-center justify-center">
                                <HelpCircle className="h-6 w-6 text-lewis-blue" />
                            </div>
                            <h2 className="text-lewis-ink">Local Agent vs Direct Insurance: FAQs</h2>
                        </div>

                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`faq-${index}`}
                                    className="bg-white rounded-lg shadow-sm border border-lewis-border px-6"
                                >
                                    <AccordionTrigger className="text-left font-semibold text-lewis-ink hover:text-lewis-blue py-4">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-lewis-body pb-4">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>

                        {/* Link to Learn hub */}
                        <div className="mt-8 text-center">
                            <p className="text-lewis-body">
                                More questions? Visit our{" "}
                                <Link href="/learn" className="text-lewis-blue hover:underline font-medium">
                                    Insurance Learning Center
                                </Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-lewis-ink mb-6">Trusted by Florida Families Since 1981</h2>
                        <p className="text-xl text-lewis-body mb-8">
                            For over {siteConfig.trust.yearsInBusiness} years, Lewis Insurance has been helping
                            Florida families and businesses find the right coverage at the right price.
                            We're not a faceless corporation—we're your neighbors. Whether you need{" "}
                            <Link href="/personal/umbrella-insurance-florida" className="text-lewis-blue hover:underline">
                                umbrella coverage
                            </Link>{" "}
                            or help understanding your options, we're here to help.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-lewis-blue mb-1">
                                    {siteConfig.trust.yearsInBusiness}+
                                </div>
                                <div className="text-sm text-lewis-body">Years in Business</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-lewis-blue mb-1">
                                    {siteConfig.trust.carrierCount}
                                </div>
                                <div className="text-sm text-lewis-body">Insurance Carriers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-lewis-blue mb-1">
                                    {siteConfig.trust.reviewCount}
                                </div>
                                <div className="text-sm text-lewis-body">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-lewis-blue mb-1">
                                    {siteConfig.trust.averageRating}
                                </div>
                                <div className="text-sm text-lewis-body">Star Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-wrapper bg-lewis-blue text-white">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-white mb-4">Ready to Experience the Difference?</h2>
                        <p className="text-xl text-white/80 mb-8">
                            Get a free quote and see why thousands of Floridians trust Lewis Insurance
                            for their home, auto, flood, and business insurance needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="btn-accent rounded-full">
                                <Link href="/contact">
                                    Get Your Free Quote
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="rounded-full border-white text-white hover:bg-white hover:text-lewis-blue"
                            >
                                <Link href={`tel:${siteConfig.contact.phone.main}`}>
                                    <Phone className="mr-2 h-5 w-5" />
                                    {siteConfig.contact.phone.main}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Band */}
            <CTABand />
        </>
    )
}
