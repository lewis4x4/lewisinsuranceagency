import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Jasper",
    state: "FL",
    county: "Hamilton",
    slug: "jasper-fl",

    title: "Jasper, FL Insurance Agency | Lewis Insurance",
    description: "Home, auto, mobile home, and business insurance in Jasper, FL. Independent agents serving Hamilton County since 1981. Compare carriers.",

    headline: "Insurance Agents Serving Jasper, Florida",
    subheadline: "Local independent insurance for Jasper and Hamilton County. We compare carriers to find coverage protecting your family at competitive rates.",

    overview: [
        "Jasper serves as the county seat of Hamilton County, located along I-75 in North Florida. Lewis Insurance Agency provides personalized insurance to this community—understanding rural properties and the needs of I-75 corridor businesses.",
        "As an independent agency, we compare options from multiple carriers. Whether you need home, auto, mobile home, boat, or business insurance, we find coverage fitting your situation.",
        "Since 1981, we've helped North Florida families. Jasper residents deserve personal service—not a distant call center.",
        "Contact us to discuss your insurance needs.",
    ],

    localFactors: [
        "I-75 corridor location affects traffic and business patterns",
        "Rural Hamilton County properties need appropriate coverage",
        "Mobile homes common—we specialize in manufactured home insurance",
        "County seat status means local businesses serve the area",
        "Proximity to Georgia border may affect some coverage considerations",
        "Agricultural properties may need farm coverage",
    ],

    neighborhoods: ["Downtown Jasper", "I-75 Corridor", "US-41 Area", "White Springs", "Jennings", "Lake City", "Live Oak"],

    topCoverages: [
        { title: "Auto Insurance", description: "Hamilton County drivers.", href: "/locations/jasper-fl/auto-insurance" },
        { title: "Homeowners Insurance", description: "Protect your home.", href: "/locations/jasper-fl/homeowners-insurance" },
        { title: "Mobile Home Insurance", description: "Manufactured homes.", href: "/locations/jasper-fl/mobile-home-insurance" },
        { title: "Boat Insurance", description: "River and lake coverage.", href: "/locations/jasper-fl/boat-insurance" },
        { title: "Business Insurance", description: "Local businesses.", href: "/locations/jasper-fl/business-insurance" },
        { title: "Flood Insurance", description: "Where needed.", href: "/personal/flood-insurance-florida" },
    ],

    faqs: [
        { question: "Do you serve Jasper?", answer: "Yes! Our Lake City office serves all of Hamilton County. We handle insurance by phone, email, or in-person." },
        { question: "Can you insure rural properties?", answer: "Yes. We understand Hamilton County's rural properties with acreage and outbuildings." },
        { question: "What about I-75 businesses?", answer: "We insure businesses serving the I-75 corridor with appropriate commercial coverage." },
        { question: "Mobile home insurance?", answer: "We specialize in manufactured housing insurance for Jasper families." },
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

export default function JasperPage() {
    return <CityPageTemplate data={pageData} />
}
