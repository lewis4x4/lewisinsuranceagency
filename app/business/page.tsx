import { CoverageGrid } from "@/components/sections"
import { FAQSection } from "@/components/sections"
import { CTABand } from "@/components/sections"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Business Insurance",
    description: "Protect your Florida business with comprehensive commercial insurance. Compare quotes for general liability, workers comp, commercial auto, BOP, E&O, and cyber insurance.",
}

const businessFAQs = [
    {
        question: "Does Florida require workers compensation insurance?",
        answer: "Florida requires workers compensation for most employers: construction businesses with 1+ employees, non-construction businesses with 4+ employees, and agricultural businesses with 6+ regular employees or 12+ seasonal workers. Even if not required, it's often smart to carry coverage to protect your business and employees.",
    },
    {
        question: "What's the difference between general liability and professional liability?",
        answer: "General liability covers third-party bodily injury and property damage claims (like a customer slipping in your store). Professional liability (E&O) covers claims arising from your professional services or advice—like if a client claims your work caused them financial harm. Many businesses need both.",
    },
    {
        question: "What is a Business Owners Policy (BOP)?",
        answer: "A BOP bundles general liability and commercial property insurance into one convenient, often discounted policy. It's designed for small to medium businesses and typically costs less than buying the coverages separately. We can help you determine if a BOP is right for your business.",
    },
    {
        question: "Do I need cyber liability insurance?",
        answer: "If your business stores customer data, processes credit cards, or relies on computer systems, cyber liability insurance is increasingly important. It covers data breach costs, ransom payments, business interruption, and liability from compromised customer information. Even small businesses are targets for cyber attacks.",
    },
    {
        question: "How do I determine how much coverage my business needs?",
        answer: "Coverage needs depend on your industry, size, assets, contracts, and risk exposure. Many contracts and landlords require minimum coverage limits. We'll review your specific situation, understand your operations, and recommend coverage that protects your business without paying for what you don't need.",
    },
]

export default function BusinessPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-16 md:py-20">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-6 bg-lewis-blue/10 text-lewis-blue border-lewis-blue/20">
                            Business Insurance
                        </Badge>
                        <h1 className="text-lewis-ink mb-4">
                            Protect Your Business
                        </h1>
                        <p className="text-xl text-lewis-body">
                            From general liability to workers comp to cyber coverage, we'll help you build
                            a comprehensive insurance program that protects your business and fits your budget.
                        </p>
                    </div>
                </div>
            </section>

            {/* Coverage Grid */}
            <CoverageGrid variant="business" />

            {/* FAQ */}
            <FAQSection items={businessFAQs} />

            {/* CTA */}
            <CTABand />
        </>
    )
}
