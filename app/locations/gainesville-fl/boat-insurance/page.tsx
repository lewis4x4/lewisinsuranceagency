import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Gainesville",
    state: "FL",
    citySlug: "gainesville-fl",
    serviceName: "Boat Insurance",
    serviceSlug: "boat-insurance",
    title: "Gainesville Boat Insurance | Alachua County FL",
    description: "Boat insurance in Gainesville, FL. Independent agents compare carriers for watercraft on local lakes and the Santa Fe River since 1981.",
    headline: "Gainesville Boat Insurance",
    subheadline: "Protect your watercraft with coverage for Alachua County lakes, the Santa Fe River, and coastal trips. We compare boat insurance options.",
    overview: [
        "Gainesville boaters enjoy Newnan's Lake, the Santa Fe River, and trips to Florida's coasts. Whether you have a bass boat, pontoon, or personal watercraft, proper coverage protects your investment.",
        "As an independent agency, we compare boat insurance from multiple carriers. Freshwater and saltwater use have different considerations.",
        "Lewis Insurance Agency has insured boats in the Gainesville area since 1981. Local agents understand Alachua County boating.",
    ],
    whyNeeded: [
        { title: "On-Water Liability", content: "Accidents happen on the water. Liability coverage protects you when you're responsible." },
        { title: "Theft Protection", content: "Boats and equipment are theft targets. Comprehensive coverage protects your investment." },
        { title: "Physical Damage", content: "Collisions, storms, and accidents can damage your boat. Coverage pays for repairs." },
        { title: "Trailer Coverage", content: "Your boat trailer needs protection too. Policies can include trailer coverage." },
    ],
    localConsiderations: ["Freshwater lake and river use", "Santa Fe River access", "Coastal trip coverage", "Trailer storage location", "Seasonal use patterns", "On-water towing coverage"],
    coverageHighlights: [
        { title: "Hull Coverage", description: "Boat damage" },
        { title: "Liability", description: "Injury/damage to others" },
        { title: "Medical Payments", description: "Passenger injuries" },
        { title: "Uninsured Boater", description: "Hit-and-run protection" },
        { title: "Personal Property", description: "Equipment, gear" },
        { title: "On-Water Towing", description: "Emergency assistance" },
    ],
    faqs: [
        { question: "What's needed for a quote?", answer: "Year, make, model, motor details, storage location, and where you typically boat." },
        { question: "Does freshwater vs. saltwater matter?", answer: "Yes. Primarily freshwater use typically has lower rates. Coastal trips can be covered." },
        { question: "Are personal watercraft covered?", answer: "Yes. We can insure jet skis and other personal watercraft." },
        { question: "Is my trailer covered?", answer: "Boat policies typically include trailer coverage. We verify your trailer is protected." },
        { question: "What about fishing equipment?", answer: "Personal property coverage can protect fishing gear and electronics." },
        { question: "Can I use my boat on the coast?", answer: "Yes. We discuss your typical use and ensure coverage matches your boating activities." },
    ],
    relatedServices: [
        { title: "Gainesville Auto", href: "/locations/gainesville-fl/auto-insurance", description: "Tow vehicle coverage" },
        { title: "Gainesville Home", href: "/locations/gainesville-fl/homeowners-insurance", description: "Protect your property" },
        { title: "Alachua County", href: "/locations/gainesville-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function GainesvilleBoatInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
