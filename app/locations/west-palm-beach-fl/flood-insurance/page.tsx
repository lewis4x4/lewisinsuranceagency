import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "West Palm Beach",
    state: "FL",
    citySlug: "west-palm-beach-fl",
    serviceName: "Flood Insurance",
    serviceSlug: "flood-insurance",

    title: "West Palm Beach Flood Insurance | NFIP & Private Options",
    description: "Get flood insurance in West Palm Beach, FL. Compare NFIP and private flood coverage for coastal Palm Beach County homes. Essential hurricane and storm surge protection.",

    headline: "West Palm Beach Flood Insurance",
    subheadline: "Protect your West Palm Beach property from flood damage with coverage designed for Palm Beach County's coastal environment. Compare NFIP and private flood options for the best fit.",

    overview: [
        "Flood damage is specifically excluded from homeowners insurance, making separate flood coverage essential for West Palm Beach homeowners. The area's coastal location, low elevation, and hurricane exposure create significant flooding risks from storm surge, heavy rainfall, and tropical systems.",
        "Palm Beach County has experienced billions in flood damage over the years. From the Intracoastal Waterway to areas near Lake Worth and the canal systems, many West Palm Beach neighborhoods face real flood risk—even outside designated high-risk zones.",
        "We offer both NFIP (National Flood Insurance Program) and private flood insurance options. Private flood may provide higher coverage limits, replacement cost for contents, and shorter waiting periods—sometimes at competitive rates for Palm Beach County properties.",
    ],

    whyNeeded: [
        {
            title: "Homeowners Insurance Excludes Floods",
            content: "Your homeowners policy does not cover flood damage—including hurricane-related storm surge and flooding. Flood insurance is the only way to protect your West Palm Beach home from rising water damage.",
        },
        {
            title: "Coastal Flood Exposure",
            content: "West Palm Beach's Atlantic coast location and low elevation create significant flood risk. Storm surge, heavy rainfall, and king tides can all cause flooding in coastal Palm Beach County.",
        },
        {
            title: "Hurricane-Related Flooding",
            content: "Most hurricane damage comes from flooding, not wind. Storm surge and heavy rainfall from hurricanes can devastate homes. Your homeowners policy covers wind damage; flood insurance covers water damage.",
        },
        {
            title: "Mortgage Requirements",
            content: "If you have a federally-backed mortgage and your property is in a high-risk flood zone, flood insurance is required. Even without a requirement, flood coverage is wise for West Palm Beach properties.",
        },
    ],

    localConsiderations: [
        "Many West Palm Beach properties are in high-risk Zone AE or VE",
        "Storm surge zones extend beyond FEMA flood zones",
        "NFIP policies have 30-day waiting periods—plan ahead",
        "Private flood may offer better rates for some Palm Beach properties",
        "Elevation certificates help determine accurate flood risk",
        "Contents coverage must be purchased separately from building coverage",
    ],

    coverageHighlights: [
        { title: "Building Coverage", description: "Covers your home's structure up to $250,000 (NFIP)" },
        { title: "Contents Coverage", description: "Protects belongings up to $100,000 (NFIP)" },
        { title: "Higher Limits Available", description: "Private flood offers coverage above NFIP caps" },
        { title: "Replacement Cost Option", description: "Available through private flood carriers" },
        { title: "Storm Surge Coverage", description: "Included in flood policies for rising water" },
        { title: "Debris Removal", description: "Covers removal of flood-damaged items" },
    ],

    faqs: [
        {
            question: "How much does flood insurance cost in West Palm Beach?",
            answer: "West Palm Beach flood insurance costs depend on your flood zone, property elevation, coverage limits, and deductible. High-risk zone properties typically pay $1,500-$4,000+ annually. Private flood quotes may differ from NFIP rates depending on your specific property characteristics.",
        },
        {
            question: "Is flood insurance required in West Palm Beach?",
            answer: "Flood insurance is required if you have a federally-backed mortgage and your property is in a high-risk flood zone (Zone A or V). Given West Palm Beach's coastal location, we recommend flood insurance for most properties regardless of zone designation.",
        },
        {
            question: "What's the difference between NFIP and private flood insurance?",
            answer: "NFIP is the federal program with standardized coverage (max $250,000 building, $100,000 contents). Private flood insurers may offer higher limits, replacement cost for contents, shorter waiting periods, and additional living expenses—sometimes at competitive rates.",
        },
        {
            question: "Does flood insurance cover storm surge from hurricanes?",
            answer: "Yes. Flood insurance covers storm surge, which is technically flood (rising water). Your homeowners policy covers wind damage; flood insurance covers water damage from storm surge, rainfall flooding, and other rising water events.",
        },
        {
            question: "How long before flood insurance coverage starts?",
            answer: "NFIP policies have a 30-day waiting period. Some private flood policies have 10-14 day waits. You cannot purchase flood insurance when a storm is threatening—buy coverage before hurricane season.",
        },
    ],

    relatedServices: [
        { title: "West Palm Beach Homeowners Insurance", href: "/locations/west-palm-beach-fl/homeowners-insurance", description: "Wind and property coverage" },
        { title: "West Palm Beach Auto Insurance", href: "/locations/west-palm-beach-fl/auto-insurance", description: "Comprehensive covers car flooding" },
        { title: "Palm Beach County Insurance", href: "/locations/west-palm-beach-fl", description: "All insurance services" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function WestPalmBeachFloodInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
