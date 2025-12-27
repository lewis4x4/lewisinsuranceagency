"use client"

import { useState } from "react"
import { MessageCircle, X, Phone, Send, Link2 } from "lucide-react"
import { siteConfig } from "@/config/site"

export function LiveChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [showTooltip, setShowTooltip] = useState(true)

    // Hide tooltip after 5 seconds
    useState(() => {
        const timer = setTimeout(() => setShowTooltip(false), 5000)
        return () => clearTimeout(timer)
    })

    return (
        <>
            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 w-80 bg-white rounded-2xl shadow-2xl border border-lewis-border z-50 overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-300">
                    {/* Header */}
                    <div className="bg-lewis-blue text-white p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="font-semibold">Chat with Lewis Insurance</h3>
                                <p className="text-sm text-blue-100">We typically reply in minutes</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                                aria-label="Close chat"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 space-y-4">
                        {/* Welcome Message */}
                        <div className="bg-gray-100 rounded-lg p-3">
                            <p className="text-sm text-lewis-body">
                                👋 Hi there! Need help with your insurance? We're here to answer any questions.
                            </p>
                        </div>

                        {/* Quick Actions */}
                        <div className="space-y-2">
                            <p className="text-xs font-medium text-lewis-ink uppercase tracking-wide">Quick Actions</p>

                            <a
                                href={`tel:${siteConfig.contact.phone.main.replace(/[^0-9]/g, '')}`}
                                className="flex items-center gap-3 p-3 rounded-lg border border-lewis-border hover:border-lewis-blue hover:bg-lewis-blue/5 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-full bg-lewis-blue/10 flex items-center justify-center group-hover:bg-lewis-blue/20 transition-colors">
                                    <Phone className="h-5 w-5 text-lewis-blue" />
                                </div>
                                <div>
                                    <p className="font-medium text-lewis-ink text-sm">Call Us Now</p>
                                    <p className="text-xs text-lewis-body">{siteConfig.contact.phone.main}</p>
                                </div>
                            </a>

                            <a
                                href="/contact"
                                className="flex items-center gap-3 p-3 rounded-lg border border-lewis-border hover:border-lewis-blue hover:bg-lewis-blue/5 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-full bg-lewis-orange/10 flex items-center justify-center group-hover:bg-lewis-orange/20 transition-colors">
                                    <Send className="h-5 w-5 text-lewis-orange" />
                                </div>
                                <div>
                                    <p className="font-medium text-lewis-ink text-sm">Send a Message</p>
                                    <p className="text-xs text-lewis-body">Get a quote or ask a question</p>
                                </div>
                            </a>

                            <a
                                href="/contact?import=policy"
                                className="flex items-center gap-3 p-3 rounded-lg border border-lewis-border hover:border-green-500 hover:bg-green-50 transition-all group"
                            >
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                                    <Link2 className="h-5 w-5 text-green-600" />
                                </div>
                                <div>
                                    <p className="font-medium text-lewis-ink text-sm">Import Your Policy</p>
                                    <p className="text-xs text-lewis-body">Connect existing coverage</p>
                                </div>
                            </a>
                        </div>

                        {/* Hours */}
                        <div className="text-center pt-2 border-t border-lewis-border">
                            <p className="text-xs text-lewis-body">
                                Office Hours: Mon-Fri 8:30 AM - 5:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Tooltip */}
            {!isOpen && showTooltip && (
                <div className="fixed bottom-20 right-6 bg-lewis-ink text-white text-sm px-4 py-2 rounded-lg shadow-lg z-50 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    Need help? Chat with us!
                    <div className="absolute -bottom-2 right-6 w-4 h-4 bg-lewis-ink rotate-45"></div>
                </div>
            )}

            {/* Floating Button */}
            <button
                onClick={() => {
                    setIsOpen(!isOpen)
                    setShowTooltip(false)
                }}
                className="fixed bottom-6 right-6 w-14 h-14 bg-lewis-blue text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 z-50 flex items-center justify-center group"
                aria-label={isOpen ? "Close chat" : "Open chat"}
            >
                {/* Pulse ring animation */}
                {!isOpen && (
                    <span className="pulse-ring" aria-hidden="true"></span>
                )}

                {isOpen ? (
                    <X className="h-6 w-6" />
                ) : (
                    <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
                )}
            </button>
        </>
    )
}
