import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Fort White",
    state: "FL",
    citySlug: "fort-white-fl",
    serviceName: "Auto Insurance",
    serviceSlug: "auto-insurance",

    title: "Fort White Auto Insurance | Columbia County FL",
    description: "Auto insurance in Fort White, FL. Independent agents compare quotes for Columbia County drivers. PIP, liability, full coverage since 1981.",

    headline: "Fort White Auto Insurance",
    subheadline: "Find auto coverage for Columbia County roads. We compare carriers to help Fort White drivers get competitive rates on protection that matters.",

    overview: [
        "Fort White drivers navigate US-27, rural Columbia County roads, and routes to Lake City, High Springs, and Gainesville. Whether commuting or staying local, your auto insurance should protect without breaking the budget.",
        "Florida's no-fault system sets minimum requirements that often leave gaps. As your local independent agency, we help Fort White drivers understand coverage options and find the right protection at affordable rates.",
        "Lewis Insurance Agency has served North Florida since 1981. When you need claims help or coverage questions answered, local agents who know the area handle your needs personally.",
    ],

    whyNeeded: [
        {
            title: "Rural Road Hazards",
            content: "Columbia County's rural roads present wildlife, farm equipment, and limited lighting. Comprehensive coverage protects against these rural driving realities.",
        },
        {
            title: "Uninsured Drivers",
            content: "Florida has high uninsured motorist rates. UM coverage protects when others lack adequate insurance.",
        },
        {
            title: "Highway Travel",
            content: "US-27 and routes to neighboring cities mean highway driving. Proper coverage protects at higher speeds.",
        },
        {
            title: "PIP Limitations",
            content: "Florida's required $10,000 PIP often falls short for serious injuries. Additional coverage protects your assets.",
        },
    ],

    localConsiderations: [
        "Florida requires PIP and PDL minimums",
        "Bodily injury liability recommended",
        "Uninsured motorist coverage essential",
        "Comprehensive covers deer strikes",
        "Bundling discounts available",
        "Local claims support",
    ],

    coverageHighlights: [
        { title: "PIP Coverage", description: "Required medical coverage" },
        { title: "Property Damage", description: "Required liability" },
        { title: "Bodily Injury", description: "Recommended protection" },
        { title: "Uninsured Motorist", description: "Essential coverage" },
        { title: "Collision", description: "Vehicle damage" },
        { title: "Comprehensive", description: "Theft, weather, animals" },
    ],

    faqs: [
        {
            question: "What do you need to quote auto insurance?",
            answer: "Driver information, vehicle details with VINs, your address, current coverage, and driving history help us compare carriers accurately.",
        },
        {
            question: "Can you shop carriers at renewal?",
            answer: "Yes. We review coverage at renewal and compare options. Rates change, and we often find better options.",
        },
        {
            question: "What affects rates in Fort White?",
            answer: "Driving record, vehicle type, coverage levels, and history affect rates. Rural areas often have lower rates than urban Florida.",
        },
        {
            question: "Is uninsured motorist coverage worth it?",
            answer: "Strongly recommended. It protects when uninsured drivers cause accidents, covering your medical expenses and lost wages.",
        },
        {
            question: "Does comprehensive cover deer?",
            answer: "Yes. Animal strikes are comprehensive claims. Wildlife is common near the springs and rural areas.",
        },
        {
            question: "How fast do you provide proof of insurance?",
            answer: "Immediately once bound. We send ID cards electronically right away.",
        },
    ],

    relatedServices: [
        { title: "Fort White Homeowners", href: "/locations/fort-white-fl/homeowners-insurance", description: "Bundle and save" },
        { title: "Fort White Mobile Home", href: "/locations/fort-white-fl/mobile-home-insurance", description: "Manufactured homes" },
        { title: "Columbia County Insurance", href: "/locations/fort-white-fl", description: "All coverage" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function FortWhiteAutoInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
