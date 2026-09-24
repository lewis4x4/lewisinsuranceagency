import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import crypto from "crypto"
import { supabase } from "@/lib/supabase"
import { siteConfig, coiPolicyTypes, type CoiPolicyType } from "@/config/site"

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

// Certificate of insurance request schema (no SSN / DOB fields by design)
const coiSchema = z.object({
    formType: z.literal("coi"),
    requesterName: z.string().trim().min(2).max(200),
    requesterCompany: z.string().trim().min(1).max(200),
    email: z.string().email("Invalid email address"),
    phone: z.string().trim().min(7).max(30),
    insuredName: z.string().trim().min(1).max(200),
    policyType: z.enum(coiPolicyTypes.map((type) => type.value) as [CoiPolicyType, ...CoiPolicyType[]]),
    holderName: z.string().trim().min(1).max(200),
    holderAddress: z.string().trim().min(5).max(500),
    additionalInsured: z.boolean().optional(),
    waiverSubrogation: z.boolean().optional(),
    neededBy: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date"),
    notes: z.string().max(1000).optional(),
    source: z.string(),
    honeypot: z.string().max(0).optional(),
    privacyConsent: z.literal(true),
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

        // Honeypot check
        if (body.honeypot && body.honeypot.length > 0) {
            // Silently reject bots
            return NextResponse.json({ success: true, id: "blocked" }, { status: 200 })
        }

        if (body.formType === "coi") {
            return await handleCOIRequest(body, request, clientIP)
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

        // Store lead in Supabase
        await storeInSupabase(lead)

        // Also send to CRM webhook if configured
        const webhookUrl = process.env.CRM_WEBHOOK_URL
        if (webhookUrl) {
            await sendToWebhook(lead, webhookUrl)
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

// Certificate of insurance request: stored as a lead and routed to the info@ inbox
async function handleCOIRequest(body: unknown, request: NextRequest, clientIP: string) {
    const validationResult = coiSchema.safeParse(body)
    if (!validationResult.success) {
        const errors = validationResult.error.flatten().fieldErrors
        return NextResponse.json(
            { error: "Validation failed", details: errors },
            { status: 400 }
        )
    }

    const data = validationResult.data
    const clean = (value: string | undefined) => (value ? sanitizeInput(value) : "")

    const details = [
        `Requester company: ${clean(data.requesterCompany)}`,
        `Insured business: ${clean(data.insuredName)}`,
        `Policy type: ${data.policyType}`,
        `Certificate holder: ${clean(data.holderName)}`,
        `Holder address: ${clean(data.holderAddress)}`,
        `Additional insured requested: ${data.additionalInsured ? "Yes" : "No"}`,
        `Waiver of subrogation requested: ${data.waiverSubrogation ? "Yes" : "No"}`,
        `Needed by: ${data.neededBy}`,
        data.notes ? `Notes: ${clean(data.notes)}` : null,
    ].filter(Boolean).join("\n")

    const leadId = crypto.randomUUID()
    const now = new Date().toISOString()

    const lead = {
        id: leadId,
        timestamp: now,
        formType: "coi",
        notifyEmail: siteConfig.contact.email.info,
        subject: `COI request: ${clean(data.insuredName)} for ${clean(data.holderName)}`,
        name: clean(data.requesterName),
        email: clean(data.email),
        phone: clean(data.phone),
        zipCode: null,
        insuranceType: "coi",
        message: details,
        source: clean(data.source),
        ...getUTMParams(request),
        consentTimestamp: now,
        ipHash: hashIP(clientIP),
    }

    await storeInSupabase(lead)

    // Email delivery to info@ is handled by the configured webhook (COI_WEBHOOK_URL, else CRM_WEBHOOK_URL)
    const webhookUrl = process.env.COI_WEBHOOK_URL || process.env.CRM_WEBHOOK_URL
    if (webhookUrl) {
        await sendToWebhook(lead, webhookUrl)
    } else {
        console.warn("COI request stored but no COI_WEBHOOK_URL/CRM_WEBHOOK_URL configured for email routing")
    }

    return NextResponse.json({
        success: true,
        id: leadId,
    })
}

// Send to CRM webhook
async function sendToWebhook(lead: Record<string, unknown>, webhookUrl: string) {
    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(lead),
        })

        if (!response.ok) {
            console.error(`CRM webhook returned ${response.status}`)
        }
    } catch (error) {
        // Log error but don't throw - CRM sync is non-critical
        console.error("Error sending to CRM webhook:", error)
    }
}

// Store in Supabase
async function storeInSupabase(lead: Record<string, unknown>) {
    if (!supabase) {
        throw new Error("Supabase client not configured")
    }

    const { error } = await supabase.from("leads").insert({
        id: lead.id,
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        zip_code: lead.zipCode,
        insurance_type: lead.insuranceType,
        message: lead.message,
        source: lead.source,
        utm_source: lead.utmSource,
        utm_medium: lead.utmMedium,
        utm_campaign: lead.utmCampaign,
        consent_timestamp: lead.consentTimestamp,
        ip_hash: lead.ipHash,
    })

    if (error) {
        console.error("Error storing lead in Supabase:", error)
        throw error
    }
}

// Simple GET endpoint for health check
export async function GET() {
    return NextResponse.json({ status: "ok" })
}
