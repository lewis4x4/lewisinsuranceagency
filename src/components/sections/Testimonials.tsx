import { Quote, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { homeGoogleReviews } from "@/data/googleReviews"

export function Testimonials() {
    return (
        <section className="section-wrapper">
            <div className="container-lg">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-lewis-ink mb-4">What Our Clients Say</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {homeGoogleReviews.map((review) => (
                        <Card key={review.name} className="h-full card-hover-scale">
                            <CardContent className="p-6 flex flex-col h-full">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-sm font-medium text-lewis-blue">Google review</span>
                                    <Quote className="h-5 w-5 text-lewis-blue" aria-hidden="true" />
                                </div>
                                <div className="flex items-center gap-0.5 mb-4" aria-label="5 out of 5 stars">
                                    {[...Array(5)].map((_, index) => (
                                        <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
                                    ))}
                                </div>
                                <blockquote className="text-lewis-body flex-1 mb-4 text-sm leading-relaxed whitespace-pre-line">
                                    {review.text}
                                </blockquote>
                                <div className="border-t border-lewis-border pt-4">
                                    <p className="font-medium text-lewis-ink">{review.name}</p>
                                    <p className="text-sm text-lewis-body">{review.when}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
