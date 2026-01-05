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
    title: "FL Homeowners Insurance Checklist | Lewis Insurance",
    description: "FL homeowners insurance checklist. Review dwelling, hurricane deductibles, flood gaps, wind mitigation. Free coverage review.",
    alternates: {
        canonical: `${baseUrl}/homeowners-coverage-checklist`,
    },
    openGraph: {
        title: "FL Homeowners Insurance Checklist | Lewis Insurance",
        description:
            "Review your Florida homeowners coverage. Understand hurricane deductibles, flood gaps, and more.",
        url: `${baseUrl}/homeowners-coverage-checklist`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "FL Homeowners Insurance Checklist | Lewis Insurance",
        description:
            "Review your Florida homeowners coverage. Understand hurricane deductibles, flood gaps, and more.",
    },
}

const checklistItems = [
    {
        title: "Dwelling Coverage (Coverage A)",
        description: "Covers the structure of your home. Should reflect the cost to rebuild your home at current construction costs—not your purchase price or market value.",
        tip: "Ask us about guaranteed replacement cost endorsements that pay to rebuild even if costs exceed your limit.",
    },
    {
        title: "Other Structures (Coverage B)",
        description: "Covers detached structures like fences, sheds, and detached garages. Typically set at 10% of your dwelling coverage.",
        tip: "Increase this if you have valuable outbuildings, a pool enclosure, or expensive fencing.",
    },
    {
        title: "Personal Property (Coverage C)",
        description: "Covers your belongings—furniture, electronics, clothing, etc. Check if it's actual cash value (depreciated) or replacement cost.",
        tip: "Do a home inventory to know what you're protecting. Schedule high-value items separately.",
    },
    {
        title: "Loss of Use (Coverage D)",
        description: "Pays additional living expenses if your home becomes uninhabitable—hotel, meals, etc.",
        tip: "Consider how long rebuilding could take in your area after a major storm.",
    },
    {
        title: "Personal Liability (Coverage E)",
        description: "Protects you if someone is injured on your property or you damage someone else's property.",
        tip: "Standard is $100,000, but consider $300,000+ if you have significant assets.",
    },
    {
        title: "Hurricane/Windstorm Deductible",
        description: "A separate, percentage-based deductible that applies to hurricane or windstorm damage. Common options are 2%, 5%, or 10% of dwelling coverage.",
        tip: "A 2% deductible on a $300,000 home = $6,000 out of pocket. Know what you'd owe.",
    },
    {
        title: "All-Other-Perils (AOP) Deductible",
        description: "A flat-dollar deductible for non-hurricane claims like fire, theft, or water damage.",
        tip: "Higher deductibles lower your premium but increase your out-of-pocket when you file a claim.",
    },
    {
        title: "Flood Insurance (Separate Policy)",
        description: "Standard homeowners policies do NOT cover flood damage. Flood insurance is a separate policy through NFIP or private insurers.",
        tip: "Even if you're not in a designated flood zone, consider coverage—flooding can happen anywhere.",
    },
    {
        title: "Wind Mitigation Credits",
        description: "Discounts for hurricane-resistant features: roof shape, opening protection, roof-to-wall connections. Requires a wind mitigation inspection.",
        tip: "A wind mitigation inspection can pay for itself quickly through premium savings.",
    },
    {
        title: "Ordinance or Law Coverage",
        description: "Pays the extra cost if you need to rebuild to current building codes, which may be stricter than when your home was built.",
        tip: "Important for older homes that may not meet current code requirements.",
    },
    {
        title: "Water Damage/Sewer Backup",
        description: "Check what types of water damage are covered. Sewer backup is often excluded unless you add an endorsement.",
        tip: "Florida's heavy rains can overwhelm drainage systems. Consider adding backup coverage.",
    },
    {
        title: "Roof Age and Coverage",
        description: "Some policies pay actual cash value (depreciated) for older roofs instead of replacement cost. Know how your roof is covered.",
        tip: "Roof age significantly affects your insurability in Florida. Keep documentation of roof age and condition.",
    },
]

