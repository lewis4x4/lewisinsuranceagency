import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import {
    CheckCircle2,
    FileText,
    Phone,
    Users,
    ArrowRight,
    Calendar,
    Shield,
    ClipboardList,
} from "lucide-react"
import { CTABand } from "@/components/sections"
import { siteConfig } from "@/config/site"
import {
    generateFAQSchema,
    generateBreadcrumbSchema,
    generateServiceSchema,
    SchemaScripts,
    organizationSchema,
} from "@/lib/schema"

const baseUrl = `https://${siteConfig.domain}`

export const metadata: Metadata = {
    title: "Insurance Renewal Review in Florida | Lewis Insurance",
    description:
        "Get a free insurance renewal review. Understand your rate changes, compare options from multiple carriers, and ensure you have the right coverage for your Florida home, auto, or mobile home.",
    alternates: {
        canonical: `${baseUrl}/renewal-review`,
    },
    openGraph: {
        title: "Insurance Renewal Review in Florida | Lewis Insurance",
        description:
            "Get a free insurance renewal review. Understand your rate changes, compare options from multiple carriers.",
        url: `${baseUrl}/renewal-review`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Insurance Renewal Review in Florida | Lewis Insurance",
        description:
            "Get a free insurance renewal review. Understand your rate changes, compare options from multiple carriers.",
    },
}

const faqs = [
    {
        question: "When should I review my insurance policy?",
        answer: "Review your policy at least 30 days before your renewal date. This gives you time to compare options, ask questions, and make changes if needed. Also review after major life events like buying a home, getting married, or adding a teen driver.",
    },
    {
        question: "Why did my insurance rate increase at renewal?",
        answer: "Florida insurance rates can change due to many factors: carrier rate filings, claims history, changes in your property, roof age, credit-based insurance scores, inflation in construction costs, and increased storm risk. We can review your renewal to identify the specific reasons and explore alternatives.",
    },
    {
        question: "What documents do I need for a renewal review?",
        answer: "Bring your current declarations page (the summary page of your policy showing coverages and premiums), your renewal notice if you received one, and any recent inspection reports (4-point, wind mitigation, roof certification).",
    },
    {
        question: "Can you help me find a lower rate at renewal?",
        answer: "As an independent agency, we work with multiple carriers. We can quote your renewal with different companies to find competitive rates. We also look for discounts you may qualify for, like wind mitigation credits or bundling discounts.",
    },
    {
        question: "What if my carrier is leaving Florida or non-renewing my policy?",
        answer: "This has become common in Florida. Don't panic—we help clients find replacement coverage regularly. Contact us as soon as you receive a non-renewal notice so we have time to shop options before your current policy expires.",
    },
    {
        question: "Is a renewal review really free?",
        answer: "Yes. We're paid by the insurance carriers when you buy a policy, not by you for advice. A renewal review costs you nothing and can help you understand your coverage better—whether or not you make any changes.",
    },
]

const whatToBring = [
    {
        title: "Declarations Page",
        description: "The summary page showing your coverages, limits, and premium",
        icon: FileText,
    },
    {
        title: "Renewal Notice",
        description: "If you received one from your carrier showing new rates",
        icon: Calendar,
    },
    {
        title: "Driver Information",
        description: "For auto: driver's license numbers and dates of birth",
        icon: Users,
    },
    {
        title: "Inspection Reports",
        description: "Wind mitigation, 4-point, or roof certification if you have them",
        icon: ClipboardList,
    },
]

const relatedResources = [
    {
        title: "Auto Coverage Checklist",
        href: "/auto-coverage-checklist",
        description: "Review what your Florida auto policy should include",
    },
    {
        title: "Homeowners Coverage Checklist",
        href: "/homeowners-coverage-checklist",
        description: "Ensure your home insurance covers what matters",
    },
    {
        title: "Mobile Home Coverage Checklist",
        href: "/mobile-home-coverage-checklist",
        description: "Special considerations for manufactured homes",
    },
    {
        title: "Why Use a Local Agent",
        href: "/why-local-agent",
        description: "The benefits of working with an independent agency",
    },
]

