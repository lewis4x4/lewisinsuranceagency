import { redirect } from "next/navigation"
import { siteConfig } from "@/config/site"

export default function PortalPage() {
    redirect(siteConfig.portal.login)
}
