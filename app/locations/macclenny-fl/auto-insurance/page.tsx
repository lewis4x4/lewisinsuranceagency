import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Macclenny",
    state: "FL",
    citySlug: "macclenny-fl",
    serviceName: "Auto Insurance",
    serviceSlug: "auto-insurance",

    title: "Macclenny Auto Insurance | Baker County FL",
    description: "Auto insurance in Macclenny, FL. Independent agents compare quotes for Baker County drivers. I-10 commuters, PIP, full coverage since 1981.",

    headline: "Macclenny Auto Insurance",
    subheadline: "Find auto coverage that fits Baker County drivers. From I-10 commuters to local routes, we compare carriers to get competitive rates on protection that matters.",

    overview: [
        "Macclenny drivers travel I-10 to Jacksonville, SR-121 through town, and rural Baker County roads daily. Whether commuting to work or staying local, your auto insurance should protect you without straining the budget.",
        "Florida's no-fault insurance sets minimum requirements, but those minimums leave dangerous gaps—especially for highway commuters. As your local independent agency, we help Macclenny drivers understand coverage options and find the right balance of protection and affordability.",
        "Lewis Insurance Agency has served North Florida since 1981. When you need claim assistance or have coverage questions, you'll work with local agents who understand Baker County and care about helping neighbors.",
    ],

    whyNeeded: [
        {
            title: "I-10 Highway Driving",
            content: "Many Macclenny residents commute on I-10. Highway speeds mean highway risks—accidents at 70 mph have different consequences than fender benders in town. Adequate liability and collision coverage is essential.",
        },
        {
            title: "Uninsured Driver Protection",
            content: "Florida has a high rate of uninsured motorists. Uninsured motorist coverage protects Baker County drivers when someone without adequate insurance causes an accident.",
        },
        {
            title: "Rural Road Hazards",
            content: "Baker County's rural roads have wildlife, limited lighting, and farm equipment. Comprehensive coverage protects against these realities that urban drivers rarely encounter.",
        },
        {
            title: "PIP Coverage Gaps",
            content: "Florida's required PIP provides only $10,000 in medical coverage. Serious accidents—especially on I-10—easily exceed this limit. Bodily injury liability protects your assets.",
        },
    ],

    localConsiderations: [
        "Florida requires PIP ($10,000) and PDL ($10,000) minimum",
        "Bodily injury liability strongly recommended for commuters",
        "Uninsured motorist coverage essential",
        "Comprehensive covers deer strikes on rural roads",
        "Multi-vehicle and bundling discounts available",
        "Local claims support from nearby agents",
    ],

    coverageHighlights: [
        { title: "PIP Coverage", description: "Required medical coverage regardless of fault" },
        { title: "Property Damage Liability", description: "Required for damage you cause" },
        { title: "Bodily Injury Liability", description: "Recommended if you injure others" },
        { title: "Uninsured Motorist", description: "Protection from uninsured drivers" },
        { title: "Collision Coverage", description: "Your vehicle in accidents" },
        { title: "Comprehensive", description: "Theft, weather, animal strikes" },
    ],

    faqs: [
        {
            question: "What information do you need to quote auto insurance?",
            answer: "We'll need driver information for your household, vehicle details including VINs, your Macclenny address, current coverage if any, and driving history for accurate carrier comparisons.",
        },
        {
            question: "Can you shop multiple carriers at renewal?",
            answer: "Yes. As an independent agency, we review coverage at renewal and compare carriers. Auto rates fluctuate, and we often find better options for Baker County drivers.",
        },
        {
            question: "Does commuting on I-10 affect my rate?",
            answer: "Highway commuting is factored into your profile. While it may affect rates, we compare carriers to find competitive options for Macclenny commuters traveling to Jacksonville.",
        },
        {
            question: "Is uninsured motorist coverage necessary?",
            answer: "Strongly recommended. Many Florida drivers lack adequate insurance. UM coverage protects you when others can't pay—covering medical expenses and lost wages.",
        },
        {
            question: "Does comprehensive cover deer strikes?",
            answer: "Yes. Animal collisions are covered under comprehensive. With wildlife common in Baker County, this coverage provides valuable protection for rural drivers.",
        },
        {
            question: "How fast can I get proof of insurance?",
            answer: "Once bound, we provide proof immediately. Need ID cards for registration or a vehicle purchase? We send them electronically right away.",
        },
    ],

    relatedServices: [
        { title: "Macclenny Homeowners Insurance", href: "/locations/macclenny-fl/homeowners-insurance", description: "Bundle home and auto" },
        { title: "Macclenny Mobile Home Insurance", href: "/locations/macclenny-fl/mobile-home-insurance", description: "Manufactured home coverage" },
        { title: "Baker County Insurance", href: "/locations/macclenny-fl", description: "All coverage options" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function MacclennyAutoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
