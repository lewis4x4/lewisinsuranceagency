import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, HelpCircle, Clock } from "lucide-react"
import { getLearnArticleBySlug, loadAllLearnArticles, getRelatedArticles } from "@/lib/learn"
import { generateFAQSchema, generateBreadcrumbSchema, SchemaScripts } from "@/lib/schema"
import { CTABand } from "@/components/sections"
import { siteConfig } from "@/config/site"

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const articles = loadAllLearnArticles()
    return articles.map((article) => ({ slug: article.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const article = getLearnArticleBySlug(slug)
    if (!article) return {}

    return {
        title: `${article.title} | Insurance FAQ`,
        description: article.description,
        openGraph: {
            title: article.title,
            description: article.description,
            type: "article",
            publishedTime: article.publishedAt,
            modifiedTime: article.updatedAt,
        },
        alternates: {
            canonical: `https://${siteConfig.domain}/learn/${slug}`,
        },
    }
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

export default async function LearnArticlePage({ params }: Props) {
    const { slug } = await params
    const article = getLearnArticleBySlug(slug)

    if (!article) {
        notFound()
    }

    const relatedArticles = getRelatedArticles(slug, 4)
    const baseUrl = `https://${siteConfig.domain}`

    // Generate FAQ schema (single Q&A)
    const faqSchema = generateFAQSchema([
        {
            question: article.title,
            answer: article.description,
        },
    ])

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Insurance FAQ", url: `${baseUrl}/learn` },
        { name: article.title, url: `${baseUrl}/learn/${article.slug}` },
    ])

    // Estimate reading time
    const wordCount = article.content.split(/\s+/).length
    const readingTime = Math.max(1, Math.ceil(wordCount / 200))

    return (
        <>
            {/* JSON-LD Schema */}
            <SchemaScripts schemas={[faqSchema, breadcrumbSchema]} />

            {/* Breadcrumbs */}
            <nav className="bg-white border-b border-lewis-border" aria-label="Breadcrumb">
                <div className="container-lg py-3">
                    <ol className="flex items-center gap-2 text-sm flex-wrap">
                        <li>
                            <Link href="/" className="text-lewis-body hover:text-lewis-blue">
                                Home
                            </Link>
                        </li>
                        <li className="text-lewis-border">/</li>
                        <li>
                            <Link href="/learn" className="text-lewis-body hover:text-lewis-blue">
                                Insurance FAQ
                            </Link>
                        </li>
                        <li className="text-lewis-border">/</li>
                        <li className="text-lewis-blue font-medium truncate max-w-[200px]">
                            {article.title}
                        </li>
                    </ol>
                </div>
            </nav>

            {/* Article Header */}
            <header className="hero-gradient py-12 md:py-16">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <Link
                            href="/learn"
                            className="inline-flex items-center text-sm text-lewis-body hover:text-lewis-blue mb-6"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to FAQ
                        </Link>

                        <Badge className={`mb-4 ${categoryColors[article.category || "general"]}`}>
                            {categoryLabels[article.category || "general"]}
                        </Badge>

                        <h1 className="text-lewis-ink mb-4">{article.title}</h1>

                        <p className="text-xl text-lewis-body mb-6">{article.description}</p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-lewis-body">
                            <span className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {readingTime} min read
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Article Content */}
            <article className="section-wrapper">
                <div className="container-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <Card className="p-8 md:p-12">
                                <div
                                    className="prose prose-lg max-w-none prose-headings:text-lewis-ink prose-p:text-lewis-body prose-a:text-lewis-blue prose-strong:text-lewis-ink"
                                    dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
                                />
                            </Card>

                            {/* Tags */}
                            {article.tags.length > 0 && (
                                <div className="mt-8 pt-8 border-t border-lewis-border">
                                    <h3 className="text-sm font-medium text-lewis-ink mb-3">Related Topics</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {article.tags.map((tag) => (
                                            <Badge key={tag} variant="secondary">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Expert Help Box */}
                            <Card className="mt-8 bg-lewis-page">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                            <HelpCircle className="h-6 w-6 text-lewis-blue" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lewis-ink">
                                                Still Have Questions?
                                            </h3>
                                            <p className="text-sm text-lewis-body mb-4">
                                                Our Florida insurance experts are here to help. Get personalized
                                                answers and a free quote tailored to your needs.
                                            </p>
                                            <Button asChild className="btn-primary rounded-full">
                                                <Link href="/contact">Talk to an Expert</Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar */}
                        <aside className="space-y-6">
                            {/* Get Quote Card */}
                            <Card className="bg-lewis-blue text-white sticky top-24">
                                <CardContent className="p-6">
                                    <h3 className="font-semibold text-white mb-2">
                                        Need Insurance Help?
                                    </h3>
                                    <p className="text-sm text-white/80 mb-4">
                                        Get a free quote from our team of Florida insurance experts.
                                    </p>
                                    <Button
                                        asChild
                                        variant="secondary"
                                        className="w-full rounded-full"
                                    >
                                        <Link href="/contact">Get a Free Quote</Link>
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Related Questions */}
                            {relatedArticles.length > 0 && (
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold text-lewis-ink mb-4">
                                            Related Questions
                                        </h3>
                                        <div className="space-y-4">
                                            {relatedArticles.map((related) => (
                                                <Link
                                                    key={related.slug}
                                                    href={`/learn/${related.slug}`}
                                                    className="block group"
                                                >
                                                    <h4 className="text-sm font-medium text-lewis-ink group-hover:text-lewis-blue transition-colors mb-1 line-clamp-2">
                                                        {related.title}
                                                    </h4>
                                                    <Badge
                                                        className={`text-xs ${categoryColors[related.category || "general"]}`}
                                                    >
                                                        {categoryLabels[related.category || "general"]}
                                                    </Badge>
                                                </Link>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            )}
                        </aside>
                    </div>
                </div>
            </article>

            {/* CTA */}
            <CTABand />
        </>
    )
}

// Simple markdown-like formatting
function formatContent(content: string): string {
    return content
        // Headers
        .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-8 mb-4">$1</h3>')
        .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-10 mb-6">$1</h2>')
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Lists
        .replace(/^\- (.*$)/gim, '<li class="ml-4">$1</li>')
        // Tables (basic support)
        .replace(/\|(.+)\|/g, (match) => {
            const cells = match.split('|').filter(Boolean)
            if (cells[0]?.includes('---')) {
                return ''
            }
            return `<tr>${cells.map(cell => `<td class="border px-4 py-2">${cell.trim()}</td>`).join('')}</tr>`
        })
        // Paragraphs
        .replace(/\n\n/g, '</p><p class="mb-4">')
        // Line breaks within content
        .replace(/\n(?!<)/g, '<br/>')
        // Wrap in paragraph
        .replace(/^/, '<p class="mb-4">')
        .replace(/$/, '</p>')
        // Clean up empty paragraphs
        .replace(/<p class="mb-4"><\/p>/g, '')
        .replace(/<p class="mb-4"><br\/><\/p>/g, '')
}
