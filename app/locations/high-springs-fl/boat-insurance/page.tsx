import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "High Springs",
    state: "FL",
    citySlug: "high-springs-fl",
    serviceName: "Boat Insurance",
    serviceSlug: "boat-insurance",
    title: "High Springs Boat Insurance | Santa Fe River Coverage",
    description: "Boat insurance in High Springs, FL. Independent agents compare carriers for watercraft on Santa Fe River and nearby springs since 1981.",
    headline: "High Springs Boat Insurance",
    subheadline: "Protect your watercraft with coverage for Santa Fe River use, springs access, and Alachua County waters. We compare boat insurance options.",
    overview: [
        "High Springs boaters enjoy the Santa Fe River, Ginnie Springs, and numerous natural springs. Whether you have a bass boat, kayak, or pontoon, proper coverage protects your investment.",
        "As an independent agency, we compare boat insurance from multiple carriers. River and springs boating has different considerations than coastal use.",
        "Lewis Insurance Agency has insured boats in the High Springs area since 1981. Local agents understand Santa Fe River boating.",
    ],
    whyNeeded: [
        { title: "River Navigation", content: "The Santa Fe River has unique hazards. Coverage should address river-specific risks." },
        { title: "Theft Protection", content: "Boats and equipment are theft targets. Comprehensive coverage protects your investment." },
        { title: "Liability", content: "Accidents on the water create liability exposure. Coverage protects your assets." },
        { title: "Trailer Coverage", content: "Your boat trailer needs protection too. Policies can include trailer coverage." },
    ],
    localConsiderations: ["Santa Fe River navigation", "Springs access points", "Fresh water vs. saltwater use", "Trailer storage location", "Seasonal use patterns", "On-water towing coverage"],
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
        { question: "Does freshwater vs. saltwater matter?", answer: "Yes. Santa Fe River boating is freshwater, which typically has lower rates than coastal saltwater use." },
        { question: "Are kayaks and canoes covered?", answer: "Smaller watercraft can be covered. Options depend on value and use." },
        { question: "Is my trailer covered?", answer: "Boat policies typically include trailer coverage. We verify your trailer is protected." },
        { question: "What about fishing equipment?", answer: "Personal property coverage can protect fishing gear and electronics." },
        { question: "Do I need coverage year-round?", answer: "Most policies are annual. We discuss seasonal use and storage periods." },
    ],
    relatedServices: [
        { title: "High Springs Auto", href: "/locations/high-springs-fl/auto-insurance", description: "Tow vehicle coverage" },
        { title: "High Springs Home", href: "/locations/high-springs-fl/homeowners-insurance", description: "Protect your property" },
        { title: "Alachua County", href: "/locations/high-springs-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function HighSpringsBoatInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
