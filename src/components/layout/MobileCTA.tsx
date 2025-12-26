"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function MobileCTA() {
    return (
        <div className="sticky-mobile-cta">
            <Button asChild className="w-full btn-accent rounded-full touch-target text-base font-semibold">
                <Link href="/contact">Get Your Free Quote</Link>
            </Button>
        </div>
    )
}
