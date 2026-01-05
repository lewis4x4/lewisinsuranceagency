import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Live Oak",
    state: "FL",
    citySlug: "live-oak-fl",
    serviceName: "Business Insurance",
    serviceSlug: "business-insurance",

    title: "Live Oak Business Insurance | Suwannee County FL",
    description: "Business insurance in Live Oak, FL. commercial coverage for Suwannee County businesses. Liability, property, workers comp.",

    headline: "Live Oak Business Insurance",
    subheadline: "Protect your Live Oak business with commercial coverage designed for Suwannee County operations. We compare carriers to build the right combination of liability, property, and specialty coverage.",

    overview: [
        "Live Oak businesses serve Suwannee County and surrounding communities. From Downtown Live Oak retailers to contractors working throughout North Florida, each business faces unique risks. One-size-fits-all commercial policies often miss important exposures or include coverage you don't need.",
        "As an independent agency, we take time to understand your business operations before recommending coverage. Whether you need basic liability protection, comprehensive property coverage, workers' compensation, or specialized policies, we build a program that matches your actual risks.",
        "Lewis Insurance Agency has worked with Live Oak businesses since 1981. We understand the local economy—from agriculture and timber to retail and professional services. When you need certificates of insurance or help with a claim, local agents handle your needs directly.",
    ],

    whyNeeded: [
        {
            title: "Liability Protection",
            content: "Customer injuries, property damage claims, and operational mishaps can threaten any business. General liability insurance provides essential protection for Live Oak businesses against third-party claims.",
        },
        {
            title: "Business Property Coverage",
            content: "Your building, equipment, inventory, and business personal property represent significant investment. Commercial property insurance protects these assets from fire, theft, storms, and other covered events.",
        },
        {
            title: "Contract and Compliance",
            content: "Many business relationships require proof of insurance. Landlords, lenders, and customers often need certificates showing adequate coverage. We provide certificates quickly to keep your business moving.",
        },
        {
            title: "Employee Protection",
            content: "If you employ workers, you may need workers' compensation insurance. Beyond legal requirements, workers' comp protects your business from employee injury lawsuits while covering your team's medical expenses.",
        },
    ],

    localConsiderations: [
        "General liability for premises and operations",
        "Commercial property for buildings and contents",
        "Business owners policy (BOP) options for eligible businesses",
        "Workers' compensation for employee injuries",
        "Commercial auto for business vehicles",
        "Professional liability for service providers",
        "Inland marine for tools and mobile equipment",
        "Fast certificate of insurance issuance",
    ],

    coverageHighlights: [
        { title: "General Liability", description: "Third-party injury and property damage" },
        { title: "Commercial Property", description: "Buildings, equipment, inventory" },
        { title: "Business Income", description: "Lost revenue during covered closures" },
        { title: "Workers' Compensation", description: "Employee injury coverage" },
        { title: "Commercial Auto", description: "Business vehicle coverage" },
        { title: "Professional Liability", description: "Errors and omissions" },
    ],

    faqs: [
        {
            question: "What information do you need to quote business insurance?",
            answer: "We'll need details about your operations, business revenue, employee count, property values, and existing coverage. Understanding your specific business helps us find appropriate coverage and accurate quotes.",
        },
        {
            question: "Can you compare carriers for my business insurance?",
            answer: "Yes. As an independent agency, we work with multiple commercial carriers. We compare coverage and rates to find competitive options for Live Oak businesses of all types.",
        },
        {
            question: "What affects business insurance rates in Live Oak?",
            answer: "Your industry classification, revenue, payroll, property values, claims history, and coverage limits all impact rates. Suwannee County businesses may have different risk factors than urban operations.",
        },
        {
            question: "Does my business need workers' compensation?",
            answer: "Florida requires workers' comp for construction businesses with one or more employees and other businesses with four or more employees. Even if not required, workers' comp protects your business from injury lawsuits.",
        },
        {
            question: "How fast can you provide a certificate of insurance?",
            answer: "We typically provide certificates the same day coverage is bound. If you have a contract deadline or urgent need, let us know and we'll prioritize your certificate request.",
        },
        {
            question: "What's a business owners policy?",
            answer: "A BOP combines general liability and commercial property coverage in one policy, often at lower cost than buying them separately. It's a good fit for many small to medium-sized Live Oak businesses.",
        },
    ],

    relatedServices: [
        { title: "Workers' Compensation", href: "/business/workers-compensation-florida", description: "Employee injury coverage" },
        { title: "Commercial Auto", href: "/business/commercial-auto-florida", description: "Business vehicles" },
        { title: "General Liability", href: "/business/general-liability-florida", description: "Core liability protection" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function LiveOakBusinessInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
