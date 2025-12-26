"use client"

import { Shield, Lock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { CanopyConnectButton } from "./CanopyConnectButton"
import { cn } from "@/lib/utils"

interface CanopyConnectSectionProps {
    variant?: "default" | "compact" | "card"
    title?: string
    description?: string
    className?: string
    insuranceType?: string
}

export function CanopyConnectSection({
    variant = "default",
    title = "Already Have Insurance Coverage?",
    description = "Connect your existing policy for instant verification. We'll import your coverage details to provide a more accurate comparison.",
    className,
    insuranceType,
}: CanopyConnectSectionProps) {
    const dynamicTitle = insuranceType
        ? `Already Have ${insuranceType}?`
        : title

    if (variant === "compact") {
        return (
            <div className={cn("flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-lewis-gradient-start rounded-xl border border-lewis-border", className)}>
                <div className="text-center sm:text-left">
                    <p className="font-medium text-lewis-ink">{dynamicTitle}</p>
                    <p className="text-sm text-lewis-body">Import your policy for faster quotes</p>
                </div>
                <CanopyConnectButton variant="outline" size="sm" />
            </div>
        )
    }

    if (variant === "card") {
        return (
            <Card className={cn("card-hover-scale", className)}>
                <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-lewis-blue/10 flex items-center justify-center flex-shrink-0">
                            <Shield className="h-6 w-6 text-lewis-blue" />
                        </div>
                        <div className="space-y-3 flex-1">
                            <div>
                                <h3 className="font-semibold text-lewis-ink">{dynamicTitle}</h3>
                                <p className="text-sm text-lewis-body mt-1">
                                    Connect your existing policy for instant verification.
                                </p>
                            </div>
                            <CanopyConnectButton variant="outline" size="sm" />
                        </div>
                    </div>
                </CardContent>
            </Card>
        )
    }

    // Default variant - full section
    return (
        <section className={cn("py-12 bg-lewis-gradient-start", className)}>
            <div className="container-lg">
                <div className="max-w-2xl mx-auto text-center space-y-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-lewis-blue/10 mx-auto">
                        <Shield className="h-8 w-8 text-lewis-blue" />
                    </div>

                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-lewis-ink">{dynamicTitle}</h2>
                        <p className="text-lewis-body">{description}</p>
                    </div>

                    <CanopyConnectButton size="lg" className="rounded-full" />

                    <div className="flex items-center justify-center gap-2 text-xs text-lewis-body">
                        <Lock className="h-3 w-3" />
                        <span>Secure & encrypted. Your data is never shared without permission.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
