import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Mayo",
    state: "FL",
    citySlug: "mayo-fl",
    serviceName: "Homeowners Insurance",
    serviceSlug: "homeowners-insurance",
    title: "Mayo Homeowners Insurance | Lafayette County FL",
    description: "Homeowners insurance in Mayo, FL. Independent agents compare carriers for Lafayette County homes since 1981.",
    headline: "Mayo Homeowners Insurance",
    subheadline: "Protect your Lafayette County home with coverage from an independent agency. We find insurance fitting rural properties.",
    overview: [
        "Mayo homes in rural Lafayette County deserve proper protection. Coverage should account for wind exposure and your property's characteristics.",
        "As an independent agency, we shop multiple carriers. North Florida often has more options than coastal areas.",
        "Lewis Insurance Agency has insured homes in the Mayo area since 1981. Local agents handle your needs personally.",
    ],
    whyNeeded: [
        { title: "Wind Protection", content: "Florida storms bring winds even inland. Your policy includes wind coverage." },
        { title: "Liability", content: "Injuries on your property create financial risk. Liability protects your assets." },
        { title: "Rural Property Needs", content: "Outbuildings, acreage, and farm structures may need coverage." },
        { title: "Personal Property", content: "Your belongings have significant value and deserve protection." },
    ],
    localConsiderations: ["Roof age affects premiums", "Wind mitigation inspections help", "Four-point for older homes", "Rural properties need outbuilding coverage", "Replacement cost vs. ACV options", "Liability limits should match assets"],
    coverageHighlights: [
        { title: "Dwelling", description: "Home structure" },
        { title: "Other Structures", description: "Barns, sheds, outbuildings" },
        { title: "Personal Property", description: "Belongings" },
        { title: "Liability", description: "Injury protection" },
        { title: "Loss of Use", description: "Living expenses" },
        { title: "Medical Payments", description: "Minor injuries" },
    ],
    faqs: [
        { question: "What's needed for a quote?", answer: "Address, home details, updates, and outbuilding information." },
        { question: "Can you compare carriers?", answer: "Yes. We work with multiple carriers in Lafayette County." },
        { question: "Can you insure rural properties?", answer: "Yes. We find carriers covering properties with acreage and outbuildings." },
        { question: "What's wind mitigation?", answer: "An inspection documenting wind-resistant features that often qualifies for discounts." },
        { question: "What affects rates?", answer: "Roof age and type, home age, construction, fire distance, claims, and coverage limits." },
        { question: "Replacement cost vs. ACV?", answer: "Replacement cost covers rebuilding at current prices. ACV deducts depreciation." },
    ],
    relatedServices: [
        { title: "Mayo Auto", href: "/locations/mayo-fl/auto-insurance", description: "Bundle and save" },
        { title: "Flood Insurance", href: "/personal/flood-insurance-florida", description: "Separate coverage" },
        { title: "Lafayette County", href: "/locations/mayo-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function MayoHomeownersInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
