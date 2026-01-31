import fs from "fs"
import path from "path"
import matter from "gray-matter"

const ARTICLES_DIR = path.join(process.cwd(), "content/articles")

export interface Article {
    slug: string
    year: string
    month: string
    title: string
    description: string
    content: string
    author: string
    authorCredentials: string
    publishedAt: string
    updatedAt: string
    category: string
    tags: string[]
    featuredImage: string
    featuredImageAlt: string
    version: "aeo" | "geo"
    schemaType: string
    localFocus: string
    primaryKeyword: string
    secondaryKeywords: string[]
    sourcesCount?: number
    wordCount?: number
}

export interface ArticleMeta {
    slug: string
    year: string
    month: string
    title: string
    description: string
    publishedAt: string
    version: "aeo" | "geo"
    category: string
}

/**
 * Load a single article from content/articles/YYYY/MM/
 */
export function loadArticle(year: string, month: string, filename: string): Article | null {
    try {
        const filePath = path.join(ARTICLES_DIR, year, month, filename)
        if (!fs.existsSync(filePath)) {
            return null
        }

        const fileContent = fs.readFileSync(filePath, "utf-8")
        const { data, content } = matter(fileContent)

        // Extract slug from filename (remove -aeo.md or -geo.md suffix)
        const slug = filename.replace(/\.(md)$/, "")

        const article: Article = {
            slug,
            year,
            month,
            title: data.title || "Untitled",
            description: data.meta_description || data.description || "",
            content: content.trim(),
            author: data.author || "Lewis Insurance Agency",
            authorCredentials: data.author_credentials || "Serving North Florida since 1978",
            publishedAt: data.date || `${year}-${month}-01`,
            updatedAt: data.last_updated || data.date || `${year}-${month}-01`,
            category: data.category || "florida-insurance",
            tags: Array.isArray(data.tags) ? data.tags : [],
            featuredImage: data.featured_image || "",
            featuredImageAlt: data.featured_image_alt || "",
            version: data.version === "geo" ? "geo" : "aeo",
            schemaType: data.schema_type || "Article",
            localFocus: data.local_focus || "Lake City, FL | Columbia County | North Florida",
            primaryKeyword: data.primary_keyword || "",
            secondaryKeywords: Array.isArray(data.secondary_keywords) ? data.secondary_keywords : [],
            sourcesCount: data.sources_count,
            wordCount: data.word_count || content.split(/\s+/).length,
        }

        return article
    } catch (error) {
        console.error(`Error loading article ${year}/${month}/${filename}:`, error)
        return null
    }
}

/**
 * Get an article by year, month, and slug
 */
export function getArticleByParams(year: string, month: string, slug: string): Article | null {
    const filename = `${slug}.md`
    return loadArticle(year, month, filename)
}

/**
 * Load all articles from content/articles/
 */
export function getAllArticles(): Article[] {
    try {
        if (!fs.existsSync(ARTICLES_DIR)) {
            return []
        }

        const articles: Article[] = []

        // Get all year directories
        const years = fs.readdirSync(ARTICLES_DIR).filter(item => {
            const itemPath = path.join(ARTICLES_DIR, item)
            return fs.statSync(itemPath).isDirectory() && /^\d{4}$/.test(item)
        })

        for (const year of years) {
            const yearPath = path.join(ARTICLES_DIR, year)

            // Get all month directories
            const months = fs.readdirSync(yearPath).filter(item => {
                const itemPath = path.join(yearPath, item)
                return fs.statSync(itemPath).isDirectory() && /^\d{2}$/.test(item)
            })

            for (const month of months) {
                const monthPath = path.join(yearPath, month)

                // Get all markdown files
                const files = fs.readdirSync(monthPath).filter(
                    file => file.endsWith(".md") && !file.startsWith(".")
                )

                for (const file of files) {
                    const article = loadArticle(year, month, file)
                    if (article) {
                        articles.push(article)
                    }
                }
            }
        }

        // Sort by date, newest first
        return articles.sort(
            (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        )
    } catch (error) {
        console.error("Error loading articles:", error)
        return []
    }
}

/**
 * Get all article params for static generation
 */
export function getAllArticleParams(): { year: string; month: string; slug: string }[] {
    const articles = getAllArticles()
    return articles.map(article => ({
        year: article.year,
        month: article.month,
        slug: article.slug,
    }))
}

/**
 * Get articles grouped by version (AEO/GEO)
 */
export function getArticlesByVersion(version: "aeo" | "geo"): Article[] {
    return getAllArticles().filter(article => article.version === version)
}

/**
 * Get related articles (same category, different slug)
 */
export function getRelatedArticles(slug: string, limit = 3): ArticleMeta[] {
    const articles = getAllArticles()
    const current = articles.find(a => a.slug === slug)

    if (!current) return []

    return articles
        .filter(a => a.slug !== slug && a.category === current.category)
        .slice(0, limit)
        .map(a => ({
            slug: a.slug,
            year: a.year,
            month: a.month,
            title: a.title,
            description: a.description,
            publishedAt: a.publishedAt,
            version: a.version,
            category: a.category,
        }))
}
