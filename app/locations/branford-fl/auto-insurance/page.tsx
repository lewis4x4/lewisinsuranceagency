import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Branford",
    state: "FL",
    citySlug: "branford-fl",
    serviceName: "Auto Insurance",
    serviceSlug: "auto-insurance",

    title: "Branford Auto Insurance | Suwannee County FL",
    description: "Auto insurance in Branford, FL. Independent agents compare quotes for Suwannee County drivers. PIP, liability, full coverage since 1981.",

    headline: "Branford Auto Insurance",
    subheadline: "Find affordable auto coverage for Suwannee County roads. We compare carriers to help Branford drivers get competitive rates on protection that matters.",

    overview: [
        "Branford drivers navigate US-27, rural Suwannee County roads, and routes connecting to Live Oak, High Springs, and beyond. Whether you're commuting to work or enjoying the rivers, your auto insurance should protect you without straining your budget.",
        "Florida's no-fault insurance laws require minimum coverage, but those minimums often leave dangerous gaps. As your local independent agency, we help Branford drivers understand what's required versus what's recommended—and find the right balance of protection and affordability.",
        "Lewis Insurance Agency has served North Florida since 1981. When you need help with a claim or have questions about your coverage, you'll work with local agents who know the area and care about helping neighbors.",
    ],

    whyNeeded: [
        {
            title: "Rural Road Hazards",
            content: "Suwannee County's rural roads present unique risks—wildlife crossings, farm equipment, and limited lighting. Comprehensive coverage protects against these rural driving realities that urban drivers rarely face.",
        },
        {
            title: "Uninsured Driver Protection",
            content: "Florida has a high rate of uninsured drivers. Uninsured motorist coverage protects Branford drivers when someone without adequate insurance causes an accident.",
        },
        {
            title: "Highway Travel on US-27",
            content: "US-27 carries significant traffic through the area. Highway speeds mean highway risks—proper liability and collision coverage protect your family and assets.",
        },
        {
            title: "PIP Coverage Limitations",
            content: "Florida's required PIP provides only $10,000 in medical coverage. Serious accidents easily exceed this. Bodily injury liability protects your assets if you're at fault.",
        },
    ],

    localConsiderations: [
        "Florida requires PIP ($10,000) and PDL ($10,000) minimum",
        "Bodily injury liability strongly recommended for asset protection",
        "Uninsured motorist coverage essential in rural Florida",
        "Comprehensive covers deer strikes common near rivers",
        "Multi-vehicle and bundling discounts available",
        "Local claims support from agents who know the area",
    ],

    coverageHighlights: [
        { title: "PIP Coverage", description: "Required medical coverage regardless of fault" },
        { title: "Property Damage Liability", description: "Required coverage for damage you cause" },
        { title: "Bodily Injury Liability", description: "Recommended protection if you injure others" },
        { title: "Uninsured Motorist", description: "Protection from uninsured drivers" },
        { title: "Collision Coverage", description: "Covers your vehicle in accidents" },
        { title: "Comprehensive", description: "Theft, weather, and animal strikes" },
    ],

    faqs: [
        {
            question: "What information do you need to quote auto insurance?",
            answer: "We'll need driver information for your household, vehicle details including VINs, your Branford address, current coverage if any, and driving history. This helps us compare quotes accurately from multiple carriers.",
        },
        {
            question: "Can you shop multiple carriers at renewal?",
            answer: "Yes. As an independent agency, we regularly review coverage at renewal time. Auto rates change, and we can often find better options by comparing carriers for Branford drivers.",
        },
        {
            question: "What affects auto insurance rates in Branford?",
            answer: "Your driving record, age, vehicle type, coverage levels, and credit history affect rates. Suwannee County's rural location often means lower rates than urban Florida, but individual factors still matter.",
        },
        {
            question: "Is uninsured motorist coverage necessary?",
            answer: "Strongly recommended. With many Florida drivers uninsured, UM coverage protects you when others lack adequate insurance. It covers medical expenses and lost wages if an uninsured driver hits you.",
        },
        {
            question: "Does comprehensive cover hitting a deer?",
            answer: "Yes. Animal strikes are covered under comprehensive coverage. With wildlife common near the rivers and rural areas around Branford, comprehensive is particularly valuable.",
        },
        {
            question: "How fast can I get proof of insurance?",
            answer: "Once your policy is bound, we provide proof of insurance immediately. Need ID cards for registration or a vehicle purchase? We can send them electronically right away.",
        },
    ],

    relatedServices: [
        { title: "Branford Homeowners Insurance", href: "/locations/branford-fl/homeowners-insurance", description: "Bundle home and auto" },
        { title: "Branford Boat Insurance", href: "/locations/branford-fl/boat-insurance", description: "River and spring coverage" },
        { title: "Suwannee County Insurance", href: "/locations/branford-fl", description: "All coverage options" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function BranfordAutoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
