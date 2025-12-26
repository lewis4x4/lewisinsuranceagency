import { ServicePageTemplate, type ServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: ServicePageData = {
    title: "Homeowners Insurance",
    description: "Protect your Florida home with comprehensive homeowners insurance. Compare quotes from multiple carriers for wind, hurricane, and all-perils coverage.",

    badge: "Personal Insurance",
    headline: "Florida Homeowners Insurance",
    subheadline: "Protect your home and family with comprehensive coverage designed for Florida's unique risks. We'll compare options from multiple carriers to find you the best rate.",

    overview: [
        "Your home is likely your biggest investment, and in Florida, it faces unique challenges from hurricanes, tropical storms, and flooding. A comprehensive homeowners insurance policy protects your dwelling, personal property, and provides liability coverage if someone is injured on your property.",
        "As an independent agency, we work with multiple insurance carriers—including admitted carriers and surplus lines—to find coverage that fits your home and budget. Whether you're a first-time homebuyer or longtime Florida resident, we'll help you understand your options and make an informed decision.",
        "Florida's homeowners insurance market can be challenging, with rising rates and some carriers leaving the state. We stay on top of the market and can help you navigate changes, find new carriers when needed, and ensure you're not overpaying for coverage.",
        "Beyond just finding a policy, we're here to help you through the claims process if you ever need to file. Our team understands Florida property claims and will advocate on your behalf to ensure fair treatment.",
    ],

    coverageIncludes: [
        {
            title: "Dwelling Coverage",
            description: "Protects the structure of your home from covered perils like fire, wind, hail, and more.",
        },
        {
            title: "Other Structures",
            description: "Covers detached structures like fences, sheds, and detached garages.",
        },
        {
            title: "Personal Property",
            description: "Protects your belongings inside the home from theft, fire, and other covered perils.",
        },
        {
            title: "Loss of Use",
            description: "Pays for additional living expenses if your home becomes uninhabitable.",
        },
        {
            title: "Personal Liability",
            description: "Protects you if someone is injured on your property or you damage someone else's property.",
        },
        {
            title: "Medical Payments",
            description: "Covers minor medical expenses for guests injured on your property.",
        },
    ],

    commonExclusions: [
        "Flood damage (requires separate policy)",
        "Earth movement/sinkholes",
        "Wear and tear/neglect",
        "Pest damage (termites, etc.)",
        "Mold (often limited coverage)",
        "Intentional damage",
        "Nuclear hazard",
        "Government action",
    ],

    floridaSpecific: [
        {
            title: "Wind & Hurricane Coverage",
            content: "Florida policies typically include wind coverage, but you may have a separate hurricane deductible (often 2-5% of dwelling coverage). We'll explain your deductible options and help you choose what's right for your situation.",
        },
        {
            title: "4-Point & Wind Mitigation Inspections",
            content: "Many carriers require a 4-point inspection (roof, electrical, plumbing, HVAC) for homes over 25-30 years old. A wind mitigation inspection can earn you significant discounts by documenting hurricane-resistant features.",
        },
        {
            title: "Citizens Property Insurance",
            content: "If you can't find coverage in the private market, Citizens Property Insurance Corporation is Florida's insurer of last resort. We can help you understand if Citizens is your best option or find alternatives.",
        },
        {
            title: "Roof Requirements",
            content: "The age and condition of your roof significantly impacts your insurance options and rates. Some carriers won't insure roofs over 15-20 years old. We'll help you find carriers that work for your situation.",
        },
    ],

    faqs: [
        {
            question: "How much homeowners insurance do I need in Florida?",
            answer: "Your dwelling coverage should be enough to rebuild your home at current construction costs—not your purchase price or market value. We'll help you estimate replacement cost based on your home's square footage, construction type, and features. You'll also want to consider your personal property value, desired liability limits, and any mortgage requirements.",
        },
        {
            question: "What's the difference between actual cash value and replacement cost?",
            answer: "Replacement cost coverage pays to repair or replace damaged items at today's prices without deducting for depreciation. Actual cash value pays the depreciated value—what the item is worth today. Replacement cost coverage is typically worth the extra premium, especially for your dwelling and personal property.",
        },
        {
            question: "Why is Florida homeowners insurance so expensive?",
            answer: "Florida faces unique risks including hurricanes, tropical storms, high humidity (which can cause mold), and one of the highest rates of insurance litigation in the country. Recent legislation has aimed to reduce litigation costs, but rates remain high. Shopping with multiple carriers through an independent agent is one of the best ways to find competitive rates.",
        },
        {
            question: "Do I need flood insurance if I have homeowners insurance?",
            answer: "Yes, if you want flood protection. Standard homeowners policies specifically exclude flood damage. Even if you're not in a designated flood zone, we typically recommend flood insurance—about 25% of flood claims come from low-to-moderate risk areas. Flood insurance is a separate policy through the NFIP or private insurers.",
        },
        {
            question: "How can I lower my homeowners insurance premium?",
            answer: "There are several strategies: increase your deductible (if you can afford higher out-of-pocket costs), get a wind mitigation inspection to document hurricane-resistant features, bundle with auto insurance, install security systems, maintain good credit, and most importantly—let us shop multiple carriers on your behalf to find the best rate.",
        },
    ],

    relatedCoverage: [
        {
            title: "Flood Insurance",
            href: "/personal/flood-insurance-florida",
            description: "Essential protection not included in homeowners policies.",
        },
        {
            title: "Umbrella Insurance",
            href: "/personal/umbrella-insurance-florida",
            description: "Extra liability protection beyond your policy limits.",
        },
        {
            title: "Auto Insurance",
            href: "/personal/auto-insurance-florida",
            description: "Bundle and save on your home and auto.",
        },
    ],

    slug: "homeowners-insurance-florida",
    category: "personal",
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
}

export default function HomeownersInsurancePage() {
    return <ServicePageTemplate data={pageData} />
}
