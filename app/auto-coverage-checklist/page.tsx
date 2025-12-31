import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
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
    AlertTriangle,
    Phone,
    ArrowRight,
    Shield,
    Car,
} from "lucide-react"
import { CTABand } from "@/components/sections"
import { siteConfig } from "@/config/site"
import {
    generateFAQSchema,
    generateBreadcrumbSchema,
    SchemaScripts,
    organizationSchema,
} from "@/lib/schema"

const baseUrl = `https://${siteConfig.domain}`

export const metadata: Metadata = {
    title: "Florida Auto Insurance Coverage Checklist | Lewis Insurance",
    description:
        "Review your Florida auto insurance coverage with this checklist. Understand PIP, liability limits, uninsured motorist, comprehensive, and collision options.",
    alternates: {
        canonical: `${baseUrl}/auto-coverage-checklist`,
    },
    openGraph: {
        title: "Florida Auto Insurance Coverage Checklist | Lewis Insurance",
        description:
            "Review your Florida auto insurance coverage with this checklist. Understand PIP, liability, and more.",
        url: `${baseUrl}/auto-coverage-checklist`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Florida Auto Insurance Coverage Checklist | Lewis Insurance",
        description:
            "Review your Florida auto insurance coverage with this checklist. Understand PIP, liability, and more.",
    },
}

const checklistItems = [
    {
        title: "Bodily Injury Liability",
        description: "Pays if you injure someone in an accident you cause. Florida requires $25,000 per person / $50,000 per accident as minimum, but higher limits offer better protection.",
        tip: "Consider at least $100,000/$300,000 if you have assets to protect.",
    },
    {
        title: "Property Damage Liability",
        description: "Pays for damage you cause to other people's property. Florida minimum is $10,000, but this barely covers a fender bender with a newer vehicle.",
        tip: "Higher limits cost relatively little more and provide much better protection.",
    },
    {
        title: "Personal Injury Protection (PIP)",
        description: "Florida requires $10,000 in PIP coverage. This pays your medical bills regardless of fault, up to your policy limit.",
        tip: "Consider adding Medical Payments (MedPay) coverage for additional protection.",
    },
    {
        title: "Uninsured Motorist Coverage",
        description: "Protects you if you're hit by someone without insurance or who flees the scene. Florida has one of the highest rates of uninsured drivers.",
        tip: "This coverage is optional but highly recommended for Florida drivers.",
    },
    {
        title: "Underinsured Motorist Coverage",
        description: "Covers the gap when the at-fault driver doesn't have enough insurance to pay for your injuries or damages.",
        tip: "Consider stacking this coverage if you have multiple vehicles.",
    },
    {
        title: "Collision Coverage",
        description: "Pays to repair or replace your vehicle after an accident, regardless of fault. Required if you have a loan or lease.",
        tip: "Consider dropping if your vehicle's value is low relative to your deductible.",
    },
    {
        title: "Comprehensive Coverage",
        description: "Covers non-collision damage: theft, vandalism, weather, fire, animal strikes. Important in Florida for hurricane and flood damage to your vehicle.",
        tip: "Usually affordable and valuable for weather-related protection.",
    },
    {
        title: "Rental Reimbursement",
        description: "Pays for a rental car while yours is being repaired after a covered claim.",
        tip: "Inexpensive coverage that provides real convenience when you need it.",
    },
    {
        title: "Roadside Assistance/Towing",
        description: "Covers towing, jump starts, lockout service, flat tire changes, and emergency fuel delivery.",
        tip: "Compare to AAA or other memberships—sometimes bundling is more cost-effective.",
    },
    {
        title: "Gap Coverage",
        description: "Pays the difference between your car's value and what you owe on a loan or lease if it's totaled.",
        tip: "Especially important if you financed with little or no down payment.",
    },
]

const commonMistakes = [
    "Keeping state minimum limits when you have significant assets to protect",
    "Declining uninsured motorist coverage in a state with high uninsured driver rates",
    "Not understanding how PIP coordinates with health insurance",
    "Letting coverage lapse even briefly, which can increase future rates",
    "Not reporting all household drivers to your insurance company",
    "Choosing a deductible you can't afford to pay in the event of a claim",
]

const faqs = [
    {
        question: "What auto insurance is required in Florida?",
        answer: "Florida requires $10,000 in Personal Injury Protection (PIP) and $10,000 in Property Damage Liability (PDL). If you cause an accident with injuries, you must also carry Bodily Injury Liability of at least $25,000/$50,000.",
    },
    {
        question: "Is uninsured motorist coverage worth it in Florida?",
        answer: "Given Florida's high rate of uninsured drivers, uninsured motorist coverage is strongly recommended. It protects you if you're injured by a driver who has no insurance or flees the scene.",
    },
    {
        question: "What does stacking uninsured motorist coverage mean?",
        answer: "Stacking allows you to multiply your uninsured motorist coverage by the number of vehicles on your policy. If you have $50,000 UM coverage and three cars, stacked coverage gives you up to $150,000 in protection.",
    },
    {
        question: "Should I drop collision on an older car?",
        answer: "Consider your vehicle's value versus your deductible. If your car is worth $3,000 and your deductible is $1,000, you'd only receive $2,000 after a total loss. Think about whether that payout is worth the ongoing premium cost.",
    },
    {
        question: "How does PIP work with health insurance?",
        answer: "PIP is primary for auto accident injuries—it pays first. You can elect to have your health insurance be primary through a PIP deductible, which may lower your auto premium but means you'll use health insurance first.",
    },
]

