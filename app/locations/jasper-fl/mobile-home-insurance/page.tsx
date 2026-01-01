import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Jasper",
    state: "FL",
    citySlug: "jasper-fl",
    serviceName: "Mobile Home Insurance",
    serviceSlug: "mobile-home-insurance",

    title: "Jasper Mobile Home Insurance | Hamilton County FL",
    description: "Mobile home insurance in Jasper, FL. Independent agents compare manufactured home coverage for Hamilton County since 1981.",

    headline: "Jasper Mobile Home Insurance",
    subheadline: "Specialized coverage for manufactured homes in Hamilton County. We compare carriers to find protection fitting your mobile home.",

    overview: [
        "Mobile homes provide affordable housing for many Jasper and Hamilton County families. Standard homeowners doesn't cover manufactured homes—you need specialized mobile home insurance.",
        "Carriers evaluate mobile homes by age, tie-downs, roof type, and location. We work with carriers specializing in manufactured housing.",
        "Lewis Insurance Agency has insured North Florida mobile homes since 1981. We find competitive coverage.",
    ],

    whyNeeded: [
        { title: "Weather", content: "Mobile homes face wind risks. Proper tie-downs and coverage protect your investment." },
        { title: "Specialized Coverage", content: "Mobile homes need policies designed for manufactured housing." },
        { title: "Personal Property", content: "Your belongings have significant value and are covered." },
        { title: "Liability", content: "Injuries at your home create financial risk." },
    ],

    localConsiderations: ["Tie-down certification affects coverage", "Roof type impacts premiums", "Year built determines eligibility", "Wind mitigation may help", "Additions need coverage", "Liability protection included"],

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
        { question: "Can older homes be insured?", answer: "Yes, though options vary. We find coverage for well-maintained older homes." },
        { question: "Are tie-downs required?", answer: "Many carriers require tie-down certification for coverage and better rates." },
        { question: "Does coverage include storm damage?", answer: "Wind is typically covered. Flood requires separate coverage." },
    ],

    relatedServices: [
        { title: "Jasper Auto", href: "/locations/jasper-fl/auto-insurance", description: "Bundle for savings" },
        { title: "Flood Insurance", href: "/personal/flood-insurance-florida", description: "Separate flood coverage" },
        { title: "Hamilton County", href: "/locations/jasper-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function JasperMobileHomeInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
