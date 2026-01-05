import { ServicePageTemplate, type ServicePageData } from "@/components/templates"
import { generateServiceMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: ServicePageData = {
    title: "Florida Business Owners Policy (BOP)",
    description: "Florida Business Owners Policy bundles property and liability coverage at a discount. Ideal for small businesses. Compare BOP quotes.",

    badge: "Business Insurance",
    headline: "Florida Business Owners Policy",
    subheadline: "A BOP bundles commercial property and general liability into one convenient, discounted package. It's often the best choice for small to medium Florida businesses.",

    overview: [
        "A Business Owners Policy (BOP) combines two essential coverages—commercial property insurance and general liability insurance—into a single package. BOPs typically cost less than buying these policies separately and come with additional built-in coverages.",
        "BOPs are designed for small to medium-sized businesses with straightforward needs. They work well for retail stores, offices, restaurants, contractors, and many service businesses. Larger or higher-risk operations may need separate, more customized policies.",
        "Beyond property and liability, BOPs usually include business interruption coverage, which pays lost income if a covered event forces you to close temporarily. Many also include equipment breakdown, electronic data coverage, and other valuable features.",
        "As an independent agency, we work with multiple carriers offering BOPs in Florida. We'll compare options to find coverage that protects your business at a competitive price. If a BOP isn't the right fit, we can build a custom commercial package instead.",
    ],

    coverageIncludes: [
        {
            title: "Commercial Property",
            description: "Covers your building (if owned), equipment, inventory, furniture, and business personal property.",
        },
        {
            title: "General Liability",
            description: "Covers third-party bodily injury, property damage, and advertising injury claims.",
        },
        {
            title: "Business Interruption",
            description: "Replaces lost income and covers extra expenses when a covered event forces closure.",
        },
        {
            title: "Equipment Breakdown",
            description: "Many BOPs include coverage for mechanical/electrical breakdown of equipment.",
        },
        {
            title: "Crime Coverage",
            description: "Some BOPs include employee dishonesty and theft coverage.",
        },
        {
            title: "Electronic Data",
            description: "Coverage for costs to restore lost electronic data from covered causes.",
        },
    ],

    commonExclusions: [
        "Auto coverage (need commercial auto)",
        "Employee injuries (need workers comp)",
        "Professional errors (need E&O)",
        "Flood damage (need flood insurance)",
        "Earthquake damage",
        "Employment practices claims (need EPLI)",
        "Cyber/data breach (may need cyber liability)",
    ],

    floridaSpecific: [
        {
            title: "Hurricane & Wind Coverage",
            content: "Florida BOP policies include wind coverage but may have separate hurricane deductibles (often 2-5% of property coverage). Understanding your wind deductible is crucial—a major hurricane could trigger thousands in out-of-pocket costs before insurance pays.",
        },
        {
            title: "Flood Coverage",
            content: "Standard BOPs exclude flood damage—a significant gap for Florida businesses. We recommend separate flood insurance through the NFIP or private carriers, especially for coastal and low-lying locations.",
        },
        {
            title: "BOP Eligibility",
            content: "BOPs are designed for lower-risk operations. Some businesses—manufacturers, large contractors, bars—may not qualify and need separate policies. We'll determine if a BOP works for your business or recommend alternatives.",
        },
        {
            title: "Business Interruption Details",
            content: "Business interruption coverage in a BOP pays for lost income during covered shutdowns. In Florida, this can be triggered by hurricane damage. Make sure your limits are sufficient to cover months of lost revenue while your location is repaired.",
        },
    ],

    faqs: [
        {
            question: "What's included in a Business Owners Policy?",
            answer: "A standard BOP includes commercial property insurance (building, equipment, inventory), general liability insurance (third-party injuries/damage), and business interruption coverage (lost income during closures). Many BOPs also include equipment breakdown, electronic data coverage, and crime coverage. We'll review what's included in your specific policy.",
        },
        {
            question: "How much does a BOP cost in Florida?",
            answer: "BOP costs vary based on your business type, location, property values, revenue, and coverage limits. Many small businesses pay $500-$2,500 per year. The bundled pricing is typically 10-15% less than purchasing property and liability separately. We'll quote multiple carriers to find competitive rates.",
        },
        {
            question: "What businesses qualify for a BOP?",
            answer: "BOPs are designed for small to medium businesses with moderate risk profiles. Common qualifying businesses include: retail stores, offices, restaurants (some), contractors, consultants, and service businesses. Large operations, manufacturers, and high-risk businesses may need separate policies. We'll determine if a BOP fits your business.",
        },
        {
            question: "Do I still need other insurance with a BOP?",
            answer: "Yes. A BOP doesn't include: commercial auto (for business vehicles), workers compensation (for employee injuries), professional liability (for professional services), cyber liability (for data breaches), or flood insurance. We'll help you identify gaps and build complete protection.",
        },
        {
            question: "Can I customize a BOP?",
            answer: "Yes. Most BOPs offer endorsements to add or enhance coverage. Common additions include: higher liability limits, hired/non-owned auto, equipment breakdown (if not included), cyber liability, and professional liability. We'll customize your BOP to match your needs.",
        },
    ],

    relatedCoverage: [
        {
            title: "General Liability",
            href: "/business/general-liability-florida",
            description: "Standalone liability if BOP isn't right for you.",
        },
        {
            title: "Workers Compensation",
            href: "/business/workers-compensation-florida",
            description: "Required coverage not included in a BOP.",
        },
        {
            title: "Cyber Liability",
            href: "/business/cyber-liability-florida",
            description: "Data breach coverage to add to your BOP.",
        },
    ],

    slug: "business-owners-policy-florida",
    category: "business",
}

export const metadata: Metadata = generateServiceMetadata({
    title: pageData.title,
    description: pageData.description,
    slug: pageData.slug,
    category: pageData.category,
})

export default function BOPPage() {
    return <ServicePageTemplate data={pageData} />
}
