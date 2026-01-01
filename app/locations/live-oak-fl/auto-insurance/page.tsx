import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Live Oak",
    state: "FL",
    citySlug: "live-oak-fl",
    serviceName: "Auto Insurance",
    serviceSlug: "auto-insurance",

    title: "Live Oak Auto Insurance | Suwannee County FL",
    description: "Auto insurance in Live Oak, FL. Independent agents compare quotes for Suwannee County drivers. PIP, liability, full coverage options since 1981.",

    headline: "Live Oak Auto Insurance",
    subheadline: "Find the right auto insurance for Suwannee County roads. We compare carriers to get Live Oak drivers competitive rates on coverage that actually protects.",

    overview: [
        "Live Oak drivers travel US-129, US-90, and rural Suwannee County roads every day. Whether you're commuting to work, heading to Spirit of the Suwannee Music Park, or driving county backroads, your auto insurance should protect you without breaking the budget.",
        "Florida's no-fault insurance requirements set minimum standards, but those minimums often leave Suwannee County families exposed. As your local independent agency, we help Live Oak drivers understand the gaps and find coverage that truly protects when accidents happen.",
        "Lewis Insurance Agency has served North Florida since 1981. We know Live Oak and Suwannee County—when you have questions or need to file a claim, you'll work with local agents who understand rural Florida driving and care about their neighbors.",
    ],

    whyNeeded: [
        {
            title: "Rural Road Risks",
            content: "Suwannee County's rural roads present unique hazards—farm equipment, wildlife crossings, and limited emergency response times. Comprehensive coverage protects against these rural driving realities.",
        },
        {
            title: "High Uninsured Motorist Rate",
            content: "Florida has one of the nation's highest rates of uninsured drivers. Uninsured motorist coverage protects Live Oak drivers when others don't carry adequate insurance.",
        },
        {
            title: "Highway Traffic on US-129",
            content: "US-129 and US-90 carry significant traffic through Live Oak. Highway speeds mean highway risks—proper liability and collision coverage protect your family and finances.",
        },
        {
            title: "No-Fault Coverage Gaps",
            content: "Florida's PIP provides only $10,000 in medical coverage. Serious accidents easily exceed this limit. Bodily injury liability protects your assets if you're at fault.",
        },
    ],

    localConsiderations: [
        "Florida requires PIP ($10,000) and PDL ($10,000) minimum",
        "Bodily injury liability strongly recommended",
        "Uninsured motorist coverage essential in Suwannee County",
        "Comprehensive covers deer and livestock strikes",
        "Multi-vehicle and bundling discounts available",
        "Local claims handling from agents who know you",
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
            question: "What information do you need to quote auto insurance?",
            answer: "We'll need driver information for everyone in your household, vehicle details including VINs, your address, current coverage if any, and driving history. This helps us compare quotes from multiple carriers accurately.",
        },
        {
            question: "Can you shop multiple carriers at renewal?",
            answer: "Absolutely. As an independent agency, we regularly review your coverage at renewal. Auto insurance markets change, and we can often find better rates or improved coverage by comparing carriers.",
        },
        {
            question: "What affects my auto insurance rate in Live Oak?",
            answer: "Your driving record, age, vehicle type, coverage levels, and credit history all affect rates. Suwannee County's rural setting often means more affordable rates than urban Florida, but factors like vehicle age and usage still matter.",
        },
        {
            question: "Is uninsured motorist coverage worth it in Florida?",
            answer: "Yes. With roughly 20% of Florida drivers uninsured, UM coverage is essential protection. It covers your medical expenses and lost wages if an uninsured driver hits you—something state minimums don't fully address.",
        },
        {
            question: "Does comprehensive cover hitting a deer?",
            answer: "Yes. Animal strikes are covered under comprehensive (not collision) coverage. With deer, livestock, and wildlife common in Suwannee County, comprehensive coverage is particularly important for rural drivers.",
        },
        {
            question: "How quickly can I get proof of insurance?",
            answer: "Once your policy is bound, we provide proof of insurance immediately. Need ID cards for a vehicle purchase or registration? We can send them right away electronically or print them in our office.",
        },
    ],

    relatedServices: [
        { title: "Live Oak Homeowners Insurance", href: "/locations/live-oak-fl/homeowners-insurance", description: "Bundle home and auto for savings" },
        { title: "Live Oak Mobile Home Insurance", href: "/locations/live-oak-fl/mobile-home-insurance", description: "Manufactured home coverage" },
        { title: "Suwannee County Insurance", href: "/locations/live-oak-fl", description: "All insurance services" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function LiveOakAutoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
