import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Orlando",
    state: "FL",
    citySlug: "orlando-fl",
    serviceName: "Flood Insurance",
    serviceSlug: "flood-insurance",

    title: "Orlando Flood Insurance | NFIP & Private Options",
    description: "Get flood insurance in Orlando, FL. Compare NFIP and private flood coverage for your home. Protect against tropical storms and heavy rainfall flooding.",

    headline: "Orlando Flood Insurance",
    subheadline: "Protect your Orlando property from flood damage with coverage designed for Central Florida. We compare NFIP and private flood options to find the right fit for your home.",

    overview: [
        "Flood damage is specifically excluded from homeowners insurance, making separate flood coverage essential for Orlando homeowners. While Orlando is inland, the area experiences significant flooding from tropical storms, heavy rainfall, and the region's numerous lakes and low-lying areas.",
        "Orlando's flat terrain and afternoon thunderstorms create flooding risks that many homeowners don't expect. From the Butler Chain of Lakes to the Dr. Phillips area, many Orlando neighborhoods have experienced flood damage even outside designated high-risk zones.",
        "We offer both NFIP (National Flood Insurance Program) and private flood insurance options. Private flood policies may offer higher coverage limits, replacement cost coverage for contents, and shorter waiting periods than the federal program—and sometimes at competitive rates.",
    ],

    whyNeeded: [
        {
            title: "Homeowners Insurance Excludes Floods",
            content: "Your homeowners policy does not cover flood damage—period. Even if a hurricane causes flooding, the water damage is excluded. Flood insurance is the only way to protect your Orlando home from rising water.",
        },
        {
            title: "Orlando's Flood Exposure",
            content: "Central Florida's flat terrain, numerous lakes, and daily summer thunderstorms create real flood risk. Areas near the Butler Chain of Lakes, Lake Apopka, and low-lying neighborhoods are particularly vulnerable.",
        },
        {
            title: "Flooding Outside Flood Zones",
            content: "Approximately 25% of flood claims come from properties outside high-risk flood zones. Orlando's unpredictable afternoon storms can cause flash flooding anywhere, making flood insurance wise even in Zone X.",
        },
        {
            title: "Tropical Storm Protection",
            content: "While Orlando doesn't see direct hurricane hits often, tropical storms and hurricane remnants bring heavy rainfall that overwhelms drainage systems. Flood insurance protects against this common Central Florida risk.",
        },
    ],

    localConsiderations: [
        "Many Orlando areas are in Zone X (low-to-moderate risk) but still flood",
        "Properties near lakes may be in Zone AE requiring mandatory flood insurance",
        "NFIP policies have a 30-day waiting period—don't wait for storm season",
        "Private flood may offer better rates for some Orlando properties",
        "Elevation certificates can help determine accurate flood risk and pricing",
        "Contents coverage must be purchased separately from building coverage",
    ],

    coverageHighlights: [
        { title: "Building Coverage", description: "Covers your home's structure up to $250,000 (NFIP)" },
        { title: "Contents Coverage", description: "Protects belongings up to $100,000 (NFIP)" },
        { title: "Higher Limits Available", description: "Private flood offers coverage above NFIP caps" },
        { title: "Replacement Cost Option", description: "Available through private flood carriers" },
        { title: "Basement Coverage", description: "Limited coverage for basement improvements" },
        { title: "Debris Removal", description: "Covers removal of flood-damaged items" },
    ],

    faqs: [
        {
            question: "How much does flood insurance cost in Orlando?",
            answer: "Orlando flood insurance costs depend on your flood zone, property elevation, coverage amount, and deductible. Zone X properties may pay $400-$800/year for basic coverage. Properties in Zone AE or near lakes typically cost more. Private flood quotes may be higher or lower than NFIP depending on your specific property.",
        },
        {
            question: "Is flood insurance required in Orlando?",
            answer: "Flood insurance is required if you have a federally-backed mortgage and your property is in a high-risk flood zone (Zone A or V). Even if not required, we recommend flood coverage for most Orlando homeowners given Central Florida's flooding history.",
        },
        {
            question: "What's the difference between NFIP and private flood?",
            answer: "NFIP is the federal program with standardized coverage (max $250,000 building, $100,000 contents). Private flood insurers may offer higher limits, replacement cost coverage for contents, shorter waiting periods, and additional living expenses coverage—sometimes at competitive rates.",
        },
        {
            question: "How long does it take for flood insurance to start?",
            answer: "NFIP policies have a 30-day waiting period before coverage begins. Some private flood policies have 10-14 day waiting periods. You cannot purchase flood insurance when a storm is threatening—plan ahead before hurricane season.",
        },
        {
            question: "Does flood insurance cover my car?",
            answer: "No. Flood insurance covers your home and belongings, not vehicles. Comprehensive auto insurance covers your car for flood damage. We can help you ensure both your home and vehicles are protected.",
        },
    ],

    relatedServices: [
        { title: "Orlando Homeowners Insurance", href: "/locations/orlando-fl/homeowners-insurance", description: "Protect your home from other perils" },
        { title: "Orlando Auto Insurance", href: "/locations/orlando-fl/auto-insurance", description: "Include comprehensive for flood coverage" },
        { title: "Orlando Condo Insurance", href: "/locations/orlando-fl/condo-insurance", description: "Flood coverage for condo units" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function OrlandoFloodInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
