import Link from "next/link"
import { MapPin, CheckCircle, Phone, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HeroForm } from "@/components/forms"
import { FAQSection } from "@/components/sections"
import { CTABand } from "@/components/sections"
import { siteConfig } from "@/config/site"
import {
    generateLocalBusinessSchema,
    generateFAQSchema,
    generateBreadcrumbSchema,
    SchemaScripts,
} from "@/lib/schema"

export interface CityPageData {
    // City Info
    city: string
    state: string
    county?: string
    slug: string

    // SEO
    title: string
    description: string

    // Content
    headline: string
    subheadline: string
    overview: string[]

    // Local info
    localFactors?: string[]
    neighborhoods?: string[]

    // Insurance focus
    topCoverages: {
        title: string
        description: string
        href: string
    }[]

    // FAQ
    faqs: {
        question: string
        answer: string
    }[]
}

interface CityPageTemplateProps {
    data: CityPageData
}

export function CityPageTemplate({ data }: CityPageTemplateProps) {
    const baseUrl = `https://${siteConfig.domain}`

    // Generate schemas for this city page
    const localBusinessSchema = generateLocalBusinessSchema({
        city: data.city,
        state: data.state,
        county: data.county,
        slug: data.slug,
    })

    const faqSchema = generateFAQSchema(data.faqs)

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Locations", url: `${baseUrl}/locations` },
        { name: `${data.city}, FL`, url: `${baseUrl}/locations/${data.slug}` },
    ])

    return (
        <>
            {/* JSON-LD Schema Markup */}
            <SchemaScripts schemas={[localBusinessSchema, faqSchema, breadcrumbSchema]} />

            {/* Breadcrumbs */}
            <nav className="bg-white border-b border-lewis-border" aria-label="Breadcrumb">
                <div className="container-lg py-3">
                    <ol className="flex items-center gap-2 text-sm">
                        <li>
                            <Link href="/" className="text-lewis-body hover:text-lewis-blue">
                                Home
                            </Link>
                        </li>
                        <li className="text-lewis-border">/</li>
                        <li>
                            <Link href="/locations" className="text-lewis-body hover:text-lewis-blue">
                                Locations
                            </Link>
                        </li>
                        <li className="text-lewis-border">/</li>
                        <li className="text-lewis-blue font-medium">{data.city}, FL</li>
                    </ol>
                </div>
            </nav>

            {/* Hero */}
            <section className="hero-gradient py-12 md:py-16">
                <div className="container-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                        {/* Content */}
                        <div>
                            <Badge className="mb-4 bg-lewis-blue/10 text-lewis-blue border-lewis-blue/20">
                                <MapPin className="h-3 w-3 mr-1" />
                                Serving {data.city}, Florida
                            </Badge>
                            <h1 className="text-lewis-ink mb-4">{data.headline}</h1>
                            <p className="text-xl text-lewis-body mb-6">{data.subheadline}</p>

                            {/* Quick benefits */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Local Florida Experts
                                </Badge>
                                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Multiple Carriers
                                </Badge>
                                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Free Quotes
                                </Badge>
                            </div>

                            {/* Phone CTA */}
                            <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm inline-flex">
                                <Phone className="h-5 w-5 text-lewis-blue" />
                                <div>
                                    <p className="text-sm text-lewis-body">Call us for a quote:</p>
                                    <a
                                        href={`tel:${siteConfig.contact.phone.main.replace(/[^0-9]/g, "")}`}
                                        className="font-semibold text-lewis-ink hover:text-lewis-blue"
                                    >
                                        {siteConfig.contact.phone.main}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                            <h2 className="text-lg font-semibold text-lewis-ink mb-4">
                                Get Your Free Quote in {data.city}
                            </h2>
                            <HeroForm source={`city-${data.slug}`} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* Overview */}
                            <div>
                                <h2 className="text-lewis-ink mb-6">
                                    Insurance Services in {data.city}, Florida
                                </h2>
                                <div className="prose prose-lg max-w-none">
                                    {data.overview.map((paragraph, index) => (
                                        <p key={index} className="text-lewis-body">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Local Factors */}
                            {data.localFactors && data.localFactors.length > 0 && (
                                <div>
                                    <h2 className="text-lewis-ink mb-6">
                                        {data.city} Insurance Considerations
                                    </h2>
                                    <Card>
                                        <CardContent className="p-6">
                                            <ul className="space-y-3">
                                                {data.localFactors.map((factor, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <CheckCircle className="h-5 w-5 text-lewis-blue flex-shrink-0 mt-0.5" />
                                                        <span className="text-lewis-body">{factor}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            )}

                            {/* Coverage Options */}
                            <div>
                                <h2 className="text-lewis-ink mb-6">
                                    Popular Coverage in {data.city}
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {data.topCoverages.map((coverage) => (
                                        <Link key={coverage.href} href={coverage.href}>
                                            <Card className="h-full card-hover group cursor-pointer">
                                                <CardContent className="p-5">
                                                    <h3 className="font-semibold text-lewis-ink mb-2 group-hover:text-lewis-blue transition-colors flex items-center justify-between">
                                                        {coverage.title}
                                                        <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-lewis-blue" />
                                                    </h3>
                                                    <p className="text-sm text-lewis-body">{coverage.description}</p>
                                                </CardContent>
                                            </Card>
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            {/* Neighborhoods */}
                            {data.neighborhoods && data.neighborhoods.length > 0 && (
                                <div>
                                    <h2 className="text-lewis-ink mb-6">
                                        Areas We Serve in {data.city}
                                    </h2>
                                    <div className="flex flex-wrap gap-2">
                                        {data.neighborhoods.map((neighborhood) => (
                                            <Badge key={neighborhood} variant="secondary" className="py-1.5 px-3">
                                                {neighborhood}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Contact Card */}
                            <Card className="bg-lewis-blue text-white">
                                <CardContent className="p-6">
                                    <MapPin className="h-8 w-8 mb-4 text-white/80" />
                                    <h3 className="font-semibold text-white mb-2">
                                        Serving {data.city}
                                    </h3>
                                    <p className="text-sm text-white/80 mb-4">
                                        We're your local Florida insurance experts. Get personalized service and competitive quotes.
                                    </p>
                                    <Button asChild variant="secondary" className="w-full rounded-full">
                                        <a href={`tel:${siteConfig.contact.phone.main.replace(/[^0-9]/g, "")}`}>
                                            Call {siteConfig.contact.phone.main}
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Service Area */}
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-lewis-ink mb-4">
                                        Nearby Cities We Serve
                                    </h3>
                                    <div className="space-y-2">
                                        {siteConfig.serviceAreas
                                            .filter((city) => city !== data.city)
                                            .slice(0, 6)
                                            .map((city) => (
                                                <Link
                                                    key={city}
                                                    href={`/locations/${city.toLowerCase().replace(/\s+/g, "-")}-fl`}
                                                    className="block text-sm text-lewis-body hover:text-lewis-blue transition-colors"
                                                >
                                                    {city}, FL
                                                </Link>
                                            ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <FAQSection items={data.faqs} />

            {/* CTA */}
            <CTABand />
        </>
    )
}
