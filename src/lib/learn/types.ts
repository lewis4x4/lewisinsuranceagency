export interface LearnArticle {
    slug: string
    title: string
    description: string
    content: string
    category?: "homeowners" | "auto" | "flood" | "business" | "general"
    tags: string[]
    publishedAt: string
    updatedAt?: string
}

export interface LearnArticleMeta {
    slug: string
    title: string
    description: string
    category?: LearnArticle["category"]
    tags: string[]
    publishedAt: string
}
