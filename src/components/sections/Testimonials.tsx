"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Sample testimonials - labeled as samples per spec
const testimonials = [
    {
        id: 1,
        name: "Sample Reviewer",
        location: "Miami, FL",
        text: "Lewis Insurance saved us over $1,200 on our home and auto bundle. Their team explained everything clearly and found us better coverage than we had before.",
        rating: 5,
        isSample: true,
    },
    {
        id: 2,
        name: "Sample Reviewer",
        location: "Tampa, FL",
        text: "When we had a claim after the hurricane, they were incredible. They handled everything with the insurance company and kept us updated every step of the way.",
        rating: 5,
        isSample: true,
    },
    {
        id: 3,
        name: "Sample Reviewer",
        location: "Fort Lauderdale, FL",
        text: "As a small business owner, I needed someone who understood commercial insurance. Lewis Insurance found me comprehensive coverage at a price that fit my budget.",
        rating: 5,
        isSample: true,
    },
]

export function Testimonials() {
    return (
        <section className="section-wrapper">
            <div className="container-lg">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-lewis-ink mb-4">What Our Clients Say</h2>
                    <p className="text-lg text-lewis-body">
                        Real feedback from Florida families and businesses we've helped protect.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="h-full">
                            <CardContent className="p-6 flex flex-col h-full">
                                {/* Quote Icon */}
                                <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center mb-4">
                                    <Quote className="h-5 w-5 text-lewis-blue" />
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-0.5 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="h-4 w-4 fill-yellow-400 text-yellow-400"
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>

                                {/* Text */}
                                <p className="text-lewis-body flex-1 mb-4 text-sm leading-relaxed">
                                    "{testimonial.text}"
                                </p>

                                {/* Author */}
                                <div className="border-t border-lewis-border pt-4">
                                    <p className="font-medium text-lewis-ink">{testimonial.name}</p>
                                    <p className="text-sm text-lewis-body">{testimonial.location}</p>
                                    {testimonial.isSample && (
                                        <p className="text-xs text-gray-400 mt-1 italic">
                                            (Sample testimonial)
                                        </p>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <p className="text-center text-sm text-gray-500 mt-8">
                    These are sample testimonials. Real client reviews coming soon.
                </p>
            </div>
        </section>
    )
}
