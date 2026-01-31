import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Clock, FileText } from "lucide-react"
import { getArticleByParams, getAllArticleParams, getRelatedArticles } from "@/lib/articles"
import { generateArticleSchema, generateBreadcrumbSchema, SchemaScripts } from "@/lib/schema"
import { CTABand } from "@/components/sections"
import { siteConfig } from "@/config/site"

interface Props {
    params: Promise<{ year: string; month: string; slug: string }>
}

export async function generateStaticParams() {
    return getAllArticleParams()
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { year, month, slug } = await params
    const article = getArticleByParams(year, month, slug)

    if (!article) return {}

    const baseUrl = `https://${siteConfig.domain}`
    const articleUrl = `${baseUrl}/articles/${year}/${month}/${slug}`

    return {
        title: article.title,
        description: article.description,
        authors: [{ name: article.author }],
        openGraph: {
            title: article.title,
            description: article.description,
            type: "article",
            publishedTime: article.publishedAt,
            modifiedTime: article.updatedAt,
            authors: [article.author],
            url: articleUrl,
            images: article.featuredImage ? [article.featuredImage] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: article.title,
            description: article.description,
        },
        alternates: {
            canonical: articleUrl,
        },
    }
}

export default async function ArticlePage({ params }: Props) {
    const { year, month, slug } = await params
    const article = getArticleByParams(year, month, slug)

    if (!article) {
        notFound()
    }

    const relatedArticles = getRelatedArticles(slug)
    const baseUrl = `https://${siteConfig.domain}`
    const articleUrl = `${baseUrl}/articles/${year}/${month}/${slug}`

    // Generate schemas
    const articleSchema = generateArticleSchema({
        title: article.title,
        description: article.description,
        slug: `articles/${year}/${month}/${slug}`,
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        authorName: article.author,
        authorTitle: article.authorCredentials,
    })

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Articles", url: `${baseUrl}/articles` },
        { name: year, url: `${baseUrl}/articles/${year}` },
        { name: getMonthName(month), url: `${baseUrl}/articles/${year}/${month}` },
        { name: article.title, url: articleUrl },
    ])

    // Calculate reading time
    const wordCount = article.content.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / 200)

    // Version label
    const versionLabel = article.version === "geo"
        ? "Comprehensive Guide"
        : "Quick Answers"

    return (
        <>
            {/* JSON-LD Schema */}
            <SchemaScripts schemas={[articleSchema, breadcrumbSchema]} />

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
                            <Link href="/articles" className="text-lewis-body hover:text-lewis-blue">
                                Articles
                            </Link>
                        </li>
                        <li className="text-lewis-border">/</li>
                        <li>
                            <Link
                                href={`/articles/${year}`}
                                className="text-lewis-body hover:text-lewis-blue"
                            >
                                {year}
                            </Link>
                        </li>
                        <li className="text-lewis-border">/</li>
                        <li>
                            <Link
                                href={`/articles/${year}/${month}`}
                                className="text-lewis-body hover:text-lewis-blue"
                            >
                                {getMonthName(month)}
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
                            href="/articles"
                            className="inline-flex items-center text-sm text-lewis-body hover:text-lewis-blue mb-6"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Articles
                        </Link>

                        <div className="flex gap-2 mb-4">
                            <Badge className="bg-lewis-blue/10 text-lewis-blue border-lewis-blue/20">
                                {article.category.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase())}
                            </Badge>
                            <Badge variant="outline" className="border-lewis-orange text-lewis-orange">
                                <FileText className="h-3 w-3 mr-1" />
                                {versionLabel}
                            </Badge>
                        </div>

                        <h1 className="text-lewis-ink mb-4">{article.title}</h1>

                        <p className="text-xl text-lewis-body mb-6">{article.description}</p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-lewis-body">
                            <span className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                {article.author}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {new Date(article.publishedAt).toLocaleDateString("en-US", {
                                    month: "long",
                                    day: "numeric",
                                    year: "numeric",
                                })}
                            </span>
                            <span className="flex items-center gap-2">
                                <Clock className="h-4 w-4" />
                                {readingTime} min read
                            </span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Featured Image */}
            {article.featuredImage && (
                <div className="bg-white border-b border-lewis-border">
                    <div className="container-lg py-8">
                        <div className="max-w-4xl mx-auto">
                            <div className="relative aspect-video rounded-lg overflow-hidden">
                                <Image
                                    src={article.featuredImage}
                                    alt={article.featuredImageAlt || article.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Article Content */}
            <article className="section-wrapper">
                <div className="container-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div
                                className="prose prose-lg max-w-none prose-headings:text-lewis-ink prose-p:text-lewis-body prose-a:text-lewis-blue prose-strong:text-lewis-ink prose-li:text-lewis-body"
                                dangerouslySetInnerHTML={{ __html: formatArticleContent(article.content) }}
                            />

                            {/* Tags */}
                            <div className="mt-8 pt-8 border-t border-lewis-border">
                                <h3 className="text-sm font-medium text-lewis-ink mb-3">Topics</h3>
                                <div className="flex flex-wrap gap-2">
                                    {article.tags.map((tag) => (
                                        <Badge key={tag} variant="secondary">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            {/* Author Box */}
                            <Card className="mt-8">
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-full bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                            <User className="h-6 w-6 text-lewis-blue" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lewis-ink">
                                                {article.author}
                                            </h3>
                                            <p className="text-sm text-lewis-body mb-2">
                                                {article.authorCredentials}
                                            </p>
                                            <p className="text-sm text-lewis-body">
                                                Lewis Insurance has been helping North Florida families
                                                find the right insurance coverage since 1978.
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Last Updated */}
                            {article.updatedAt !== article.publishedAt && (
                                <p className="mt-4 text-sm text-lewis-body italic">
                                    Last updated: {new Date(article.updatedAt).toLocaleDateString("en-US", {
                                        month: "long",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </p>
                            )}
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
                                    <div className="mt-4 pt-4 border-t border-white/20">
                                        <p className="text-sm text-white/80">
                                            Or call us directly:
                                        </p>
                                        <a
                                            href="tel:3867550050"
                                            className="text-lg font-semibold text-white hover:text-white/90"
                                        >
                                            (386) 755-0050
                                        </a>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Related Articles */}
                            {relatedArticles.length > 0 && (
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold text-lewis-ink mb-4">
                                            Related Articles
                                        </h3>
                                        <div className="space-y-4">
                                            {relatedArticles.map((related) => (
                                                <Link
                                                    key={related.slug}
                                                    href={`/articles/${related.year}/${related.month}/${related.slug}`}
                                                    className="block group"
                                                >
                                                    <div className="flex items-start gap-2">
                                                        <Badge
                                                            variant="outline"
                                                            className="text-xs shrink-0"
                                                        >
                                                            {related.version.toUpperCase()}
                                                        </Badge>
                                                        <div>
                                                            <h4 className="text-sm font-medium text-lewis-ink group-hover:text-lewis-blue transition-colors mb-1">
                                                                {related.title}
                                                            </h4>
                                                            <p className="text-xs text-lewis-body">
                                                                {new Date(related.publishedAt).toLocaleDateString("en-US", {
                                                                    month: "short",
                                                                    day: "numeric",
                                                                    year: "numeric",
                                                                })}
                                                            </p>
                                                        </div>
                                                    </div>
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

function getMonthName(month: string): string {
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]
    const index = parseInt(month, 10) - 1
    return months[index] || month
}

function formatArticleContent(content: string): string {
    return content
        // Remove markdown image syntax if present (we handle images separately)
        .replace(/!\[.*?\]\(.*?\)/g, '')
        // Headers
        .replace(/^#### (.*$)/gim, '<h4 class="text-lg font-semibold mt-6 mb-3">$1</h4>')
        .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-8 mb-4">$1</h3>')
        .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-10 mb-6">$1</h2>')
        .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold mt-10 mb-6">$1</h1>')
        // Bold
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        // Italic
        .replace(/\*(.*?)\*/g, '<em>$1</em>')
        // Links
        .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-lewis-blue hover:underline">$1</a>')
        // Blockquotes
        .replace(/^> (.*$)/gim, '<blockquote class="border-l-4 border-lewis-blue pl-4 italic my-4">$1</blockquote>')
        // Horizontal rules
        .replace(/^---$/gim, '<hr class="my-8 border-lewis-border" />')
        // Checkboxes
        .replace(/- \[x\] (.*$)/gim, '<div class="flex items-start gap-2 mb-2"><span class="text-green-600">✓</span><span>$1</span></div>')
        .replace(/- \[ \] (.*$)/gim, '<div class="flex items-start gap-2 mb-2"><span class="text-lewis-body">○</span><span>$1</span></div>')
        // Lists with emojis (common in our articles)
        .replace(/^- (✅|📞|🌐|📍|⚠️) (.*$)/gim, '<div class="flex items-start gap-2 mb-2"><span>$1</span><span>$2</span></div>')
        // Regular lists
        .replace(/^\- (.*$)/gim, '<li class="ml-6 mb-2 list-disc">$1</li>')
        .replace(/^\d+\. (.*$)/gim, '<li class="ml-6 mb-2 list-decimal">$1</li>')
        // Tables
        .replace(/\|(.+)\|/g, (match) => {
            const cells = match.split('|').filter(Boolean)
            if (cells[0]?.includes('---')) {
                return ''
            }
            return `<tr>${cells.map(cell => `<td class="border border-lewis-border px-4 py-2">${cell.trim()}</td>`).join('')}</tr>`
        })
        // Wrap consecutive table rows
        .replace(/(<tr>.*<\/tr>\n?)+/g, '<table class="w-full border-collapse my-6">$&</table>')
        // Paragraphs (handle double newlines)
        .replace(/\n\n/g, '</p><p class="mb-4">')
        // Wrap in paragraph
        .replace(/^([^<])/, '<p class="mb-4">$1')
        .replace(/([^>])$/, '$1</p>')
        // Clean up empty paragraphs
        .replace(/<p class="mb-4"><\/p>/g, '')
        .replace(/<p class="mb-4">\s*<\/p>/g, '')
        // Clean up paragraphs around block elements
        .replace(/<p class="mb-4">(<h[1-6]|<hr|<blockquote|<table|<div)/g, '$1')
        .replace(/(<\/h[1-6]>|<\/blockquote>|<\/table>|<\/div>)<\/p>/g, '$1')
}
