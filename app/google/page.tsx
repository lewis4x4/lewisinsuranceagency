import { redirect } from "next/navigation"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Get Your Insurance Quote | Lewis Insurance",
    description: "Get a free Florida insurance quote from Lewis Insurance. Compare rates from 30+ carriers for auto, home, flood, and business insurance.",
    robots: { index: false, follow: false },
}

export default function GoogleRedirect() {
    redirect("https://app.usecanopy.com/c/lewis-insurance-google")
}
