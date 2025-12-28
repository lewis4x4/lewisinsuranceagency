import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Sarasota",
    state: "FL",
    county: "Sarasota",
    slug: "sarasota-fl",

    title: "Sarasota Insurance Agency",
    description: "Find affordable home, auto, flood, and business insurance in Sarasota, FL. Lewis Insurance compares quotes from multiple carriers for Sarasota County residents and businesses.",

    headline: "Insurance Agents in Sarasota, Florida",
    subheadline: "Get personalized insurance coverage for your Sarasota home, vehicle, or business. We compare rates from multiple carriers to find you the best deal.",

    overview: [
        "Sarasota offers an exceptional quality of life with its beautiful Gulf beaches, vibrant arts scene, and diverse communities. From the barrier islands of Siesta Key and Longboat Key to the mainland neighborhoods of Sarasota and Bradenton, the region attracts residents seeking Southwest Florida's cultural hub.",
        "Lewis Insurance serves Sarasota and Manatee counties with comprehensive personal and commercial insurance products. As an independent agency, we work with multiple carriers to find coverage that fits your needs—whether you're protecting a barrier island home, a downtown condo, or a growing business.",
        "Sarasota's Gulf Coast location creates significant hurricane and flood exposure. The barrier islands are especially vulnerable, and mainland areas can also experience flooding from storm surge and heavy rain. We help Sarasota residents understand their risks and build comprehensive protection.",
        "Whether you're drawn to Sarasota's beaches, golf courses, or cultural amenities, we're here to help protect your investment. Get a free quote today and experience the personalized service of a local, independent insurance agency.",
    ],

    localFactors: [
        "Barrier islands like Siesta Key and Longboat Key face extreme hurricane and flood exposure",
        "Storm surge can affect properties well beyond the immediate coastline",
        "Many Sarasota properties experienced flooding during recent hurricanes",
        "Older homes in historic districts may need updates to qualify for preferred coverage",
        "Boat and watercraft coverage is common for Sarasota's boating community",
        "Wind mitigation inspections can significantly reduce premiums in this coastal market",
    ],

    neighborhoods: [
        "Downtown Sarasota",
        "Siesta Key",
        "Longboat Key",
        "Lido Key",
        "St. Armands",
        "Bird Key",
        "Lakewood Ranch",
        "University Park",
        "Palmer Ranch",
        "Bradenton",
        "Anna Maria Island",
        "Venice",
    ],

    topCoverages: [
        {
            title: "Homeowners Insurance",
            description: "Protect your Sarasota home from Gulf hurricanes and wind damage.",
            href: "/personal/homeowners-insurance-florida",
        },
        {
            title: "Flood Insurance",
            description: "Essential coverage for Sarasota's coastal and barrier island properties.",
            href: "/personal/flood-insurance-florida",
        },
        {
            title: "Condo Insurance",
            description: "HO-6 coverage for Sarasota condos and waterfront units.",
            href: "/personal/condo-insurance-florida",
        },
        {
            title: "Auto Insurance",
            description: "Coverage for Sarasota drivers navigating I-75 and local roads.",
            href: "/personal/auto-insurance-florida",
        },
        {
            title: "Business Insurance",
            description: "Protect your Sarasota business from liability and property risks.",
            href: "/business",
        },
        {
            title: "Umbrella Insurance",
            description: "Extra liability protection for Sarasota homeowners and boat owners.",
            href: "/personal/umbrella-insurance-florida",
        },
    ],

    faqs: [
        {
            question: "Is it hard to get insurance on Siesta Key or Longboat Key?",
            answer: "Barrier island properties can be challenging to insure due to their high hurricane and flood exposure. However, we have access to carriers that specialize in coastal properties. Rates will be higher than mainland properties, but coverage is available. Wind mitigation features can help reduce premiums.",
        },
        {
            question: "Do I need flood insurance in Sarasota?",
            answer: "We strongly recommend flood insurance for most Sarasota properties. Barrier islands and coastal areas are in high-risk flood zones, but even mainland areas can flood from heavy rain and storm surge. Recent hurricanes demonstrated that flooding can occur well beyond expected areas.",
        },
        {
            question: "How do hurricanes affect Sarasota insurance rates?",
            answer: "Sarasota's Gulf Coast location means significant hurricane exposure, which affects rates throughout the area. Recent hurricanes have led to rate increases as carriers reassess coastal risks. Shopping multiple carriers through an independent agent is one of the best ways to find competitive rates.",
        },
        {
            question: "Can you insure homes in Lakewood Ranch?",
            answer: "Yes! Lakewood Ranch is one of the fastest-growing communities in Florida. While it's inland from the coast, properties still need hurricane coverage and may benefit from flood insurance. We serve all Lakewood Ranch neighborhoods and surrounding communities.",
        },
        {
            question: "Do you serve Bradenton and Manatee County?",
            answer: "Yes! We serve Sarasota County, Manatee County, and surrounding areas including Bradenton, Anna Maria Island, Holmes Beach, Palmetto, Ellenton, and Parrish. We're licensed throughout Florida and understand the local market.",
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

export default function SarasotaPage() {
    return <CityPageTemplate data={pageData} />
}
