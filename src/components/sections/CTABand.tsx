import { CTAForm } from "@/components/forms"

export function CTABand() {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-r from-lewis-blue to-lewis-blue-dark">
            <div className="container-lg">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <h2 className="text-white mb-4">Ready to compare your coverage options?</h2>
                    <p className="text-lg text-white">
                        Get a free quote in minutes. We'll compare options from 20+ carriers to find coverage that fits your needs.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <CTAForm source="homepage-cta" variant="horizontal" />
                </div>

                <p className="text-center text-sm text-white mt-6">
                    No obligation. Your information is secure and private.
                </p>
            </div>
        </section>
    )
}
