import { ServicePageTemplate, type ServicePageData } from "@/components/templates"
import type { Metadata } from "next"

const pageData: ServicePageData = {
    title: "Commercial Auto Insurance",
    description: "Florida commercial auto insurance for business vehicles. Coverage for company cars, trucks, and fleets. Compare quotes from multiple carriers.",

    badge: "Business Insurance",
    headline: "Florida Commercial Auto Insurance",
    subheadline: "If your business owns vehicles or employees drive for work, you need commercial auto insurance. It protects your business from accidents on the road.",

    overview: [
        "Commercial auto insurance covers vehicles owned or used by your business. Unlike personal auto insurance, commercial coverage is designed for the unique risks of business use—employee drivers, higher liability exposure, and often larger or specialized vehicles.",
        "Florida law requires auto insurance for any vehicle on the road, and if that vehicle is used for business, personal auto policies typically don't provide coverage. Using personal insurance for business purposes could leave you uninsured when you need protection most.",
        "Commercial auto policies can cover a single company car, a fleet of trucks, or employees using personal vehicles for business. Coverage options include liability, collision, comprehensive, uninsured motorist, medical payments, and hired/non-owned auto.",
        "As an independent agency, we work with multiple commercial auto carriers to find coverage that fits your fleet and budget. Whether you have one vehicle or a hundred, we'll build a program that protects your business on Florida's roads.",
    ],

    coverageIncludes: [
        {
            title: "Liability Coverage",
            description: "Covers injuries and property damage you cause to others in an at-fault accident.",
        },
        {
            title: "Collision Coverage",
            description: "Pays to repair or replace your business vehicles damaged in an accident.",
        },
        {
            title: "Comprehensive Coverage",
            description: "Covers damage from theft, vandalism, weather, hitting animals, and more.",
        },
        {
            title: "Uninsured/Underinsured Motorist",
            description: "Protects you when the at-fault driver lacks adequate insurance.",
        },
        {
            title: "Medical Payments",
            description: "Covers medical expenses for you and passengers regardless of fault.",
        },
        {
            title: "Hired & Non-Owned Auto",
            description: "Covers rental vehicles and employee personal vehicles used for business.",
        },
    ],

    commonExclusions: [
        "Personal use of business vehicles (depends on policy)",
        "Vehicles not listed on the policy",
        "Racing or illegal activities",
        "Intentional damage",
        "Mechanical breakdown",
        "Employees excluded from coverage",
        "Vehicles used beyond described operations",
    ],

    floridaSpecific: [
        {
            title: "Florida Commercial Auto Requirements",
            content: "Florida requires commercial vehicles to carry at least $10,000 PIP and $10,000 property damage liability. However, many businesses need much higher limits—especially if you have contracts requiring $1 million in liability. Trucking and transportation businesses have federal minimum requirements.",
        },
        {
            title: "For-Hire & Delivery Operations",
            content: "If your business involves for-hire transportation, delivery, or ride-sharing, standard commercial auto may not be sufficient. These operations often require specialized coverage and higher limits. We can help you find appropriate coverage for your operations.",
        },
        {
            title: "Fleet Management",
            content: "Businesses with multiple vehicles can often save with fleet pricing. We can also help implement telematics programs that may reduce premiums through monitored driving behavior and help manage driver safety.",
        },
        {
            title: "Driver Eligibility",
            content: "Commercial auto underwriters carefully review driver records. Drivers with DUIs, multiple violations, or young/inexperienced drivers may impact your rates or eligibility. We'll help you understand driver requirements and find markets for challenging driver situations.",
        },
    ],

    faqs: [
        {
            question: "When do I need commercial auto instead of personal?",
            answer: "You need commercial auto if: vehicles are titled to a business, vehicles are used primarily for business (deliveries, client visits, hauling equipment), employees other than you drive the vehicle, the vehicle is a truck/van used for business, or you transport goods or people for hire. Personal policies typically exclude business use.",
        },
        {
            question: "What is hired and non-owned auto coverage?",
            answer: "Hired auto covers vehicles you rent or borrow for business use. Non-owned auto covers employees using their personal vehicles for business (running errands, meeting clients). This coverage is crucial even if you don't own business vehicles—it protects your business when employees drive their cars for work.",
        },
        {
            question: "How are commercial auto rates determined?",
            answer: "Rates depend on: types of vehicles, what they're used for, how far they travel, number and experience of drivers, driver records, coverage limits, and your claims history. Heavier vehicles, longer distances, and delivery/hauling operations typically cost more. We shop multiple carriers to find the best rates.",
        },
        {
            question: "Does commercial auto cover personal use?",
            answer: "It depends on your policy. Some policies include personal use by named individuals; others restrict coverage to business use only. If employees take company vehicles home, make sure personal use is covered. We'll structure your policy to match how vehicles are actually used.",
        },
        {
            question: "What if I use my personal car for business sometimes?",
            answer: "Your personal auto policy may cover occasional business use (like driving to meetings), but regular business use or driving for hire typically needs commercial coverage. An alternative is hired/non-owned auto coverage on your business policy, which can provide backup coverage when employees use personal vehicles for work.",
        },
    ],

    relatedCoverage: [
        {
            title: "General Liability",
            href: "/business/general-liability-florida",
            description: "Covers non-auto business liability claims.",
        },
        {
            title: "Workers Compensation",
            href: "/business/workers-compensation-florida",
            description: "Covers employee injuries in vehicle accidents.",
        },
        {
            title: "Business Owners Policy",
            href: "/business/business-owners-policy-florida",
            description: "Bundle property and liability coverage.",
        },
    ],

    slug: "commercial-auto-florida",
    category: "business",
}

export const metadata: Metadata = {
    title: pageData.title,
    description: pageData.description,
}

export default function CommercialAutoPage() {
    return <ServicePageTemplate data={pageData} />
}
