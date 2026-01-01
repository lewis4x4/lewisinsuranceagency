import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Gainesville",
    state: "FL",
    citySlug: "gainesville-fl",
    serviceName: "Mobile Home Insurance",
    serviceSlug: "mobile-home-insurance",
    title: "Gainesville Mobile Home Insurance | Alachua County FL",
    description: "Mobile home insurance in Gainesville, FL. Independent agents compare carriers for manufactured homes in Alachua County since 1981.",
    headline: "Gainesville Mobile Home Insurance",
    subheadline: "Protect your manufactured home in Alachua County with coverage from an independent agency. We find insurance fitting your mobile home's specific needs.",
    overview: [
        "Gainesville area mobile homes need insurance addressing Florida's wind risks and specific manufactured home considerations. These policies differ from standard homeowners coverage.",
        "As an independent agency, we work with carriers specializing in mobile home coverage. Options exist for homes of various ages and types.",
        "Lewis Insurance Agency has insured mobile homes in Alachua County since 1981. Local agents understand manufactured home coverage needs.",
    ],
    whyNeeded: [
        { title: "Wind Protection", content: "Florida storms bring damaging winds. Mobile home policies include wind coverage designed for manufactured structures." },
        { title: "Replacement Cost", content: "Older mobile homes may have actual cash value policies. Replacement cost options exist for qualifying homes." },
        { title: "Liability", content: "Injuries on your property create financial risk. Liability coverage protects your assets." },
        { title: "Personal Property", content: "Your belongings deserve protection from theft, fire, and covered events." },
    ],
    localConsiderations: ["Tie-down and anchoring requirements", "Roof age and condition", "Skirting and foundation type", "Age of manufactured home", "Park vs. owned land considerations", "Flood zones in some areas"],
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
        { question: "Does location on owned land vs. park matter?", answer: "Yes. Coverage options and pricing can differ based on land ownership." },
        { question: "What are tie-down requirements?", answer: "Florida requires anchoring systems. Proper tie-downs may reduce premiums." },
        { question: "Can I get replacement cost coverage?", answer: "For qualifying homes, yes. Older homes may have actual cash value policies." },
        { question: "Is flood insurance separate?", answer: "Yes. Some Alachua County areas have flood risk requiring separate policies." },
    ],
    relatedServices: [
        { title: "Flood Insurance", href: "/personal/flood-insurance-florida", description: "Separate coverage" },
        { title: "Gainesville Auto", href: "/locations/gainesville-fl/auto-insurance", description: "Bundle and save" },
        { title: "Alachua County", href: "/locations/gainesville-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: { canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}` },
}

export default function GainesvilleMobileHomeInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
