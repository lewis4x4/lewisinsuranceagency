import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Gainesville",
    state: "FL",
    citySlug: "gainesville-fl",
    serviceName: "Business Insurance",
    serviceSlug: "business-insurance",
    title: "Gainesville Business Insurance | Alachua County FL",
    description: "Business insurance in Gainesville, FL. Independent agents compare commercial coverage for businesses near UF, Shands, and Santa Fe College since 1981.",
    headline: "Gainesville Business Insurance",
    subheadline: "Protect your Gainesville business with commercial coverage built for Alachua County operations. From downtown shops to medical practices to tech startups.",
    overview: [
        "Gainesville's diverse economy includes university-related businesses, healthcare providers, tech companies, retailers, and service providers. Each operation has unique risks generic policies may miss.",
        "As an independent agency, we understand your operations before recommending coverage. We build programs matching actual business risks, not one-size-fits-all solutions.",
        "Lewis Insurance Agency has worked with Alachua County businesses since 1981. Local agents respond directly when you need certificates, policy changes, or claims help.",
    ],
    whyNeeded: [
        { title: "Liability", content: "Customer injuries and property damage threaten any business. General liability provides essential protection." },
        { title: "Property", content: "Buildings, equipment, and inventory deserve protection from fire, storms, and theft." },
        { title: "Contracts", content: "Landlords, clients, and contractors often require proof of insurance. We provide certificates quickly." },
        { title: "Employees", content: "Workers' comp may be required and protects against lawsuits from workplace injuries." },
    ],
    localConsiderations: ["General liability", "Commercial property", "Business owners policy", "Workers' compensation", "Commercial auto", "Professional liability", "Cyber liability"],
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
        { question: "Can you compare carriers?", answer: "Yes. We work with multiple commercial carriers serving Alachua County." },
        { question: "What affects rates?", answer: "Industry, revenue, payroll, property values, claims, coverage limits." },
        { question: "Is workers' comp required?", answer: "Florida requires it for construction with 1+ employees and others with 4+." },
        { question: "How fast for certificates?", answer: "Same day once bound." },
        { question: "What's a BOP?", answer: "Business owners policy combining liability and property, often at lower cost for eligible businesses." },
    ],
    relatedServices: [
        { title: "Workers' Compensation", href: "/business/workers-compensation-florida", description: "Employee coverage" },
        { title: "Commercial Auto", href: "/business/commercial-auto-florida", description: "Business vehicles" },
        { title: "Cyber Liability", href: "/business/cyber-liability-florida", description: "Data protection" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function GainesvilleBusinessInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
