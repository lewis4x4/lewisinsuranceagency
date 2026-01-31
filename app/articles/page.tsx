import Link from "next/link"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, FileText, ArrowRight } from "lucide-react"
import { getAllArticles } from "@/lib/articles"
import { generateBreadcrumbSchema, SchemaScripts } from "@/lib/schema"
import { CTABand } from "@/components/sections"
import { siteConfig } from "@/config/site"

export const metadata: Metadata = {
    title: "Insurance Articles & Guides | Lewis Insurance",
    description: "Comprehensive insurance articles and quick-answer guides for Florida homeowners. Expert insights on auto, homeowners, flood, and business insurance from Lewis Insurance Agency.",
    alternates: {
        canonical: `https://${siteConfig.domain}/articles`,
    },
    openGraph: {
        title: "Insurance Articles & Guides | Lewis Insurance",
        description: "Comprehensive insurance articles and quick-answer guides for Florida homeowners.",
        type: "website",
        url: `https://${siteConfig.domain}/articles`,
    },
}

export default function ArticlesPage() {
    const articles = getAllArticles()
    const baseUrl = `https://${siteConfig.domain}`

    // Group articles by month/year
    const groupedArticles = articles.reduce((acc, article) => {
        const key = `${article.year}-${article.month}`
        if (!acc[key]) {
            acc[key] = []
        }
        acc[key].push(article)
        return acc
    }, {} as Record<string, typeof articles>)

    // Sort keys by date descending
    const sortedKeys = Object.keys(groupedArticles).sort((a, b) => b.localeCompare(a))

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Articles", url: `${baseUrl}/articles` },
    ])

    return (
        <>
            <SchemaScripts schemas={[breadcrumbSchema]} />

            {/* Breadcrumbs */}
            <nav className="bg-white border-b border-lewis-border" aria-label="Breadcrumb">
                <div className="container-lg py-3">
                    <ol className="flex items-center gap-2 text-sm">
                        <li>
                            <Link href="/" className="text-lewis-body hover:text-lewis-blue">
                                Home
                            </Link>
                        </li>
                        <li className="text-lewis-border">/</li>
                        <li className="text-lewis-blue font-medium">Articles</li>
                    </ol>
                </div>
            </nav>

            {/* Header */}
            <header className="hero-gradient py-12 md:py-16">
                <div className="container-lg">
                    <div className="max-w-3xl">
                        <Badge className="mb-4 bg-lewis-blue/10 text-lewis-blue border-lewis-blue/20">
                            Insurance Knowledge Center
                        </Badge>
                        <h1 className="text-lewis-ink mb-4">Insurance Articles & Guides</h1>
                        <p className="text-xl text-lewis-body">
                            Expert insights and comprehensive guides on Florida insurance topics.
                            Each article comes in two versions: quick answers (AEO) for fast facts,
                            and comprehensive guides (GEO) for in-depth understanding.
                        </p>
                    </div>
                </div>
            </header>

            {/* Version Legend */}
            <div className="bg-white border-b border-lewis-border">
                <div className="container-lg py-4">
                    <div className="flex flex-wrap gap-6 text-sm">
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="border-lewis-orange text-lewis-orange">
                                <FileText className="h-3 w-3 mr-1" />
                                AEO
                            </Badge>
                            <span className="text-lewis-body">Quick Answers — Fast facts and FAQs</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge variant="outline" className="border-lewis-blue text-lewis-blue">
                                <FileText className="h-3 w-3 mr-1" />
                                GEO
                            </Badge>
                            <span className="text-lewis-body">Comprehensive Guide — In-depth analysis with sources</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Articles List */}
            <section className="section-wrapper">
                <div className="container-lg">
                    {articles.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-lewis-body text-lg">
                                No articles published yet. Check back soon!
                            </p>
                        </div>
                    ) : (
                        <div className="space-y-12">
                            {sortedKeys.map((key) => {
                                const [year, month] = key.split("-")
                                const monthArticles = groupedArticles[key]
                                const monthName = getMonthName(month)

                                return (
                                    <div key={key}>
                                        <h2 className="text-xl font-semibold text-lewis-ink mb-6 flex items-center gap-2">
                                            <Calendar className="h-5 w-5 text-lewis-blue" />
                                            {monthName} {year}
                                        </h2>
                                        <div className="grid gap-6 md:grid-cols-2">
                                            {monthArticles.map((article) => (
                                                <ArticleCard key={article.slug} article={article} />
                                            ))}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )}
                </div>
            </section>

            <CTABand />
        </>
    )
}

function ArticleCard({ article }: { article: ReturnType<typeof getAllArticles>[0] }) {
    const wordCount = article.content.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / 200)

    const versionColor = article.version === "geo" ? "lewis-blue" : "lewis-orange"
    const versionLabel = article.version === "geo" ? "Comprehensive Guide" : "Quick Answers"

    return (
        <Card className="group hover:shadow-md transition-shadow">
            <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                    <Badge
                        variant="outline"
                        className={`border-${versionColor} text-${versionColor}`}
                    >
                        <FileText className="h-3 w-3 mr-1" />
                        {article.version.toUpperCase()}
                    </Badge>
                    <span className="text-xs text-lewis-body flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {readingTime} min
                    </span>
                </div>

                <Link
                    href={`/articles/${article.year}/${article.month}/${article.slug}`}
                    className="block"
                >
                    <h3 className="font-semibold text-lewis-ink group-hover:text-lewis-blue transition-colors mb-2 line-clamp-2">
                        {article.title}
                    </h3>
                </Link>

                <p className="text-sm text-lewis-body mb-4 line-clamp-2">
                    {article.description}
                </p>

                <div className="flex items-center justify-between">
                    <span className="text-xs text-lewis-body">
                        {new Date(article.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                        })}
                    </span>
                    <Link
                        href={`/articles/${article.year}/${article.month}/${article.slug}`}
                        className="text-sm font-medium text-lewis-blue hover:text-lewis-blue/80 flex items-center gap-1"
                    >
                        Read {versionLabel}
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}

function getMonthName(month: string): string {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    const index = parseInt(month, 10) - 1
    return months[index] || month
}
