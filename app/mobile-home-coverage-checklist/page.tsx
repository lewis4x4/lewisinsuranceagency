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
    Home,
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
    title: "Florida Mobile Home Insurance Coverage Checklist | Lewis Insurance",
    description:
        "Review your Florida mobile home or manufactured home insurance coverage. Understand tie-down requirements, replacement cost options, and hurricane deductibles.",
    alternates: {
        canonical: `${baseUrl}/mobile-home-coverage-checklist`,
    },
    openGraph: {
        title: "Florida Mobile Home Insurance Coverage Checklist | Lewis Insurance",
        description:
            "Review your Florida mobile home insurance. Understand tie-down requirements and coverage options.",
        url: `${baseUrl}/mobile-home-coverage-checklist`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Florida Mobile Home Insurance Coverage Checklist | Lewis Insurance",
        description:
            "Review your Florida mobile home insurance. Understand tie-down requirements and coverage options.",
    },
}

const checklistItems = [
    {
        title: "Dwelling Coverage",
        description: "Covers the structure of your mobile or manufactured home. Can be replacement cost (pays to replace with similar quality) or actual cash value (depreciated value).",
        tip: "Replacement cost coverage is worth the extra premium—it pays to replace your home with a comparable new one.",
    },
    {
        title: "Year and Manufacturer",
        description: "Your home's age affects insurability. Some carriers have restrictions on homes built before certain years (often 1980 or 1990).",
        tip: "Know your home's HUD label number and year of manufacture. This information is often on a data plate inside a cabinet.",
    },
    {
        title: "Tie-Down/Anchoring System",
        description: "Florida requires manufactured homes to be properly anchored to resist wind. Many carriers require proof of compliant tie-downs.",
        tip: "A tie-down certification from a licensed contractor can help with insurability and may qualify for discounts.",
    },
    {
        title: "Roof Condition and Type",
        description: "Roof material (metal, shingle) and condition significantly affect your rates and coverage options. Metal roofs typically get better rates.",
        tip: "Document any roof replacements or upgrades. A newer roof can improve your insurability.",
    },
    {
        title: "Attached Structures",
        description: "Covers structures attached to your mobile home: carports, screen rooms, decks, and porches.",
        tip: "Make sure attached structures are listed on your policy. Some may need additional coverage.",
    },
    {
        title: "Personal Property (Contents)",
        description: "Covers your belongings inside the home. Check if it's actual cash value or replacement cost.",
        tip: "Do a home inventory. High-value items may need to be scheduled separately.",
    },
    {
        title: "Loss of Use",
        description: "Pays additional living expenses if your home becomes uninhabitable after a covered claim.",
        tip: "Consider how long it could take to repair or replace a manufactured home in Florida after a major storm.",
    },
    {
        title: "Hurricane/Wind Deductible",
        description: "A separate, often percentage-based deductible that applies to hurricane or windstorm damage.",
        tip: "Understand your hurricane deductible in dollar terms. A 5% deductible on a $100,000 home = $5,000 out of pocket.",
    },
    {
        title: "Flood Insurance (Separate Policy)",
        description: "Standard mobile home policies do NOT cover flood. You need separate flood insurance, available through NFIP or private insurers.",
        tip: "Mobile homes can be especially vulnerable to flood damage. Consider coverage even in low-risk zones.",
    },
    {
        title: "Liability Coverage",
        description: "Protects you if someone is injured on your property or you damage someone else's property.",
        tip: "Standard is $100,000, but higher limits provide better protection for your assets.",
    },
    {
        title: "Trip Collision (If Applicable)",
        description: "Covers damage to your mobile home while being transported. Only relevant if you plan to move the home.",
        tip: "Most homeowners won't need this, but it's required if you're relocating your manufactured home.",
    },
]

const commonMistakes = [
    "Not knowing if you have replacement cost or actual cash value coverage",
    "Assuming flood damage is covered under your standard policy",
    "Not having documentation of tie-down installation or certification",
    "Forgetting to insure attached structures like carports or screen rooms",
    "Not updating coverage after improvements or additions to the home",
    "Choosing a hurricane deductible you can't afford to pay",
    "Letting coverage lapse—mobile homes can be harder to reinsure after a gap",
]

