import { ServicePageTemplate, type ServicePageData } from "@/components/templates"
import { generateServiceMetadata } from "@/lib/schema"
import type { Metadata } from "next"

const pageData: ServicePageData = {
    title: "Auto Insurance",
    description: "Get competitive Florida auto insurance quotes. Compare rates for liability, PIP, collision, and comprehensive coverage from multiple carriers.",

    badge: "Personal Insurance",
    headline: "Florida Auto Insurance",
    subheadline: "Florida requires specific auto insurance coverage, and we'll help you understand your options and find competitive rates from multiple carriers.",

    overview: [
        "Florida has unique auto insurance requirements as a no-fault state. Every driver must carry Personal Injury Protection (PIP) and Property Damage Liability at minimum. But minimum coverage may not be enough to fully protect you—we'll help you understand what coverage makes sense for your situation.",
        "As an independent agency, we work with multiple auto insurance carriers to compare rates and find you the best deal. Rates vary significantly between companies, so shopping around is one of the best ways to save on auto insurance.",
        "Beyond just meeting legal requirements, a comprehensive auto policy protects you financially if you cause an accident, if your car is damaged or stolen, or if you're hit by an uninsured driver. We'll help you build coverage that protects you without paying for what you don't need.",
        "Bundle your auto insurance with homeowners or renters insurance and you'll typically save 10-25% on your premiums. We can quote everything together to show you the savings.",
    ],

    coverageIncludes: [
        {
            title: "Personal Injury Protection (PIP)",
            description: "Required in Florida. Covers your medical expenses regardless of fault, up to policy limits.",
        },
        {
            title: "Property Damage Liability",
            description: "Required. Pays for damage you cause to others' property, including their vehicles.",
        },
        {
            title: "Bodily Injury Liability",
            description: "Not required but strongly recommended. Pays for injuries you cause to others.",
        },
        {
            title: "Collision Coverage",
            description: "Pays for damage to your car from an accident, regardless of fault.",
        },
        {
            title: "Comprehensive Coverage",
            description: "Covers damage from theft, vandalism, weather, hitting an animal, and more.",
        },
        {
            title: "Uninsured/Underinsured Motorist",
            description: "Protects you if you're hit by a driver without adequate insurance.",
        },
    ],

    commonExclusions: [
        "Wear and tear/mechanical breakdown",
        "Personal belongings in your car (covered by homeowners/renters)",
        "Commercial use (if using for business)",
        "Racing or competition use",
        "Intentional damage",
        "Damage while driving under the influence",
    ],

    floridaSpecific: [
        {
            title: "Florida's No-Fault System",
            content: "Florida is a no-fault state, meaning your own PIP coverage pays for your injuries regardless of who caused the accident. This is why PIP is required. However, you can still sue the at-fault driver for serious injuries that exceed your PIP coverage.",
        },
        {
            title: "Minimum Requirements",
            content: "Florida requires $10,000 PIP and $10,000 Property Damage Liability. However, we strongly recommend higher limits—$10,000 won't go far if you cause a serious accident. Bodily Injury Liability isn't required but is essential for protecting your assets.",
        },
        {
            title: "Uninsured Motorist Coverage",
            content: "Florida has one of the highest rates of uninsured drivers in the country—about 20%. Uninsured/Underinsured Motorist coverage protects you if you're hit by a driver without adequate insurance. We strongly recommend this coverage.",
        },
        {
            title: "Hurricane & Flood Damage",
            content: "Comprehensive coverage typically covers damage from hurricanes and flooding to your vehicle. However, if your car is totaled, you'll receive the actual cash value—consider gap insurance if you owe more than your car is worth.",
        },
    ],

    faqs: [
        {
            question: "What are Florida's minimum auto insurance requirements?",
            answer: "Florida requires $10,000 in Personal Injury Protection (PIP) and $10,000 in Property Damage Liability. Bodily Injury Liability is not required by the state, but many people need it to protect their assets. If you cause an accident with serious injuries, $10,000 in property damage liability won't go far—we typically recommend much higher limits.",
        },
        {
            question: "Why are Florida auto insurance rates so high?",
            answer: "Florida has some of the highest auto insurance rates in the country due to several factors: high population density, heavy traffic, a large number of uninsured drivers, no-fault insurance system, frequent severe weather, and high rates of insurance fraud. Shopping with multiple carriers is one of the best ways to find competitive rates.",
        },
        {
            question: "Should I carry full coverage on an older car?",
            answer: "It depends on your car's value and your financial situation. If your car is worth less than $3,000-4,000, paying for collision and comprehensive coverage may not make financial sense—the premiums over time could exceed what you'd receive in a total loss. However, if you couldn't afford to replace the car out of pocket, coverage might still be worthwhile.",
        },
        {
            question: "What discounts are available on Florida auto insurance?",
            answer: "Common discounts include: multi-policy (bundling with home/renters), multi-car, good driver, good student, anti-theft devices, safe vehicle features, low mileage, and loyalty discounts. Additionally, taking a defensive driving course can sometimes reduce your rates. We'll identify all available discounts when quoting your policy.",
        },
        {
            question: "Does my auto insurance cover me when driving someone else's car?",
            answer: "Generally, auto insurance follows the car, not the driver. If you borrow someone's car and get in an accident, their insurance is typically primary. Your own insurance may provide secondary coverage if their limits are exceeded. However, policies vary—check with us if you frequently drive other vehicles.",
        },
    ],

    relatedCoverage: [
        {
            title: "Umbrella Insurance",
            href: "/personal/umbrella-insurance-florida",
            description: "Extra liability protection beyond your auto limits.",
        },
        {
            title: "Homeowners Insurance",
            href: "/personal/homeowners-insurance-florida",
            description: "Bundle and save on home and auto.",
        },
        {
            title: "Renters Insurance",
            href: "/personal/renters-insurance-florida",
            description: "Bundle with renters to save on both policies.",
        },
    ],

    slug: "auto-insurance-florida",
    category: "personal",
}

export const metadata: Metadata = generateServiceMetadata({
    title: pageData.title,
    description: pageData.description,
    slug: pageData.slug,
    category: pageData.category,
})

export default function AutoInsurancePage() {
    return <ServicePageTemplate data={pageData} />
}
