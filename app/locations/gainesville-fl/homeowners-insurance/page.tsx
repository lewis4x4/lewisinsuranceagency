import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Gainesville",
    state: "FL",
    citySlug: "gainesville-fl",
    serviceName: "Homeowners Insurance",
    serviceSlug: "homeowners-insurance",
    title: "Gainesville Homeowners Insurance | Alachua County FL",
    description: "Homeowners insurance in Gainesville, FL. Independent agents compare carriers for homes near UF, Haile Plantation, and Alachua County suburbs since 1981.",
    headline: "Gainesville Homeowners Insurance",
    subheadline: "Protect your Alachua County home with coverage from an independent agency. We find insurance fitting properties from historic districts to new developments.",
    overview: [
        "Gainesville homes range from historic properties near downtown to newer developments in Haile Plantation and surrounding areas. Each neighborhood has unique coverage considerations.",
        "As an independent agency, we shop multiple carriers. Alachua County often has more options than coastal areas, though wind coverage remains important.",
        "Lewis Insurance Agency has insured Gainesville homes since 1981. Local agents handle your needs whether you're near UF, in the suburbs, or anywhere in between.",
    ],
    whyNeeded: [
        { title: "Wind Protection", content: "Florida storms bring damaging winds even inland. Your policy includes wind coverage." },
        { title: "Property Investment", content: "Your home is likely your largest investment. Coverage should match your dwelling's value." },
        { title: "Liability Coverage", content: "Injuries on your property create financial risk. Liability protects your assets." },
        { title: "Personal Property", content: "Your belongings deserve protection from theft, fire, and covered events." },
    ],
    localConsiderations: ["Historic home considerations near downtown", "HOA requirements in planned communities", "Roof age affects premiums", "Wind mitigation inspections help", "Four-point for older homes", "Flood zones vary by area"],
    coverageHighlights: [
        { title: "Dwelling", description: "Home structure" },
        { title: "Other Structures", description: "Garages, fences" },
        { title: "Personal Property", description: "Belongings" },
        { title: "Liability", description: "Injury protection" },
        { title: "Loss of Use", description: "Living expenses" },
        { title: "Medical Payments", description: "Minor injuries" },
    ],
    faqs: [
        { question: "What's needed for a quote?", answer: "Address, home details, roof age, updates, and any outbuildings or pools." },
        { question: "Can you compare carriers?", answer: "Yes. We work with multiple carriers serving Alachua County." },
        { question: "Do I need flood insurance?", answer: "Standard homeowners excludes flood. Some Gainesville areas have flood risk—we can check your zone." },
        { question: "What's wind mitigation?", answer: "An inspection documenting wind-resistant features that often qualifies for discounts." },
        { question: "Can you insure older homes?", answer: "Yes. Gainesville has historic properties. Four-point inspections may be needed for homes over a certain age." },
        { question: "What about HOA requirements?", answer: "Planned communities often have coverage requirements. We ensure your policy meets HOA standards." },
    ],
    relatedServices: [
        { title: "Flood Insurance", href: "/personal/flood-insurance-florida", description: "Separate coverage" },
        { title: "Gainesville Auto", href: "/locations/gainesville-fl/auto-insurance", description: "Bundle and save" },
        { title: "Umbrella Insurance", href: "/personal/umbrella-insurance-florida", description: "Extra liability" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function GainesvilleHomeownersInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
