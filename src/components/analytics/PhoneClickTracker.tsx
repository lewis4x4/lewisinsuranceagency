"use client"

import { useEffect } from "react"
import { pushDataLayer } from "@/lib/analytics"

// Delegated listener so every tel: link fires phone_click without per-link wiring.
export function PhoneClickTracker() {
    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            const target = event.target
            if (!(target instanceof Element)) return

            const link = target.closest<HTMLAnchorElement>('a[href^="tel:"]')
            if (!link) return

            let linkLocation: "header" | "footer" | "body" | "sticky" = "body"
            if (link.closest(".sticky-mobile-cta")) linkLocation = "sticky"
            else if (link.closest("header")) linkLocation = "header"
            else if (link.closest("footer")) linkLocation = "footer"

            pushDataLayer({
                event: "phone_click",
                tel_number: link.getAttribute("href")!.replace(/[^0-9]/g, ""),
                page_path: window.location.pathname,
                link_location: linkLocation,
            })
        }

        document.addEventListener("click", handleClick)
        return () => document.removeEventListener("click", handleClick)
    }, [])

    return null
}
