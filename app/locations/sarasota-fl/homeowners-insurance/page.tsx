import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Sarasota",
    state: "FL",
    citySlug: "sarasota-fl",
    serviceName: "Homeowners Insurance",
    serviceSlug: "homeowners-insurance",

    title: "Sarasota Homeowners Insurance | Compare Quotes",
    description: "Find affordable homeowners insurance in Sarasota, FL. Compare quotes for hurricane.",

    headline: "Sarasota Homeowners Insurance",
    subheadline: "Protect your Sarasota home with comprehensive coverage designed for Florida's Gulf Coast. We compare rates from multiple carriers to find the best protection for your property.",

    overview: [
        "Sarasota homeowners face significant insurance challenges due to the area's Gulf Coast location and hurricane vulnerability. From beachfront properties on Siesta Key to family homes in Lakewood Ranch, every Sarasota County property needs comprehensive protection against wind, water, and storms.",
        "As an independent insurance agency, we work with multiple carriers—including admitted and surplus lines insurers—to find homeowners coverage that fits your Sarasota property and budget. We understand the local market and help you navigate wind mitigation credits, hurricane deductibles, and roof requirements.",
        "The Sarasota insurance market has evolved significantly, especially following recent hurricane seasons. We stay current with carrier availability and help Sarasota homeowners find coverage options, compare rates, and protect their homes and families.",
    ],

    whyNeeded: [
        {
            title: "Hurricane and Wind Protection",
            content: "Sarasota's Gulf Coast location makes it vulnerable to hurricanes and tropical storms. Your homeowners policy provides wind coverage (subject to hurricane deductibles) essential for protecting your home from storm damage.",
        },
        {
            title: "Property Value Protection",
            content: "Sarasota real estate values have increased significantly. Adequate dwelling coverage ensures you can rebuild at current construction costs—not your purchase price or tax value.",
        },
        {
            title: "Barrier Island Considerations",
            content: "Properties on Siesta Key, Longboat Key, and other barrier islands face heightened wind and flood exposure. Specialized coverage and proper valuations are essential for these coastal properties.",
        },
        {
            title: "Liability Coverage",
            content: "Whether you have a pool, waterfront access, or simply want protection, liability coverage protects you if someone is injured on your Sarasota property.",
        },
    ],

    localConsiderations: [
        "Hurricane deductibles typically range from 2-5% of dwelling coverage",
        "Barrier island properties face additional underwriting requirements",
        "Roof age significantly impacts rates—newer roofs get better pricing",
        "Wind mitigation inspections can save hundreds or thousands annually",
        "Flood insurance is separate and essential for Sarasota properties",
        "Lakewood Ranch and inland areas may have different risk profiles",
    ],

    coverageHighlights: [
        { title: "Dwelling Coverage", description: "Protects your home's structure from covered perils" },
        { title: "Personal Property", description: "Covers belongings inside your home" },
        { title: "Liability Protection", description: "Covers injuries or damage you cause to others" },
        { title: "Loss of Use", description: "Pays living expenses if your home is uninhabitable" },
        { title: "Other Structures", description: "Covers detached garages, fences, and pool equipment" },
        { title: "Medical Payments", description: "Covers minor injuries to guests" },
    ],

    faqs: [
        {
            question: "How much does homeowners insurance cost in Sarasota?",
            answer: "Sarasota homeowners insurance costs vary based on location (barrier islands vs. inland), home age and construction, roof condition, and coverage limits. Coastal properties typically cost more. Compare quotes from multiple carriers to find competitive rates.",
        },
        {
            question: "Is Siesta Key harder to insure?",
            answer: "Barrier island properties like those on Siesta Key face additional underwriting scrutiny due to hurricane and flood exposure. Coverage is available, but you may need specialized carriers. Wind mitigation features and updated construction significantly help.",
        },
        {
            question: "Do I need flood insurance in Sarasota?",
            answer: "Yes. Flood damage is excluded from homeowners policies. Sarasota's coastal location and recent flooding history make flood insurance essential. Many properties require it for mortgages, and we recommend it even in lower-risk zones.",
        },
        {
            question: "What's a hurricane deductible in Sarasota?",
            answer: "Hurricane deductibles are separate from regular deductibles, applying only when named hurricanes cause damage. They're typically 2-5% of dwelling coverage. On a $500,000 home, a 2% hurricane deductible means $10,000 out of pocket.",
        },
        {
            question: "Does Lakewood Ranch have different insurance than coastal Sarasota?",
            answer: "Yes, inland areas like Lakewood Ranch typically have lower hurricane risk profiles than coastal and barrier island properties. This can mean better rates and more carrier options, though wind coverage is still essential throughout Sarasota County.",
        },
    ],

    relatedServices: [
        { title: "Sarasota Flood Insurance", href: "/locations/sarasota-fl/flood-insurance", description: "Essential coastal coverage" },
        { title: "Sarasota Auto Insurance", href: "/locations/sarasota-fl/auto-insurance", description: "Bundle and save on home and auto" },
        { title: "Sarasota County Insurance", href: "/locations/sarasota-fl", description: "All insurance services" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function SarasotaHomeownersInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
