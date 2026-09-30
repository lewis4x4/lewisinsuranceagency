import { siteConfig } from "@/config/site"

const LINK_CLASS = "text-lewis-blue underline underline-offset-2 hover:text-lewis-ink"
const CONTROL_CHARACTER_PATTERN = /[\u0000-\u001F\u007F-\u009F]/
const LEADING_WHITESPACE_PATTERN = /^\s/u
const HTTP_PROTOCOL_PATTERN = /^https?:\/\//i
const BOLD_PATTERN = /\*\*(.*?)\*\*/g

export function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;")
}

function getSafeHref(rawHref: string): string | null {
    const href = rawHref.trim()

    if (
        !href ||
        LEADING_WHITESPACE_PATTERN.test(rawHref) ||
        CONTROL_CHARACTER_PATTERN.test(rawHref)
    ) {
        return null
    }

    const lowerHref = href.toLowerCase()

    if (lowerHref.startsWith("mailto:") || lowerHref.startsWith("tel:")) {
        return href
    }

    if (href.startsWith("#")) {
        return href
    }

    // A backslash after the first slash is also rejected because browsers can
    // normalize it into a protocol-relative URL.
    if (href.startsWith("/") && href[1] !== "/" && href[1] !== "\\") {
        return href
    }

    if (!HTTP_PROTOCOL_PATTERN.test(href)) {
        return null
    }

    try {
        const url = new URL(href)
        return (url.protocol === "http:" || url.protocol === "https:") && url.hostname
            ? href
            : null
    } catch {
        return null
    }
}

export function isSafeHref(rawHref: string): boolean {
    return getSafeHref(rawHref) !== null
}

function isExternalHttpHref(href: string): boolean {
    try {
        const url = new URL(href)

        if (url.protocol !== "http:" && url.protocol !== "https:") {
            return false
        }

        const hostname = url.hostname.toLowerCase()
        const siteHostname = siteConfig.domain.toLowerCase()

        return hostname !== siteHostname && hostname !== `www.${siteHostname}`
    } catch {
        return false
    }
}

interface TokenizedLinks {
    content: string
    links: string[]
    marker: string
}

function tokenizeMarkdownLinks(content: string): TokenizedLinks {
    let marker = "\uE000"
    while (content.includes(marker)) {
        marker += "\uE000"
    }

    const links: string[] = []
    let output = ""
    let cursor = 0
    let searchFrom = 0

    while (searchFrom < content.length) {
        const textStart = content.indexOf("[", searchFrom)
        if (textStart === -1) break

        // Leave Markdown image syntax unchanged; this renderer only handles links.
        if (textStart > 0 && content[textStart - 1] === "!") {
            searchFrom = textStart + 1
            continue
        }

        const textEnd = content.indexOf("]", textStart + 1)
        if (textEnd === -1) break

        if (content[textEnd + 1] !== "(") {
            searchFrom = textStart + 1
            continue
        }

        const hrefStart = textEnd + 2
        let hrefEnd = hrefStart
        let parenthesisDepth = 1

        for (; hrefEnd < content.length; hrefEnd += 1) {
            if (content[hrefEnd] === "(") {
                parenthesisDepth += 1
            } else if (content[hrefEnd] === ")") {
                parenthesisDepth -= 1
                if (parenthesisDepth === 0) break
            }
        }

        if (parenthesisDepth !== 0) {
            searchFrom = textStart + 1
            continue
        }

        const linkText = content.slice(textStart + 1, textEnd)
        const safeHref = getSafeHref(content.slice(hrefStart, hrefEnd))
        const escapedText = escapeHtml(linkText)
        let replacement = escapedText

        if (safeHref) {
            const externalAttributes = isExternalHttpHref(safeHref)
                ? ' target="_blank" rel="noopener noreferrer"'
                : ""
            const renderedText = escapedText.replace(BOLD_PATTERN, "<strong>$1</strong>")
            const anchor = `<a href="${escapeHtml(safeHref)}" class="${LINK_CLASS}"${externalAttributes}>${renderedText}</a>`

            replacement = `${marker}${links.length}${marker}`
            links.push(anchor)
        }

        output += content.slice(cursor, textStart) + replacement
        cursor = hrefEnd + 1
        searchFrom = cursor
    }

    output += content.slice(cursor)

    return { content: output, links, marker }
}

function restoreMarkdownLinks(content: string, links: string[], marker: string): string {
    return links.reduce(
        (result, link, index) => result.split(`${marker}${index}${marker}`).join(link),
        content,
    )
}

// Simple markdown-like formatting
export function formatContent(content: string): string {
    const tokenized = tokenizeMarkdownLinks(content)
    const formatted = tokenized.content
        // Headers
        .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold mt-8 mb-4">$1</h3>')
        .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold mt-10 mb-6">$1</h2>')
        // Bold
        .replace(BOLD_PATTERN, '<strong>$1</strong>')
        // Lists
        .replace(/^\- (.*$)/gim, '<li class="ml-4">$1</li>')
        .replace(/(?:^<li class="ml-4">.*<\/li>$\n?)+/gm, (match) => `<ul class="list-disc pl-6 mb-4">${match.trimEnd()}</ul>\n`)
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

    return restoreMarkdownLinks(formatted, tokenized.links, tokenized.marker)
}
