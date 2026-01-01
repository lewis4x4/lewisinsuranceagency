import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Macclenny",
    state: "FL",
    citySlug: "macclenny-fl",
    serviceName: "Business Insurance",
    serviceSlug: "business-insurance",

    title: "Macclenny Business Insurance | Baker County FL",
    description: "Business insurance in Macclenny, FL. Independent agents compare commercial coverage for Baker County businesses. Liability, property, workers comp since 1981.",

    headline: "Macclenny Business Insurance",
    subheadline: "Protect your Macclenny business with commercial coverage built for Baker County operations. We compare carriers to find the right protection mix.",

    overview: [
        "Macclenny businesses serve Baker County residents and travelers along the I-10 corridor. From Downtown Macclenny retailers to service companies and contractors, each operation has unique risks that generic commercial policies may miss.",
        "As an independent agency, we understand your operations before recommending coverage. Whether you need basic liability, comprehensive property coverage, workers' compensation, or specialized policies, we build programs matching actual business exposures.",
        "Lewis Insurance Agency has worked with Baker County businesses since 1981. We understand small-town commerce and I-10 corridor business needs. When you need certificates or claims help, local agents respond directly.",
    ],

    whyNeeded: [
        {
            title: "Liability Protection",
            content: "Customer injuries, property damage, and operational mishaps threaten any business. General liability provides essential protection against third-party claims.",
        },
        {
            title: "Property Coverage",
            content: "Buildings, equipment, inventory, and business property deserve protection from fire, theft, storms, and covered perils.",
        },
        {
            title: "Contract Compliance",
            content: "Landlords, lenders, and customers require proof of insurance. We provide certificates quickly to maintain business relationships.",
        },
        {
            title: "Employee Coverage",
            content: "Workers' compensation may be required if you have employees. Beyond compliance, it protects against injury lawsuits.",
        },
    ],

    localConsiderations: [
        "General liability for premises and operations",
        "Commercial property for buildings and equipment",
        "Business owners policy options",
        "Workers' compensation for employees",
        "Commercial auto for business vehicles",
        "Professional liability for service providers",
        "Equipment and tools coverage",
        "Fast certificate turnaround",
    ],

    coverageHighlights: [
        { title: "General Liability", description: "Third-party injury and damage" },
        { title: "Commercial Property", description: "Buildings, equipment, inventory" },
        { title: "Business Income", description: "Lost revenue during closures" },
        { title: "Workers' Compensation", description: "Employee injuries" },
        { title: "Commercial Auto", description: "Business vehicles" },
        { title: "Professional Liability", description: "Errors and omissions" },
    ],

    faqs: [
        {
            question: "What information do you need for a business quote?",
            answer: "We'll need details about operations, revenue, employees, property values, and existing coverage. Understanding your business helps us find appropriate coverage.",
        },
        {
            question: "Can you compare carriers for business insurance?",
            answer: "Yes. We work with multiple commercial carriers and compare options to find competitive coverage for Baker County businesses.",
        },
        {
            question: "What affects business insurance rates?",
            answer: "Industry, revenue, payroll, property values, claims history, and coverage limits all impact rates. Location factors may differ from urban areas.",
        },
        {
            question: "Does my business need workers' compensation?",
            answer: "Florida requires workers' comp for construction with 1+ employees and other businesses with 4+ employees. Even when not required, it protects against lawsuits.",
        },
        {
            question: "How fast can you provide certificates?",
            answer: "We typically issue certificates the same day coverage is bound. Let us know about deadlines and we'll prioritize.",
        },
        {
            question: "What's a business owners policy?",
            answer: "A BOP combines liability and property coverage in one policy, often at lower cost. It suits many small Macclenny businesses.",
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

export default function MacclennyBusinessInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
