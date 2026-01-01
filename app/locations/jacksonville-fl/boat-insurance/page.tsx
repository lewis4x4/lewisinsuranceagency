import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Jacksonville",
    state: "FL",
    citySlug: "jacksonville-fl",
    serviceName: "Boat Insurance",
    serviceSlug: "boat-insurance",
    title: "Jacksonville Boat Insurance | St. Johns River & Atlantic",
    description: "Boat insurance in Jacksonville, FL. Independent agents compare carriers for watercraft on the St. Johns River and Atlantic coast since 1981.",
    headline: "Jacksonville Boat Insurance",
    subheadline: "Protect your watercraft with coverage for the St. Johns River, Intracoastal Waterway, and Atlantic Ocean. We compare boat insurance options.",
    overview: [
        "Jacksonville boaters enjoy incredible water access—the St. Johns River, Intracoastal Waterway, and Atlantic Ocean. Whether you have a center console, sailboat, or personal watercraft, proper coverage protects your investment.",
        "As an independent agency, we compare boat insurance from multiple carriers. River, intracoastal, and offshore use each have different considerations.",
        "Lewis Insurance Agency has insured boats in the Jacksonville area since 1981. Local agents understand Duval County boating from the St. Johns to the ocean.",
    ],
    whyNeeded: [
        { title: "On-Water Liability", content: "Busy waterways mean accident exposure. Liability coverage protects you when you're responsible." },
        { title: "Theft Protection", content: "Jacksonville's size makes boats theft targets. Comprehensive coverage protects your investment." },
        { title: "Physical Damage", content: "Collisions, storms, and accidents can damage your boat. Coverage pays for repairs." },
        { title: "Navigational Territory", content: "Coverage should match where you boat—river, intracoastal, nearshore, or offshore." },
    ],
    localConsiderations: ["St. Johns River use", "Intracoastal Waterway access", "Atlantic offshore coverage", "Marina storage considerations", "Hurricane haul-out requirements", "On-water towing coverage"],
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
        { question: "Does navigation territory matter?", answer: "Yes. Coverage should match your boating—river only, nearshore, or offshore. Rates vary by territory." },
        { question: "Are personal watercraft covered?", answer: "Yes. We can insure jet skis and other personal watercraft." },
        { question: "What about hurricane requirements?", answer: "Policies may require haul-out during named storms. We explain hurricane coverage requirements." },
        { question: "Is marina storage covered?", answer: "Boat policies typically cover stored boats. We verify your storage situation is protected." },
        { question: "What about fishing tournaments?", answer: "Typical use is covered. Commercial fishing or paid tournaments may need additional coverage." },
    ],
    relatedServices: [
        { title: "Jacksonville Auto", href: "/locations/jacksonville-fl/auto-insurance", description: "Tow vehicle coverage" },
        { title: "Jacksonville Home", href: "/locations/jacksonville-fl/homeowners-insurance", description: "Protect your property" },
        { title: "Duval County", href: "/locations/jacksonville-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function JacksonvilleBoatInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
