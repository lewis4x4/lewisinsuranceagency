import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Sarasota",
    state: "FL",
    citySlug: "sarasota-fl",
    serviceName: "Auto Insurance",
    serviceSlug: "auto-insurance",

    title: "Sarasota Auto Insurance | Compare Quotes",
    description: "Find affordable auto insurance in Sarasota, FL. Compare quotes from multiple carriers. Coverage for I-75 commuters and Sarasota County drivers. PIP and full coverage options.",

    headline: "Sarasota Auto Insurance",
    subheadline: "Get reliable auto insurance coverage for Sarasota roads. We compare rates from multiple carriers to find protection that fits your driving needs and budget.",

    overview: [
        "Sarasota drivers navigate roads ranging from busy I-75 and US-41 to barrier island causeways and residential neighborhoods. With year-round residents and seasonal visitors, Sarasota roads require proper auto insurance to protect yourself and your vehicle.",
        "Florida's no-fault insurance system requires specific coverages, but state minimums often aren't enough protection. As an independent agency, we help Sarasota drivers understand their options and find coverage that provides real protection without overpaying.",
        "Whether you're commuting to downtown Sarasota, driving to Siesta Key, or traveling throughout the county, we can help you find auto insurance that protects you from Sarasota's driving risks—including Florida's high uninsured motorist rate.",
    ],

    whyNeeded: [
        {
            title: "I-75 and US-41 Traffic",
            content: "Sarasota's main arteries see heavy traffic year-round. Accidents happen regularly on these busy roads, making adequate coverage essential for protecting yourself and your vehicle.",
        },
        {
            title: "Seasonal Traffic Patterns",
            content: "Sarasota's population increases significantly during winter months with seasonal residents and tourists. More drivers means more accident risk and greater importance of uninsured motorist coverage.",
        },
        {
            title: "Florida's Uninsured Drivers",
            content: "Florida has one of the highest uninsured motorist rates—around 20%. Uninsured motorist coverage protects you when hit by a driver without adequate insurance.",
        },
        {
            title: "Weather-Related Risks",
            content: "Florida's afternoon thunderstorms, tropical weather, and occasional flooding create driving hazards. Comprehensive coverage protects your vehicle from weather damage including flooding.",
        },
    ],

    localConsiderations: [
        "Florida requires PIP ($10,000) and PDL ($10,000) at minimum",
        "Bodily injury liability is strongly recommended though not required",
        "Uninsured motorist coverage is essential given Florida's high uninsured rate",
        "Comprehensive coverage protects against flooding and storm damage",
        "Seasonal rate variations may apply in Sarasota County",
        "Bridge and causeway travel to barrier islands is common for residents",
    ],

    coverageHighlights: [
        { title: "PIP Coverage", description: "Required $10,000 for medical expenses regardless of fault" },
        { title: "Property Damage Liability", description: "Required $10,000 minimum for damage you cause" },
        { title: "Bodily Injury Liability", description: "Protects you if you injure others (recommended)" },
        { title: "Uninsured Motorist", description: "Essential protection against uninsured drivers" },
        { title: "Collision Coverage", description: "Covers your vehicle in accidents" },
        { title: "Comprehensive", description: "Covers weather, theft, and non-collision damage" },
    ],

    faqs: [
        {
            question: "How much does auto insurance cost in Sarasota?",
            answer: "Sarasota auto insurance costs depend on your driving record, vehicle, coverage levels, age, and other factors. Rates are generally comparable to Florida averages. Compare quotes from multiple carriers to find competitive pricing for your situation.",
        },
        {
            question: "What auto insurance is required in Florida?",
            answer: "Florida requires PIP (Personal Injury Protection) of $10,000 and Property Damage Liability of $10,000. These minimums leave significant gaps. We recommend adding bodily injury liability and uninsured motorist coverage.",
        },
        {
            question: "Should I get comprehensive coverage in Sarasota?",
            answer: "Yes, we recommend comprehensive coverage for Sarasota vehicles. It covers flood damage from tropical storms, theft, vandalism, and animal strikes. Given Sarasota's weather exposure, comprehensive provides important protection.",
        },
        {
            question: "Does auto insurance cover flooding?",
            answer: "Comprehensive coverage (not collision or liability) covers flood damage to your vehicle. If your car is flooded during a storm or hurricane, comprehensive coverage pays for repairs or replacement. Most lenders require comprehensive if you're financing.",
        },
        {
            question: "Can I bundle auto with home insurance in Sarasota?",
            answer: "Yes, and you should. Bundling home and auto insurance typically saves 10-25% on premiums. We can quote both together and find the carriers offering the best bundle discounts in Sarasota County.",
        },
    ],

    relatedServices: [
        { title: "Sarasota Homeowners Insurance", href: "/locations/sarasota-fl/homeowners-insurance", description: "Bundle home and auto for savings" },
        { title: "Sarasota Flood Insurance", href: "/locations/sarasota-fl/flood-insurance", description: "Home flood protection" },
        { title: "Sarasota County Insurance", href: "/locations/sarasota-fl", description: "All insurance services" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function SarasotaAutoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
