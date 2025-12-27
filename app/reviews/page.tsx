import Link from "next/link"
import Image from "next/image"
import { Star, Quote, ExternalLink, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CTABand } from "@/components/sections"
import { siteConfig } from "@/config/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Client Reviews | Lewis Insurance Agency",
    description: "Read reviews from Florida families and businesses who trust Lewis Insurance Agency for their homeowners, auto, flood, and business insurance needs.",
}

const testimonials = [
    {
        id: 1,
        name: "Maria R.",
        location: "Miami, FL",
        text: "Lewis Insurance saved us over $1,200 on our home and auto bundle. Their team explained everything clearly and found us better coverage than we had before. I recommend them to everyone!",
        rating: 5,
        avatar: "/images/testimonial-1.png",
        insuranceType: "Home & Auto Bundle",
        isSample: true,
    },
    {
        id: 2,
        name: "James T.",
        location: "Tampa, FL",
        text: "When we had a claim after the hurricane, they were incredible. They handled everything with the insurance company and kept us updated every step of the way. True professionals who actually care.",
        rating: 5,
        avatar: "/images/testimonial-2.png",
        insuranceType: "Homeowners Insurance",
        isSample: true,
    },
    {
        id: 3,
        name: "Sarah M.",
        location: "Fort Lauderdale, FL",
        text: "As a small business owner, I needed someone who understood commercial insurance. Lewis Insurance found me comprehensive coverage at a price that fit my budget. They made it easy.",
        rating: 5,
        avatar: "/images/testimonial-3.png",
        insuranceType: "Business Insurance",
        isSample: true,
    },
    {
        id: 4,
        name: "Robert K.",
        location: "Jacksonville, FL",
        text: "I was paying way too much for auto insurance. Lewis Insurance shopped around and found me the same coverage for $600 less per year. The process was quick and painless.",
        rating: 5,
        avatar: "/images/testimonial-1.png",
        insuranceType: "Auto Insurance",
        isSample: true,
    },
    {
        id: 5,
        name: "Patricia L.",
        location: "Orlando, FL",
        text: "They helped us understand flood insurance and why we needed it even though we're not in a flood zone. Six months later, we had water damage and the policy saved us over $30,000.",
        rating: 5,
        avatar: "/images/testimonial-2.png",
        insuranceType: "Flood Insurance",
        isSample: true,
    },
    {
        id: 6,
        name: "Michael D.",
        location: "West Palm Beach, FL",
        text: "Our condo association required specific coverage and I had no idea where to start. Lewis Insurance walked me through everything and got me exactly what I needed. Great service!",
        rating: 5,
        avatar: "/images/testimonial-3.png",
        insuranceType: "Condo Insurance",
        isSample: true,
    },
]

const reviewPlatforms = [
    { name: "Google Reviews", rating: 4.9, count: 127, url: "#" },
    { name: "Facebook", rating: 4.8, count: 84, url: "#" },
    { name: "Yelp", rating: 4.7, count: 45, url: "#" },
]

export default function ReviewsPage() {
    const averageRating = 4.9
    const totalReviews = siteConfig.trust.reviewCount

    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-16 md:py-20">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-lewis-ink mb-4">Client Reviews</h1>
                        <p className="text-xl text-lewis-body mb-8">
                            See what Florida families and businesses say about working with Lewis Insurance Agency.
                        </p>

                        {/* Overall Rating */}
                        <div className="inline-flex items-center gap-4 bg-white rounded-2xl px-8 py-4 shadow-sm">
                            <div className="text-center">
                                <div className="text-4xl font-bold text-lewis-ink">{averageRating}</div>
                                <div className="flex items-center gap-0.5 justify-center mt-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-5 w-5 ${i < Math.floor(averageRating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className="h-12 w-px bg-lewis-border" />
                            <div className="text-left">
                                <div className="text-2xl font-bold text-lewis-ink">{totalReviews}+</div>
                                <div className="text-sm text-lewis-body">Client Reviews</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Review Platforms */}
            <section className="py-8 bg-white border-b border-lewis-border">
                <div className="container-lg">
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        {reviewPlatforms.map((platform) => (
                            <div key={platform.name} className="flex items-center gap-3">
                                <div>
                                    <div className="font-medium text-lewis-ink">{platform.name}</div>
                                    <div className="flex items-center gap-1">
                                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                        <span className="text-sm text-lewis-body">{platform.rating} ({platform.count} reviews)</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {testimonials.map((testimonial) => (
                            <Card key={testimonial.id} className="h-full">
                                <CardContent className="p-6 flex flex-col h-full">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-lewis-blue/20">
                                            <Image
                                                src={testimonial.avatar}
                                                alt={`${testimonial.name}`}
                                                width={56}
                                                height={56}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center">
                                            <Quote className="h-5 w-5 text-lewis-blue" />
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center gap-0.5 mb-2">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                    </div>

                                    {/* Insurance Type Badge */}
                                    <span className="inline-block text-xs font-medium text-lewis-blue bg-lewis-blue/10 px-2 py-1 rounded mb-3 w-fit">
                                        {testimonial.insuranceType}
                                    </span>

                                    {/* Text */}
                                    <p className="text-lewis-body flex-1 mb-4 text-sm leading-relaxed">
                                        &quot;{testimonial.text}&quot;
                                    </p>

                                    {/* Author */}
                                    <div className="border-t border-lewis-border pt-4">
                                        <p className="font-medium text-lewis-ink">{testimonial.name}</p>
                                        <p className="text-sm text-lewis-body">{testimonial.location}</p>
                                        {testimonial.isSample && (
                                            <p className="text-xs text-gray-400 mt-1 italic">
                                                (Sample review)
                                            </p>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <p className="text-center text-sm text-gray-500 mt-8">
                        These are sample reviews representing typical client feedback. Real reviews coming soon.
                    </p>
                </div>
            </section>

            {/* Leave a Review CTA */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-lewis-ink mb-4">Are You a Lewis Insurance Client?</h2>
                        <p className="text-lewis-body mb-6">
                            We&apos;d love to hear about your experience. Your feedback helps us improve
                            and helps other Florida residents find the right insurance partner.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild variant="outline" className="rounded-full">
                                <a href="https://g.page/r/review" target="_blank" rel="noopener noreferrer">
                                    Leave a Google Review
                                    <ExternalLink className="h-4 w-4 ml-2" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Get Started */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-lewis-ink mb-4">Ready to Experience the Difference?</h2>
                        <p className="text-lewis-body mb-6">
                            Join hundreds of satisfied Florida clients. Get a free quote and see why
                            families and businesses trust Lewis Insurance Agency.
                        </p>
                        <Button asChild className="btn-primary rounded-full">
                            <Link href="/contact">
                                Get Your Free Quote
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            <CTABand />
        </>
    )
}
