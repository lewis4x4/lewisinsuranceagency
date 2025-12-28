import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Tampa",
    state: "FL",
    county: "Hillsborough",
    slug: "tampa-fl",

    title: "Tampa Insurance Agency",
    description: "Find affordable home, auto, flood, and business insurance in Tampa, FL. Lewis Insurance compares quotes from multiple carriers for Tampa Bay residents and businesses.",

    headline: "Insurance Agents in Tampa, Florida",
    subheadline: "Get personalized insurance coverage for your Tampa home, vehicle, or business. We compare rates from multiple carriers to find you the best deal.",

    overview: [
        "Tampa and the greater Tampa Bay area offer a vibrant mix of urban living, waterfront properties, and growing business opportunities. With this diversity comes varied insurance needs—from protecting historic Ybor City homes to covering South Tampa waterfront properties to insuring growing businesses in Westshore.",
        "Lewis Insurance serves the entire Tampa Bay region, including Hillsborough County and surrounding areas. As an independent agency, we're not tied to one carrier—we shop your coverage with multiple insurers to find the best rates and coverage for your specific situation.",
        "Tampa's location on Tampa Bay means many properties face hurricane, flood, and wind risks. We help Tampa area residents understand their exposure, choose appropriate coverage levels, and find the right balance of protection and affordability.",
        "Whether you're buying your first Tampa home, moving from out of state, or need commercial coverage for your growing business, we're here to help. Get a free quote and experience the local service that sets us apart from national call centers.",
    ],

    localFactors: [
        "Tampa Bay's coastal location creates hurricane and flood exposure for waterfront and low-lying properties",
        "Older homes in historic neighborhoods like Hyde Park and Seminole Heights may need specialized coverage",
        "Flood zones vary—properties near the bay, rivers, and low areas need flood insurance",
        "Auto rates reflect Tampa's traffic congestion and growing population",
        "Business insurance needs range from downtown offices to Westshore corporate parks to Ybor entertainment venues",
        "Wind mitigation inspections can significantly reduce homeowners premiums",
    ],

    neighborhoods: [
        "Downtown Tampa",
        "South Tampa",
        "Hyde Park",
        "Bayshore",
        "Westshore",
        "Ybor City",
        "Seminole Heights",
        "Channelside",
        "Tampa Palms",
        "New Tampa",
        "Carrollwood",
        "Westchase",
    ],

    topCoverages: [
        {
            title: "Homeowners Insurance",
            description: "Protect your Tampa home from hurricanes, storms, and more.",
            href: "/personal/homeowners-insurance-florida",
        },
        {
            title: "Flood Insurance",
            description: "Essential for Tampa Bay's waterfront and low-lying areas.",
            href: "/personal/flood-insurance-florida",
        },
        {
            title: "Auto Insurance",
            description: "Coverage for Tampa's busy roads and highways.",
            href: "/personal/auto-insurance-florida",
        },
        {
            title: "Condo Insurance",
            description: "HO-6 coverage for Tampa's condos and townhomes.",
            href: "/personal/condo-insurance-florida",
        },
        {
            title: "Business Insurance",
            description: "Protect your Tampa Bay business operations.",
            href: "/business",
        },
        {
            title: "Workers Compensation",
            description: "Required coverage for Tampa employers.",
            href: "/business/workers-compensation-florida",
        },
    ],

    faqs: [
        {
            question: "Is Tampa considered high-risk for hurricanes?",
            answer: "While Tampa has been fortunate to avoid direct major hurricane hits in recent decades, the area remains at significant risk. Tampa Bay's geography could amplify storm surge in a direct hit scenario. All homeowners in the Tampa area should have adequate wind coverage and consider flood insurance.",
        },
        {
            question: "Do I need flood insurance in Tampa?",
            answer: "If you're in a designated flood zone (common near Tampa Bay, the Hillsborough River, and low-lying areas), your mortgage lender likely requires it. Even outside flood zones, we often recommend flood coverage—Tampa's flat terrain and summer afternoon storms can cause flooding almost anywhere.",
        },
        {
            question: "How can I lower my Tampa homeowners insurance?",
            answer: "Get a wind mitigation inspection to document hurricane-resistant features. Consider higher deductibles if you can afford them. Bundle home and auto. Maintain good credit. And let us shop multiple carriers—rates vary significantly between insurers for the same Tampa property.",
        },
        {
            question: "What's unique about insuring older Tampa homes?",
            answer: "Tampa's historic neighborhoods have beautiful older homes, but they can be challenging to insure. Many carriers require updated roofs, plumbing, and electrical. We work with carriers that understand older homes and can find coverage—sometimes with requirements to make certain updates.",
        },
        {
            question: "Do you serve the entire Tampa Bay area?",
            answer: "Yes! We serve all of Tampa Bay including St. Petersburg, Clearwater, Brandon, and surrounding communities in Hillsborough, Pinellas, and Pasco counties. Our independent agency model lets us find coverage throughout the region.",
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

export default function TampaPage() {
    return <CityPageTemplate data={pageData} />
}
