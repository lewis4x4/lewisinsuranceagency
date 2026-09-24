import Link from "next/link"
import { CheckCircle, Phone, Clock, Users, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Policy Received | Lewis Insurance Agency",
    description: "Thank you for connecting your insurance policy. Lewis Insurance will review your coverage and send you a personalized quote shortly.",
    robots: {
        index: false,
        follow: false,
    },
}

export default function ImportSuccessPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
            {/* Success Hero - Mobile Optimized */}
            <section className="px-4 pt-12 pb-8 md:pt-16 md:pb-12">
                <div className="max-w-lg mx-auto text-center">
                    {/* Success Animation */}
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6 animate-pulse">
                        <CheckCircle className="h-14 w-14 md:h-16 md:w-16 text-green-600" />
                    </div>

                    <h1 className="text-2xl md:text-3xl font-bold text-lewis-ink mb-4">
                        Thank You!
                    </h1>

                    <p className="text-lg text-lewis-body mb-2">
                        We&apos;ve received your policy information.
                    </p>

                    <p className="text-lewis-body">
                        Your personalized quote is on its way!
                    </p>
                </div>
            </section>

            {/* Quote Timeline - Mobile First */}
            <section className="px-4 py-8 bg-white">
                <div className="max-w-lg mx-auto">
                    <div className="bg-lewis-blue/5 rounded-2xl p-6 border border-lewis-blue/10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 rounded-full bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                <Clock className="h-6 w-6 text-lewis-blue" />
                            </div>
                            <div>
                                <h2 className="font-bold text-lewis-ink text-lg">
                                    Expect Your Quote Fast
                                </h2>
                                <p className="text-lewis-body text-sm">
                                    Usually within 30 minutes
                                </p>
                            </div>
                        </div>

                        <p className="text-lewis-body mb-4">
                            Our team is reviewing your current coverage right now. We&apos;ll compare rates from multiple carriers and send you options that could save you money.
                        </p>

                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                            <p className="text-amber-800 text-sm font-medium mb-2">
                                Haven&apos;t heard from us in 30 minutes?
                            </p>
                            <p className="text-amber-700 text-sm">
                                Give us a call - we&apos;re here to help!
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call Button - Prominent on Mobile */}
            <section className="px-4 py-6">
                <div className="max-w-lg mx-auto">
                    <a
                        href="tel:3867550050"
                        className="flex items-center justify-center gap-3 w-full bg-lewis-orange hover:bg-lewis-orange/90 text-white font-semibold py-4 px-6 rounded-full text-lg transition-colors shadow-lg"
                    >
                        <Phone className="h-6 w-6" />
                        Call Us: (386) 755-0050
                    </a>
                    <p className="text-center text-sm text-lewis-body mt-3">
                        Mon-Fri 9am-5pm EST
                    </p>
                </div>
            </section>

            {/* About Lewis Insurance */}
            <section className="px-4 py-8 bg-lewis-page">
                <div className="max-w-lg mx-auto">
                    <h2 className="text-xl font-bold text-lewis-ink text-center mb-6">
                        About Lewis Insurance
                    </h2>

                    <div className="space-y-4">
                        <div className="flex items-start gap-4 bg-white rounded-xl p-4">
                            <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                <Users className="h-5 w-5 text-lewis-blue" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lewis-ink mb-1">Local Florida Experts</h3>
                                <p className="text-sm text-lewis-body">
                                    Based in Lake City, we&apos;ve been helping Florida families and businesses find the right coverage since day one.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-white rounded-xl p-4">
                            <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                <Shield className="h-5 w-5 text-lewis-blue" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lewis-ink mb-1">Independent Agency</h3>
                                <p className="text-sm text-lewis-body">
                                    We work for you, not the insurance companies. We compare rates from 20+ carriers to find you the best deal.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4 bg-white rounded-xl p-4">
                            <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="h-5 w-5 text-lewis-blue" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-lewis-ink mb-1">No Obligation</h3>
                                <p className="text-sm text-lewis-body">
                                    Our quotes are always free with no pressure. We&apos;re here to help you make an informed decision.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Actions */}
            <section className="px-4 py-8">
                <div className="max-w-lg mx-auto text-center">
                    <p className="text-lewis-body mb-6">
                        Questions while you wait? We&apos;re happy to chat.
                    </p>

                    <div className="flex flex-col gap-3">
                        <a
                            href="tel:3867550050"
                            className="flex items-center justify-center gap-2 w-full bg-lewis-blue hover:bg-lewis-blue/90 text-white font-semibold py-3 px-6 rounded-full transition-colors"
                        >
                            <Phone className="h-5 w-5" />
                            (386) 755-0050
                        </a>

                        <Button asChild variant="outline" className="rounded-full py-3">
                            <Link href="/">
                                <ArrowRight className="h-4 w-4 mr-2 rotate-180" />
                                Back to Homepage
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
