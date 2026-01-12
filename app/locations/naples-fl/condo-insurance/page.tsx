import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Naples",
    state: "FL",
    citySlug: "naples-fl",
    serviceName: "Condo Insurance",
    serviceSlug: "condo-insurance",

    title: "Naples Condo Insurance | HO-6 Coverage",
    description: "Naples condo insurance from independent Florida agents. HO-6 policies covering interior, personal property, and liability. Collier County condo specialists.",

    headline: "Naples Condo Insurance",
    subheadline: "Protect your Naples condo with HO-6 coverage designed for Collier County's coastal communities. We help you understand master policy gaps and build comprehensive personal coverage.",

    overview: [
        "Naples is known for its luxury condo communities along the Gulf Coast and throughout Collier County. From high-rise towers in Pelican Bay to beachfront units in Park Shore, each condo owner needs their own HO-6 policy—because your HOA's master policy doesn't cover everything.",
        "Understanding the gap between your HOA's master policy and what you need to insure personally is crucial, especially in Naples where condo values are significant. We help analyze master policies and build HO-6 coverage that fully protects your investment.",
        "Naples condos face unique hurricane risks. Recent storms have caused significant damage to coastal communities. Proper condo insurance ensures you're protected for your unit's interior, personal property, and liability—plus loss assessments when the HOA needs to repair common areas.",
    ],

    whyNeeded: [
        {
            title: "Master Policy Limitations",
            content: "Your HOA's master policy covers common areas and building structure, but not your personal belongings, interior improvements, or personal liability. HO-6 insurance fills these critical gaps for Naples condo owners.",
        },
        {
            title: "High-Value Unit Protection",
            content: "Naples condos often feature luxury upgrades—custom finishes, high-end appliances, designer improvements. HO-6 coverage with adequate dwelling limits ensures these improvements are protected.",
        },
        {
            title: "Hurricane Loss Assessment",
            content: "When hurricanes damage Naples condo buildings, HOAs often issue special assessments to owners for repairs beyond master policy limits. Loss assessment coverage protects you from these unexpected costs.",
        },
        {
            title: "Liability in Luxury Communities",
            content: "Naples condo owners often entertain guests and may rent units seasonally. Personal liability coverage protects your assets if someone is injured in your unit.",
        },
    ],

    localConsiderations: [
        "Review your HOA master policy to understand coverage gaps",
        "Naples high-rise condos may have specific insurance requirements",
        "Loss assessment coverage is critical after major hurricane damage",
        "Seasonal rental use may require additional coverage endorsements",
        "Flood insurance is separate—essential for Naples coastal condos",
        "Valuable items like jewelry and art may need scheduled coverage",
    ],

    coverageHighlights: [
        { title: "Personal Property", description: "Covers furniture, electronics, and belongings" },
        { title: "Dwelling (Interior)", description: "Covers walls, flooring, cabinets, and upgrades" },
        { title: "Personal Liability", description: "Protects against lawsuits from injuries" },
        { title: "Loss Assessment", description: "Covers your share of HOA special assessments" },
        { title: "Loss of Use", description: "Pays living expenses if unit is uninhabitable" },
        { title: "Scheduled Items", description: "Additional coverage for jewelry and valuables" },
    ],

    faqs: [
        {
            question: "How much condo insurance do I need in Naples?",
            answer: "Coverage needs depend on your personal property value, interior upgrades, and HOA master policy type. Naples' luxury condos often need substantial dwelling coverage for custom improvements. We review your master policy to determine appropriate coverage levels.",
        },
        {
            question: "Does my HOA insurance cover hurricane damage to my unit?",
            answer: "Your HOA's master policy covers the building structure and common areas. Damage to your personal belongings, interior improvements, and any special assessments for building repairs require your personal HO-6 policy.",
        },
        {
            question: "What is loss assessment coverage and do I need it?",
            answer: "Loss assessment coverage pays your share of special HOA assessments when damage exceeds the master policy limits. After hurricanes damage Naples condo buildings, these assessments can be substantial. We recommend at least $25,000-$50,000 in coverage.",
        },
        {
            question: "Do I need flood insurance for my Naples condo?",
            answer: "Yes. Flood damage is excluded from HO-6 policies. Naples coastal condos face real flood risk from storm surge. Even upper-floor units can flood from broken pipes or roof damage. Flood insurance is essential for comprehensive protection.",
        },
        {
            question: "Can I rent my Naples condo seasonally?",
            answer: "You need to inform your insurance company if you rent your condo. Seasonal rentals may require a landlord policy or specific endorsements. We can help you find coverage that allows rental use while maintaining proper protection.",
        },
    ],

    relatedServices: [
        { title: "Naples Homeowners Insurance", href: "/locations/naples-fl/homeowners-insurance", description: "Coverage for single-family homes" },
        { title: "Naples Flood Insurance", href: "/locations/naples-fl/flood-insurance", description: "Essential flood protection" },
        { title: "Collier County Insurance", href: "/locations/naples-fl", description: "All insurance services" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function NaplesCondoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