const faqs = [
    {
        question: "What affects my mobile home insurance eligibility in Florida?",
        answer: "Key factors include the year your home was built, roof type and condition, tie-down/anchoring system, overall condition, and location. Older homes (pre-1980 or pre-1990) may have fewer carrier options. Proper tie-downs and a good roof help with both eligibility and rates.",
    },
    {
        question: "What's the difference between replacement cost and actual cash value for mobile homes?",
        answer: "Replacement cost pays to replace your damaged home with a new one of similar quality, without deducting for depreciation. Actual cash value pays the depreciated value—what your home is worth today considering its age. Replacement cost coverage is typically worth the higher premium.",
    },
    {
        question: "Do mobile home policies have hurricane deductibles like regular homeowners?",
        answer: "Yes. Florida mobile home policies typically have a separate hurricane or windstorm deductible, often expressed as a percentage of your dwelling coverage. A 5% deductible on a $100,000 home means $5,000 out of pocket for hurricane damage.",
    },
    {
        question: "Is my carport or screen room covered?",
        answer: "Attached structures are typically covered, but verify they're listed on your policy. Some policies have sublimits or require additional coverage for attached structures. Detached structures like sheds are usually covered under a separate 'other structures' provision.",
    },
    {
        question: "Can I bundle mobile home and auto insurance?",
        answer: "Yes, many carriers offer multi-policy discounts when you bundle mobile home insurance with auto. As an independent agency, we can help you find carriers that offer both types of coverage together for savings.",
    },
]

const relatedResources = [
    {
        title: "Renewal Review",
        href: "/renewal-review",
        description: "Get a free policy review before your renewal",
    },
    {
        title: "Flood Insurance",
        href: "/personal/flood-insurance-florida",
        description: "Understand why flood coverage matters",
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

export default function MobileHomeCoverageChecklistPage() {
    const faqSchema = generateFAQSchema(faqs)

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Mobile Home Coverage Checklist", url: `${baseUrl}/mobile-home-coverage-checklist` },
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
                        <li className="text-lewis-blue font-medium">Mobile Home Coverage Checklist</li>
                    </ol>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-gradient py-16 md:py-24">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-4 bg-purple-100 text-purple-800">
                            Mobile Home Insurance
                        </Badge>
                        <h1 className="text-lewis-ink mb-6">
                            Florida Mobile Home Insurance Coverage Checklist
                        </h1>

                        {/* Answer Box */}
                        <div className="bg-white rounded-xl shadow-sm border border-lewis-border p-6 text-left mb-8">
                            <div className="flex items-start gap-3">
                                <Home className="h-6 w-6 text-lewis-blue flex-shrink-0 mt-1" />
                                <div>
                                    <p className="text-lg text-lewis-ink font-medium mb-2">
                                        The Short Answer
                                    </p>
                                    <p className="text-lewis-body">
                                        Mobile home and manufactured home insurance works similarly to standard
                                        homeowners, but has unique considerations around home age, tie-downs, and
                                        replacement cost. Use this checklist to ensure you have the right coverage
                                        for your Florida manufactured home.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Takeaways */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Age and tie-downs matter</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Replacement cost preferred</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Flood not included</span>
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
                                Your mobile home insurance needs can change from year to year. At each renewal,
                                consider whether anything has changed:
                            </p>
                            <ul>
                                <li>
                                    <strong>Home improvements:</strong> New roof, added screen room, upgraded
                                    tie-downs, or other improvements
                                </li>
                                <li>
                                    <strong>Coverage type:</strong> Are you still getting replacement cost, or has
                                    it switched to actual cash value?
                                </li>
                                <li>
                                    <strong>Attached structures:</strong> Any new carports, decks, or additions that
                                    need coverage?
                                </li>
                                <li>
                                    <strong>Personal property:</strong> Has your belongings value changed
                                    significantly?
                                </li>
                                <li>
                                    <strong>Market conditions:</strong> Is your carrier still competitive? Are there
                                    better options available?
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
