import Link from "next/link"
import { Building2, Shield, CheckCircle, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CTABand } from "@/components/sections"
import { siteConfig } from "@/config/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Insurance Carriers | Lewis Insurance Agency",
    description: "Lewis Insurance partners with 20+ top-rated insurance carriers to find you the best coverage at competitive rates. Compare quotes from multiple companies.",
}

const carrierCategories = [
    {
        name: "Homeowners Insurance Carriers",
        description: "Top-rated carriers for Florida home protection",
        carriers: [
            "Citizens Property Insurance",
            "Universal Property & Casualty",
            "Federated National",
            "American Integrity",
            "Heritage Insurance",
            "People's Trust",
            "Security First",
            "Florida Peninsula",
        ],
    },
    {
        name: "Auto Insurance Carriers",
        description: "Leading auto insurers in Florida",
        carriers: [
            "Progressive",
            "Safeco",
            "Travelers",
            "National General",
            "Bristol West",
            "Dairyland",
            "Kemper",
            "Foremost",
        ],
    },
    {
        name: "Flood Insurance Carriers",
        description: "NFIP and private flood options",
        carriers: [
            "NFIP (National Flood Insurance Program)",
            "Wright Flood",
            "Neptune Flood",
            "Palomar",
            "Hiscox",
        ],
    },
    {
        name: "Business Insurance Carriers",
        description: "Commercial coverage for Florida businesses",
        carriers: [
            "The Hartford",
            "Travelers",
            "CNA",
            "Employers",
            "AmTrust",
            "BTIS",
            "Next Insurance",
            "Pie Insurance",
        ],
    },
]

const benefits = [
    {
        title: "Compare Multiple Quotes",
        description: "We shop your coverage across 20+ carriers to find the best combination of coverage and price.",
    },
    {
        title: "One Agent, Many Options",
        description: "Work with a single local agent who can access quotes from all our carrier partners.",
    },
    {
        title: "Best Rates Available",
        description: "Different carriers offer different rates—we find which one is best for your situation.",
    },
    {
        title: "Local Expertise",
        description: "We know which carriers perform best in Florida and handle claims efficiently.",
    },
]

export default function CarriersPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-16 md:py-20">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-16 h-16 rounded-2xl bg-lewis-blue/10 flex items-center justify-center mx-auto mb-6">
                            <Building2 className="h-8 w-8 text-lewis-blue" />
                        </div>
                        <h1 className="text-lewis-ink mb-4">Our Insurance Carriers</h1>
                        <p className="text-xl text-lewis-body">
                            As an independent agency, Lewis Insurance partners with {siteConfig.trust.carrierCount} top-rated
                            insurance carriers. This means more options, better rates, and coverage tailored to your needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Why Multiple Carriers */}
            <section className="section-wrapper bg-white">
                <div className="container-lg">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-lewis-ink mb-4">The Independent Advantage</h2>
                        <p className="text-lewis-body">
                            Unlike captive agents who represent a single company, we work with multiple carriers
                            to find you the best coverage at competitive rates.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((benefit) => (
                            <Card key={benefit.title}>
                                <CardContent className="p-6">
                                    <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center mb-4">
                                        <CheckCircle className="h-5 w-5 text-green-600" />
                                    </div>
                                    <h3 className="font-semibold text-lewis-ink mb-2">{benefit.title}</h3>
                                    <p className="text-sm text-lewis-body">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Carrier Categories */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-lewis-ink mb-4">Carrier Partners by Coverage Type</h2>
                        <p className="text-lewis-body">
                            We work with specialized carriers across all insurance categories to ensure
                            you get the right coverage from the right company.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {carrierCategories.map((category) => (
                            <Card key={category.name}>
                                <CardContent className="p-6">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-xl bg-lewis-blue/10 flex items-center justify-center">
                                            <Shield className="h-5 w-5 text-lewis-blue" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lewis-ink">{category.name}</h3>
                                            <p className="text-sm text-lewis-body">{category.description}</p>
                                        </div>
                                    </div>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {category.carriers.map((carrier) => (
                                            <li key={carrier} className="flex items-center gap-2 text-sm text-lewis-body">
                                                <CheckCircle className="h-3.5 w-3.5 text-green-500 flex-shrink-0" />
                                                {carrier}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <p className="text-center text-sm text-gray-500 mt-8">
                        Carrier availability may vary by location and coverage type. Additional carriers available upon request.
                    </p>
                </div>
            </section>

            {/* How It Works */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-lewis-ink mb-4">How We Find Your Best Rate</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                            <div>
                                <div className="w-12 h-12 rounded-full bg-lewis-blue text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    1
                                </div>
                                <h3 className="font-semibold text-lewis-ink mb-2">You Share Your Needs</h3>
                                <p className="text-sm text-lewis-body">
                                    Tell us about your property, vehicles, or business. We gather the information
                                    carriers need for accurate quotes.
                                </p>
                            </div>
                            <div>
                                <div className="w-12 h-12 rounded-full bg-lewis-blue text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    2
                                </div>
                                <h3 className="font-semibold text-lewis-ink mb-2">We Shop Multiple Carriers</h3>
                                <p className="text-sm text-lewis-body">
                                    We submit your information to multiple carriers simultaneously, comparing coverage
                                    options and pricing.
                                </p>
                            </div>
                            <div>
                                <div className="w-12 h-12 rounded-full bg-lewis-blue text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    3
                                </div>
                                <h3 className="font-semibold text-lewis-ink mb-2">You Choose the Best Fit</h3>
                                <p className="text-sm text-lewis-body">
                                    We present your options with clear explanations. You choose the carrier that
                                    offers the best value for your situation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-lewis-ink mb-4">Ready to Compare Rates?</h2>
                        <p className="text-lewis-body mb-6">
                            Let us shop your coverage across our carrier partners. Get multiple quotes
                            with one simple request—no obligation, no pressure.
                        </p>
                        <Button asChild className="btn-primary rounded-full">
                            <Link href="/contact">
                                Get Your Free Quotes
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <CTABand />
        </>
    ),
    alternates: {
        canonical: `https://lewisinsurance.com/carriers`,
    },
}
