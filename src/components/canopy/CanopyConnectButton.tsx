"use client"

import { Link2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

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
            <a href={CANOPY_URL} target="_blank" rel="noopener noreferrer">
                <Link2 className="h-4 w-4" />
                {children || "Import Your Policy"}
            </a>
        </Button>
    )
}
