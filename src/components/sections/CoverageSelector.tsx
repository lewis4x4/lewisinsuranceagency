"use client"

import { useState } from "react"
import Link from "next/link"
import { Home, Car, Droplets, Building2, Briefcase } from "lucide-react"
import { cn } from "@/lib/utils"

const coverageOptions = [
    { id: "home", label: "Home", icon: Home, href: "/personal/homeowners-insurance-florida" },
    { id: "auto", label: "Auto", icon: Car, href: "/personal/auto-insurance-florida" },
    { id: "flood", label: "Flood", icon: Droplets, href: "/personal/flood-insurance-florida" },
    { id: "condo", label: "Condo/Renters", icon: Building2, href: "/personal/condo-insurance-florida" },
    { id: "business", label: "Business", icon: Briefcase, href: "/business" },
]

interface CoverageSelectorProps {
    className?: string
    defaultSelected?: string
}

export function CoverageSelector({ className, defaultSelected = "home" }: CoverageSelectorProps) {
    const [selected, setSelected] = useState(defaultSelected)

    return (
        <nav
            className={cn("coverage-pill inline-flex flex-wrap justify-center", className)}
            aria-label="Coverage types"
        >
            {coverageOptions.map((option) => {
                const Icon = option.icon
                const isActive = selected === option.id

                return (
                    <Link
                        key={option.id}
                        href={option.href}
                        onClick={() => setSelected(option.id)}
                        className={cn(
                            "coverage-pill-item flex items-center gap-2 touch-target",
                            isActive ? "coverage-pill-item-active" : "coverage-pill-item-inactive"
                        )}
                        aria-current={isActive ? "page" : undefined}
                    >
                        <Icon className="h-4 w-4" />
                        <span className="hidden sm:inline">{option.label}</span>
                        <span className="sm:hidden">{option.label.split("/")[0]}</span>
                    </Link>
                )
            })}
        </nav>
    )
}
