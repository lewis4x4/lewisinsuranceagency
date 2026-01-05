import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "White Springs",
    state: "FL",
    county: "Hamilton",
    slug: "white-springs-fl",

    title: "White Springs, FL Insurance Agency | Lewis Insurance",
    description: "Home, auto, mobile home, and business insurance in White Springs, FL. Independent agents serving Hamilton County since 1981. Compare carriers.",

    headline: "Insurance Agents Serving White Springs, Florida",
    subheadline: "Local independent insurance for White Springs and Hamilton County. We compare carriers to find coverage protecting your family at competitive rates.",

    overview: [
        "White Springs is a historic community along the Suwannee River, known for its Victorian-era heritage and the Stephen Foster Folk Culture Center State Park. With a population of under 500 residents, this tight-knit Hamilton County town has deep roots in Florida's cultural history. Lewis Insurance Agency serves White Springs with personalized insurance that understands the unique needs of riverfront properties and rural living.",
        "The town's location on the Suwannee River creates specific insurance considerations. Properties near the river face flood risks that require separate flood insurance—standard homeowners policies exclude flood damage. Historic homes, some dating back to the town's days as a mineral springs health resort, may need coverage considerations for older construction and architectural features.",
        "As an independent agency just 25 minutes away in Lake City, we compare options from multiple insurance carriers for White Springs families. Whether you need homeowners insurance for a historic property, mobile home coverage, auto insurance, boat insurance for Suwannee River recreation, or business coverage, we find policies that fit your situation and budget.",
        "The annual Florida Folk Festival draws thousands of visitors to White Springs, but local residents need year-round protection. Since 1981, we've helped North Florida families with personal insurance service—not distant call centers. Contact us to discuss your specific insurance needs and get quotes from multiple carriers.",
    ],

    localFactors: [
        "Suwannee River proximity creates flood considerations",
        "Historic properties may have specialized coverage needs",
        "Rural Hamilton County properties need appropriate coverage",
        "Mobile homes common—we specialize in manufactured home insurance",
        "Stephen Foster park attracts visitors; locals need year-round protection",
        "Agricultural properties may need farm coverage",
    ],

    neighborhoods: [
        "Downtown White Springs",
        "US-41 Corridor",
        "Suwannee River area",
        "Jasper",
        "Lake City",
        "Live Oak",
    ],

    topCoverages: [
        { title: "Auto Insurance", description: "Hamilton County drivers.", href: "/locations/white-springs-fl/auto-insurance" },
        { title: "Homeowners Insurance", description: "Protect your home.", href: "/locations/white-springs-fl/homeowners-insurance" },
        { title: "Mobile Home Insurance", description: "Manufactured homes.", href: "/locations/white-springs-fl/mobile-home-insurance" },
        { title: "Boat Insurance", description: "Suwannee River coverage.", href: "/locations/white-springs-fl/boat-insurance" },
        { title: "Business Insurance", description: "Local businesses.", href: "/locations/white-springs-fl/business-insurance" },
        { title: "Flood Insurance", description: "River area protection.", href: "/personal/flood-insurance-florida" },
    ],

    faqs: [
        {
            question: "Do you serve White Springs?",
            answer: "Yes! Our Lake City office serves all of Hamilton County. We handle insurance by phone, email, or in-person.",
        },
        {
            question: "Do White Springs homes need flood insurance?",
            answer: "Properties near the Suwannee River may be in flood zones. Standard homeowners excludes flood—separate coverage is often essential.",
        },
        {
            question: "Can you insure historic properties?",
            answer: "Yes. White Springs has historic homes with unique needs. We find carriers understanding older and historic structures.",
        },
        {
            question: "What about mobile homes?",
            answer: "We specialize in manufactured housing insurance. We find coverage protecting your mobile home.",
        },
        {
            question: "How do I get a quote?",
            answer: "Call (386) 755-0050 or request online. We'll provide options from multiple carriers.",
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

export default function WhiteSpringsPage() {
    return <CityPageTemplate data={pageData} />
}
