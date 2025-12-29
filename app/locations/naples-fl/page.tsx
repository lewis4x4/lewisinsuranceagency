import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Naples",
    state: "FL",
    county: "Collier",
    slug: "naples-fl",

    title: "Naples, FL Insurance Agency | Lewis Insurance",
    description: "Find affordable home, auto, flood, and business insurance in Naples, FL. Lewis Insurance compares quotes from multiple carriers for Collier County residents and businesses.",

    headline: "Insurance Agents in Naples, Florida",
    subheadline: "Get personalized insurance coverage for your Naples home, vehicle, or business. We compare rates from multiple carriers to find you the best deal.",

    overview: [
        "Naples is renowned for its pristine beaches, world-class golf courses, and affluent communities along the Gulf Coast. From the historic Naples Pier to the luxury estates of Port Royal, the city attracts residents seeking Southwest Florida's finest lifestyle.",
        "Lewis Insurance serves Naples and all of Collier County with comprehensive personal and commercial insurance products. As an independent agency, we work with multiple carriers to find coverage that fits your needs—whether you're protecting a beachfront home, a golf course villa, or a local business.",
        "Naples faces unique insurance challenges due to its Gulf Coast location. Hurricane exposure is significant, and many areas experienced flooding during recent storms. We help Naples residents understand their wind and flood risks, navigate coverage options, and secure proper protection for their properties.",
        "The Naples insurance market includes many high-value homes that require specialty coverage. We have access to carriers that specialize in luxury properties, ensuring your home is properly protected. Get a free quote and experience personalized service from a trusted independent agency.",
    ],

    localFactors: [
        "Gulf Coast location creates significant hurricane exposure from storms approaching from the west",
        "Many areas flooded during recent hurricanes—flood insurance is essential throughout Collier County",
        "High-value waterfront properties require specialty insurance markets and higher coverage limits",
        "Golf course communities may have HOA master policies that affect individual coverage needs",
        "Older Naples homes may need updates to qualify for coverage with standard carriers",
        "Wind mitigation features are especially valuable for reducing premiums in this coastal market",
    ],

    neighborhoods: [
        "Port Royal",
        "Old Naples",
        "Pelican Bay",
        "Vanderbilt Beach",
        "Park Shore",
        "Coquina Sands",
        "Grey Oaks",
        "Tiburon",
        "Mediterra",
        "Bonita Springs",
        "Marco Island",
        "Estero",
    ],

    topCoverages: [
        {
            title: "Homeowners Insurance",
            description: "Protect your Naples home from Gulf hurricanes and tropical storms.",
            href: "/personal/homeowners-insurance-florida",
        },
        {
            title: "Flood Insurance",
            description: "Critical coverage for Naples coastal and low-lying properties.",
            href: "/personal/flood-insurance-florida",
        },
        {
            title: "Condo Insurance",
            description: "HO-6 coverage for Naples condos and golf community villas.",
            href: "/personal/condo-insurance-florida",
        },
        {
            title: "Auto Insurance",
            description: "Coverage for Naples and Collier County drivers.",
            href: "/personal/auto-insurance-florida",
        },
        {
            title: "Business Insurance",
            description: "Protect your Naples business from liability and property risks.",
            href: "/business",
        },
        {
            title: "Umbrella Insurance",
            description: "Extra liability protection for high-value Naples properties.",
            href: "/personal/umbrella-insurance-florida",
        },
    ],

    faqs: [
        {
            question: "How did recent hurricanes affect Naples insurance?",
            answer: "Recent hurricanes demonstrated Naples' vulnerability to both wind and flood damage. Many properties that weren't previously in flood zones experienced flooding. Insurance rates have increased, and flood insurance has become more important than ever. We help clients understand their current exposure and find the best available coverage.",
        },
        {
            question: "Do I need flood insurance in Naples?",
            answer: "We strongly recommend it for virtually all Naples properties. Recent storms showed that flooding can occur well beyond designated flood zones. Standard homeowners policies don't cover flood damage, and Naples' low elevation and Gulf proximity create significant flood risk.",
        },
        {
            question: "Can you insure luxury homes in Port Royal and Old Naples?",
            answer: "Yes. Naples has many high-value waterfront properties that require specialty insurance markets. We work with carriers that specialize in luxury homes, offering higher coverage limits, agreed value policies, and coverage for fine art, jewelry, and collections.",
        },
        {
            question: "What about golf course community homes?",
            answer: "Many Naples golf communities have HOA master policies that cover common areas and sometimes building exteriors. We'll review your community's coverage to ensure your individual policy properly fills gaps. You may need an HO-6 policy similar to condo coverage.",
        },
        {
            question: "Do you serve Marco Island and Bonita Springs?",
            answer: "Yes! We serve all of Collier County including Naples, Marco Island, Bonita Springs, Estero, and surrounding communities. Marco Island properties face especially high hurricane exposure due to their barrier island location.",
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

export default function NaplesPage() {
    return <CityPageTemplate data={pageData} />
}
