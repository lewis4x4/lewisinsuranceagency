import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Tampa",
    state: "FL",
    citySlug: "tampa-fl",
    serviceName: "Auto Insurance",
    serviceSlug: "auto-insurance",

    title: "Tampa Auto Insurance | Compare Car Insurance Quotes",
    description: "Find affordable auto insurance in Tampa, FL. Compare quotes from multiple carriers. Coverage for Tampa Bay drivers on I-275, I-4, and local roads.",

    headline: "Tampa Auto Insurance",
    subheadline: "Get competitive auto insurance rates for Tampa Bay drivers. We compare quotes from multiple carriers to find coverage that fits your needs.",

    overview: [
        "Tampa drivers navigate busy highways including I-275 and I-4, face high uninsured motorist rates, and deal with flood-prone roads during summer storms. Proper auto insurance is essential for protecting yourself on Tampa Bay roads.",
        "As an independent agency, we work with multiple carriers to find competitive auto insurance rates for Hillsborough County drivers. We understand Florida's unique no-fault system and help you build coverage beyond minimum requirements.",
        "Bundle your auto with homeowners insurance for additional savings. We'll shop your coverage to find the best combination of price and protection for your Tampa household.",
    ],

    whyNeeded: [
        {
            title: "Uninsured Motorist Protection",
            content: "Florida has high uninsured driver rates. UM coverage protects you if hit by someone without adequate insurance—a common scenario in the Tampa Bay area.",
        },
        {
            title: "Comprehensive Coverage",
            content: "Tampa's afternoon thunderstorms create flood-prone roads, and vehicle theft occurs throughout the metro. Comprehensive coverage protects against flood damage, theft, and other non-collision losses.",
        },
        {
            title: "Highway Exposure",
            content: "Tampa's busy interstates see high accident rates. Adequate liability and collision coverage protects your finances if you're involved in an accident.",
        },
        {
            title: "Florida Minimums Fall Short",
            content: "Florida's minimum requirements leave you significantly exposed. We recommend higher limits and additional coverages to truly protect your finances.",
        },
    ],

    localConsiderations: [
        "Tampa Bay area has competitive auto insurance rates compared to South Florida",
        "Comprehensive coverage protects against flood damage from summer storms",
        "Uninsured motorist coverage is strongly recommended",
        "Bundling with home insurance typically saves 10-25%",
        "Good driver and defensive driving discounts available",
        "Commute distance and usage affect rates",
    ],

    faqs: [
        {
            question: "How much does Tampa auto insurance cost?",
            answer: "Tampa rates are generally lower than South Florida but still reflect Florida's high uninsured driver rates and no-fault system. Your rate depends on driving record, vehicle, coverage levels, and other factors. We shop multiple carriers to find competitive rates.",
        },
        {
            question: "What auto coverage do I need in Tampa?",
            answer: "Beyond Florida's minimums, we recommend higher liability limits, uninsured motorist coverage, and comprehensive/collision for newer vehicles. State minimums leave you exposed in the event of a serious accident.",
        },
        {
            question: "Does auto insurance cover flood damage to my car?",
            answer: "Yes—if you have comprehensive coverage. Tampa's summer storms can flood roads quickly. Comprehensive protects your vehicle from water damage, theft, and other non-collision losses.",
        },
        {
            question: "Can I bundle auto and home insurance?",
            answer: "Yes! Bundling typically saves 10-25%. We'll quote both together to maximize your savings while ensuring proper coverage for both your home and vehicles.",
        },
    ],

    relatedServices: [
        { title: "Tampa Homeowners Insurance", href: "/locations/tampa-fl/homeowners-insurance", description: "Bundle and save" },
        { title: "Tampa Flood Insurance", href: "/locations/tampa-fl/flood-insurance", description: "Protect your property" },
        { title: "All Tampa Coverage", href: "/locations/tampa-fl", description: "View all options" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function TampaAutoPage() {
    return <CityServicePageTemplate data={pageData} />
}
