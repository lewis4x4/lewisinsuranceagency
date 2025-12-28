import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Jacksonville",
    state: "FL",
    citySlug: "jacksonville-fl",
    serviceName: "Condo Insurance",
    serviceSlug: "condo-insurance",

    title: "Jacksonville Condo Insurance | HO-6 Coverage",
    description: "Get condo insurance in Jacksonville, FL. HO-6 policies for condos covering interior, belongings, and liability. Protection for beach condos and downtown Jacksonville units.",

    headline: "Jacksonville Condo Insurance",
    subheadline: "Protect your Jacksonville condo with an HO-6 policy designed for Florida unit owners. Coverage for your interior, belongings, and liability where your association's master policy stops.",

    overview: [
        "Jacksonville's condo market spans beach high-rises in Jacksonville Beach and Neptune Beach to riverfront condos downtown and suburban townhomes throughout Duval County. Each condo needs an HO-6 policy that fills the gap between your association's master policy and your personal needs.",
        "Your condo association's master policy typically covers the building's exterior and common areas, but not your unit's interior, personal belongings, or personal liability. An HO-6 condo policy protects what the master policy doesn't—including improvements you've made to your unit.",
        "We help Jacksonville condo owners understand their association's master policy coverage, identify gaps, and build an HO-6 policy that provides comprehensive protection. Whether you own a beach condo, downtown riverfront unit, or suburban townhome, we'll find coverage that fits.",
    ],

    whyNeeded: [
        {
            title: "Master Policy Gaps",
            content: "Your condo association's master policy typically covers 'studs out'—the building structure and common areas. You're responsible for 'studs in'—interior walls, flooring, fixtures, and improvements. HO-6 coverage protects your interior investment.",
        },
        {
            title: "Hurricane and Storm Protection",
            content: "Jacksonville's Atlantic coast location means hurricane risk. Even damage to the building's exterior can affect your unit's interior. Your HO-6 policy covers your belongings and interior from wind, water intrusion, and covered perils.",
        },
        {
            title: "Beach Condo Exposure",
            content: "Condos in Jacksonville Beach, Neptune Beach, and Atlantic Beach face higher wind and flood exposure. Proper HO-6 coverage is essential for these coastal properties, along with separate flood insurance.",
        },
        {
            title: "Loss Assessment Coverage",
            content: "If a major loss depletes the association's reserves, unit owners can be assessed for the shortfall. Loss assessment coverage in your HO-6 policy helps pay your share of these unexpected costs.",
        },
    ],

    localConsiderations: [
        "Review your master policy to understand 'studs in' vs. 'studs out' coverage",
        "Beach condos face higher wind and flood exposure requiring appropriate coverage",
        "Hurricane deductibles apply to condo policies in Northeast Florida",
        "Loss assessment coverage typically starts at $1,000 but can be increased",
        "Flood insurance is separate and essential for beach and riverfront condos",
        "Newer construction may qualify for better rates than older buildings",
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
            question: "What does Jacksonville condo insurance cost?",
            answer: "Jacksonville condo insurance costs depend on your unit's location, floor level, coverage limits, and building characteristics. Beach condos cost more than inland units due to higher storm exposure. We compare quotes from multiple carriers to find competitive rates.",
        },
        {
            question: "Do I need flood insurance for my Jacksonville Beach condo?",
            answer: "Yes, flood insurance is highly recommended for beach condos. Flood damage is excluded from both master policies and HO-6 coverage. If you have a mortgage on a condo in a flood zone, flood insurance is required.",
        },
        {
            question: "What's the difference between my condo policy and the master policy?",
            answer: "The master policy covers the building's structure and common areas—typically 'studs out.' Your HO-6 policy covers 'studs in'—interior walls, flooring, fixtures, personal belongings, and personal liability. Together, they provide complete protection.",
        },
        {
            question: "What is loss assessment coverage?",
            answer: "If a major loss (like hurricane damage) exceeds the association's master policy limits and reserves, unit owners can be assessed to cover the shortfall. Loss assessment coverage helps pay your share—important protection in Jacksonville's hurricane-prone environment.",
        },
        {
            question: "Are downtown Jacksonville condos cheaper to insure than beach condos?",
            answer: "Generally yes. Downtown riverfront condos have less direct hurricane exposure than oceanfront beach condos. However, river flooding is still a consideration, and rates depend on building construction, age, and other factors.",
        },
    ],

    relatedServices: [
        { title: "Jacksonville Homeowners Insurance", href: "/locations/jacksonville-fl/homeowners-insurance", description: "For single-family homes" },
        { title: "Jacksonville Flood Insurance", href: "/locations/jacksonville-fl/flood-insurance", description: "Essential for many condos" },
        { title: "Jacksonville Auto Insurance", href: "/locations/jacksonville-fl/auto-insurance", description: "Bundle and save" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function JacksonvilleCondoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
