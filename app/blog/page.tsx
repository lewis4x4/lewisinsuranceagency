import Link from "next/link"
import type { Metadata } from "next"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, User } from "lucide-react"
import { getAllPosts, getFeaturedPosts } from "@/lib/blog"
import { CTABand } from "@/components/sections"

export const metadata: Metadata = {
    title: "Insurance Blog | Tips, Guides & News",
    description: "Florida insurance tips, guides, and news from Lewis Insurance. Learn about homeowners, auto, flood, and business insurance from local experts.",
    alternates: {
        canonical: "https://lewisinsurance.com/blog",
    },
}

export default function BlogPage() {
    const posts = getAllPosts()
    const featuredPost = getFeaturedPosts()[0]
    const regularPosts = posts.filter((post) => post.slug !== featuredPost?.slug)

    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-12 md:py-16">
                <div className="container-lg">
                    <div className="max-w-2xl mx-auto text-center">
                        <Badge className="mb-4 bg-lewis-blue/10 text-lewis-blue border-lewis-blue/20">
                            Insurance Resources
                        </Badge>
                        <h1 className="text-lewis-ink mb-4">Insurance Tips & Guides</h1>
                        <p className="text-xl text-lewis-body">
                            Helpful information about Florida insurance from your local independent agents.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && (
                <section className="section-wrapper">
                    <div className="container-lg">
                        <h2 className="text-lewis-ink mb-6">Featured Article</h2>
                        <Link href={`/blog/${featuredPost.slug}`}>
                            <Card className="card-hover overflow-hidden">
                                <CardContent className="p-0">
                                    <div className="grid grid-cols-1 lg:grid-cols-2">
                                        <div className="bg-gradient-to-br from-lewis-blue to-lewis-blue-dark p-8 lg:p-12 text-white">
                                            <Badge className="mb-4 bg-white/20 text-white border-white/30">
                                                {featuredPost.category.charAt(0).toUpperCase() +
                                                    featuredPost.category.slice(1)}
                                            </Badge>
                                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                                                {featuredPost.title}
                                            </h3>
                                            <p className="text-white/80 mb-6">
                                                {featuredPost.excerpt}
                                            </p>
                                            <div className="flex items-center gap-4 text-sm text-white/70">
                                                <span className="flex items-center gap-1">
                                                    <User className="h-4 w-4" />
                                                    {featuredPost.author.name}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="h-4 w-4" />
                                                    {new Date(featuredPost.publishedAt).toLocaleDateString(
                                                        "en-US",
                                                        { month: "long", day: "numeric", year: "numeric" }
                                                    )}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-8 lg:p-12 flex items-center">
                                            <div>
                                                <p className="text-lewis-body mb-6">
                                                    {featuredPost.description}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {featuredPost.tags.map((tag) => (
                                                        <Badge key={tag} variant="secondary">
                                                            {tag}
                                                        </Badge>
                                                    ))}
                                                </div>
                                                <span className="inline-flex items-center text-lewis-blue font-medium group-hover:underline">
                                                    Read Article
                                                    <ArrowRight className="h-4 w-4 ml-2" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </div>
                </section>
            )}

            {/* All Posts */}
            <section className="section-wrapper bg-lewis-page">
                <div className="container-lg">
                    <h2 className="text-lewis-ink mb-8">All Articles</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularPosts.map((post) => (
                            <Link key={post.slug} href={`/blog/${post.slug}`}>
                                <Card className="h-full card-hover group">
                                    <CardContent className="p-6">
                                        <Badge
                                            variant="secondary"
                                            className="mb-3 bg-lewis-blue/10 text-lewis-blue"
                                        >
                                            {post.category.charAt(0).toUpperCase() +
                                                post.category.slice(1)}
                                        </Badge>
                                        <h3 className="text-lg font-semibold text-lewis-ink mb-2 group-hover:text-lewis-blue transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm text-lewis-body mb-4 line-clamp-3">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between text-xs text-lewis-body">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                {new Date(post.publishedAt).toLocaleDateString(
                                                    "en-US",
                                                    { month: "short", day: "numeric", year: "numeric" }
                                                )}
                                            </span>
                                            <span className="text-lewis-blue group-hover:underline flex items-center">
                                                Read
                                                <ArrowRight className="h-3 w-3 ml-1" />
                                            </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <CTABand />
        </>
    )
}
