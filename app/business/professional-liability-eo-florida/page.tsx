import { ServicePageTemplate, type ServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: ServicePageData = {
    title: "Professional Liability Insurance (E&O)",
    description: "Florida professional liability and errors & omissions insurance. Protect your business from claims of negligence or mistakes. Compare E&O quotes.",

    badge: "Business Insurance",
    headline: "Florida Professional Liability Insurance",
    subheadline: "Professional liability (E&O) insurance protects your business when clients claim your professional services or advice caused them financial harm.",

    overview: [
        "Professional liability insurance—also called Errors & Omissions (E&O) insurance—protects businesses that provide professional services or advice. If a client claims your work was negligent, incomplete, or caused them financial harm, E&O coverage pays for legal defense and damages.",
        "Unlike general liability, which covers physical injuries and property damage, professional liability covers financial losses from your professional services. A consultant whose advice leads to a bad investment, an architect whose design has code violations, or a real estate agent who misses a disclosure could all face E&O claims.",
        "Professional liability is essential for any business where clients rely on your expertise, advice, or specialized services. Even unfounded claims require expensive legal defense—E&O insurance covers these costs so a single lawsuit doesn't devastate your business.",
        "As an independent agency, we work with carriers specializing in various professions. We'll find E&O coverage tailored to your specific field with appropriate limits and retroactive dates to protect your past work.",
    ],

    coverageIncludes: [
        {
            title: "Negligent Acts",
            description: "Covers claims that your work failed to meet professional standards.",
        },
        {
            title: "Errors & Omissions",
            description: "Covers mistakes in your work or failure to perform promised services.",
        },
        {
            title: "Misrepresentation",
            description: "Covers claims that you made false or misleading statements about your services.",
        },
        {
            title: "Legal Defense",
            description: "Pays attorney fees and court costs to defend against covered claims.",
        },
        {
            title: "Settlements & Judgments",
            description: "Pays damages you're legally obligated to pay in covered claims.",
        },
        {
            title: "Regulatory Defense",
            description: "Some policies cover defense costs for licensing board complaints.",
        },
    ],

    commonExclusions: [
        "Bodily injury (covered by general liability)",
        "Property damage (covered by general liability)",
        "Intentional wrongdoing or fraud",
        "Claims before policy inception or retroactive date",
        "Criminal acts",
        "Employment practices claims (need EPLI)",
        "Contractual liability (varies)",
    ],

    floridaSpecific: [
        {
            title: "Who Needs Professional Liability in Florida",
            content: "Many Florida professionals need E&O coverage: real estate agents, insurance agents, accountants, consultants, architects, engineers, IT professionals, financial advisors, healthcare providers, attorneys, and more. Many licensing boards or client contracts require E&O coverage.",
        },
        {
            title: "Claims-Made vs. Occurrence",
            content: "Most professional liability policies are 'claims-made,' meaning they cover claims made during the policy period for work performed after the retroactive date. This differs from 'occurrence' policies. Maintaining continuous coverage and understanding your retroactive date is crucial.",
        },
        {
            title: "Industry-Specific Coverage",
            content: "Different professions have specialized E&O policies addressing their unique risks. Insurance agents, real estate professionals, technology consultants, and healthcare providers each have tailored forms. We'll find coverage designed for your profession.",
        },
        {
            title: "Licensing & Contract Requirements",
            content: "Florida requires some professionals (like insurance agents) to carry E&O insurance for licensing. Many clients and contracts also require proof of professional liability coverage with minimum limits. We can issue certificates of insurance to meet these requirements.",
        },
    ],

    faqs: [
        {
            question: "What's the difference between professional liability and general liability?",
            answer: "General liability covers bodily injury and property damage you cause to others. Professional liability covers financial losses from your professional services or advice—like a design flaw, missed deadline, or bad recommendation. Most professional service businesses need both coverages.",
        },
        {
            question: "How much professional liability coverage do I need?",
            answer: "Coverage needs depend on your profession, client size, and contract requirements. Many professionals carry $1 million per claim and $2 million aggregate as a starting point. Larger contracts may require higher limits. Consider the potential damages a client could claim plus legal defense costs.",
        },
        {
            question: "What is a retroactive date?",
            answer: "Professional liability policies only cover claims for work performed after your retroactive date. If you've had continuous E&O coverage, your retroactive date is usually when you first obtained coverage. Gaps in coverage or switching carriers can affect your retroactive date, potentially leaving past work uninsured.",
        },
        {
            question: "Does E&O cover me after my policy ends?",
            answer: "Claims-made policies only cover claims made while the policy is active. If a claim arises after your policy ends—even for work done during the policy period—you may not be covered. Extended reporting periods ('tail coverage') can extend the claims reporting window when you retire or close your business.",
        },
        {
            question: "Does general liability include professional liability?",
            answer: "No. General liability specifically excludes professional services—the 'professional services exclusion.' You need a separate professional liability (E&O) policy to cover claims arising from your professional work, advice, or services.",
        },
    ],

    relatedCoverage: [
        {
            title: "General Liability",
            href: "/business/general-liability-florida",
            description: "Covers physical injuries and property damage.",
        },
        {
            title: "Cyber Liability",
            href: "/business/cyber-liability-florida",
            description: "Covers data breaches and cyber incidents.",
        },
        {
            title: "Business Owners Policy",
            href: "/business/business-owners-policy-florida",
            description: "Bundled property and liability coverage.",
        },
    ],

    slug: "professional-liability-eo-florida",
    category: "business",
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
}

export default function ProfessionalLiabilityPage() {
    return <ServicePageTemplate data={pageData} />
}
