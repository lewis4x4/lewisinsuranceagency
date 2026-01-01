import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Jasper",
    state: "FL",
    citySlug: "jasper-fl",
    serviceName: "Homeowners Insurance",
    serviceSlug: "homeowners-insurance",

    title: "Jasper Homeowners Insurance | Hamilton County FL",
    description: "Homeowners insurance in Jasper, FL. Independent agents compare carriers for Hamilton County homes since 1981.",

    headline: "Jasper Homeowners Insurance",
    subheadline: "Protect your Hamilton County home with coverage from an independent agency. We find insurance fitting your property.",

    overview: [
        "Jasper homes in Hamilton County deserve proper protection. Coverage should account for wind exposure and your property's characteristics without paying for unnecessary coverage.",
        "As an independent agency, we shop multiple carriers. North Florida often has more options than coastal areas.",
        "Lewis Insurance Agency has insured homes in the Jasper area since 1981. Local agents handle your needs personally.",
    ],

    whyNeeded: [
        { title: "Wind Protection", content: "Florida storms bring winds even inland. Your policy includes wind coverage." },
        { title: "Liability", content: "Injuries on your property create financial risk. Liability protects your assets." },
        { title: "Dwelling Value", content: "Construction costs have risen. We ensure adequate replacement coverage." },
        { title: "Personal Property", content: "Your belongings have significant value and deserve protection." },
    ],

    localConsiderations: ["Roof age affects premiums", "Wind mitigation inspections help", "Four-point for older homes", "Rural properties may need outbuilding coverage", "Replacement cost vs. ACV options", "Liability limits should match assets"],

    coverageHighlights: [
        { title: "Dwelling", description: "Home structure" },
        { title: "Other Structures", description: "Garages, sheds" },
        { title: "Personal Property", description: "Belongings" },
        { title: "Liability", description: "Injury protection" },
        { title: "Loss of Use", description: "Living expenses" },
        { title: "Medical Payments", description: "Minor injuries" },
    ],

    faqs: [
        { question: "What's needed for a quote?", answer: "Address, home details, updates, and outbuilding information." },
        { question: "Can you compare carriers?", answer: "Yes. We work with multiple carriers in Hamilton County." },
        { question: "What's wind mitigation?", answer: "An inspection documenting wind-resistant features that often qualifies for discounts." },
        { question: "Can you insure rural properties?", answer: "Yes. We find carriers covering properties with acreage and outbuildings." },
        { question: "What affects rates?", answer: "Roof age and type, home age, construction, fire distance, claims, and coverage limits." },
        { question: "Replacement cost vs. ACV?", answer: "Replacement cost covers rebuilding at current prices. ACV deducts depreciation." },
    ],

    relatedServices: [
        { title: "Jasper Auto", href: "/locations/jasper-fl/auto-insurance", description: "Bundle and save" },
        { title: "Flood Insurance", href: "/personal/flood-insurance-florida", description: "Separate coverage" },
        { title: "Hamilton County", href: "/locations/jasper-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function JasperHomeownersInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
