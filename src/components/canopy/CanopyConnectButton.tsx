"use client"

import { useEffect, useCallback } from "react"
import { Link2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

declare global {
    interface Window {
        CanopyConnect?: {
            init: (config: { publicAlias: string; successUrl?: string }) => void
            open: () => void
        }
    }
}

interface CanopyConnectButtonProps {
    variant?: "default" | "secondary" | "outline" | "ghost"
    size?: "default" | "sm" | "lg"
    className?: string
    children?: React.ReactNode
}

export function CanopyConnectButton({
    variant = "default",
    size = "default",
    className,
    children,
}: CanopyConnectButtonProps) {
    // Initialize Canopy Connect on mount
    useEffect(() => {
        // Load script if not already present
        if (!document.querySelector('script[src*="usecanopy"]')) {
            const script = document.createElement("script")
            script.src = siteConfig.canopy.scriptUrl
            script.async = true
            script.onload = () => {
                if (window.CanopyConnect) {
                    window.CanopyConnect.init({
                        publicAlias: siteConfig.canopy.publicAlias,
                        successUrl: siteConfig.canopy.successUrl,
                    })
                }
            }
            document.head.appendChild(script)
        } else if (window.CanopyConnect) {
            window.CanopyConnect.init({
                publicAlias: siteConfig.canopy.publicAlias,
                successUrl: siteConfig.canopy.successUrl,
            })
        }
    }, [])

    const handleClick = useCallback(() => {
        if (window.CanopyConnect) {
            window.CanopyConnect.open()
        } else {
            // Fallback: open contact page
            window.location.href = "/contact"
        }
    }, [])

    return (
        <Button
            type="button"
            variant={variant}
            size={size}
            onClick={handleClick}
            className={cn(
                "gap-2",
                variant === "default" && "bg-lewis-blue hover:bg-lewis-blue-dark",
                className
            )}
        >
            <Link2 className="h-4 w-4" />
            {children || "Import Your Policy"}
        </Button>
    )
}
