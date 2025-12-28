import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Miami",
    state: "FL",
    citySlug: "miami-fl",
    serviceName: "Umbrella Insurance",
    serviceSlug: "umbrella-insurance",

    title: "Miami Umbrella Insurance | Extra Liability Protection",
    description: "Get umbrella insurance in Miami, FL. Protect your assets with liability coverage beyond home and auto limits. Affordable protection for Miami-Dade County residents.",

    headline: "Miami Umbrella Insurance",
    subheadline: "Protect your assets and future income with umbrella insurance that extends beyond your home and auto policy limits. Essential coverage for Miami's high-value property owners.",

    overview: [
        "Miami residents often have significant assets to protect—waterfront homes, investment properties, luxury vehicles, and substantial savings. If you're sued for more than your home or auto policy covers, an umbrella policy provides an additional layer of liability protection that can save everything you've worked for.",
        "In Miami's active lifestyle environment, liability risks are everywhere. Pool parties, boating accidents, teen drivers, dog bites, and auto accidents can all result in claims that exceed standard policy limits. Umbrella insurance fills this gap for surprisingly little cost—typically $150-$300 per year for $1 million in coverage.",
        "As an independent agency serving Miami-Dade County, we help you build coordinated protection by ensuring your underlying home and auto policies have sufficient limits to support umbrella coverage, then adding the umbrella layer that protects your assets and future income.",
    ],

    whyNeeded: [
        {
            title: "Miami's High-Value Properties",
            content: "Miami real estate values are among the highest in Florida. A lawsuit from an injury on your property could seek damages matching these high values. Umbrella insurance protects your home equity and other assets from being seized in a judgment.",
        },
        {
            title: "Active Lifestyle Risks",
            content: "Miami residents enjoy pools, boats, jet skis, and outdoor entertaining. These activities increase liability exposure. A guest injured at your pool party or a boating accident could result in claims far exceeding your standard policy limits.",
        },
        {
            title: "Teen and Young Drivers",
            content: "If you have teen drivers on your auto policy, your liability risk increases significantly. A serious accident caused by a young driver could result in claims well above your auto limits. Umbrella coverage provides crucial protection.",
        },
        {
            title: "Protection Beyond Assets",
            content: "Umbrella insurance protects more than current assets—it protects future earnings. Without it, a judgment exceeding your policy limits could result in wage garnishment for years. The small premium is worth long-term protection.",
        },
    ],

    localConsiderations: [
        "Miami's high property values increase potential liability judgments",
        "Pool ownership significantly increases liability exposure",
        "Boating and water sports create additional liability risks",
        "Underlying policy limits typically must be $250K-$500K for umbrella eligibility",
        "Coverage extends to rental properties you own in Miami-Dade",
        "Protects against personal injury claims like libel and slander",
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
            question: "How much umbrella insurance do I need in Miami?",
            answer: "A general guideline is coverage equal to your net worth plus future earning potential. Most Miami homeowners start with $1-2 million. If you own waterfront property, rental properties, or have significant assets, consider higher limits. Coverage is available up to $5 million or more.",
        },
        {
            question: "What does Miami umbrella insurance cost?",
            answer: "Umbrella insurance is surprisingly affordable. A $1 million policy typically costs $150-$300 per year. Each additional million adds only $50-$75/year. For Miami's high-value environment, it's excellent protection at a very low cost.",
        },
        {
            question: "Does umbrella insurance cover my Miami rental property?",
            answer: "Many personal umbrella policies cover rental properties you own, though some exclude or limit this coverage. If you own rental properties in Miami, we can find a policy that includes them or recommend a landlord policy with adequate liability limits.",
        },
        {
            question: "What underlying coverage do I need for umbrella insurance?",
            answer: "To qualify for umbrella coverage, insurers require minimum limits on your underlying home and auto policies—typically $250,000-$500,000 in auto liability and $300,000-$500,000 in homeowners liability. We can help adjust your policies to meet these requirements.",
        },
        {
            question: "Does umbrella insurance cover boating accidents?",
            answer: "Yes, if you have a boat insurance policy with adequate liability limits as underlying coverage, your umbrella typically extends to boating accidents. Given Miami's boating culture, this is important protection for watercraft owners.",
        },
    ],

    relatedServices: [
        { title: "Miami Homeowners Insurance", href: "/locations/miami-fl/homeowners-insurance", description: "Required underlying coverage" },
        { title: "Miami Auto Insurance", href: "/locations/miami-fl/auto-insurance", description: "Required underlying coverage" },
        { title: "Miami Condo Insurance", href: "/locations/miami-fl/condo-insurance", description: "Can serve as underlying coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function MiamiUmbrellaInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
