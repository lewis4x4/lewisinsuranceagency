// GTM dataLayer helpers. Never pass PII (names, emails, phone values, addresses, notes).

type DataLayerEvent =
    | {
          event: "quote_request"
          form_id: "hero" | "home_cta" | "contact" | "product_sidebar"
          insurance_type: string
          page_path: string
          has_phone: boolean
      }
    | {
          event: "phone_click"
          tel_number: string
          page_path: string
          link_location: "header" | "footer" | "body" | "sticky"
      }
    | {
          event: "coi_request"
          page_path: string
          policy_type: string
      }

declare global {
    interface Window {
        dataLayer?: Record<string, unknown>[]
    }
}

export function pushDataLayer(payload: DataLayerEvent) {
    if (typeof window === "undefined") return
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push(payload)
}
