import Link from "next/link"
import {
    Phone,
    AlertTriangle,
    FileCheck,
    Clock,
    ArrowRight,
    Shield,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "File a Claim",
    description: "Need to file an insurance claim? Lewis Insurance is here to help. We'll guide you through the claims process and advocate on your behalf.",
}

const claimSteps = [
    {
        step: 1,
        title: "Document the Damage",
        description: "Take photos and videos of any damage. Create a list of damaged or lost items with estimates of their value if possible.",
    },
    {
        step: 2,
        title: "Prevent Further Damage",
        description: "Take reasonable steps to prevent additional damage (e.g., cover a broken window, stop a leak), but don't make permanent repairs yet.",
    },
    {
        step: 3,
        title: "Contact Us",
        description: "Call us or file through your carrier's portal. We'll help guide you through the process and ensure your claim is properly documented.",
    },
    {
        step: 4,
        title: "Meet with the Adjuster",
        description: "The insurance company will send an adjuster to assess the damage. Have your documentation ready and be available to answer questions.",
    },
    {
        step: 5,
        title: "Get Repairs Completed",
        description: "Once your claim is approved, you can proceed with repairs. Keep all receipts and documentation for reimbursement.",
    },
]

export default function ClaimsPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-16 md:py-20">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-lewis-orange/10 flex items-center justify-center">
                            <AlertTriangle className="h-8 w-8 text-lewis-orange" />
                        </div>
                        <h1 className="text-lewis-ink mb-4">Need to File a Claim?</h1>
                        <p className="text-xl text-lewis-body mb-8">
                            We're here to help you navigate the claims process. Whether it's a minor incident or major damage,
                            we'll advocate on your behalf to get your claim resolved.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild size="lg" className="btn-accent rounded-full">
                                <Link href="/portal/requests/new">
                                    File a Claim Online
                                </Link>
                            </Button>
                            <Button asChild size="lg" variant="outline" className="rounded-full">
                                <a href={`tel:${siteConfig.contact.phone.claims.replace(/[^0-9]/g, "")}`}>
                                    <Phone className="h-4 w-4 mr-2" />
                                    Call Claims: {siteConfig.contact.phone.claims}
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Claims Process */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-lewis-ink mb-4">The Claims Process</h2>
                        <p className="text-lg text-lewis-body">
                            Here's what to expect when you file a claim.
                        </p>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-6">
                        {claimSteps.map((item) => (
                            <Card key={item.step}>
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-lewis-blue text-white flex items-center justify-center flex-shrink-0 font-bold">
                                            {item.step}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-lewis-ink mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-lewis-body">{item.description}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Promise */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <Card className="max-w-3xl mx-auto">
                        <CardContent className="p-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                    <Shield className="h-6 w-6 text-lewis-blue" />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-lewis-ink mb-4">
                                        We Handle Your Claim
                                    </h2>
                                    <p className="text-lewis-body mb-4">
                                        Unlike dealing directly with an 800 number, you have a local advocate on your side.
                                        We'll help you understand your coverage, document your claim properly, and communicate
                                        with the insurance company on your behalf.
                                    </p>
                                    <p className="text-lewis-body">
                                        If you're not satisfied with a claim decision, we'll help you understand your options
                                        and escalate if necessary.
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Emergency Contact */}
            <section className="py-12 bg-lewis-ink text-white">
                <div className="container-lg text-center">
                    <h2 className="text-white text-2xl font-bold mb-4">
                        Emergency After Hours?
                    </h2>
                    <p className="text-gray-300 mb-6">
                        For emergencies outside business hours, contact your carrier directly.
                        Your policy documents include their 24/7 claims line.
                    </p>
                    <Link href="/contact" className="text-lewis-orange hover:underline font-medium">
                        Contact us for carrier information <ArrowRight className="h-4 w-4 inline ml-1" />
                    </Link>
                </div>
            </section>
        </>
    )
}
