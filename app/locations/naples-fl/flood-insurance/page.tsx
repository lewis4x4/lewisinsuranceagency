import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Naples",
    state: "FL",
    citySlug: "naples-fl",
    serviceName: "Flood Insurance",
    serviceSlug: "flood-insurance",

    title: "Naples Flood Insurance | NFIP & Private Options",
    description: "Get flood insurance in Naples, FL. Compare NFIP and private flood coverage for Collier County homes.",

    headline: "Naples Flood Insurance",
    subheadline: "Protect your Naples property from flood damage with coverage designed for Southwest Florida's Gulf Coast risks. Compare NFIP and private flood options for your home.",

    overview: [
        "Flood damage is excluded from homeowners insurance, making separate flood coverage essential for Naples homeowners. The area's Gulf Coast location, low elevation, and hurricane exposure create significant flooding risks from storm surge, heavy rainfall, and tropical systems.",
        "Recent hurricanes have demonstrated Naples' vulnerability to catastrophic flooding. Storm surge from hurricanes can devastate coastal and inland properties alike. Even properties miles from the beach have experienced significant flood damage from these events.",
        "We offer both NFIP (National Flood Insurance Program) and private flood insurance options. For high-value Naples homes, private flood may provide essential coverage above NFIP limits, replacement cost coverage, and additional protection your property requires.",
    ],

    whyNeeded: [
        {
            title: "Homeowners Insurance Excludes Floods",
            content: "Your homeowners policy does not cover flood damage—including storm surge from hurricanes. Flood insurance is the only way to protect your Naples home from rising water damage.",
        },
        {
            title: "Gulf Coast Storm Surge",
            content: "Naples' Gulf Coast location exposes properties to devastating storm surge. Recent hurricanes have sent surge miles inland, flooding homes that never expected water damage.",
        },
        {
            title: "Hurricane Flooding Reality",
            content: "Most hurricane damage comes from flooding, not wind. Your homeowners policy covers wind damage; only flood insurance covers storm surge and rainfall flooding that hurricanes bring.",
        },
        {
            title: "High-Value Property Protection",
            content: "NFIP limits ($250,000 building, $100,000 contents) may not adequately protect Naples' high-value homes. Private flood insurance can provide the higher limits your property needs.",
        },
    ],

    localConsiderations: [
        "Many Naples properties are in high-risk Zone AE or VE flood zones",
        "Storm surge zones extend well beyond beachfront properties",
        "NFIP policies have 30-day waiting periods—don't wait for hurricane season",
        "High-value homes may need private flood for adequate coverage limits",
        "Elevation certificates help determine accurate flood risk and rates",
        "Recent hurricane claims have impacted availability and pricing",
    ],

    coverageHighlights: [
        { title: "Building Coverage", description: "Covers your home's structure up to $250,000 (NFIP)" },
        { title: "Contents Coverage", description: "Protects belongings up to $100,000 (NFIP)" },
        { title: "Higher Limits Available", description: "Private flood offers coverage above NFIP caps" },
        { title: "Replacement Cost Option", description: "Available through private flood carriers" },
        { title: "Storm Surge Coverage", description: "Covers hurricane-related rising water" },
        { title: "Additional Living Expenses", description: "Available through some private carriers" },
    ],

    faqs: [
        {
            question: "How much does flood insurance cost in Naples?",
            answer: "Naples flood insurance costs depend on flood zone, elevation, property value, and coverage limits. Coastal properties in high-risk zones may pay $2,000-$5,000+ annually. Private flood options vary—some properties find better rates privately, others through NFIP.",
        },
        {
            question: "Is flood insurance required in Naples?",
            answer: "Required if you have a federally-backed mortgage in a high-risk flood zone. Given Naples' hurricane history and coastal location, we strongly recommend flood insurance for all Collier County properties regardless of zone designation.",
        },
        {
            question: "Does flood insurance cover storm surge?",
            answer: "Yes. Flood insurance covers storm surge, which is rising water from ocean/gulf pushed inland by hurricanes. This is the most common type of hurricane flooding damage and is specifically excluded from homeowners insurance.",
        },
        {
            question: "What if my Naples home is worth more than NFIP limits?",
            answer: "NFIP limits are $250,000 for building and $100,000 for contents—often insufficient for Naples properties. Private flood insurance can provide higher limits, replacement cost coverage, and additional features for high-value homes.",
        },
        {
            question: "When should I buy flood insurance in Naples?",
            answer: "Now. NFIP policies have a 30-day waiting period, and you cannot purchase flood insurance when a storm is threatening. Buy coverage well before hurricane season (June 1) to ensure you're protected.",
        },
    ],

    relatedServices: [
        { title: "Naples Homeowners Insurance", href: "/locations/naples-fl/homeowners-insurance", description: "Wind and property coverage" },
        { title: "Naples Condo Insurance", href: "/locations/naples-fl/condo-insurance", description: "Flood coverage for condo units" },
        { title: "Collier County Insurance", href: "/locations/naples-fl", description: "All insurance services" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function NaplesFloodInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
