import Link from "next/link"
import { Home, Search, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function NotFound() {
    const popularLinks = [
        { title: "Home", href: "/" },
        { title: "Homeowners Insurance", href: "/personal/homeowners-insurance-florida" },
        { title: "Auto Insurance", href: "/personal/auto-insurance-florida" },
        { title: "Flood Insurance", href: "/personal/flood-insurance-florida" },
        { title: "Business Insurance", href: "/business" },
        { title: "Contact Us", href: "/contact" },
        { title: "Client Portal", href: "/portal" },
    ]

    return (
        <section className="hero-gradient min-h-[80vh] flex items-center">
            <div className="container-lg py-16">
                <Card className="max-w-2xl mx-auto shadow-xl">
                    <CardContent className="p-8 md:p-12 text-center">
                        {/* 404 Icon */}
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-lewis-blue/10 flex items-center justify-center">
                            <Search className="h-10 w-10 text-lewis-blue" />
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl md:text-5xl font-bold text-lewis-ink mb-4">
                            404
                        </h1>
                        <h2 className="text-xl font-medium text-lewis-ink mb-4">
                            Page Not Found
                        </h2>

                        <p className="text-lewis-body mb-8 max-w-md mx-auto">
                            Sorry, we couldn't find the page you're looking for.
                            It may have been moved or no longer exists.
                        </p>

                        {/* Popular Links */}
                        <div className="bg-lewis-page rounded-xl p-6 mb-8 text-left">
                            <h3 className="font-semibold text-lewis-ink mb-4">Popular Pages</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                {popularLinks.map((link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className="flex items-center gap-2 text-sm text-lewis-body hover:text-lewis-blue transition-colors py-1"
                                    >
                                        <ArrowRight className="h-3 w-3" />
                                        {link.title}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button asChild className="btn-primary rounded-full">
                                <Link href="/">
                                    <Home className="h-4 w-4 mr-2" />
                                    Back to Home
                                </Link>
                            </Button>
                            <Button asChild variant="outline" className="rounded-full">
                                <Link href="/contact">
                                    Contact Support
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    )
}
