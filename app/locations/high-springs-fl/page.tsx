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
        "High Springs is a charming Alachua County community of about 5,800 residents known as the 'Antique Capital of North Central Florida' for its historic downtown filled with antique shops and restaurants. The town sits near several first-magnitude springs including Ginnie Springs, Blue Springs, and the Santa Fe River, making it a premier destination for cave diving, tubing, and outdoor recreation. Lewis Insurance Agency serves High Springs with personalized insurance about 40 minutes from our Lake City office.",
        "The Santa Fe River corridor creates unique insurance considerations for High Springs property owners. Properties near the river face flood exposure—standard homeowners insurance excludes flood damage, so separate flood coverage is essential for many homes. The karst terrain underlying the area can also create sinkhole risks. Understanding your specific property's exposure helps ensure proper coverage.",
        "High Springs attracts both tourism businesses and commuters working in nearby Gainesville. This creates diverse insurance needs—from liability coverage for diving outfitters and recreational businesses to standard home and auto policies for families. Downtown's historic buildings may need coverage considerations for older construction. Mobile homes throughout the surrounding area require specialized policies.",
        "As an independent agency since 1981, we compare quotes from multiple carriers for High Springs residents and businesses. Whether you need homeowners, flood, mobile home, auto, boat, or commercial insurance, we find coverage fitting your situation. The local service from a nearby agency beats distant call centers—contact us to discuss your specific needs.",
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
