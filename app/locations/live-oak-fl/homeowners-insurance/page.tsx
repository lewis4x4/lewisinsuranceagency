import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Live Oak",
    state: "FL",
    citySlug: "live-oak-fl",
    serviceName: "Homeowners Insurance",
    serviceSlug: "homeowners-insurance",

    title: "Live Oak Homeowners Insurance | Suwannee County",
    description: "Homeowners insurance in Live Oak, FL. Independent agents compare carriers for Suwannee County homes. Wind, liability, dwelling coverage since 1981.",

    headline: "Live Oak Homeowners Insurance",
    subheadline: "Protect your Suwannee County home with coverage from an independent agency that compares options. From Downtown Live Oak to rural properties, we find homeowners insurance that fits.",

    overview: [
        "Your Live Oak home deserves insurance protection that accounts for Florida's unique risks. Suwannee County homeowners face wind exposure, occasional flooding near rivers, and the day-to-day liability risks every homeowner encounters. The right policy covers these concerns without paying for things you don't need.",
        "Florida's homeowners insurance market can be challenging, but North Florida homeowners often have more carrier options than coastal areas. As an independent agency, we shop multiple carriers to find coverage that protects your home at competitive rates.",
        "Lewis Insurance Agency has insured Live Oak homes since 1981. We understand Suwannee County properties—from newer construction along US-90 to established homes in Downtown Live Oak. When you need policy changes or have a claim, local agents handle your needs personally.",
    ],

    whyNeeded: [
        {
            title: "Wind and Storm Exposure",
            content: "While Live Oak is inland, Florida storms still bring damaging winds. Your homeowners policy provides wind coverage, though deductibles for named storms may apply. We help you understand your wind protection.",
        },
        {
            title: "Liability Protection",
            content: "If someone is injured on your property, liability coverage protects your finances. This covers medical expenses and legal costs if you're found responsible for injuries to guests or visitors.",
        },
        {
            title: "Dwelling Replacement Cost",
            content: "Construction costs have increased significantly. We ensure your dwelling coverage keeps pace with replacement costs so you can rebuild if disaster strikes your Live Oak home.",
        },
        {
            title: "Personal Property Coverage",
            content: "Your furniture, electronics, clothing, and belongings represent significant value. Homeowners insurance covers personal property against theft, fire, and other covered losses.",
        },
    ],

    localConsiderations: [
        "Roof age and condition significantly affect premiums",
        "Wind mitigation inspections can reduce rates",
        "Flood insurance separate (especially near Suwannee River)",
        "Four-point inspections typically required for older homes",
        "Replacement cost vs. actual cash value options",
        "Liability limits should match your asset exposure",
        "Additional structures like barns and sheds may need coverage",
    ],

    coverageHighlights: [
        { title: "Dwelling Coverage", description: "Covers your home's structure" },
        { title: "Other Structures", description: "Detached garages, sheds, fences" },
        { title: "Personal Property", description: "Your belongings inside the home" },
        { title: "Liability Protection", description: "Covers injuries to others on your property" },
        { title: "Loss of Use", description: "Living expenses if home is uninhabitable" },
        { title: "Medical Payments", description: "Minor injury coverage regardless of fault" },
    ],

    faqs: [
        {
            question: "What information do you need to quote homeowners insurance?",
            answer: "We'll need your address, details about the home (year built, square footage, construction type, roof age), any updates you've made, current coverage if applicable, and information about outbuildings or other structures on the property.",
        },
        {
            question: "Can you shop multiple carriers for my home insurance?",
            answer: "Yes. As an independent agency, we work with multiple carriers that write homeowners coverage in Suwannee County. We compare options at new quotes and renewals to ensure you're getting competitive rates.",
        },
        {
            question: "What affects homeowners insurance rates in Live Oak?",
            answer: "Roof age and type have the biggest impact, followed by home age, construction type, distance to fire services, claims history, and coverage limits. Wind mitigation features and security systems can reduce premiums.",
        },
        {
            question: "What's a wind mitigation inspection?",
            answer: "A wind mitigation inspection documents features that help your home resist wind damage—roof shape, attachment methods, opening protection, and roof covering. These inspections often qualify Live Oak homeowners for significant premium discounts.",
        },
        {
            question: "Do I need separate flood insurance?",
            answer: "Standard homeowners policies don't cover flood damage. If your Live Oak property is near the Suwannee River or in a flood-prone area, separate flood insurance through the NFIP or private carriers is essential protection.",
        },
        {
            question: "What's the difference between replacement cost and actual cash value?",
            answer: "Replacement cost covers rebuilding at today's prices. Actual cash value deducts depreciation, paying what your home is worth considering age and wear. Replacement cost provides better protection but costs more.",
        },
    ],

    relatedServices: [
        { title: "Live Oak Flood Insurance", href: "/locations/live-oak-fl/flood-insurance", description: "Separate flood protection" },
        { title: "Live Oak Auto Insurance", href: "/locations/live-oak-fl/auto-insurance", description: "Bundle home and auto" },
        { title: "Suwannee County Insurance", href: "/locations/live-oak-fl", description: "All insurance services" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function LiveOakHomeownersInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
