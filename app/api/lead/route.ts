import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import crypto from "crypto"
import fs from "fs/promises"
import path from "path"
// cookies import removed - not currently used

// CSRF token store (in-memory, use Redis in production for distributed systems)
const csrfTokenStore = new Map<string, { token: string; timestamp: number }>()
const CSRF_TOKEN_TTL = 60 * 60 * 1000 // 1 hour

// Rate limiting store (in-memory for simplicity, use Redis in production)
const rateLimitStore = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT = 5 // requests per minute
const RATE_LIMIT_WINDOW = 60 * 1000 // 1 minute in ms

// Lead schema
const leadSchema = z.object({
    name: z.string().optional(),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    zipCode: z.string().regex(/^\d{5}$/, "Invalid ZIP code"),
    insuranceType: z.string().optional(),
    message: z.string().optional(),
    source: z.string(),
    honeypot: z.string().max(0).optional(),
    privacyConsent: z.boolean().optional(),
})


// Helper to hash IP
function hashIP(ip: string): string {
    return crypto.createHash("sha256").update(ip).digest("hex").substring(0, 16)
}

// Helper to get client IP
function getClientIP(request: NextRequest): string {
    const forwarded = request.headers.get("x-forwarded-for")
    if (forwarded) {
        return forwarded.split(",")[0].trim()
    }
    return request.headers.get("x-real-ip") || "unknown"
}

// Rate limit check
function isRateLimited(ip: string): boolean {
    const now = Date.now()
    const entry = rateLimitStore.get(ip)

    if (!entry) {
        rateLimitStore.set(ip, { count: 1, timestamp: now })
        return false
    }

    // Reset if window has passed
    if (now - entry.timestamp > RATE_LIMIT_WINDOW) {
        rateLimitStore.set(ip, { count: 1, timestamp: now })
        return false
    }

    // Increment and check
    entry.count++
    if (entry.count > RATE_LIMIT) {
        return true
    }

    return false
}

