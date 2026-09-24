import { ServicePageTemplate, type ServicePageData } from "@/components/templates"
import { generateServiceMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: ServicePageData = {
    title: "Workers Compensation Insurance",
    description: "Florida workers compensation insurance for employers. Required coverage for employee injuries. Compare quotes from multiple carriers.",

    badge: "Business Insurance",
    headline: "Florida Workers Compensation Insurance",
    subheadline: "Workers comp protects your employees when they're injured on the job and protects your business from lawsuits. It's required for most Florida employers.",

    overview: [
        "Workers compensation insurance provides benefits to employees who are injured or become ill as a result of their job. It covers medical expenses, lost wages, rehabilitation costs, and death benefits—regardless of who was at fault for the injury.",
        "Florida law requires most employers to carry workers compensation insurance. The requirements vary by industry: construction businesses with 1 or more employees, non-construction businesses with 4 or more employees, and agricultural businesses with specific thresholds must carry coverage.",
        "Beyond legal compliance, workers comp protects your business. In exchange for providing benefits, employees give up the right to sue you for workplace injuries. Without coverage, an employee injury could result in devastating lawsuits and fines.",
        "As an independent agency, we work with multiple workers comp carriers to find competitive rates for your business. We understand Florida's classification system and can help ensure you're properly classified for the most accurate pricing.",
    ],

    coverageIncludes: [
        {
            title: "Medical Expenses",
            description: "Covers all reasonable medical treatment for work-related injuries and illnesses.",
        },
        {
            title: "Lost Wages",
            description: "Replaces a portion of lost income while the employee recovers from injury.",
        },
        {
            title: "Disability Benefits",
            description: "Provides ongoing benefits for permanent total or partial disabilities.",
        },
        {
            title: "Rehabilitation",
            description: "Covers physical therapy, vocational rehabilitation, and job retraining.",
        },
        {
            title: "Death Benefits",
            description: "Provides benefits to surviving dependents if an employee dies from a work injury.",
        },
        {
            title: "Employer Liability",
            description: "Protects your business from lawsuits related to workplace injuries.",
        },
    ],

    commonExclusions: [
        "Self-inflicted injuries",
        "Injuries from intoxication or drug use",
        "Injuries during commission of a crime",
        "Independent contractors (generally)",
        "Violations of safety policies",
        "Injuries outside scope of employment",
        "Officers who opt out (with proper exemption)",
    ],

    floridaSpecific: [
        {
            title: "Florida Requirements",
            content: "Construction businesses must carry workers comp with 1+ employees. Non-construction businesses need coverage with 4+ employees. Agricultural businesses have specific thresholds. Corporate officers and LLC members can exempt themselves with proper filing, but this doesn't reduce employee requirements.",
        },
        {
            title: "Classification & Experience Mod",
            content: "Workers comp premiums are based on employee classifications (type of work) and your experience modification rate (claims history). Proper classification is crucial—misclassification can result in audits and back-premiums. A good experience mod (under 1.0) reduces your premiums.",
        },
        {
            title: "Pay-As-You-Go Options",
            content: "Traditional workers comp requires annual premium estimates with year-end audits. Many Florida businesses prefer pay-as-you-go programs that calculate premiums based on each payroll—improving cash flow and eliminating audit surprises.",
        },
        {
            title: "Certificates & Subcontractors",
            content: "General contractors must verify subcontractor workers comp coverage or pay premiums based on their payroll. We can help you manage certificates from subs and ensure compliance. If you're a sub, we'll provide certificates quickly to keep your jobs moving.",
        },
    ],

    faqs: [
        {
            question: "Does my Florida business need workers compensation?",
            answer: "Likely yes. Construction businesses need coverage with 1+ employees of any kind. Non-construction businesses need coverage with 4+ employees. Some agricultural operations have different thresholds. Even if not required, coverage protects against lawsuits. We can help determine your requirements.",
        },
        {
            question: "How much does workers comp cost in Florida?",
            answer: "Costs depend on your industry classification (high-risk jobs cost more), total payroll, and experience modification rate. Rates range from about $0.30 to over $20 per $100 of payroll depending on the classification. We shop multiple carriers to find competitive rates.",
        },
        {
            question: "Can business owners exempt themselves from workers comp?",
            answer: "In Florida, corporate officers and LLC members can file exemptions to exclude themselves from coverage requirements. However, this doesn't reduce the requirement to cover employees. Sole proprietors and partners are generally not required to cover themselves but may elect coverage.",
        },
        {
            question: "What is an experience modification rate?",
            answer: "Your 'experience mod' compares your claims history to similar businesses. A mod of 1.0 is average. Lower mods (like 0.85) reduce your premiums; higher mods (like 1.20) increase them. Implementing safety programs and managing claims well can lower your mod over time.",
        },
        {
            question: "What happens if I don't have required workers comp coverage?",
            answer: "Operating without required coverage is a criminal offense in Florida. Penalties include stop-work orders, fines of $1,000 per day, and criminal charges. You'd also lose the exclusive remedy protection—meaning injured employees could sue your business directly.",
        },
    ],

    relatedCoverage: [
        {
            title: "General Liability",
            href: "/business/general-liability-florida",
            description: "Covers third-party injuries and property damage.",
        },
        {
            title: "Commercial Auto",
            href: "/business/commercial-auto-florida",
            description: "Coverage for business vehicle accidents.",
        },
        {
            title: "Business Owners Policy",
            href: "/business/business-owners-policy-florida",
            description: "Bundled coverage for property and liability.",
        },
    ],

    slug: "workers-compensation-florida",
    category: "business",
}

export const metadata: Metadata = generateServiceMetadata({
    title: pageData.title,
    description: pageData.description,
    slug: pageData.slug,
    category: pageData.category,
})

export default function WorkersCompPage() {
    return <ServicePageTemplate data={pageData} />
}
