import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Miami",
    state: "FL",
    citySlug: "miami-fl",
    serviceName: "Auto Insurance",
    serviceSlug: "auto-insurance",

    title: "Miami Auto Insurance | Compare Car Insurance Quotes",
    description: "Find affordable auto insurance in Miami, FL. Compare quotes from multiple carriers. Coverage for Miami drivers navigating I-95, I-195, and local streets.",

    headline: "Miami Auto Insurance",
    subheadline: "Get competitive auto insurance rates for Miami drivers. We compare quotes from multiple carriers to find coverage that fits your needs and budget.",

    overview: [
        "Miami drivers face unique challenges—heavy traffic on I-95, high rates of uninsured motorists, and vehicle theft. These factors make having the right auto insurance essential for protecting yourself financially on Miami roads.",
        "As an independent agency, we work with multiple auto insurance carriers to find you competitive rates. We understand Florida's no-fault insurance system and can help you build coverage that protects you beyond the state minimum requirements.",
        "Whether you're commuting through Brickell, driving to Miami Beach, or navigating the Palmetto, we'll help you find auto insurance that fits your situation. Bundle with homeowners insurance for additional savings.",
    ],

    whyNeeded: [
        {
            title: "Florida's No-Fault System",
            content: "Florida requires PIP (Personal Injury Protection) and property damage liability as minimums. However, state minimums leave you exposed—we recommend higher limits and additional coverages for Miami drivers.",
        },
        {
            title: "High Uninsured Motorist Rates",
            content: "Florida has one of the highest rates of uninsured drivers in the country. Uninsured/underinsured motorist coverage protects you if you're hit by someone without adequate insurance.",
        },
        {
            title: "Vehicle Theft Protection",
            content: "Miami has elevated vehicle theft rates. Comprehensive coverage protects against theft, vandalism, and other non-collision damage to your vehicle.",
        },
        {
            title: "Flooding and Storm Damage",
            content: "Miami's streets can flood during heavy rain. Comprehensive coverage also protects your vehicle from flood damage—something that's not covered by collision alone.",
        },
    ],

    localConsiderations: [
        "Miami-Dade County has higher auto insurance rates due to traffic density and claims history",
        "Comprehensive coverage is important given Miami's flood-prone streets and theft rates",
        "Uninsured motorist coverage is highly recommended given Florida's uninsured driver rates",
        "Bundling home and auto with the same carrier often saves 10-25%",
        "Good driver discounts and defensive driving courses can lower premiums",
        "Newer vehicles with safety features often qualify for discounts",
    ],

    faqs: [
        {
            question: "Why is Miami auto insurance so expensive?",
            answer: "Miami auto insurance rates reflect the area's high traffic density, accident rates, vehicle theft, fraud, and the number of uninsured drivers. Shopping multiple carriers through an independent agent is one of the best ways to find competitive rates.",
        },
        {
            question: "What auto insurance coverage do I need in Miami?",
            answer: "Florida requires minimum PIP ($10,000) and property damage liability ($10,000). However, we recommend higher liability limits (100/300/100), uninsured motorist coverage, and comprehensive/collision if you have a newer vehicle. State minimums leave you significantly exposed.",
        },
        {
            question: "Does auto insurance cover flood damage to my car?",
            answer: "Yes—if you have comprehensive coverage. Comprehensive covers flood damage, theft, vandalism, and other non-collision damage. Given Miami's flood-prone streets, comprehensive coverage is a smart investment.",
        },
        {
            question: "Can I bundle auto and home insurance?",
            answer: "Yes! Bundling home and auto insurance with the same carrier typically saves 10-25% on your premiums. We can quote both together to maximize your savings.",
        },
        {
            question: "How can I lower my Miami auto insurance rates?",
            answer: "Ways to reduce rates include maintaining a clean driving record, taking a defensive driving course, bundling policies, increasing deductibles, and asking about available discounts. We'll shop multiple carriers to find you the best available rate.",
        },
    ],

    relatedServices: [
        { title: "Miami Homeowners Insurance", href: "/locations/miami-fl/homeowners-insurance", description: "Bundle and save on home and auto" },
        { title: "Miami Flood Insurance", href: "/locations/miami-fl/flood-insurance", description: "Protect your property from floods" },
        { title: "Miami Condo Insurance", href: "/locations/miami-fl/condo-insurance", description: "Coverage for Miami condo owners" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function MiamiAutoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
