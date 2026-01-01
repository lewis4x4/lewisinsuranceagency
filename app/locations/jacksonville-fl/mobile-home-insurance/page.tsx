import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Jacksonville",
    state: "FL",
    citySlug: "jacksonville-fl",
    serviceName: "Mobile Home Insurance",
    serviceSlug: "mobile-home-insurance",
    title: "Jacksonville Mobile Home Insurance | Duval County FL",
    description: "Mobile home insurance in Jacksonville, FL. Independent agents compare carriers for manufactured homes across Duval County since 1981.",
    headline: "Jacksonville Mobile Home Insurance",
    subheadline: "Protect your manufactured home in Duval County with coverage from an independent agency. We find insurance fitting your mobile home's specific needs.",
    overview: [
        "Jacksonville mobile homes need insurance addressing Florida's wind risks, coastal considerations, and manufactured home specifics. These policies differ from standard homeowners coverage.",
        "As an independent agency, we work with carriers specializing in mobile home coverage. Jacksonville's size means options exist for homes of various ages and types.",
        "Lewis Insurance Agency has insured mobile homes in the Jacksonville area since 1981. Local agents understand Duval County manufactured home coverage needs.",
    ],
    whyNeeded: [
        { title: "Wind Protection", content: "Coastal proximity brings wind exposure. Mobile home policies include wind coverage designed for manufactured structures." },
        { title: "Flood Consideration", content: "Parts of Jacksonville have flood risk. Flood insurance is separate from standard mobile home coverage." },
        { title: "Replacement Cost", content: "Older mobile homes may have actual cash value policies. Replacement cost options exist for qualifying homes." },
        { title: "Liability", content: "Injuries on your property create financial risk. Liability coverage protects your assets." },
    ],
    localConsiderations: ["Tie-down and anchoring requirements", "Coastal wind exposure", "Flood zones vary by area", "Roof age and condition", "Park vs. owned land considerations", "Age of manufactured home"],
    coverageHighlights: [
        { title: "Dwelling", description: "Home structure" },
        { title: "Other Structures", description: "Sheds, carports" },
        { title: "Personal Property", description: "Belongings" },
        { title: "Liability", description: "Injury protection" },
        { title: "Loss of Use", description: "Living expenses" },
        { title: "Trip Collision", description: "Moving coverage" },
    ],
    faqs: [
        { question: "What's needed for a quote?", answer: "Year, make, dimensions, tie-downs, roof type, and whether on owned land or in a park." },
        { question: "Can you insure older mobile homes?", answer: "Yes. Carriers have different age limits. We find options for older manufactured homes." },
        { question: "Is flood insurance separate?", answer: "Yes. Many Jacksonville areas have flood risk requiring separate policies." },
        { question: "Does location on owned land vs. park matter?", answer: "Yes. Coverage options and pricing can differ based on land ownership." },
        { question: "What are tie-down requirements?", answer: "Florida requires anchoring systems. Proper tie-downs may reduce premiums." },
        { question: "Does coastal proximity affect rates?", answer: "Distance from the coast can affect wind premiums. We shop carriers for competitive options." },
    ],
    relatedServices: [
        { title: "Flood Insurance", href: "/personal/flood-insurance-florida", description: "Separate coverage" },
        { title: "Jacksonville Auto", href: "/locations/jacksonville-fl/auto-insurance", description: "Bundle and save" },
        { title: "Duval County", href: "/locations/jacksonville-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function JacksonvilleMobileHomeInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
