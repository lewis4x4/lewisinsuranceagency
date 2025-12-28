import { ServicePageTemplate, type ServicePageData } from "@/components/templates"
import { generateServiceMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: ServicePageData = {
    title: "Umbrella Insurance",
    description: "Protect your assets with Florida umbrella insurance. Extra liability coverage beyond your home and auto policies. Affordable peace of mind.",

    badge: "Personal Insurance",
    headline: "Florida Umbrella Insurance",
    subheadline: "Umbrella insurance provides an extra layer of liability protection when your home and auto policy limits aren't enough. It's affordable protection for your assets and future income.",

    overview: [
        "Umbrella insurance is personal liability coverage that goes beyond the limits of your homeowners and auto policies. If you're sued for more than your underlying policies cover, your umbrella policy kicks in to protect your assets and future income.",
        "In today's litigious society, a serious accident or lawsuit can result in judgments far exceeding typical policy limits. Without umbrella coverage, you could lose your savings, home, and future earnings. Umbrella insurance provides peace of mind at a surprisingly affordable cost.",
        "A $1 million umbrella policy typically costs just $150-$300 per year—a small price to protect everything you've worked for. Coverage extends beyond your home and auto to protect you from personal liability claims almost anywhere in the world.",
        "As an independent agency, we'll help you determine the right amount of umbrella coverage based on your assets, income, and risk exposure. We can also ensure your underlying home and auto policies have sufficient limits to support an umbrella policy.",
    ],

    coverageIncludes: [
        {
            title: "Excess Liability",
            description: "Pays above your home/auto limits when those limits are exhausted in a covered claim.",
        },
        {
            title: "Bodily Injury Liability",
            description: "Covers injuries you cause to others in auto accidents, on your property, or elsewhere.",
        },
        {
            title: "Property Damage Liability",
            description: "Covers damage you accidentally cause to others' property beyond underlying limits.",
        },
        {
            title: "Personal Injury Protection",
            description: "Covers claims like libel, slander, defamation, and invasion of privacy.",
        },
        {
            title: "Worldwide Coverage",
            description: "Protects you from covered liability claims almost anywhere in the world.",
        },
        {
            title: "Legal Defense Costs",
            description: "Covers attorney fees and legal costs to defend you against covered claims.",
        },
    ],

    commonExclusions: [
        "Intentional or criminal acts",
        "Business activities (need commercial coverage)",
        "Professional liability (need E&O coverage)",
        "Workers compensation claims",
        "Damage to your own property",
        "Contractual liability",
        "War and terrorism",
    ],

    floridaSpecific: [
        {
            title: "Why Floridians Need Umbrella Coverage",
            content: "Florida's high tourist population, active lifestyle, and litigious environment increase liability risks. Boating accidents, pool injuries, dog bites, and auto accidents can all result in claims exceeding standard policy limits. Umbrella insurance fills this gap.",
        },
        {
            title: "Underlying Coverage Requirements",
            content: "To qualify for umbrella coverage, insurers require minimum limits on your underlying policies—typically $250,000-$500,000 in auto liability and $300,000-$500,000 in homeowners liability. We'll help you build a coordinated protection plan.",
        },
        {
            title: "Protecting Your Assets",
            content: "Florida has generous homestead protections, but your savings, investments, boats, vacation properties, and future income are all at risk in a major lawsuit. Umbrella insurance protects these assets from being seized to satisfy a judgment.",
        },
        {
            title: "Who Needs Umbrella Insurance",
            content: "You should consider umbrella coverage if you: own a home with a pool or trampoline, have teen drivers, own rental properties, have significant assets to protect, are active on social media, or employ household help. Really, anyone with assets is a candidate.",
        },
    ],

    faqs: [
        {
            question: "How much umbrella insurance do I need?",
            answer: "A common guideline is coverage equal to your net worth, but you should also consider future earning potential. Most people start with $1 million and add more as their assets grow. Coverage is available in increments up to $5 million or more for high-net-worth individuals.",
        },
        {
            question: "What does umbrella insurance cover that auto/home doesn't?",
            answer: "Umbrella insurance provides higher limits when your auto or home liability is exhausted. It also covers some things those policies don't, like personal injury claims (libel, slander), claims from incidents outside your home, and some legal defense costs. It truly is an 'umbrella' over your other policies.",
        },
        {
            question: "Is umbrella insurance expensive?",
            answer: "No—umbrella insurance is one of the best values in insurance. A $1 million policy typically costs $150-$300 per year (about $15-$25/month). Each additional million usually adds only $50-$75/year. That's very affordable protection for your assets.",
        },
        {
            question: "Does umbrella insurance cover my rental properties?",
            answer: "It depends on the policy. Some personal umbrella policies exclude or limit rental property coverage. If you have rental properties, we can find a policy that covers them or recommend a separate landlord policy with its own liability protection.",
        },
        {
            question: "Do I need umbrella insurance if I don't have many assets?",
            answer: "Yes, umbrella insurance protects more than just current assets—it protects your future income. If you're sued and a judgment exceeds your policy limits, your wages could be garnished for years. Umbrella insurance prevents this scenario for a very low cost.",
        },
    ],

    relatedCoverage: [
        {
            title: "Homeowners Insurance",
            href: "/personal/homeowners-insurance-florida",
            description: "Required underlying coverage for umbrella policies.",
        },
        {
            title: "Auto Insurance",
            href: "/personal/auto-insurance-florida",
            description: "Required underlying coverage for umbrella policies.",
        },
        {
            title: "Condo Insurance",
            href: "/personal/condo-insurance-florida",
            description: "Can serve as underlying coverage for condo owners.",
        },
    ],

    slug: "umbrella-insurance-florida",
    category: "personal",
}

export const metadata: Metadata = generateServiceMetadata({
    title: pageData.title,
    description: pageData.description,
    slug: pageData.slug,
    category: pageData.category,
})

export default function UmbrellaInsurancePage() {
    return <ServicePageTemplate data={pageData} />
}
