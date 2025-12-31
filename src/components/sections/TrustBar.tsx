"use client"

import { Star } from "lucide-react"
import { siteConfig } from "@/config/site"

// Carrier names - these are the insurance companies we work with
const carriers = [
    "Progressive",
    "Nationwide",
    "Kemper",
    "Universal",
    "Heritage",
    "American Integrity",
    "Foremost",
    "Citizens",
]

export function TrustBar() {
    return (
        <section className="py-8 bg-white border-y border-lewis-border">
            <div className="container-lg">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    {/* Carrier Names */}
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <p className="text-sm font-medium text-lewis-body">We represent {siteConfig.trust.carrierCount} carriers including:</p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            {carriers.map((carrier, index) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 text-sm font-medium text-lewis-ink bg-gray-100 rounded-full"
                                >
                                    {carrier}
                                </span>
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
