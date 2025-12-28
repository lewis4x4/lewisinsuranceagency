import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { siteConfig } from "@/config/site"
import { CTABand } from "@/components/sections"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Service Areas",
    description: "Lewis Insurance serves all of Florida from our Lake City office. Find insurance agents near you in Jacksonville, Gainesville, Tampa, Orlando, and more.",
    alternates: {
        canonical: "https://lewisinsurance.com/locations",
    },
}

const majorCities = [
    { name: "Lake City", slug: "lake-city-fl", description: "Our home office in Columbia County.", isHome: true },
    { name: "Jacksonville", slug: "jacksonville-fl", description: "Serving Northeast Florida and Duval County." },
    { name: "Gainesville", slug: "gainesville-fl", description: "Serving Alachua County and North Central Florida." },
    { name: "Ocala", slug: "ocala-fl", description: "Serving Marion County and the Horse Capital." },
    { name: "Tallahassee", slug: "tallahassee-fl", description: "Serving the Capital and Big Bend Region." },
    { name: "Tampa", slug: "tampa-fl", description: "Serving Tampa Bay and Hillsborough County." },
    { name: "Orlando", slug: "orlando-fl", description: "Serving Central Florida and Orange County." },
    { name: "Miami", slug: "miami-fl", description: "Serving Miami-Dade County and surrounding areas." },
]

export default function LocationsPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-16 md:py-20">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <Badge className="mb-6 bg-lewis-blue/10 text-lewis-blue border-lewis-blue/20">
                            <MapPin className="h-3 w-3 mr-1" />
                            Serving All of Florida
                        </Badge>
                        <h1 className="text-lewis-ink mb-4">Find Insurance Near You</h1>
                        <p className="text-xl text-lewis-body">
                            Lewis Insurance serves clients throughout the Sunshine State. Find local insurance
                            expertise in your Florida community.
                        </p>
                    </div>
                </div>
            </section>

            {/* Cities Grid */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-lewis-ink mb-4">Major Florida Cities</h2>
                        <p className="text-lg text-lewis-body">
                            Click your city to learn about local insurance considerations and get a quote.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {majorCities.map((city) => (
                            <Link key={city.slug} href={`/locations/${city.slug}`}>
                                <Card className="h-full card-hover group cursor-pointer">
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between mb-2">
                                            <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center group-hover:bg-lewis-blue transition-colors">
                                                <MapPin className="h-5 w-5 text-lewis-blue group-hover:text-white transition-colors" />
                                            </div>
                                            <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-lewis-blue transition-colors" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-lewis-ink mb-1 group-hover:text-lewis-blue transition-colors">
                                            {city.name}, FL
                                        </h3>
                                        <p className="text-sm text-lewis-body">{city.description}</p>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Service Areas */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="text-center max-w-2xl mx-auto mb-8">
                        <h2 className="text-lewis-ink mb-4">All Florida Service Areas</h2>
                        <p className="text-lg text-lewis-body">
                            We're licensed throughout Florida and serve clients in every county.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3">
                        {siteConfig.serviceAreas.map((city) => (
                            <Link
                                key={city}
                                href={`/locations/${city.toLowerCase().replace(/\s+/g, "-")}-fl`}
                            >
                                <Badge variant="secondary" className="py-1.5 px-4 hover:bg-lewis-blue hover:text-white transition-colors cursor-pointer">
                                    {city}
                                </Badge>
                            </Link>
                        ))}
                        <Badge variant="secondary" className="py-1.5 px-4 bg-lewis-blue/10 text-lewis-blue">
                            + All of Florida
                        </Badge>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTABand />
        </>
    );
}
