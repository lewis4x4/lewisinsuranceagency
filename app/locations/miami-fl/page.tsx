import { CityPageTemplate, type CityPageData } from "@/components/templates"
import { generateCityMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: CityPageData = {
    city: "Miami",
    state: "FL",
    county: "Miami-Dade",
    slug: "miami-fl",

    title: "Miami, FL Insurance Agency | Lewis Insurance",
    description: "Find affordable home, auto, flood, and business insurance in Miami, FL. Lewis Insurance compares quotes for Miami residents and businesses.",

    headline: "Insurance Agents in Miami, Florida",
    subheadline: "Get personalized insurance coverage for your Miami home, vehicle, or business. We compare rates from multiple carriers to find you the best deal.",

    overview: [
        "Miami is one of Florida's most dynamic cities, and with that comes unique insurance considerations. From waterfront properties and high-rise condos to busy streets and tropical weather, Miami residents and businesses face distinct risks that require the right insurance coverage.",
        "As an independent insurance agency, Lewis Insurance serves Miami-Dade County with a full range of personal and commercial insurance products. We work with multiple carriers to find coverage that fits your needs and budget—whether you're protecting a Brickell condo, a Coral Gables home, or a business in Wynwood.",
        "Miami's coastal location means hurricane and flood risks are top of mind. We help Miami clients understand their wind and flood exposures, navigate deductibles, and build comprehensive protection. Our team knows the local market and can find solutions when standard carriers aren't an option.",
        "Whether you're new to Miami or a longtime resident, we're here to help you find the right insurance at the right price. Get a free quote today and see why Miami families and businesses trust Lewis Insurance.",
    ],

    localFactors: [
        "Coastal and waterfront properties have higher wind and flood exposure—proper coverage is essential",
        "High-rise condos require HO-6 policies coordinated with building master policies",
        "Miami-Dade has specific building codes and wind mitigation requirements that can affect rates",
        "Auto insurance rates in Miami are among the highest in Florida due to traffic density and uninsured drivers",
        "Flood zones vary significantly—some inland areas still have flood risk from poor drainage",
        "Business insurance needs vary from tourist-focused operations to professional services",
    ],

    neighborhoods: [
        "Downtown Miami",
        "Brickell",
        "Coral Gables",
        "Coconut Grove",
        "South Beach",
        "Wynwood",
        "Little Havana",
        "Kendall",
        "Doral",
        "Miami Beach",
        "Key Biscayne",
        "Aventura",
    ],

    topCoverages: [
        {
            title: "Homeowners Insurance",
            description: "Protect your Miami home from hurricanes, theft, and liability claims.",
            href: "/personal/homeowners-insurance-florida",
        },
        {
            title: "Condo Insurance",
            description: "HO-6 coverage for Miami high-rises and condo communities.",
            href: "/personal/condo-insurance-florida",
        },
        {
            title: "Flood Insurance",
            description: "Essential coverage for Miami's coastal and low-lying areas.",
            href: "/personal/flood-insurance-florida",
        },
        {
            title: "Auto Insurance",
            description: "Navigate Miami traffic with the right coverage.",
            href: "/personal/auto-insurance-florida",
        },
        {
            title: "Business Insurance",
            description: "Protect your Miami business from liability and property risks.",
            href: "/business",
        },
        {
            title: "Commercial Property",
            description: "Coverage for retail, office, and warehouse spaces.",
            href: "/business/business-owners-policy-florida",
        },
    ],

    faqs: [
        {
            question: "Why is Miami home insurance so expensive?",
            answer: "Miami's coastal location creates significant hurricane and flood exposure. The area is also prone to litigation, which increases carrier costs. However, wind mitigation credits, higher deductibles, and shopping multiple carriers can help reduce premiums. We'll help you find the best rates available.",
        },
        {
            question: "Do I need flood insurance in Miami?",
            answer: "We strongly recommend it. Many Miami neighborhoods are in designated flood zones where flood insurance is required for mortgages. Even outside high-risk zones, flooding from heavy rain and poor drainage is common. Standard homeowners policies don't cover flood damage.",
        },
        {
            question: "What's a hurricane deductible in Miami?",
            answer: "Most Miami policies have a separate hurricane deductible—typically 2-5% of your dwelling coverage—that applies when a named hurricane causes damage. On a $500,000 home, a 2% deductible means $10,000 out of pocket. We'll explain your options and help you choose the right deductible.",
        },
        {
            question: "Can you insure older Miami homes?",
            answer: "Yes, though it can be challenging. Many carriers require updated roofs, electrical, and plumbing on older homes. We work with carriers that specialize in older properties and can help you find coverage even for historic Miami homes—often with required updates to qualify.",
        },
        {
            question: "Do you work with Miami businesses?",
            answer: "Absolutely. We provide commercial insurance for Miami businesses of all types—from retail and restaurants to professional services and contractors. We understand local requirements and can help with general liability, workers comp, commercial property, and more.",
        },
    ],
}

export const metadata: Metadata = generateCityMetadata({
    city: pageData.city,
    state: pageData.state,
    slug: pageData.slug,
    title: pageData.title,
    description: pageData.description,
})

export default function MiamiPage() {
    return <CityPageTemplate data={pageData} />
}
