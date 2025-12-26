import { ServicePageTemplate, type ServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: ServicePageData = {
    title: "Flood Insurance",
    description: "Protect your Florida property from flood damage with comprehensive flood insurance. Compare NFIP and private flood insurance options.",

    badge: "Personal Insurance",
    headline: "Florida Flood Insurance",
    subheadline: "Don't let flooding catch you unprotected. Whether through the NFIP or private insurers, we'll help you find flood coverage that fits your property and budget.",

    overview: [
        "Florida is one of the most flood-prone states in the nation, and standard homeowners insurance policies specifically exclude flood damage. If your home floods—whether from a hurricane, tropical storm, heavy rainfall, or rising water—you'll need a separate flood insurance policy to be covered.",
        "Many Florida homeowners are surprised to learn that flood insurance isn't included in their homeowners policy. In fact, about 25% of flood claims come from properties outside designated high-risk flood zones. If it can rain, it can flood—and in Florida, it rains a lot.",
        "There are two main options for flood insurance: the National Flood Insurance Program (NFIP), which is federally backed, and private flood insurance carriers. We can help you compare both options to find the best coverage and rates for your property.",
        "If you have a mortgage on a property in a high-risk flood zone (zones starting with A or V), your lender will require flood insurance. But even if it's not required, we strongly recommend flood coverage for Florida property owners. The average flood claim is over $50,000—damage that would be devastating without coverage.",
    ],

    coverageIncludes: [
        {
            title: "Building Coverage",
            description: "Covers the physical structure of your home, including foundation, walls, floors, and permanently installed fixtures.",
        },
        {
            title: "Contents Coverage",
            description: "Protects your personal belongings inside the home from flood damage.",
        },
        {
            title: "Basement Coverage (Limited)",
            description: "Limited coverage for basement improvements and contents in NFIP policies.",
        },
        {
            title: "Debris Removal",
            description: "Covers the cost of removing flood-deposited debris from your property.",
        },
        {
            title: "Loss Avoidance Measures",
            description: "Some policies cover costs to protect your property when flooding is imminent.",
        },
        {
            title: "Increased Cost of Compliance",
            description: "NFIP coverage to help bring your home up to current flood codes after a loss.",
        },
    ],

    commonExclusions: [
        "Damage from moisture, mildew, or mold that could have been prevented",
        "Currency, precious metals, and valuable papers",
        "Property outside the building (landscaping, fences, pools)",
        "Living expenses while displaced",
        "Financial losses from business interruption",
        "Vehicles (covered under auto insurance)",
        "Water damage from sewer backup (unless directly caused by flooding)",
    ],

    floridaSpecific: [
        {
            title: "NFIP vs. Private Flood Insurance",
            content: "The NFIP offers standardized coverage up to $250,000 for buildings and $100,000 for contents. Private flood insurers may offer higher limits, additional coverages (like loss of use), and sometimes lower rates—especially for low-to-moderate risk properties. We can compare both options for you.",
        },
        {
            title: "Flood Zones & Rates",
            content: "Your flood zone (determined by FEMA flood maps) significantly impacts your rates. High-risk zones (A and V zones) have higher premiums than moderate-to-low risk zones (X zones). However, floods don't follow zone lines—we recommend coverage regardless of your zone designation.",
        },
        {
            title: "30-Day Waiting Period",
            content: "NFIP policies have a 30-day waiting period before coverage takes effect. Don't wait until a storm is approaching—get your flood insurance in place now. Some private policies may have shorter waiting periods.",
        },
        {
            title: "Elevation Certificates",
            content: "An elevation certificate documents your property's elevation relative to the base flood elevation. This document can significantly impact your NFIP rates and may be required for new policies. We can help you understand if an elevation certificate would benefit you.",
        },
    ],

    faqs: [
        {
            question: "Do I need flood insurance if I'm not in a flood zone?",
            answer: "We strongly recommend it. While you may not be required to have flood insurance if you're in a low-to-moderate risk zone, about 25% of flood claims come from outside high-risk areas. In Florida, heavy rainfall, poor drainage, and storm surge can cause flooding almost anywhere. Rates for low-risk properties are often quite affordable.",
        },
        {
            question: "How much does flood insurance cost in Florida?",
            answer: "Flood insurance costs vary widely based on your flood zone, property elevation, construction type, coverage limits, and deductible. NFIP rates for preferred risk properties start around $500/year, while high-risk zones can be several thousand dollars annually. Private flood insurance may offer competitive rates, especially for lower-risk properties. Let us quote both options.",
        },
        {
            question: "What's the difference between NFIP and private flood insurance?",
            answer: "NFIP is the federal program offering standardized coverage up to $250,000 for buildings and $100,000 for contents. Private flood insurance may offer higher limits, additional coverages (like loss of use and pool repair), faster claims payment, and sometimes lower rates. The best option depends on your property and needs.",
        },
        {
            question: "Does flood insurance cover my detached garage or shed?",
            answer: "Under NFIP policies, detached structures must have their own separate policy. Some private flood insurers include detached structures under your main policy. We'll help you understand what's covered and whether you need additional policies.",
        },
        {
            question: "How do I file a flood insurance claim?",
            answer: "Report the flood damage to your insurance carrier as soon as possible. Document the damage with photos and video before cleaning up. Make temporary repairs to prevent further damage, but save damaged items for the adjuster to inspect. We can help guide you through the claims process and advocate on your behalf.",
        },
    ],

    relatedCoverage: [
        {
            title: "Homeowners Insurance",
            href: "/personal/homeowners-insurance-florida",
            description: "Protect your home from wind, fire, and other perils.",
        },
        {
            title: "Condo Insurance",
            href: "/personal/condo-insurance-florida",
            description: "Coverage designed for Florida condo owners.",
        },
        {
            title: "Renters Insurance",
            href: "/personal/renters-insurance-florida",
            description: "Protect your belongings as a renter.",
        },
    ],

    slug: "flood-insurance-florida",
    category: "personal",
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
}

export default function FloodInsurancePage() {
    return <ServicePageTemplate data={pageData} />
}
