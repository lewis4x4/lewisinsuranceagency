"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

// Team members - placeholders until real photos are available
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _teamMembers = [
    {
        id: 1,
        name: "Your Name",
        role: "Agency Principal",
        bio: "Leading Lewis Insurance with over 20 years of experience helping Florida families find the right coverage.",
        image: "/images/lewis-office-hero.jpg", // Using office image as placeholder
        isPlaceholder: true,
    },
]

export function MeetTheTeam() {
    return (
        <section className="section-wrapper bg-white">
            <div className="container-lg">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-lewis-ink mb-4">Meet Our Team</h2>
                    <p className="text-lg text-lewis-body">
                        Get to know the people behind Lewis Insurance — your local Florida insurance experts.
                    </p>
                </div>

                {/* Placeholder state - shows when no real team photos */}
                <div className="max-w-2xl mx-auto">
                    <Card className="overflow-hidden card-hover-scale">
                        <div className="md:flex">
                            {/* Office Image */}
                            <div className="md:w-1/2 aspect-video md:aspect-auto relative">
                                <Image
                                    src="/images/lewis-office-hero.jpg"
                                    alt="Lewis Insurance Office in Lake City, Florida"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <CardContent className="md:w-1/2 p-6 flex flex-col justify-center">
                                <h3 className="text-xl font-bold text-lewis-ink mb-2">
                                    Lewis Insurance Agency
                                </h3>
                                <p className="text-sm text-lewis-blue font-medium mb-4">
                                    Serving Florida Since Day One
                                </p>
                                <p className="text-lewis-body text-sm leading-relaxed mb-4">
                                    As an independent insurance agency based in Lake City, we take pride in
                                    providing personalized service to families and businesses across Florida.
                                    Our team is dedicated to finding you the best coverage at competitive rates.
                                </p>
                                <div className="flex items-center gap-4 text-sm">
                                    <span className="inline-flex items-center gap-1.5 text-lewis-blue">
                                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                        Available Today
                                    </span>
                                    <a
                                        href="/about"
                                        className="text-lewis-orange hover:underline font-medium"
                                    >
                                        Learn More →
                                    </a>
                                </div>
                            </CardContent>
                        </div>
                    </Card>
                </div>

                {/* Note about team photos */}
                <p className="text-center text-sm text-gray-500 mt-8">
                    Team photos coming soon! Contact us to meet our friendly staff in person.
                </p>
            </div>
        </section>
    )
}
