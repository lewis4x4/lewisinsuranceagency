import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Fort White",
    state: "FL",
    county: "Columbia",
    slug: "fort-white-fl",

    title: "Fort White, FL Insurance Agency | Lewis Insurance",
    description: "Home, auto, mobile home, and business insurance in Fort White, FL. Independent agents serving Columbia County. Compare quotes.",

    headline: "Insurance Agents Serving Fort White, Florida",
    subheadline: "Local independent insurance agency for Fort White and the springs area. We compare carriers to find coverage protecting your family at competitive rates.",

    overview: [
        "Fort White sits in Columbia County near some of Florida's most beautiful springs, including Ichetucknee Springs State Park. Lewis Insurance Agency serves this community with personalized insurance—understanding the unique needs of rural properties and spring-area homes.",
        "As an independent agency, we compare options from multiple carriers rather than selling one company's products. Whether you need home, auto, mobile home, boat, or business insurance, we find coverage fitting your situation.",
        "Since 1981, we've helped North Florida families with personal service. Fort White residents deserve an agent who takes time to understand their needs—not a distant call center reading scripts.",
        "Contact us to discuss your insurance. We'll find coverage that works for your situation and budget.",
    ],

    localFactors: [
        "Santa Fe River and springs area creates unique property considerations",
        "Rural Columbia County properties may need specialized coverage",
        "Mobile homes common—we specialize in manufactured home insurance",
        "Ichetucknee and springs attract visitors but locals need year-round protection",
        "Flood zones near rivers require attention",
        "Agricultural properties may need farm coverage options",
    ],

    neighborhoods: [
        "Fort White town center",
        "US-27 Corridor",
        "Ichetucknee Springs area",
        "Santa Fe River area",
        "High Springs",
        "Lake City",
        "Branford",
    ],

    topCoverages: [
        {
            title: "Auto Insurance",
            description: "Coverage for Columbia County drivers.",
            href: "/locations/fort-white-fl/auto-insurance",
        },
        {
            title: "Homeowners Insurance",
            description: "Protect your Fort White home.",
            href: "/locations/fort-white-fl/homeowners-insurance",
        },
        {
            title: "Mobile Home Insurance",
            description: "Manufactured home coverage.",
            href: "/locations/fort-white-fl/mobile-home-insurance",
        },
        {
            title: "Boat Insurance",
            description: "River and springs coverage.",
            href: "/locations/fort-white-fl/boat-insurance",
        },
        {
            title: "Business Insurance",
            description: "Commercial coverage for local businesses.",
            href: "/locations/fort-white-fl/business-insurance",
        },
        {
            title: "Flood Insurance",
            description: "Essential near rivers and springs.",
            href: "/personal/flood-insurance-florida",
        },
    ],

    faqs: [
        {
            question: "Do you serve Fort White?",
            answer: "Yes! Our Lake City office is nearby, and we serve all of Columbia County including Fort White. We handle insurance by phone, email, or in-person meetings.",
        },
        {
            question: "Do Fort White properties need flood insurance?",
            answer: "Properties near the Santa Fe River or Ichetucknee may be in flood zones. Standard homeowners excludes flood—separate coverage is essential for many Fort White properties.",
        },
        {
            question: "Can you insure rural properties?",
            answer: "Yes. We understand rural Columbia County properties with acreage, outbuildings, and unique characteristics. We find carriers covering these properties appropriately.",
        },
        {
            question: "What about mobile home insurance?",
            answer: "We specialize in mobile home and manufactured housing insurance. Whether you own or rent your lot, we find coverage protecting your home.",
        },
        {
            question: "How do I get a Fort White insurance quote?",
            answer: "Call (386) 755-0050 or request a quote online. We'll discuss your needs and provide options from multiple carriers.",
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

export default function FortWhitePage() {
    return <CityPageTemplate data={pageData} />
}
