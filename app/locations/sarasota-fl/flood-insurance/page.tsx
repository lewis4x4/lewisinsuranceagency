import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Sarasota",
    state: "FL",
    citySlug: "sarasota-fl",
    serviceName: "Flood Insurance",
    serviceSlug: "flood-insurance",

    title: "Sarasota Flood Insurance | NFIP & Private Options",
    description: "Get flood insurance in Sarasota, FL. Compare NFIP and private flood coverage for Gulf Coast homes.",

    headline: "Sarasota Flood Insurance",
    subheadline: "Protect your Sarasota property from flood damage with coverage designed for Florida's Gulf Coast. Compare NFIP and private flood options for comprehensive protection.",

    overview: [
        "Flood damage is excluded from homeowners insurance, making separate flood coverage essential for Sarasota homeowners. The area's Gulf Coast location, barrier islands, and low elevation create significant flooding risks from storm surge, tropical rainfall, and coastal weather.",
        "Sarasota County has experienced significant flooding from recent hurricanes, with storm surge impacting properties from the barrier islands to well inland. Even properties not in designated high-risk flood zones have sustained flood damage from these events.",
        "We offer both NFIP (National Flood Insurance Program) and private flood insurance options. Private flood may provide higher coverage limits, replacement cost for contents, and shorter waiting periods—important considerations for Sarasota's valuable coastal properties.",
    ],

    whyNeeded: [
        {
            title: "Homeowners Insurance Excludes Floods",
            content: "Your homeowners policy does not cover flood damage—including storm surge from hurricanes. Flood insurance is the only protection for your Sarasota home against rising water damage.",
        },
        {
            title: "Gulf Coast Storm Surge",
            content: "Sarasota's Gulf Coast location and barrier islands face significant storm surge risk. Recent hurricanes have demonstrated how surge can devastate properties miles from the immediate coast.",
        },
        {
            title: "Barrier Island Exposure",
            content: "Siesta Key, Longboat Key, and other barrier islands face heightened flood risk from both Gulf surge and bay-side flooding. Flood insurance is essential for these properties.",
        },
        {
            title: "Inland Flooding Risk",
            content: "Even inland Sarasota areas like Lakewood Ranch can flood from heavy tropical rainfall. Don't assume you're safe because you're not on the water—flooding happens throughout the county.",
        },
    ],

    localConsiderations: [
        "Barrier island properties are typically in high-risk flood zones",
        "Storm surge zones extend beyond FEMA flood maps",
        "NFIP policies have 30-day waiting periods—buy before hurricane season",
        "Private flood may offer better rates for some Sarasota properties",
        "Elevation certificates help determine accurate flood risk",
        "Recent hurricane claims have impacted market availability",
    ],

    coverageHighlights: [
        { title: "Building Coverage", description: "Covers your home's structure up to $250,000 (NFIP)" },
        { title: "Contents Coverage", description: "Protects belongings up to $100,000 (NFIP)" },
        { title: "Higher Limits Available", description: "Private flood offers coverage above NFIP caps" },
        { title: "Replacement Cost Option", description: "Available through private flood carriers" },
        { title: "Storm Surge Coverage", description: "Covers hurricane-related rising water" },
        { title: "Debris Removal", description: "Covers removal of flood-damaged items" },
    ],

    faqs: [
        {
            question: "How much does flood insurance cost in Sarasota?",
            answer: "Sarasota flood insurance costs depend on flood zone, elevation, coverage limits, and deductible. Barrier island and coastal properties typically pay more than inland areas. NFIP and private flood rates can vary significantly—comparing both is important.",
        },
        {
            question: "Is flood insurance required on Siesta Key?",
            answer: "If you have a federally-backed mortgage on a property in a high-risk flood zone, flood insurance is required. Most Siesta Key and barrier island properties are in these zones. Even without a mortgage requirement, flood insurance is essential for coastal Sarasota properties.",
        },
        {
            question: "Does flood insurance cover storm surge?",
            answer: "Yes. Flood insurance covers storm surge—ocean water pushed inland by hurricanes. This is the primary cause of flood damage during hurricanes and is specifically excluded from homeowners insurance.",
        },
        {
            question: "What's the difference between NFIP and private flood?",
            answer: "NFIP is the federal program with standardized coverage (max $250,000 building, $100,000 contents). Private flood insurers may offer higher limits, replacement cost coverage, shorter waiting periods, and additional living expenses.",
        },
        {
            question: "Do I need flood insurance in Lakewood Ranch?",
            answer: "While Lakewood Ranch is inland, the area can still flood from heavy rainfall during tropical storms. Flood damage is excluded from homeowners insurance regardless of location. We recommend reviewing flood insurance options for all Sarasota County properties.",
        },
    ],

    relatedServices: [
        { title: "Sarasota Homeowners Insurance", href: "/locations/sarasota-fl/homeowners-insurance", description: "Wind and property coverage" },
        { title: "Sarasota Auto Insurance", href: "/locations/sarasota-fl/auto-insurance", description: "Comprehensive covers car flooding" },
        { title: "Sarasota County Insurance", href: "/locations/sarasota-fl", description: "All insurance services" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function SarasotaFloodInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
