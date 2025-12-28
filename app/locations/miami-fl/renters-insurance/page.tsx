import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Miami",
    state: "FL",
    citySlug: "miami-fl",
    serviceName: "Renters Insurance",
    serviceSlug: "renters-insurance",

    title: "Miami Renters Insurance | Protect Your Belongings",
    description: "Affordable renters insurance for Miami, FL apartments and rentals. Protect your belongings from theft, fire, and storms. Coverage for Miami-Dade County tenants.",

    headline: "Miami Renters Insurance",
    subheadline: "Your landlord's insurance doesn't cover your belongings. Renters insurance protects your stuff, provides liability coverage, and is surprisingly affordable for Miami tenants.",

    overview: [
        "If you're renting an apartment, condo, or house in Miami, renters insurance is one of the smartest investments you can make. For typically less than $25 per month, you can protect your furniture, electronics, clothing, and other belongings from theft, fire, and other covered perils.",
        "Many Miami renters assume their landlord's insurance protects them—it doesn't. Your landlord's policy only covers the building structure. If there's a break-in, fire, or storm damage, you'd have to replace everything out of pocket without renters insurance.",
        "Beyond protecting your belongings, renters insurance provides personal liability coverage. If someone is injured in your rental or you accidentally damage someone else's property, your policy protects you from costly lawsuits—important in Miami's active social environment.",
    ],

    whyNeeded: [
        {
            title: "Protect Your Belongings",
            content: "Add up everything you own—furniture, electronics, clothing, kitchen items, jewelry. Most people are surprised the total reaches $20,000-$50,000 or more. Renters insurance replaces these items if they're stolen or damaged by covered perils.",
        },
        {
            title: "Hurricane and Storm Coverage",
            content: "Miami faces hurricane risk every season. While your landlord's policy covers the building, your belongings inside can be damaged by wind, water intrusion from broken windows, or power outages affecting your food and electronics.",
        },
        {
            title: "Theft Protection",
            content: "Miami has active urban areas where theft can occur. Renters insurance covers your belongings if your apartment is broken into, and even covers items stolen from your car or while traveling.",
        },
        {
            title: "Liability Protection",
            content: "If a guest slips in your apartment or you accidentally damage a neighbor's property, you could be held liable. Renters insurance provides liability coverage to protect you from lawsuits and medical expenses.",
        },
    ],

    localConsiderations: [
        "Hurricane deductibles may apply to renters policies in Miami",
        "Flood damage requires separate flood insurance",
        "Many Miami landlords require renters insurance in the lease",
        "Replacement cost coverage is worth the small additional premium",
        "High-value items like jewelry may need scheduled coverage",
        "Bundle with auto insurance for additional savings",
    ],

    coverageHighlights: [
        { title: "Personal Property", description: "Covers belongings from theft, fire, and covered perils" },
        { title: "Personal Liability", description: "Protects if someone is injured in your rental" },
        { title: "Loss of Use", description: "Pays for temporary housing if displaced" },
        { title: "Medical Payments", description: "Covers guest injuries regardless of fault" },
        { title: "Off-Premises Coverage", description: "Protects belongings away from home" },
        { title: "Additional Living Expenses", description: "Covers hotel and meals if displaced" },
    ],

    faqs: [
        {
            question: "How much does renters insurance cost in Miami?",
            answer: "Miami renters insurance typically costs $15-$30 per month, depending on your coverage limits, deductible, location, and discounts. It's one of the best values in insurance—comprehensive protection for less than most streaming subscriptions.",
        },
        {
            question: "Does Miami renters insurance cover hurricane damage?",
            answer: "Yes, renters insurance covers your belongings from wind damage and related perils like water intrusion from broken windows. However, flood damage requires separate flood insurance. Miami renters in flood-prone areas should consider a contents-only flood policy.",
        },
        {
            question: "How much coverage do I need?",
            answer: "Walk through your rental and estimate what it would cost to replace everything—furniture, electronics, clothing, kitchen items. Most Miami renters need at least $30,000-$50,000 in personal property coverage and $100,000 or more in liability protection.",
        },
        {
            question: "Does my roommate need their own renters insurance?",
            answer: "Yes, renters insurance only covers you and your belongings. Each roommate needs a separate policy. You can add a spouse or domestic partner to your policy, but unrelated roommates cannot share coverage.",
        },
        {
            question: "What's the difference between replacement cost and actual cash value?",
            answer: "Replacement cost pays to buy a new, similar item today. Actual cash value pays depreciated value—much less for older items. The difference in premium is minimal, so we recommend replacement cost coverage for Miami renters.",
        },
    ],

    relatedServices: [
        { title: "Miami Auto Insurance", href: "/locations/miami-fl/auto-insurance", description: "Bundle renters and auto for savings" },
        { title: "Miami Flood Insurance", href: "/locations/miami-fl/flood-insurance", description: "Protect belongings from flood damage" },
        { title: "Miami Umbrella Insurance", href: "/locations/miami-fl/umbrella-insurance", description: "Extra liability beyond renters limits" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function MiamiRentersInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
