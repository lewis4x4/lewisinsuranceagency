import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Jacksonville",
    state: "FL",
    citySlug: "jacksonville-fl",
    serviceName: "Auto Insurance",
    serviceSlug: "auto-insurance",

    title: "Jacksonville Auto Insurance | Compare Quotes",
    description: "Find affordable auto insurance in Jacksonville, FL. Compare quotes. I-95 commuters and Duval County drivers. PIP and full coverage options.",

    headline: "Jacksonville Auto Insurance",
    subheadline: "Get reliable auto insurance coverage for Jacksonville roads. We compare rates from multiple carriers to find protection that fits your driving needs and budget.",

    overview: [
        "Jacksonville drivers navigate some of Florida's busiest roads, from I-95 and I-295 to the Hart and Dames Point bridges. As the largest city by area in the contiguous U.S., Jacksonville residents often have longer commutes than other Florida cities, making adequate auto insurance essential.",
        "Florida's no-fault insurance system requires specific coverages, but state minimums often leave dangerous gaps. As an independent agency, we help Jacksonville drivers understand their options and find coverage that provides real protection without overpaying.",
        "Whether you're commuting downtown, driving to the beaches, or traveling throughout Duval County, we can help you find auto insurance that protects you from Jacksonville's driving risks—including Florida's high uninsured motorist rate.",
    ],

    whyNeeded: [
        {
            title: "Interstate Highway Traffic",
            content: "Jacksonville's I-95, I-10, and I-295 see heavy traffic with frequent accidents. Highway speeds mean more severe accidents, making adequate coverage essential for protecting yourself and your vehicle.",
        },
        {
            title: "Florida's Uninsured Drivers",
            content: "Florida has one of the highest uninsured motorist rates—around 20%. Uninsured motorist coverage protects Jacksonville drivers when hit by someone without adequate insurance.",
        },
        {
            title: "Long Commuting Distances",
            content: "Jacksonville's sprawling geography means longer commutes for many residents. More time on the road means more exposure to accidents, making proper coverage more important.",
        },
        {
            title: "Bridge and Water Crossings",
            content: "Jacksonville's many bridges over the St. Johns River create unique traffic patterns. Accidents on bridges can be particularly costly, and proper coverage protects you from these risks.",
        },
    ],

    localConsiderations: [
        "Florida requires PIP ($10,000) and PDL ($10,000) at minimum",
        "Bodily injury liability strongly recommended though not required",
        "Uninsured motorist coverage essential given Florida's high uninsured rate",
        "Comprehensive coverage protects against flooding from tropical storms",
        "Multi-vehicle discounts available for families",
        "Bundle with homeowners for additional savings",
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
            question: "How much does auto insurance cost in Jacksonville?",
            answer: "Jacksonville auto insurance costs depend on your driving record, vehicle, coverage levels, age, and other factors. Rates in Northeast Florida are often more competitive than South Florida. We compare quotes from multiple carriers to find competitive pricing.",
        },
        {
            question: "What auto insurance is required in Florida?",
            answer: "Florida requires PIP (Personal Injury Protection) of $10,000 and Property Damage Liability of $10,000. These minimums leave significant gaps. We recommend adding bodily injury liability and uninsured motorist coverage.",
        },
        {
            question: "Is Jacksonville auto insurance cheaper than South Florida?",
            answer: "Generally yes. Jacksonville's location in Northeast Florida means lower overall risk compared to densely populated South Florida. However, rates still reflect individual factors like driving record, vehicle type, and coverage levels.",
        },
        {
            question: "Should I get uninsured motorist coverage in Jacksonville?",
            answer: "Absolutely. With roughly 20% of Florida drivers uninsured, UM coverage is essential. It protects you if an uninsured or underinsured driver hits you—covering medical expenses and lost wages your PIP doesn't cover.",
        },
        {
            question: "Does auto insurance cover flooding from hurricanes?",
            answer: "Comprehensive coverage (not collision or liability) covers flood damage to your vehicle. If your car floods during a storm, comprehensive pays for repairs or replacement. Given Jacksonville's hurricane exposure, comprehensive is recommended.",
        },
    ],

    relatedServices: [
        { title: "Jacksonville Homeowners Insurance", href: "/locations/jacksonville-fl/homeowners-insurance", description: "Bundle home and auto for savings" },
        { title: "Jacksonville Flood Insurance", href: "/locations/jacksonville-fl/flood-insurance", description: "Home flood protection" },
        { title: "Jacksonville Condo Insurance", href: "/locations/jacksonville-fl/condo-insurance", description: "Coverage for condo owners" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function JacksonvilleAutoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
