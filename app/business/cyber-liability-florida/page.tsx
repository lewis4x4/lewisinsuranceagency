import { ServicePageTemplate, type ServicePageData } from "@/components/templates"
import { generateServiceMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: ServicePageData = {
    title: "Florida Cyber Liability Insurance",
    description: "Protect your Florida business from data breaches and cyber attacks. Cyber liability insurance covers breach response, liability, and business interruption.",

    badge: "Business Insurance",
    headline: "Florida Cyber Liability Insurance",
    subheadline: "Cyber insurance protects your business when data breaches, ransomware attacks, or other cyber incidents threaten your operations and customer information.",

    overview: [
        "Cyber liability insurance has become essential for businesses of all sizes. With increasing data breaches, ransomware attacks, and regulatory penalties, the question isn't whether your business will face a cyber incident—it's when. Cyber insurance helps you respond and recover.",
        "Small businesses are prime targets for cyber criminals. They often have valuable customer data but lack the security resources of large corporations. A single breach can cost hundreds of thousands of dollars in response costs, legal fees, fines, and lost business.",
        "Cyber insurance covers both first-party costs (your own losses) and third-party liability (claims from affected customers or partners). It also provides access to expert breach response teams—IT forensics, legal counsel, public relations, and credit monitoring services.",
        "As an independent agency, we work with leading cyber insurance carriers to find coverage that matches your business's technology risks and data exposure. We'll help you understand your cyber risk and build appropriate protection.",
    ],

    coverageIncludes: [
        {
            title: "Data Breach Response",
            description: "Covers forensic investigation, customer notification, credit monitoring, and PR consultation.",
        },
        {
            title: "Cyber Extortion",
            description: "Covers ransom payments and expert negotiation in ransomware attacks.",
        },
        {
            title: "Business Interruption",
            description: "Replaces lost income when cyber incidents force your systems offline.",
        },
        {
            title: "Data Recovery",
            description: "Covers costs to restore or recreate data lost or damaged in an attack.",
        },
        {
            title: "Liability Coverage",
            description: "Defends and pays claims from customers/partners harmed by your data breach.",
        },
        {
            title: "Regulatory Defense",
            description: "Covers fines, penalties, and defense costs for regulatory investigations.",
        },
    ],

    commonExclusions: [
        "Acts of war or terrorism (varies)",
        "Prior known breaches or vulnerabilities",
        "Intentional wrongdoing",
        "Infrastructure failures (power grid, internet)",
        "Bodily injury (covered by general liability)",
        "Failure to maintain reasonable security (some policies)",
        "Unencrypted devices left in vehicles (some policies)",
    ],

    floridaSpecific: [
        {
            title: "Florida Data Breach Laws",
            content: "Florida's Information Protection Act requires businesses to notify affected individuals within 30 days of discovering a breach involving personal information. Violations can result in fines up to $500,000. Cyber insurance covers notification costs and potential penalties.",
        },
        {
            title: "Industry Requirements",
            content: "Florida businesses in healthcare must comply with HIPAA. Those handling payment cards must meet PCI-DSS standards. Financial services face additional regulations. Cyber insurance can cover fines and penalties for regulatory violations.",
        },
        {
            title: "Small Business Targeting",
            content: "Florida small businesses are frequent cyber attack targets. Tourist businesses, healthcare providers, real estate companies, and professional services firms all collect sensitive data that attracts hackers. Many attacks exploit outdated software or employee phishing.",
        },
        {
            title: "Social Engineering Coverage",
            content: "Social engineering attacks—like fraudulent wire transfer requests or vendor impersonation—are common in Florida business email compromise schemes. Make sure your cyber policy includes social engineering coverage or add it as an endorsement.",
        },
    ],

    faqs: [
        {
            question: "Does my business really need cyber insurance?",
            answer: "If you use computers, store customer data, take credit cards, or rely on technology to operate—yes. Even a small breach can cost $50,000-$200,000+ in response costs, legal fees, and lost business. A ransomware attack can cost even more. Cyber insurance is relatively affordable protection against increasingly common threats.",
        },
        {
            question: "How much does cyber insurance cost?",
            answer: "Costs depend on your industry, data exposure, revenue, security practices, and coverage limits. Many small businesses pay $1,000-$5,000 annually for $1 million in coverage. Businesses with extensive personal data or payment processing may pay more. We'll shop multiple carriers for competitive quotes.",
        },
        {
            question: "What should I look for in a cyber policy?",
            answer: "Key coverages include: data breach response (forensics, notification, credit monitoring), ransomware/extortion, business interruption, data recovery, liability for affected third parties, and regulatory defense. Also confirm coverage for social engineering and make sure policy limits are adequate for your exposure.",
        },
        {
            question: "Does general liability cover data breaches?",
            answer: "No. General liability covers bodily injury and property damage—not data breaches or cyber incidents. Some newer GL policies specifically exclude cyber claims. You need dedicated cyber liability insurance to protect against data breach and technology-related losses.",
        },
        {
            question: "What happens if I have a data breach?",
            answer: "With cyber insurance, your carrier provides a breach response team: IT forensics to identify and contain the breach, legal counsel to navigate notification requirements, customer notification services, credit monitoring for affected individuals, and PR support. Without insurance, you'd have to find and pay for all these services yourself.",
        },
    ],

    relatedCoverage: [
        {
            title: "Professional Liability",
            href: "/business/professional-liability-eo-florida",
            description: "Covers claims from professional services.",
        },
        {
            title: "Business Owners Policy",
            href: "/business/business-owners-policy-florida",
            description: "Foundation coverage for property and liability.",
        },
        {
            title: "General Liability",
            href: "/business/general-liability-florida",
            description: "Covers physical injuries and property damage.",
        },
    ],

    slug: "cyber-liability-florida",
    category: "business",
}

export const metadata: Metadata = generateServiceMetadata({
    title: pageData.title,
    description: pageData.description,
    slug: pageData.slug,
    category: pageData.category,
})

export default function CyberLiabilityPage() {
    return <ServicePageTemplate data={pageData} />
}
