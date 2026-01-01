import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "High Springs",
    state: "FL",
    county: "Alachua",
    slug: "high-springs-fl",

    title: "High Springs, FL Insurance Agency | Lewis Insurance",
    description: "Home, auto, mobile home, and business insurance in High Springs, FL. Independent agents serving Alachua County since 1981. Compare carriers.",

    headline: "Insurance Agents Serving High Springs, Florida",
    subheadline: "Local independent insurance for High Springs and Alachua County. We compare carriers to find coverage protecting your family at competitive rates.",

    overview: [
        "High Springs is a charming community along US-441 near some of Florida's most famous springs, including Ginnie Springs. Lewis Insurance Agency serves this area with personalized insurance understanding the needs of springs-area properties.",
        "As an independent agency, we compare options from multiple carriers. Whether you need home, auto, mobile home, boat, or business insurance, we find coverage fitting your situation.",
        "Since 1981, we've helped North Florida families. High Springs residents deserve personal service—not a distant call center.",
        "Contact us to discuss your insurance needs.",
    ],

    localFactors: [
        "Santa Fe River and springs area creates unique property considerations",
        "Downtown High Springs has historic properties with specialized needs",
        "Tourism and springs activities drive local economy",
        "Mobile homes common—we specialize in manufactured home insurance",
        "Proximity to Gainesville provides employment options",
        "Flood zones near rivers require attention",
    ],

    neighborhoods: ["Downtown High Springs", "US-441 Corridor", "Santa Fe River area", "Springs area", "Gainesville", "Fort White", "Alachua", "Newberry"],

    topCoverages: [
        { title: "Auto Insurance", description: "Alachua County drivers.", href: "/locations/high-springs-fl/auto-insurance" },
        { title: "Homeowners Insurance", description: "Protect your home.", href: "/locations/high-springs-fl/homeowners-insurance" },
        { title: "Mobile Home Insurance", description: "Manufactured homes.", href: "/locations/high-springs-fl/mobile-home-insurance" },
        { title: "Boat Insurance", description: "River and springs coverage.", href: "/locations/high-springs-fl/boat-insurance" },
        { title: "Business Insurance", description: "Local businesses.", href: "/locations/high-springs-fl/business-insurance" },
        { title: "Flood Insurance", description: "Essential near rivers.", href: "/personal/flood-insurance-florida" },
    ],

    faqs: [
        { question: "Do you serve High Springs?", answer: "Yes! Our Lake City office is nearby and serves all of Alachua County. We handle insurance by phone, email, or in-person." },
        { question: "Do High Springs properties need flood insurance?", answer: "Properties near the Santa Fe River may be in flood zones. Standard homeowners excludes flood—separate coverage is often essential." },
        { question: "Can you insure springs-area businesses?", answer: "Yes. We insure tourism businesses, outfitters, and other springs-area operations." },
        { question: "Mobile home insurance?", answer: "We specialize in manufactured housing insurance for High Springs families." },
        { question: "How do I get a quote?", answer: "Call (386) 755-0050 or request online. We'll provide options from multiple carriers." },
    ],
}

export const metadata: Metadata = generateCityMetadata({
    city: pageData.city,
    state: pageData.state,
    slug: pageData.slug,
    title: pageData.title,
    description: pageData.description,
})

export default function HighSpringsPage() {
    return <CityPageTemplate data={pageData} />
}