const relatedResources = [
    {
        title: "Renewal Review",
        href: "/renewal-review",
        description: "Get a free policy review before your renewal",
    },
    {
        title: "Auto Insurance",
        href: "/personal/auto-insurance-florida",
        description: "Learn more about Florida auto coverage options",
    },
    {
        title: "Why Local Agent",
        href: "/why-local-agent",
        description: "Benefits of working with an independent agency",
    },
    {
        title: "Insurance FAQ",
        href: "/learn",
        description: "Common questions about Florida insurance",
    },
]

export default function AutoCoverageChecklistPage() {
    const faqSchema = generateFAQSchema(faqs)

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Auto Coverage Checklist", url: `${baseUrl}/auto-coverage-checklist` },
    ])

    return (
        <>
            <SchemaScripts schemas={[organizationSchema, faqSchema, breadcrumbSchema]} />

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
                        <li className="text-lewis-blue font-medium">Auto Coverage Checklist</li>
                    </ol>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-gradient py-16 md:py-24">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-4 bg-green-100 text-green-800">
                            Auto Insurance
                        </Badge>
                        <h1 className="text-lewis-ink mb-6">
                            Florida Auto Insurance Coverage Checklist
                        </h1>

                        {/* Answer Box */}
                        <div className="bg-white rounded-xl shadow-sm border border-lewis-border p-6 text-left mb-8">
                            <div className="flex items-start gap-3">
                                <Car className="h-6 w-6 text-lewis-blue flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-lg text-lewis-ink font-medium mb-2">
                                        The Short Answer
                                    </p>
                                    <p className="text-lewis-body">
                                        Florida requires PIP and property damage liability, but these minimums
                                        leave significant gaps. Use this checklist to review your current coverage
                                        and identify areas where you may want more protection—especially
                                        uninsured motorist coverage.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Takeaways */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Florida requires PIP + PDL</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>UM coverage highly recommended</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Consider higher liability limits</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="btn-primary rounded-full">
                                <Link href="/contact">
                                    Get a Free Quote
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

            {/* Checklist Section */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-lewis-ink mb-8 text-center">
                            Coverage Checklist
                        </h2>
                        <div className="space-y-4">
                            {checklistItems.map((item, index) => (
                                <Card key={index}>
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-8 h-8 rounded-full bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                                <Shield className="h-4 w-4 text-lewis-blue" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold text-lewis-ink mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-lewis-body text-sm mb-3">
                                                    {item.description}
                                                </p>
                                                <div className="bg-lewis-page rounded-lg p-3">
                                                    <p className="text-sm text-lewis-ink">
                                                        <strong>Tip:</strong> {item.tip}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Mistakes */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-lewis-ink mb-6 text-center">
                            Common Mistakes to Avoid
                        </h2>
                        <Card className="border-amber-200 bg-amber-50">
                            <CardContent className="p-6">
                                <div className="flex items-start gap-4">
                                    <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
                                    <ul className="space-y-3">
                                        {commonMistakes.map((mistake, index) => (
                                            <li key={index} className="text-lewis-body flex items-start gap-2">
                                                <span className="text-amber-600 font-bold">-</span>
                                                {mistake}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* What to Review at Renewal */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-lewis-ink mb-6">
                            What to Review at Renewal
                        </h2>
                        <div className="prose prose-lg max-w-none text-lewis-body">
                            <p>
                                Your auto insurance needs can change from year to year. At each renewal,
                                consider whether anything has changed in your situation:
                            </p>
                            <ul>
                                <li>
                                    <strong>New drivers:</strong> Adding a teen driver or removing a driver who
                                    moved out
                                </li>
                                <li>
                                    <strong>Vehicle changes:</strong> New car purchase, paid off a loan, or vehicle
                                    depreciation
                                </li>
                                <li>
                                    <strong>Life changes:</strong> Marriage, divorce, retirement, or change in
                                    commute
                                </li>
                                <li>
                                    <strong>Coverage gaps:</strong> Do your limits still match your assets and
                                    lifestyle?
                                </li>
                                <li>
                                    <strong>Discount eligibility:</strong> Good driver discounts, bundling with home,
                                    or new safety features
                                </li>
                            </ul>
                            <p>
                                Bring your declarations page to a <Link href="/renewal-review" className="text-lewis-blue hover:underline">renewal review</Link> and
                                we&apos;ll walk through your coverage together.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-lewis-ink text-center mb-8">
                            Frequently Asked Questions
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
            <section className="section-wrapper">
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
