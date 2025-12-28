import { siteConfig } from "@/config/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "Lewis Insurance terms of service. Review the terms and conditions for using our website and services.",

    alternates: {
        canonical: `https://lewisinsurance.com/terms`,
    },
}

export default function TermsPage() {
    const lastUpdated = "December 2024"

    return (
        <section className="section-wrapper">
            <div className="container-lg">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-lewis-ink mb-4">Terms of Service</h1>
                    <p className="text-lewis-body mb-8">Last updated: {lastUpdated}</p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="text-lewis-ink">Agreement to Terms</h2>
                            <p className="text-lewis-body">
                                By accessing and using the Lewis Insurance website ({siteConfig.domain}), you
                                agree to be bound by these Terms of Service. If you do not agree to these terms,
                                please do not use our website or services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">Services Description</h2>
                            <p className="text-lewis-body">
                                Lewis Insurance is a licensed independent insurance agency operating in Florida.
                                We provide insurance quoting, placement, and advisory services. Our website provides
                                information about insurance products and allows you to request quotes and contact
                                our team.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">No Insurance Contract</h2>
                            <p className="text-lewis-body">
                                Information provided on this website is for general informational purposes only
                                and does not constitute an insurance contract, binder, or guarantee of coverage.
                                Quotes provided are estimates only and are subject to verification, underwriting,
                                and carrier approval. Coverage is not bound until you receive written confirmation
                                from the insurance carrier.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">Accuracy of Information</h2>
                            <p className="text-lewis-body">
                                You agree to provide accurate, current, and complete information when requesting
                                quotes or using our services. Inaccurate information may result in incorrect quotes,
                                coverage issues, or policy cancellation. You are responsible for reviewing your
                                policy documents and notifying us of any errors.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">Intellectual Property</h2>
                            <p className="text-lewis-body">
                                All content on this website, including text, graphics, logos, and images, is the
                                property of Lewis Insurance or our licensors and is protected by copyright and
                                trademark laws. You may not reproduce, distribute, or use our content without
                                written permission.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">Links to Third-Party Websites</h2>
                            <p className="text-lewis-body">
                                Our website may contain links to third-party websites, including insurance carrier
                                portals and payment processors. We are not responsible for the content, privacy
                                practices, or accuracy of information on third-party websites.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">Limitation of Liability</h2>
                            <p className="text-lewis-body">
                                To the maximum extent permitted by law, Lewis Insurance shall not be liable for
                                any indirect, incidental, special, consequential, or punitive damages arising from
                                your use of our website or services. Our liability shall be limited to the amount
                                of fees paid to us for services directly related to any claim.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">Disclaimer of Warranties</h2>
                            <p className="text-lewis-body">
                                Our website and services are provided "as is" without warranties of any kind,
                                either express or implied. We do not warrant that our website will be uninterrupted,
                                error-free, or free of viruses or other harmful components.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">Indemnification</h2>
                            <p className="text-lewis-body">
                                You agree to indemnify and hold harmless Lewis Insurance, its officers, employees,
                                and agents from any claims, damages, or expenses arising from your use of our
                                website, violation of these terms, or infringement of any third-party rights.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">Governing Law</h2>
                            <p className="text-lewis-body">
                                These Terms of Service shall be governed by and construed in accordance with the
                                laws of the State of Florida, without regard to conflict of law principles. Any
                                disputes shall be resolved in the state or federal courts located in Florida.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">Changes to Terms</h2>
                            <p className="text-lewis-body">
                                We reserve the right to modify these Terms of Service at any time. Changes will
                                be effective upon posting to this website. Your continued use of our website
                                constitutes acceptance of any changes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">Contact Information</h2>
                            <p className="text-lewis-body">
                                If you have questions about these Terms of Service, please contact us:
                            </p>
                            <div className="mt-4 p-4 bg-lewis-page rounded-lg">
                                <p className="text-lewis-body">
                                    <strong>{siteConfig.name}</strong><br />
                                    Email: {siteConfig.contact.email.info}<br />
                                    Phone: {siteConfig.contact.phone.main}
                                </p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    )
}
