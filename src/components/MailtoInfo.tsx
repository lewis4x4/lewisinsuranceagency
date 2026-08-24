export function MailtoInfo({
    className,
    label = "info@lewisinsurance.com",
}: {
    className?: string
    label?: string
}) {
    const href = "mailto:info@lewisinsurance.com"
    const cls = className ? ` class="${className.replace(/"/g, "&quot;")}"` : ""
    return (
        <span
            dangerouslySetInnerHTML={{
                __html: `<!--email_off--><a href="${href}"${cls}>${label}</a><!--email_on-->`,
            }}
        />
    )
}
