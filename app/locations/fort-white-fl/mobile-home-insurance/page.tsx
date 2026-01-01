import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Fort White",
    state: "FL",
    citySlug: "fort-white-fl",
    serviceName: "Mobile Home Insurance",
    serviceSlug: "mobile-home-insurance",

    title: "Fort White Mobile Home Insurance | Columbia County",
    description: "Mobile home insurance in Fort White, FL. Independent agents compare manufactured home coverage for Columbia County since 1981.",

    headline: "Fort White Mobile Home Insurance",
    subheadline: "Specialized coverage for manufactured homes in the Fort White area. We compare carriers to find protection fitting your mobile home and budget.",

    overview: [
        "Mobile homes provide affordable housing for many Fort White families. Standard homeowners doesn't cover manufactured homes—you need specialized mobile home insurance designed for these structures.",
        "Carriers evaluate mobile homes by age, tie-downs, roof type, and location. Fort White's proximity to rivers adds flood considerations. We work with carriers specializing in mobile homes.",
        "Lewis Insurance Agency has insured North Florida mobile homes since 1981. Whether single-wide or modern manufactured home, we find competitive coverage.",
    ],

    whyNeeded: [
        {
            title: "Weather Exposure",
            content: "Mobile homes face wind and storm risks. Proper tie-downs and coverage protect your investment.",
        },
        {
            title: "Flood Risk",
            content: "Properties near springs or rivers may need flood insurance. Standard mobile home policies exclude flood.",
        },
        {
            title: "Specialized Coverage",
            content: "Mobile homes have unique construction requiring specialized policies.",
        },
        {
            title: "Personal Property",
            content: "Your belongings have significant value. Mobile home insurance covers contents.",
        },
    ],

    localConsiderations: [
        "Tie-down certification affects coverage",
        "Roof type impacts premiums",
        "Year built determines eligibility",
        "Flood zones near rivers",
        "Wind mitigation may help",
        "Additions need coverage",
    ],

    coverageHighlights: [
        { title: "Dwelling", description: "Mobile home structure" },
        { title: "Personal Property", description: "Belongings" },
        { title: "Liability", description: "Injury protection" },
        { title: "Other Structures", description: "Sheds, carports" },
        { title: "Loss of Use", description: "Living expenses" },
        { title: "Medical Payments", description: "Minor injuries" },
    ],

    faqs: [
        {
            question: "What's needed to quote mobile home insurance?",
            answer: "Year, make, model, dimensions, tie-down status, roof details, lot ownership, and additions.",
        },
        {
            question: "Can you compare carriers?",
            answer: "Yes. We compare multiple carriers specializing in manufactured housing for competitive rates.",
        },
        {
            question: "What affects rates?",
            answer: "Age, size, roof type, tie-downs, and claims history. Newer homes with metal roofs get better rates.",
        },
        {
            question: "Do I need flood insurance?",
            answer: "If near the Santa Fe River or springs, flood insurance is essential. Standard mobile home policies exclude flood.",
        },
        {
            question: "Can older homes be insured?",
            answer: "Yes, though options vary by age. We find coverage for well-maintained older homes.",
        },
        {
            question: "Are tie-downs required?",
            answer: "Many carriers require tie-down certification. Secured homes get better rates and are safer.",
        },
    ],

    relatedServices: [
        { title: "Fort White Auto", href: "/locations/fort-white-fl/auto-insurance", description: "Bundle for savings" },
        { title: "Flood Insurance", href: "/personal/flood-insurance-florida", description: "Separate flood coverage" },
        { title: "Columbia County", href: "/locations/fort-white-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function FortWhiteMobileHomeInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
