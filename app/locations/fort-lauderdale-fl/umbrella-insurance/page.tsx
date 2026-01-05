import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Fort Lauderdale",
    state: "FL",
    citySlug: "fort-lauderdale-fl",
    serviceName: "Umbrella Insurance",
    serviceSlug: "umbrella-insurance",

    title: "Fort Lauderdale Umbrella Insurance | Asset Protection",
    description: "Get umbrella insurance in Fort Lauderdale, FL. Protect your assets with liability coverage beyond home and auto limits. Affordable protection for Broward.",

    headline: "Fort Lauderdale Umbrella Insurance",
    subheadline: "Protect your assets and future income with umbrella insurance that extends beyond your home and auto policy limits. Essential coverage for Fort Lauderdale property owners.",

    overview: [
        "Fort Lauderdale residents often have significant assets to protect—waterfront homes, boats, luxury vehicles, and substantial savings. If you're sued for more than your home or auto policy covers, an umbrella policy provides an additional layer of liability protection that can save everything you've worked for.",
        "In Fort Lauderdale's active lifestyle environment, liability risks are everywhere. Pool parties, boating on the Intracoastal, Jet Ski accidents, teen drivers, and auto accidents can all result in claims that exceed standard policy limits. Umbrella insurance fills this gap for surprisingly little cost.",
        "As an independent agency serving Broward County, we help you build coordinated protection by ensuring your underlying home and auto policies have sufficient limits to support umbrella coverage, then adding the umbrella layer that protects your assets and future income.",
    ],

    whyNeeded: [
        {
            title: "Fort Lauderdale's Boating Culture",
            content: "Fort Lauderdale is the 'Yachting Capital of the World.' If you own a boat, Jet Ski, or other watercraft, you face significant liability exposure on the water. Umbrella insurance extends protection to these activities.",
        },
        {
            title: "High-Value Real Estate",
            content: "Broward County real estate values are substantial. Your home equity, savings, investments, and retirement accounts are all at risk in a major lawsuit. Umbrella insurance protects these assets from being seized in a judgment.",
        },
        {
            title: "Active Lifestyle Risks",
            content: "Fort Lauderdale residents enjoy pools, water sports, and outdoor entertaining year-round. These activities increase liability exposure. An injury at your pool or dock could result in claims far exceeding your standard limits.",
        },
        {
            title: "Future Income Protection",
            content: "Umbrella insurance protects more than current assets—it protects future earnings. Without it, a judgment exceeding your policy limits could result in wage garnishment for years. The small premium is worth the long-term protection.",
        },
    ],

    localConsiderations: [
        "Fort Lauderdale's boating culture increases watercraft liability exposure",
        "Underlying policy limits typically must be $250K-$500K for umbrella eligibility",
        "Coverage extends to rental properties you own in Broward County",
        "Boat insurance may need to be added as underlying coverage",
        "Protects against personal injury claims like libel and slander",
        "Teen drivers on your policy may affect umbrella rates",
    ],

    coverageHighlights: [
        { title: "Excess Liability", description: "Pays above home/auto limits when exhausted" },
        { title: "Bodily Injury Coverage", description: "Covers injuries you cause to others" },
        { title: "Property Damage", description: "Covers damage you cause to others' property" },
        { title: "Personal Injury", description: "Covers libel, slander, defamation claims" },
        { title: "Legal Defense Costs", description: "Covers attorney fees for covered claims" },
        { title: "Worldwide Protection", description: "Coverage applies almost anywhere" },
    ],

    faqs: [
        {
            question: "How much umbrella insurance do I need in Fort Lauderdale?",
            answer: "A general guideline is coverage equal to your net worth plus future earning potential. Most Fort Lauderdale homeowners start with $1-2 million. If you own waterfront property, boats, or rental properties, consider higher limits up to $5 million or more.",
        },
        {
            question: "What does Fort Lauderdale umbrella insurance cost?",
            answer: "Umbrella insurance is surprisingly affordable. A $1 million policy typically costs $150-$300 per year. Each additional million adds only $50-$75/year. For Fort Lauderdale's active lifestyle environment, it's excellent protection at very low cost.",
        },
        {
            question: "Does umbrella insurance cover my boat?",
            answer: "Yes, if you have a boat insurance policy with adequate liability limits as underlying coverage, your umbrella typically extends to boating accidents. Given Fort Lauderdale's 'Yachting Capital' status, this is crucial protection for boat owners.",
        },
        {
            question: "What underlying coverage do I need for umbrella insurance?",
            answer: "To qualify for umbrella coverage, insurers require minimum limits on your underlying home and auto policies—typically $250,000-$500,000 in auto liability and $300,000-$500,000 in homeowners liability. We can help adjust your policies to meet requirements.",
        },
        {
            question: "Does umbrella insurance cover Jet Ski accidents?",
            answer: "Yes, if your Jet Ski is covered by an underlying policy with adequate liability limits. Personal watercraft accidents can result in serious injuries and large claims. Umbrella coverage provides essential additional protection for PWC owners.",
        },
    ],

    relatedServices: [
        { title: "Fort Lauderdale Homeowners Insurance", href: "/locations/fort-lauderdale-fl/homeowners-insurance", description: "Required underlying coverage" },
        { title: "Fort Lauderdale Auto Insurance", href: "/locations/fort-lauderdale-fl/auto-insurance", description: "Required underlying coverage" },
        { title: "Fort Lauderdale Condo Insurance", href: "/locations/fort-lauderdale-fl/condo-insurance", description: "Can serve as underlying coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function FortLauderdaleUmbrellaInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
