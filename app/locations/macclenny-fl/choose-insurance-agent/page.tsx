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

const city = "Macclenny"
const citySlug = "macclenny-fl"
const county = "Baker"
const nearbyTowns = ["Glen St. Mary", "Sanderson", "Jacksonville", "Baldwin"]
const localEntities = ["I-10", "SR-121", "Downtown Macclenny", "Baker County area"]

export const metadata: Metadata = {
    title: "How to Choose an Insurance Agent in Macclenny, FL",
    description: "How to choose an insurance agent in Macclenny, FL. Compare independent vs captive agents. Free quotes from 30+ carriers.",
    alternates: {
        canonical: "https://lewisinsurance.com/locations/lake-city-fl/choose-insurance-agent",
    },
    openGraph: {
        title: "How to Choose an Insurance Agent in Macclenny, FL",
        description: "How to choose an insurance agent in Macclenny, FL. Compare independent vs captive agents. Free quotes from 30+ carriers.",
        url: `https://lewisinsurance.com/locations/${citySlug}/choose-insurance-agent`,
        type: "website",
    },
}

const faqs = [
    {
        question: "Does using an independent agent cost more?",
        answer: "No. Insurance companies pay agents—you don't. Your premium is the same whether you buy from an agent or direct. The difference is an independent agent can compare multiple companies to find options for your specific situation.",
    },
    {
        question: "What information do you need to compare quotes?",
        answer: "For auto, we need driver details, vehicles, and driving history. For homeowners, we need your address, home details, roof information, and any updates. The more complete the information, the more accurate quotes we can provide.",
    },
    {
        question: "Can you shop multiple carriers at renewal?",
        answer: "Yes. We review policies at renewal and can shop alternatives if rates increase or your situation changes. This flexibility to move between carriers is a key advantage of working with an independent agency.",
    },
    {
        question: "What affects my insurance rate in Macclenny?",
        answer: "Auto rates consider driving record, vehicle type, coverage limits, and commute patterns—including I-10 travel to Jacksonville. Home insurance factors include roof condition, construction type, updates, claims history, and distance from fire services.",
    },
    {
        question: "How do Florida hurricane deductibles work?",
        answer: "Florida homeowners policies have separate wind/hurricane deductibles, typically 2% of your dwelling coverage. A $200,000 home would have a $4,000 hurricane deductible versus a standard $1,000 or $2,500 deductible for other claims.",
    },
    {
        question: "Can you help me if I have a claim?",
        answer: "We guide you through the claims process and explain what documentation is typically required. Claims decisions are made by the insurance carrier, but we help you understand your coverage and navigate the process.",
    },
    {
        question: "How fast can I get proof of insurance?",
        answer: "Typically same day once coverage is bound. Whether you need auto ID cards, certificates for a lender, or proof of property coverage, we respond quickly to documentation requests.",
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

export default function MacclennyChooseInsuranceAgentPage() {
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
                                This guide helps {city} residents find the right insurance agent in {county} County. An independent agency compares options from multiple carriers for auto, home, and business coverage while providing guidance specific to Florida requirements. Lewis Insurance has served North Florida since 1981—<Link href="/contact" className="text-lewis-blue hover:underline">contact us</Link> to review your coverage.
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
                                <span className="text-lewis-body">{county} County's proximity to Jacksonville affects commuter patterns and coverage considerations</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-lewis-body">A local agent reviews your coverage annually and can shop alternatives when needed</span>
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
                            Not all agencies are the same. Here's what matters when choosing an insurance agent in {county} County:
                        </p>
                        <div className="grid gap-3">
                            {[
                                "Independent agency representing multiple insurance carriers",
                                "Ability to shop and compare quotes from different companies",
                                "Clear communication about coverage, limits, and deductibles",
                                "Proactive annual policy reviews at renewal",
                                "Willingness to re-shop coverage if rates increase",
                                "Knowledge of Florida requirements (wind, flood, PIP, roof age)",
                                "Understanding of hurricane deductible structures",
                                "Accessible and responsive when you have questions",
                                "Familiarity with the local area",
                                "Help navigating claims when they happen",
                                "Quick turnaround on certificates and documentation",
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
                                    Works with many insurance carriers. Compares coverage across companies and can move your policy to a better option when circumstances change.
                                </p>
                            </Card>
                            <Card className="p-6">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                                    <Building2 className="h-6 w-6 text-gray-600" />
                                </div>
                                <h3 className="font-semibold text-lewis-ink mb-2">Captive Agent</h3>
                                <p className="text-sm text-lewis-body">
                                    Represents one insurance company only. Limited to that carrier's products and prices. Personal service but no comparison shopping.
                                </p>
                            </Card>
                            <Card className="p-6">
                                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                                    <Globe className="h-6 w-6 text-gray-600" />
                                </div>
                                <h3 className="font-semibold text-lewis-ink mb-2">Direct/Online</h3>
                                <p className="text-sm text-lewis-body">
                                    Purchase from a carrier's website or call center. No local agent. You research and compare options yourself.
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
                                {city} serves as the county seat of {county} County, positioned along {localEntities[0]} between Jacksonville and Lake City. Many residents commute to Jacksonville for work, which affects auto insurance considerations. Properties in {localEntities[2]} and throughout the {localEntities[3]} have varying characteristics that influence coverage needs.
                            </p>
                            <p className="text-lewis-body mb-4">
                                While {county} County is inland, wind coverage remains relevant for homeowners insurance. Florida's hurricane deductible—typically 2% of dwelling coverage—applies regardless of distance from the coast. Roof age and condition significantly affect both coverage availability and pricing in this market.
                            </p>
                            <p className="text-lewis-body">
                                Auto insurance in Florida requires PIP coverage. For {city} residents who commute on {localEntities[0]} to Jacksonville or travel {localEntities[1]}, driving patterns affect rate calculations. An agent familiar with {county} County can help match coverage to your actual usage.
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
                            Ready to compare coverage options or review existing policies? We can help. As an independent agency, we shop multiple carriers to find what works for your situation. We also serve {nearbyTowns[0]}, {nearbyTowns[1]}, {nearbyTowns[3]}, and surrounding {county} County communities.
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
                                For a deeper comparison of agent types, see our <Link href="/why-local-agent" className="text-lewis-blue hover:underline">Local Agent vs Direct Insurance</Link> guide. Browse common questions in our <Link href="/learn" className="text-lewis-blue hover:underline">Insurance FAQ</Link> section.
                            </p>
                            <p>
                                Explore {city} coverage: <Link href={`/locations/${citySlug}/auto-insurance`} className="text-lewis-blue hover:underline">auto insurance</Link>, <Link href={`/locations/${citySlug}/homeowners-insurance`} className="text-lewis-blue hover:underline">homeowners insurance</Link>, <Link href={`/locations/${citySlug}/mobile-home-insurance`} className="text-lewis-blue hover:underline">mobile home insurance</Link>, <Link href={`/locations/${citySlug}/boat-insurance`} className="text-lewis-blue hover:underline">boat insurance</Link>, and <Link href={`/locations/${citySlug}/business-insurance`} className="text-lewis-blue hover:underline">business insurance</Link> for {county} County.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <CTABand />
        </>
    )
}
