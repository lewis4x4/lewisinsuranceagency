import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Branford",
    state: "FL",
    citySlug: "branford-fl",
    serviceName: "Homeowners Insurance",
    serviceSlug: "homeowners-insurance",

    title: "Branford Homeowners Insurance | Suwannee County",
    description: "Homeowners insurance in Branford, FL. Independent agents compare carriers for homes near Suwannee River. Wind, flood, liability coverage since 1981.",

    headline: "Branford Homeowners Insurance",
    subheadline: "Protect your Suwannee County home with coverage tailored to Branford's unique location. From riverfront properties to rural acreage, we find insurance that fits.",

    overview: [
        "Branford's location at the confluence of the Suwannee and Santa Fe rivers makes it a special place to live—but also creates unique insurance considerations. Your homeowners coverage should account for flood risks, wind exposure, and the specific characteristics of your property.",
        "North Florida homeowners often have more carrier options than coastal areas, but finding the right coverage still requires expertise. As an independent agency, we compare options from multiple carriers to find protection that covers what matters without paying for what you don't need.",
        "Lewis Insurance Agency has insured homes in the Branford area since 1981. We understand riverfront properties, rural acreage, and everything in between. When you have questions or need to file a claim, local agents handle your needs personally.",
    ],

    whyNeeded: [
        {
            title: "River Proximity Considerations",
            content: "Homes near the Suwannee and Santa Fe rivers may face flood risks that standard homeowners insurance doesn't cover. We help you understand your exposure and find appropriate flood protection.",
        },
        {
            title: "Wind and Storm Coverage",
            content: "While Branford is inland, Florida storms still bring damaging winds. Your homeowners policy provides wind coverage, and we'll help you understand deductible options for named storms.",
        },
        {
            title: "Liability Protection",
            content: "If someone is injured on your property, liability coverage protects your finances. This covers medical expenses and legal costs if you're found responsible.",
        },
        {
            title: "Dwelling Replacement Cost",
            content: "Construction costs have risen significantly. We ensure your dwelling coverage keeps pace with current replacement costs so you can rebuild if disaster strikes.",
        },
    ],

    localConsiderations: [
        "Flood insurance often essential near the rivers—separate policy required",
        "Roof age and condition significantly affect premiums",
        "Wind mitigation inspections can reduce rates",
        "Four-point inspections typically required for older homes",
        "Rural properties may need coverage for outbuildings",
        "Replacement cost vs. actual cash value options",
        "Liability limits should match your asset exposure",
    ],

    coverageHighlights: [
        { title: "Dwelling Coverage", description: "Covers your home's structure" },
        { title: "Other Structures", description: "Detached garages, docks, sheds" },
        { title: "Personal Property", description: "Your belongings inside the home" },
        { title: "Liability Protection", description: "Injuries to others on your property" },
        { title: "Loss of Use", description: "Living expenses if displaced" },
        { title: "Medical Payments", description: "Minor injury coverage" },
    ],

    faqs: [
        {
            question: "What information do you need to quote homeowners insurance?",
            answer: "We'll need your address, home details (year built, square footage, construction type, roof age), any updates you've made, and information about outbuildings. For riverfront properties, we'll also discuss flood zone status.",
        },
        {
            question: "Can you shop multiple carriers for my Branford home?",
            answer: "Yes. As an independent agency, we work with multiple carriers writing coverage in Suwannee County. We compare options to find competitive rates and appropriate protection.",
        },
        {
            question: "Do Branford homes need flood insurance?",
            answer: "Many properties near the Suwannee and Santa Fe rivers are in flood zones, making flood insurance essential. Even outside designated zones, flooding occurs—standard homeowners doesn't cover flood damage.",
        },
        {
            question: "What's a wind mitigation inspection?",
            answer: "This inspection documents features helping your home resist wind—roof shape, attachments, opening protection, and roof covering. Wind mitigation often qualifies Branford homeowners for significant premium discounts.",
        },
        {
            question: "What affects homeowners rates in Branford?",
            answer: "Roof age and type have the biggest impact, followed by home age, construction, distance to fire services, claims history, and coverage limits. Wind mitigation and security features can reduce premiums.",
        },
        {
            question: "Can you insure riverfront property?",
            answer: "Yes. Riverfront homes have unique needs—flood coverage, dock structures, and waterfront liability. We work with carriers that understand these properties and provide appropriate coverage.",
        },
    ],

    relatedServices: [
        { title: "Flood Insurance", href: "/personal/flood-insurance-florida", description: "Essential near rivers" },
        { title: "Branford Auto Insurance", href: "/locations/branford-fl/auto-insurance", description: "Bundle and save" },
        { title: "Branford Boat Insurance", href: "/locations/branford-fl/boat-insurance", description: "River boat coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function BranfordHomeownersInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
