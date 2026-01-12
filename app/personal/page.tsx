import { CoverageGrid } from "@/components/sections"
import { FAQSection } from "@/components/sections"
import { CTABand } from "@/components/sections"
import { Badge } from "@/components/ui/badge"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Personal Insurance in Florida | Lewis Insurance",
    description: "Florida personal insurance from Lewis Insurance. Home, auto, flood, condo, renters, and umbrella coverage. Compare quotes from 30+ carriers.",
    alternates: {
        canonical: "https://lewisinsurance.com/personal",
    },
}

const personalFAQs = [
    {
        question: "What's the difference between HO3 and HO5 homeowners policies?",
        answer: "HO3 is the most common homeowners policy. It covers your home for all perils except those specifically excluded (like flooding), and covers your belongings for named perils only. HO5 provides broader coverage, insuring both your home and belongings against all perils except exclusions. HO5 typically costs more but offers more comprehensive protection.",
    },
    {
        question: "Is flood insurance included in my homeowners policy?",
        answer: "No, standard Florida homeowners policies do not cover flood damage. You need a separate flood insurance policy. Even if you're not in a designated flood zone, floods can happen anywhere in Florida, so we typically recommend flood coverage for all homeowners.",
    },
    {
        question: "What factors affect my auto insurance rates in Florida?",
        answer: "Florida auto insurance rates are influenced by your driving record, age, type of vehicle, coverage levels chosen, credit history (where permitted), annual mileage, where you live, and whether you bundle with other policies. Florida's no-fault insurance system also affects rates.",
    },
    {
        question: "Do I need renters insurance if my landlord has coverage?",
        answer: "Yes. Your landlord's policy only covers the building structure—not your personal belongings, liability, or additional living expenses if you're displaced. Renters insurance is affordable (often under $20/month) and protects your belongings from theft, fire, and other covered perils.",
    },
    {
        question: "What is umbrella insurance and do I need it?",
        answer: "Umbrella insurance provides extra liability protection beyond the limits of your home and auto policies. If you're sued for more than your other policies cover, umbrella insurance kicks in. We recommend it if you have significant assets to protect, a pool or trampoline, teen drivers, or regularly host guests.",
    },
]

export default function PersonalPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-16 md:py-20">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-6 bg-lewis-blue/10 text-lewis-blue border-lewis-blue/20">
                            Personal Insurance
                        </Badge>
                        <h1 className="text-lewis-ink mb-4">
                            Protect What Matters Most
                        </h1>
                        <p className="text-xl text-lewis-body">
                            From your home to your car to your family's future, we'll help you find the right
                            coverage at competitive rates. As independent agents, we shop multiple carriers to
                            bring you options.
                        </p>
                    </div>
                </div>
            </section>

            {/* Coverage Grid */}
            <CoverageGrid variant="personal" />

            {/* FAQ */}
            <FAQSection items={personalFAQs} />

            {/* CTA */}
            <CTABand />
        </>
    );
}
