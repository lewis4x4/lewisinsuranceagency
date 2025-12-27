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
import { insuranceTypes } from "@/config/site"
import { cn } from "@/lib/utils"

// Form schemas
export const heroFormSchema = z.object({
    zipCode: z
        .string()
        .min(5, "Please enter a valid ZIP code")
        .max(5, "Please enter a valid ZIP code")
        .regex(/^\d{5}$/, "Please enter a valid 5-digit ZIP code"),
    insuranceType: z.string().min(1, "Please select an insurance type"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().optional(),
    honeypot: z.string().max(0), // Honeypot field - should be empty
})

export type HeroFormData = z.infer<typeof heroFormSchema>

interface HeroFormProps {
    className?: string
    source?: string
}

export function HeroForm({ className, source = "homepage-hero" }: HeroFormProps) {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<HeroFormData>({
        resolver: zodResolver(heroFormSchema),
        defaultValues: {
            zipCode: "",
            insuranceType: "",
            email: "",
            phone: "",
            honeypot: "",
        },
    })

    const onSubmit = async (data: HeroFormData) => {
        // Check honeypot - silently reject bot submissions
        if (data.honeypot) {
            return
        }

        setIsSubmitting(true)

        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...data,
                    source,
                }),
            })

            const result = await response.json()

            if (!response.ok) {
                throw new Error(result.error || "Something went wrong")
            }

            toast.success("Thanks — we got it! We'll be in touch soon.")
            router.push(`/thank-you?id=${result.id}`)
        } catch (error) {
            console.error("Form submission error:", error)
            toast.error("Something went wrong. Please try again.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className={cn("space-y-4", className)}
            noValidate
        >
            {/* Honeypot field - hidden from users */}
            <div className="absolute -left-[9999px]" aria-hidden="true">
                <input type="text" {...register("honeypot")} tabIndex={-1} autoComplete="off" />
            </div>

            {/* ZIP Code */}
            <div className="space-y-1.5">
                <Label htmlFor="hero-zipCode" className="text-sm font-medium text-lewis-ink">
                    ZIP Code <span className="text-red-500">*</span>
                </Label>
                <Input
                    id="hero-zipCode"
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]{5}"
                    maxLength={5}
                    placeholder="Enter your ZIP"
                    {...register("zipCode")}
                    aria-describedby={errors.zipCode ? "hero-zipCode-error" : undefined}
                    className={cn(
                        "h-12 rounded-lg",
                        errors.zipCode && "border-red-500 focus:ring-red-500"
                    )}
                />
                {errors.zipCode && (
                    <p id="hero-zipCode-error" className="text-sm text-red-500" role="alert">
                        {errors.zipCode.message}
                    </p>
                )}
            </div>

            {/* Insurance Type */}
            <div className="space-y-1.5">
                <Label htmlFor="hero-insuranceType" className="text-sm font-medium text-lewis-ink">
                    Insurance Type <span className="text-red-500">*</span>
                </Label>
                <select
                    id="hero-insuranceType"
                    {...register("insuranceType")}
                    aria-describedby={errors.insuranceType ? "hero-insuranceType-error" : undefined}
                    className={cn(
                        "flex h-12 w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                        errors.insuranceType && "border-red-500 focus:ring-red-500"
                    )}
                >
                    <option value="">Select insurance type...</option>
                    {insuranceTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                            {type.label}
                        </option>
                    ))}
                </select>
                {errors.insuranceType && (
                    <p id="hero-insuranceType-error" className="text-sm text-red-500" role="alert">
                        {errors.insuranceType.message}
                    </p>
                )}
            </div>

            {/* Email */}
            <div className="space-y-1.5">
                <Label htmlFor="hero-email" className="text-sm font-medium text-lewis-ink">
                    Email <span className="text-red-500">*</span>
                </Label>
                <Input
                    id="hero-email"
                    type="email"
                    placeholder="you@email.com"
                    {...register("email")}
                    aria-describedby={errors.email ? "hero-email-error" : undefined}
                    className={cn(
                        "h-12 rounded-lg",
                        errors.email && "border-red-500 focus:ring-red-500"
                    )}
                />
                {errors.email && (
                    <p id="hero-email-error" className="text-sm text-red-500" role="alert">
                        {errors.email.message}
                    </p>
                )}
            </div>

            {/* Phone (Optional) */}
            <div className="space-y-1.5">
                <Label htmlFor="hero-phone" className="text-sm font-medium text-lewis-ink">
                    Phone <span className="text-gray-400">(optional)</span>
                </Label>
                <Input
                    id="hero-phone"
                    type="tel"
                    placeholder="(555) 555-5555"
                    {...register("phone")}
                    className="h-12 rounded-lg"
                />
            </div>

            {/* Submit Button */}
            <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-12 btn-accent rounded-full text-base font-semibold touch-target"
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

            {/* Privacy Note */}
            <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to our{" "}
                <a href="/privacy-policy" className="underline hover:text-lewis-blue">
                    Privacy Policy
                </a>
            </p>
        </form>
    )
}
