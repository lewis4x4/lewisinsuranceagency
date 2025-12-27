import Link from "next/link"
import { CheckCircle, ArrowRight, Phone, FileText, Shield } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Policy Connected Successfully | Lewis Insurance",
    description: "Thank you for connecting your policy with Lewis Insurance. We've received your information and will review it shortly.",
}

export default function ThanksPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-16 md:py-24">
                <div className="container-lg">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                            <CheckCircle className="h-10 w-10 text-green-600" />
                        </div>
                        <h1 className="text-lewis-ink mb-4">Policy Connected Successfully!</h1>
                        <p className="text-xl text-lewis-body mb-8">
                            Thank you for sharing your policy information with Lewis Insurance.
                            We&apos;ve received your details and our team will review them shortly.
                        </p>
                    </div>
                </div>
            </section>

            {/* What's Next */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-lewis-ink text-center mb-8">What Happens Next?</h2>

                        <div className="space-y-6">
                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-lewis-blue text-white flex items-center justify-center flex-shrink-0 font-bold">
                                            1
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lewis-ink mb-2">We Review Your Coverage</h3>
                                            <p className="text-lewis-body">
                                                Our team will analyze your current policy to understand your coverage,
                                                limits, and deductibles.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-lewis-blue text-white flex items-center justify-center flex-shrink-0 font-bold">
                                            2
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lewis-ink mb-2">We Shop Multiple Carriers</h3>
                                            <p className="text-lewis-body">
                                                Using your policy details, we&apos;ll compare quotes from our {siteConfig.trust.carrierCount} carrier
                                                partners to find you the best combination of coverage and price.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-lewis-blue text-white flex items-center justify-center flex-shrink-0 font-bold">
                                            3
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lewis-ink mb-2">We Contact You With Options</h3>
                                            <p className="text-lewis-body">
                                                A Lewis Insurance agent will reach out within 1-2 business days to discuss
                                                your options and answer any questions.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quick Actions */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-lewis-ink text-center mb-8">While You Wait</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link href="/resources" className="group">
                                <Card className="h-full card-hover">
                                    <CardContent className="p-6 text-center">
                                        <div className="w-12 h-12 rounded-xl bg-lewis-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-lewis-blue transition-colors">
                                            <FileText className="h-6 w-6 text-lewis-blue group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="font-semibold text-lewis-ink mb-2">Insurance Guides</h3>
                                        <p className="text-sm text-lewis-body">
                                            Learn about Florida insurance requirements and coverage options.
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>

                            <Link href="/tools" className="group">
                                <Card className="h-full card-hover">
                                    <CardContent className="p-6 text-center">
                                        <div className="w-12 h-12 rounded-xl bg-lewis-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-lewis-blue transition-colors">
                                            <Shield className="h-6 w-6 text-lewis-blue group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="font-semibold text-lewis-ink mb-2">Coverage Tools</h3>
                                        <p className="text-sm text-lewis-body">
                                            Use our interactive tools to assess your coverage needs.
                                        </p>
                                    </CardContent>
                                </Card>
                            </Link>

                            <a
                                href={`tel:${siteConfig.contact.phone.main.replace(/[^0-9]/g, "")}`}
                                className="group"
                            >
                                <Card className="h-full card-hover">
                                    <CardContent className="p-6 text-center">
                                        <div className="w-12 h-12 rounded-xl bg-lewis-orange/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-lewis-orange transition-colors">
                                            <Phone className="h-6 w-6 text-lewis-orange group-hover:text-white transition-colors" />
                                        </div>
                                        <h3 className="font-semibold text-lewis-ink mb-2">Call Us Now</h3>
                                        <p className="text-sm text-lewis-body">
                                            {siteConfig.contact.phone.main}
                                        </p>
                                    </CardContent>
                                </Card>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-2xl font-bold text-lewis-ink mb-4">Have Questions?</h2>
                        <p className="text-lewis-body mb-6">
                            Our team is here to help. Don&apos;t hesitate to reach out if you have any questions
                            about your policy or the quote process.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild className="btn-primary rounded-full">
                                <Link href="/contact">
                                    Contact Us
                                    <ArrowRight className="h-4 w-4 ml-2" />
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="rounded-full">
                                <Link href="/">
                                    Return Home
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
