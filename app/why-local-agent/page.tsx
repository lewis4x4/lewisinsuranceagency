import Link from "next/link"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
    Users,
    Shield,
    Phone,
    MapPin,
    CheckCircle,
    XCircle,
    ArrowRight,
    Building2,
    HeartHandshake,
    Scale,
} from "lucide-react"
import { CTABand } from "@/components/sections"
import { siteConfig } from "@/config/site"

const baseUrl = `https://${siteConfig.domain}`

export const metadata: Metadata = {
    title: "Why Choose a Local Insurance Agent | Local vs Direct Insurance",
    description: "Discover the benefits of working with an independent local insurance agent vs. buying direct. Personalized service, multiple carrier options, and local expertise.",
    alternates: {
        canonical: `${baseUrl}/why-local-agent`,
    },
    openGraph: {
        title: "Why Choose a Local Insurance Agent | Lewis Insurance",
        description: "Discover the benefits of working with an independent local insurance agent vs. buying direct.",
        url: `${baseUrl}/why-local-agent`,
        siteName: siteConfig.name,
        locale: "en_US",
        type: "website",
    },
}

const benefits = [
    {
        icon: Users,
        title: "Personal Relationship",
        description: "Know your agent by name. We remember your family, your situation, and your needs—not just your policy number.",
    },
    {
        icon: Scale,
        title: "Multiple Carrier Options",
        description: "We compare quotes from 20+ insurance companies to find you the best coverage at the best price.",
    },
    {
        icon: HeartHandshake,
        title: "Claims Advocacy",
        description: "When you need to file a claim, we're in your corner. We advocate for you with the insurance company.",
    },
    {
        icon: MapPin,
        title: "Local Knowledge",
        description: "We understand Florida's unique insurance challenges—hurricanes, flood zones, wind mitigation, and more.",
    },
    {
        icon: Phone,
        title: "Real Human Support",
        description: "Call us and talk to a real person who knows your policy. No automated phone trees or overseas call centers.",
    },
    {
        icon: Shield,
        title: "Year-Round Service",
        description: "We proactively review your coverage annually to ensure you're properly protected as your life changes.",
    },
]

const comparisonData = [
    {
        feature: "Multiple carrier options",
        local: true,
        direct: false,
    },
    {
        feature: "Personalized coverage advice",
        local: true,
        direct: false,
    },
    {
        feature: "Claims assistance & advocacy",
        local: true,
        direct: false,
    },
    {
        feature: "Annual policy reviews",
        local: true,
        direct: false,
    },
    {
        feature: "Local office to visit",
        local: true,
        direct: false,
    },
    {
        feature: "Same agent every time",
        local: true,
        direct: false,
    },
    {
        feature: "Understanding of local risks",
        local: true,
        direct: false,
    },
    {
        feature: "Bundle discounts across carriers",
        local: true,
        direct: false,
    },
]

