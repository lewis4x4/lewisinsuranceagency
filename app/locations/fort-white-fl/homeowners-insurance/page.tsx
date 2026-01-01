import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Fort White",
    state: "FL",
    citySlug: "fort-white-fl",
    serviceName: "Homeowners Insurance",
    serviceSlug: "homeowners-insurance",

    title: "Fort White Homeowners Insurance | Columbia County",
    description: "Homeowners insurance in Fort White, FL. Independent agents compare carriers for homes near Ichetucknee Springs. Wind, flood, liability since 1981.",

    headline: "Fort White Homeowners Insurance",
    subheadline: "Protect your Columbia County home with coverage from an independent agency. From springs-area properties to rural acreage, we find insurance that fits.",

    overview: [
        "Fort White homes near the springs and Santa Fe River have unique insurance considerations. Your coverage should account for flood risks, wind exposure, and the characteristics of your property without paying for unnecessary coverage.",
        "As an independent agency, we shop multiple carriers for Fort White homeowners. North Florida often has more options than coastal areas, but finding the right fit requires expertise.",
        "Lewis Insurance Agency has insured homes in the Fort White area since 1981. We understand springs-area properties and rural acreage. Local agents handle your needs personally.",
    ],

    whyNeeded: [
        {
            title: "Springs Area Considerations",
            content: "Homes near Ichetucknee Springs and the Santa Fe River may face flood risks not covered by standard homeowners. We help evaluate your exposure.",
        },
        {
            title: "Wind Protection",
            content: "Florida storms bring damaging winds even inland. Your policy includes wind coverage with deductible options we'll explain.",
        },
        {
            title: "Liability Coverage",
            content: "Injuries on your property create financial risk. Liability coverage protects your assets.",
        },
        {
            title: "Dwelling Value",
            content: "Construction costs have risen. We ensure your coverage keeps pace with replacement costs.",
        },
    ],

    localConsiderations: [
        "Flood insurance often essential near rivers and springs",
        "Roof age significantly affects premiums",
        "Wind mitigation inspections reduce rates",
        "Four-point inspections for older homes",
        "Rural properties may need outbuilding coverage",
        "Replacement cost vs. ACV options",
    ],

    coverageHighlights: [
        { title: "Dwelling", description: "Home structure" },
        { title: "Other Structures", description: "Garages, sheds" },
        { title: "Personal Property", description: "Belongings" },
        { title: "Liability", description: "Injury protection" },
        { title: "Loss of Use", description: "Living expenses" },
        { title: "Medical Payments", description: "Minor injuries" },
    ],

    faqs: [
        {
            question: "What do you need to quote homeowners insurance?",
            answer: "Address, home details (year, size, construction, roof age), updates, and outbuilding information. For springs-area properties, we discuss flood zones.",
        },
        {
            question: "Can you compare carriers?",
            answer: "Yes. We work with multiple carriers in Columbia County and compare for competitive rates.",
        },
        {
            question: "Do Fort White homes need flood insurance?",
            answer: "Properties near the Santa Fe River or Ichetucknee may be in flood zones. Standard homeowners excludes flood—separate coverage is often essential.",
        },
        {
            question: "What's wind mitigation?",
            answer: "An inspection documenting wind-resistant features. It often qualifies Fort White homeowners for premium discounts.",
        },
        {
            question: "What affects rates?",
            answer: "Roof age and type have biggest impact, followed by home age, construction, fire distance, claims, and coverage limits.",
        },
        {
            question: "Replacement cost vs. actual cash value?",
            answer: "Replacement cost covers rebuilding at current prices. ACV deducts depreciation. Replacement provides better protection.",
        },
    ],

    relatedServices: [
        { title: "Flood Insurance", href: "/personal/flood-insurance-florida", description: "Essential near water" },
        { title: "Fort White Auto", href: "/locations/fort-white-fl/auto-insurance", description: "Bundle and save" },
        { title: "Columbia County", href: "/locations/fort-white-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function FortWhiteHomeownersInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
