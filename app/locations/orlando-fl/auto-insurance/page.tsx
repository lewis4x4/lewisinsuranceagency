import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Orlando",
    state: "FL",
    citySlug: "orlando-fl",
    serviceName: "Auto Insurance",
    serviceSlug: "auto-insurance",

    title: "Orlando Auto Insurance | Compare Quotes",
    description: "Find affordable auto insurance in Orlando, FL. Compare quotes from multiple carriers. Coverage for I-4 commuters, tourists, and local drivers in Orange County.",

    headline: "Orlando Auto Insurance",
    subheadline: "Get reliable auto insurance coverage for Orlando's busy roads. We compare rates from multiple carriers to find protection that fits your driving needs and budget.",

    overview: [
        "Orlando drivers face unique challenges on the road—from the notoriously busy I-4 corridor to heavy tourist traffic around theme parks. With millions of visitors and a growing population, Orlando roads can be unpredictable, making proper auto insurance essential.",
        "Florida's no-fault insurance system requires specific coverages, but the state minimums often aren't enough to truly protect you. As an independent agency, we help Orlando drivers understand their options and find coverage that goes beyond the basics without breaking the bank.",
        "Whether you're commuting on I-4, driving for rideshare, or navigating International Drive, we can help you find auto insurance that protects you, your passengers, and your vehicle from Orlando's diverse driving risks.",
    ],

    whyNeeded: [
        {
            title: "I-4 Corridor Risk",
            content: "I-4 between Orlando and Tampa is consistently ranked among the most dangerous highways in America. Higher accident rates mean higher risk—and the importance of adequate coverage to protect yourself and your family.",
        },
        {
            title: "Tourist Traffic",
            content: "With 75+ million visitors annually, Orlando roads are full of unfamiliar drivers navigating to theme parks and attractions. This increases accident risk and the importance of uninsured motorist coverage.",
        },
        {
            title: "Florida's Uninsured Drivers",
            content: "Florida has one of the highest uninsured motorist rates in the country—around 20%. Uninsured motorist coverage protects you when hit by a driver without adequate insurance.",
        },
        {
            title: "No-Fault System Gaps",
            content: "Florida's PIP coverage provides limited medical benefits. For serious injuries, you may need bodily injury liability coverage (not required but highly recommended) to protect your assets.",
        },
    ],

    localConsiderations: [
        "I-4 commuters may benefit from higher coverage limits given accident risk",
        "Florida requires PIP ($10,000) and PDL ($10,000) at minimum",
        "Bodily injury liability is not required but strongly recommended",
        "Uninsured motorist coverage is essential with 20% uninsured rate",
        "Comprehensive coverage protects against Orlando's frequent hail and storms",
        "Rideshare drivers need additional coverage for Uber/Lyft driving",
    ],

    coverageHighlights: [
        { title: "PIP Coverage", description: "Required $10,000 for medical expenses regardless of fault" },
        { title: "Property Damage Liability", description: "Required $10,000 minimum for damage you cause" },
        { title: "Bodily Injury Liability", description: "Protects you if you injure others (recommended)" },
        { title: "Uninsured Motorist", description: "Essential protection against uninsured drivers" },
        { title: "Collision Coverage", description: "Covers your vehicle in accidents" },
        { title: "Comprehensive", description: "Covers theft, weather, and non-collision damage" },
    ],

    faqs: [
        {
            question: "How much does auto insurance cost in Orlando?",
            answer: "Orlando auto insurance costs depend on your driving record, vehicle, coverage levels, and other factors. Florida rates are higher than the national average, but we can compare quotes from multiple carriers to find competitive pricing for your situation.",
        },
        {
            question: "What auto insurance is required in Orlando/Florida?",
            answer: "Florida requires PIP (Personal Injury Protection) of $10,000 and Property Damage Liability of $10,000. However, these minimums leave significant gaps. We recommend adding bodily injury liability and uninsured motorist coverage for real protection.",
        },
        {
            question: "Does Florida require bodily injury liability?",
            answer: "Not initially, but it becomes required after certain violations. More importantly, without BI coverage, you're personally liable if you injure someone—their medical bills, lost wages, and pain and suffering could devastate your finances.",
        },
        {
            question: "Should I get uninsured motorist coverage in Orlando?",
            answer: "Absolutely. With roughly 20% of Florida drivers uninsured, UM coverage is essential. It protects you if an uninsured or underinsured driver hits you—covering medical expenses and lost wages that their insurance won't.",
        },
        {
            question: "Does auto insurance cover rideshare driving?",
            answer: "Personal auto policies typically exclude rideshare driving. If you drive for Uber, Lyft, or similar services in Orlando, you need rideshare coverage or a commercial policy. We can help you find appropriate coverage for rideshare drivers.",
        },
    ],

    relatedServices: [
        { title: "Orlando Homeowners Insurance", href: "/locations/orlando-fl/homeowners-insurance", description: "Bundle home and auto for discounts" },
        { title: "Orlando Flood Insurance", href: "/locations/orlando-fl/flood-insurance", description: "Comprehensive auto covers car flood damage" },
        { title: "Orlando Condo Insurance", href: "/locations/orlando-fl/condo-insurance", description: "Bundle condo and auto coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function OrlandoAutoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
