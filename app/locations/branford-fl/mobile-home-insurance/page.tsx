import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Branford",
    state: "FL",
    citySlug: "branford-fl",
    serviceName: "Mobile Home Insurance",
    serviceSlug: "mobile-home-insurance",

    title: "Branford Mobile Home Insurance | Suwannee County",
    description: "Mobile home insurance in Branford, FL. Independent agents compare manufactured home coverage for Suwannee County. Local protection since 1981.",

    headline: "Branford Mobile Home Insurance",
    subheadline: "Specialized coverage for manufactured and mobile homes in the Branford area. We compare carriers that understand mobile home insurance to protect your home and belongings.",

    overview: [
        "Mobile homes and manufactured housing are a practical choice for many families in the Branford and Suwannee County area. Standard homeowners insurance doesn't cover these structures—you need specialized mobile home insurance designed for manufactured housing.",
        "Insurance carriers evaluate mobile homes based on age, tie-down status, roof type, and location. Branford's proximity to the rivers adds flood considerations to the mix. We work with carriers that specialize in mobile homes and understand the local market.",
        "Lewis Insurance Agency has insured mobile homes in North Florida since 1981. Whether you have a single-wide, double-wide, or newer manufactured home, we find coverage that protects your investment at competitive rates.",
    ],

    whyNeeded: [
        {
            title: "Weather Vulnerability",
            content: "Mobile homes can be more susceptible to Florida's severe weather. Proper tie-downs and insurance coverage protect your home when storms affect Suwannee County. Carriers evaluate wind resistance when pricing coverage.",
        },
        {
            title: "Flood Risk Near Rivers",
            content: "Properties near the Suwannee or Santa Fe rivers may need separate flood insurance. Standard mobile home policies don't cover flood—we help you evaluate this important exposure.",
        },
        {
            title: "Specialized Structure Coverage",
            content: "Mobile homes have different construction than site-built homes. You need a policy designed specifically for manufactured housing, not a standard homeowners policy.",
        },
        {
            title: "Personal Property Protection",
            content: "Everything inside your home—furniture, appliances, clothing—has significant value. Mobile home insurance covers your belongings against theft, fire, and covered events.",
        },
    ],

    localConsiderations: [
        "Tie-down certification affects coverage availability",
        "Roof type and age impact premiums",
        "Year manufactured determines carrier eligibility",
        "Flood zone status near rivers requires attention",
        "Wind mitigation features may reduce rates",
        "Coverage for additions like porches and carports",
        "Contents coverage for personal belongings",
    ],

    coverageHighlights: [
        { title: "Dwelling Coverage", description: "Protects your mobile home structure" },
        { title: "Personal Property", description: "Furniture, appliances, belongings" },
        { title: "Liability Protection", description: "Injuries to others at your home" },
        { title: "Other Structures", description: "Sheds, carports, additions" },
        { title: "Loss of Use", description: "Living expenses if displaced" },
        { title: "Medical Payments", description: "Minor injuries regardless of fault" },
    ],

    faqs: [
        {
            question: "What information do you need to quote mobile home insurance?",
            answer: "We'll need the year, make, model, and dimensions of your home, plus tie-down status, roof details, lot ownership, and any additions. For properties near rivers, we'll discuss flood zone status.",
        },
        {
            question: "Can you shop multiple carriers for mobile home insurance?",
            answer: "Yes. As an independent agency, we compare options from several carriers that specialize in manufactured housing. Mobile home insurance markets vary, and we find competitive rates.",
        },
        {
            question: "What affects mobile home rates in Branford?",
            answer: "Age, size, roof type, tie-down certification, and claims history are major factors. Newer homes with proper tie-downs and metal roofs typically qualify for better rates. Flood zone location may also affect pricing.",
        },
        {
            question: "Do I need flood insurance for my mobile home?",
            answer: "If your mobile home is near the Suwannee or Santa Fe rivers or in a flood zone, flood insurance is essential. Standard mobile home policies exclude flood damage—separate flood coverage protects this gap.",
        },
        {
            question: "Can older mobile homes be insured?",
            answer: "Yes, though options vary by age. We work with carriers that insure older manufactured homes. Well-maintained homes over 25 years old may have fewer options but can usually be covered.",
        },
        {
            question: "Are tie-downs required for insurance?",
            answer: "Many carriers require proper tie-down certification for coverage, and secured homes qualify for better rates. Tie-downs are important for both safety and insurability in Florida.",
        },
    ],

    relatedServices: [
        { title: "Branford Auto Insurance", href: "/locations/branford-fl/auto-insurance", description: "Bundle for savings" },
        { title: "Flood Insurance", href: "/personal/flood-insurance-florida", description: "Separate flood coverage" },
        { title: "Suwannee County Insurance", href: "/locations/branford-fl", description: "All coverage options" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function BranfordMobileHomeInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
