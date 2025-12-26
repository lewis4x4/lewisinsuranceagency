/**
 * SEO Utilities for Lewis Insurance
 * Helper functions for generating SEO-optimized content
 */

import { siteConfig } from "@/config/site"
import { serviceKeywords, cityData, generateLocalKeywords } from "@/data/keywords"

const baseUrl = `https://${siteConfig.domain}`

// Generate SEO metadata for service pages
export function generateServiceMetadata(serviceKey: keyof typeof serviceKeywords) {
    const keywords = serviceKeywords[serviceKey]

    return {
        title: `${keywords.primary} | ${siteConfig.name}`,
        description: `Compare ${keywords.primary.toLowerCase()} quotes from multiple carriers. Free quotes, local experts, 44+ years serving Florida. ${keywords.secondary[0]}.`,
        keywords: [
            keywords.primary,
            ...keywords.secondary.slice(0, 3),
            ...keywords.longTail.slice(0, 2),
        ],
    }
}

// Generate SEO metadata for city pages
export function generateCityMetadata(citySlug: keyof typeof cityData) {
    const city = cityData[citySlug]

    if (!city) {
        throw new Error(`Invalid city slug: ${String(citySlug)}`)
    }

    return {
        title: `${city.name} Insurance Agency | ${siteConfig.name}`,
        description: `Independent insurance agency serving ${city.name}, ${city.county} County. Compare home, auto, flood & business insurance. Free quotes from local Florida experts.`,
        keywords: [
            `${city.name} insurance agency`,
            `insurance ${city.name} FL`,
            `${city.name} Florida insurance`,
            `${city.county} County insurance`,
            ...city.nearbyAreas.map((area: string) => `insurance near ${area}`),
        ],
    }
}

// Generate SEO metadata for city+service pages
export function generateCityServiceMetadata(
    serviceKey: keyof typeof serviceKeywords,
    citySlug: keyof typeof cityData
) {
    const city = cityData[citySlug]
    const service = serviceKeywords[serviceKey]
    const localKeywords = generateLocalKeywords(serviceKey, citySlug)

    if (!city || !service) {
        throw new Error(`Invalid service or city: ${String(serviceKey)}, ${String(citySlug)}`)
    }

    const serviceName = service.primary.replace("Florida ", "")

    return {
        title: `${serviceName} ${city.name}, FL | ${siteConfig.name}`,
        description: `Compare ${serviceName.toLowerCase()} quotes in ${city.name}, ${city.county} County. Local Florida insurance experts, multiple carriers, free quotes.`,
        keywords: [
            localKeywords.primary,
            ...localKeywords.secondary.slice(0, 3),
            `${city.name} ${city.county} County ${serviceName.toLowerCase()}`,
        ],
    }
}

// Generate canonical URL
export function generateCanonicalUrl(path: string): string {
    const cleanPath = path.startsWith("/") ? path : `/${path}`
    return `${baseUrl}${cleanPath}`
}

// Generate breadcrumb items for structured data
export function generateBreadcrumbItems(
    items: { name: string; path: string }[]
): { name: string; url: string }[] {
    return items.map(item => ({
        name: item.name,
        url: `${baseUrl}${item.path}`,
    }))
}

// Calculate reading time for content
export function calculateReadingTime(content: string): number {
    const wordsPerMinute = 200
    const wordCount = content.trim().split(/\s+/).length
    return Math.ceil(wordCount / wordsPerMinute)
}

// Generate meta description with proper length
export function generateMetaDescription(
    text: string,
    maxLength: number = 160
): string {
    if (text.length <= maxLength) {
        return text
    }

    // Find the last complete sentence or word within the limit
    const truncated = text.substring(0, maxLength - 3)
    const lastSpace = truncated.lastIndexOf(" ")

    return `${truncated.substring(0, lastSpace)}...`
}

// Generate Open Graph data
export function generateOpenGraphData(options: {
    title: string
    description: string
    path: string
    type?: "website" | "article"
    image?: string
    publishedTime?: string
    modifiedTime?: string
}) {
    return {
        title: options.title,
        description: options.description,
        url: `${baseUrl}${options.path}`,
        siteName: siteConfig.name,
        type: options.type || "website",
        locale: "en_US",
        ...(options.image && { images: [{ url: options.image }] }),
        ...(options.publishedTime && { publishedTime: options.publishedTime }),
        ...(options.modifiedTime && { modifiedTime: options.modifiedTime }),
    }
}

// Generate Twitter card data
export function generateTwitterData(options: {
    title: string
    description: string
    image?: string
}) {
    return {
        card: "summary_large_image" as const,
        title: options.title,
        description: options.description,
        ...(options.image && { images: [options.image] }),
    }
}

// Check if content meets minimum word count
export function meetsWordCount(content: string, minimum: number): boolean {
    const wordCount = content.trim().split(/\s+/).length
    return wordCount >= minimum
}

