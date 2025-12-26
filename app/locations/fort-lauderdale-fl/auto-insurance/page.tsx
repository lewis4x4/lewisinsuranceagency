import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Fort Lauderdale",
    state: "FL",
    citySlug: "fort-lauderdale-fl",
    serviceName: "Auto Insurance",
    serviceSlug: "auto-insurance",

    title: "Fort Lauderdale Auto Insurance | Compare Car Insurance",
    description: "Find affordable auto insurance in Fort Lauderdale, FL. Compare quotes from multiple carriers. Coverage for Broward County drivers on I-95 and local roads.",

    headline: "Fort Lauderdale Auto Insurance",
    subheadline: "Get competitive auto insurance rates for Fort Lauderdale drivers. We compare quotes from multiple carriers to find the right coverage for you.",

    overview: [
        "Fort Lauderdale drivers face congested highways, high uninsured motorist rates, and elevated vehicle theft—all factors that make proper auto insurance essential. We help Broward County drivers find coverage that protects them on I-95 and beyond.",
        "As an independent agency, we work with multiple auto insurance carriers to find competitive rates. We understand Florida's no-fault system and can help you build coverage that truly protects you, not just meets minimum requirements.",
        "Bundle your auto insurance with homeowners for additional savings. We'll shop multiple carriers to find the best combination of coverage and price for your Fort Lauderdale household.",
    ],

    whyNeeded: [
        {
            title: "Uninsured Motorist Protection",
            content: "Florida has one of the highest uninsured driver rates in the country. UM coverage protects you if you're hit by someone without adequate insurance—a common scenario in Broward County.",
        },
        {
            title: "Comprehensive Coverage",
            content: "Fort Lauderdale's flood-prone streets and vehicle theft rates make comprehensive coverage important. It protects your vehicle from flood damage, theft, and vandalism.",
        },
        {
            title: "Traffic Density",
            content: "Fort Lauderdale's heavy traffic on I-95 and local roads increases accident risk. Adequate liability and collision coverage protects your finances if you're involved in an accident.",
        },
        {
            title: "Florida Minimums Aren't Enough",
            content: "Florida's minimum requirements leave you significantly exposed. We recommend higher liability limits and additional coverages to truly protect your finances.",
        },
    ],

    localConsiderations: [
        "Broward County has elevated auto insurance rates due to traffic and claims history",
        "Comprehensive coverage protects against flood damage during heavy rain",
        "Uninsured motorist coverage is strongly recommended",
        "Bundling with home insurance often saves 10-25%",
        "Good driver and defensive driving discounts are available",
        "Vehicle safety features can reduce premiums",
    ],

    faqs: [
        {
            question: "Why is Fort Lauderdale auto insurance expensive?",
            answer: "Rates reflect the area's traffic density, accident rates, vehicle theft, and high percentage of uninsured drivers. Shopping multiple carriers through an independent agent is one of the best ways to find competitive rates.",
        },
        {
            question: "What coverage do I need for Fort Lauderdale?",
            answer: "Beyond Florida's minimums, we recommend higher liability limits, uninsured motorist coverage, and comprehensive/collision for newer vehicles. State minimums leave you significantly exposed in this high-risk area.",
        },
        {
            question: "Does auto insurance cover flood damage?",
            answer: "Yes—if you have comprehensive coverage. Given Fort Lauderdale's flood-prone streets, comprehensive is a smart investment to protect your vehicle from rising water.",
        },
        {
            question: "Can I bundle auto with home insurance?",
            answer: "Yes! Bundling typically saves 10-25%. We'll quote both together to maximize your savings while ensuring you have proper coverage for both.",
        },
    ],

    relatedServices: [
        { title: "Fort Lauderdale Homeowners Insurance", href: "/locations/fort-lauderdale-fl/homeowners-insurance", description: "Bundle and save" },
        { title: "Fort Lauderdale Flood Insurance", href: "/locations/fort-lauderdale-fl/flood-insurance", description: "Protect your property" },
        { title: "All Fort Lauderdale Coverage", href: "/locations/fort-lauderdale-fl", description: "View all options" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function FortLauderdaleAutoPage() {
    return <CityServicePageTemplate data={pageData} />
}
