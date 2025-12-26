import { ServicePageTemplate, type ServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: ServicePageData = {
    title: "Renters Insurance",
    description: "Affordable renters insurance for Florida tenants. Protect your belongings and get liability coverage. Quotes from multiple carriers.",

    badge: "Personal Insurance",
    headline: "Florida Renters Insurance",
    subheadline: "Your landlord's insurance doesn't cover your belongings. Renters insurance protects your stuff, provides liability coverage, and is surprisingly affordable.",

    overview: [
        "If you rent your home or apartment in Florida, renters insurance is one of the smartest investments you can make. It's surprisingly affordable—often under $20 per month—and protects your belongings from theft, fire, and other covered perils.",
        "Many renters assume their landlord's insurance covers them. It doesn't. Your landlord's policy only covers the building structure—not your furniture, electronics, clothing, or other personal belongings. If there's a fire or break-in, you'd have to replace everything out of pocket without renters insurance.",
        "Beyond protecting your stuff, renters insurance also provides personal liability coverage. If someone is injured in your rental unit, or if you accidentally damage someone else's property, your renters policy can protect you from costly lawsuits.",
        "As an independent agency, we work with multiple carriers to find you great renters insurance at competitive rates. Whether you're renting an apartment, house, or condo, we'll help you get the coverage you need.",
    ],

    coverageIncludes: [
        {
            title: "Personal Property",
            description: "Covers your belongings—furniture, electronics, clothing, and more—from theft, fire, and other perils.",
        },
        {
            title: "Personal Liability",
            description: "Protects you if someone is injured in your rental or you accidentally damage someone else's property.",
        },
        {
            title: "Loss of Use",
            description: "Pays for temporary housing and living expenses if your rental becomes uninhabitable.",
        },
        {
            title: "Medical Payments",
            description: "Covers minor medical expenses for guests injured in your rental, regardless of fault.",
        },
        {
            title: "Off-Premises Coverage",
            description: "Protects your belongings even when you're away from home—stolen from your car, etc.",
        },
        {
            title: "Additional Living Expenses",
            description: "Covers hotel stays, meals, and other costs if you're displaced by a covered loss.",
        },
    ],

    commonExclusions: [
        "Flood damage (requires separate policy)",
        "Earthquake damage",
        "Your roommate's belongings (they need their own policy)",
        "Damage from lack of maintenance",
        "High-value items above policy limits (jewelry, art)",
        "Intentional damage",
        "Business property (may need separate coverage)",
    ],

    floridaSpecific: [
        {
            title: "Hurricane & Wind Coverage",
            content: "Florida renters policies typically include wind coverage, but may have a separate hurricane deductible. While the building structure is your landlord's responsibility, your belongings inside can still be damaged by wind, water intrusion, or power outages.",
        },
        {
            title: "Flood Insurance for Renters",
            content: "Standard renters insurance doesn't cover flood damage. If you're in a flood-prone area, consider a separate flood policy to protect your belongings. NFIP offers contents-only policies for renters, and private flood insurance may also be available.",
        },
        {
            title: "Replacement Cost vs. Actual Cash Value",
            content: "We recommend replacement cost coverage, which pays to replace your belongings at current prices. Actual cash value pays depreciated value—you'd get far less for older items. The difference in premium is usually minimal.",
        },
        {
            title: "Landlord Requirements",
            content: "Many Florida landlords now require renters insurance as a condition of your lease. Even if not required, it's smart protection. Some landlords require you to name them as an interested party on your policy.",
        },
    ],

    faqs: [
        {
            question: "How much does renters insurance cost in Florida?",
            answer: "Renters insurance is very affordable—typically $15-$30 per month in Florida. The exact cost depends on your coverage limits, deductible, location, and any discounts you qualify for. It's one of the best values in insurance: comprehensive protection for less than a streaming subscription.",
        },
        {
            question: "How much renters insurance do I need?",
            answer: "Start by estimating the value of your belongings. Walk through your rental and add up what it would cost to replace everything—furniture, electronics, clothing, kitchen items, etc. Most people underestimate this. We typically recommend at least $30,000-$50,000 in personal property coverage and $100,000-$300,000 in liability.",
        },
        {
            question: "Does renters insurance cover my roommate?",
            answer: "No, renters insurance only covers you and your belongings. Each roommate needs their own separate policy. Some policies allow you to add a spouse or domestic partner, but unrelated roommates cannot share a policy.",
        },
        {
            question: "What's the difference between replacement cost and actual cash value?",
            answer: "Replacement cost pays what it costs to buy a new, similar item today. Actual cash value pays the current value after depreciation—so for a 5-year-old TV, you'd get much less. Replacement cost coverage typically costs only slightly more and is worth it.",
        },
        {
            question: "Does renters insurance cover my stuff in storage?",
            answer: "Yes, most renters policies cover your belongings in a storage unit, subject to certain limits (often 10% of your personal property coverage). If you have significant items in storage, let us know so we can ensure adequate coverage.",
        },
    ],

    relatedCoverage: [
        {
            title: "Auto Insurance",
            href: "/personal/auto-insurance-florida",
            description: "Bundle renters and auto for discounts.",
        },
        {
            title: "Umbrella Insurance",
            href: "/personal/umbrella-insurance-florida",
            description: "Extra liability protection beyond your policy.",
        },
        {
            title: "Flood Insurance",
            href: "/personal/flood-insurance-florida",
            description: "Protect belongings from flood damage.",
        },
    ],

    slug: "renters-insurance-florida",
    category: "personal",
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
}

export default function RentersInsurancePage() {
    return <ServicePageTemplate data={pageData} />
}
