import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Branford",
    state: "FL",
    county: "Suwannee",
    slug: "branford-fl",

    title: "Branford, FL Insurance Agency | Lewis Insurance",
    description: "Home, auto, mobile home, and business insurance in Branford, FL. Independent agents serving Suwannee County. Compare quotes.",

    headline: "Insurance Agents Serving Branford, Florida",
    subheadline: "Local independent insurance agency for Branford and the Suwannee River area. We compare carriers to find coverage that protects your family and budget.",

    overview: [
        "Branford sits at the confluence of the Suwannee and Santa Fe rivers, making it a unique community with specific insurance considerations. Lewis Insurance Agency understands the needs of Branford residents—from riverfront properties to rural acreage.",
        "As an independent agency, we're not limited to one company's products. We compare options from multiple carriers to find the right coverage for Branford families, whether you need home, auto, mobile home, boat, or business insurance.",
        "Since 1981, we've helped North Florida communities with personalized insurance service. Branford residents deserve an agent who takes time to understand their needs, not a call center reading from a script.",
        "Contact us to discuss your insurance needs. We'll help you find coverage that fits your situation and budget.",
    ],

    localFactors: [
        "Suwannee River and Santa Fe River proximity creates flood zone considerations",
        "Many riverfront and rural properties need specialized coverage",
        "Popular area for boating, kayaking, and spring activities",
        "Mobile homes common in the area—we specialize in manufactured home coverage",
        "Small-town atmosphere with personalized service expectations",
        "Agricultural properties may need farm-specific coverage options",
    ],

    neighborhoods: [
        "Downtown Branford",
        "US-27 Corridor",
        "Suwannee River area",
        "Santa Fe River area",
        "Live Oak",
        "Fort White",
        "High Springs",
        "Mayo",
    ],

    topCoverages: [
        {
            title: "Auto Insurance",
            description: "Coverage for Branford drivers on rural and highway roads.",
            href: "/locations/branford-fl/auto-insurance",
        },
        {
            title: "Homeowners Insurance",
            description: "Protect your Branford home from covered perils.",
            href: "/locations/branford-fl/homeowners-insurance",
        },
        {
            title: "Mobile Home Insurance",
            description: "Specialized coverage for manufactured homes.",
            href: "/locations/branford-fl/mobile-home-insurance",
        },
        {
            title: "Boat Insurance",
            description: "Coverage for river and spring boating.",
            href: "/locations/branford-fl/boat-insurance",
        },
        {
            title: "Business Insurance",
            description: "Commercial coverage for local businesses.",
            href: "/locations/branford-fl/business-insurance",
        },
        {
            title: "Flood Insurance",
            description: "Essential for properties near the rivers.",
            href: "/personal/flood-insurance-florida",
        },
    ],

    faqs: [
        {
            question: "Do you have an office in Branford?",
            answer: "Our office is in Lake City, conveniently located for Branford residents. We serve all of Suwannee County and can handle your insurance needs by phone, email, or in person at our Lake City location.",
        },
        {
            question: "Do Branford homes need flood insurance?",
            answer: "Given Branford's location near the Suwannee and Santa Fe rivers, many properties are in flood zones. Even if not required, flood insurance protects against a risk that standard homeowners policies exclude. We can help evaluate your flood exposure.",
        },
        {
            question: "Can you insure riverfront property in Branford?",
            answer: "Yes. Riverfront properties have unique needs—flood coverage, dock structures, and sometimes boat houses. We work with carriers that understand waterfront properties and can find appropriate coverage.",
        },
        {
            question: "What about mobile home insurance in Branford?",
            answer: "We specialize in mobile home and manufactured housing insurance. Whether you own your lot or rent, we can find coverage that protects your home and belongings from Suwannee County weather and other risks.",
        },
        {
            question: "How do I get an insurance quote for Branford?",
            answer: "Call us at (386) 755-0050 or request a quote online. We'll ask about your coverage needs and provide quotes from multiple carriers so you can compare options.",
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

export default function BranfordPage() {
    return <CityPageTemplate data={pageData} />
}
