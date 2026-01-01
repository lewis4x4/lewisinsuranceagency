import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Gainesville",
    state: "FL",
    citySlug: "gainesville-fl",
    serviceName: "Auto Insurance",
    serviceSlug: "auto-insurance",
    title: "Gainesville Auto Insurance | Alachua County FL",
    description: "Auto insurance in Gainesville, FL. Independent agents compare carriers for drivers near UF, Shands, and Santa Fe College since 1981.",
    headline: "Gainesville Auto Insurance",
    subheadline: "Get car insurance quotes from an independent agency comparing multiple carriers. We find coverage fitting Gainesville drivers from students to families.",
    overview: [
        "Gainesville drivers face unique challenges—UF game day traffic, I-75 commutes, and student-heavy roads. Florida requires PIP and liability coverage, but the right policy depends on your situation.",
        "As an independent agency, we compare rates from multiple carriers. Alachua County residents often have more options than larger metro areas.",
        "Lewis Insurance Agency has insured Gainesville drivers since 1981. Whether you're near UF, Haile Plantation, or the suburbs, local agents handle your needs.",
    ],
    whyNeeded: [
        { title: "Florida PIP Required", content: "Florida mandates $10,000 in Personal Injury Protection. We explain how PIP works with your coverage." },
        { title: "Liability Protection", content: "State minimums may leave gaps. We discuss appropriate limits for your situation." },
        { title: "Uninsured Motorist", content: "Not all drivers carry adequate coverage. UM protection covers you when others don't." },
        { title: "Comprehensive Coverage", content: "Florida weather and parking lot incidents make comprehensive valuable." },
    ],
    localConsiderations: ["UF campus and game day parking", "I-75 corridor commutes", "Student driver considerations", "Multi-car household discounts", "Good student discounts", "Bundling with homeowners or renters"],
    coverageHighlights: [
        { title: "Liability", description: "Bodily injury and property damage" },
        { title: "PIP", description: "Personal Injury Protection" },
        { title: "Collision", description: "Your vehicle damage" },
        { title: "Comprehensive", description: "Non-collision events" },
        { title: "Uninsured Motorist", description: "UM/UIM coverage" },
        { title: "Roadside", description: "Emergency assistance" },
    ],
    faqs: [
        { question: "What's needed for a quote?", answer: "Driver information, vehicle details, current coverage, and driving history." },
        { question: "Can you compare multiple carriers?", answer: "Yes. As an independent agency, we shop your coverage across multiple insurers." },
        { question: "Do students get discounts?", answer: "Good student discounts are available. Students away at college may also qualify for reduced rates." },
        { question: "What affects rates in Gainesville?", answer: "Driving record, vehicle type, coverage limits, deductibles, and where you park regularly." },
        { question: "Can I bundle with other policies?", answer: "Yes. Bundling auto with homeowners or renters typically saves money." },
        { question: "How does game day affect coverage?", answer: "Your coverage travels with you. We can discuss parking and event considerations." },
    ],
    relatedServices: [
        { title: "Gainesville Home", href: "/locations/gainesville-fl/homeowners-insurance", description: "Bundle and save" },
        { title: "Renters Insurance", href: "/personal/renters-insurance-florida", description: "For apartments" },
        { title: "Alachua County", href: "/locations/gainesville-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function GainesvilleAutoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
