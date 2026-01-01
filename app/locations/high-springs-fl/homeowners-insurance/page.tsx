import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "High Springs",
    state: "FL",
    citySlug: "high-springs-fl",
    serviceName: "Homeowners Insurance",
    serviceSlug: "homeowners-insurance",
    title: "High Springs Homeowners Insurance | Alachua County",
    description: "Homeowners insurance in High Springs, FL. Independent agents compare carriers for homes near Santa Fe River since 1981.",
    headline: "High Springs Homeowners Insurance",
    subheadline: "Protect your Alachua County home with coverage from an independent agency. We find insurance fitting springs-area and downtown properties.",
    overview: [
        "High Springs homes near the Santa Fe River and springs have unique considerations. Coverage should account for flood risks, wind exposure, and your property's characteristics.",
        "As an independent agency, we shop multiple carriers. North Florida often has more options than coastal areas.",
        "Lewis Insurance Agency has insured homes in the High Springs area since 1981. Local agents handle your needs personally.",
    ],
    whyNeeded: [
        { title: "River Proximity", content: "Homes near the Santa Fe may face flood risks not covered by standard policies." },
        { title: "Wind Protection", content: "Florida storms bring winds even inland. Your policy includes wind coverage." },
        { title: "Historic Downtown", content: "High Springs' historic homes may have specialized coverage needs." },
        { title: "Liability", content: "Injuries on your property create financial risk. Liability protects your assets." },
    ],
    localConsiderations: ["Flood insurance often essential near river", "Roof age affects premiums", "Wind mitigation inspections help", "Four-point for older homes", "Historic home considerations", "Replacement cost vs. ACV options"],
    coverageHighlights: [
        { title: "Dwelling", description: "Home structure" },
        { title: "Other Structures", description: "Garages, sheds" },
        { title: "Personal Property", description: "Belongings" },
        { title: "Liability", description: "Injury protection" },
        { title: "Loss of Use", description: "Living expenses" },
        { title: "Medical Payments", description: "Minor injuries" },
    ],
    faqs: [
        { question: "What's needed for a quote?", answer: "Address, home details, updates, and outbuilding information. For springs-area properties, we discuss flood zones." },
        { question: "Can you compare carriers?", answer: "Yes. We work with multiple carriers in Alachua County." },
        { question: "Do High Springs homes need flood insurance?", answer: "Properties near the Santa Fe River may be in flood zones. Standard homeowners excludes flood." },
        { question: "Can you insure historic homes?", answer: "Yes. Downtown High Springs has historic properties. We find carriers understanding older structures." },
        { question: "What's wind mitigation?", answer: "An inspection documenting wind-resistant features that often qualifies for discounts." },
        { question: "What affects rates?", answer: "Roof age and type, home age, construction, fire distance, claims, and coverage limits." },
    ],
    relatedServices: [
        { title: "Flood Insurance", href: "/personal/flood-insurance-florida", description: "Essential near river" },
        { title: "High Springs Auto", href: "/locations/high-springs-fl/auto-insurance", description: "Bundle and save" },
        { title: "Alachua County", href: "/locations/high-springs-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function HighSpringsHomeownersInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
