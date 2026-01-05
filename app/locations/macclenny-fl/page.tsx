import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Macclenny",
    state: "FL",
    county: "Baker",
    slug: "macclenny-fl",

    title: "Macclenny, FL Insurance Agency | Lewis Insurance",
    description: "Home, auto, mobile home, and business insurance in Macclenny, FL. Independent agents serving Baker County. Compare quotes.",

    headline: "Insurance Agents Serving Macclenny, Florida",
    subheadline: "Local independent insurance agency for Macclenny and Baker County. We compare carriers to find coverage that protects your family and fits your budget.",

    overview: [
        "Macclenny serves as the heart of Baker County, positioned along I-10 between Lake City and Jacksonville. Lewis Insurance Agency provides personalized insurance service to this growing community—from families along SR-121 to businesses serving the I-10 corridor.",
        "As an independent agency, we're not limited to one company. We compare options from multiple carriers to find the right coverage at competitive rates for Baker County residents, whether you need home, auto, mobile home, boat, or business insurance.",
        "Since 1981, we've helped North Florida families with personalized service. Macclenny residents deserve an agent who understands the community and takes time to find the right protection—not a distant call center.",
        "Contact us to discuss your insurance needs. We'll help you find coverage that works for your situation.",
    ],

    localFactors: [
        "I-10 corridor location brings commercial and commuter traffic considerations",
        "Mix of rural properties and town residences with varied coverage needs",
        "Growing community with new construction insurance requirements",
        "Mobile homes common—we specialize in manufactured home coverage",
        "Proximity to Jacksonville provides employment but local agents understand Baker County",
        "Agricultural properties may need specialized farm coverage",
    ],

    neighborhoods: [
        "Downtown Macclenny",
        "I-10 Corridor",
        "SR-121 Area",
        "Glen St. Mary",
        "Sanderson",
        "Taylor",
        "Olustee",
        "Cuyler",
    ],

    topCoverages: [
        {
            title: "Auto Insurance",
            description: "Coverage for Baker County drivers and I-10 commuters.",
            href: "/locations/macclenny-fl/auto-insurance",
        },
        {
            title: "Homeowners Insurance",
            description: "Protect your Macclenny home from covered perils.",
            href: "/locations/macclenny-fl/homeowners-insurance",
        },
        {
            title: "Mobile Home Insurance",
            description: "Specialized coverage for manufactured homes.",
            href: "/locations/macclenny-fl/mobile-home-insurance",
        },
        {
            title: "Boat Insurance",
            description: "Coverage for local and coastal boating.",
            href: "/locations/macclenny-fl/boat-insurance",
        },
        {
            title: "Business Insurance",
            description: "Commercial coverage for Baker County businesses.",
            href: "/locations/macclenny-fl/business-insurance",
        },
        {
            title: "Flood Insurance",
            description: "Separate flood protection where needed.",
            href: "/personal/flood-insurance-florida",
        },
    ],

    faqs: [
        {
            question: "Do you have an office in Macclenny?",
            answer: "Our office is in Lake City, a convenient drive from Macclenny via I-10. We serve all of Baker County and can handle insurance needs by phone, email, or in person at our Lake City location.",
        },
        {
            question: "Can you insure mobile homes in Baker County?",
            answer: "Yes! We work with carriers specializing in mobile home and manufactured housing insurance. Whether you own or rent your lot, we find coverage protecting your home and belongings.",
        },
        {
            question: "What about I-10 commuters' auto insurance?",
            answer: "Many Macclenny residents commute to Jacksonville on I-10. Highway driving affects your rate profile, but we compare carriers to find competitive rates for commuters while ensuring adequate coverage.",
        },
        {
            question: "Do Baker County businesses need special coverage?",
            answer: "Coverage needs depend on your operations. Most businesses need general liability and property coverage. Depending on your business, you may also need workers' comp, commercial auto, or other coverages.",
        },
        {
            question: "How do I get a quote for Macclenny insurance?",
            answer: "Call us at (386) 755-0050 or request a quote online. We'll discuss your needs and provide quotes from multiple carriers for comparison.",
        },
    ],
}

export const metadata: Metadata = generateCityMetadata({
    city: pageData.city,
    state: pageData.state,
    slug: pageData.slug,
    title: pageData.title,
    description: pageData.description,
})

export default function MacclennyPage() {
    return <CityPageTemplate data={pageData} />
}
