import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Orlando",
    state: "FL",
    citySlug: "orlando-fl",
    serviceName: "Condo Insurance",
    serviceSlug: "condo-insurance",

    title: "Orlando Condo Insurance | HO-6 Coverage",
    description: "Orlando condo insurance from independent Florida agents. HO-6 policies covering interior, personal property, and liability. Serving Orange County condo owners.",

    headline: "Orlando Condo Insurance",
    subheadline: "Protect your Orlando condo with HO-6 coverage designed for unit owners. We help you understand what your HOA covers and fill the gaps with the right personal policy.",

    overview: [
        "Orlando's condo market has grown significantly, from downtown high-rises to suburban communities in Dr. Phillips, Lake Nona, and Winter Park. Each condo owner needs their own HO-6 policy to protect personal property, interior improvements, and personal liability—because your HOA's master policy doesn't cover everything.",
        "Understanding the gap between your HOA's master policy and what you need to insure personally is crucial. We help Orlando condo owners analyze their master policy and build HO-6 coverage that fills the gaps without overlapping and overpaying.",
        "Whether you own a downtown Orlando condo, a unit in a suburban community, or an investment property you rent out, we can help you find condo insurance that protects your investment and meets your lender's requirements if you have a mortgage.",
    ],

    whyNeeded: [
        {
            title: "Master Policy Gaps",
            content: "Your HOA's master policy covers common areas and the building structure, but typically not your personal belongings, interior improvements (like upgraded flooring or cabinets), or personal liability. HO-6 fills these gaps.",
        },
        {
            title: "Personal Property Protection",
            content: "Your furniture, electronics, clothing, and other belongings aren't covered by your HOA. HO-6 condo insurance protects these items from theft, fire, water damage, and other covered perils.",
        },
        {
            title: "Interior Coverage",
            content: "Depending on your HOA's master policy type (bare walls vs. all-in), you may be responsible for insuring interior walls, flooring, cabinets, and fixtures. Loss assessment coverage can also protect you from special HOA assessments.",
        },
        {
            title: "Liability Protection",
            content: "If someone is injured in your condo unit and sues you, personal liability coverage protects your assets. This is especially important if you rent your condo out to others.",
        },
    ],

    localConsiderations: [
        "Review your HOA master policy to understand what's already covered",
        "Downtown Orlando high-rises may have different requirements than suburban condos",
        "Loss assessment coverage protects against special HOA assessments after major damage",
        "Investment condos may need landlord/rental dwelling policies instead of HO-6",
        "Flood insurance is separate—even upper floors can flood from broken pipes",
        "Orlando condos near lakes may have additional flood considerations",
    ],

    coverageHighlights: [
        { title: "Personal Property", description: "Covers furniture, electronics, and belongings" },
        { title: "Dwelling (Interior)", description: "Covers walls, flooring, cabinets, and fixtures" },
        { title: "Personal Liability", description: "Protects against lawsuits from injuries in your unit" },
        { title: "Loss Assessment", description: "Covers your share of HOA special assessments" },
        { title: "Loss of Use", description: "Pays living expenses if your unit is uninhabitable" },
        { title: "Medical Payments", description: "Covers minor injuries to guests in your unit" },
    ],

    faqs: [
        {
            question: "What's the difference between HO-6 and homeowners insurance?",
            answer: "HO-6 is specifically designed for condo owners. Unlike homeowners insurance (HO-3), HO-6 coordinates with your HOA's master policy and covers your unit's interior and personal property—not the building's exterior structure, which the HOA insures.",
        },
        {
            question: "How much condo insurance do I need in Orlando?",
            answer: "Coverage needs depend on your personal property value, interior improvements, and your HOA's master policy type. We help you calculate appropriate coverage by reviewing what the master policy covers and what gaps you need to fill.",
        },
        {
            question: "Does my HOA insurance cover my belongings?",
            answer: "No. Your HOA's master policy covers common areas and building structure, not your personal property. Your furniture, electronics, clothing, and other belongings need separate HO-6 coverage.",
        },
        {
            question: "What is loss assessment coverage?",
            answer: "If your condo building suffers major damage and the HOA's master policy doesn't cover the full cost, owners may face special assessments. Loss assessment coverage helps pay your share of these unexpected costs.",
        },
        {
            question: "Do I need flood insurance for my Orlando condo?",
            answer: "Flood damage is excluded from HO-6 policies. Even upper-floor units can flood from broken pipes above or severe weather. We recommend reviewing flood insurance options, especially for ground-floor units or buildings near water.",
        },
    ],

    relatedServices: [
        { title: "Orlando Homeowners Insurance", href: "/locations/orlando-fl/homeowners-insurance", description: "Coverage for single-family homes" },
        { title: "Orlando Flood Insurance", href: "/locations/orlando-fl/flood-insurance", description: "Flood coverage for condo units" },
        { title: "Orlando Auto Insurance", href: "/locations/orlando-fl/auto-insurance", description: "Bundle condo and auto for savings" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function OrlandoCondoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