export default function RenewalReviewPage() {
    const serviceSchema = generateServiceSchema({
        name: "Insurance Renewal Review",
        description:
            "Free insurance policy renewal review service. Compare coverage options from multiple carriers for Florida homeowners, auto, and mobile home insurance.",
        slug: "renewal-review",
        category: "personal",
    })

    const faqSchema = generateFAQSchema(faqs)

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Renewal Review", url: `${baseUrl}/renewal-review` },
    ])

    return (
        <>
            <SchemaScripts schemas={[organizationSchema, serviceSchema, faqSchema, breadcrumbSchema]} />

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
                        <li className="text-lewis-blue font-medium">Renewal Review</li>
                    </ol>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-gradient py-16 md:py-24">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-4 bg-lewis-blue/10 text-lewis-blue">
                            Free Service
                        </Badge>
                        <h1 className="text-lewis-ink mb-6">
                            Insurance Renewal Review in Florida
                        </h1>

                        {/* Answer Box */}
                        <div className="bg-white rounded-xl shadow-sm border border-lewis-border p-6 text-left mb-8">
                            <div className="flex items-start gap-3">
                                <Shield className="h-6 w-6 text-lewis-blue flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-lg text-lewis-ink font-medium mb-2">
                                        The Short Answer
                                    </p>
                                    <p className="text-lewis-body">
                                        A renewal review helps you understand why your rate changed, whether your
                                        coverage still fits your needs, and if there are better options available.
                                        As an independent agency, we can compare quotes from multiple carriers to
                                        find you the right coverage at a competitive price.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Takeaways */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Compare multiple carriers</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Identify missing coverage</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Find available discounts</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="btn-primary rounded-full">
                                <Link href="/contact">
                                    Request a Free Review
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="rounded-full">
                                <a href={`tel:${siteConfig.contact.phone.main.replace(/[^0-9]/g, "")}`}>
                                    <Phone className="mr-2 h-4 w-4" />
                                    {siteConfig.contact.phone.main}
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Renewals Change */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-lewis-ink mb-6">
                            Why Renewals Change in Florida
                        </h2>
                        <div className="prose prose-lg max-w-none text-lewis-body">
                            <p>
                                Florida&apos;s insurance market is among the most dynamic in the country. Your
                                renewal premium can change for reasons that have nothing to do with you filing
                                a claim. Carriers regularly adjust their rates based on statewide loss
                                experience, reinsurance costs, and regulatory changes.
                            </p>
                            <p>
                                Property-specific factors also matter. As your roof ages, some carriers may
                                increase rates or decline to renew. Changes in your credit-based insurance
                                score, updates to hurricane risk models, and inflation in construction costs
                                can all affect what you pay.
                            </p>
                            <p>
                                The key is not to simply accept your renewal as-is. A review gives you the
                                information you need to make an informed decision—whether that means staying
                                with your current carrier, switching to a new one, or adjusting your coverage
                                to better fit your budget.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What to Bring */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <h2 className="text-2xl font-bold text-lewis-ink text-center mb-8">
                        What to Bring to Your Review
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {whatToBring.map((item) => (
                            <Card key={item.title} className="text-center">
                                <CardContent className="pt-6">
                                    <div className="w-12 h-12 rounded-full bg-lewis-blue/10 flex items-center justify-center mx-auto mb-4">
                                        <item.icon className="h-6 w-6 text-lewis-blue" />
                                    </div>
                                    <h3 className="font-semibold text-lewis-ink mb-2">{item.title}</h3>
                                    <p className="text-sm text-lewis-body">{item.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* How We Help */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-lewis-ink mb-6">
                            How We Compare Options as an Independent Agency
                        </h2>
                        <div className="prose prose-lg max-w-none text-lewis-body mb-8">
                            <p>
                                Unlike captive agents who represent a single company, we work with multiple
                                insurance carriers. This means we can shop your renewal with different companies
                                to find competitive rates and coverage options.
                            </p>
                            <p>
                                During your review, we&apos;ll explain each coverage on your policy in plain
                                English, identify any gaps that could leave you exposed, and look for discounts
                                you may qualify for—like wind mitigation credits, bundling savings, or
                                protective device discounts.
                            </p>
                            <p>
                                We&apos;ve been helping Florida families and businesses with their insurance since
                                1981. We understand the local market, the carriers that work well in our area,
                                and the specific coverage needs that come with living in Florida.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coverage Checklists */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <h2 className="text-2xl font-bold text-lewis-ink text-center mb-4">
                        Prepare for Your Review
                    </h2>
                    <p className="text-center text-lewis-body mb-8 max-w-2xl mx-auto">
                        Use our coverage checklists to think through what matters most before we meet.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <Link href="/auto-coverage-checklist" className="group">
                            <Card className="h-full transition-shadow hover:shadow-md">
                                <CardHeader>
                                    <CardTitle className="text-lg group-hover:text-lewis-blue transition-colors">
                                        Auto Insurance Checklist
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-lewis-body mb-4">
                                        Review liability limits, PIP options, uninsured motorist coverage, and
                                        more.
                                    </p>
                                    <span className="text-lewis-blue text-sm font-medium flex items-center gap-1">
                                        View Checklist
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/homeowners-coverage-checklist" className="group">
                            <Card className="h-full transition-shadow hover:shadow-md">
                                <CardHeader>
                                    <CardTitle className="text-lg group-hover:text-lewis-blue transition-colors">
                                        Homeowners Checklist
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-lewis-body mb-4">
                                        Dwelling coverage, deductibles, flood gaps, and Florida-specific
                                        considerations.
                                    </p>
                                    <span className="text-lewis-blue text-sm font-medium flex items-center gap-1">
                                        View Checklist
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </CardContent>
                            </Card>
                        </Link>
                        <Link href="/mobile-home-coverage-checklist" className="group">
                            <Card className="h-full transition-shadow hover:shadow-md">
                                <CardHeader>
                                    <CardTitle className="text-lg group-hover:text-lewis-blue transition-colors">
                                        Mobile Home Checklist
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-lewis-body mb-4">
                                        Tie-down requirements, attached structures, and manufactured home
                                        specifics.
                                    </p>
                                    <span className="text-lewis-blue text-sm font-medium flex items-center gap-1">
                                        View Checklist
                                        <ArrowRight className="h-4 w-4" />
                                    </span>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-lewis-ink text-center mb-8">
                            Common Questions About Renewal Reviews
                        </h2>
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`faq-${index}`}>
                                    <AccordionTrigger className="text-left text-lewis-ink hover:text-lewis-blue">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-lewis-body">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Related Resources */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <h2 className="text-2xl font-bold text-lewis-ink text-center mb-8">
                        Related Resources
                    </h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                        {relatedResources.map((resource) => (
                            <Link key={resource.href} href={resource.href} className="group">
                                <Card className="h-full transition-shadow hover:shadow-md">
                                    <CardContent className="pt-6">
                                        <h3 className="font-semibold text-lewis-ink group-hover:text-lewis-blue transition-colors mb-2">
                                            {resource.title}
                                        </h3>
                                        <p className="text-sm text-lewis-body">{resource.description}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTABand />
        </>
    )
}
