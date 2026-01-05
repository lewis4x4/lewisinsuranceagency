import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Tampa",
    state: "FL",
    citySlug: "tampa-fl",
    serviceName: "Condo Insurance",
    serviceSlug: "condo-insurance",

    title: "Tampa Condo Insurance | HO-6 Coverage",
    description: "Get condo insurance in Tampa, FL. HO-6 policies for Tampa Bay condos covering interior.",

    headline: "Tampa Condo Insurance",
    subheadline: "Protect your Tampa condo with an HO-6 policy designed for Florida unit owners. Coverage for your interior, belongings, and liability where your association's master policy stops.",

    overview: [
        "Tampa Bay's condo market includes everything from waterfront high-rises in Channelside to mid-rise condos in South Tampa and townhome-style units throughout Hillsborough County. Each condo needs an HO-6 policy that fills the gap between your association's master policy and your personal needs.",
        "Your condo association's master policy typically covers the building's exterior and common areas, but not your unit's interior, personal belongings, or personal liability. An HO-6 condo policy protects what the master policy doesn't—including improvements you've made to your unit.",
        "We help Tampa condo owners understand their association's master policy coverage, identify gaps, and build an HO-6 policy that provides comprehensive protection. Whether you own a waterfront condo, downtown unit, or suburban townhome, we'll find coverage that fits.",
    ],

    whyNeeded: [
        {
            title: "Master Policy Gaps",
            content: "Your condo association's master policy typically covers 'studs out'—the building structure and common areas. You're responsible for 'studs in'—interior walls, flooring, fixtures, and improvements. HO-6 coverage protects your interior investment.",
        },
        {
            title: "Hurricane and Storm Protection",
            content: "Tampa Bay faces hurricane risk, and even damage to the building's exterior can affect your unit's interior. Your HO-6 policy covers your belongings and interior from wind, water intrusion, and other covered perils.",
        },
        {
            title: "Personal Belongings Coverage",
            content: "Your furniture, electronics, clothing, and other belongings aren't covered by the master policy. HO-6 insurance protects these items from theft, fire, and covered perils.",
        },
        {
            title: "Loss Assessment Coverage",
            content: "If a major loss depletes the association's reserves, unit owners can be assessed for the shortfall. Loss assessment coverage in your HO-6 policy helps pay your share of these unexpected costs.",
        },
    ],

    localConsiderations: [
        "Review your master policy to understand 'studs in' vs. 'studs out' coverage",
        "High-rise condos may face different underwriting requirements",
        "Hurricane deductibles apply to condo policies in Tampa Bay",
        "Waterfront condos may have higher rates due to storm exposure",
        "Loss assessment coverage typically starts at $1,000 but can be increased",
        "Flood insurance is separate and important for ground-floor and low-lying units",
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
            question: "What does Tampa condo insurance cost?",
            answer: "Tampa condo insurance costs depend on your unit's location, floor level, coverage limits, and building characteristics. Waterfront high-rises may cost more than inland units. We compare quotes from multiple carriers to find competitive rates for your condo.",
        },
        {
            question: "What's the difference between my condo policy and the master policy?",
            answer: "The master policy covers the building's structure and common areas—typically 'studs out.' Your HO-6 policy covers 'studs in'—interior walls, flooring, fixtures, personal belongings, and personal liability. Together, they provide complete protection.",
        },
        {
            question: "Do I need flood insurance for my Tampa condo?",
            answer: "If your unit is on a ground floor or the building is in a flood zone, flood insurance is highly recommended. Even upper-floor units can be affected if the building floods. Flood damage is excluded from both master policies and HO-6 coverage.",
        },
        {
            question: "What is loss assessment coverage?",
            answer: "If a major loss (like hurricane damage) exceeds the association's master policy limits and reserves, unit owners can be assessed to cover the shortfall. Loss assessment coverage helps pay your share—important protection in Tampa Bay's hurricane-prone environment.",
        },
        {
            question: "Should I insure improvements I've made to my condo?",
            answer: "Yes. If you've upgraded flooring, cabinets, fixtures, or other elements beyond the original builder specs, you need coverage for these improvements. Standard 'studs in' coverage may not fully cover high-end upgrades.",
        },
    ],

    relatedServices: [
        { title: "Tampa Homeowners Insurance", href: "/locations/tampa-fl/homeowners-insurance", description: "For single-family homes" },
        { title: "Tampa Flood Insurance", href: "/locations/tampa-fl/flood-insurance", description: "Essential for many condos" },
        { title: "Tampa Umbrella Insurance", href: "/locations/tampa-fl/umbrella-insurance", description: "Extra liability protection" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function TampaCondoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
