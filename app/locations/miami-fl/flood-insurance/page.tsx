import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Miami",
    state: "FL",
    citySlug: "miami-fl",
    serviceName: "Flood Insurance",
    serviceSlug: "flood-insurance",

    title: "Miami Flood Insurance | NFIP & Private Options",
    description: "Get flood insurance quotes for Miami properties. Compare NFIP and private flood insurance options. Essential coverage for Miami-Dade County homes and condos.",

    headline: "Miami Flood Insurance",
    subheadline: "Protect your Miami property from flood damage with coverage from the NFIP or private insurers. We help you find the right flood protection for your situation.",

    overview: [
        "Flood insurance is essential for Miami homeowners. Standard homeowners policies specifically exclude flood damage, leaving you financially responsible for one of the most common natural disasters in South Florida. Whether you're in a designated flood zone or not, flood protection is a smart investment.",
        "We offer flood insurance options from both the National Flood Insurance Program (NFIP) and private flood insurers. Private flood insurance can often provide higher coverage limits and competitive rates compared to the NFIP, especially for properties that don't fit standard NFIP pricing.",
        "Miami's low elevation, extensive canal system, and coastal location create flood risk throughout Miami-Dade County. Even properties not in high-risk flood zones experience flooding from heavy rain, king tides, and storm surge. Don't wait until hurricane season—get flood coverage now.",
    ],

    whyNeeded: [
        {
            title: "Homeowners Insurance Excludes Floods",
            content: "Your homeowners policy does not cover flood damage—period. Even if you have hurricane coverage, water entering your home from rising flood waters is excluded. Flood insurance is the only way to protect against this risk.",
        },
        {
            title: "Miami's Flood Exposure",
            content: "Miami's combination of sea-level rise, high water tables, aging drainage infrastructure, and hurricane exposure creates significant flood risk. Heavy rain alone can cause street flooding that enters homes.",
        },
        {
            title: "Mortgage Requirements",
            content: "If your Miami property is in a FEMA-designated Special Flood Hazard Area (SFHA), your mortgage lender requires flood insurance. Even if not required, most lenders strongly recommend it.",
        },
        {
            title: "30-Day Waiting Period",
            content: "Flood insurance policies typically have a 30-day waiting period before coverage begins. You can't buy flood insurance when a storm is approaching—get coverage now while you can.",
        },
    ],

    localConsiderations: [
        "Many Miami neighborhoods are in FEMA high-risk flood zones requiring mandatory insurance",
        "Brickell, Miami Beach, and other coastal areas face storm surge and king tide flooding",
        "Inland areas can flood from heavy rain and poor drainage",
        "Private flood insurance may offer better rates and higher limits than NFIP",
        "Elevation certificates can help determine accurate flood risk and rates",
        "Condo owners need individual flood policies in addition to building coverage",
    ],

    faqs: [
        {
            question: "How much does Miami flood insurance cost?",
            answer: "Flood insurance costs in Miami vary based on your flood zone, property elevation, construction type, and coverage limits. NFIP rates are standardized but private flood insurance rates can vary. Properties in high-risk zones pay more, but coverage is still typically affordable compared to potential flood losses.",
        },
        {
            question: "Is flood insurance required in Miami?",
            answer: "If you have a federally-backed mortgage and your property is in a FEMA Special Flood Hazard Area, flood insurance is required. Even if not required, we strongly recommend it given Miami's flood exposure. Many flood claims come from properties outside high-risk zones.",
        },
        {
            question: "What's the difference between NFIP and private flood insurance?",
            answer: "The NFIP is a federal program with standardized rates and coverage limits (up to $250,000 dwelling/$100,000 contents). Private flood insurers can offer higher limits, additional coverages like loss of use, and sometimes lower rates—especially for properties that don't fit NFIP pricing well.",
        },
        {
            question: "Does flood insurance cover hurricane damage?",
            answer: "Flood insurance covers water damage from rising water—including storm surge from hurricanes. However, wind damage is covered by your homeowners policy. During a hurricane, you may have claims under both policies depending on the type of damage.",
        },
        {
            question: "How long does it take to get flood insurance?",
            answer: "Flood insurance typically has a 30-day waiting period before coverage begins. However, if you're buying a new home or your lender requires coverage, the waiting period may be waived. Don't wait until a storm threatens—get coverage while you can.",
        },
    ],

    relatedServices: [
        { title: "Miami Homeowners Insurance", href: "/locations/miami-fl/homeowners-insurance", description: "Comprehensive protection for your home" },
        { title: "Miami Condo Insurance", href: "/locations/miami-fl/condo-insurance", description: "HO-6 coverage for Miami condos" },
        { title: "Miami Auto Insurance", href: "/locations/miami-fl/auto-insurance", description: "Coverage for Miami drivers" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function MiamiFloodInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
