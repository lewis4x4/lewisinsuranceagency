import type { Metadata } from "next"
import { ExternalLink, Mail, Quote, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { CTABand } from "@/components/sections"
import { siteConfig } from "@/config/site"
import { googleReviews } from "@/data/googleReviews"
import { Card, CardContent } from "@/components/ui/card"
import { MailtoInfo } from "@/components/MailtoInfo"

export const metadata: Metadata = {
    title: "Client Reviews | Lewis Insurance Agency",
    description: "Share feedback about your experience with Lewis Insurance Agency or visit our verified Google Business Profile.",
    alternates: {
        canonical: "https://lewisinsurance.com/reviews",
    },
    openGraph: {
        title: "Client Reviews | Lewis Insurance Agency",
        description: "Share feedback about your experience with Lewis Insurance Agency or visit our verified Google Business Profile.",
        url: "https://lewisinsurance.com/reviews",
        images: [{ url: "https://lewisinsurance.com/images/og-default.png", width: 1200, height: 630, alt: "Lewis Insurance — Florida insurance" }],
    },
}

export default function ReviewsPage() {
    return (
        <>
            <section className="hero-gradient py-16 md:py-20">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-lewis-ink mb-4">Client Reviews</h1>
                        <p className="text-xl text-lewis-body">
                            We welcome honest feedback from Lewis Insurance clients.
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {googleReviews.map((review) => (
                            <Card key={review.name} className="h-full">
                                <CardContent className="p-6 flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="text-sm font-medium text-lewis-blue">Google review</span>
                                        <Quote className="h-5 w-5 text-lewis-blue" aria-hidden="true" />
                                    </div>
                                    <div className="flex items-center gap-0.5 mb-4" aria-label="5 out of 5 stars">
                                        {[...Array(5)].map((_, index) => (
                                            <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                                        ))}
                                    </div>
                                    <blockquote className="text-lewis-body flex-1 mb-4 text-sm leading-relaxed whitespace-pre-line">
                                        {review.text}
                                    </blockquote>
                                    <div className="border-t border-lewis-border pt-4">
                                        <p className="font-medium text-lewis-ink">{review.name}</p>
                                        <p className="text-sm text-lewis-body">{review.when}</p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-lewis-ink mb-4">Share Your Experience</h2>
                        <p className="text-lewis-body mb-6">
                            Your feedback helps our team improve and helps others learn about working with our agency.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button asChild className="rounded-full">
                                <a href={siteConfig.social.google} target="_blank" rel="noopener noreferrer">
                                    Leave a Google Review
                                    <ExternalLink className="h-4 w-4 ml-2" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" className="rounded-full">
                                <a href={siteConfig.social.googleMaps} target="_blank" rel="noopener noreferrer">
                                    View on Google Maps
                                    <ExternalLink className="h-4 w-4 ml-2" />
                                </a>
                            </Button>
                            <MailtoInfo
                                label="Email Us"
                                className="inline-flex items-center justify-center gap-2 rounded-full border border-input bg-background h-10 px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <CTABand />
        </>
    )
}