export default function WhyLocalAgentPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-16 md:py-24">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-4 bg-lewis-blue/10 text-lewis-blue border-lewis-blue/20">
                            The Independent Agent Advantage
                        </Badge>
                        <h1 className="text-lewis-ink mb-6">
                            Why Choose a Local Insurance Agent?
                        </h1>
                        <p className="text-xl text-lewis-body mb-8">
                            In a world of online quotes and 1-800 numbers, there's still no substitute
                            for a local expert who knows you, your family, and your community.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="btn-primary rounded-full">
                                <Link href="/contact">
                                    Get a Free Quote
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="rounded-full">
                                <Link href={`tel:${siteConfig.contact.phone.main}`}>
                                    <Phone className="mr-2 h-5 w-5" />
                                    Call {siteConfig.contact.phone.main}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Problem with Direct Insurance */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                                <Building2 className="h-6 w-6 text-red-600" />
                            </div>
                            <h2 className="text-lewis-ink">The Problem with "Direct" Insurance</h2>
                        </div>
                        <div className="prose prose-lg max-w-none text-lewis-body">
                            <p>
                                Those catchy commercials make it seem so simple: "15 minutes could save you 15%."
                                But what they don't tell you is what happens after you buy the policy.
                            </p>
                            <p>
                                When you buy direct from a big insurance company, you're just a policy number.
                                You'll talk to a different person every time you call—if you can get through
                                the automated system at all. And when you need to file a claim? You're on your own,
                                negotiating with a company whose goal is to pay out as little as possible.
                            </p>
                            <p>
                                <strong>There's a better way.</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Benefits Grid */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="text-center mb-12">
                        <h2 className="text-lewis-ink mb-4">The Local Agent Difference</h2>
                        <p className="text-xl text-lewis-body max-w-2xl mx-auto">
                            Working with an independent local agent means you get personalized service
                            and the power of choice—all in one place.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {benefits.map((benefit) => (
                            <Card key={benefit.title} className="card-hover">
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 rounded-full bg-lewis-orange/10 flex items-center justify-center mb-4">
                                        <benefit.icon className="h-6 w-6 text-lewis-orange" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-lewis-ink mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-lewis-body">
                                        {benefit.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Table */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-lewis-ink mb-4">Local Agent vs. Direct Insurance</h2>
                            <p className="text-xl text-lewis-body">
                                See the difference for yourself.
                            </p>
                        </div>
                        <Card>
                            <CardContent className="p-0">
                                <div className="overflow-x-auto">
                                    <table className="w-full">
                                        <thead>
                                            <tr className="border-b border-lewis-border">
                                                <th className="text-left p-4 font-semibold text-lewis-ink">
                                                    Feature
                                                </th>
                                                <th className="text-center p-4 font-semibold text-lewis-blue bg-lewis-blue/5">
                                                    Local Agent
                                                </th>
                                                <th className="text-center p-4 font-semibold text-lewis-body">
                                                    Direct/Online
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {comparisonData.map((row, index) => (
                                                <tr
                                                    key={row.feature}
                                                    className={index < comparisonData.length - 1 ? "border-b border-lewis-border" : ""}
                                                >
                                                    <td className="p-4 text-lewis-body">
                                                        {row.feature}
                                                    </td>
                                                    <td className="p-4 text-center bg-lewis-blue/5">
                                                        {row.local ? (
                                                            <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                                                        ) : (
                                                            <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                                                        )}
                                                    </td>
                                                    <td className="p-4 text-center">
                                                        {row.direct ? (
                                                            <CheckCircle className="h-5 w-5 text-green-600 mx-auto" />
                                                        ) : (
                                                            <XCircle className="h-5 w-5 text-red-500 mx-auto" />
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-lewis-ink mb-6">Trusted by Florida Families Since 1981</h2>
                        <p className="text-xl text-lewis-body mb-8">
                            For over {siteConfig.trust.yearsInBusiness} years, Lewis Insurance has been helping
                            Florida families and businesses find the right coverage at the right price.
                            We're not a faceless corporation—we're your neighbors.
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-lewis-blue mb-1">
                                    {siteConfig.trust.yearsInBusiness}+
                                </div>
                                <div className="text-sm text-lewis-body">Years in Business</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-lewis-blue mb-1">
                                    {siteConfig.trust.carrierCount}
                                </div>
                                <div className="text-sm text-lewis-body">Insurance Carriers</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-lewis-blue mb-1">
                                    {siteConfig.trust.reviewCount}
                                </div>
                                <div className="text-sm text-lewis-body">Happy Clients</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold text-lewis-blue mb-1">
                                    {siteConfig.trust.averageRating}
                                </div>
                                <div className="text-sm text-lewis-body">Star Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="section-wrapper bg-lewis-blue text-white">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-white mb-4">Ready to Experience the Difference?</h2>
                        <p className="text-xl text-white/80 mb-8">
                            Get a free quote and see why thousands of Floridians trust Lewis Insurance
                            for their home, auto, flood, and business insurance needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button asChild size="lg" className="btn-accent rounded-full">
                                <Link href="/contact">
                                    Get Your Free Quote
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Link>
                            </Button>
                            <Button
                                asChild
                                size="lg"
                                variant="outline"
                                className="rounded-full border-white text-white hover:bg-white hover:text-lewis-blue"
                            >
                                <Link href={`tel:${siteConfig.contact.phone.main}`}>
                                    <Phone className="mr-2 h-5 w-5" />
                                    {siteConfig.contact.phone.main}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Band */}
            <CTABand />
        </>
    )
}
