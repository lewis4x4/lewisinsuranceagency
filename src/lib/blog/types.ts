export interface BlogPost {
    slug: string
    title: string
    description: string
    excerpt: string
    content: string
    author: {
        name: string
        title: string
    }
    publishedAt: string
    updatedAt: string
    category: "guides" | "tips" | "news" | "local"
    tags: string[]
    featured?: boolean
    relatedPosts?: string[]
}

export interface BlogPostMeta {
    slug: string
    title: string
    description: string
    excerpt: string
    author: {
        name: string
        title: string
    }
    publishedAt: string
    updatedAt: string
    category: "guides" | "tips" | "news" | "local"
    tags: string[]
    featured?: boolean
}
