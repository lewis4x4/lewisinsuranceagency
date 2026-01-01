import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Macclenny",
    state: "FL",
    citySlug: "macclenny-fl",
    serviceName: "Homeowners Insurance",
    serviceSlug: "homeowners-insurance",

    title: "Macclenny Homeowners Insurance | Baker County FL",
    description: "Homeowners insurance in Macclenny, FL. Independent agents compare carriers for Baker County homes. Wind, liability, dwelling coverage since 1981.",

    headline: "Macclenny Homeowners Insurance",
    subheadline: "Protect your Baker County home with coverage from an independent agency that compares options. From Downtown Macclenny to rural properties, we find homeowners insurance that fits.",

    overview: [
        "Your Macclenny home represents a significant investment deserving proper protection. Baker County homeowners face Florida's wind exposure, potential flooding in low areas, and everyday liability risks. The right policy addresses these concerns without paying for unnecessary coverage.",
        "As an independent agency, we shop multiple carriers serving Baker County. North Florida homeowners often have more options than coastal areas, but finding the right fit still requires expertise and carrier relationships.",
        "Lewis Insurance Agency has insured Macclenny homes since 1981. We understand Baker County properties—from new construction near I-10 to established homes in town. When you need changes or have a claim, local agents handle your needs.",
    ],

    whyNeeded: [
        {
            title: "Wind and Storm Protection",
            content: "While Macclenny is inland, Florida storms bring damaging winds. Your homeowners policy includes wind coverage, though named storm deductibles may apply. We help you understand your protection.",
        },
        {
            title: "Liability Coverage",
            content: "If someone is injured on your property, liability coverage protects your finances from medical expenses and legal costs. This essential protection comes standard but limits should match your assets.",
        },
        {
            title: "Dwelling Replacement Cost",
            content: "Construction costs have increased significantly. We ensure your dwelling coverage keeps pace so you can rebuild if disaster strikes your Macclenny home.",
        },
        {
            title: "Personal Property",
            content: "Furniture, electronics, clothing, and belongings inside your home have significant value. Homeowners insurance covers personal property against theft, fire, and covered events.",
        },
    ],

    localConsiderations: [
        "Roof age and condition significantly affect premiums",
        "Wind mitigation inspections can reduce rates",
        "Four-point inspections required for older homes",
        "Flood insurance separate for properties in flood zones",
        "Replacement cost vs. actual cash value options",
        "Liability limits should match asset exposure",
        "Additional structures like barns may need coverage",
    ],

    coverageHighlights: [
        { title: "Dwelling Coverage", description: "Your home's structure" },
        { title: "Other Structures", description: "Detached garages, sheds, fences" },
        { title: "Personal Property", description: "Belongings inside the home" },
        { title: "Liability Protection", description: "Injuries to visitors" },
        { title: "Loss of Use", description: "Living expenses if displaced" },
        { title: "Medical Payments", description: "Minor injury coverage" },
    ],

    faqs: [
        {
            question: "What information do you need to quote homeowners insurance?",
            answer: "We'll need your address, home details (year built, square footage, construction, roof age), updates you've made, and information about outbuildings or other structures.",
        },
        {
            question: "Can you compare carriers for my Baker County home?",
            answer: "Yes. As an independent agency, we work with multiple carriers writing in Baker County and compare options for competitive rates and appropriate coverage.",
        },
        {
            question: "What affects homeowners rates in Macclenny?",
            answer: "Roof age and type have the biggest impact, followed by home age, construction, distance to fire services, claims history, and coverage limits. Wind mitigation features reduce premiums.",
        },
        {
            question: "What's a wind mitigation inspection?",
            answer: "This inspection documents wind-resistant features—roof shape, attachments, opening protection, and roof covering. It often qualifies Macclenny homeowners for significant discounts.",
        },
        {
            question: "Do Macclenny homes need flood insurance?",
            answer: "Properties in flood zones need separate flood insurance—standard homeowners excludes flood. Even outside designated zones, flooding can occur. We help evaluate your risk.",
        },
        {
            question: "What's replacement cost vs. actual cash value?",
            answer: "Replacement cost covers rebuilding at current prices. Actual cash value deducts depreciation. Replacement cost provides better protection but costs more.",
        },
    ],

    relatedServices: [
        { title: "Macclenny Auto Insurance", href: "/locations/macclenny-fl/auto-insurance", description: "Bundle and save" },
        { title: "Flood Insurance", href: "/personal/flood-insurance-florida", description: "Separate flood coverage" },
        { title: "Baker County Insurance", href: "/locations/macclenny-fl", description: "All coverage options" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function MacclennyHomeownersInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
