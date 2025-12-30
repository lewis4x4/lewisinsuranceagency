"use client"

import { Link2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Extend Window interface for TikTok pixel
declare global {
    interface Window {
        ttq?: {
            track: (event: string, params?: Record<string, unknown>) => void
            page: () => void
        }
    }
}

interface CanopyConnectButtonProps {
    variant?: "default" | "secondary" | "outline" | "ghost" | "green"
    size?: "default" | "sm" | "lg"
    className?: string
    children?: React.ReactNode
}

const CANOPY_URL = "https://app.usecanopy.com/c/lewis-insurance"

export function CanopyConnectButton({
    variant = "default",
    size = "default",
    className,
    children,
}: CanopyConnectButtonProps) {
    const isGreen = variant === "green"
    const buttonVariant = isGreen ? "default" : variant

    const handleClick = () => {
        // Fire TikTok event when user clicks to import policy
        if (typeof window !== "undefined" && window.ttq) {
            window.ttq.track("ClickButton", {
                contents: [
                    {
                        content_id: "import-policy",
                        content_type: "product",
                        content_name: "Import Insurance Policy",
                    },
                ],
                value: 0,
                currency: "USD",
            })
        }
    }

    return (
        <Button
            asChild
            variant={buttonVariant}
            size={size}
            className={cn(
                "gap-2",
                variant === "default" && "bg-lewis-blue hover:bg-lewis-blue-dark",
                isGreen && "bg-green-600 hover:bg-green-700 text-white",
                className
            )}
        >
            <a
                href={CANOPY_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClick}
            >
                <Link2 className="h-4 w-4" />
                {children || "Import Your Policy"}
            </a>
        </Button>
    )
}
