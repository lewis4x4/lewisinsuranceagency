import Link from "next/link"
import { Shield, CheckCircle, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Get Your Free Quote | Lewis Insurance Agency",
    description: "Compare insurance quotes from 20+ carriers in minutes. Connect your current policy and see how much you could save with Lewis Insurance.",
    robots: {
        index: false,
        follow: false,
    },
}

export default function FacebookLandingPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-lewis-gradient-start to-white flex flex-col">
            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="max-w-md w-full text-center">
                    {/* Logo/Icon */}
                    <div className="w-20 h-20 rounded-full bg-lewis-blue/10 flex items-center justify-center mx-auto mb-6">
                        <Shield className="h-10 w-10 text-lewis-blue" />
                    </div>

                    {/* Welcome Message */}
                    <h1 className="text-2xl md:text-3xl font-bold text-lewis-ink mb-4">
                        Welcome from Facebook!
                    </h1>

                    <p className="text-lg text-lewis-body mb-8">
                        See how much you could save on your insurance in just 2 minutes.
                    </p>

                    {/* Green CTA Button */}
                    <a
                        href="https://app.usecanopy.com/c/lewis-insurance-facebook"
                        className="inline-flex items-center justify-center gap-2 w-full max-w-xs bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-colors shadow-lg hover:shadow-xl"
                    >
                        Get My Free Quote
                        <ArrowRight className="h-5 w-5" />
                    </a>

                    {/* Trust Points */}
                    <div className="mt-10 space-y-3">
                        <div className="flex items-center justify-center gap-2 text-sm text-lewis-body">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Compare 20+ carriers instantly</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-sm text-lewis-body">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>No obligation, 100% free</span>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-sm text-lewis-body">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>Local Florida experts</span>
                        </div>
                    </div>
                </div>
            </main>

            {/* Simple Footer */}
            <footer className="py-6 text-center">
                <p className="text-sm text-lewis-body">
                    Lewis Insurance Agency &bull; Lake City, FL
                </p>
                <p className="text-xs text-lewis-body/70 mt-1">
                    <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                </p>
            </footer>
        </div>
    )
}
