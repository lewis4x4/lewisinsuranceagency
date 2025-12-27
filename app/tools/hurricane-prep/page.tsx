"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { CloudRain, CheckCircle2, Circle, AlertTriangle, Phone, ArrowRight, Printer } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface ChecklistItem {
    id: string
    text: string
    priority: "critical" | "important" | "recommended"
    checked: boolean
}

interface Category {
    id: string
    name: string
    icon: string
    items: ChecklistItem[]
}

const initialCategories: Category[] = [
    {
        id: "insurance",
        name: "Insurance & Documents",
        icon: "📋",
        items: [
            { id: "ins-1", text: "Review homeowners policy - understand your coverage limits", priority: "critical", checked: false },
            { id: "ins-2", text: "Know your hurricane deductible amount", priority: "critical", checked: false },
            { id: "ins-3", text: "Verify flood insurance is in place (separate from homeowners)", priority: "critical", checked: false },
            { id: "ins-4", text: "Save insurance company phone numbers and policy numbers", priority: "critical", checked: false },
            { id: "ins-5", text: "Take photos/videos of all rooms and valuables for claims", priority: "important", checked: false },
            { id: "ins-6", text: "Update home inventory with recent purchases", priority: "important", checked: false },
            { id: "ins-7", text: "Store insurance documents in waterproof container or cloud", priority: "important", checked: false },
        ],
    },
    {
        id: "documents",
        name: "Important Documents",
        icon: "📄",
        items: [
            { id: "doc-1", text: "Gather birth certificates, passports, Social Security cards", priority: "critical", checked: false },
            { id: "doc-2", text: "Collect property deeds, car titles, insurance policies", priority: "critical", checked: false },
            { id: "doc-3", text: "Prepare medical records and prescription information", priority: "important", checked: false },
            { id: "doc-4", text: "Store documents in waterproof container or upload to cloud", priority: "important", checked: false },
            { id: "doc-5", text: "Make copies of important documents for go-bag", priority: "recommended", checked: false },
        ],
    },
    {
        id: "exterior",
        name: "Home Exterior",
        icon: "🏠",
        items: [
            { id: "ext-1", text: "Install hurricane shutters or plywood on windows", priority: "critical", checked: false },
            { id: "ext-2", text: "Secure or store patio furniture, planters, decorations", priority: "critical", checked: false },
            { id: "ext-3", text: "Trim trees and remove dead branches near house", priority: "important", checked: false },
            { id: "ext-4", text: "Clear gutters and drains of debris", priority: "important", checked: false },
            { id: "ext-5", text: "Secure garage door with bracing kit", priority: "important", checked: false },
            { id: "ext-6", text: "Turn off propane tanks", priority: "important", checked: false },
            { id: "ext-7", text: "Anchor or secure outdoor structures (sheds, playsets)", priority: "recommended", checked: false },
        ],
    },
    {
        id: "interior",
        name: "Home Interior",
        icon: "🪑",
        items: [
            { id: "int-1", text: "Move valuables away from windows and to higher floors", priority: "important", checked: false },
            { id: "int-2", text: "Unplug electronics and appliances", priority: "important", checked: false },
            { id: "int-3", text: "Turn refrigerator and freezer to coldest settings", priority: "important", checked: false },
            { id: "int-4", text: "Fill bathtubs with water for flushing toilets", priority: "recommended", checked: false },
            { id: "int-5", text: "Know how to turn off electricity, gas, and water", priority: "important", checked: false },
            { id: "int-6", text: "Close interior doors to reduce wind damage if breach occurs", priority: "recommended", checked: false },
        ],
    },
    {
        id: "vehicles",
        name: "Vehicles",
        icon: "🚗",
        items: [
            { id: "veh-1", text: "Fill gas tanks on all vehicles", priority: "critical", checked: false },
            { id: "veh-2", text: "Check spare tire, jack, and emergency kit", priority: "important", checked: false },
            { id: "veh-3", text: "Park in garage or away from trees and power lines", priority: "important", checked: false },
            { id: "veh-4", text: "Review auto insurance - verify comprehensive coverage", priority: "important", checked: false },
            { id: "veh-5", text: "Plan evacuation route and backup routes", priority: "critical", checked: false },
        ],
    },
    {
        id: "supplies",
        name: "Emergency Supplies",
        icon: "🎒",
        items: [
            { id: "sup-1", text: "Water: 1 gallon per person per day for 7 days", priority: "critical", checked: false },
            { id: "sup-2", text: "Non-perishable food for 7 days (canned goods, dry food)", priority: "critical", checked: false },
            { id: "sup-3", text: "Manual can opener", priority: "important", checked: false },
            { id: "sup-4", text: "Flashlights and extra batteries", priority: "critical", checked: false },
            { id: "sup-5", text: "Battery-powered or hand-crank radio", priority: "important", checked: false },
            { id: "sup-6", text: "First aid kit with medications (7-day supply)", priority: "critical", checked: false },
            { id: "sup-7", text: "Cash in small bills (ATMs may not work)", priority: "important", checked: false },
            { id: "sup-8", text: "Phone chargers, portable battery pack", priority: "important", checked: false },
            { id: "sup-9", text: "Sanitation supplies (toilet paper, garbage bags, hand sanitizer)", priority: "important", checked: false },
            { id: "sup-10", text: "Pet supplies (food, water, medications, carrier)", priority: "critical", checked: false },
        ],
    },
    {
        id: "family",
        name: "Family Plan",
        icon: "👨‍👩‍👧‍👦",
        items: [
            { id: "fam-1", text: "Establish meeting location if separated", priority: "critical", checked: false },
            { id: "fam-2", text: "Share emergency contact list with all family members", priority: "critical", checked: false },
            { id: "fam-3", text: "Identify out-of-state contact person", priority: "important", checked: false },
            { id: "fam-4", text: "Know evacuation zone (A, B, C, etc.)", priority: "critical", checked: false },
            { id: "fam-5", text: "Plan for special needs (elderly, disabled, infants)", priority: "critical", checked: false },
            { id: "fam-6", text: "Register with county special needs shelter if applicable", priority: "important", checked: false },
            { id: "fam-7", text: "Prepare go-bag for each family member", priority: "important", checked: false },
        ],
    },
    {
        id: "after",
        name: "After the Storm",
        icon: "🌤️",
        items: [
            { id: "aft-1", text: "Wait for official all-clear before returning home", priority: "critical", checked: false },
            { id: "aft-2", text: "Document all damage with photos before cleanup", priority: "critical", checked: false },
            { id: "aft-3", text: "Report damage to insurance company immediately", priority: "critical", checked: false },
            { id: "aft-4", text: "Don't throw away damaged items until adjuster sees them", priority: "important", checked: false },
            { id: "aft-5", text: "Be cautious of downed power lines and flooding", priority: "critical", checked: false },
            { id: "aft-6", text: "Keep receipts for all temporary repairs and expenses", priority: "important", checked: false },
            { id: "aft-7", text: "Be wary of contractor scams - get multiple estimates", priority: "important", checked: false },
        ],
    },
]

