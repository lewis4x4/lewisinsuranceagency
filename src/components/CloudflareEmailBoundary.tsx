export function CloudflareEmailBoundary({ enabled }: { enabled: boolean }) {
    return (
        <span
            aria-hidden="true"
            dangerouslySetInnerHTML={{
                __html: enabled ? "<!--email_off-->" : "<!--email_on-->",
            }}
        />
    )
}
