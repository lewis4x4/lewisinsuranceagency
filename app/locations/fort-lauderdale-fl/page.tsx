import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Fort Lauderdale",
    state: "FL",
    county: "Broward",
    slug: "fort-lauderdale-fl",

    title: "Fort Lauderdale, FL Insurance | Lewis Insurance",
    description: "Find affordable home, auto, flood, and business insurance in Fort Lauderdale, FL. Lewis Insurance compares quotes for Broward County residents and businesses.",

    headline: "Insurance Agents in Fort Lauderdale, Florida",
    subheadline: "Get personalized insurance coverage for your Fort Lauderdale home, vehicle, or business. We compare rates from multiple carriers to find you the best deal.",

    overview: [
        "Fort Lauderdale and Broward County offer an appealing mix of beach living, boating lifestyle, and urban amenities. From the waterfront homes of Las Olas to the family communities of Coral Springs and Weston, the area draws residents seeking the South Florida lifestyle.",
        "Lewis Insurance serves all of Broward County and the greater Fort Lauderdale area. As an independent agency, we're not captive to any single carrier—we shop your coverage to find the best rates and coverage available for your property.",
        "Broward County's coastal location means significant hurricane and flood exposure. Many Fort Lauderdale homes are on canals, near the Intracoastal, or in low-lying areas where flood insurance isn't optional—it's essential. We help clients understand these risks and build appropriate protection.",
        "Whether you own a waterfront home, a condo overlooking the beach, or a business serving the local community, we're here to provide personalized insurance guidance. Get a free quote and see why Fort Lauderdale residents choose Lewis Insurance.",
    ],

    localFactors: [
        "Extensive canal system and Intracoastal Waterway create flood exposure throughout the county",
        "Beachfront and barrier island properties have high hurricane and flood risks",
        "Many properties are in FEMA high-risk flood zones requiring mandatory flood insurance",
        "High-rise condos need HO-6 policies coordinated with master policies and may have wind exclusions",
        "Boating culture means many residents need marine/watercraft coverage",
        "High auto theft rates in South Florida increase comprehensive coverage importance",
    ],

    neighborhoods: [
        "Las Olas",
        "Fort Lauderdale Beach",
        "Victoria Park",
        "Rio Vista",
        "Coral Ridge",
        "Lauderdale-by-the-Sea",
        "Pompano Beach",
        "Coral Springs",
        "Weston",
        "Plantation",
        "Davie",
        "Hollywood",
    ],

    topCoverages: [
        {
            title: "Homeowners Insurance",
            description: "Protect your Fort Lauderdale home from hurricanes and storms.",
            href: "/personal/homeowners-insurance-florida",
        },
        {
            title: "Flood Insurance",
            description: "Essential for Broward County's waterfront and low-lying areas.",
            href: "/personal/flood-insurance-florida",
        },
        {
            title: "Condo Insurance",
            description: "HO-6 coverage for Fort Lauderdale condos and high-rises.",
            href: "/personal/condo-insurance-florida",
        },
        {
            title: "Auto Insurance",
            description: "Coverage for Fort Lauderdale drivers.",
            href: "/personal/auto-insurance-florida",
        },
        {
            title: "Business Insurance",
            description: "Protect your Broward County business.",
            href: "/business",
        },
        {
            title: "Umbrella Insurance",
            description: "Extra liability protection for high-value homes and assets.",
            href: "/personal/umbrella-insurance-florida",
        },
    ],

    faqs: [
        {
            question: "Why is Fort Lauderdale home insurance so expensive?",
            answer: "Fort Lauderdale's coastal location creates high hurricane and flood exposure. Broward County also has a history of litigation that increases carrier costs. However, we shop multiple carriers to find the best available rates, and wind mitigation credits can significantly reduce premiums.",
        },
        {
            question: "Do I need flood insurance on a canal home?",
            answer: "Almost certainly yes. Canal homes in Fort Lauderdale are typically in high-risk flood zones where federal flood insurance is required for mortgages. Even if you don't have a mortgage, we strongly recommend coverage—canal properties are among the most flood-vulnerable in the area.",
        },
        {
            question: "What's different about condo insurance in Fort Lauderdale?",
            answer: "Fort Lauderdale has many high-rise condos, some with wind exclusions in their master policies. You need an HO-6 policy that covers your unit interior and may need to add wind coverage if your building excludes it. We'll review your condo docs to ensure you're properly covered.",
        },
        {
            question: "Can you insure waterfront and luxury homes?",
            answer: "Yes. High-value waterfront homes in Fort Lauderdale can be challenging to place with standard carriers, but we have access to specialty markets for luxury and coastal properties. We'll find coverage that protects your investment.",
        },
        {
            question: "Do you serve all of Broward County?",
            answer: "Yes! We serve Fort Lauderdale, Hollywood, Pompano Beach, Coral Springs, Weston, Plantation, Pembroke Pines, Deerfield Beach, and all other Broward County communities. We're licensed throughout Florida.",
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

export default function FortLauderdalePage() {
    return <CityPageTemplate data={pageData} />
}
