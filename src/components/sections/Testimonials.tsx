"use client"

import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

// Sample testimonials with avatars
const testimonials = [
    {
        id: 1,
        name: "Maria R.",
        location: "Miami, FL",
        text: "Lewis Insurance saved us over $1,200 on our home and auto bundle. Their team explained everything clearly and found us better coverage than we had before.",
        rating: 5,
        avatar: "/images/testimonial-1.png",
        isSample: true,
    },
    {
        id: 2,
        name: "James T.",
        location: "Tampa, FL",
        text: "When we had a claim after the hurricane, they were incredible. They handled everything with the insurance company and kept us updated every step of the way.",
        rating: 5,
        avatar: "/images/testimonial-2.png",
        isSample: true,
    },
    {
        id: 3,
        name: "Sarah M.",
        location: "Fort Lauderdale, FL",
        text: "As a small business owner, I needed someone who understood commercial insurance. Lewis Insurance found me comprehensive coverage at a price that fit my budget.",
        rating: 5,
        avatar: "/images/testimonial-3.png",
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
                        <Card key={testimonial.id} className="h-full card-hover-scale">
                            <CardContent className="p-6 flex flex-col h-full">
                                {/* Header with Avatar and Quote */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-lewis-blue/20 avatar-hover">
                                        <Image
                                            src={testimonial.avatar}
                                            alt={`${testimonial.name} testimonial`}
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
