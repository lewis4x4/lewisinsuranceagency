import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Mayo",
    state: "FL",
    citySlug: "mayo-fl",
    serviceName: "Auto Insurance",
    serviceSlug: "auto-insurance",
    title: "Mayo Auto Insurance | Lafayette County FL",
    description: "Auto insurance in Mayo, FL. Independent agents compare quotes for Lafayette County drivers since 1981.",
    headline: "Mayo Auto Insurance",
    subheadline: "Find auto coverage for Lafayette County's rural roads. We compare carriers to help Mayo drivers get competitive rates.",
    overview: [
        "Mayo drivers navigate US-27 and rural Lafayette County roads. Whether commuting or staying local, your auto insurance should protect without breaking the budget.",
        "Florida's no-fault system has minimum requirements that often leave gaps. We help Mayo drivers find the right protection at affordable rates.",
        "Lewis Insurance Agency has served North Florida since 1981. Local agents handle your claims and questions personally.",
    ],
    whyNeeded: [
        { title: "Rural Hazards", content: "Lafayette County's rural roads have wildlife, farm equipment, and limited services." },
        { title: "Uninsured Drivers", content: "Florida has high uninsured rates. UM coverage is essential protection." },
        { title: "Distance Factors", content: "Rural location means help may take longer—comprehensive coverage matters." },
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
        { question: "What affects rates?", answer: "Driving record, vehicle, coverage levels, and history. Rural areas often have lower rates." },
        { question: "Is UM coverage worth it?", answer: "Strongly recommended to protect when uninsured drivers cause accidents." },
        { question: "Does comprehensive cover deer?", answer: "Yes. Animal strikes are covered under comprehensive." },
        { question: "How fast for proof of insurance?", answer: "Immediately once bound." },
    ],
    relatedServices: [
        { title: "Mayo Homeowners", href: "/locations/mayo-fl/homeowners-insurance", description: "Bundle and save" },
        { title: "Mayo Mobile Home", href: "/locations/mayo-fl/mobile-home-insurance", description: "Manufactured homes" },
        { title: "Lafayette County", href: "/locations/mayo-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function MayoAutoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
