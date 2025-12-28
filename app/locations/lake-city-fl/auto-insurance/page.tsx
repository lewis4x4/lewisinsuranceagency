import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Lake City",
    state: "FL",
    citySlug: "lake-city-fl",
    serviceName: "Auto Insurance",
    serviceSlug: "auto-insurance",

    title: "Lake City Auto Insurance | Local Agents",
    description: "Find affordable auto insurance in Lake City, FL. Your local Columbia County agents compare quotes from multiple carriers. PIP, liability, and full coverage options.",

    headline: "Lake City Auto Insurance",
    subheadline: "Get reliable auto insurance coverage from your local Lake City agency. We've served Columbia County drivers since 1981, helping neighbors find the right protection at competitive rates.",

    overview: [
        "Lake City drivers deserve auto insurance from an agency that knows the community. Whether you're commuting on I-75, driving US-90, or navigating local roads, we help Columbia County drivers find coverage that protects without overpaying.",
        "Florida's no-fault insurance system has specific requirements, but state minimums often leave dangerous gaps. As your local independent agency, we help Lake City drivers understand their options and find coverage that truly protects their families.",
        "Lewis Insurance Agency has served Lake City and North Florida since 1981. When you have a claim or questions, you'll work with local agents who know the area and care about their neighbors. That's the difference a local agency makes.",
    ],

    whyNeeded: [
        {
            title: "I-75 Corridor Traffic",
            content: "Lake City sits at the intersection of I-75 and I-10, making it a major traffic corridor. Highway accidents are common, and adequate coverage protects you from the significant costs accidents can cause.",
        },
        {
            title: "Florida's Uninsured Drivers",
            content: "Florida has one of the highest uninsured motorist rates—around 20%. Uninsured motorist coverage protects Lake City drivers when hit by someone without adequate insurance.",
        },
        {
            title: "Local Roads and Rural Driving",
            content: "Columbia County includes rural roads where animal strikes and single-vehicle accidents occur. Comprehensive coverage protects against these and other non-collision events.",
        },
        {
            title: "No-Fault System Gaps",
            content: "Florida's PIP provides limited medical coverage. For serious injuries, bodily injury liability coverage (not required but highly recommended) protects your assets from lawsuits.",
        },
    ],

    localConsiderations: [
        "Florida requires PIP ($10,000) and PDL ($10,000) at minimum",
        "Bodily injury liability strongly recommended for Lake City drivers",
        "Uninsured motorist coverage essential given Florida's high uninsured rate",
        "Comprehensive covers deer strikes common in Columbia County",
        "Multi-vehicle and multi-policy discounts available",
        "Local claims support from agents who know you",
    ],

    coverageHighlights: [
        { title: "PIP Coverage", description: "Required $10,000 for medical expenses regardless of fault" },
        { title: "Property Damage Liability", description: "Required $10,000 minimum for damage you cause" },
        { title: "Bodily Injury Liability", description: "Protects you if you injure others (recommended)" },
        { title: "Uninsured Motorist", description: "Essential protection against uninsured drivers" },
        { title: "Collision Coverage", description: "Covers your vehicle in accidents" },
        { title: "Comprehensive", description: "Covers theft, weather, and animal strikes" },
    ],

    faqs: [
        {
            question: "How much does auto insurance cost in Lake City?",
            answer: "Lake City auto insurance costs depend on your driving record, vehicle, coverage levels, and other factors. North Florida rates are often more affordable than urban areas. We compare quotes from multiple carriers to find competitive rates.",
        },
        {
            question: "What auto insurance is required in Florida?",
            answer: "Florida requires PIP (Personal Injury Protection) of $10,000 and Property Damage Liability of $10,000. These minimums leave significant gaps. We recommend adding bodily injury liability and uninsured motorist coverage.",
        },
        {
            question: "Should I get uninsured motorist coverage in Lake City?",
            answer: "Absolutely. With roughly 20% of Florida drivers uninsured, UM coverage is essential. It protects you if an uninsured or underinsured driver hits you—covering medical expenses and lost wages.",
        },
        {
            question: "Does comprehensive coverage include deer strikes?",
            answer: "Yes. Animal strikes, including deer, are covered by comprehensive (not collision) coverage. Columbia County's rural areas make animal collisions a real risk, especially during dawn and dusk hours.",
        },
        {
            question: "Why choose a local Lake City insurance agency?",
            answer: "Local agencies know the community and are here when you need help. We've served Lake City since 1981—when you have a claim or question, you'll talk to people who know you and care about your family's protection.",
        },
    ],

    relatedServices: [
        { title: "Lake City Homeowners Insurance", href: "/locations/lake-city-fl/homeowners-insurance", description: "Bundle home and auto for savings" },
        { title: "Lake City Flood Insurance", href: "/locations/lake-city-fl/flood-insurance", description: "Home flood protection" },
        { title: "Columbia County Insurance", href: "/locations/lake-city-fl", description: "All insurance services" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function LakeCityAutoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
