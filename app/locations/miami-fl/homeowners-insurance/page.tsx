import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Miami",
    state: "FL",
    citySlug: "miami-fl",
    serviceName: "Homeowners Insurance",
    serviceSlug: "homeowners-insurance",

    title: "Miami Homeowners Insurance | Compare Quotes",
    description: "Find affordable homeowners insurance in Miami, FL. Compare quotes from multiple carriers for hurricane, wind, and property coverage. Local experts serving Miami-Dade County.",

    headline: "Miami Homeowners Insurance",
    subheadline: "Protect your Miami home with comprehensive coverage designed for South Florida's unique risks. We compare rates from multiple carriers to find you the best deal.",

    overview: [
        "Miami homeowners face unique insurance challenges due to the city's coastal location and hurricane exposure. From waterfront properties in Miami Beach to family homes in Kendall, every Miami residence needs comprehensive protection against wind, storms, and the unexpected.",
        "As an independent insurance agency, we work with multiple carriers—including admitted and surplus lines insurers—to find homeowners coverage that fits your Miami property and budget. We understand the local market and can help you navigate challenges like roof age requirements, wind mitigation credits, and hurricane deductibles.",
        "Miami's insurance market has seen significant changes in recent years, with some carriers leaving the state and rates increasing. We stay on top of these changes and help Miami homeowners find coverage options, compare rates, and make informed decisions about protecting their most valuable asset.",
    ],

    whyNeeded: [
        {
            title: "Hurricane and Wind Protection",
            content: "Miami's location on the Atlantic coast makes it vulnerable to hurricanes and tropical storms. Your homeowners policy provides wind coverage (subject to hurricane deductibles) that protects your home's structure and contents from storm damage.",
        },
        {
            title: "Property Value Protection",
            content: "Miami real estate values have increased significantly. Adequate dwelling coverage ensures you can rebuild your home at current construction costs if disaster strikes—not your purchase price or tax assessment value.",
        },
        {
            title: "Liability Coverage",
            content: "Whether you have a pool, frequently host guests, or simply want peace of mind, liability coverage protects you if someone is injured on your Miami property and you're held responsible.",
        },
        {
            title: "Mortgage Requirements",
            content: "If you have a mortgage on your Miami home, your lender requires homeowners insurance to protect their investment. We help ensure your coverage meets lender requirements while fitting your budget.",
        },
    ],

    localConsiderations: [
        "Hurricane deductibles in Miami typically range from 2-5% of dwelling coverage",
        "Roof age is critical—many carriers won't insure roofs over 15-20 years old",
        "Wind mitigation inspections can save you significant money on premiums",
        "Miami-Dade County has strict building codes that can help with discounts",
        "Flood insurance is separate and highly recommended for Miami properties",
        "High-rise condos require HO-6 policies coordinated with master policies",
    ],

    coverageHighlights: [
        { title: "Dwelling Coverage", description: "Protects your home's structure from covered perils" },
        { title: "Personal Property", description: "Covers belongings inside your home" },
        { title: "Liability Protection", description: "Covers injuries or damage you cause to others" },
        { title: "Loss of Use", description: "Pays living expenses if your home is uninhabitable" },
        { title: "Other Structures", description: "Covers detached garages, fences, and sheds" },
        { title: "Medical Payments", description: "Covers minor injuries to guests" },
    ],

    faqs: [
        {
            question: "How much does Miami homeowners insurance cost?",
            answer: "Miami homeowners insurance costs vary widely based on your home's location, age, construction, roof condition, and coverage limits. Coastal properties and older homes typically cost more. The best way to find competitive rates is to compare quotes from multiple carriers through an independent agent.",
        },
        {
            question: "What's a hurricane deductible in Miami?",
            answer: "Hurricane deductibles are separate from your regular deductible and apply when a named hurricane causes damage. They're typically 2-5% of your dwelling coverage. On a $500,000 home, a 2% hurricane deductible means $10,000 out of pocket before coverage kicks in.",
        },
        {
            question: "Do I need flood insurance with Miami homeowners insurance?",
            answer: "Yes—flood damage is excluded from standard homeowners policies. Given Miami's coastal location and flood-prone areas, we strongly recommend separate flood insurance. Even properties not in high-risk flood zones can experience flooding from heavy rain.",
        },
        {
            question: "Can you insure older Miami homes?",
            answer: "Yes, though it can be challenging. Many carriers require updated roofs, electrical, and plumbing. We work with carriers that specialize in older properties and can help you find coverage, though you may need to make updates to qualify for better rates.",
        },
        {
            question: "What is wind mitigation and why does it matter?",
            answer: "A wind mitigation inspection documents hurricane-resistant features in your home like roof shape, roof-to-wall connections, and opening protection. These features can earn significant premium discounts in Miami—often saving hundreds or thousands per year.",
        },
    ],

    relatedServices: [
        { title: "Miami Flood Insurance", href: "/locations/miami-fl/flood-insurance", description: "Essential coverage not included in homeowners" },
        { title: "Miami Auto Insurance", href: "/locations/miami-fl/auto-insurance", description: "Bundle and save on home and auto" },
        { title: "Miami Condo Insurance", href: "/locations/miami-fl/condo-insurance", description: "HO-6 coverage for Miami condos" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function MiamiHomeownersInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
