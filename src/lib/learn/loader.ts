import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { LearnArticle } from "./types"

const LEARN_DIR = path.join(process.cwd(), "content/learn")

/**
 * Load a single markdown article from content/learn/
 */
export function loadLearnArticle(filename: string): LearnArticle | null {
    try {
        const filePath = path.join(LEARN_DIR, filename)
        const fileContent = fs.readFileSync(filePath, "utf-8")
        const { data, content } = matter(fileContent)

        // Generate slug from filename (remove .md extension)
        const slug = filename.replace(/\.md$/, "")

        const article: LearnArticle = {
            slug,
            title: data.title || "Untitled",
            description: data.description || "",
            content: content.trim(),
            category: mapCategory(data.category),
            tags: Array.isArray(data.tags) ? data.tags : [],
            publishedAt: data.date || new Date().toISOString().split("T")[0],
            updatedAt: data.updatedAt,
        }

        return article
    } catch (error) {
        console.error(`Error loading learn article ${filename}:`, error)
        return null
    }
}

/**
 * Load all markdown articles from content/learn/
 */
export function loadAllLearnArticles(): LearnArticle[] {
    try {
        if (!fs.existsSync(LEARN_DIR)) {
            return []
        }

        const files = fs.readdirSync(LEARN_DIR)
        const markdownFiles = files.filter(
            (file) => file.endsWith(".md") && !file.startsWith(".")
        )

        const articles: LearnArticle[] = []
        for (const file of markdownFiles) {
            const article = loadLearnArticle(file)
            if (article) {
                articles.push(article)
            }
        }

        // Sort alphabetically by title for FAQ-style browsing
        return articles.sort((a, b) => a.title.localeCompare(b.title))
    } catch (error) {
        console.error("Error loading learn articles:", error)
        return []
    }
}

/**
 * Get a single article by slug
 */
export function getLearnArticleBySlug(slug: string): LearnArticle | null {
    const articles = loadAllLearnArticles()
    return articles.find((article) => article.slug === slug) || null
}

/**
 * Get articles by category
 */
export function getLearnArticlesByCategory(category: LearnArticle["category"]): LearnArticle[] {
    const articles = loadAllLearnArticles()
    return articles.filter((article) => article.category === category)
}

/**
 * Get related articles based on tags
 */
export function getRelatedArticles(currentSlug: string, limit = 3): LearnArticle[] {
    const articles = loadAllLearnArticles()
    const current = articles.find((a) => a.slug === currentSlug)

    if (!current) return articles.slice(0, limit)

    // Score articles by matching tags
    const scored = articles
        .filter((a) => a.slug !== currentSlug)
        .map((article) => {
            const matchingTags = article.tags.filter((tag) =>
                current.tags.includes(tag)
            ).length
            const sameCategory = article.category === current.category ? 1 : 0
            return { article, score: matchingTags + sameCategory }
        })
        .sort((a, b) => b.score - a.score)

    return scored.slice(0, limit).map((s) => s.article)
}

/**
 * Map category string to allowed types
 */
function mapCategory(category: string | undefined): LearnArticle["category"] {
    const validCategories = ["homeowners", "auto", "flood", "business", "general"] as const
    if (category && validCategories.includes(category as typeof validCategories[number])) {
        return category as LearnArticle["category"]
    }
    return "general"
}
