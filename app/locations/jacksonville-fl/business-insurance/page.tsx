import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Jacksonville",
    state: "FL",
    citySlug: "jacksonville-fl",
    serviceName: "Business Insurance",
    serviceSlug: "business-insurance",
    title: "Jacksonville Business Insurance | Duval County FL",
    description: "Business insurance in Jacksonville, FL. Independent agents compare commercial coverage for businesses from Downtown to the Beaches since 1981.",
    headline: "Jacksonville Business Insurance",
    subheadline: "Protect your Jacksonville business with commercial coverage built for Duval County operations. From port logistics to healthcare to professional services.",
    overview: [
        "Jacksonville's diverse economy includes logistics, healthcare, financial services, manufacturing, retail, and more. Florida's largest city by area means businesses across many industries need proper coverage.",
        "As an independent agency, we understand your operations before recommending coverage. We build programs matching actual business risks, not one-size-fits-all solutions.",
        "Lewis Insurance Agency has worked with Jacksonville businesses since 1981. Local agents respond directly when you need certificates, policy changes, or claims help.",
    ],
    whyNeeded: [
        { title: "Liability", content: "Customer injuries and property damage threaten any business. General liability provides essential protection." },
        { title: "Property", content: "Buildings, equipment, and inventory deserve protection from fire, storms, and theft." },
        { title: "Contracts", content: "Landlords, clients, and contractors often require proof of insurance. We provide certificates quickly." },
        { title: "Employees", content: "Workers' comp may be required and protects against lawsuits from workplace injuries." },
    ],
    localConsiderations: ["General liability", "Commercial property", "Business owners policy", "Workers' compensation", "Commercial auto", "Professional liability", "Marine/logistics coverage", "Cyber liability"],
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
        { question: "Can you compare carriers?", answer: "Yes. We work with multiple commercial carriers serving Duval County." },
        { question: "What affects rates?", answer: "Industry, revenue, payroll, property values, claims, coverage limits." },
        { question: "Is workers' comp required?", answer: "Florida requires it for construction with 1+ employees and others with 4+." },
        { question: "How fast for certificates?", answer: "Same day once bound." },
        { question: "Do you cover port and logistics businesses?", answer: "Yes. Jacksonville's port activity creates specific insurance needs we understand." },
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

export default function JacksonvilleBusinessInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
