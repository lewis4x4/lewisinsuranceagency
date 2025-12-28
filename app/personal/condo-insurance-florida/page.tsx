import { ServicePageTemplate, type ServicePageData } from "@/components/templates"
import { generateServiceMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: ServicePageData = {
    title: "Condo Insurance",
    description: "Protect your Florida condo with HO-6 condo insurance. Coverage for your unit, personal property, and liability. Compare quotes from multiple carriers.",

    badge: "Personal Insurance",
    headline: "Florida Condo Insurance",
    subheadline: "Condo insurance (HO-6) protects what your association's master policy doesn't cover—your unit's interior, personal belongings, and personal liability.",

    overview: [
        "If you own a condo in Florida, you need condo insurance—also known as an HO-6 policy. While your condo association carries a master policy that covers the building's structure and common areas, it typically doesn't cover your individual unit's interior, your personal belongings, or your personal liability.",
        "Condo insurance fills the gap between what your association's policy covers and what you need to fully protect your investment. The exact coverage you need depends on your association's master policy—we'll help you understand the details and build the right coverage.",
        "Florida condos face unique risks including hurricanes, flooding, and water damage from neighboring units. We work with multiple carriers to find coverage that protects you from these risks at competitive rates.",
        "As an independent agency, we understand the nuances of condo insurance in Florida. We'll review your association's master policy, explain your coverage needs, and find the right policy for your situation.",
    ],

    coverageIncludes: [
        {
            title: "Dwelling/Interior Coverage",
            description: "Covers your unit's interior—walls, floors, ceilings, fixtures, and built-in appliances.",
        },
        {
            title: "Personal Property",
            description: "Protects your belongings inside your condo from theft, fire, and other covered perils.",
        },
        {
            title: "Personal Liability",
            description: "Protects you if someone is injured in your unit or you damage someone else's property.",
        },
        {
            title: "Loss of Use",
            description: "Pays for additional living expenses if your condo becomes uninhabitable.",
        },
        {
            title: "Loss Assessment",
            description: "Covers your share of association assessments after a covered loss to common areas.",
        },
        {
            title: "Medical Payments",
            description: "Covers minor medical expenses for guests injured in your unit.",
        },
    ],

    commonExclusions: [
        "Flood damage (requires separate policy)",
        "Building exterior/structure (covered by association)",
        "Common areas (covered by association)",
        "Earthquake damage",
        "Wear and tear/neglect",
        "Pest damage",
        "Mold (often limited coverage)",
    ],

    floridaSpecific: [
        {
            title: "Understanding Your Master Policy",
            content: "Condo associations carry different types of master policies. 'Bare walls' policies cover only the building structure, while 'all-in' policies may cover interior fixtures. We'll help you understand what your association covers so you get the right amount of interior coverage.",
        },
        {
            title: "Hurricane & Wind Coverage",
            content: "Florida condo policies typically include wind coverage, but you may have a separate hurricane deductible. Your association's master policy covers the building exterior, but you need coverage for interior damage from wind-driven rain or water intrusion.",
        },
        {
            title: "Water Damage from Other Units",
            content: "One of the most common condo claims is water damage from neighboring units—a burst pipe or overflowing appliance above you can cause significant damage. Your condo policy covers damage to your unit; the neighbor's liability coverage may apply for their negligence.",
        },
        {
            title: "Loss Assessment Coverage",
            content: "If your association's master policy limits are exceeded after a major loss, owners may be assessed for the shortfall. Loss assessment coverage helps pay your share of these assessments. We typically recommend at least $25,000-$50,000 in this coverage.",
        },
    ],

    faqs: [
        {
            question: "What's the difference between condo insurance and homeowners insurance?",
            answer: "Homeowners insurance (HO-3) covers your entire home structure and property. Condo insurance (HO-6) covers only what's inside your unit—the interior, your belongings, and your liability. The condo association's master policy covers the building structure and common areas. They work together to provide complete protection.",
        },
        {
            question: "How much condo insurance do I need?",
            answer: "Your coverage needs depend on your association's master policy, your unit's interior improvements, and your personal property value. We recommend: enough interior coverage to rebuild your unit's interior (often $50,000-$150,000+), personal property coverage for your belongings, at least $300,000 in liability, and $25,000+ in loss assessment coverage.",
        },
        {
            question: "Does my condo association's insurance cover me?",
            answer: "Partially. Your association's master policy covers the building structure and common areas, but not your individual unit's interior, your personal belongings, your personal liability, or loss assessments. You need your own HO-6 policy to fill these gaps.",
        },
        {
            question: "Do I need flood insurance for my condo?",
            answer: "If your condo is in a flood zone, your lender may require it. Even if not required, we recommend flood insurance for Florida condos—floods can damage your personal property and unit interior even if the building structure survives. Flood insurance is separate from your condo policy.",
        },
        {
            question: "What is loss assessment coverage?",
            answer: "If a major loss exceeds your association's master policy limits, the association may assess each owner for a share of the shortfall. Loss assessment coverage pays your share of these assessments. It also covers assessments for the master policy's deductible. Given Florida's hurricane risk, this coverage is important.",
        },
    ],

    relatedCoverage: [
        {
            title: "Flood Insurance",
            href: "/personal/flood-insurance-florida",
            description: "Essential protection for your unit and belongings.",
        },
        {
            title: "Umbrella Insurance",
            href: "/personal/umbrella-insurance-florida",
            description: "Extra liability protection beyond your condo policy.",
        },
        {
            title: "Renters Insurance",
            href: "/personal/renters-insurance-florida",
            description: "If you rent your condo out, tenants need this.",
        },
    ],

    slug: "condo-insurance-florida",
    category: "personal",
}

export const metadata: Metadata = generateServiceMetadata({
    title: pageData.title,
    description: pageData.description,
    slug: pageData.slug,
    category: pageData.category,
})

export default function CondoInsurancePage() {
    return <ServicePageTemplate data={pageData} />
}
