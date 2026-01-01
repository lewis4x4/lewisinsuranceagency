import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "White Springs",
    state: "FL",
    citySlug: "white-springs-fl",
    serviceName: "Mobile Home Insurance",
    serviceSlug: "mobile-home-insurance",

    title: "White Springs Mobile Home Insurance | Hamilton County",
    description: "Mobile home insurance in White Springs, FL. Independent agents compare manufactured home coverage for Hamilton County since 1981.",

    headline: "White Springs Mobile Home Insurance",
    subheadline: "Specialized coverage for manufactured homes in Hamilton County. We compare carriers to find protection fitting your mobile home.",

    overview: [
        "Mobile homes provide affordable housing for many White Springs and Hamilton County families. Standard homeowners doesn't cover manufactured homes—you need specialized mobile home insurance.",
        "Carriers evaluate mobile homes by age, tie-downs, roof type, and location. We work with carriers specializing in manufactured housing.",
        "Lewis Insurance Agency has insured North Florida mobile homes since 1981. We find competitive coverage for your home.",
    ],

    whyNeeded: [
        { title: "Weather", content: "Mobile homes face wind risks. Proper tie-downs and coverage protect your investment." },
        { title: "Flood Risk", content: "Properties near the Suwannee may need flood insurance. Standard policies exclude flood." },
        { title: "Specialized Coverage", content: "Mobile homes need policies designed for manufactured housing." },
        { title: "Personal Property", content: "Your belongings have significant value and are covered." },
    ],

    localConsiderations: ["Tie-down certification affects coverage", "Roof type impacts premiums", "Year built determines eligibility", "Flood zones near river", "Wind mitigation may help", "Additions need coverage"],

    coverageHighlights: [
        { title: "Dwelling", description: "Mobile home structure" },
        { title: "Personal Property", description: "Belongings" },
        { title: "Liability", description: "Injury protection" },
        { title: "Other Structures", description: "Sheds, carports" },
        { title: "Loss of Use", description: "Living expenses" },
        { title: "Medical Payments", description: "Minor injuries" },
    ],

    faqs: [
        { question: "What's needed to quote?", answer: "Year, make, model, dimensions, tie-down status, roof details, lot ownership, additions." },
        { question: "Can you compare carriers?", answer: "Yes. We compare multiple carriers specializing in manufactured housing." },
        { question: "What affects rates?", answer: "Age, size, roof type, tie-downs, and claims history." },
        { question: "Do I need flood insurance?", answer: "If near the Suwannee River, flood insurance may be essential." },
        { question: "Can older homes be insured?", answer: "Yes, though options vary. We find coverage for well-maintained older homes." },
        { question: "Are tie-downs required?", answer: "Many carriers require tie-down certification for coverage and better rates." },
    ],

    relatedServices: [
        { title: "White Springs Auto", href: "/locations/white-springs-fl/auto-insurance", description: "Bundle for savings" },
        { title: "Flood Insurance", href: "/personal/flood-insurance-florida", description: "Separate flood coverage" },
        { title: "Hamilton County", href: "/locations/white-springs-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function WhiteSpringsMobileHomeInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
