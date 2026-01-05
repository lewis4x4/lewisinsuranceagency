import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Lake City",
    state: "FL",
    citySlug: "lake-city-fl",
    serviceName: "Business Insurance",
    serviceSlug: "business-insurance",

    title: "Lake City Business Insurance | Columbia County FL",
    description: "Business insurance in Lake City, FL. commercial coverage for Columbia County businesses. Liability, property, workers comp.",

    headline: "Lake City Business Insurance",
    subheadline: "Protect your Lake City business with commercial coverage tailored to Columbia County operations. We compare carriers to find the right mix of liability, property, and specialty coverage.",

    overview: [
        "Lake City businesses—from Downtown Lake City shops to service companies along US-90 and I-75—need insurance that matches their actual risks. Cookie-cutter policies often leave gaps or charge for coverage you don't need. As an independent agency, we build commercial coverage around your specific operations.",
        "Running a business in Columbia County means balancing growth with protection. Whether you're a contractor, retailer, restaurant, or professional service provider, the right insurance protects your business assets, covers liability exposures, and keeps you compliant with contracts and regulations.",
        "Lewis Insurance Agency has helped Lake City businesses since 1981. We understand the local business community and work with commercial carriers who know Florida. When you need certificates of insurance, policy changes, or claims help, you'll work with local agents who know your business.",
    ],

    whyNeeded: [
        {
            title: "Liability Exposure",
            content: "Every business faces liability risks—customer injuries, property damage, or claims from your operations. General liability insurance protects your business when things go wrong.",
        },
        {
            title: "Property Protection",
            content: "Your building, equipment, inventory, and business property represent significant investment. Commercial property insurance covers physical damage from fire, storms, theft, and other covered events.",
        },
        {
            title: "Contract Requirements",
            content: "Many Lake City businesses need certificates of insurance to bid on jobs, sign leases, or work with larger companies. We provide certificates quickly and ensure your coverage meets contract requirements.",
        },
        {
            title: "Employee Coverage",
            content: "If you have employees, Florida law may require workers' compensation insurance. Beyond compliance, workers' comp protects your business from employee injury claims.",
        },
    ],

    localConsiderations: [
        "General liability for premises and operations",
        "Commercial property for buildings and equipment",
        "Business owners policy (BOP) for eligible businesses",
        "Workers' compensation for employee injuries",
        "Commercial auto for business vehicles",
        "Professional liability for service providers",
        "Inland marine for tools and equipment",
        "Certificates of insurance for contracts",
    ],

    coverageHighlights: [
        { title: "General Liability", description: "Third-party bodily injury and property damage" },
        { title: "Commercial Property", description: "Buildings, equipment, and inventory" },
        { title: "Business Income", description: "Lost income during covered shutdowns" },
        { title: "Workers' Compensation", description: "Employee injury coverage" },
        { title: "Commercial Auto", description: "Business vehicle coverage" },
        { title: "Professional Liability", description: "Errors and omissions protection" },
    ],

    faqs: [
        {
            question: "What information do you need to quote business insurance?",
            answer: "We'll need details about your business operations, revenue, number of employees, property values, and current coverage. The more we understand about your business, the better we can match you with appropriate coverage and competitive rates.",
        },
        {
            question: "Can you shop multiple carriers for my business insurance?",
            answer: "Yes. As an independent agency, we work with multiple commercial carriers. We shop your coverage to find competitive rates and ensure you're getting appropriate protection for your Lake City business.",
        },
        {
            question: "What affects business insurance rates in Lake City?",
            answer: "Rates depend on your industry, operations, revenue, payroll, claims history, property values, and coverage limits. Location matters too—Columbia County businesses may have different rate factors than urban areas.",
        },
        {
            question: "Do I need workers' compensation in Florida?",
            answer: "Florida requires workers' comp for construction businesses with one or more employees and non-construction businesses with four or more employees. Even if not required, workers' comp protects your business from employee injury lawsuits.",
        },
        {
            question: "How quickly can I get a certificate of insurance?",
            answer: "Once coverage is bound, we can typically provide certificates of insurance the same day. If you have a contract deadline or bid requirement, let us know and we'll prioritize your certificate.",
        },
        {
            question: "What's a business owners policy (BOP)?",
            answer: "A BOP bundles general liability and commercial property coverage into one policy, often at a lower cost than separate policies. It's a good fit for many small to mid-sized Lake City businesses with standard operations.",
        },
    ],

    relatedServices: [
        { title: "Commercial Auto Insurance", href: "/business/commercial-auto-florida", description: "Business vehicle coverage" },
        { title: "Workers' Compensation", href: "/business/workers-compensation-florida", description: "Employee injury protection" },
        { title: "General Liability", href: "/business/general-liability-florida", description: "Core business liability" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function LakeCityBusinessInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
