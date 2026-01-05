import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Branford",
    state: "FL",
    citySlug: "branford-fl",
    serviceName: "Business Insurance",
    serviceSlug: "business-insurance",

    title: "Branford Business Insurance | Suwannee County FL",
    description: "Business insurance in Branford, FL. commercial coverage for Suwannee County businesses. Liability, property, workers comp.",

    headline: "Branford Business Insurance",
    subheadline: "Protect your Branford business with commercial coverage designed for Suwannee County operations. We compare carriers to find the right combination of protection.",

    overview: [
        "Branford businesses serve the local community and visitors drawn to the rivers and springs. From Downtown Branford shops to service companies and river outfitters, each business has unique insurance needs that generic policies often miss.",
        "As an independent agency, we take time to understand your operations before recommending coverage. Whether you need liability protection, property coverage, workers' compensation, or specialized policies, we build a program matching your actual business risks.",
        "Lewis Insurance Agency has worked with Suwannee County businesses since 1981. We understand small-town commerce and can help with everything from basic liability to complex commercial packages. When you need certificates or claims help, local agents respond directly.",
    ],

    whyNeeded: [
        {
            title: "Liability Exposure",
            content: "Customer injuries, property damage, and operational mishaps threaten any business. General liability provides essential protection against third-party claims for Branford businesses.",
        },
        {
            title: "Property Coverage",
            content: "Your building, equipment, inventory, and business property deserve protection. Commercial property insurance covers these assets from fire, theft, storms, and other covered perils.",
        },
        {
            title: "Contract Requirements",
            content: "Landlords, lenders, and customers often require proof of insurance. We provide certificates of insurance quickly to keep your business relationships and contracts intact.",
        },
        {
            title: "Employee Protection",
            content: "If you employ workers, workers' compensation may be required. Beyond legal compliance, workers' comp protects your business from employee injury lawsuits.",
        },
    ],

    localConsiderations: [
        "General liability for premises and operations",
        "Commercial property for buildings and equipment",
        "Business owners policy options for eligible businesses",
        "Workers' compensation for employee coverage",
        "Commercial auto for business vehicles",
        "Professional liability for service providers",
        "Equipment coverage for tools and machinery",
        "Quick certificate of insurance turnaround",
    ],

    coverageHighlights: [
        { title: "General Liability", description: "Third-party injury and property damage" },
        { title: "Commercial Property", description: "Buildings, equipment, inventory" },
        { title: "Business Income", description: "Lost revenue during closures" },
        { title: "Workers' Compensation", description: "Employee injury coverage" },
        { title: "Commercial Auto", description: "Business vehicles" },
        { title: "Professional Liability", description: "Errors and omissions" },
    ],

    faqs: [
        {
            question: "What information do you need to quote business insurance?",
            answer: "We'll need details about your operations, revenue, employees, property values, and existing coverage. Understanding your specific business helps us find appropriate coverage and accurate quotes.",
        },
        {
            question: "Can you compare carriers for business insurance?",
            answer: "Yes. As an independent agency, we work with multiple commercial carriers and compare coverage and rates to find competitive options for Branford businesses.",
        },
        {
            question: "What affects business insurance rates in Branford?",
            answer: "Industry classification, revenue, payroll, property values, claims history, and coverage limits all impact rates. Small-town businesses may have different factors than urban operations.",
        },
        {
            question: "Does my business need workers' compensation?",
            answer: "Florida requires workers' comp for construction businesses with one or more employees and other businesses with four or more employees. Even when not required, it protects against injury lawsuits.",
        },
        {
            question: "How quickly can you provide certificates?",
            answer: "We typically issue certificates the same day coverage is bound. If you have contract deadlines, let us know and we'll prioritize your request.",
        },
        {
            question: "What's a business owners policy?",
            answer: "A BOP combines general liability and commercial property in one policy, often at lower cost than separate policies. It's a good option for many small Branford businesses.",
        },
    ],

    relatedServices: [
        { title: "Workers' Compensation", href: "/business/workers-compensation-florida", description: "Employee coverage" },
        { title: "Commercial Auto", href: "/business/commercial-auto-florida", description: "Business vehicles" },
        { title: "General Liability", href: "/business/general-liability-florida", description: "Core liability" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function BranfordBusinessInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
