import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "High Springs",
    state: "FL",
    citySlug: "high-springs-fl",
    serviceName: "Mobile Home Insurance",
    serviceSlug: "mobile-home-insurance",
    title: "High Springs Mobile Home Insurance | Alachua County FL",
    description: "Mobile home insurance in High Springs, FL. Independent agents compare carriers for manufactured homes near Santa Fe River since 1981.",
    headline: "High Springs Mobile Home Insurance",
    subheadline: "Protect your manufactured home in Alachua County with coverage from an independent agency. We find insurance fitting your mobile home's specific needs.",
    overview: [
        "High Springs mobile homes near the Santa Fe River and springs need insurance addressing both wind and water risks. Manufactured home policies differ from standard homeowners coverage.",
        "As an independent agency, we work with carriers specializing in mobile home coverage. North Florida often has more options than coastal areas.",
        "Lewis Insurance Agency has insured mobile homes in the High Springs area since 1981. Local agents understand manufactured home coverage needs.",
    ],
    whyNeeded: [
        { title: "Wind Protection", content: "Florida storms bring winds even inland. Mobile home policies include wind coverage for manufactured structures." },
        { title: "Flood Risk", content: "Properties near the Santa Fe River may need separate flood coverage not included in standard policies." },
        { title: "Replacement Cost", content: "Older mobile homes may have actual cash value policies. Replacement cost options exist for qualifying homes." },
        { title: "Liability", content: "Injuries on your property create financial risk. Liability coverage protects your assets." },
    ],
    localConsiderations: ["Tie-down and anchoring requirements", "Flood zones near river", "Roof age and condition", "Skirting and foundation type", "Age of manufactured home", "Park vs. owned land considerations"],
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
        { question: "Is flood insurance separate?", answer: "Yes. Properties near the Santa Fe River may need separate flood policies." },
        { question: "Does location on owned land vs. park matter?", answer: "Yes. Coverage options and pricing can differ based on land ownership." },
        { question: "What are tie-down requirements?", answer: "Florida requires anchoring systems. Proper tie-downs may reduce premiums." },
        { question: "Can I get replacement cost coverage?", answer: "For qualifying homes, yes. Older homes may have actual cash value policies." },
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

export default function HighSpringsMobileHomeInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