const emergencyContacts = [
    { name: "Emergency Services", number: "911" },
    { name: "FEMA", number: "1-800-621-3362" },
    { name: "FL Emergency Hotline", number: "1-800-342-3557" },
    { name: "Red Cross", number: "1-800-733-2767" },
]

function getInitialCategories(): Category[] {
    if (typeof window === 'undefined') return initialCategories
    const saved = localStorage.getItem('hurricanePrep')
    if (saved) {
        try {
            return JSON.parse(saved)
        } catch {
            return initialCategories
        }
    }
    return initialCategories
}

export default function HurricanePrepPage() {
    const [categories, setCategories] = useState<Category[]>(getInitialCategories)
    const [isLoaded] = useState(true)

    // Save to localStorage whenever categories change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('hurricanePrep', JSON.stringify(categories))
        }
    }, [categories, isLoaded])

    const toggleItem = (categoryId: string, itemId: string) => {
        setCategories(prev => prev.map(cat =>
            cat.id === categoryId
                ? {
                    ...cat,
                    items: cat.items.map(item =>
                        item.id === itemId ? { ...item, checked: !item.checked } : item
                    )
                }
                : cat
        ))
    }

    const getCategoryProgress = (category: Category) => {
        const checked = category.items.filter(item => item.checked).length
        return { checked, total: category.items.length, percent: Math.round((checked / category.items.length) * 100) }
    }

    const getOverallProgress = () => {
        const allItems = categories.flatMap(cat => cat.items)
        const checked = allItems.filter(item => item.checked).length
        return { checked, total: allItems.length, percent: Math.round((checked / allItems.length) * 100) }
    }

    const getCriticalRemaining = () => {
        const critical = categories.flatMap(cat => cat.items.filter(item => item.priority === "critical" && !item.checked))
        return critical.length
    }

    const handleReset = () => {
        if (confirm('Reset all checkboxes? This will clear your progress.')) {
            setCategories(initialCategories)
            localStorage.removeItem('hurricanePrep')
        }
    }

    const handlePrint = () => {
        window.print()
    }

    const getPriorityStyles = (priority: string) => {
        switch (priority) {
            case "critical":
                return "bg-red-50 border-red-200"
            case "important":
                return "bg-amber-50 border-amber-200"
            default:
                return "bg-blue-50 border-blue-200"
        }
    }

    const getPriorityBadge = (priority: string) => {
        switch (priority) {
            case "critical":
                return <span className="text-[10px] font-medium text-red-600 bg-red-100 px-1.5 py-0.5 rounded">CRITICAL</span>
            case "important":
                return <span className="text-[10px] font-medium text-amber-600 bg-amber-100 px-1.5 py-0.5 rounded">IMPORTANT</span>
            default:
                return null
        }
    }

    const overall = getOverallProgress()
    const criticalRemaining = getCriticalRemaining()

    if (!isLoaded) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-pulse text-lewis-body">Loading...</div>
            </div>
        )
    }

    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-12 md:py-16 print:hidden">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-16 h-16 rounded-2xl bg-lewis-blue/10 flex items-center justify-center mx-auto mb-6">
                            <CloudRain className="h-8 w-8 text-lewis-blue" />
                        </div>
                        <h1 className="text-lewis-ink mb-4">Hurricane Prep Checklist</h1>
                        <p className="text-lg text-lewis-body">
                            Be ready before the storm. This checklist covers insurance preparation, home protection,
                            supplies, and family planning. Your progress is saved automatically.
                        </p>
                    </div>
                </div>
            </section>

            {/* Progress Bar */}
            <section className="bg-white border-b border-lewis-border sticky top-0 z-10 print:hidden">
                <div className="container-lg py-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-6">
                            <div>
                                <span className="text-sm text-lewis-body">Overall Progress</span>
                                <div className="flex items-center gap-2">
                                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-lewis-blue transition-all duration-300"
                                            style={{ width: `${overall.percent}%` }}
                                        />
                                    </div>
                                    <span className="text-sm font-medium">{overall.percent}%</span>
                                </div>
                            </div>
                            {criticalRemaining > 0 && (
                                <div className="flex items-center gap-2 text-red-600">
                                    <AlertTriangle className="h-4 w-4" />
                                    <span className="text-sm font-medium">{criticalRemaining} critical items remaining</span>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" onClick={handlePrint}>
                                <Printer className="h-4 w-4 mr-1" />
                                Print
                            </Button>
                            <Button variant="outline" size="sm" onClick={handleReset} className="text-red-600 hover:text-red-700">
                                Reset
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Print Header */}
            <div className="hidden print:block p-8">
                <h1 className="text-2xl font-bold mb-2">Hurricane Preparedness Checklist</h1>
                <p className="text-sm text-gray-600">Progress: {overall.checked} of {overall.total} items complete</p>
            </div>

            {/* Emergency Contacts */}
            <section className="section-wrapper bg-red-50 print:bg-white">
                <div className="container-lg max-w-4xl">
                    <div className="flex items-center gap-2 mb-4">
                        <Phone className="h-5 w-5 text-red-600" />
                        <h2 className="text-lg font-semibold text-red-900">Emergency Contacts</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {emergencyContacts.map((contact) => (
                            <div key={contact.name} className="bg-white rounded-lg p-3 border border-red-100">
                                <p className="text-sm text-lewis-body">{contact.name}</p>
                                <a href={`tel:${contact.number}`} className="font-semibold text-red-600 hover:underline">
                                    {contact.number}
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Checklist */}
            <section className="section-wrapper">
                <div className="container-lg max-w-4xl">
                    <div className="space-y-6">
                        {categories.map((category) => {
                            const progress = getCategoryProgress(category)
                            return (
                                <Card key={category.id} className="print:break-inside-avoid">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <CardTitle className="flex items-center gap-2">
                                                <span className="text-xl">{category.icon}</span>
                                                {category.name}
                                            </CardTitle>
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm text-lewis-body">
                                                    {progress.checked}/{progress.total}
                                                </span>
                                                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden print:hidden">
                                                    <div
                                                        className="h-full bg-green-500 transition-all duration-300"
                                                        style={{ width: `${progress.percent}%` }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {category.items.map((item) => (
                                                <li
                                                    key={item.id}
                                                    className={`flex items-start gap-3 p-2 rounded-lg border cursor-pointer transition-colors ${getPriorityStyles(item.priority)} ${item.checked ? 'opacity-60' : ''}`}
                                                    onClick={() => toggleItem(category.id, item.id)}
                                                >
                                                    <span className="mt-0.5 print:hidden">
                                                        {item.checked
                                                            ? <CheckCircle2 className="h-5 w-5 text-green-600" />
                                                            : <Circle className="h-5 w-5 text-gray-400" />
                                                        }
                                                    </span>
                                                    <span className="hidden print:inline mr-2">
                                                        {item.checked ? "☑" : "☐"}
                                                    </span>
                                                    <span className={`flex-1 text-sm ${item.checked ? 'line-through text-gray-500' : 'text-lewis-ink'}`}>
                                                        {item.text}
                                                    </span>
                                                    {getPriorityBadge(item.priority)}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>

                    {/* Completion Message */}
                    {overall.percent === 100 && (
                        <Card className="mt-8 bg-green-50 border-green-200">
                            <CardContent className="py-6 text-center">
                                <CheckCircle2 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                                <h3 className="text-lg font-semibold text-green-900 mb-2">You&apos;re Prepared!</h3>
                                <p className="text-green-700">
                                    You&apos;ve completed all items on the checklist. Stay safe and monitor weather updates.
                                </p>
                            </CardContent>
                        </Card>
                    )}

                    {/* CTA */}
                    <div className="mt-8 text-center print:hidden">
                        <p className="text-lewis-body mb-4">
                            Have questions about your hurricane coverage or need to review your policy?
                        </p>
                        <Button asChild className="btn-primary rounded-full">
                            <Link href="/contact">
                                Contact Us for a Free Policy Review
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
