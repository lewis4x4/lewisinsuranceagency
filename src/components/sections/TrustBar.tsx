"use client"

import Image from "next/image"
import { Star } from "lucide-react"
import { siteConfig } from "@/config/site"

// Carrier logos - add PNG files to public/carriers/
const carriers = [
    { name: "Progressive", logo: "/carriers/progressive.png" },
    { name: "Geico", logo: "/carriers/geico.png" },
    { name: "Nationwide", logo: "/carriers/nationwide.png" },
    { name: "Kemper", logo: "/carriers/kemper.png" },
    { name: "Universal Property & Casualty", logo: "/carriers/universal.png" },
    { name: "Heritage Insurance", logo: "/carriers/heritage.png" },
    { name: "American Integrity", logo: "/carriers/american-integrity.png" },
    { name: "Foremost", logo: "/carriers/foremost.png" },
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
                                    className="w-24 h-12 flex items-center justify-center grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100"
                                >
                                    <Image
                                        src={carrier.logo}
                                        alt={`${carrier.name} logo`}
                                        width={96}
                                        height={48}
                                        className="object-contain max-h-10"
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
