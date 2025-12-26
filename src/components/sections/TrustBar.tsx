"use client"

import { Star } from "lucide-react"
import { siteConfig } from "@/config/site"

// Carrier logos placeholder - will be replaced with actual logos
const carriers = [
    { name: "Carrier 1", logo: null },
    { name: "Carrier 2", logo: null },
    { name: "Carrier 3", logo: null },
    { name: "Carrier 4", logo: null },
    { name: "Carrier 5", logo: null },
    { name: "Carrier 6", logo: null },
]

export function TrustBar() {
    return (
        <section className="py-8 bg-white border-y border-lewis-border">
            <div className="container-lg">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Carrier Logos */}
                    <div className="flex flex-wrap items-center justify-center gap-8">
                        <p className="text-sm font-medium text-lewis-body">Trusted by leading carriers:</p>
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            {carriers.map((carrier, index) => (
                                <div
                                    key={index}
                                    className="w-24 h-12 bg-gray-100 rounded-lg flex items-center justify-center"
                                    aria-label={`${carrier.name} logo placeholder`}
                                >
                                    <span className="text-xs text-gray-400">Logo</span>
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
