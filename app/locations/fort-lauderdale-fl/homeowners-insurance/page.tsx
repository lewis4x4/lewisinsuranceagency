import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Fort Lauderdale",
    state: "FL",
    citySlug: "fort-lauderdale-fl",
    serviceName: "Homeowners Insurance",
    serviceSlug: "homeowners-insurance",

    title: "Fort Lauderdale Homeowners Insurance | Compare Quotes",
    description: "Find affordable homeowners insurance in Fort Lauderdale, FL. Compare quotes from multiple carriers for hurricane and wind coverage. Serving Broward County.",

    headline: "Fort Lauderdale Homeowners Insurance",
    subheadline: "Protect your Fort Lauderdale home with comprehensive coverage designed for Broward County's unique risks. Compare rates from multiple carriers.",

    overview: [
        "Fort Lauderdale homeowners need insurance that addresses the area's significant hurricane and flood exposure. From waterfront homes on the Intracoastal to family residences in Coral Springs, every Broward County property deserves comprehensive protection.",
        "As an independent insurance agency, we work with multiple carriers to find homeowners coverage that fits your Fort Lauderdale property. We understand the local challenges—roof age requirements, wind mitigation opportunities, and navigating a market where some carriers have reduced their Florida presence.",
        "Fort Lauderdale's extensive canal system and coastal location create unique insurance considerations. We help homeowners understand their exposures, secure appropriate coverage, and find the best available rates in Broward County's competitive market.",
    ],

    whyNeeded: [
        {
            title: "Hurricane Protection",
            content: "Fort Lauderdale's Atlantic coast location makes hurricane coverage essential. Your homeowners policy provides wind protection, subject to hurricane deductibles, that protects your home's structure and contents.",
        },
        {
            title: "Waterfront Property Risks",
            content: "Many Fort Lauderdale homes are on canals or near the Intracoastal. These properties face elevated flood and wind risks that require careful coverage planning and potentially specialty markets.",
        },
        {
            title: "Property Value Protection",
            content: "Broward County real estate values have increased significantly. Adequate dwelling coverage ensures you can rebuild at current construction costs, not outdated values.",
        },
        {
            title: "Liability Coverage",
            content: "Whether you have a pool, boat dock, or simply want protection if someone is injured on your property, liability coverage is a crucial component of your homeowners policy.",
        },
    ],

    localConsiderations: [
        "Hurricane deductibles typically range from 2-5% of dwelling coverage",
        "Roof condition is critical—many carriers require roofs under 15-20 years",
        "Wind mitigation inspections can significantly reduce premiums",
        "Flood insurance is separate and essential for most Fort Lauderdale properties",
        "Canal and waterfront homes may need specialty market placement",
        "Broward County building codes can help qualify for construction discounts",
    ],

    faqs: [
        {
            question: "Why is Fort Lauderdale home insurance expensive?",
            answer: "Fort Lauderdale's coastal location, hurricane exposure, and Broward County's litigation history contribute to higher rates. However, we shop multiple carriers and help you maximize discounts through wind mitigation and other credits.",
        },
        {
            question: "Do I need flood insurance in Fort Lauderdale?",
            answer: "We strongly recommend it. Many Fort Lauderdale properties are near canals, the Intracoastal, or in flood zones. Flood damage is excluded from homeowners policies, and even properties outside high-risk zones can flood.",
        },
        {
            question: "What's a wind mitigation inspection?",
            answer: "A wind mitigation inspection documents hurricane-resistant features in your home. In Fort Lauderdale, this can earn significant premium discounts—often saving hundreds or thousands annually. We can recommend inspectors.",
        },
        {
            question: "Can you insure waterfront homes?",
            answer: "Yes. Waterfront properties in Fort Lauderdale can be challenging with standard carriers, but we have access to specialty markets. Rates will be higher due to exposure, but coverage is available.",
        },
    ],

    relatedServices: [
        { title: "Fort Lauderdale Flood Insurance", href: "/locations/fort-lauderdale-fl/flood-insurance", description: "Essential flood protection" },
        { title: "Fort Lauderdale Auto Insurance", href: "/locations/fort-lauderdale-fl/auto-insurance", description: "Bundle and save" },
        { title: "All Fort Lauderdale Coverage", href: "/locations/fort-lauderdale-fl", description: "View all options" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function FortLauderdaleHomeownersPage() {
    return <CityServicePageTemplate data={pageData} />
}
