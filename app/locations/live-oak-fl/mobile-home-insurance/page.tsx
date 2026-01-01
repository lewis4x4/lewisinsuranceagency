import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Live Oak",
    state: "FL",
    citySlug: "live-oak-fl",
    serviceName: "Mobile Home Insurance",
    serviceSlug: "mobile-home-insurance",

    title: "Live Oak Mobile Home Insurance | Suwannee County",
    description: "Mobile home insurance in Live Oak, FL. Independent agents compare manufactured home coverage for Suwannee County. Protection since 1981.",

    headline: "Live Oak Mobile Home Insurance",
    subheadline: "Specialized coverage for manufactured and mobile homes in Suwannee County. We compare carriers that understand mobile home insurance to find protection that fits your needs.",

    overview: [
        "Mobile homes and manufactured housing are a practical choice for many Suwannee County families. But standard homeowners insurance doesn't cover manufactured homes—you need specialized mobile home insurance that accounts for the unique characteristics of these structures.",
        "Insurance carriers evaluate mobile homes differently than site-built homes. Your home's age, tie-down certification, roof type, and location all affect coverage options and rates. Live Oak's distance from the coast often means better availability than South Florida, but you still need an agent who knows the mobile home market.",
        "Lewis Insurance Agency has insured Live Oak mobile homes since 1981. We work with carriers that specialize in manufactured housing and understand Suwannee County properties. From single-wides to modern manufactured homes, we find appropriate coverage.",
    ],

    whyNeeded: [
        {
            title: "Storm and Wind Exposure",
            content: "Mobile homes can be vulnerable to Florida's severe weather. Proper tie-downs and coverage protect your investment when storms affect Suwannee County. Insurance carriers look at wind resistance features when pricing coverage.",
        },
        {
            title: "Specialized Structure Coverage",
            content: "Mobile homes have different construction than traditional homes. You need a policy designed for manufactured housing that covers the structure appropriately—not a standard homeowners policy that may exclude mobile homes.",
        },
        {
            title: "Personal Property Protection",
            content: "Everything inside your mobile home—furniture, appliances, clothing, electronics—represents significant value. Mobile home insurance covers personal property against theft, fire, and other covered events.",
        },
        {
            title: "Liability Coverage",
            content: "If someone is injured at your home, liability coverage protects you from medical expenses and lawsuits. This protection is essential whether you own your land or rent a space in a mobile home park.",
        },
    ],

    localConsiderations: [
        "Tie-down certification affects coverage availability and rates",
        "Roof age and type impact premiums significantly",
        "Year manufactured determines carrier eligibility",
        "Wind mitigation features may reduce rates",
        "Coverage for additions like porches and carports",
        "Contents coverage for all personal belongings",
        "Liability protection for your property",
    ],

    coverageHighlights: [
        { title: "Dwelling Coverage", description: "Protects your mobile home structure" },
        { title: "Personal Property", description: "Covers furniture, appliances, belongings" },
        { title: "Liability Protection", description: "Injuries to others at your home" },
        { title: "Other Structures", description: "Sheds, carports, detached additions" },
        { title: "Loss of Use", description: "Living expenses if displaced" },
        { title: "Medical Payments", description: "Minor injuries regardless of fault" },
    ],

    faqs: [
        {
            question: "What information do you need to quote mobile home insurance?",
            answer: "We'll need the year, make, model, and dimensions of your home, plus tie-down certification status, roof details, whether you own or rent the land, and information about any additions or upgrades you've made.",
        },
        {
            question: "Can you shop multiple carriers at renewal?",
            answer: "Yes. As an independent agency, we review your mobile home coverage at renewal and compare options. Mobile home insurance markets change, and we can often find better rates by shopping your coverage.",
        },
        {
            question: "What affects mobile home insurance rates in Live Oak?",
            answer: "Major factors include your home's age, size, roof type, tie-down status, and your claims history. Newer homes with proper tie-downs and metal roofs typically qualify for better rates in Suwannee County.",
        },
        {
            question: "Do I need tie-downs for mobile home insurance?",
            answer: "Proper tie-downs are important for both safety and insurance. Many carriers require tie-down certification for coverage, and properly secured homes typically qualify for better rates. We can explain the requirements.",
        },
        {
            question: "Does mobile home insurance cover hurricane damage?",
            answer: "Wind damage is typically covered, though hurricane or named storm deductibles may apply. Flood damage requires separate flood insurance. We'll make sure you understand your storm coverage and any deductible structures.",
        },
        {
            question: "Can I insure an older mobile home?",
            answer: "Carrier eligibility varies by age, but we work with carriers that insure older manufactured homes. Homes over 25-30 years old may have fewer options, but we can usually find coverage for well-maintained older homes.",
        },
    ],

    relatedServices: [
        { title: "Live Oak Auto Insurance", href: "/locations/live-oak-fl/auto-insurance", description: "Bundle for multi-policy savings" },
        { title: "Live Oak Flood Insurance", href: "/locations/live-oak-fl/flood-insurance", description: "Separate flood protection" },
        { title: "Suwannee County Insurance", href: "/locations/live-oak-fl", description: "All insurance services" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function LiveOakMobileHomeInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
