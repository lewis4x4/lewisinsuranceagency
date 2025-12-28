import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "West Palm Beach",
    state: "FL",
    citySlug: "west-palm-beach-fl",
    serviceName: "Homeowners Insurance",
    serviceSlug: "homeowners-insurance",

    title: "West Palm Beach Homeowners Insurance | Compare Quotes",
    description: "Find affordable homeowners insurance in West Palm Beach, FL. Compare quotes for hurricane, wind, and flood coverage. Serving Palm Beach County homeowners.",

    headline: "West Palm Beach Homeowners Insurance",
    subheadline: "Protect your West Palm Beach home with comprehensive coverage designed for Palm Beach County's coastal risks. We compare rates from multiple carriers to find the best protection for your property.",

    overview: [
        "West Palm Beach homeowners face significant insurance challenges due to the area's Atlantic coast location and hurricane exposure. From waterfront estates to suburban family homes, every Palm Beach County property needs robust protection against wind, water, and storm damage.",
        "As an independent insurance agency, we work with multiple carriers—including admitted and surplus lines insurers—to find homeowners coverage that fits your West Palm Beach property and budget. We understand the local market and help you navigate wind mitigation credits, hurricane deductibles, and roof requirements.",
        "The Palm Beach County insurance market has experienced significant changes with some carriers leaving Florida and rates increasing. We stay current with market conditions and help West Palm Beach homeowners compare options, understand their coverage, and protect their most valuable investment.",
    ],

    whyNeeded: [
        {
            title: "Hurricane and Wind Protection",
            content: "West Palm Beach's location on Florida's Atlantic coast makes it highly vulnerable to hurricanes and tropical storms. Your homeowners policy provides wind coverage (subject to hurricane deductibles) essential for protecting your home and contents.",
        },
        {
            title: "Coastal Property Values",
            content: "Palm Beach County real estate values are among the highest in Florida. Adequate dwelling coverage ensures you can rebuild at current construction costs—not your purchase price or tax assessment.",
        },
        {
            title: "Liability Coverage",
            content: "Whether you have a pool, host guests frequently, or simply want protection, liability coverage protects you if someone is injured on your West Palm Beach property.",
        },
        {
            title: "Lender Requirements",
            content: "If you have a mortgage, your lender requires homeowners insurance. We help ensure your coverage meets lender requirements while fitting your budget and providing real protection.",
        },
    ],

    localConsiderations: [
        "Hurricane deductibles typically range from 2-5% of dwelling coverage",
        "Roof age is critical—many carriers won't insure roofs over 15 years old",
        "Wind mitigation inspections provide significant premium savings",
        "Waterfront properties face additional underwriting scrutiny",
        "Flood insurance is separate and essential for coastal Palm Beach County",
        "Impact-resistant windows and doors can lower premiums significantly",
    ],

    coverageHighlights: [
        { title: "Dwelling Coverage", description: "Protects your home's structure from covered perils" },
        { title: "Personal Property", description: "Covers belongings inside your home" },
        { title: "Liability Protection", description: "Covers injuries or damage you cause to others" },
        { title: "Loss of Use", description: "Pays living expenses if your home is uninhabitable" },
        { title: "Other Structures", description: "Covers detached garages, fences, and pool equipment" },
        { title: "Medical Payments", description: "Covers minor injuries to guests" },
    ],

    faqs: [
        {
            question: "How much does homeowners insurance cost in West Palm Beach?",
            answer: "West Palm Beach homeowners insurance costs vary significantly based on your home's location (coastal vs. inland), age, construction, roof condition, and coverage limits. Waterfront and older properties typically cost more. Compare quotes from multiple carriers to find competitive rates.",
        },
        {
            question: "What's a hurricane deductible in West Palm Beach?",
            answer: "Hurricane deductibles are separate from regular deductibles and apply only when a named hurricane causes damage. They're typically 2-5% of dwelling coverage. On a $600,000 home, a 2% hurricane deductible means $12,000 out of pocket before coverage kicks in.",
        },
        {
            question: "Do I need flood insurance in West Palm Beach?",
            answer: "Yes—flood damage is excluded from homeowners policies. Given West Palm Beach's coastal location and flood zones, flood insurance is essential. Many properties require it for mortgages, and we recommend it even in lower-risk zones.",
        },
        {
            question: "Can you insure waterfront homes in West Palm Beach?",
            answer: "Yes, though waterfront properties require specialized underwriting. We work with carriers that insure coastal and waterfront properties in Palm Beach County. Wind mitigation features and updated construction significantly help with coverage and pricing.",
        },
        {
            question: "What wind mitigation features help with West Palm Beach insurance?",
            answer: "Hurricane shutters, impact-resistant windows/doors, hip roofs, roof-to-wall straps, and secondary water resistance all qualify for discounts. A wind mitigation inspection documents these features and can save thousands annually.",
        },
    ],

    relatedServices: [
        { title: "West Palm Beach Flood Insurance", href: "/locations/west-palm-beach-fl/flood-insurance", description: "Essential coastal coverage" },
        { title: "West Palm Beach Auto Insurance", href: "/locations/west-palm-beach-fl/auto-insurance", description: "Bundle and save on home and auto" },
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

export default function WestPalmBeachHomeownersInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
