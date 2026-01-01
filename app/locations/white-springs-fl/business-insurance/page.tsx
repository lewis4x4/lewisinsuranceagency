import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "White Springs",
    state: "FL",
    citySlug: "white-springs-fl",
    serviceName: "Business Insurance",
    serviceSlug: "business-insurance",

    title: "White Springs Business Insurance | Hamilton County FL",
    description: "Business insurance in White Springs, FL. Independent agents compare commercial coverage for Hamilton County businesses since 1981.",

    headline: "White Springs Business Insurance",
    subheadline: "Protect your White Springs business with commercial coverage built for Hamilton County operations.",

    overview: [
        "White Springs businesses serve locals and visitors to Stephen Foster Folk Culture Center and the Suwannee River area. Each business has unique needs generic policies may miss.",
        "As an independent agency, we understand your operations before recommending coverage. We build programs matching actual business risks.",
        "Lewis Insurance Agency has worked with Hamilton County businesses since 1981. Local agents respond directly when you need help.",
    ],

    whyNeeded: [
        { title: "Liability", content: "Customer injuries and property damage threaten any business. Liability provides essential protection." },
        { title: "Property", content: "Buildings, equipment, and inventory deserve protection." },
        { title: "Contracts", content: "Many relationships require proof of insurance. We provide certificates quickly." },
        { title: "Employees", content: "Workers' comp may be required and protects against lawsuits." },
    ],

    localConsiderations: ["General liability", "Commercial property", "Business owners policy", "Workers' compensation", "Commercial auto", "Professional liability", "Equipment coverage"],

    coverageHighlights: [
        { title: "General Liability", description: "Third-party claims" },
        { title: "Commercial Property", description: "Buildings, equipment" },
        { title: "Business Income", description: "Lost revenue" },
        { title: "Workers' Comp", description: "Employee injuries" },
        { title: "Commercial Auto", description: "Business vehicles" },
        { title: "Professional Liability", description: "Errors and omissions" },
    ],

    faqs: [
        { question: "What's needed for a quote?", answer: "Operations details, revenue, employees, property values, existing coverage." },
        { question: "Can you compare carriers?", answer: "Yes. We work with multiple commercial carriers." },
        { question: "What affects rates?", answer: "Industry, revenue, payroll, property values, claims, coverage limits." },
        { question: "Is workers' comp required?", answer: "Florida requires it for construction with 1+ employees and others with 4+." },
        { question: "How fast for certificates?", answer: "Same day once bound." },
        { question: "What's a BOP?", answer: "Business owners policy combining liability and property, often at lower cost." },
    ],

    relatedServices: [
        { title: "Workers' Compensation", href: "/business/workers-compensation-florida", description: "Employee coverage" },
        { title: "Commercial Auto", href: "/business/commercial-auto-florida", description: "Business vehicles" },
        { title: "General Liability", href: "/business/general-liability-florida", description: "Core protection" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function WhiteSpringsBusinessInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
