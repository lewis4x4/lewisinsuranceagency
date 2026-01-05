import { siteConfig } from "@/config/site"
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Privacy Policy | Lewis Insurance Agency",
    description: "Lewis Insurance privacy policy. How we collect, use, and protect your personal information. Florida insurance agency.",

    alternates: {
        canonical: `https://lewisinsurance.com/privacy-policy`,
    },
}

export default function PrivacyPolicyPage() {
    const lastUpdated = "December 2024"

    return (
        <section className="section-wrapper">
            <div className="container-lg">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-lewis-ink mb-4">Privacy Policy</h1>
                    <p className="text-lewis-body mb-8">Last updated: {lastUpdated}</p>

                    <div className="prose prose-lg max-w-none space-y-8">
                        <section>
                            <h2 className="text-lewis-ink">Introduction</h2>
                            <p className="text-lewis-body">
                                Lewis Insurance ("we," "our," or "us") respects your privacy and is committed to
                                protecting the personal information you share with us. This Privacy Policy explains
                                how we collect, use, disclose, and safeguard your information when you visit our
                                website {siteConfig.domain} or use our services.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">Information We Collect</h2>
                            <h3 className="text-lewis-ink text-lg">Personal Information</h3>
                            <p className="text-lewis-body">
                                When you request a quote, contact us, or use our services, we may collect:
                            </p>
                            <ul className="list-disc pl-6 text-lewis-body">
                                <li>Name, email address, phone number</li>
                                <li>Mailing address and ZIP code</li>
                                <li>Insurance policy information</li>
                                <li>Information needed to provide quotes (property details, vehicle information, etc.)</li>
                                <li>Payment information (processed securely by third-party processors)</li>
                            </ul>

                            <h3 className="text-lewis-ink text-lg mt-6">Automatically Collected Information</h3>
                            <p className="text-lewis-body">
                                When you visit our website, we may automatically collect:
                            </p>
                            <ul className="list-disc pl-6 text-lewis-body">
                                <li>IP address (hashed for privacy)</li>
                                <li>Browser type and version</li>
                                <li>Pages visited and time spent</li>
                                <li>Referring website</li>
                                <li>Device information</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">How We Use Your Information</h2>
                            <p className="text-lewis-body">We use collected information to:</p>
                            <ul className="list-disc pl-6 text-lewis-body">
                                <li>Provide insurance quotes and services</li>
                                <li>Communicate with you about your policies and inquiries</li>
                                <li>Process transactions and payments</li>
                                <li>Send service-related communications</li>
                                <li>Improve our website and services</li>
                                <li>Comply with legal and regulatory requirements</li>
                                <li>Prevent fraud and protect our business</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">How We Share Your Information</h2>
                            <p className="text-lewis-body">
                                We may share your information with:
                            </p>
                            <ul className="list-disc pl-6 text-lewis-body">
                                <li>
                                    <strong>Insurance Carriers:</strong> To obtain quotes and bind coverage on your behalf
                                </li>
                                <li>
                                    <strong>Service Providers:</strong> Third parties that help us operate our business
                                    (payment processing, email services, website hosting)
                                </li>
                                <li>
                                    <strong>Legal Requirements:</strong> When required by law, subpoena, or legal process
                                </li>
                                <li>
                                    <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                                </li>
                            </ul>
                            <p className="text-lewis-body mt-4">
                                We do not sell your personal information to third parties for marketing purposes.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">Cookies and Tracking Technologies</h2>
                            <p className="text-lewis-body">
                                Our website uses cookies and similar technologies to improve your experience,
                                analyze website traffic, and understand how you interact with our site. You can
                                control cookies through your browser settings, though some features may not function
                                properly without them.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">Data Security</h2>
                            <p className="text-lewis-body">
                                We implement appropriate technical and organizational measures to protect your
                                personal information against unauthorized access, alteration, disclosure, or
                                destruction. However, no method of transmission over the Internet or electronic
                                storage is 100% secure.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">Your Rights</h2>
                            <p className="text-lewis-body">Depending on your location, you may have the right to:</p>
                            <ul className="list-disc pl-6 text-lewis-body">
                                <li>Access the personal information we hold about you</li>
                                <li>Request correction of inaccurate information</li>
                                <li>Request deletion of your information (subject to legal requirements)</li>
                                <li>Opt out of marketing communications</li>
                                <li>Object to certain processing of your information</li>
                            </ul>
                            <p className="text-lewis-body mt-4">
                                To exercise these rights, please contact us using the information below.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">Data Retention</h2>
                            <p className="text-lewis-body">
                                We retain your personal information for as long as necessary to provide our services,
                                comply with legal obligations, resolve disputes, and enforce our agreements. Insurance
                                records may be retained as required by state and federal regulations.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">Children's Privacy</h2>
                            <p className="text-lewis-body">
                                Our services are not directed to children under 13. We do not knowingly collect
                                personal information from children under 13. If you believe we have collected
                                information from a child, please contact us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">Changes to This Policy</h2>
                            <p className="text-lewis-body">
                                We may update this Privacy Policy from time to time. The updated version will be
                                indicated by the "Last updated" date at the top of this page. We encourage you to
                                review this policy periodically.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-lewis-ink">Contact Us</h2>
                            <p className="text-lewis-body">
                                If you have questions about this Privacy Policy or our privacy practices, please contact us:
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
