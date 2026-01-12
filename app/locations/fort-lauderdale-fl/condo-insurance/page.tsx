import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Fort Lauderdale",
    state: "FL",
    citySlug: "fort-lauderdale-fl",
    serviceName: "Condo Insurance",
    serviceSlug: "condo-insurance",

    title: "Fort Lauderdale Condo Insurance | HO-6 Coverage",
    description: "Fort Lauderdale condo insurance from independent agents. HO-6 policies covering interior, personal property, and liability. Serving Broward County condo owners.",

    headline: "Fort Lauderdale Condo Insurance",
    subheadline: "Protect your Fort Lauderdale condo with an HO-6 policy designed for Florida unit owners. Coverage for your interior, belongings, and liability where your association's master policy stops.",

    overview: [
        "Fort Lauderdale's condo market includes oceanfront high-rises along the beach, Intracoastal waterfront buildings, and inland communities throughout Broward County. Each condo needs an HO-6 policy that fills the gap between your association's master policy and your personal needs.",
        "Your condo association's master policy typically covers the building's exterior and common areas, but not your unit's interior, personal belongings, or personal liability. An HO-6 condo policy protects what the master policy doesn't—including any improvements you've made to your unit.",
        "We help Fort Lauderdale condo owners understand their association's master policy coverage, identify gaps, and build an HO-6 policy that provides comprehensive protection. Whether you own a beachfront high-rise unit, Intracoastal condo, or suburban townhome, we'll find coverage that fits.",
    ],

    whyNeeded: [
        {
            title: "Master Policy Gaps",
            content: "Your condo association's master policy typically covers 'studs out'—the building structure and common areas. You're responsible for 'studs in'—interior walls, flooring, fixtures, and improvements. HO-6 coverage protects your interior investment.",
        },
        {
            title: "Hurricane and Storm Protection",
            content: "Fort Lauderdale's Atlantic coast location means significant hurricane exposure. Even damage to the building's exterior can affect your unit's interior. Your HO-6 policy covers your belongings and interior from wind, water intrusion, and covered perils.",
        },
        {
            title: "High-Rise Considerations",
            content: "Fort Lauderdale's many high-rise condos face unique insurance challenges. Higher floors may have wind exposure, while lower floors may have flood risk. Proper coverage addresses your unit's specific location within the building.",
        },
        {
            title: "Loss Assessment Coverage",
            content: "If a major hurricane loss depletes the association's reserves, unit owners can be assessed for the shortfall. Loss assessment coverage in your HO-6 policy helps pay your share of these unexpected costs.",
        },
    ],

    localConsiderations: [
        "Review your master policy to understand 'studs in' vs. 'studs out' coverage",
        "Beachfront and Intracoastal condos face higher hurricane exposure",
        "Hurricane deductibles apply to condo policies in Broward County",
        "Loss assessment coverage is especially important given recent major storms",
        "Flood insurance is separate and essential for ground-floor and waterfront units",
        "Older buildings may face coverage challenges after recent inspections",
    ],

    coverageHighlights: [
        { title: "Dwelling/Interior", description: "Covers walls, floors, and fixtures inside your unit" },
        { title: "Personal Property", description: "Protects your belongings from covered perils" },
        { title: "Personal Liability", description: "Covers injuries in your unit or damage you cause" },
        { title: "Loss Assessment", description: "Helps pay special assessments from association" },
        { title: "Loss of Use", description: "Pays living expenses if unit is uninhabitable" },
        { title: "Improvements Coverage", description: "Covers upgrades you've made to the unit" },
    ],

    faqs: [
        {
            question: "What does Fort Lauderdale condo insurance cost?",
            answer: "Fort Lauderdale condo insurance costs depend on your unit's location, floor level, coverage limits, and building characteristics. Beachfront and waterfront units cost more due to hurricane exposure. We compare quotes from multiple carriers to find competitive rates.",
        },
        {
            question: "Do I need flood insurance for my Fort Lauderdale condo?",
            answer: "We strongly recommend flood insurance for most Fort Lauderdale condos, especially ground-floor units, waterfront buildings, and those near the Intracoastal. Flood damage is excluded from both master policies and HO-6 coverage.",
        },
        {
            question: "What's the difference between my condo policy and the master policy?",
            answer: "The master policy covers the building's structure and common areas—typically 'studs out.' Your HO-6 policy covers 'studs in'—interior walls, flooring, fixtures, personal belongings, and personal liability. Together, they provide complete protection.",
        },
        {
            question: "How much loss assessment coverage do I need?",
            answer: "Given Fort Lauderdale's hurricane exposure and recent storms, we recommend at least $25,000-$50,000 in loss assessment coverage. If a major storm damages your building beyond the master policy limits, this protects you from large special assessments.",
        },
        {
            question: "Are older Fort Lauderdale condos harder to insure?",
            answer: "Some older buildings face coverage challenges, especially after recent structural inspection requirements. Building age, condition, and reserve funding affect insurability. We work with carriers that understand South Florida's condo market.",
        },
    ],

    relatedServices: [
        { title: "Fort Lauderdale Homeowners Insurance", href: "/locations/fort-lauderdale-fl/homeowners-insurance", description: "For single-family homes" },
        { title: "Fort Lauderdale Flood Insurance", href: "/locations/fort-lauderdale-fl/flood-insurance", description: "Essential for many condos" },
        { title: "Fort Lauderdale Umbrella Insurance", href: "/locations/fort-lauderdale-fl/umbrella-insurance", description: "Extra liability protection" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function FortLauderdaleCondoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