// Sanitize input
function sanitizeInput(input: string): string {
    return input
        .replace(/<[^>]*>/g, "") // Remove HTML tags
        .replace(/[<>'"&]/g, "") // Remove special chars
        .trim()
        .substring(0, 1000) // Limit length
}

// Get UTM params from headers/cookies
function getUTMParams(request: NextRequest): Record<string, string | undefined> {
    const searchParams = new URL(request.url).searchParams
    return {
        utmSource: searchParams.get("utm_source") || undefined,
        utmMedium: searchParams.get("utm_medium") || undefined,
        utmCampaign: searchParams.get("utm_campaign") || undefined,
    }
}

// Validate CSRF token
function validateCSRFToken(request: NextRequest, body: { csrfToken?: string }): boolean {
    const cookieToken = request.cookies.get("csrf_token")?.value
    const bodyToken = body.csrfToken

    if (!cookieToken || !bodyToken) {
        return false
    }

    // Check if token exists in store and hasn't expired
    const storedEntry = csrfTokenStore.get(cookieToken)
    if (!storedEntry) {
        return false
    }

    // Check TTL
    if (Date.now() - storedEntry.timestamp > CSRF_TOKEN_TTL) {
        csrfTokenStore.delete(cookieToken)
        return false
    }

    // Validate token matches
    return cookieToken === bodyToken
}

export async function POST(request: NextRequest) {
    try {
        const clientIP = getClientIP(request)

        // Rate limiting
        if (isRateLimited(clientIP)) {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            )
        }

        const body = await request.json()

        // CSRF validation
        if (!validateCSRFToken(request, body)) {
            return NextResponse.json(
                { error: "Invalid or expired security token. Please refresh and try again." },
                { status: 403 }
            )
        }

        // Honeypot check
        if (body.honeypot && body.honeypot.length > 0) {
            // Silently reject bots
            return NextResponse.json({ success: true, id: "blocked" }, { status: 200 })
        }

        // Validate input
        const validationResult = leadSchema.safeParse(body)
        if (!validationResult.success) {
            const errors = validationResult.error.flatten().fieldErrors
            return NextResponse.json(
                { error: "Validation failed", details: errors },
                { status: 400 }
            )
        }

        const data = validationResult.data

        // Sanitize all string fields
        const sanitizedData: Record<string, unknown> = {}
        for (const [key, value] of Object.entries(data)) {
            if (typeof value === "string") {
                sanitizedData[key] = sanitizeInput(value)
            } else {
                sanitizedData[key] = value
            }
        }

        // Create lead object
        const leadId = crypto.randomUUID()
        const now = new Date().toISOString()
        const utmParams = getUTMParams(request)

        const lead = {
            id: leadId,
            timestamp: now,
            name: sanitizedData.name || null,
            email: sanitizedData.email,
            phone: sanitizedData.phone || null,
            zipCode: sanitizedData.zipCode,
            insuranceType: sanitizedData.insuranceType || null,
            message: sanitizedData.message || null,
            source: sanitizedData.source,
            ...utmParams,
            consentTimestamp: now,
            ipHash: hashIP(clientIP),
        }

        // Storage based on environment variable
        const destination = process.env.LEADS_DESTINATION || "local"

        switch (destination) {
            case "local":
                await storeLocally(lead)
                break
            case "webhook":
                await sendToWebhook(lead)
                break
            default:
                await storeLocally(lead)
        }

        return NextResponse.json({
            success: true,
            id: leadId,
            message: "Thank you for your inquiry. We'll be in touch soon!",
        })
    } catch (error) {
        console.error("Lead API error:", error)
        return NextResponse.json(
            { error: "An error occurred processing your request. Please try again." },
            { status: 500 }
        )
    }
}

// Store locally (development)
async function storeLocally(lead: Record<string, unknown>) {
    const dataDir = path.join(process.cwd(), "data")
    const filePath = path.join(dataDir, "leads.json")

    try {
        // Ensure directory exists
        await fs.mkdir(dataDir, { recursive: true })

        // Read existing leads
        let leads: Record<string, unknown>[] = []
        try {
            const content = await fs.readFile(filePath, "utf-8")
            leads = JSON.parse(content)
        } catch {
            // File doesn't exist yet, start fresh
        }

        // Add new lead
        leads.push(lead)

        // Write back
        await fs.writeFile(filePath, JSON.stringify(leads, null, 2))
    } catch (error) {
        console.error("Error storing lead locally:", error)
        throw error
    }
}

// Send to webhook (production)
async function sendToWebhook(lead: Record<string, unknown>) {
    const webhookUrl = process.env.WEBHOOK_URL

    if (!webhookUrl) {
        console.warn("WEBHOOK_URL not configured, falling back to local storage")
        await storeLocally(lead)
        return
    }

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(lead),
        })

        if (!response.ok) {
            throw new Error(`Webhook returned ${response.status}`)
        }
    } catch (error) {
        console.error("Error sending to webhook:", error)
        // Fallback to local storage
        await storeLocally(lead)
    }
}

// CSRF token generation - sets cookie and returns token
export async function GET() {
    const token = crypto.randomUUID()

    // Store token with timestamp for TTL validation
    csrfTokenStore.set(token, { token, timestamp: Date.now() })

    // Clean up old tokens periodically (simple cleanup every 100 requests)
    if (csrfTokenStore.size > 100) {
        const now = Date.now()
        for (const [key, value] of csrfTokenStore.entries()) {
            if (now - value.timestamp > CSRF_TOKEN_TTL) {
                csrfTokenStore.delete(key)
            }
        }
    }

    // Create response with cookie
    const response = NextResponse.json({ csrfToken: token })

    // Set HTTP-only cookie for double-submit validation
    response.cookies.set("csrf_token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: CSRF_TOKEN_TTL / 1000, // Convert to seconds
        path: "/",
    })

    return response
}
