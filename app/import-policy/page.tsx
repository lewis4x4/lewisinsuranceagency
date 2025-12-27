"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Shield, CheckCircle, Clock, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { siteConfig } from "@/config/site"

const benefits = [
    {
        icon: Clock,
        title: "Save Time",
        description: "No need to dig through paperwork. We pull your policy details automatically.",
    },
    {
        icon: Shield,
        title: "Better Quotes",
        description: "With your actual coverage details, we can find you more accurate quotes.",
    },
    {
        icon: CheckCircle,
        title: "Easy Comparison",
        description: "See exactly how your current coverage stacks up against alternatives.",
    },
    {
        icon: Users,
        title: "Personal Service",
        description: "Our team reviews your policy and reaches out with personalized recommendations.",
    },
]

export default function ImportPolicyPage() {
    // Load Canopy Connect script
    useEffect(() => {
        if (!document.querySelector('script[src*="usecanopy"]')) {
            const script = document.createElement("script")
            script.src = siteConfig.canopy.scriptUrl
            script.async = true
            document.head.appendChild(script)
        }
    }, [])

    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-12 md:py-16">
                <div className="container-lg">
                    <div className="max-w-2xl mx-auto text-center">
                        <h1 className="text-lewis-ink mb-4">Import Your Current Policy</h1>
                        <p className="text-xl text-lewis-body">
                            Connect your existing insurance account and let us shop for better rates.
                            It only takes a minute.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Canopy Connect Widget */}
                        <div className="order-2 lg:order-1">
                            <Card className="overflow-hidden">
                                <CardContent className="p-0">
                                    <div
                                        data-canopy-connect-public-alias={siteConfig.canopy.publicAlias}
                                        data-canopy-connect-success-url={siteConfig.canopy.successUrl}
                                        className="canopy-connect-mount"
                                        style={{ width: "100%", minHeight: "600px" }}
                                    />
                                </CardContent>
                            </Card>
                            <p className="text-xs text-center text-lewis-body mt-4">
                                Your login credentials are never stored by Lewis Insurance.
                                <br />
                                Powered by <a href="https://usecanopy.com" target="_blank" rel="noopener noreferrer" className="text-lewis-blue hover:underline">Canopy Connect</a>
                            </p>
                        </div>

                        {/* Benefits */}
                        <div className="order-1 lg:order-2 space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold text-lewis-ink mb-4">
                                    Why Connect Your Policy?
                                </h2>
                                <p className="text-lewis-body">
                                    When you connect your existing insurance account, we can see exactly what
                                    coverage you have and find you better options without the hassle of
                                    filling out long forms.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {benefits.map((benefit) => {
                                    const Icon = benefit.icon
                                    return (
                                        <div key={benefit.title} className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                                <Icon className="h-5 w-5 text-lewis-blue" />
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lewis-ink">{benefit.title}</h3>
                                                <p className="text-sm text-lewis-body">{benefit.description}</p>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                            <Card className="bg-lewis-page border-lewis-border">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-lewis-ink mb-2">
                                        What happens after I connect?
                                    </h3>
                                    <ol className="space-y-2 text-sm text-lewis-body">
                                        <li className="flex items-start gap-2">
                                            <span className="font-semibold text-lewis-blue">1.</span>
                                            We receive your policy details securely
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-semibold text-lewis-blue">2.</span>
                                            Our team reviews your current coverage
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-semibold text-lewis-blue">3.</span>
                                            We shop quotes from {siteConfig.trust.carrierCount} carriers
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="font-semibold text-lewis-blue">4.</span>
                                            A Lewis agent contacts you within 1-2 business days
                                        </li>
                                    </ol>
                                </CardContent>
                            </Card>

                            <div className="text-center lg:text-left">
                                <p className="text-sm text-lewis-body">
                                    Prefer to talk to someone?{" "}
                                    <a
                                        href={`tel:${siteConfig.contact.phone.main.replace(/[^0-9]/g, "")}`}
                                        className="text-lewis-blue font-medium hover:underline"
                                    >
                                        Call {siteConfig.contact.phone.main}
                                    </a>
                                    {" "}or{" "}
                                    <Link href="/contact" className="text-lewis-blue font-medium hover:underline">
                                        send us a message
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
