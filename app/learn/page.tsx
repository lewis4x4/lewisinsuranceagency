import Link from "next/link"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, HelpCircle, BookOpen } from "lucide-react"
import { loadAllLearnArticles } from "@/lib/learn"
import { CTABand } from "@/components/sections"

export const metadata: Metadata = {
    title: "Insurance FAQ | Common Questions Answered",
    description: "Get answers to common Florida insurance questions. Learn about homeowners, auto, flood, and business insurance from local experts.",
    alternates: {
        canonical: "https://lewisinsurance.com/learn",
    },
}

const categoryLabels: Record<string, string> = {
    homeowners: "Homeowners",
    auto: "Auto",
    flood: "Flood",
    business: "Business",
    general: "General",
}

const categoryColors: Record<string, string> = {
    homeowners: "bg-blue-100 text-blue-800",
    auto: "bg-green-100 text-green-800",
    flood: "bg-cyan-100 text-cyan-800",
    business: "bg-purple-100 text-purple-800",
    general: "bg-gray-100 text-gray-800",
}

export default function LearnPage() {
    const articles = loadAllLearnArticles()

    // Group articles by category
    const grouped = articles.reduce((acc, article) => {
        const cat = article.category || "general"
        if (!acc[cat]) acc[cat] = []
        acc[cat].push(article)
        return acc
    }, {} as Record<string, typeof articles>)

    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-12 md:py-16">
                <div className="container-lg">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-16 h-16 rounded-full bg-lewis-blue/10 flex items-center justify-center mx-auto mb-6">
                            <HelpCircle className="h-8 w-8 text-lewis-blue" />
                        </div>
                        <Badge className="mb-4 bg-lewis-blue/10 text-lewis-blue border-lewis-blue/20">
                            Insurance FAQ
                        </Badge>
                        <h1 className="text-lewis-ink mb-4">Common Insurance Questions</h1>
                        <p className="text-xl text-lewis-body">
                            Get clear answers to frequently asked questions about Florida insurance.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-8 bg-white border-b border-lewis-border">
                <div className="container-lg">
                    <div className="flex flex-wrap justify-center gap-8 text-center">
                        <div>
                            <div className="text-3xl font-bold text-lewis-blue">{articles.length}</div>
                            <div className="text-sm text-lewis-body">Questions Answered</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-lewis-blue">{Object.keys(grouped).length}</div>
                            <div className="text-sm text-lewis-body">Categories</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-lewis-blue">44+</div>
                            <div className="text-sm text-lewis-body">Years Experience</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Questions Grid */}
            <section className="section-wrapper">
                <div className="container-lg">
                    {articles.length === 0 ? (
                        <Card className="p-12 text-center">
                            <BookOpen className="h-12 w-12 text-lewis-body/50 mx-auto mb-4" />
                            <h2 className="text-xl font-semibold text-lewis-ink mb-2">
                                Coming Soon
                            </h2>
                            <p className="text-lewis-body">
                                We're working on answering your most common insurance questions. Check back soon!
                            </p>
                        </Card>
                    ) : (
                        <>
                            <h2 className="text-lewis-ink mb-8">All Questions</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {articles.map((article) => (
                                    <Link key={article.slug} href={`/learn/${article.slug}`}>
                                        <Card className="h-full card-hover group">
                                            <CardContent className="p-6">
                                                <Badge
                                                    className={`mb-3 ${categoryColors[article.category || "general"]}`}
                                                >
                                                    {categoryLabels[article.category || "general"]}
                                                </Badge>
                                                <h3 className="text-lg font-semibold text-lewis-ink mb-2 group-hover:text-lewis-blue transition-colors line-clamp-3">
                                                    {article.title}
                                                </h3>
                                                <p className="text-sm text-lewis-body mb-4 line-clamp-2">
                                                    {article.description}
                                                </p>
                                                <span className="text-lewis-blue text-sm font-medium group-hover:underline flex items-center">
                                                    Read Answer
                                                    <ArrowRight className="h-4 w-4 ml-1" />
                                                </span>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </section>

            {/* Browse by Category */}
            {Object.keys(grouped).length > 1 && (
                <section className="section-wrapper bg-lewis-page">
                    <div className="container-lg">
                        <h2 className="text-lewis-ink mb-8">Browse by Category</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Object.entries(grouped).map(([category, categoryArticles]) => (
                                <Card key={category} className="p-6">
                                    <Badge className={`mb-3 ${categoryColors[category]}`}>
                                        {categoryLabels[category]}
                                    </Badge>
                                    <div className="text-2xl font-bold text-lewis-ink mb-2">
                                        {categoryArticles.length}
                                    </div>
                                    <p className="text-sm text-lewis-body mb-4">
                                        questions answered
                                    </p>
                                    <ul className="space-y-2">
                                        {categoryArticles.slice(0, 3).map((article) => (
                                            <li key={article.slug}>
                                                <Link
                                                    href={`/learn/${article.slug}`}
                                                    className="text-sm text-lewis-body hover:text-lewis-blue line-clamp-1"
                                                >
                                                    {article.title}
                                                </Link>
                                            </li>
                                        ))}
                                        {categoryArticles.length > 3 && (
                                            <li className="text-sm text-lewis-blue font-medium">
                                                +{categoryArticles.length - 3} more
                                            </li>
                                        )}
                                    </ul>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <CTABand />
        </>
    )
}
