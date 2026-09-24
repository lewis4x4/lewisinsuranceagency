"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { CheckCircle, Loader2 } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig, coiPolicyTypes } from "@/config/site"
import { cn } from "@/lib/utils"
import { pushDataLayer } from "@/lib/analytics"

const coiFormSchema = z.object({
    requesterName: z.string().trim().min(2, "Please enter your name"),
    requesterCompany: z.string().trim().min(1, "Please enter your company"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().trim().min(7, "Please enter a valid phone number"),
    insuredName: z.string().trim().min(1, "Please enter the insured business name"),
    policyType: z.string().min(1, "Please select a policy type"),
    holderName: z.string().trim().min(1, "Please enter the certificate holder name"),
    holderAddress: z.string().trim().min(5, "Please enter the certificate holder address"),
    additionalInsured: z.boolean(),
    waiverSubrogation: z.boolean(),
    neededBy: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Please choose a date"),
    notes: z.string().max(1000, "Please keep notes under 1,000 characters"),
    privacyConsent: z.boolean().refine((val) => val === true, {
        message: "You must agree to the Privacy Policy",
    }),
    honeypot: z.string().max(0),
})

type COIFormData = z.infer<typeof coiFormSchema>

type TextFieldName = "requesterName" | "requesterCompany" | "email" | "phone" | "insuredName" | "holderName"

const textFields: { name: TextFieldName; label: string; type?: string; autoComplete?: string }[] = [
    { name: "requesterName", label: "Your name", autoComplete: "name" },
    { name: "requesterCompany", label: "Company", autoComplete: "organization" },
    { name: "email", label: "Email", type: "email", autoComplete: "email" },
    { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
    { name: "insuredName", label: "Insured business name (policyholder)" },
    { name: "holderName", label: "Certificate holder name" },
]

export function COIRequestForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<COIFormData>({
        resolver: zodResolver(coiFormSchema),
        defaultValues: {
            requesterName: "",
            requesterCompany: "",
            email: "",
            phone: "",
            insuredName: "",
            policyType: "",
            holderName: "",
            holderAddress: "",
            additionalInsured: false,
            waiverSubrogation: false,
            neededBy: "",
            notes: "",
            privacyConsent: false,
            honeypot: "",
        },
    })

    const onSubmit = async (data: COIFormData) => {
        // Check honeypot - silently reject bot submissions
        if (data.honeypot) return

        setIsSubmitting(true)

        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...data,
                    formType: "coi",
                    source: window.location.pathname,
                }),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || "Something went wrong")
            }

            pushDataLayer({
                event: "coi_request",
                page_path: window.location.pathname,
                policy_type: data.policyType,
            })
            setIsSubmitted(true)
        } catch (error) {
            console.error("COI form submission error:", error)
            toast.error("Something went wrong. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    if (isSubmitted) {
        return (
            <div className="text-center py-8" role="status">
                <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" aria-hidden="true" />
                <p className="text-lg text-lewis-ink">
                    Thanks. We received your certificate request and will follow up at the email you provided. For urgent jobs call{" "}
                    <a
                        href={`tel:${siteConfig.contact.phone.main.replace(/[^0-9]/g, "")}`}
                        className="text-lewis-blue underline"
                    >
                        {siteConfig.contact.phone.main}
                    </a>
                    .
                </p>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
            {/* Honeypot */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
                <input type="text" {...register("honeypot")} tabIndex={-1} autoComplete="off" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {textFields.map((field) => (
                    <div key={field.name} className="space-y-1.5">
                        <Label htmlFor={`coi-${field.name}`}>
                            {field.label} <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id={`coi-${field.name}`}
                            type={field.type ?? "text"}
                            autoComplete={field.autoComplete}
                            {...register(field.name)}
                            aria-invalid={!!errors[field.name]}
                            aria-describedby={errors[field.name] ? `coi-${field.name}-error` : undefined}
                            className={cn("h-12", errors[field.name] && "border-red-500")}
                        />
                        {errors[field.name] && (
                            <p id={`coi-${field.name}-error`} className="text-sm text-red-500">
                                {errors[field.name]?.message}
                            </p>
                        )}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Policy Type */}
                <div className="space-y-1.5">
                    <Label htmlFor="coi-policyType">
                        Policy type <span className="text-red-500">*</span>
                    </Label>
                    <select
                        id="coi-policyType"
                        {...register("policyType")}
                        aria-invalid={!!errors.policyType}
                        aria-describedby={errors.policyType ? "coi-policyType-error" : undefined}
                        className={cn(
                            "flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm",
                            errors.policyType && "border-red-500"
                        )}
                    >
                        <option value="">Select a policy type...</option>
                        {coiPolicyTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                                {type.label}
                            </option>
                        ))}
                    </select>
                    {errors.policyType && (
                        <p id="coi-policyType-error" className="text-sm text-red-500">
                            {errors.policyType.message}
                        </p>
                    )}
                </div>

                {/* Needed By */}
                <div className="space-y-1.5">
                    <Label htmlFor="coi-neededBy">
                        Needed by <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="coi-neededBy"
                        type="date"
                        {...register("neededBy")}
                        aria-invalid={!!errors.neededBy}
                        aria-describedby={errors.neededBy ? "coi-neededBy-error" : undefined}
                        className={cn("h-12", errors.neededBy && "border-red-500")}
                    />
                    {errors.neededBy && (
                        <p id="coi-neededBy-error" className="text-sm text-red-500">
                            {errors.neededBy.message}
                        </p>
                    )}
                </div>
            </div>

            {/* Holder Address */}
            <div className="space-y-1.5">
                <Label htmlFor="coi-holderAddress">
                    Certificate holder address <span className="text-red-500">*</span>
                </Label>
                <Textarea
                    id="coi-holderAddress"
                    rows={3}
                    {...register("holderAddress")}
                    aria-invalid={!!errors.holderAddress}
                    aria-describedby={errors.holderAddress ? "coi-holderAddress-error" : undefined}
                    className={cn(errors.holderAddress && "border-red-500")}
                />
                {errors.holderAddress && (
                    <p id="coi-holderAddress-error" className="text-sm text-red-500">
                        {errors.holderAddress.message}
                    </p>
                )}
            </div>

            {/* Endorsements */}
            <fieldset className="space-y-3">
                <legend className="text-sm font-medium text-lewis-ink mb-1">Endorsements requested (optional)</legend>
                <div className="flex items-start gap-3">
                    <input
                        id="coi-additionalInsured"
                        type="checkbox"
                        {...register("additionalInsured")}
                        className="mt-1 h-4 w-4 rounded border-gray-300"
                    />
                    <label htmlFor="coi-additionalInsured" className="text-sm text-lewis-body">
                        Additional insured
                    </label>
                </div>
                <div className="flex items-start gap-3">
                    <input
                        id="coi-waiverSubrogation"
                        type="checkbox"
                        {...register("waiverSubrogation")}
                        className="mt-1 h-4 w-4 rounded border-gray-300"
                    />
                    <label htmlFor="coi-waiverSubrogation" className="text-sm text-lewis-body">
                        Waiver of subrogation
                    </label>
                </div>
            </fieldset>

            {/* Notes */}
            <div className="space-y-1.5">
                <Label htmlFor="coi-notes">Notes (optional)</Label>
                <Textarea
                    id="coi-notes"
                    rows={4}
                    {...register("notes")}
                    aria-invalid={!!errors.notes}
                    aria-describedby={errors.notes ? "coi-notes-error coi-notes-hint" : "coi-notes-hint"}
                    className={cn(errors.notes && "border-red-500")}
                />
                <p id="coi-notes-hint" className="text-xs text-lewis-body">
                    Job or contract details only. Please do not include medical or personal identification information.
                </p>
                {errors.notes && (
                    <p id="coi-notes-error" className="text-sm text-red-500">
                        {errors.notes.message}
                    </p>
                )}
            </div>

            {/* Privacy Consent */}
            <div className="space-y-1.5">
                <div className="flex items-start gap-3">
                    <input
                        id="coi-privacyConsent"
                        type="checkbox"
                        {...register("privacyConsent")}
                        aria-invalid={!!errors.privacyConsent}
                        aria-describedby={errors.privacyConsent ? "coi-privacyConsent-error" : undefined}
                        className="mt-1 h-4 w-4 rounded border-gray-300"
                    />
                    <label htmlFor="coi-privacyConsent" className="text-sm text-lewis-body">
                        I agree to the{" "}
                        <a href="/privacy-policy" className="text-lewis-blue underline">
                            Privacy Policy
                        </a>{" "}
                        <span className="text-red-500">*</span>
                    </label>
                </div>
                {errors.privacyConsent && (
                    <p id="coi-privacyConsent-error" className="text-sm text-red-500">
                        {errors.privacyConsent.message}
                    </p>
                )}
            </div>

            {/* Submit */}
            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto btn-accent rounded-full touch-target"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    "Request Certificate"
                )}
            </Button>
        </form>
    )
}
