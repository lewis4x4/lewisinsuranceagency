import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Lake City",
    state: "FL",
    citySlug: "lake-city-fl",
    serviceName: "Flood Insurance",
    serviceSlug: "flood-insurance",

    title: "Lake City Flood Insurance | Local NFIP Agents",
    description: "Get flood insurance in Lake City, FL. NFIP and private flood options for Columbia County. Protection for properties near Suwannee and Santa Fe rivers.",

    headline: "Lake City Flood Insurance",
    subheadline: "Protect your Lake City property from flood damage with coverage from your local insurance agency. We help Columbia County homeowners understand flood risks and find the right protection.",

    overview: [
        "Flood damage is excluded from homeowners insurance, making separate flood coverage important for Lake City homeowners—especially those near the Suwannee River, Santa Fe River, or in low-lying areas of Columbia County.",
        "Lake City and North Florida have experienced significant flooding from tropical storms and heavy rainfall. The Suwannee and Santa Fe rivers can overflow their banks, and poor drainage during heavy rains can cause flooding even in areas not typically considered high-risk.",
        "As your local insurance agency, we help Lake City homeowners understand their flood risk and find appropriate coverage. We offer both NFIP (National Flood Insurance Program) and private flood insurance options to fit your needs and budget.",
    ],

    whyNeeded: [
        {
            title: "Homeowners Insurance Excludes Floods",
            content: "Your homeowners policy does not cover flood damage—whether from river overflow, tropical storm rainfall, or drainage issues. Flood insurance is the only way to protect your Lake City home from rising water.",
        },
        {
            title: "River Flooding Risk",
            content: "Properties near the Suwannee River and Santa Fe River face real flooding risk when heavy rains cause these rivers to rise. Even properties some distance from rivers can flood when water levels are high.",
        },
        {
            title: "Tropical Storm Rainfall",
            content: "Tropical storms and their remnants regularly impact North Florida with heavy rainfall. When drainage systems can't handle the volume, flooding occurs even in inland areas like Lake City.",
        },
        {
            title: "Zone X Doesn't Mean Safe",
            content: "Approximately 25% of flood claims come from properties outside high-risk flood zones. Being in Zone X (low-to-moderate risk) doesn't mean you can't flood—it means it's less likely, not impossible.",
        },
    ],

    localConsiderations: [
        "Properties near the Suwannee and Santa Fe rivers may be in flood zones",
        "Heavy tropical rainfall can cause flooding anywhere in Columbia County",
        "NFIP policies have 30-day waiting periods—plan ahead",
        "Private flood may offer competitive rates for some Lake City properties",
        "Elevation certificates help determine accurate flood risk",
        "Local claims support from agents who know the area",
    ],

    coverageHighlights: [
        { title: "Building Coverage", description: "Covers your home's structure up to $250,000 (NFIP)" },
        { title: "Contents Coverage", description: "Protects belongings up to $100,000 (NFIP)" },
        { title: "Private Flood Options", description: "May offer higher limits or better rates" },
        { title: "Replacement Cost Option", description: "Available through private flood carriers" },
        { title: "Basement Coverage", description: "Limited coverage for basement areas" },
        { title: "Debris Removal", description: "Covers removal of flood-damaged items" },
    ],

    faqs: [
        {
            question: "How much does flood insurance cost in Lake City?",
            answer: "Lake City flood insurance costs depend on your flood zone, property elevation, coverage limits, and deductible. Many Lake City properties are in moderate-risk zones with lower rates. We can compare NFIP and private flood quotes to find the best option for your property.",
        },
        {
            question: "Is flood insurance required in Lake City?",
            answer: "Flood insurance is required if you have a federally-backed mortgage and your property is in a high-risk flood zone. Even without a requirement, we recommend flood coverage for properties near rivers or in low-lying areas of Columbia County.",
        },
        {
            question: "What's the difference between NFIP and private flood?",
            answer: "NFIP is the federal program with standardized coverage (max $250,000 building, $100,000 contents). Private flood insurers may offer higher limits, replacement cost coverage, and shorter waiting periods. We compare both to find the best fit.",
        },
        {
            question: "Am I at flood risk if I'm not near a river?",
            answer: "Yes, flooding can occur from heavy rainfall overwhelming drainage systems. Tropical storms regularly bring heavy rain to North Florida. Properties not near rivers still experience flooding during major rain events.",
        },
        {
            question: "How long before flood insurance coverage starts?",
            answer: "NFIP policies have a 30-day waiting period. Some private flood policies have shorter waits. You cannot purchase flood insurance when a storm is threatening—plan ahead and buy coverage before you need it.",
        },
    ],

    relatedServices: [
        { title: "Lake City Homeowners Insurance", href: "/locations/lake-city-fl/homeowners-insurance", description: "Wind and property coverage" },
        { title: "Lake City Auto Insurance", href: "/locations/lake-city-fl/auto-insurance", description: "Comprehensive covers vehicle flooding" },
        { title: "Columbia County Insurance", href: "/locations/lake-city-fl", description: "All insurance services" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function LakeCityFloodInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
