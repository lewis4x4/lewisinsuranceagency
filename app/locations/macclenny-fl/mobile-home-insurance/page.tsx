import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Macclenny",
    state: "FL",
    citySlug: "macclenny-fl",
    serviceName: "Mobile Home Insurance",
    serviceSlug: "mobile-home-insurance",

    title: "Macclenny Mobile Home Insurance | Baker County FL",
    description: "Mobile home insurance in Macclenny, FL. Independent agents compare manufactured home coverage for Baker County. Local protection since 1981.",

    headline: "Macclenny Mobile Home Insurance",
    subheadline: "Specialized coverage for manufactured and mobile homes in Baker County. We compare carriers that understand mobile home insurance to find protection that fits.",

    overview: [
        "Mobile homes and manufactured housing provide affordable living options for many Baker County families. Standard homeowners insurance doesn't cover these structures—you need specialized mobile home insurance designed for manufactured housing construction.",
        "Insurance carriers evaluate mobile homes based on age, tie-down status, roof type, and location. Macclenny's position between Lake City and Jacksonville means access to carriers serving both markets. We work with companies specializing in mobile homes.",
        "Lewis Insurance Agency has insured mobile homes in North Florida since 1981. Whether you have a single-wide, double-wide, or modern manufactured home, we find coverage protecting your investment at competitive rates.",
    ],

    whyNeeded: [
        {
            title: "Weather Protection",
            content: "Mobile homes face wind and storm risks differently than site-built homes. Proper tie-downs and insurance coverage protect your investment when severe weather affects Baker County.",
        },
        {
            title: "Specialized Coverage",
            content: "Mobile homes have unique construction. You need a policy designed for manufactured housing—not a standard homeowners policy that may exclude or inadequately cover mobile homes.",
        },
        {
            title: "Personal Property",
            content: "Everything inside your home has significant value. Mobile home insurance covers your belongings against theft, fire, and covered events.",
        },
        {
            title: "Liability Protection",
            content: "If someone is injured at your home, liability coverage protects you. This applies whether you own your land or rent a space.",
        },
    ],

    localConsiderations: [
        "Tie-down certification affects coverage options",
        "Roof type and age impact premiums",
        "Year manufactured determines carrier eligibility",
        "Wind mitigation features may reduce rates",
        "Coverage for additions and carports",
        "Contents coverage for belongings",
        "Liability for your property",
    ],

    coverageHighlights: [
        { title: "Dwelling Coverage", description: "Your mobile home structure" },
        { title: "Personal Property", description: "Furniture, appliances, belongings" },
        { title: "Liability Protection", description: "Injuries to others" },
        { title: "Other Structures", description: "Sheds, carports" },
        { title: "Loss of Use", description: "Living expenses if displaced" },
        { title: "Medical Payments", description: "Minor injuries" },
    ],

    faqs: [
        {
            question: "What information do you need to quote mobile home insurance?",
            answer: "We'll need year, make, model, and dimensions of your home, tie-down status, roof details, lot ownership, and any additions or upgrades you've made.",
        },
        {
            question: "Can you shop multiple carriers?",
            answer: "Yes. As an independent agency, we compare options from carriers specializing in manufactured housing to find competitive rates for Baker County mobile homes.",
        },
        {
            question: "What affects mobile home rates in Macclenny?",
            answer: "Age, size, roof type, tie-down certification, and claims history are major factors. Newer homes with proper tie-downs and metal roofs typically get better rates.",
        },
        {
            question: "Are tie-downs required for insurance?",
            answer: "Many carriers require tie-down certification. Properly secured homes qualify for better rates and are safer in storms. We can explain requirements.",
        },
        {
            question: "Can older mobile homes be insured?",
            answer: "Yes, though options vary by age. We work with carriers covering older homes. Well-maintained manufactured homes usually can be covered.",
        },
        {
            question: "Does coverage include storm damage?",
            answer: "Wind damage is typically covered, though deductibles may apply for named storms. Flood requires separate coverage. We explain your protection clearly.",
        },
    ],

    relatedServices: [
        { title: "Macclenny Auto Insurance", href: "/locations/macclenny-fl/auto-insurance", description: "Bundle for savings" },
        { title: "Flood Insurance", href: "/personal/flood-insurance-florida", description: "Separate flood coverage" },
        { title: "Baker County Insurance", href: "/locations/macclenny-fl", description: "All coverage options" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function MacclennyMobileHomeInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
