import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "White Springs",
    state: "FL",
    citySlug: "white-springs-fl",
    serviceName: "Auto Insurance",
    serviceSlug: "auto-insurance",

    title: "White Springs Auto Insurance | Hamilton County FL",
    description: "Auto insurance in White Springs, FL. Independent agents compare quotes for Hamilton County drivers since 1981. Free quotes.",

    headline: "White Springs Auto Insurance",
    subheadline: "Find auto coverage for Hamilton County roads. We compare carriers to help White Springs drivers get competitive rates.",

    overview: [
        "White Springs drivers navigate US-41, rural Hamilton County roads, and routes to Lake City, Jasper, and Live Oak. Your auto insurance should protect without breaking the budget.",
        "Florida's no-fault system has minimum requirements that often leave gaps. We help White Springs drivers find the right protection at affordable rates.",
        "Lewis Insurance Agency has served North Florida since 1981. Local agents handle your claims and questions personally.",
    ],

    whyNeeded: [
        { title: "Rural Hazards", content: "Hamilton County's rural roads have wildlife and limited lighting. Comprehensive coverage protects." },
        { title: "Uninsured Drivers", content: "Florida has high uninsured rates. UM coverage is essential protection." },
        { title: "Highway Travel", content: "US-41 and routes to neighboring cities mean adequate coverage matters." },
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
        { title: "White Springs Homeowners", href: "/locations/white-springs-fl/homeowners-insurance", description: "Bundle and save" },
        { title: "White Springs Mobile Home", href: "/locations/white-springs-fl/mobile-home-insurance", description: "Manufactured homes" },
        { title: "Hamilton County", href: "/locations/white-springs-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function WhiteSpringsAutoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
