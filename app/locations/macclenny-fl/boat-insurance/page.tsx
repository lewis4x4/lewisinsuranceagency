import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Macclenny",
    state: "FL",
    citySlug: "macclenny-fl",
    serviceName: "Boat Insurance",
    serviceSlug: "boat-insurance",

    title: "Macclenny Boat Insurance | Baker County FL",
    description: "Boat insurance in Macclenny, FL. Marine coverage for Baker County boaters. Rivers to coast coverage since 1981.",

    headline: "Macclenny Boat Insurance",
    subheadline: "Coverage for Baker County boaters who trailer to rivers, lakes, and the coast. We compare marine insurance to protect your time on the water.",

    overview: [
        "Macclenny's location along I-10 puts boaters within easy reach of North Florida's rivers, Jacksonville's waterways, and Atlantic coastal waters. Whether you fish local spots or trailer to the coast, boat insurance protects your investment and covers liability.",
        "Boat insurance varies by vessel type, usage, and navigation area. Baker County boaters who trailer to multiple destinations need coverage reflecting their actual boating habits. We help match your policy to how you use the water.",
        "Lewis Insurance Agency has helped North Florida boaters since 1981. We work with marine carriers understanding Florida waters and can cover bass boats, bay boats, offshore vessels, and everything in between.",
    ],

    whyNeeded: [
        {
            title: "Liability Protection",
            content: "Boating accidents can result in injuries or property damage. Liability coverage protects your assets if you're responsible for harm to others on the water.",
        },
        {
            title: "Physical Damage",
            content: "Your boat faces risks from collisions, weather, theft, and transport accidents. Coverage protects your vessel whether on water or trailering on I-10.",
        },
        {
            title: "Trailer Coverage",
            content: "Macclenny boaters frequently trailer to launch points. Your policy should cover the trailer and protect against accidents during highway transport.",
        },
        {
            title: "Equipment Protection",
            content: "Fishing gear, electronics, and personal items add significant value. Boat insurance can cover equipment your other policies may exclude.",
        },
    ],

    localConsiderations: [
        "Coverage for freshwater and coastal navigation",
        "Trailer protection for I-10 transport",
        "Agreed value vs. actual cash value options",
        "Hurricane and storm considerations",
        "Fishing and personal effects coverage",
        "Towing and on-water assistance",
        "Multi-policy discounts available",
    ],

    coverageHighlights: [
        { title: "Hull Coverage", description: "Physical damage to your boat" },
        { title: "Liability Protection", description: "Injuries or damage you cause" },
        { title: "Medical Payments", description: "Passenger injuries" },
        { title: "Uninsured Boater", description: "Protection from others" },
        { title: "Trailer Coverage", description: "Your boat trailer" },
        { title: "Personal Effects", description: "Gear and equipment" },
    ],

    faqs: [
        {
            question: "What information do you need to quote boat insurance?",
            answer: "We'll need your boat's year, make, model, length, and hull type, plus your experience, where you operate, storage arrangements, and safety equipment.",
        },
        {
            question: "Can you compare carriers for boat insurance?",
            answer: "Yes. As an independent agency, we work with several marine carriers to find coverage and rates fitting your boat and usage patterns.",
        },
        {
            question: "Does my policy cover both freshwater and coastal use?",
            answer: "Most policies let you specify navigation area. If you use rivers and also trailer to Atlantic waters, we ensure your policy covers all areas.",
        },
        {
            question: "What affects boat insurance rates?",
            answer: "Boat value, type, your experience, navigation area, storage, and claims history all factor in. Safety courses and multi-policy discounts often help.",
        },
        {
            question: "Is my boat covered while trailering?",
            answer: "Boat policies typically include trailer coverage. We ensure comprehensive protection on water and during transport.",
        },
        {
            question: "What's agreed value vs. actual cash value?",
            answer: "Agreed value pays a set amount if totaled—no depreciation. Actual cash value pays market value including depreciation. Agreed value costs more but provides clearer protection.",
        },
    ],

    relatedServices: [
        { title: "Macclenny Auto Insurance", href: "/locations/macclenny-fl/auto-insurance", description: "Tow vehicle coverage" },
        { title: "Macclenny Homeowners Insurance", href: "/locations/macclenny-fl/homeowners-insurance", description: "Home protection" },
        { title: "Baker County Insurance", href: "/locations/macclenny-fl", description: "All coverage options" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function MacclennyBoatInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
