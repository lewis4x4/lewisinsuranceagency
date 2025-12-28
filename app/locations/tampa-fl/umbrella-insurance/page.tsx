import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Tampa",
    state: "FL",
    citySlug: "tampa-fl",
    serviceName: "Umbrella Insurance",
    serviceSlug: "umbrella-insurance",

    title: "Tampa Umbrella Insurance | Asset Protection",
    description: "Get umbrella insurance in Tampa, FL. Protect your assets with liability coverage beyond home and auto limits. Affordable protection for Hillsborough County residents.",

    headline: "Tampa Umbrella Insurance",
    subheadline: "Protect your assets and future income with umbrella insurance that extends beyond your home and auto policy limits. Essential coverage for Tampa Bay property owners.",

    overview: [
        "Tampa Bay residents with assets to protect—homes, savings, investments, and future income—need umbrella insurance to guard against lawsuits that exceed standard policy limits. A serious accident or injury claim can result in judgments far exceeding your home or auto coverage.",
        "Umbrella insurance provides an extra layer of liability protection, typically in $1 million increments, at a surprisingly affordable cost. For Tampa homeowners with pools, boats, teen drivers, or significant assets, umbrella coverage is essential protection for everything you've worked to build.",
        "As an independent agency, we help Tampa residents build coordinated protection by ensuring your underlying home and auto policies meet umbrella requirements, then adding the umbrella layer that protects your assets from catastrophic liability claims.",
    ],

    whyNeeded: [
        {
            title: "Tampa's Active Lifestyle",
            content: "Tampa Bay residents enjoy pools, boating, water sports, and outdoor entertaining. These activities increase liability exposure. An injury at your pool party or a boating accident could result in claims far exceeding your standard policy limits.",
        },
        {
            title: "Growing Asset Values",
            content: "Tampa Bay real estate values have increased significantly. Your home equity, savings, investments, and retirement accounts are all at risk in a major lawsuit. Umbrella insurance protects these assets from being seized in a judgment.",
        },
        {
            title: "Teen and Young Drivers",
            content: "If you have young drivers on your auto policy, your liability risk increases. A serious accident could result in claims well above your auto limits, threatening your assets. Umbrella coverage provides crucial additional protection.",
        },
        {
            title: "Future Income Protection",
            content: "Umbrella insurance protects more than current assets—it protects future earnings. Without it, a judgment exceeding your policy limits could result in wage garnishment for years. The small premium is worth the long-term protection.",
        },
    ],

    localConsiderations: [
        "Tampa's waterfront lifestyle increases boating and pool liability exposure",
        "Underlying policy limits typically must be $250K-$500K for umbrella eligibility",
        "Coverage extends to rental properties you own in Hillsborough County",
        "Protects against personal injury claims like libel and slander",
        "Boat insurance may need to be added as underlying coverage",
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
            question: "How much umbrella insurance do I need in Tampa?",
            answer: "A general guideline is coverage equal to your net worth plus future earning potential. Most Tampa homeowners start with $1 million. If you own waterfront property, rental properties, or have significant assets, consider higher limits up to $5 million or more.",
        },
        {
            question: "What does Tampa umbrella insurance cost?",
            answer: "Umbrella insurance is surprisingly affordable. A $1 million policy typically costs $150-$300 per year. Each additional million adds only $50-$75/year. For Tampa's active lifestyle environment, it's excellent protection at very low cost.",
        },
        {
            question: "Does umbrella insurance cover my boat?",
            answer: "Yes, if you have a boat insurance policy with adequate liability limits as underlying coverage, your umbrella typically extends to boating accidents. Given Tampa Bay's boating culture, this is important protection for watercraft owners.",
        },
        {
            question: "What underlying coverage do I need for umbrella insurance?",
            answer: "To qualify for umbrella coverage, insurers require minimum limits on your underlying home and auto policies—typically $250,000-$500,000 in auto liability and $300,000-$500,000 in homeowners liability. We can help adjust your policies to meet requirements.",
        },
        {
            question: "Does umbrella cover my Tampa rental property?",
            answer: "Many personal umbrella policies cover rental properties you own, though some exclude or limit this coverage. If you own rental properties in Tampa, we can find a policy that includes them or recommend adequate landlord coverage.",
        },
    ],

    relatedServices: [
        { title: "Tampa Homeowners Insurance", href: "/locations/tampa-fl/homeowners-insurance", description: "Required underlying coverage" },
        { title: "Tampa Auto Insurance", href: "/locations/tampa-fl/auto-insurance", description: "Required underlying coverage" },
        { title: "Tampa Condo Insurance", href: "/locations/tampa-fl/condo-insurance", description: "Can serve as underlying coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function TampaUmbrellaInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
