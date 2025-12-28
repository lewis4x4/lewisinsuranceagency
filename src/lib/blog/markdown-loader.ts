import fs from "fs"
import path from "path"
import matter from "gray-matter"
import type { BlogPost } from "./types"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

/**
 * Load a single markdown blog post from content/blog/
 */
export function loadMarkdownPost(filename: string): BlogPost | null {
    try {
        const filePath = path.join(BLOG_DIR, filename)
        const fileContent = fs.readFileSync(filePath, "utf-8")
        const { data, content } = matter(fileContent)

        // Generate slug from filename (remove date prefix and .md extension)
        // Format: 2025-12-28-some-title.md -> some-title
        const slug = filename
            .replace(/^\d{4}-\d{2}-\d{2}-/, "")
            .replace(/\.md$/, "")

        // Map frontmatter to BlogPost type
        const post: BlogPost = {
            slug,
            title: data.title || "Untitled",
            description: data.description || "",
            excerpt: data.excerpt || data.description || "",
            content: content.trim(),
            author: {
                name: data.author || "Lewis Insurance Team",
                title: "Licensed Florida Insurance Agents",
            },
            publishedAt: data.date || new Date().toISOString().split("T")[0],
            updatedAt: data.updatedAt || data.date || new Date().toISOString().split("T")[0],
            category: mapCategory(data.category),
            tags: Array.isArray(data.tags) ? data.tags : [],
            featured: data.featured === true,
        }

        return post
    } catch (error) {
        console.error(`Error loading markdown post ${filename}:`, error)
        return null
    }
}

/**
 * Load all markdown posts from content/blog/
 */
export function loadAllMarkdownPosts(): BlogPost[] {
    try {
        if (!fs.existsSync(BLOG_DIR)) {
            return []
        }

        const files = fs.readdirSync(BLOG_DIR)
        const markdownFiles = files.filter(
            (file) => file.endsWith(".md") && !file.startsWith(".")
        )

        const posts: BlogPost[] = []
        for (const file of markdownFiles) {
            const post = loadMarkdownPost(file)
            if (post) {
                posts.push(post)
            }
        }

        // Sort by date, newest first
        return posts.sort(
            (a, b) =>
                new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
        )
    } catch (error) {
        console.error("Error loading markdown posts:", error)
        return []
    }
}

/**
 * Map category string to allowed types
 */
function mapCategory(category: string | undefined): BlogPost["category"] {
    const validCategories = ["guides", "tips", "news", "local"] as const
    if (category && validCategories.includes(category as typeof validCategories[number])) {
        return category as BlogPost["category"]
    }
    // Map common variations
    if (category?.includes("homeowners") || category?.includes("auto")) {
        return "guides"
    }
    return "news" // Default for auto-generated posts
}
