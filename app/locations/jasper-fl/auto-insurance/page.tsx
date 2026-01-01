import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Jasper",
    state: "FL",
    citySlug: "jasper-fl",
    serviceName: "Auto Insurance",
    serviceSlug: "auto-insurance",

    title: "Jasper Auto Insurance | Hamilton County FL",
    description: "Auto insurance in Jasper, FL. Independent agents compare quotes for Hamilton County and I-75 corridor drivers since 1981.",

    headline: "Jasper Auto Insurance",
    subheadline: "Find auto coverage for Hamilton County roads and I-75. We compare carriers to help Jasper drivers get competitive rates.",

    overview: [
        "Jasper drivers navigate I-75, US-41, and rural Hamilton County roads. Whether commuting or staying local, your auto insurance should protect without breaking the budget.",
        "Florida's no-fault system has minimum requirements that often leave gaps. We help Jasper drivers find the right protection at affordable rates.",
        "Lewis Insurance Agency has served North Florida since 1981. Local agents handle your claims and questions personally.",
    ],

    whyNeeded: [
        { title: "I-75 Traffic", content: "Highway speeds mean highway risks. Adequate coverage protects on the interstate." },
        { title: "Uninsured Drivers", content: "Florida has high uninsured rates. UM coverage is essential protection." },
        { title: "Rural Hazards", content: "Hamilton County's rural roads have wildlife and farm equipment." },
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
        { question: "Does I-75 driving affect rates?", answer: "Highway driving is factored in. We compare carriers for competitive rates." },
        { question: "Is UM coverage worth it?", answer: "Strongly recommended to protect when uninsured drivers cause accidents." },
        { question: "Does comprehensive cover deer?", answer: "Yes. Animal strikes are covered under comprehensive." },
        { question: "How fast for proof of insurance?", answer: "Immediately once bound." },
    ],

    relatedServices: [
        { title: "Jasper Homeowners", href: "/locations/jasper-fl/homeowners-insurance", description: "Bundle and save" },
        { title: "Jasper Mobile Home", href: "/locations/jasper-fl/mobile-home-insurance", description: "Manufactured homes" },
        { title: "Hamilton County", href: "/locations/jasper-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function JasperAutoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
