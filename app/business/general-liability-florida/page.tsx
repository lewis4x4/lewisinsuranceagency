import { ServicePageTemplate, type ServicePageData } from "@/components/templates"
import { generateServiceMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: ServicePageData = {
    title: "General Liability Insurance",
    description: "Protect your Florida business with general liability insurance. Coverage for third-party injuries, property damage, and lawsuits. Compare quotes.",

    badge: "Business Insurance",
    headline: "Florida General Liability Insurance",
    subheadline: "General liability insurance protects your business from third-party claims of bodily injury, property damage, and advertising injury. It's essential coverage for any Florida business.",

    overview: [
        "General liability insurance is the foundation of business protection. It covers your business when someone outside your company claims they were injured on your premises, their property was damaged by your operations, or they were harmed by your advertising or products.",
        "Whether you run a retail shop, restaurant, consulting firm, or construction company, general liability is likely the first commercial policy you need. Many clients, landlords, and contracts require proof of general liability coverage before they'll work with you.",
        "A single lawsuit can devastate a small business. General liability insurance pays for legal defense, settlements, and judgments so a covered claim doesn't put you out of business. It also covers medical expenses for injured third parties, regardless of fault.",
        "As an independent agency, we work with multiple commercial carriers to find you competitive general liability coverage tailored to your industry and risk profile. We'll help you understand the right coverage limits and ensure your policy is structured correctly.",
    ],

    coverageIncludes: [
        {
            title: "Bodily Injury Liability",
            description: "Covers injuries to customers, visitors, or others caused by your business operations or on your premises.",
        },
        {
            title: "Property Damage Liability",
            description: "Covers damage your business causes to others' property during operations or from your products.",
        },
        {
            title: "Personal & Advertising Injury",
            description: "Covers claims of libel, slander, copyright infringement, and false advertising.",
        },
        {
            title: "Medical Payments",
            description: "Pays medical expenses for injured third parties, regardless of fault, to resolve claims quickly.",
        },
        {
            title: "Products-Completed Operations",
            description: "Covers claims arising from products you sell or work you've completed.",
        },
        {
            title: "Legal Defense Costs",
            description: "Pays attorney fees and court costs to defend your business against covered claims.",
        },
    ],

    commonExclusions: [
        "Employee injuries (covered by workers comp)",
        "Professional errors (covered by E&O/professional liability)",
        "Auto accidents (covered by commercial auto)",
        "Intentional acts",
        "Contractual liability (varies)",
        "Pollution liability (may need separate coverage)",
        "Employment practices claims (need EPLI)",
    ],

    floridaSpecific: [
        {
            title: "Slip and Fall Claims",
            content: "Florida's year-round warm weather means outdoor operations and increased foot traffic. Slip and fall claims are common, especially during Florida's rainy season when wet floors increase accident risk. General liability covers these claims.",
        },
        {
            title: "Certificate of Insurance Requirements",
            content: "Florida landlords, general contractors, and large clients often require a Certificate of Insurance (COI) showing general liability coverage. We can issue COIs quickly and add additional insured endorsements as needed.",
        },
        {
            title: "Industry-Specific Considerations",
            content: "Coverage needs vary by industry. Contractors need completed operations coverage. Retailers need products liability. Restaurants need liquor liability if serving alcohol. We'll tailor your policy to your specific business.",
        },
        {
            title: "Coverage Limits",
            content: "Standard limits are $1 million per occurrence and $2 million aggregate. Some contracts require higher limits. If you need more protection, consider an umbrella or excess liability policy layered on top of your general liability.",
        },
    ],

    faqs: [
        {
            question: "How much does general liability insurance cost in Florida?",
            answer: "Costs vary widely based on your industry, revenue, number of employees, and claims history. Many small businesses pay $500-$3,000 per year for $1M/$2M limits. High-risk industries like construction pay more. We'll shop multiple carriers to find competitive rates for your business.",
        },
        {
            question: "What limits of general liability do I need?",
            answer: "Most businesses need at least $1 million per occurrence and $2 million aggregate. If you work with large companies, have significant assets, or operate in a high-risk industry, you may need higher limits. Many businesses add an umbrella policy for additional protection.",
        },
        {
            question: "What's the difference between general liability and professional liability?",
            answer: "General liability covers physical injuries and property damage caused by your business. Professional liability (E&O) covers claims arising from your professional advice or services—like a consultant whose advice causes a client financial loss. Many businesses need both.",
        },
        {
            question: "Does general liability cover my employees?",
            answer: "No. General liability covers injuries to third parties (customers, visitors, the public). Injuries to your employees are covered by workers compensation insurance. If you have employees, Florida law likely requires workers comp coverage.",
        },
        {
            question: "Can I bundle general liability with other coverages?",
            answer: "Yes! A Business Owners Policy (BOP) bundles general liability with commercial property insurance at a discount. Many small businesses find a BOP offers better value than purchasing policies separately. We can quote both options for you.",
        },
    ],

    relatedCoverage: [
        {
            title: "Business Owners Policy",
            href: "/business/business-owners-policy-florida",
            description: "Bundle general liability with property coverage.",
        },
        {
            title: "Workers Compensation",
            href: "/business/workers-compensation-florida",
            description: "Required coverage for employee injuries.",
        },
        {
            title: "Professional Liability",
            href: "/business/professional-liability-eo-florida",
            description: "Coverage for professional services and advice.",
        },
    ],

    slug: "general-liability-florida",
    category: "business",
}

export const metadata: Metadata = generateServiceMetadata({
    title: pageData.title,
    description: pageData.description,
    slug: pageData.slug,
    category: pageData.category,
})

export default function GeneralLiabilityPage() {
    return <ServicePageTemplate data={pageData} />
}
