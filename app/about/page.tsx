import Link from "next/link"
import {
    Users,
    MapPin,
    ShieldCheck,
    Handshake,
    Award,
    ArrowRight,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us",
    description: "Lewis Insurance is an independent Florida insurance agency. Learn about our team, our mission, and why Florida families and businesses trust us with their insurance needs.",
}

const values = [
    {
        title: "Independence",
        description: "We work for you, not the insurance company. As an independent agency, we shop multiple carriers to find you the best coverage.",
        icon: ShieldCheck,
    },
    {
        title: "Local Expertise",
        description: "We understand Florida's unique insurance landscape—hurricanes, flood zones, wind mitigation, and more.",
        icon: MapPin,
    },
    {
        title: "Personal Service",
        description: "You're not a policy number. Our team provides personalized guidance and is here when you need us.",
        icon: Users,
    },
    {
        title: "Advocacy",
        description: "When you have a claim, we're on your side. We help navigate the process and advocate for fair treatment.",
        icon: Handshake,
    },
]

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-16 md:py-20">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-6 bg-lewis-blue/10 text-lewis-blue border-lewis-blue/20">
                            Licensed Florida Insurance Agency
                        </Badge>
                        <h1 className="text-lewis-ink mb-4">About Lewis Insurance</h1>
                        <p className="text-xl text-lewis-body">
                            An independent insurance agency dedicated to protecting Florida families and businesses
                            with personalized service and competitive coverage.
                        </p>
                    </div>
                </div>
            </section>

            {/* Our Story */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-lewis-ink mb-6">Our Story</h2>
                            <div className="space-y-4 text-lewis-body">
                                <p>
                                    Founded in 1981, Lewis Insurance has been serving Florida families and
                                    businesses for over 44 years with honest, personalized insurance guidance.
                                    As an independent agency, we're not tied to any single insurance company—which
                                    means we can truly shop the market on your behalf.
                                </p>
                                <p>
                                    We understand that insurance can be confusing and frustrating. That's why we take
                                    the time to explain your options in plain language, help you understand what you're
                                    buying, and find coverage that actually fits your needs and budget.
                                </p>
                                <p>
                                    Whether you're a first-time homebuyer, a growing family, or a business owner, we're
                                    here to be your trusted insurance advisor—not just when you're buying a policy, but
                                    whenever you have a question or need to file a claim.
                                </p>
                            </div>
                        </div>
                        <div className="bg-gray-100 rounded-2xl aspect-[4/3] flex items-center justify-center">
                            <div className="text-center p-8">
                                <Award className="h-16 w-16 text-lewis-blue/50 mx-auto mb-4" />
                                <p className="text-lewis-body text-sm">
                                    Team photo placeholder
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-lewis-ink mb-4">What We Stand For</h2>
                        <p className="text-lg text-lewis-body">
                            Our values guide everything we do, from how we advise clients to how we handle claims.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {values.map((value) => {
                            const Icon = value.icon
                            return (
                                <Card key={value.title}>
                                    <CardContent className="p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                                <Icon className="h-6 w-6 text-lewis-blue" />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-semibold text-lewis-ink mb-2">
                                                    {value.title}
                                                </h3>
                                                <p className="text-sm text-lewis-body">{value.description}</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-lewis-blue mb-2">
                                {siteConfig.trust.yearsInBusiness}+
                            </div>
                            <div className="text-sm text-lewis-body">Years in Business</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-lewis-blue mb-2">
                                {siteConfig.trust.carrierCount}
                            </div>
                            <div className="text-sm text-lewis-body">Carrier Partners</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-lewis-blue mb-2">
                                {siteConfig.trust.averageRating}★
                            </div>
                            <div className="text-sm text-lewis-body">Client Rating</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-lewis-blue mb-2">
                                FL
                            </div>
                            <div className="text-sm text-lewis-body">Licensed & Based</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="text-center max-w-2xl mx-auto mb-8">
                        <h2 className="text-lewis-ink mb-4">Serving All of Florida</h2>
                        <p className="text-lg text-lewis-body">
                            We're proud to serve clients throughout the Sunshine State.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {siteConfig.serviceAreas.map((city) => (
                            <Badge key={city} variant="secondary" className="text-sm py-1.5 px-4">
                                {city}
                            </Badge>
                        ))}
                        <Badge variant="secondary" className="text-sm py-1.5 px-4">
                            + All of Florida
                        </Badge>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 md:py-20 bg-gradient-to-r from-lewis-blue to-lewis-blue-dark">
                <div className="container-lg text-center">
                    <h2 className="text-white mb-4">Ready to Work Together?</h2>
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                        Let us help you find the right insurance coverage for your needs.
                    </p>
                    <Button asChild size="lg" className="btn-accent rounded-full">
                        <Link href="/contact">
                            Get a Free Quote
                            <ArrowRight className="h-4 w-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </section>
        </>
    )
}
