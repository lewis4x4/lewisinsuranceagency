import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Gainesville",
    state: "FL",
    county: "Alachua",
    slug: "gainesville-fl",

    title: "Gainesville, FL Insurance Agency | Lewis Insurance",
    description: "Find affordable home, auto, flood, and business insurance in Gainesville, FL. Lewis Insurance serves Alachua County and North Central Florida.",

    headline: "Insurance Agents in Gainesville, Florida",
    subheadline: "Get personalized insurance coverage for your Gainesville home, vehicle, or business. We compare rates from multiple carriers to find you the best deal.",

    overview: [
        "Gainesville is the cultural and educational hub of North Central Florida, home to the University of Florida and a diverse community of students, families, and businesses. From historic neighborhoods to new developments, Gainesville offers unique insurance considerations.",
        "Lewis Insurance proudly serves Gainesville and all of Alachua County. Located nearby in Lake City, we understand the local market and can provide personalized service that national call centers can't match.",
        "Whether you're a homeowner in Haile Plantation, a landlord renting to students, a business owner downtown, or part of the university community, we'll help you find the right insurance at competitive rates.",
        "As an independent agency, we shop your coverage with multiple carriers—not just one. This means better rates and coverage options tailored to your specific situation.",
    ],

    localFactors: [
        "Large student rental market requires specialized landlord/rental property coverage",
        "Historic districts like Duckpond have older homes that may need specialized coverage",
        "Paynes Prairie and low areas have flood considerations",
        "University employment and medical center create diverse insurance needs",
        "Growing communities like Tioga and Haile Plantation have newer construction",
        "Local businesses serve both permanent residents and the university population",
    ],

    neighborhoods: [
        "Downtown Gainesville",
        "Haile Plantation",
        "Duckpond",
        "University Area",
        "Tioga",
        "Town of Tioga",
        "Westside",
        "Northwest Gainesville",
        "Newberry",
        "Alachua",
        "High Springs",
        "Archer",
    ],

    topCoverages: [
        {
            title: "Homeowners Insurance",
            description: "Protect your Gainesville home from storms and more.",
            href: "/personal/homeowners-insurance-florida",
        },
        {
            title: "Auto Insurance",
            description: "Coverage for Gainesville drivers and I-75 commuters.",
            href: "/personal/auto-insurance-florida",
        },
        {
            title: "Renters Insurance",
            description: "Affordable coverage for students and renters.",
            href: "/personal/renters-insurance-florida",
        },
        {
            title: "Landlord Insurance",
            description: "Coverage for rental property owners.",
            href: "/business",
        },
        {
            title: "Business Insurance",
            description: "Protect your Gainesville business operations.",
            href: "/business",
        },
        {
            title: "Umbrella Insurance",
            description: "Extra liability protection for property owners.",
            href: "/personal/umbrella-insurance-florida",
        },
    ],

    faqs: [
        {
            question: "Do you serve the University of Florida area?",
            answer: "Absolutely! We serve all of Gainesville including the University area. Whether you're a student needing renters insurance, a landlord insuring rental properties, or a business serving the university community, we can help.",
        },
        {
            question: "What insurance do landlords need in Gainesville?",
            answer: "Student rental properties need specialized coverage—standard homeowners doesn't cover rental use. Landlord policies (dwelling fire policies) cover the structure, liability, and lost rent. We work with carriers experienced in the Gainesville rental market.",
        },
        {
            question: "Do I need flood insurance in Gainesville?",
            answer: "Some Gainesville areas near Paynes Prairie, creeks, and low-lying areas are in flood zones. Even outside zones, heavy summer rains can cause flooding. We recommend reviewing your property's flood risk—standard home insurance doesn't cover floods.",
        },
        {
            question: "Can you insure older homes in historic Gainesville neighborhoods?",
            answer: "Yes. Gainesville has beautiful older homes in areas like Duckpond and the university district. These may require updated systems and sometimes specialized coverage. We work with carriers that understand historic properties.",
        },
        {
            question: "How far are you from Gainesville?",
            answer: "Our office is in Lake City, about 40 miles north of Gainesville on I-75. We're happy to meet clients in Gainesville, and many transactions can be handled by phone, email, or video call. We serve all of Alachua County.",
        },
    ],
}

export const metadata: Metadata = generateCityMetadata({
    city: pageData.city,
    state: pageData.state,
    slug: pageData.slug,
    title: pageData.title,
    description: pageData.description,
})

export default function GainesvillePage() {
    return <CityPageTemplate data={pageData} />
}
