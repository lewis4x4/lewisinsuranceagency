"use client"

import Link from "next/link"
import { Facebook, Linkedin, MapPin, Clock, Phone, Mail } from "lucide-react"
import { siteConfig, navigation } from "@/config/site"
import { Separator } from "@/components/ui/separator"

export function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-lewis-ink text-white" role="contentinfo">
            <div className="container-lg section-wrapper">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-12">
                    {/* Company Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                                <span className="text-lewis-blue font-bold text-lg">L</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="font-heading font-bold text-white text-lg leading-tight">Lewis Insurance</span>
                                <span className="text-xs text-gray-400">Your Florida Experts</span>
                            </div>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed max-w-md">
                            Lewis Insurance is an independent Florida insurance agency. We compare quotes from multiple carriers to find you the right coverage at a competitive price. Local expertise, personalized service.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm">
                            <a
                                href={`tel:${siteConfig.contact.phone.main.replace(/[^0-9]/g, "")}`}
                                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                            >
                                <Phone className="h-4 w-4 text-lewis-orange" />
                                {siteConfig.contact.phone.main}
                            </a>
                            <a
                                href={`mailto:${siteConfig.contact.email.info}`}
                                className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
                            >
                                <Mail className="h-4 w-4 text-lewis-orange" />
                                {siteConfig.contact.email.info}
                            </a>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Clock className="h-4 w-4 text-lewis-orange" />
                                <span>Mon-Fri: {siteConfig.hours.weekdays}</span>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-4 pt-2">
                            <a
                                href={siteConfig.social.facebook}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-lewis-blue transition-colors"
                                aria-label="Facebook"
                            >
                                <Facebook className="h-5 w-5" />
                            </a>
                            <a
                                href={siteConfig.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-lewis-blue transition-colors"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Personal Insurance */}
                    <div className="space-y-4">
                        <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">Personal Insurance</h3>
                        <ul className="space-y-2.5">
                            {navigation.footer.personal.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-300 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Business Insurance */}
                    <div className="space-y-4">
                        <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">Business Insurance</h3>
                        <ul className="space-y-2.5">
                            {navigation.footer.business.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-300 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="space-y-4">
                        <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">Company</h3>
                        <ul className="space-y-2.5">
                            {navigation.footer.company.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-300 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Client Portal CTA */}
                        <div className="pt-4">
                            <Link
                                href="/portal"
                                className="inline-flex items-center gap-2 px-4 py-2 bg-lewis-blue rounded-full text-sm font-medium hover:bg-lewis-blue-light transition-colors"
                            >
                                Client Portal
                            </Link>
                        </div>
                    </div>

                    {/* Locations */}
                    <div className="space-y-4">
                        <h3 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">Locations</h3>
                        <ul className="space-y-2.5">
                            {navigation.footer.locations.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-gray-300 hover:text-white transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Separator className="my-8 bg-white/10" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                    <p>© {currentYear} Lewis Insurance. All rights reserved.</p>

                    <div className="flex items-center gap-6">
                        {navigation.footer.legal.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="hover:text-white transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Service Areas */}
                <div className="mt-8 pt-8 border-t border-white/10">
                    <p className="text-xs text-gray-500 text-center">
                        Proudly serving {siteConfig.serviceAreas.join(", ")} and all of Florida
                    </p>
                </div>
            </div>
        </footer>
    )
}
