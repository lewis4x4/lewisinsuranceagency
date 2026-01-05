import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "White Springs",
    state: "FL",
    citySlug: "white-springs-fl",
    serviceName: "Boat Insurance",
    serviceSlug: "boat-insurance",

    title: "White Springs Boat Insurance | Hamilton County FL",
    description: "Boat insurance in White Springs, FL. Marine coverage for Suwannee River boaters since 1981. Compare quotes and protect your vessel.",

    headline: "White Springs Boat Insurance",
    subheadline: "Coverage for boaters on the Suwannee River and beyond. We compare marine insurance to protect your time on the water.",

    overview: [
        "White Springs sits along the legendary Suwannee River, perfect for fishing, kayaking, and boating. Boat insurance protects your investment and covers liability.",
        "Coverage varies by vessel and usage. We match policies to how you actually use the water.",
        "Lewis Insurance Agency has helped North Florida boaters since 1981 with competitive rates.",
    ],

    whyNeeded: [
        { title: "Liability", content: "Boating accidents can cause injuries. Liability protects your assets." },
        { title: "Physical Damage", content: "Your boat faces risks from submerged objects, weather, and transport." },
        { title: "Equipment", content: "Fishing gear and electronics are covered." },
        { title: "Trailer", content: "If you trailer, your policy should cover it." },
    ],

    localConsiderations: ["Suwannee River navigation coverage", "Coastal coverage if you trailer out", "Agreed value vs. ACV", "Trailer protection", "Equipment coverage", "Towing assistance"],

    coverageHighlights: [
        { title: "Hull", description: "Boat damage" },
        { title: "Liability", description: "Injury/damage you cause" },
        { title: "Medical Payments", description: "Passenger injuries" },
        { title: "Uninsured Boater", description: "Protection" },
        { title: "Trailer", description: "Trailer coverage" },
        { title: "Personal Effects", description: "Gear" },
    ],

    faqs: [
        { question: "What's needed to quote?", answer: "Boat details, your experience, where you operate, storage, and safety equipment." },
        { question: "Can you compare carriers?", answer: "Yes. We work with marine carriers for competitive options." },
        { question: "What affects rates?", answer: "Boat value, type, experience, navigation area, storage, and claims history." },
        { question: "Is trailer coverage included?", answer: "Typically yes. We ensure complete protection." },
        { question: "Do you cover kayaks?", answer: "Yes. Liability coverage protects you. Physical damage available for valuable kayaks." },
        { question: "Agreed value vs. ACV?", answer: "Agreed value pays a set amount if totaled. ACV includes depreciation." },
    ],

    relatedServices: [
        { title: "White Springs Auto", href: "/locations/white-springs-fl/auto-insurance", description: "Tow vehicle" },
        { title: "White Springs Homeowners", href: "/locations/white-springs-fl/homeowners-insurance", description: "Home protection" },
        { title: "Hamilton County", href: "/locations/white-springs-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function WhiteSpringsBoatInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
