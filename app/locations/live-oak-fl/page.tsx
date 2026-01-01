import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Live Oak",
    state: "FL",
    county: "Suwannee",
    slug: "live-oak-fl",

    title: "Live Oak, FL Insurance Agency | Lewis Insurance",
    description: "Home, auto, mobile home, and business insurance in Live Oak, FL. Independent agents serving Suwannee County since 1981. Compare quotes from multiple carriers.",

    headline: "Insurance Agents in Live Oak, Florida",
    subheadline: "Your local independent insurance agency serving Suwannee County. We compare rates from multiple carriers to find coverage that fits your needs and budget.",

    overview: [
        "Lewis Insurance Agency serves Live Oak and Suwannee County with personalized insurance solutions. As an independent agency, we work with multiple carriers to find the right coverage at competitive rates—not just one company's options.",
        "Live Oak's mix of rural properties, small businesses, and family homes requires an agent who understands the community. From mobile homes to farms, from downtown shops to service companies, we know the insurance needs of Suwannee County residents.",
        "We've been helping North Florida families since 1981. Whether you're looking for auto, homeowners, mobile home, boat, or business insurance, our team provides the local service you deserve.",
        "Contact us for a quote or stop by to discuss your insurance needs. We're here to help Live Oak families and businesses find protection that works.",
    ],

    localFactors: [
        "Suwannee County's rural character means unique coverage needs for acreage and outbuildings",
        "Proximity to the Suwannee River creates flood considerations for some properties",
        "Mobile homes and manufactured housing common—we specialize in mobile home insurance",
        "Spirit of the Suwannee Music Park brings visitors but locals need year-round protection",
        "Agricultural and rural properties may need specialized farm coverage",
        "Small business community needs accessible commercial insurance options",
    ],

    neighborhoods: [
        "Downtown Live Oak",
        "US-129 Corridor",
        "US-90 Area",
        "Wellborn",
        "Branford",
        "Mayo",
        "McAlpin",
        "Dowling Park",
    ],

    topCoverages: [
        {
            title: "Auto Insurance",
            description: "Coverage for Suwannee County drivers on local and rural roads.",
            href: "/locations/live-oak-fl/auto-insurance",
        },
        {
            title: "Homeowners Insurance",
            description: "Protect your Live Oak home from storms and covered events.",
            href: "/locations/live-oak-fl/homeowners-insurance",
        },
        {
            title: "Mobile Home Insurance",
            description: "Specialized coverage for manufactured and mobile homes.",
            href: "/locations/live-oak-fl/mobile-home-insurance",
        },
        {
            title: "Boat Insurance",
            description: "Protection for boaters on the Suwannee River and beyond.",
            href: "/locations/live-oak-fl/boat-insurance",
        },
        {
            title: "Business Insurance",
            description: "Commercial coverage for Live Oak businesses.",
            href: "/locations/live-oak-fl/business-insurance",
        },
        {
            title: "Flood Insurance",
            description: "Separate flood protection for properties near water.",
            href: "/personal/flood-insurance-florida",
        },
    ],

    faqs: [
        {
            question: "Do you have an office in Live Oak?",
            answer: "Our main office is in Lake City, just a short drive from Live Oak. We serve all of Suwannee County and can meet with you at our Lake City location or handle everything by phone and email for your convenience.",
        },
        {
            question: "Can you insure mobile homes in Suwannee County?",
            answer: "Yes! We work with carriers that specialize in mobile home and manufactured housing insurance. Whether you own or rent your lot, we can find coverage that protects your home and belongings.",
        },
        {
            question: "Do Live Oak properties need flood insurance?",
            answer: "Properties near the Suwannee River or in low-lying areas may be in flood zones. Even outside flood zones, flooding can occur. Standard homeowners insurance doesn't cover flood—we can help you evaluate your risk and find appropriate coverage.",
        },
        {
            question: "What business insurance do Live Oak companies need?",
            answer: "Most businesses need general liability and property coverage at minimum. Depending on your operations, you may also need workers' compensation, commercial auto, professional liability, or other coverages. We'll help you identify the right mix.",
        },
        {
            question: "How do I get a quote for Live Oak insurance?",
            answer: "Call us at (386) 755-0050, request a quote online, or visit our Lake City office. We can typically provide quotes quickly once we understand your coverage needs.",
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

export default function LiveOakPage() {
    return <CityPageTemplate data={pageData} />
}
