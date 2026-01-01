import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Fort White",
    state: "FL",
    citySlug: "fort-white-fl",
    serviceName: "Business Insurance",
    serviceSlug: "business-insurance",

    title: "Fort White Business Insurance | Columbia County FL",
    description: "Business insurance in Fort White, FL. Independent agents compare commercial coverage for Columbia County businesses since 1981.",

    headline: "Fort White Business Insurance",
    subheadline: "Protect your Fort White business with commercial coverage built for Columbia County operations. We compare carriers to find the right protection.",

    overview: [
        "Fort White businesses serve locals and visitors drawn to the springs. From outfitters and tour companies to service businesses and contractors, each has unique insurance needs generic policies may miss.",
        "As an independent agency, we understand your operations before recommending coverage. We build programs matching your actual business risks.",
        "Lewis Insurance Agency has worked with Columbia County businesses since 1981. When you need certificates or claims help, local agents respond directly.",
    ],

    whyNeeded: [
        {
            title: "Liability",
            content: "Customer injuries and property damage claims threaten any business. General liability provides essential protection.",
        },
        {
            title: "Property",
            content: "Buildings, equipment, and inventory deserve protection from covered perils.",
        },
        {
            title: "Contracts",
            content: "Many relationships require proof of insurance. We provide certificates quickly.",
        },
        {
            title: "Employees",
            content: "Workers' comp may be required and protects against injury lawsuits.",
        },
    ],

    localConsiderations: [
        "General liability for premises/operations",
        "Commercial property for buildings/equipment",
        "Business owners policy options",
        "Workers' compensation",
        "Commercial auto",
        "Professional liability",
        "Equipment coverage",
    ],

    coverageHighlights: [
        { title: "General Liability", description: "Third-party claims" },
        { title: "Commercial Property", description: "Buildings, equipment" },
        { title: "Business Income", description: "Lost revenue" },
        { title: "Workers' Comp", description: "Employee injuries" },
        { title: "Commercial Auto", description: "Business vehicles" },
        { title: "Professional Liability", description: "Errors and omissions" },
    ],

    faqs: [
        {
            question: "What's needed for a business quote?",
            answer: "Operations details, revenue, employees, property values, and existing coverage.",
        },
        {
            question: "Can you compare carriers?",
            answer: "Yes. We work with multiple commercial carriers for competitive options.",
        },
        {
            question: "What affects rates?",
            answer: "Industry, revenue, payroll, property values, claims, and coverage limits.",
        },
        {
            question: "Is workers' comp required?",
            answer: "Florida requires it for construction with 1+ employees and others with 4+ employees.",
        },
        {
            question: "How fast for certificates?",
            answer: "Same day once coverage is bound. Let us know about deadlines.",
        },
        {
            question: "What's a BOP?",
            answer: "Business owners policy combining liability and property, often at lower cost than separate policies.",
        },
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
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function FortWhiteBusinessInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
