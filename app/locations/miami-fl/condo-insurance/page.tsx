import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Miami",
    state: "FL",
    citySlug: "miami-fl",
    serviceName: "Condo Insurance",
    serviceSlug: "condo-insurance",

    title: "Miami Condo Insurance | HO-6 Coverage for Condos",
    description: "Get condo insurance quotes for Miami condos and high-rises. HO-6 coverage for Brickell, Miami Beach, and downtown Miami. Protect your unit and belongings.",

    headline: "Miami Condo Insurance",
    subheadline: "Protect your Miami condo with HO-6 coverage designed for unit owners. We help you understand your master policy and fill coverage gaps.",

    overview: [
        "Miami's skyline is defined by its high-rise condos—from Brickell's glass towers to the beachfront buildings of Miami Beach and Sunny Isles. If you own a condo in Miami, you need an HO-6 policy that works with your building's master policy to provide complete protection.",
        "Condo insurance (HO-6) covers what your building's master policy doesn't: your unit's interior, personal belongings, improvements you've made, and your personal liability. Understanding the gaps between your building's coverage and your individual needs is essential.",
        "We help Miami condo owners navigate complex master policies, understand wind coverage requirements, and build HO-6 coverage that truly protects their investment. Many Miami buildings have wind exclusions in their master policies—we'll help you address these gaps.",
    ],

    whyNeeded: [
        {
            title: "Master Policy Gaps",
            content: "Your building's master policy typically covers common areas and the building structure, but not your unit's interior, personal property, or upgrades. Your HO-6 policy fills these gaps and protects your investment in your unit.",
        },
        {
            title: "Personal Property Protection",
            content: "Your furniture, electronics, clothing, and other belongings inside your condo aren't covered by the master policy. HO-6 coverage protects your personal property from theft, fire, and other covered perils.",
        },
        {
            title: "Wind Coverage Considerations",
            content: "Many Miami high-rise buildings have master policies with wind exclusions or limited wind coverage. You may need to add wind coverage to your HO-6 policy to ensure complete protection from hurricane damage.",
        },
        {
            title: "Liability Protection",
            content: "If someone is injured in your unit or you accidentally cause damage to neighboring units (like a water leak), your HO-6 policy's liability coverage protects you from financial responsibility.",
        },
    ],

    localConsiderations: [
        "Review your building's master policy to understand what's covered and what's not",
        "Many Miami buildings have wind deductibles or exclusions that affect unit owners",
        "Loss assessment coverage protects you if the HOA assesses owners for building damage",
        "Flood insurance is separate—condos in flood zones need individual flood policies",
        "High-rise buildings may have different requirements than low-rise communities",
        "Improvements and betterments coverage protects upgrades you've made to your unit",
    ],

    coverageHighlights: [
        { title: "Unit Interior", description: "Covers walls, floors, fixtures inside your unit" },
        { title: "Personal Property", description: "Protects your belongings" },
        { title: "Improvements", description: "Covers upgrades you've made" },
        { title: "Liability", description: "Protects against lawsuits" },
        { title: "Loss Assessment", description: "Covers HOA special assessments" },
        { title: "Loss of Use", description: "Pays living expenses if displaced" },
    ],

    faqs: [
        {
            question: "What does Miami condo insurance cover?",
            answer: "HO-6 condo insurance covers your unit's interior (walls, floors, fixtures), personal property, improvements you've made, personal liability, and additional living expenses if your unit becomes uninhabitable. It fills gaps between your building's master policy and your individual needs.",
        },
        {
            question: "Do I need separate wind coverage for my Miami condo?",
            answer: "Possibly. Many Miami high-rise buildings have master policies with wind exclusions or high wind deductibles. We'll review your building's master policy to determine if you need to add wind coverage to your HO-6 policy for complete hurricane protection.",
        },
        {
            question: "Do I need flood insurance for my Miami condo?",
            answer: "If you're in a flood zone, yes. Flood coverage is separate from both your building's master policy and your HO-6 policy. Even upper-floor units can benefit from contents flood coverage, as flooding can occur from various sources.",
        },
        {
            question: "What is loss assessment coverage?",
            answer: "If your building sustains damage and the master policy doesn't fully cover repairs, the HOA may assess each unit owner. Loss assessment coverage on your HO-6 policy helps pay your share of these assessments, which can be substantial after a major storm.",
        },
        {
            question: "How much condo insurance do I need?",
            answer: "Coverage amounts depend on your unit's interior value, personal property, any improvements you've made, and desired liability limits. We'll help you estimate appropriate coverage based on your specific unit and Miami market replacement costs.",
        },
    ],

    relatedServices: [
        { title: "Miami Flood Insurance", href: "/locations/miami-fl/flood-insurance", description: "Essential flood protection for condos" },
        { title: "Miami Homeowners Insurance", href: "/locations/miami-fl/homeowners-insurance", description: "Coverage for single-family homes" },
        { title: "Miami Auto Insurance", href: "/locations/miami-fl/auto-insurance", description: "Bundle and save on auto coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function MiamiCondoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
