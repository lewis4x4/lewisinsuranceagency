import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Tampa",
    state: "FL",
    citySlug: "tampa-fl",
    serviceName: "Homeowners Insurance",
    serviceSlug: "homeowners-insurance",

    title: "Tampa Homeowners Insurance | Compare Quotes",
    description: "Find affordable homeowners insurance in Tampa, FL. Compare quotes from multiple carriers for hurricane and wind coverage. Serving Hillsborough County.",

    headline: "Tampa Homeowners Insurance",
    subheadline: "Protect your Tampa Bay area home with comprehensive coverage designed for Central Florida's hurricane risks. Compare rates from multiple carriers.",

    overview: [
        "Tampa Bay homeowners understand the importance of hurricane protection. Whether you're in South Tampa, New Tampa, or the surrounding Hillsborough County communities, your home needs coverage that addresses the region's storm exposure.",
        "As an independent insurance agency, we shop multiple carriers to find homeowners coverage that fits your Tampa property. Recent hurricanes have reminded Tampa Bay residents of their vulnerability, and we help ensure your coverage is adequate for today's risks.",
        "From waterfront properties on Davis Islands to suburban homes in Brandon, we understand Tampa's diverse housing market and insurance needs. Let us help you find comprehensive protection at a competitive price.",
    ],

    whyNeeded: [
        {
            title: "Hurricane Exposure",
            content: "Tampa Bay's geography makes it vulnerable to hurricane storm surge and wind damage. Your homeowners policy provides essential protection against these risks, subject to hurricane deductibles.",
        },
        {
            title: "Post-Storm Awareness",
            content: "Recent hurricanes have demonstrated Tampa Bay's vulnerability after decades of near-misses. Ensure your coverage reflects current replacement costs and adequate protection.",
        },
        {
            title: "Property Value Protection",
            content: "Tampa's real estate market has grown significantly. Adequate dwelling coverage ensures you can rebuild at current construction costs if disaster strikes.",
        },
        {
            title: "Mortgage Requirements",
            content: "Lenders require homeowners insurance to protect their investment. We ensure your coverage meets requirements while fitting your budget.",
        },
    ],

    localConsiderations: [
        "Hurricane deductibles typically range from 2-5% of dwelling coverage",
        "Waterfront and low-lying areas face elevated flood risk requiring separate coverage",
        "Wind mitigation features can significantly reduce premiums",
        "Roof age and condition are critical factors for coverage eligibility",
        "Flood insurance is separate and recommended for many Tampa properties",
        "Newer construction in areas like New Tampa may qualify for better rates",
    ],

    faqs: [
        {
            question: "How much does Tampa homeowners insurance cost?",
            answer: "Costs vary based on your home's location, age, construction, roof condition, and coverage limits. Properties near the coast or in flood zones typically cost more. We shop multiple carriers to find competitive rates for your specific property.",
        },
        {
            question: "Do I need flood insurance in Tampa?",
            answer: "We recommend flood insurance for most Tampa properties. Low-lying areas, waterfront properties, and homes near the bay face significant flood risk. Even properties not in high-risk zones can flood from heavy rain.",
        },
        {
            question: "What's a wind mitigation inspection?",
            answer: "A wind mitigation inspection documents hurricane-resistant features in your home. In Tampa, these credits can save hundreds or thousands annually. We can recommend qualified inspectors.",
        },
        {
            question: "Has Tampa insurance changed after recent hurricanes?",
            answer: "Yes. Recent storms have increased awareness of Tampa Bay's vulnerability, and some carriers have adjusted rates or appetite. We help Tampa homeowners navigate these changes and find coverage.",
        },
    ],

    relatedServices: [
        { title: "Tampa Flood Insurance", href: "/locations/tampa-fl/flood-insurance", description: "Essential flood protection" },
        { title: "Tampa Auto Insurance", href: "/locations/tampa-fl/auto-insurance", description: "Bundle and save" },
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

export default function TampaHomeownersPage() {
    return <CityServicePageTemplate data={pageData} />
}
