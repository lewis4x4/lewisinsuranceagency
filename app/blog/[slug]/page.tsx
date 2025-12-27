import { notFound } from "next/navigation"
import Link from "next/link"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calendar, User, Clock } from "lucide-react"
import { getPostBySlug, getAllPosts, getRelatedPosts } from "@/lib/blog"
import { generateArticleSchema, generateBreadcrumbSchema, SchemaScripts } from "@/lib/schema"
import { CTABand } from "@/components/sections"
import { siteConfig } from "@/config/site"

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
    const posts = getAllPosts()
    return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = getPostBySlug(slug)
    if (!post) return {}

    return {
        title: post.title,
        description: post.description,
        authors: [{ name: post.author.name }],
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.publishedAt,
            modifiedTime: post.updatedAt,
            authors: [post.author.name],
        },
        alternates: {
            canonical: `https://${siteConfig.domain}/blog/${slug}`,
        },
    }
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params
    const post = getPostBySlug(slug)

    if (!post) {
        notFound()
    }

    const relatedPosts = getRelatedPosts(slug)
    const baseUrl = `https://${siteConfig.domain}`

    // Generate schemas
    const articleSchema = generateArticleSchema({
        title: post.title,
        description: post.description,
        slug: post.slug,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        authorName: post.author.name,
        authorTitle: post.author.title,
    })

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: "Home", url: baseUrl },
        { name: "Blog", url: `${baseUrl}/blog` },
        { name: post.title, url: `${baseUrl}/blog/${post.slug}` },
    ])

    // Estimate reading time (rough: 200 words per minute)
    const wordCount = post.content.split(/\s+/).length
    const readingTime = Math.ceil(wordCount / 200)

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
                            <Link href="/blog" className="text-lewis-body hover:text-lewis-blue">
                                Blog
                            </Link>
                        </li>
                        <li className="text-lewis-border">/</li>
                        <li className="text-lewis-blue font-medium truncate max-w-[200px]">
                            {post.title}
                        </li>
                    </ol>
                </div>
            </nav>

            {/* Article Header */}
            <header className="hero-gradient py-12 md:py-16">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto">
                        <Link
                            href="/blog"
                            className="inline-flex items-center text-sm text-lewis-body hover:text-lewis-blue mb-6"
                        >
                            <ArrowLeft className="h-4 w-4 mr-2" />
                            Back to Blog
                        </Link>

                        <Badge className="mb-4 bg-lewis-blue/10 text-lewis-blue border-lewis-blue/20">
                            {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                        </Badge>

                        <h1 className="text-lewis-ink mb-4">{post.title}</h1>

                        <p className="text-xl text-lewis-body mb-6">{post.excerpt}</p>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-lewis-body">
                            <span className="flex items-center gap-2">
                                <User className="h-4 w-4" />
                                {post.author.name}
                            </span>
                            <span className="flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {new Date(post.publishedAt).toLocaleDateString("en-US", {
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

            {/* Article Content */}
            <article className="section-wrapper">
                <div className="container-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-3">
                            <div
                                className="prose prose-lg max-w-none prose-headings:text-lewis-ink prose-p:text-lewis-body prose-a:text-lewis-blue prose-strong:text-lewis-ink"
                                dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
                            />

                            {/* Tags */}
                            <div className="mt-8 pt-8 border-t border-lewis-border">
                                <h3 className="text-sm font-medium text-lewis-ink mb-3">Topics</h3>
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag) => (
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
                                                {post.author.name}
                                            </h3>
                                            <p className="text-sm text-lewis-body mb-2">
                                                {post.author.title}
                                            </p>
                                            <p className="text-sm text-lewis-body">
                                                The Lewis Insurance team has been helping Florida
                                                residents and businesses find the right insurance
                                                coverage for over 44 years.
                                            </p>
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

                            {/* Related Posts */}
                            {relatedPosts.length > 0 && (
                                <Card>
                                    <CardContent className="p-6">
                                        <h3 className="font-semibold text-lewis-ink mb-4">
                                            Related Articles
                                        </h3>
                                        <div className="space-y-4">
                                            {relatedPosts.map((related) => (
                                                <Link
                                                    key={related.slug}
                                                    href={`/blog/${related.slug}`}
                                                    className="block group"
                                                >
                                                    <h4 className="text-sm font-medium text-lewis-ink group-hover:text-lewis-blue transition-colors mb-1">
                                                        {related.title}
                                                    </h4>
                                                    <p className="text-xs text-lewis-body line-clamp-2">
                                                        {related.excerpt}
                                                    </p>
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
            const isHeader = cells.some(cell => cell.trim().length > 0)
            const cellTag = isHeader ? 'td' : 'td'
            return `<tr>${cells.map(cell => `<${cellTag} class="border px-4 py-2">${cell.trim()}</${cellTag}>`).join('')}</tr>`
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
