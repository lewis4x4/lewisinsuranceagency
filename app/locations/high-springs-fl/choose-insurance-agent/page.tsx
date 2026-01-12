import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { CheckCircle2, AlertCircle, XCircle, Users, Building2, Globe, ArrowRight } from "lucide-react"
import { CTABand } from "@/components/sections"

const city = "High Springs"
const citySlug = "high-springs-fl"
const county = "Alachua"
const nearbyTowns = ["Gainesville", "Fort White", "Alachua", "Newberry"]
const localEntities = ["US-441", "Downtown High Springs", "Santa Fe River", "springs area"]

export const metadata: Metadata = {
    title: "How to Choose an Insurance Agent in High Springs, FL",
    description: "How to choose an insurance agent in High Springs, FL. Compare independent vs captive agents. Free quotes from 30+ carriers. Local Alachua County service.",
    alternates: {
        canonical: "https://lewisinsurance.com/locations/high-springs-fl/choose-insurance-agent",
    },
    openGraph: {
        title: "How to Choose an Insurance Agent in High Springs, FL",
        description: "How to choose an insurance agent in High Springs, FL. Compare independent vs captive agents. Free quotes from 30+ carriers. Local Alachua County service.",
        url: `https://lewisinsurance.com/locations/${citySlug}/choose-insurance-agent`,
        type: "website",
    },
}

const faqs = [
    {
        question: "Does using an independent agent cost more?",
        answer: "No. Insurance carriers pay agent commissions—clients don't pay extra. Your premium is the same whether you buy direct or through an agent. Independent agents provide the added benefit of comparing multiple carriers for you.",
    },
    {
        question: "What information do you need to compare quotes?",
        answer: "For auto, we need driver details, vehicle information, and driving history. For homeowners, we need address, property details, roof age, and updates. For properties near the Santa Fe River or springs, we also discuss flood zone status.",
    },
    {
        question: "Can you shop multiple carriers at renewal?",
        answer: "Yes. We review your coverage annually and can compare options from different carriers if rates change or better options emerge. This flexibility to shop is a key advantage of independent agencies.",
    },
    {
        question: "What affects my insurance rate in High Springs?",
        answer: "Auto rates depend on driving record, vehicle, coverage levels, and usage. Home insurance considers roof age, construction, updates, flood zone status, and claims history. Properties near the springs or river may have flood considerations.",
    },
    {
        question: "How do Florida hurricane deductibles work?",
        answer: "Florida homeowners policies have separate wind/hurricane deductibles, typically 2% of dwelling coverage. A $250,000 home would have a $5,000 hurricane deductible versus perhaps a $1,000 standard deductible.",
    },
    {
        question: "Can you help me if I have a claim?",
        answer: "We guide you through the claims process and explain what's typically required. Claims decisions are made by the insurance carrier, but we help you understand your coverage and answer questions throughout.",
    },
    {
        question: "How fast can I get proof of insurance?",
        answer: "Usually same day once coverage is bound. Auto ID cards, certificates of insurance, and evidence of property coverage are provided quickly when needed.",
    },
]

const comparisonData = [
    { feature: "Shop multiple carriers", lewis: "check", direct: "x", captive: "x" },
    { feature: "Florida-specific guidance (wind/flood/roof)", lewis: "check", direct: "warning", captive: "warning" },
    { feature: "Annual renewal review & re-shopping", lewis: "check", direct: "x", captive: "warning" },
    { feature: "Help comparing deductibles and limits", lewis: "check", direct: "warning", captive: "check" },
    { feature: "Claims guidance & process help", lewis: "check", direct: "warning", captive: "check" },
    { feature: "Consistent point of contact", lewis: "check", direct: "x", captive: "check" },
    { feature: "Local office & local knowledge", lewis: "check", direct: "x", captive: "warning" },
    { feature: "Bundling options across carriers", lewis: "check", direct: "x", captive: "warning" },
    { feature: "Help with documentation needs", lewis: "check", direct: "warning", captive: "check" },
]

function ComparisonIcon({ type }: { type: string }) {
    if (type === "check") return <CheckCircle2 className="h-5 w-5 text-green-600" />
    if (type === "x") return <XCircle className="h-5 w-5 text-red-500" />
    return <AlertCircle className="h-5 w-5 text-yellow-500" />
}

