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

const city = "White Springs"
const citySlug = "white-springs-fl"
const county = "Hamilton"
const nearbyTowns = ["Lake City", "Jasper", "Live Oak", "Valdosta"]
const localEntities = ["US-41", "Suwannee River", "Stephen Foster Folk Culture Center State Park", "White Springs area"]

export const metadata: Metadata = {
    title: "How to Choose an Insurance Agent in White Springs, FL",
    description: "How to choose an insurance agent in White Springs, FL. Compare independent vs captive agents. Free quotes from 30+ carriers. Local Hamilton County service.",
    alternates: {
        canonical: "https://lewisinsurance.com/locations/white-springs-fl/choose-insurance-agent",
    },
    openGraph: {
        title: "How to Choose an Insurance Agent in White Springs, FL",
        description: "How to choose an insurance agent in White Springs, FL. Compare independent vs captive agents. Free quotes from 30+ carriers. Local Hamilton County service.",
        url: `https://lewisinsurance.com/locations/${citySlug}/choose-insurance-agent`,
        type: "website",
    },
}

const faqs = [
    {
        question: "Does using an independent agent cost more?",
        answer: "No. Carriers pay agent commissions—you don't pay extra. Your premium is the same whether purchased through an agent or directly from a company. The benefit is having someone who compares multiple carriers on your behalf.",
    },
    {
        question: "What information do you need to compare quotes?",
        answer: "For auto, we need driver details, vehicle information, and driving record. For homeowners, we need your property address, construction details, roof age, and updates. For properties near the Suwannee River, flood zone status is also relevant.",
    },
    {
        question: "Can you shop multiple carriers at renewal?",
        answer: "Yes. We review your coverage annually and can compare options from different carriers if rates increase or circumstances change. This flexibility is one of the main advantages of an independent agency.",
    },
    {
        question: "What affects my insurance rate in White Springs?",
        answer: "Auto rates consider driving record, vehicle, coverage levels, and usage. Home insurance factors include roof condition, construction, updates, flood zone status, and fire district distance. Hamilton County's rural character affects several of these factors.",
    },
    {
        question: "How do Florida wind deductibles work?",
        answer: "Florida homeowners policies have separate hurricane/wind deductibles, typically 2% of dwelling coverage. For a $150,000 home, that's a $3,000 wind deductible compared to perhaps a $1,000 all-other-perils deductible.",
    },
    {
        question: "Can you help me if I have a claim?",
        answer: "We guide you through the claims process and help you understand what's typically needed. Claims decisions are made by the insurance carrier, but we explain your coverage and answer questions as your claim proceeds.",
    },
    {
        question: "How fast can I get proof of insurance?",
        answer: "Same day in most cases once coverage is bound. Whether you need auto ID cards, certificates of insurance, or evidence of property coverage, we provide documentation quickly.",
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

export default function WhiteSpringsChooseInsuranceAgentPage() {
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
                                This guide helps {city} residents select the right insurance agent in {county} County. An independent agency shops multiple carriers for auto, home, and business coverage while offering Florida-specific expertise on wind, flood, and local factors. Lewis Insurance has served North Florida since 1981—<Link href="/contact" className="text-lewis-blue hover:underline">contact us</Link> for a coverage review.
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
                                <span className="text-lewis-body">Independent agents access multiple carriers—more choices than being limited to one company</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-lewis-body">{city}'s Suwannee River location creates flood considerations worth understanding</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-lewis-body">A local agent can shop your policies annually if rates change or better options emerge</span>
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
                            Choosing an agent matters for your coverage and experience. Here's what to consider in {county} County:
                        </p>
                        <div className="grid gap-3">
                            {[
                                "Independent agency representing multiple insurance companies",
                                "Ability to shop and compare options from different carriers",
                                "Clear communication about coverage, limits, and exclusions",
                                "Annual policy reviews before renewal",
                                "Willingness to find alternatives when rates increase",
                                "Florida expertise (wind coverage, flood zones, roof requirements)",
                                "Understanding of hurricane deductible structures",
                                "Responsive and accessible when you need help",
                                "Knowledge of rural property considerations",
                                "Guidance through the claims process",
                                "Fast turnaround on certificates and documentation",
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
                                    Partners with multiple carriers. Compares options across companies and can move your coverage when better rates or terms become available.
                                </p>
                            </Card>
                            <Card className="p-6">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                                    <Building2 className="h-6 w-6 text-gray-600" />
                                </div>
                                <h3 className="font-semibold text-lewis-ink mb-2">Captive Agent</h3>
                                <p className="text-sm text-lewis-body">
                                    Works for one insurance company. Only offers that company's products. May provide good service but cannot shop competitors.
                                </p>
                            </Card>
                            <Card className="p-6">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                                    <Globe className="h-6 w-6 text-gray-600" />
                                </div>
                                <h3 className="font-semibold text-lewis-ink mb-2">Direct/Online</h3>
                                <p className="text-sm text-lewis-body">
                                    Purchase directly from a carrier's website or call center. No local agent. You handle research and comparisons yourself.
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
                                {city} sits along the {localEntities[1]} in {county} County, with {localEntities[0]} connecting the community to neighboring areas. The {localEntities[2]} draws visitors, and properties throughout the {localEntities[3]} range from historic homes to rural acreage.
                            </p>
                            <p className="text-lewis-body mb-4">
                                The Suwannee River creates flood considerations for nearby properties. Standard homeowners insurance excludes flood damage—separate flood coverage may be essential depending on your location. Wind coverage is part of homeowners policies, but Florida's percentage-based hurricane deductible (typically 2% of dwelling coverage) works differently than standard deductibles.
                            </p>
                            <p className="text-lewis-body">
                                Auto insurance in Florida requires PIP coverage. Rural driving patterns, vehicle type, and usage all factor into rates. An agent who understands {county} County can help ensure your coverage fits how you actually live.
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
                            Whether you're looking for new insurance or reviewing what you have, we're here to help. As an independent agency, we compare options from multiple carriers for your situation. We also serve {nearbyTowns[0]}, {nearbyTowns[1]}, {nearbyTowns[2]}, and surrounding communities.
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
                                For a detailed comparison of agent models, see our <Link href="/why-local-agent" className="text-lewis-blue hover:underline">Local Agent vs Direct Insurance</Link> page. Browse common questions in our <Link href="/learn" className="text-lewis-blue hover:underline">Insurance FAQ</Link> section.
                            </p>
                            <p>
                                Explore {city} coverage: <Link href={`/locations/${citySlug}/auto-insurance`} className="text-lewis-blue hover:underline">auto insurance</Link>, <Link href={`/locations/${citySlug}/homeowners-insurance`} className="text-lewis-blue hover:underline">homeowners insurance</Link>, <Link href={`/locations/${citySlug}/mobile-home-insurance`} className="text-lewis-blue hover:underline">mobile home insurance</Link>, <Link href={`/locations/${citySlug}/boat-insurance`} className="text-lewis-blue hover:underline">boat insurance</Link>, and <Link href={`/locations/${citySlug}/business-insurance`} className="text-lewis-blue hover:underline">business insurance</Link>.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTABand />
        </>
    )
}
