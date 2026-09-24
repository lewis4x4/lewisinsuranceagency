import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "West Palm Beach",
    state: "FL",
    county: "Palm Beach",
    slug: "west-palm-beach-fl",

    title: "West Palm Beach, FL Insurance | Lewis Insurance",
    description: "Find affordable home, auto, flood, and business insurance in West Palm Beach, FL. Lewis Insurance compares quotes for Palm Beach and businesses.",

    headline: "Insurance Agents in West Palm Beach, Florida",
    subheadline: "Get personalized insurance coverage for your West Palm Beach home, vehicle, or business. We compare rates from multiple carriers to find you the best deal.",

    overview: [
        "West Palm Beach and Palm Beach County offer a diverse mix of coastal luxury, suburban communities, and thriving business districts. From the historic estates of Palm Beach Island to the family neighborhoods of Wellington and Royal Palm Beach, the area attracts residents seeking South Florida's premier lifestyle.",
        "Lewis Insurance serves all of Palm Beach County with comprehensive personal and commercial insurance products. As an independent agency, we work with multiple carriers to find coverage that fits your needs—whether you're protecting a waterfront estate, an inland home, or a growing business.",
        "Palm Beach County's coastal location means hurricane and flood preparedness are essential. The Intracoastal Waterway, numerous canals, and proximity to the Atlantic create flood exposure throughout the region. We help West Palm Beach residents understand their risks and secure proper protection.",
        "Whether you're a longtime resident or new to the area, we provide personalized insurance guidance tailored to Palm Beach County's unique market. Get a free quote today and discover the Lewis Insurance difference.",
    ],

    localFactors: [
        "Coastal properties face significant hurricane and flood exposure from Atlantic storms",
        "Palm Beach Island and barrier island properties require specialty markets and higher coverage limits",
        "Inland areas like Wellington still face flood risk from drainage issues and heavy rain",
        "High-value homes require proper appraisals and adequate dwelling coverage",
        "Equestrian properties in Wellington area need specialized coverage for horses and facilities",
        "Hurricane deductibles are typically percentage-based—understanding your exposure is critical",
    ],

    neighborhoods: [
        "Downtown West Palm Beach",
        "Palm Beach Island",
        "Palm Beach Gardens",
        "Jupiter",
        "Wellington",
        "Royal Palm Beach",
        "Lake Worth",
        "Boynton Beach",
        "Delray Beach",
        "Boca Raton",
        "Northwood",
        "El Cid",
    ],

    topCoverages: [
        {
            title: "Homeowners Insurance",
            description: "Protect your West Palm Beach home from hurricanes, wind, and storms.",
            href: "/personal/homeowners-insurance-florida",
        },
        {
            title: "Flood Insurance",
            description: "Essential coverage for Palm Beach County's coastal and inland properties.",
            href: "/personal/flood-insurance-florida",
        },
        {
            title: "Condo Insurance",
            description: "HO-6 coverage for West Palm Beach condos and oceanfront high-rises.",
            href: "/personal/condo-insurance-florida",
        },
        {
            title: "Auto Insurance",
            description: "Coverage for Palm Beach County drivers on I-95 and local roads.",
            href: "/personal/auto-insurance-florida",
        },
        {
            title: "Business Insurance",
            description: "Protect your Palm Beach County business from liability and property risks.",
            href: "/business",
        },
        {
            title: "Umbrella Insurance",
            description: "Extra liability protection for high-value homes and waterfront properties.",
            href: "/personal/umbrella-insurance-florida",
        },
    ],

    faqs: [
        {
            question: "Why is West Palm Beach home insurance expensive?",
            answer: "Palm Beach County's coastal location creates significant hurricane exposure, and the area has many high-value homes that cost more to insure. However, we shop multiple carriers to find competitive rates, and wind mitigation features can significantly reduce premiums.",
        },
        {
            question: "Do I need flood insurance in West Palm Beach?",
            answer: "We strongly recommend it for most properties. Coastal areas and properties near the Intracoastal are often in high-risk flood zones. Even inland areas in Palm Beach County can flood from heavy rain and poor drainage. Standard homeowners policies don't cover flood damage.",
        },
        {
            question: "Can you insure luxury and high-value homes?",
            answer: "Yes. Palm Beach County has many luxury properties that require specialty insurance markets. We have access to high-value home insurers that understand the unique needs of estate properties, including higher coverage limits, agreed value policies, and coverage for fine art and collections.",
        },
        {
            question: "What about equestrian property insurance?",
            answer: "Wellington is a world-renowned equestrian community, and we can help with coverage for horse farms, equestrian facilities, and liability coverage for horse owners. This includes property coverage, equine mortality, and farm liability.",
        },
        {
            question: "Do you serve all of Palm Beach County?",
            answer: "Yes! We serve West Palm Beach, Palm Beach, Palm Beach Gardens, Jupiter, Wellington, Royal Palm Beach, Lake Worth, Boynton Beach, Delray Beach, Boca Raton, and all Palm Beach County communities. We're licensed throughout Florida.",
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

export default function WestPalmBeachPage() {
    return <CityPageTemplate data={pageData} />
}
