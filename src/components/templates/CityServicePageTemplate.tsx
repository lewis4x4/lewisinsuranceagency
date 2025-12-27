import Link from "next/link"
import { MapPin, CheckCircle, Phone, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { HeroForm } from "@/components/forms"
import { CTABand } from "@/components/sections"
import { CanopyConnectSection } from "@/components/canopy"
import { siteConfig } from "@/config/site"
import {
    generateCityServiceSchema,
    generateFAQSchema,
    generateBreadcrumbSchema,
    SchemaScripts,
} from "@/lib/schema"

export interface CityServicePageData {
    // Location Info
    city: string
    state: string
    citySlug: string

    // Service Info
    serviceName: string
    serviceSlug: string

    // SEO
    title: string
    description: string

    // Content
    headline: string
    subheadline: string
    overview: string[]

    // Local-specific content
    whyNeeded: {
        title: string
        content: string
    }[]

    localConsiderations?: string[]

    // Coverage info (optional - for some services)
    coverageHighlights?: {
        title: string
        description: string
    }[]

    // FAQ
    faqs: {
        question: string
        answer: string
    }[]

    // Related
    relatedServices: {
        title: string
        href: string
        description: string
    }[]
}

interface CityServicePageTemplateProps {
    data: CityServicePageData
}

export function CityServicePageTemplate({ data }: CityServicePageTemplateProps) {
    const baseUrl = `https://${siteConfig.domain}`

    // Generate schemas
    const serviceSchema = generateCityServiceSchema({
        city: data.city,
        state: data.state,
        serviceName: data.serviceName,
        serviceSlug: data.serviceSlug,
        citySlug: data.citySlug,
        description: data.description,
    })

    const faqSchema = generateFAQSchema(data.faqs)

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Locations", url: `${baseUrl}/locations` },
        { name: `${data.city}, FL`, url: `${baseUrl}/locations/${data.citySlug}` },
        { name: data.serviceName, url: `${baseUrl}/locations/${data.citySlug}/${data.serviceSlug}` },
    ])

    return (
        <>
            {/* JSON-LD Schema Markup */}
            <SchemaScripts schemas={[serviceSchema, faqSchema, breadcrumbSchema]} />

            {/* Breadcrumbs */}
            <nav className="bg-white border-b border-lewis-border" aria-label="Breadcrumb">
                <div className="container-lg py-3">
                    <ol className="flex items-center gap-2 text-sm flex-wrap">
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
                        <li>
                            <Link
                                href={`/locations/${data.citySlug}`}
                                className="text-lewis-body hover:text-lewis-blue"
                            >
                                {data.city}
                            </Link>
                        </li>
                        <li className="text-lewis-border">/</li>
                        <li className="text-lewis-blue font-medium">{data.serviceName}</li>
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
                                {data.serviceName} in {data.city}
                            </Badge>
                            <h1 className="text-lewis-ink mb-4">{data.headline}</h1>
                            <p className="text-xl text-lewis-body mb-6">{data.subheadline}</p>

                            {/* Quick benefits */}
                            <div className="flex flex-wrap gap-3 mb-6">
                                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Local {data.city} Experts
                                </Badge>
                                <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
                                    <CheckCircle className="h-3 w-3 mr-1" />
                                    Compare Carriers
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
                                    <p className="text-sm text-lewis-body">Call for a {data.city} quote:</p>
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
                                Get {data.serviceName} Quotes in {data.city}
                            </h2>
                            <HeroForm source={`city-service-${data.citySlug}-${data.serviceSlug}`} />
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
                                    {data.serviceName} in {data.city}, Florida
                                </h2>
                                <div className="prose prose-lg max-w-none">
                                    {data.overview.map((paragraph, index) => (
                                        <p key={index} className="text-lewis-body">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            {/* Why Needed Section */}
                            <div>
                                <h2 className="text-lewis-ink mb-6">
                                    Why {data.city} Residents Need {data.serviceName}
                                </h2>
                                <div className="space-y-4">
                                    {data.whyNeeded.map((item, index) => (
                                        <Card key={index}>
                                            <CardContent className="p-6">
                                                <h3 className="font-semibold text-lewis-ink mb-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-sm text-lewis-body">{item.content}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            {/* Local Considerations */}
                            {data.localConsiderations && data.localConsiderations.length > 0 && (
                                <div>
                                    <h2 className="text-lewis-ink mb-6">
                                        {data.city} {data.serviceName} Considerations
                                    </h2>
                                    <Card>
                                        <CardContent className="p-6">
                                            <ul className="space-y-3">
                                                {data.localConsiderations.map((item, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <CheckCircle className="h-5 w-5 text-lewis-blue flex-shrink-0 mt-0.5" />
                                                        <span className="text-lewis-body">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            )}

                            {/* Coverage Highlights */}
                            {data.coverageHighlights && data.coverageHighlights.length > 0 && (
                                <div>
                                    <h2 className="text-lewis-ink mb-6">Coverage Highlights</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {data.coverageHighlights.map((item, index) => (
                                            <Card key={index}>
                                                <CardContent className="p-4">
                                                    <div className="flex items-start gap-3">
                                                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                        <div>
                                                            <h3 className="font-medium text-lewis-ink text-sm">
                                                                {item.title}
                                                            </h3>
                                                            <p className="text-xs text-lewis-body mt-1">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* FAQ */}
                            <div>
                                <h2 className="text-lewis-ink mb-6">
                                    {data.serviceName} FAQ for {data.city}
                                </h2>
                                <Accordion type="single" collapsible className="space-y-4">
                                    {data.faqs.map((faq, index) => (
                                        <AccordionItem
                                            key={index}
                                            value={`item-${index}`}
                                            className="bg-white rounded-lg shadow-sm border border-lewis-border px-6"
                                        >
                                            <AccordionTrigger className="text-left text-lewis-ink font-medium py-4 hover:no-underline hover:text-lewis-blue">
                                                {faq.question}
                                            </AccordionTrigger>
                                            <AccordionContent className="text-lewis-body pb-4">
                                                {faq.answer}
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Related Services */}
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-lewis-ink mb-4">
                                        Other Coverage in {data.city}
                                    </h3>
                                    <div className="space-y-3">
                                        {data.relatedServices.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                            >
                                                <div className="flex items-center justify-between">
                                                    <span className="font-medium text-sm text-lewis-ink group-hover:text-lewis-blue">
                                                        {item.title}
                                                    </span>
                                                    <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-lewis-blue" />
                                                </div>
                                                <p className="text-xs text-lewis-body mt-1">{item.description}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Contact Card */}
                            <Card className="bg-lewis-blue text-white">
                                <CardContent className="p-6">
                                    <MapPin className="h-8 w-8 mb-4 text-white/80" />
                                    <h3 className="font-semibold text-white mb-2">
                                        Serving {data.city}
                                    </h3>
                                    <p className="text-sm text-white/80 mb-4">
                                        Local expertise for {data.city} {data.serviceName.toLowerCase()}.
                                        Get personalized service and competitive quotes.
                                    </p>
                                    <Button asChild variant="secondary" className="w-full rounded-full">
                                        <a href={`tel:${siteConfig.contact.phone.main.replace(/[^0-9]/g, "")}`}>
                                            Call {siteConfig.contact.phone.main}
                                        </a>
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Back to City */}
                            <Card>
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-lewis-ink mb-2">
                                        All {data.city} Insurance
                                    </h3>
                                    <p className="text-sm text-lewis-body mb-4">
                                        View all insurance options available in {data.city}.
                                    </p>
                                    <Button asChild variant="outline" className="w-full rounded-full">
                                        <Link href={`/locations/${data.citySlug}`}>
                                            View All Coverage
                                        </Link>
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Canopy Connect */}
            <CanopyConnectSection
                variant="compact"
                insuranceType={data.serviceName}
                className="container-lg my-8"
            />

            {/* CTA */}
            <CTABand />
        </>
    )
}
