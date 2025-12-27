"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2 } from "lucide-react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"
import { useCSRF } from "@/hooks/useCSRF"

// CTA Band form schema
export const ctaFormSchema = z.object({
    name: z.string().min(2, "Please enter your name"),
    email: z.string().email("Please enter a valid email address"),
    zipCode: z
        .string()
        .min(5, "Please enter a valid ZIP code")
        .max(5, "Please enter a valid ZIP code")
        .regex(/^\d{5}$/, "Please enter a valid 5-digit ZIP code"),
    honeypot: z.string().max(0),
})

export type CTAFormData = z.infer<typeof ctaFormSchema>

interface CTAFormProps {
    className?: string
    source?: string
    variant?: "horizontal" | "vertical"
}

export function CTAForm({ className, source = "homepage-cta", variant = "horizontal" }: CTAFormProps) {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const { csrfToken, refresh: refreshCSRF } = useCSRF()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<CTAFormData>({
        resolver: zodResolver(ctaFormSchema),
        defaultValues: {
            name: "",
            email: "",
            zipCode: "",
            honeypot: "",
        },
    })

    const onSubmit = async (data: CTAFormData) => {
        if (data.honeypot) {
            return
        }

        if (!csrfToken) {
            toast.error("Security token expired. Please try again.")
            await refreshCSRF()
            return
        }

        setIsSubmitting(true)

        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                credentials: "include",
                body: JSON.stringify({
                    ...data,
                    source,
                    csrfToken,
                }),
            })

            const result = await response.json()

            if (!response.ok) {
                if (response.status === 403) {
                    await refreshCSRF()
                }
                throw new Error(result.error || "Something went wrong")
            }

            toast.success("Thanks — we got it! We'll be in touch soon.")
            refreshCSRF()
            router.push(`/thank-you?id=${result.id}`)
        } catch (error) {
            console.error("Form submission error:", error)
            toast.error(error instanceof Error ? error.message : "Something went wrong. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const isHorizontal = variant === "horizontal"

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn(
                isHorizontal
                    ? "flex flex-col md:flex-row gap-4 items-end"
                    : "space-y-4",
                className
            )}
            noValidate
        >
            {/* Honeypot */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
                <input type="text" {...register("honeypot")} tabIndex={-1} autoComplete="off" />
            </div>

            {/* Name */}
            <div className={cn("space-y-1.5", isHorizontal && "flex-1")}>
                <Label htmlFor="cta-name" className="text-sm font-medium text-white">
                    Name
                </Label>
                <Input
                    id="cta-name"
                    type="text"
                    placeholder="Your name"
                    {...register("name")}
                    aria-describedby={errors.name ? "cta-name-error" : undefined}
                    className={cn(
                        "h-12 rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/60",
                        errors.name && "border-red-400"
                    )}
                />
                {errors.name && (
                    <p id="cta-name-error" className="text-sm text-red-300" role="alert">
                        {errors.name.message}
                    </p>
                )}
            </div>

            {/* Email */}
            <div className={cn("space-y-1.5", isHorizontal && "flex-1")}>
                <Label htmlFor="cta-email" className="text-sm font-medium text-white">
                    Email
                </Label>
                <Input
                    id="cta-email"
                    type="email"
                    placeholder="you@email.com"
                    {...register("email")}
                    aria-describedby={errors.email ? "cta-email-error" : undefined}
                    className={cn(
                        "h-12 rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/60",
                        errors.email && "border-red-400"
                    )}
                />
                {errors.email && (
                    <p id="cta-email-error" className="text-sm text-red-300" role="alert">
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* ZIP Code */}
            <div className={cn("space-y-1.5", isHorizontal && "flex-1")}>
                <Label htmlFor="cta-zipCode" className="text-sm font-medium text-white">
                    ZIP Code
                </Label>
                <Input
                    id="cta-zipCode"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]{5}"
                    maxLength={5}
                    placeholder="ZIP"
                    {...register("zipCode")}
                    aria-describedby={errors.zipCode ? "cta-zipCode-error" : undefined}
                    className={cn(
                        "h-12 rounded-lg bg-white/10 border-white/20 text-white placeholder:text-white/60",
                        errors.zipCode && "border-red-400"
                    )}
                />
                {errors.zipCode && (
                    <p id="cta-zipCode-error" className="text-sm text-red-300" role="alert">
                        {errors.zipCode.message}
                    </p>
                )}
            </div>

            {/* Submit */}
            <Button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                    "h-12 btn-accent rounded-full font-semibold touch-target",
                    isHorizontal ? "px-8" : "w-full"
                )}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                    </>
                ) : (
                    "Get My Quote"
                )}
            </Button>
        </form>
    )
}