const commonMistakes = [
    "Insuring your home for market value instead of rebuild cost",
    "Not having flood insurance because 'I'm not in a flood zone'",
    "Not understanding your hurricane deductible percentage",
    "Letting your policy lapse and facing higher rates or non-renewal",
    "Forgetting to update coverage after renovations or additions",
    "Not getting a wind mitigation inspection to save on premium",
    "Assuming mold or sewer backup is covered when it often isn't",
]

const faqs = [
    {
        question: "How much dwelling coverage do I need for my Florida home?",
        answer: "Your dwelling coverage should equal the cost to rebuild your home at current construction costs—not your purchase price or market value. Factors include square footage, construction type, finishes, and local labor/material costs. We can help you estimate this.",
    },
    {
        question: "What's the difference between replacement cost and actual cash value?",
        answer: "Replacement cost pays to repair or replace damaged items at today's prices without deducting for depreciation. Actual cash value pays the depreciated value—what the item is worth today, considering age and wear. Replacement cost coverage is typically worth the extra premium.",
    },
    {
        question: "Why isn't flood covered in my homeowners policy?",
        answer: "Flood is specifically excluded from standard homeowners policies. You need a separate flood insurance policy through the National Flood Insurance Program (NFIP) or a private flood insurer. This applies regardless of what flood zone you're in.",
    },
    {
        question: "What is a 4-point inspection?",
        answer: "A 4-point inspection evaluates your roof, electrical, plumbing, and HVAC systems. Many carriers require this for homes over 25-30 years old before issuing or renewing a policy. It helps insurers assess the condition and insurability of older homes.",
    },
    {
        question: "How can I lower my Florida homeowners insurance premium?",
        answer: "Get a wind mitigation inspection to document hurricane-resistant features, increase your deductible if you can afford higher out-of-pocket costs, maintain good credit, bundle with auto insurance, and let us shop multiple carriers on your behalf.",
    },
]

const relatedResources = [
    {
        title: "Renewal Review",
        href: "/renewal-review",
        description: "Get a free policy review before your renewal",
    },
    {
        title: "Homeowners Insurance",
        href: "/personal/homeowners-insurance-florida",
        description: "Learn more about Florida homeowners coverage",
    },
    {
        title: "Flood Insurance",
        href: "/personal/flood-insurance-florida",
        description: "Understand why flood coverage matters",
    },
    {
        title: "Insurance FAQ",
        href: "/learn",
        description: "Common questions about Florida insurance",
    },
]

export default function HomeownersCoverageChecklistPage() {
    const faqSchema = generateFAQSchema(faqs)

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Homeowners Coverage Checklist", url: `${baseUrl}/homeowners-coverage-checklist` },
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
                        <li className="text-lewis-blue font-medium">Homeowners Coverage Checklist</li>
                    </ol>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero-gradient py-16 md:py-24">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-4 bg-blue-100 text-blue-800">
                            Homeowners Insurance
                        </Badge>
                        <h1 className="text-lewis-ink mb-6">
                            Florida Homeowners Insurance Coverage Checklist
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
                                        Florida homeowners insurance protects your dwelling, belongings, and
                                        liability—but standard policies don&apos;t cover flood. Use this checklist
                                        to review your coverage, understand your hurricane deductible, and
                                        identify gaps that could leave you exposed.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Key Takeaways */}
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Know your rebuild cost</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Understand hurricane deductible</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-lewis-body">
                                <CheckCircle2 className="h-4 w-4 text-green-600" />
                                <span>Flood requires separate policy</span>
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
                                Your homeowners insurance needs can change from year to year. At each renewal,
                                consider whether anything has changed in your situation:
                            </p>
                            <ul>
                                <li>
                                    <strong>Home improvements:</strong> Renovations, additions, or upgrades that
                                    increase your home&apos;s rebuild cost
                                </li>
                                <li>
                                    <strong>Roof age:</strong> How old is your roof? Some carriers have stricter
                                    requirements for older roofs
                                </li>
                                <li>
                                    <strong>Hurricane features:</strong> Have you added impact windows, a new roof,
                                    or other wind mitigation features?
                                </li>
                                <li>
                                    <strong>Liability exposure:</strong> Pool, trampoline, dog breed, or home-based
                                    business that could increase risk
                                </li>
                                <li>
                                    <strong>Market changes:</strong> Has your carrier filed for a rate increase or
                                    announced they&apos;re leaving Florida?
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
