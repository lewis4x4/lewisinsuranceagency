import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "West Palm Beach",
    state: "FL",
    citySlug: "west-palm-beach-fl",
    serviceName: "Auto Insurance",
    serviceSlug: "auto-insurance",

    title: "West Palm Beach Auto Insurance | Compare Quotes",
    description: "Find affordable auto insurance in West Palm Beach, FL. Compare quotes for Palm Beach County drivers. PIP, liability, and full coverage options.",

    headline: "West Palm Beach Auto Insurance",
    subheadline: "Get reliable auto insurance coverage for West Palm Beach roads. We compare rates from multiple carriers to find protection that fits your driving needs and budget.",

    overview: [
        "West Palm Beach drivers navigate busy roads from I-95 to Okeechobee Boulevard, facing traffic from commuters, tourists, and seasonal residents. With Palm Beach County's diverse driving environment, proper auto insurance is essential for protecting yourself and your vehicle.",
        "Florida's no-fault insurance system requires specific coverages, but state minimums often aren't enough protection. As an independent agency, we help West Palm Beach drivers understand their options and find coverage that goes beyond basics without overpaying.",
        "Whether you're commuting to downtown West Palm Beach, traveling to the beaches, or driving throughout Palm Beach County, we can help you find auto insurance that truly protects you from the area's driving risks.",
    ],

    whyNeeded: [
        {
            title: "I-95 Corridor Traffic",
            content: "I-95 through Palm Beach County sees heavy traffic and frequent accidents. Higher accident rates mean higher risk—and the importance of adequate coverage to protect yourself and your family.",
        },
        {
            title: "Seasonal Traffic Increases",
            content: "Palm Beach County's population swells during winter months with seasonal residents and tourists. More drivers means more accident risk and greater importance of uninsured motorist coverage.",
        },
        {
            title: "Florida's Uninsured Drivers",
            content: "Florida has one of the highest uninsured motorist rates—around 20%. Uninsured motorist coverage protects you when hit by a driver without adequate insurance.",
        },
        {
            title: "Comprehensive for Weather",
            content: "Palm Beach County experiences hurricanes, tropical storms, and severe weather. Comprehensive coverage protects your vehicle from flood damage, hail, and falling debris during storms.",
        },
    ],

    localConsiderations: [
        "Florida requires PIP ($10,000) and PDL ($10,000) at minimum",
        "Bodily injury liability is strongly recommended though not required",
        "Uninsured motorist coverage essential with Florida's high uninsured rate",
        "Comprehensive coverage protects against hurricane and flood damage to vehicles",
        "I-95 commuters may benefit from higher coverage limits",
        "Seasonal rate changes may apply in Palm Beach County",
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
            question: "How much does auto insurance cost in West Palm Beach?",
            answer: "West Palm Beach auto insurance costs depend on your driving record, vehicle, coverage levels, age, and other factors. Palm Beach County rates are generally in line with Florida averages. Compare quotes from multiple carriers to find competitive pricing.",
        },
        {
            question: "What auto insurance is required in Florida?",
            answer: "Florida requires PIP (Personal Injury Protection) of $10,000 and Property Damage Liability of $10,000. These minimums leave significant gaps. We recommend adding bodily injury liability and uninsured motorist coverage.",
        },
        {
            question: "Should I get comprehensive coverage in West Palm Beach?",
            answer: "We recommend comprehensive coverage for West Palm Beach vehicles. It covers flood damage, hurricane damage, theft, vandalism, and animal strikes—all relevant risks in coastal Palm Beach County.",
        },
        {
            question: "Does auto insurance cover hurricane damage to my car?",
            answer: "Comprehensive coverage (not collision) covers hurricane damage to your vehicle—including wind, flood, and falling debris. Collision coverage does not cover weather damage. Most lenders require comprehensive if you're financing.",
        },
        {
            question: "Can I bundle auto with home insurance in West Palm Beach?",
            answer: "Yes, and you should. Bundling home and auto insurance typically saves 10-25% on premiums. We can quote both together and find the carriers that offer the best bundle discounts for Palm Beach County.",
        },
    ],

    relatedServices: [
        { title: "West Palm Beach Homeowners Insurance", href: "/locations/west-palm-beach-fl/homeowners-insurance", description: "Bundle home and auto for savings" },
        { title: "West Palm Beach Flood Insurance", href: "/locations/west-palm-beach-fl/flood-insurance", description: "Home flood protection" },
        { title: "Palm Beach County Insurance", href: "/locations/west-palm-beach-fl", description: "All insurance services" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function WestPalmBeachAutoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