export default function HighSpringsChooseInsuranceAgentPage() {
    const schemaFAQ = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    }

    const schemaService = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: `Insurance Agent Selection Help in ${city}, FL`,
        serviceType: "Insurance comparison guidance",
        description: `Help choosing the right insurance agent in ${city}, ${county} County, Florida. Independent agency comparing multiple carriers.`,
        areaServed: {
            "@type": "City",
            name: city,
            containedInPlace: {
                "@type": "State",
                name: "Florida",
            },
        },
        provider: {
            "@type": "InsuranceAgency",
            name: "Lewis Insurance",
            url: "https://lewisinsurance.com",
        },
    }

    const schemaBreadcrumb = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://lewisinsurance.com" },
            { "@type": "ListItem", position: 2, name: "Locations", item: "https://lewisinsurance.com/locations" },
            { "@type": "ListItem", position: 3, name: city, item: `https://lewisinsurance.com/locations/${citySlug}` },
            { "@type": "ListItem", position: 4, name: "Choose Insurance Agent", item: `https://lewisinsurance.com/locations/${citySlug}/choose-insurance-agent` },
        ],
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaFAQ) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaService) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaBreadcrumb) }}
            />

            {/* Breadcrumb */}
            <nav className="bg-lewis-page border-b border-lewis-border">
                <div className="container-lg py-3">
                    <ol className="flex flex-wrap items-center gap-2 text-sm text-lewis-body">
                        <li><Link href="/" className="hover:text-lewis-blue">Home</Link></li>
                        <li>/</li>
                        <li><Link href="/locations" className="hover:text-lewis-blue">Locations</Link></li>
                        <li>/</li>
                        <li><Link href={`/locations/${citySlug}`} className="hover:text-lewis-blue">{city}</Link></li>
                        <li>/</li>
                        <li className="text-lewis-ink font-medium">Choose Insurance Agent</li>
                    </ol>
                </div>
            </nav>

            {/* Hero */}
            <section className="hero-gradient py-12 md:py-16">
                <div className="container-lg">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-lewis-blue/10 text-lewis-blue border-lewis-blue/20">
                            {county} County
                        </Badge>
                        <h1 className="text-lewis-ink mb-6">
                            How to Choose an Insurance Agent in {city}, FL
                        </h1>
                        <div className="bg-white/80 backdrop-blur rounded-lg p-6 border border-lewis-border">
                            <p className="text-lg text-lewis-body">
                                This guide helps {city} residents choose the right insurance agent in {county} County. An independent agency compares options from multiple carriers for auto, home, and business coverage while providing Florida-specific guidance on wind, flood, and other factors. Lewis Insurance has served North Florida since 1981—<Link href="/contact" className="text-lewis-blue hover:underline">contact us</Link> for a coverage review.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Key Takeaways */}
            <section className="py-8 bg-white border-b border-lewis-border">
                <div className="container-lg">
                    <div className="max-w-3xl">
                        <h2 className="text-xl font-semibold text-lewis-ink mb-4">Key Takeaways</h2>
                        <ul className="space-y-2">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-lewis-body">Independent agents work with multiple carriers—you get options beyond a single company</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-lewis-body">{city}'s springs area location creates specific flood and property considerations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-lewis-body">A local agent reviews your policies annually and can shop alternatives when needed</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* What to Look For */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl">
                        <h2 className="text-lewis-ink mb-6">What to Look For in an Insurance Agency in {city}</h2>
                        <p className="text-lewis-body mb-6">
                            Your choice of agent matters for both coverage quality and service. Here's what to consider in {county} County:
                        </p>
                        <div className="grid gap-3">
                            {[
                                "Independent agency representing multiple insurance carriers",
                                "Ability to compare quotes across different companies",
                                "Clear explanation of coverage, exclusions, and deductibles",
                                "Annual policy reviews before renewal",
                                "Willingness to shop alternatives when rates increase",
                                "Florida knowledge (wind coverage, flood zones, roof requirements)",
                                "Understanding of hurricane and percentage deductibles",
                                "Responsive communication when you need help",
                                "Local familiarity with the area",
                                "Guidance through claims when they occur",
                                "Quick documentation turnaround",
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-3 bg-lewis-page rounded-lg">
                                    <CheckCircle2 className="h-5 w-5 text-lewis-blue mt-0.5 flex-shrink-0" />
                                    <span className="text-lewis-body">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Independent vs Captive vs Direct */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl">
                        <h2 className="text-lewis-ink mb-6">Independent vs Captive vs Direct: What's the Difference?</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <Card className="p-6">
                                <div className="w-12 h-12 rounded-full bg-lewis-blue/10 flex items-center justify-center mb-4">
                                    <Users className="h-6 w-6 text-lewis-blue" />
                                </div>
                                <h3 className="font-semibold text-lewis-ink mb-2">Independent Agent</h3>
                                <p className="text-sm text-lewis-body">
                                    Works with multiple insurance companies. Compares options and can move your coverage when better choices become available.
                                </p>
                            </Card>
                            <Card className="p-6">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                                    <Building2 className="h-6 w-6 text-gray-600" />
                                </div>
                                <h3 className="font-semibold text-lewis-ink mb-2">Captive Agent</h3>
                                <p className="text-sm text-lewis-body">
                                    Represents one insurance company only. Limited to that carrier's products. Service but no comparison shopping.
                                </p>
                            </Card>
                            <Card className="p-6">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                                    <Globe className="h-6 w-6 text-gray-600" />
                                </div>
                                <h3 className="font-semibold text-lewis-ink mb-2">Direct/Online</h3>
                                <p className="text-sm text-lewis-body">
                                    Buy from a carrier's website or call center. No local agent relationship. You handle research and service yourself.
                                </p>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-4xl">
                        <h2 className="text-lewis-ink mb-6">Comparison: Lewis Insurance vs Other Options</h2>
                        <div className="overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr className="bg-lewis-page">
                                        <th className="text-left p-4 font-semibold text-lewis-ink border-b border-lewis-border">Feature</th>
                                        <th className="text-center p-4 font-semibold text-lewis-ink border-b border-lewis-border">Lewis Insurance<br /><span className="text-xs font-normal text-lewis-body">(Independent Local)</span></th>
                                        <th className="text-center p-4 font-semibold text-lewis-ink border-b border-lewis-border">Direct/Online</th>
                                        <th className="text-center p-4 font-semibold text-lewis-ink border-b border-lewis-border">Captive Agent<br /><span className="text-xs font-normal text-lewis-body">(One Carrier)</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {comparisonData.map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-lewis-page/50"}>
                                            <td className="p-4 text-lewis-body border-b border-lewis-border">{row.feature}</td>
                                            <td className="p-4 text-center border-b border-lewis-border"><ComparisonIcon type={row.lewis} /></td>
                                            <td className="p-4 text-center border-b border-lewis-border"><ComparisonIcon type={row.direct} /></td>
                                            <td className="p-4 text-center border-b border-lewis-border"><ComparisonIcon type={row.captive} /></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="text-sm text-lewis-body mt-4">
                            <CheckCircle2 className="h-4 w-4 text-green-600 inline mr-1" /> Yes
                            <AlertCircle className="h-4 w-4 text-yellow-500 inline mx-1 ml-4" /> Varies/Limited
                            <XCircle className="h-4 w-4 text-red-500 inline mx-1 ml-4" /> No/Not typical
                        </p>
                    </div>
                </div>
            </section>

            {/* Florida Factors */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl">
                        <h2 className="text-lewis-ink mb-6">Florida Factors That Matter in {city}</h2>
                        <div className="prose prose-lewis">
                            <p className="text-lewis-body mb-4">
                                {city} is known for its natural springs and historic {localEntities[1]}, with {localEntities[0]} providing access to the {localEntities[3]} and neighboring communities. Properties near the {localEntities[2]} and spring areas have specific considerations based on flood zone designations and property characteristics.
                            </p>
                            <p className="text-lewis-body mb-4">
                                Flood zones vary throughout the {city} area—some properties near the river or springs may be in flood zones requiring separate coverage. Standard homeowners insurance doesn't cover flooding. Wind coverage is included in homeowners policies, with Florida's hurricane deductible (typically 2% of dwelling coverage) working differently than standard deductibles.
                            </p>
                            <p className="text-lewis-body">
                                For auto insurance, Florida requires PIP coverage. Your rates depend on driving record, vehicle type, coverage limits, and usage. An agent familiar with {county} County can help ensure your coverage matches your needs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl">
                        <h2 className="text-lewis-ink mb-6">Frequently Asked Questions</h2>
                        <Accordion type="single" collapsible className="space-y-4">
                            {faqs.map((faq, i) => (
                                <AccordionItem key={i} value={`faq-${i}`} className="bg-white border border-lewis-border rounded-lg px-6">
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

            {/* Next Step CTA */}
            <section className="section-wrapper bg-lewis-blue text-white">
                <div className="container-lg">
                    <div className="max-w-3xl">
                        <h2 className="text-white mb-4">Next Step: Get a Coverage Review in {city}</h2>
                        <p className="text-white/90 mb-6">
                            Whether you need new coverage or want a second opinion on existing policies, we can help. As an independent agency, we compare options from multiple carriers. We also serve {nearbyTowns[0]}, {nearbyTowns[1]}, {nearbyTowns[2]}, and other {county} County communities.
                        </p>
                        <Button asChild size="lg" className="bg-white text-lewis-blue hover:bg-white/90">
                            <Link href="/contact">
                                Get Your Coverage Review
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Related Resources */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl">
                        <h2 className="text-lewis-ink mb-6">Related Resources</h2>
                        <div className="prose prose-lewis text-lewis-body">
                            <p>
                                For a detailed comparison of agent types, see our <Link href="/why-local-agent" className="text-lewis-blue hover:underline">Local Agent vs Direct Insurance</Link> guide. Browse common questions in our <Link href="/learn" className="text-lewis-blue hover:underline">Insurance FAQ</Link> section.
                            </p>
                            <p>
                                Explore {city} coverage options: <Link href={`/locations/${citySlug}/auto-insurance`} className="text-lewis-blue hover:underline">auto insurance</Link>, <Link href={`/locations/${citySlug}/homeowners-insurance`} className="text-lewis-blue hover:underline">homeowners insurance</Link>, <Link href={`/locations/${citySlug}/mobile-home-insurance`} className="text-lewis-blue hover:underline">mobile home insurance</Link>, <Link href={`/locations/${citySlug}/boat-insurance`} className="text-lewis-blue hover:underline">boat insurance</Link>, and <Link href={`/locations/${citySlug}/business-insurance`} className="text-lewis-blue hover:underline">business insurance</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTABand />
        </>
    )
}
