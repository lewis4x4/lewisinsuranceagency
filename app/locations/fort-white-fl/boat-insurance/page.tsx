import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Fort White",
    state: "FL",
    citySlug: "fort-white-fl",
    serviceName: "Boat Insurance",
    serviceSlug: "boat-insurance",

    title: "Fort White Boat Insurance | Columbia County FL",
    description: "Boat insurance in Fort White, FL. Marine coverage for Ichetucknee and Santa Fe River boaters. Independent agents since 1981.",

    headline: "Fort White Boat Insurance",
    subheadline: "Coverage for boaters enjoying the Ichetucknee, Santa Fe River, and beyond. We compare marine insurance to protect your time on the water.",

    overview: [
        "Fort White's proximity to Ichetucknee Springs and the Santa Fe River makes it a paddler's and boater's paradise. Whether kayaking the springs or fishing the rivers, boat insurance protects your investment and covers liability.",
        "Coverage varies by vessel and usage. Fort White boaters may need protection for river use, or coverage that extends to coastal trips when trailering. We match policies to your actual boating.",
        "Lewis Insurance Agency has helped North Florida boaters since 1981. We cover kayaks, canoes, jon boats, and larger vessels with competitive rates.",
    ],

    whyNeeded: [
        {
            title: "Liability Protection",
            content: "Accidents on water can cause injuries or damage. Liability coverage protects your assets.",
        },
        {
            title: "Physical Damage",
            content: "Your boat faces risks from submerged objects, weather, and transport. Coverage protects your vessel.",
        },
        {
            title: "Equipment",
            content: "Fishing gear and electronics add value. Boat insurance covers equipment other policies may exclude.",
        },
        {
            title: "Trailer Coverage",
            content: "If you trailer to different launches, your policy should cover the trailer too.",
        },
    ],

    localConsiderations: [
        "River and springs navigation coverage",
        "Coastal coverage if you trailer out",
        "Agreed value vs. ACV options",
        "Trailer protection",
        "Equipment and gear coverage",
        "Towing assistance",
    ],

    coverageHighlights: [
        { title: "Hull", description: "Boat damage" },
        { title: "Liability", description: "Injury/damage you cause" },
        { title: "Medical Payments", description: "Passenger injuries" },
        { title: "Uninsured Boater", description: "Protection from others" },
        { title: "Trailer", description: "Trailer coverage" },
        { title: "Personal Effects", description: "Gear and equipment" },
    ],

    faqs: [
        {
            question: "What's needed to quote boat insurance?",
            answer: "Boat details (year, make, model, length), your experience, where you operate, storage, and safety equipment.",
        },
        {
            question: "Can you compare carriers?",
            answer: "Yes. We work with marine carriers and compare options for your specific boat and usage.",
        },
        {
            question: "Do you cover kayaks and canoes?",
            answer: "Yes. While not always required, liability coverage protects you. For valuable kayaks, physical damage coverage is available.",
        },
        {
            question: "What affects rates?",
            answer: "Boat value, type, experience, navigation area, storage, and claims history. Safety courses help.",
        },
        {
            question: "Is trailer coverage included?",
            answer: "Typically yes. We ensure complete protection for your boat and trailer.",
        },
        {
            question: "Agreed value vs. ACV?",
            answer: "Agreed value pays a set amount if totaled. ACV deducts depreciation. Agreed value provides clearer protection.",
        },
    ],

    relatedServices: [
        { title: "Fort White Auto", href: "/locations/fort-white-fl/auto-insurance", description: "Tow vehicle coverage" },
        { title: "Fort White Homeowners", href: "/locations/fort-white-fl/homeowners-insurance", description: "Home protection" },
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

export default function FortWhiteBoatInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
