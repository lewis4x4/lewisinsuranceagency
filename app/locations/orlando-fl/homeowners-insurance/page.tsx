import { CityServicePageTemplate, type CityServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: CityServicePageData = {
    city: "Orlando",
    state: "FL",
    citySlug: "orlando-fl",
    serviceName: "Homeowners Insurance",
    serviceSlug: "homeowners-insurance",

    title: "Orlando Homeowners Insurance | Compare Quotes",
    description: "Find affordable homeowners insurance in Orlando, FL. Compare quotes for hurricane, sinkhole, and property coverage. Serving Orange County.",

    headline: "Orlando Homeowners Insurance",
    subheadline: "Protect your Orlando home with comprehensive coverage tailored to Central Florida's unique risks. We compare rates from multiple carriers to find the best coverage for your property.",

    overview: [
        "Orlando homeowners face unique insurance challenges including hurricane exposure, sinkhole risks, and extreme weather. From family homes in Dr. Phillips to new construction in Lake Nona, every Orlando property needs comprehensive protection against Central Florida's diverse perils.",
        "As an independent insurance agency, we work with multiple carriers—including admitted and surplus lines insurers—to find homeowners coverage that fits your Orlando property and budget. We understand the local market dynamics and can help you navigate roof age requirements, wind mitigation credits, and hurricane deductibles.",
        "While Orlando is inland and faces less hurricane risk than coastal cities, the area still experiences significant wind events, tropical storms, and the occasional tornado. Combine that with Florida's unique sinkhole exposure, and proper homeowners insurance becomes essential for protecting your investment.",
    ],

    whyNeeded: [
        {
            title: "Hurricane and Wind Protection",
            content: "Although Orlando is inland, hurricanes and tropical storms still impact Central Florida with damaging winds. Your homeowners policy provides wind coverage (subject to hurricane deductibles) that protects your home's structure and contents from storm damage.",
        },
        {
            title: "Sinkhole Coverage Considerations",
            content: "Central Florida sits on limestone bedrock, making sinkhole activity a real concern. While standard policies include catastrophic ground cover collapse coverage, additional sinkhole coverage may be needed for comprehensive protection.",
        },
        {
            title: "Property Value Protection",
            content: "Orlando real estate values have increased significantly with population growth. Adequate dwelling coverage ensures you can rebuild your home at current construction costs—not your purchase price or tax assessment value.",
        },
        {
            title: "Liability Coverage",
            content: "Whether you have a pool, frequently host guests, or simply want peace of mind, liability coverage protects you if someone is injured on your Orlando property and you're held responsible.",
        },
    ],

    localConsiderations: [
        "Hurricane deductibles in Orlando typically range from 2-5% of dwelling coverage",
        "Roof age requirements—many carriers won't insure roofs over 15-20 years old",
        "Wind mitigation inspections can provide significant premium discounts",
        "Sinkhole coverage may require additional endorsement or separate policy",
        "Flood insurance is separate and recommended even for inland properties",
        "New construction in Lake Nona and similar areas may qualify for better rates",
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
            question: "How much does Orlando homeowners insurance cost?",
            answer: "Orlando homeowners insurance costs vary based on your home's location, age, construction, roof condition, and coverage limits. Central Florida rates are generally lower than coastal areas but have increased in recent years. The best way to find competitive rates is to compare quotes from multiple carriers.",
        },
        {
            question: "Does Orlando homeowners insurance cover sinkholes?",
            answer: "Standard Florida homeowners policies include catastrophic ground cover collapse coverage, which covers sudden sinkhole damage that makes the home uninhabitable. For broader sinkhole coverage, you may need an additional endorsement. We can help you understand your options.",
        },
        {
            question: "Do I need flood insurance in Orlando?",
            answer: "Flood damage is excluded from standard homeowners policies. While Orlando is inland, the area has experienced flooding from heavy rainfall and tropical storms. We recommend flood insurance for most Orlando homeowners, especially those near lakes or in flood-prone areas.",
        },
        {
            question: "What's a hurricane deductible in Orlando?",
            answer: "Hurricane deductibles are separate from your regular deductible and apply when a named hurricane causes damage. They're typically 2-5% of your dwelling coverage. On a $400,000 home, a 2% hurricane deductible means $8,000 out of pocket before coverage kicks in.",
        },
        {
            question: "Can new Orlando homes get better insurance rates?",
            answer: "Often yes. Newer homes built to modern Florida building codes typically qualify for better rates due to updated roofs, impact-resistant features, and overall construction quality. Lake Nona and other new developments often see favorable insurance pricing.",
        },
    ],

    relatedServices: [
        { title: "Orlando Flood Insurance", href: "/locations/orlando-fl/flood-insurance", description: "Essential coverage not included in homeowners" },
        { title: "Orlando Auto Insurance", href: "/locations/orlando-fl/auto-insurance", description: "Bundle and save on home and auto" },
        { title: "Orlando Condo Insurance", href: "/locations/orlando-fl/condo-insurance", description: "HO-6 coverage for Orlando condos" },
    ],
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
    alternates: {
        canonical: `https://lewisinsurance.com/locations/${pageData.citySlug}/${pageData.serviceSlug}`,
    },
}

export default function OrlandoHomeownersInsurancePage() {
    return <CityServicePageTemplate data={pageData} />
}
