"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Loader2, Phone, Mail, Clock, MapPin } from "lucide-react"
import { toast } from "sonner"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig, insuranceTypes } from "@/config/site"
import { CanopyConnectSection } from "@/components/canopy"
import { cn } from "@/lib/utils"

// Contact form schema
const contactFormSchema = z.object({
    name: z.string().min(2, "Please enter your name"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().optional(),
    insuranceType: z.string().optional(),
    message: z.string().min(10, "Please enter a message"),
    privacyConsent: z.boolean().refine((val) => val === true, {
        message: "You must agree to the Privacy Policy",
    }),
    honeypot: z.string().max(0),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export default function ContactPage() {
    const router = useRouter()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: "",
            email: "",
            phone: "",
            insuranceType: "",
            message: "",
            privacyConsent: false,
            honeypot: "",
        },
    })

    const onSubmit = async (data: ContactFormData) => {
        if (data.honeypot) return

        setIsSubmitting(true)

        try {
            const response = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...data,
                    source: "contact-page",
                    zipCode: "00000", // Placeholder for contact form
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
        <>
            {/* Hero */}
            <section className="hero-gradient py-16 md:py-20">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <h1 className="text-lewis-ink mb-4">Contact Us</h1>
                        <p className="text-xl text-lewis-body">
                            We'd love to hear from you. Get in touch for a free quote, questions about your policy,
                            or anything else we can help with.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Grid */}
            <section className="section-wrapper">
                <div className="container-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Info */}
                        <div className="space-y-6">
                            {/* Canopy Connect Card */}
                            <CanopyConnectSection variant="card" />

                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                            <Phone className="h-5 w-5 text-lewis-blue" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lewis-ink mb-1">Phone</h3>
                                            <a
                                                href={`tel:${siteConfig.contact.phone.main.replace(/[^0-9]/g, "")}`}
                                                className="text-lewis-blue hover:underline"
                                            >
                                                {siteConfig.contact.phone.main}
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                            <Mail className="h-5 w-5 text-lewis-blue" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lewis-ink mb-1">Email</h3>
                                            <a
                                                href={`mailto:${siteConfig.contact.email.info}`}
                                                className="text-lewis-blue hover:underline"
                                            >
                                                {siteConfig.contact.email.info}
                                            </a>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                            <Clock className="h-5 w-5 text-lewis-blue" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lewis-ink mb-1">Office Hours</h3>
                                            <p className="text-sm text-lewis-body">
                                                Monday - Friday: {siteConfig.hours.weekdays}
                                            </p>
                                            <p className="text-sm text-lewis-body">
                                                Saturday: {siteConfig.hours.saturday}
                                            </p>
                                            <p className="text-sm text-lewis-body">
                                                Sunday: {siteConfig.hours.sunday}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card>
                                <CardContent className="p-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="h-5 w-5 text-lewis-blue" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lewis-ink mb-1">Service Area</h3>
                                            <p className="text-sm text-lewis-body">
                                                Serving {siteConfig.serviceAreas.slice(0, 4).join(", ")} and all of Florida
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <Card>
                                <CardContent className="p-6 md:p-8">
                                    <h2 className="text-2xl font-bold text-lewis-ink mb-6">
                                        Send Us a Message
                                    </h2>

                                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                                        {/* Honeypot */}
                                        <div className="absolute -left-[9999px]" aria-hidden="true">
                                            <input type="text" {...register("honeypot")} tabIndex={-1} autoComplete="off" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Name */}
                                            <div className="space-y-1.5">
                                                <Label htmlFor="contact-name">
                                                    Name <span className="text-red-500">*</span>
                                                </Label>
                                                <Input
                                                    id="contact-name"
                                                    {...register("name")}
                                                    aria-describedby={errors.name ? "contact-name-error" : undefined}
                                                    className={cn("h-12", errors.name && "border-red-500")}
                                                />
                                                {errors.name && (
                                                    <p id="contact-name-error" className="text-sm text-red-500">
                                                        {errors.name.message}
                                                    </p>
                                                )}
                                            </div>

                                            {/* Email */}
                                            <div className="space-y-1.5">
                                                <Label htmlFor="contact-email">
                                                    Email <span className="text-red-500">*</span>
                                                </Label>
                                                <Input
                                                    id="contact-email"
                                                    type="email"
                                                    {...register("email")}
                                                    aria-describedby={errors.email ? "contact-email-error" : undefined}
                                                    className={cn("h-12", errors.email && "border-red-500")}
                                                />
                                                {errors.email && (
                                                    <p id="contact-email-error" className="text-sm text-red-500">
                                                        {errors.email.message}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Phone */}
                                            <div className="space-y-1.5">
                                                <Label htmlFor="contact-phone">Phone (optional)</Label>
                                                <Input
                                                    id="contact-phone"
                                                    type="tel"
                                                    {...register("phone")}
                                                    className="h-12"
                                                />
                                            </div>

                                            {/* Insurance Type */}
                                            <div className="space-y-1.5">
                                                <Label htmlFor="contact-insuranceType">I need help with...</Label>
                                                <select
                                                    id="contact-insuranceType"
                                                    {...register("insuranceType")}
                                                    className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                                >
                                                    <option value="">Select an option...</option>
                                                    {insuranceTypes.map((type) => (
                                                        <option key={type.value} value={type.value}>
                                                            {type.label}
                                                        </option>
                                                    ))}
                                                    <option value="claim">Filing a Claim</option>
                                                    <option value="billing">Billing Question</option>
                                                    <option value="other">Other</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div className="space-y-1.5">
                                            <Label htmlFor="contact-message">
                                                Message <span className="text-red-500">*</span>
                                            </Label>
                                            <Textarea
                                                id="contact-message"
                                                rows={5}
                                                {...register("message")}
                                                aria-describedby={errors.message ? "contact-message-error" : undefined}
                                                className={cn(errors.message && "border-red-500")}
                                            />
                                            {errors.message && (
                                                <p id="contact-message-error" className="text-sm text-red-500">
                                                    {errors.message.message}
                                                </p>
                                            )}
                                        </div>

                                        {/* Privacy Consent */}
                                        <div className="space-y-1.5">
                                            <label className="flex items-start gap-3">
                                                <input
                                                    type="checkbox"
                                                    {...register("privacyConsent")}
                                                    className="mt-1 h-4 w-4 rounded border-gray-300"
                                                />
                                                <span className="text-sm text-lewis-body">
                                                    I agree to the{" "}
                                                    <a href="/privacy-policy" className="text-lewis-blue hover:underline">
                                                        Privacy Policy
                                                    </a>{" "}
                                                    <span className="text-red-500">*</span>
                                                </span>
                                            </label>
                                            {errors.privacyConsent && (
                                                <p className="text-sm text-red-500">
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
                                                "Send Message"
                                            )}
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
