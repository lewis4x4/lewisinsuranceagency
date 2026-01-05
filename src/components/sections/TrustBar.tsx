"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { siteConfig } from "@/config/site"

// Carrier logos - these are the insurance companies we work with
const carriers = [
    { name: "Progressive", logo: "/carriers/progressive.png" },
    { name: "Nationwide", logo: "/carriers/nationwide.png" },
    { name: "Kemper", logo: "/carriers/kemper.png" },
    { name: "Universal", logo: "/carriers/universal.png" },
    { name: "Heritage", logo: "/carriers/heritage.png" },
    { name: "American Integrity", logo: "/carriers/american-integrity.png" },
    { name: "Foremost", logo: "/carriers/foremost.png" },
]

export function TrustBar() {
    return (
        <section className="py-8 bg-white border-y border-lewis-border">
            <div className="container-lg">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Carrier Logos */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <p className="text-sm font-medium text-lewis-body">We represent {siteConfig.trust.carrierCount} carriers including:</p>
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            {carriers.map((carrier) => (
                                <div
                                    key={carrier.name}
                                    className="h-8 flex items-center justify-center grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all"
                                >
                                    <Image
                                        src={carrier.logo}
                                        alt={`${carrier.name} logo`}
                                        width={80}
                                        height={32}
                                        className="object-contain max-h-8 w-auto"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Review Rating */}
                    <div className="flex items-center gap-3 px-6 py-3 bg-lewis-gradient-start rounded-full">
                        <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                                    aria-hidden="true"
                                />
                            ))}
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="font-bold text-lewis-ink">{siteConfig.trust.averageRating}</span>
                            <span className="text-sm text-lewis-body">({siteConfig.trust.reviewCount} reviews)</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
