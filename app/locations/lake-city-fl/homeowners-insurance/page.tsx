import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Lake City",
    state: "FL",
    citySlug: "lake-city-fl",
    serviceName: "Homeowners Insurance",
    serviceSlug: "homeowners-insurance",

    title: "Lake City Homeowners Insurance | Local Agents",
    description: "Lake City homeowners insurance from your local Columbia County agents. Compare quotes from multiple carriers. Free estimates, hurricane and flood coverage options.",

    headline: "Lake City Homeowners Insurance",
    subheadline: "Protect your Lake City home with comprehensive coverage from your local independent insurance agency. We've served Columbia County since 1981, helping neighbors find the right protection.",

    overview: [
        "Lake City homeowners benefit from working with a local agency that understands North Florida's unique insurance needs. From historic homes near downtown to newer properties throughout Columbia County, we know the local market and help our neighbors find comprehensive protection at competitive rates.",
        "As an independent insurance agency based right here in Lake City, we work with multiple carriers to find homeowners coverage that fits your property and budget. We understand Columbia County's risks—from tropical storms to flooding from the Suwannee and Santa Fe rivers—and help you prepare for them.",
        "Lewis Insurance Agency has served Lake City and North Florida since 1981. We're not just your insurance agents—we're your neighbors. When you need help with a claim or have questions about your coverage, you'll work with local people who know this community.",
    ],

    whyNeeded: [
        {
            title: "Tropical Storm Protection",
            content: "While Lake City is inland, tropical storms and their remnants regularly impact North Florida with damaging winds. Your homeowners policy provides wind coverage essential for protecting your home and belongings.",
        },
        {
            title: "Property Protection",
            content: "Your home is likely your largest investment. Adequate dwelling coverage ensures you can rebuild at current construction costs if disaster strikes—protecting your family's financial future.",
        },
        {
            title: "Local River Flooding Awareness",
            content: "Properties near the Suwannee River, Santa Fe River, and local lakes face flooding risks. While flood coverage is separate, understanding your total risk is important for complete protection.",
        },
        {
            title: "Liability Coverage",
            content: "Whether you have a pool, entertain guests, or simply want protection, liability coverage protects your assets if someone is injured on your Lake City property.",
        },
    ],

    localConsiderations: [
        "Hurricane and tropical storm deductibles apply even in North Florida",
        "Roof age and condition significantly impact rates",
        "Properties near rivers may have flood zone considerations",
        "Wind mitigation inspections can provide premium savings",
        "Flood insurance is separate from homeowners coverage",
        "Local claims support from agents who know the community",
    ],

    coverageHighlights: [
        { title: "Dwelling Coverage", description: "Protects your home's structure from covered perils" },
        { title: "Personal Property", description: "Covers belongings inside your home" },
        { title: "Liability Protection", description: "Covers injuries or damage you cause to others" },
        { title: "Loss of Use", description: "Pays living expenses if your home is uninhabitable" },
        { title: "Other Structures", description: "Covers detached garages, fences, and sheds" },
        { title: "Medical Payments", description: "Covers minor injuries to guests" },
    ],

    faqs: [
        {
            question: "How much does homeowners insurance cost in Lake City?",
            answer: "Lake City homeowners insurance costs vary based on home age, construction, roof condition, and coverage limits. North Florida rates are generally lower than coastal areas. We compare quotes from multiple carriers to find competitive rates for your Lake City home.",
        },
        {
            question: "Do I need hurricane coverage in Lake City?",
            answer: "Yes. While Lake City is inland, tropical storms and hurricane remnants regularly impact North Florida. Your homeowners policy includes wind coverage (with hurricane deductibles) that protects against storm damage.",
        },
        {
            question: "Should I get flood insurance in Lake City?",
            answer: "Flood damage is excluded from homeowners policies. If your property is near the Suwannee River, Santa Fe River, or in low-lying areas, flood insurance is important. Even properties outside flood zones can flood from heavy rain.",
        },
        {
            question: "What's a hurricane deductible in Lake City?",
            answer: "Hurricane deductibles are separate from regular deductibles and apply when named hurricanes cause damage. They're typically 2-5% of dwelling coverage. Even in North Florida, hurricane deductibles apply to policies.",
        },
        {
            question: "Why choose a local Lake City insurance agency?",
            answer: "Working with a local agency means you get agents who know Columbia County, understand local risks, and are here when you need help. We've served Lake City since 1981 and are invested in our community.",
        },
    ],

    relatedServices: [
        { title: "Lake City Flood Insurance", href: "/locations/lake-city-fl/flood-insurance", description: "River and rain flood protection" },
        { title: "Lake City Auto Insurance", href: "/locations/lake-city-fl/auto-insurance", description: "Bundle and save on home and auto" },
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

export default function LakeCityHomeownersInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