// Analyze keyword density in content
export function analyzeKeywordDensity(
    content: string,
    keyword: string
): { count: number; density: number } {
    const words = content.toLowerCase().split(/\s+/)
    const keywordLower = keyword.toLowerCase()
    const keywordWords = keywordLower.split(/\s+/)

    let count = 0

    // Count phrase occurrences
    for (let i = 0; i <= words.length - keywordWords.length; i++) {
        const phrase = words.slice(i, i + keywordWords.length).join(" ")
        if (phrase === keywordLower) {
            count++
        }
    }

    const density = (count * keywordWords.length / words.length) * 100

    return { count, density: Math.round(density * 100) / 100 }
}

// Generate internal link suggestions based on content
export function suggestInternalLinks(
    content: string,
    currentPath: string
): { text: string; href: string; relevance: number }[] {
    const suggestions: { text: string; href: string; relevance: number }[] = []
    const contentLower = content.toLowerCase()

    // Service page links
    const serviceLinks: Record<string, { keywords: string[]; href: string }> = {
        homeowners: {
            keywords: ["homeowners", "home insurance", "dwelling", "property insurance"],
            href: "/personal/homeowners-insurance-florida",
        },
        flood: {
            keywords: ["flood", "flooding", "nfip", "flood zone"],
            href: "/personal/flood-insurance-florida",
        },
        auto: {
            keywords: ["auto", "car insurance", "vehicle", "driving"],
            href: "/personal/auto-insurance-florida",
        },
        condo: {
            keywords: ["condo", "condominium", "ho-6", "unit owner"],
            href: "/personal/condo-insurance-florida",
        },
        umbrella: {
            keywords: ["umbrella", "excess liability", "additional coverage"],
            href: "/personal/umbrella-insurance-florida",
        },
        business: {
            keywords: ["business", "commercial", "company", "enterprise"],
            href: "/business",
        },
        workersComp: {
            keywords: ["workers comp", "employee injury", "workplace injury"],
            href: "/business/workers-compensation-florida",
        },
    }

    for (const [, data] of Object.entries(serviceLinks)) {
        if (data.href === currentPath) continue

        const matchCount = data.keywords.filter(kw =>
            contentLower.includes(kw)
        ).length

        if (matchCount > 0) {
            suggestions.push({
                text: data.keywords[0],
                href: data.href,
                relevance: matchCount / data.keywords.length,
            })
        }
    }

    return suggestions.sort((a, b) => b.relevance - a.relevance).slice(0, 5)
}

// Generate alt text for images
export function generateImageAltText(options: {
    subject: string
    location?: string
    context?: string
}): string {
    const parts = [options.subject]

    if (options.location) {
        parts.push(`in ${options.location}`)
    }

    if (options.context) {
        parts.push(`- ${options.context}`)
    }

    return parts.join(" ")
}

// Validate page SEO completeness
export interface SEOValidationResult {
    isValid: boolean
    issues: string[]
    warnings: string[]
    score: number
}

export function validatePageSEO(options: {
    title?: string
    description?: string
    h1?: string
    content?: string
    hasCanonical?: boolean
    hasSchema?: boolean
    imageCount?: number
    imagesWithAlt?: number
}): SEOValidationResult {
    const issues: string[] = []
    const warnings: string[] = []
    let score = 100

    // Title checks
    if (!options.title) {
        issues.push("Missing page title")
        score -= 20
    } else {
        if (options.title.length < 30) {
            warnings.push("Title is shorter than recommended (30-60 chars)")
            score -= 5
        }
        if (options.title.length > 60) {
            warnings.push("Title exceeds recommended length (60 chars)")
            score -= 5
        }
    }

    // Description checks
    if (!options.description) {
        issues.push("Missing meta description")
        score -= 15
    } else {
        if (options.description.length < 120) {
            warnings.push("Meta description is shorter than recommended (120-160 chars)")
            score -= 5
        }
        if (options.description.length > 160) {
            warnings.push("Meta description exceeds recommended length (160 chars)")
            score -= 5
        }
    }

    // H1 check
    if (!options.h1) {
        issues.push("Missing H1 heading")
        score -= 15
    }

    // Content length check
    if (options.content) {
        const wordCount = options.content.trim().split(/\s+/).length
        if (wordCount < 300) {
            warnings.push(`Content is thin (${wordCount} words, recommend 500+)`)
            score -= 10
        }
    }

    // Canonical check
    if (!options.hasCanonical) {
        warnings.push("Missing canonical URL")
        score -= 5
    }

    // Schema check
    if (!options.hasSchema) {
        warnings.push("Missing structured data (JSON-LD)")
        score -= 10
    }

    // Image alt text check
    if (options.imageCount && options.imagesWithAlt !== undefined) {
        const missingAlt = options.imageCount - options.imagesWithAlt
        if (missingAlt > 0) {
            warnings.push(`${missingAlt} image(s) missing alt text`)
            score -= missingAlt * 2
        }
    }

    return {
        isValid: issues.length === 0,
        issues,
        warnings,
        score: Math.max(0, score),
    }
}
