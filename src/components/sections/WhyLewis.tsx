import {
    ShieldCheck,
    Users,
    MapPin,
    Handshake,
    Clock,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const benefits = [
    {
        title: "Independent Agent Advantage",
        description:
            "We shop multiple carriers to find you the best coverage at competitive rates. Unlike captive agents, we're not tied to one company.",
        icon: ShieldCheck,
    },
    {
        title: "Florida Expertise",
        description:
            "We understand Florida's unique risks—hurricanes, flooding, and windstorm coverage. We know exactly what you need.",
        icon: MapPin,
    },
    {
        title: "Claims Advocacy",
        description:
            "When you need to file a claim, we're on your side. We help navigate the process and advocate for you with the carrier.",
        icon: Handshake,
    },
    {
        title: "Local Service",
        description:
            "We're not a national call center. You'll work with real people who know your community and are here when you need us.",
        icon: Users,
    },
    {
        title: "Fast Response",
        description:
            "Get quotes quickly and answers when you need them. We respond to inquiries within hours, not days.",
        icon: Clock,
    },
]

export function WhyLewis() {
    return (
        <section className="section-wrapper bg-lewis-page">
            <div className="container-lg">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <h2 className="text-lewis-ink mb-4">Why Lewis Insurance?</h2>
                    <p className="text-lg text-lewis-body">
                        We're not just selling insurance—we're building long-term relationships with Florida families and businesses.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon
                        return (
                            <Card
                                key={index}
                                className={`h-full ${index === 4 ? "md:col-span-2 lg:col-span-1" : ""}`}
                            >
                                <CardContent className="p-6">
                                    <div className="w-12 h-12 rounded-xl bg-lewis-orange/10 flex items-center justify-center mb-4">
                                        <Icon className="h-6 w-6 text-lewis-orange" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-lewis-ink mb-2">
                                        {benefit.title}
                                    </h3>
                                    <p className="text-sm text-lewis-body">{benefit.description}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
