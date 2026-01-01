import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Mayo",
    state: "FL",
    county: "Lafayette",
    slug: "mayo-fl",

    title: "Mayo, FL Insurance Agency | Lewis Insurance",
    description: "Home, auto, mobile home, and business insurance in Mayo, FL. Independent agents serving Lafayette County since 1981. Compare carriers.",

    headline: "Insurance Agents Serving Mayo, Florida",
    subheadline: "Local independent insurance for Mayo and Lafayette County. We compare carriers to find coverage protecting your family at competitive rates.",

    overview: [
        "Mayo is the county seat of Lafayette County, one of Florida's most rural counties. Lewis Insurance Agency serves this community with personalized insurance understanding rural properties and agricultural operations.",
        "As an independent agency, we compare options from multiple carriers. Whether you need home, auto, mobile home, boat, or business insurance, we find coverage fitting your situation.",
        "Since 1981, we've helped North Florida families. Mayo residents deserve personal service—not a distant call center.",
        "Contact us to discuss your insurance needs.",
    ],

    localFactors: [
        "Rural Lafayette County properties have unique coverage needs",
        "Mobile homes common—we specialize in manufactured home insurance",
        "Agricultural operations may need farm coverage",
        "US-27 corridor connects to larger communities",
        "Small-town character means personalized service matters",
        "Distance from urban areas affects some coverage factors",
    ],

    neighborhoods: ["Downtown Mayo", "US-27 Corridor", "Branford", "Live Oak", "Lake City", "Perry"],

    topCoverages: [
        { title: "Auto Insurance", description: "Lafayette County drivers.", href: "/locations/mayo-fl/auto-insurance" },
        { title: "Homeowners Insurance", description: "Protect your home.", href: "/locations/mayo-fl/homeowners-insurance" },
        { title: "Mobile Home Insurance", description: "Manufactured homes.", href: "/locations/mayo-fl/mobile-home-insurance" },
        { title: "Boat Insurance", description: "River access coverage.", href: "/locations/mayo-fl/boat-insurance" },
        { title: "Business Insurance", description: "Local businesses.", href: "/locations/mayo-fl/business-insurance" },
        { title: "Flood Insurance", description: "Where needed.", href: "/personal/flood-insurance-florida" },
    ],

    faqs: [
        { question: "Do you serve Mayo?", answer: "Yes! Our Lake City office serves all of Lafayette County. We handle insurance by phone, email, or in-person." },
        { question: "Can you insure rural and farm properties?", answer: "Yes. We understand rural Lafayette County properties with acreage, outbuildings, and agricultural operations." },
        { question: "Mobile home insurance?", answer: "We specialize in manufactured housing insurance for Mayo families." },
        { question: "What about small businesses?", answer: "We insure Mayo businesses with appropriate commercial coverage." },
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

export default function MayoPage() {
    return <CityPageTemplate data={pageData} />
}
