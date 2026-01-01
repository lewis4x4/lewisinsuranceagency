import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "White Springs",
    state: "FL",
    citySlug: "white-springs-fl",
    serviceName: "Homeowners Insurance",
    serviceSlug: "homeowners-insurance",

    title: "White Springs Homeowners Insurance | Hamilton County",
    description: "Homeowners insurance in White Springs, FL. Independent agents compare carriers for homes near Suwannee River since 1981.",

    headline: "White Springs Homeowners Insurance",
    subheadline: "Protect your Hamilton County home with coverage from an independent agency. We find insurance fitting riverfront, historic, and rural properties.",

    overview: [
        "White Springs homes along the Suwannee River and throughout Hamilton County have unique insurance considerations. Coverage should account for flood risks, wind exposure, and your property's characteristics.",
        "As an independent agency, we shop multiple carriers. North Florida often has more options than coastal areas, but finding the right fit requires expertise.",
        "Lewis Insurance Agency has insured homes in the White Springs area since 1981. Local agents handle your needs personally.",
    ],

    whyNeeded: [
        { title: "River Proximity", content: "Homes near the Suwannee may face flood risks not covered by standard policies." },
        { title: "Wind Protection", content: "Florida storms bring winds even inland. Your policy includes wind coverage." },
        { title: "Historic Homes", content: "White Springs' older and historic homes may have specialized coverage needs." },
        { title: "Liability", content: "Injuries on your property create financial risk. Liability coverage protects your assets." },
    ],

    localConsiderations: ["Flood insurance often essential near river", "Roof age affects premiums", "Wind mitigation inspections help", "Four-point for older homes", "Historic home considerations", "Outbuilding coverage for rural properties"],

    coverageHighlights: [
        { title: "Dwelling", description: "Home structure" },
        { title: "Other Structures", description: "Garages, sheds" },
        { title: "Personal Property", description: "Belongings" },
        { title: "Liability", description: "Injury protection" },
        { title: "Loss of Use", description: "Living expenses" },
        { title: "Medical Payments", description: "Minor injuries" },
    ],

    faqs: [
        { question: "What's needed for a quote?", answer: "Address, home details, updates, and outbuilding information. For riverfront, we discuss flood zones." },
        { question: "Can you compare carriers?", answer: "Yes. We work with multiple carriers in Hamilton County." },
        { question: "Do I need flood insurance?", answer: "Properties near the Suwannee may be in flood zones. Standard homeowners excludes flood." },
        { question: "What's wind mitigation?", answer: "An inspection documenting wind-resistant features that often qualifies for discounts." },
        { question: "Can you insure historic homes?", answer: "Yes. We find carriers understanding older structures and their unique needs." },
        { question: "What affects rates?", answer: "Roof age and type, home age, construction, fire distance, claims, and coverage limits." },
    ],

    relatedServices: [
        { title: "Flood Insurance", href: "/personal/flood-insurance-florida", description: "Essential near river" },
        { title: "White Springs Auto", href: "/locations/white-springs-fl/auto-insurance", description: "Bundle and save" },
        { title: "Hamilton County", href: "/locations/white-springs-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function WhiteSpringsHomeownersInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
