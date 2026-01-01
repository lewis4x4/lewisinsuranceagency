import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "High Springs",
    state: "FL",
    citySlug: "high-springs-fl",
    serviceName: "Auto Insurance",
    serviceSlug: "auto-insurance",
    title: "High Springs Auto Insurance | Alachua County FL",
    description: "Auto insurance in High Springs, FL. Independent agents compare quotes for Alachua County drivers since 1981.",
    headline: "High Springs Auto Insurance",
    subheadline: "Find auto coverage for Alachua County roads. We compare carriers to help High Springs drivers get competitive rates.",
    overview: [
        "High Springs drivers navigate US-441 to Gainesville, local routes to the springs, and Alachua County roads. Your auto insurance should protect without breaking the budget.",
        "Florida's no-fault system has minimum requirements that often leave gaps. We help High Springs drivers find the right protection at affordable rates.",
        "Lewis Insurance Agency has served North Florida since 1981. Local agents handle your claims and questions personally.",
    ],
    whyNeeded: [
        { title: "Gainesville Commute", content: "Many High Springs residents commute to Gainesville. Highway driving affects coverage needs." },
        { title: "Uninsured Drivers", content: "Florida has high uninsured rates. UM coverage is essential protection." },
        { title: "Rural Hazards", content: "Alachua County's rural roads have wildlife and limited lighting." },
        { title: "PIP Gaps", content: "Florida's $10,000 PIP minimum falls short for serious injuries." },
    ],
    localConsiderations: ["PIP and PDL minimums required", "Bodily injury recommended", "Uninsured motorist essential", "Comprehensive for wildlife", "Bundling discounts", "Local claims support"],
    coverageHighlights: [
        { title: "PIP", description: "Required medical" },
        { title: "Property Damage", description: "Required liability" },
        { title: "Bodily Injury", description: "Recommended" },
        { title: "Uninsured Motorist", description: "Essential" },
        { title: "Collision", description: "Vehicle damage" },
        { title: "Comprehensive", description: "Theft, weather, animals" },
    ],
    faqs: [
        { question: "What do you need to quote?", answer: "Driver info, vehicle details, address, current coverage, and driving history." },
        { question: "Can you shop carriers?", answer: "Yes. We compare at renewal and often find better options." },
        { question: "Does commuting to Gainesville affect rates?", answer: "Highway commuting is factored in. We compare carriers for competitive rates." },
        { question: "Is UM coverage worth it?", answer: "Strongly recommended to protect when uninsured drivers cause accidents." },
        { question: "Does comprehensive cover deer?", answer: "Yes. Animal strikes are covered under comprehensive." },
        { question: "How fast for proof of insurance?", answer: "Immediately once bound." },
    ],
    relatedServices: [
        { title: "High Springs Homeowners", href: "/locations/high-springs-fl/homeowners-insurance", description: "Bundle and save" },
        { title: "High Springs Mobile Home", href: "/locations/high-springs-fl/mobile-home-insurance", description: "Manufactured homes" },
        { title: "Alachua County", href: "/locations/high-springs-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function HighSpringsAutoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
