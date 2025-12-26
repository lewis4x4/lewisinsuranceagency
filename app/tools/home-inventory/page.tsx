"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ClipboardList, Plus, Trash2, Download, Printer, ArrowRight, ChevronDown, ChevronRight } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface InventoryItem {
    id: string
    name: string
    quantity: number
    value: number
    purchaseDate: string
    serialNumber: string
}

interface Room {
    id: string
    name: string
    items: InventoryItem[]
    isExpanded: boolean
}

const defaultRooms: Room[] = [
    { id: "living-room", name: "Living Room", items: [], isExpanded: true },
    { id: "kitchen", name: "Kitchen", items: [], isExpanded: false },
    { id: "master-bedroom", name: "Master Bedroom", items: [], isExpanded: false },
    { id: "bedroom-2", name: "Bedroom 2", items: [], isExpanded: false },
    { id: "bedroom-3", name: "Bedroom 3", items: [], isExpanded: false },
    { id: "bathroom-master", name: "Master Bathroom", items: [], isExpanded: false },
    { id: "bathroom-2", name: "Bathroom 2", items: [], isExpanded: false },
    { id: "dining-room", name: "Dining Room", items: [], isExpanded: false },
    { id: "home-office", name: "Home Office", items: [], isExpanded: false },
    { id: "garage", name: "Garage", items: [], isExpanded: false },
    { id: "outdoor", name: "Outdoor/Patio", items: [], isExpanded: false },
    { id: "other", name: "Other", items: [], isExpanded: false },
]

const suggestedItems: Record<string, string[]> = {
    "living-room": ["Sofa", "TV", "Coffee Table", "Entertainment Center", "Recliner", "Lamps", "Area Rug", "Artwork"],
    "kitchen": ["Refrigerator", "Stove/Oven", "Microwave", "Dishwasher", "Small Appliances", "Cookware", "Dishes", "Silverware"],
    "master-bedroom": ["Bed Frame", "Mattress", "Dresser", "Nightstands", "TV", "Jewelry", "Clothing", "Linens"],
    "bedroom-2": ["Bed Frame", "Mattress", "Dresser", "Desk", "Chair", "Clothing", "Linens"],
    "bedroom-3": ["Bed Frame", "Mattress", "Dresser", "Desk", "Chair", "Clothing", "Linens"],
    "bathroom-master": ["Vanity Items", "Towels", "Hair Dryer", "Electric Razor", "Toiletries"],
    "bathroom-2": ["Vanity Items", "Towels", "Toiletries"],
    "dining-room": ["Dining Table", "Chairs", "China Cabinet", "China/Dishes", "Silverware", "Chandelier"],
    "home-office": ["Desk", "Chair", "Computer", "Monitor", "Printer", "Books", "Filing Cabinet"],
    "garage": ["Tools", "Lawn Mower", "Power Tools", "Bicycles", "Sports Equipment", "Workbench"],
    "outdoor": ["Patio Furniture", "Grill", "Pool Equipment", "Garden Tools", "Outdoor Décor"],
    "other": ["Luggage", "Holiday Decorations", "Exercise Equipment", "Musical Instruments"],
}

function generateId(): string {
    return Math.random().toString(36).substr(2, 9)
}

function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(amount)
}

export default function HomeInventoryPage() {
    const [rooms, setRooms] = useState<Room[]>(defaultRooms)
    const [isLoaded, setIsLoaded] = useState(false)

    // Load from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem('homeInventory')
        if (saved) {
            try {
                setRooms(JSON.parse(saved))
            } catch {
                // If parsing fails, use defaults
            }
        }
        setIsLoaded(true)
    }, [])

    // Save to localStorage whenever rooms change
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem('homeInventory', JSON.stringify(rooms))
        }
    }, [rooms, isLoaded])

    const toggleRoom = (roomId: string) => {
        setRooms(prev => prev.map(room =>
            room.id === roomId ? { ...room, isExpanded: !room.isExpanded } : room
        ))
    }

    const addItem = (roomId: string, itemName?: string) => {
        const newItem: InventoryItem = {
            id: generateId(),
            name: itemName || "",
            quantity: 1,
            value: 0,
            purchaseDate: "",
            serialNumber: "",
        }
        setRooms(prev => prev.map(room =>
            room.id === roomId
                ? { ...room, items: [...room.items, newItem], isExpanded: true }
                : room
        ))
    }

    const updateItem = (roomId: string, itemId: string, field: keyof InventoryItem, value: string | number) => {
        setRooms(prev => prev.map(room =>
            room.id === roomId
                ? {
                    ...room,
                    items: room.items.map(item =>
                        item.id === itemId ? { ...item, [field]: value } : item
                    )
                }
                : room
        ))
    }

    const removeItem = (roomId: string, itemId: string) => {
        setRooms(prev => prev.map(room =>
            room.id === roomId
                ? { ...room, items: room.items.filter(item => item.id !== itemId) }
                : room
        ))
    }

    const getRoomTotal = (room: Room): number => {
        return room.items.reduce((sum, item) => sum + (item.value * item.quantity), 0)
    }

    const getGrandTotal = (): number => {
        return rooms.reduce((sum, room) => sum + getRoomTotal(room), 0)
    }

    const getTotalItems = (): number => {
        return rooms.reduce((sum, room) => sum + room.items.reduce((itemSum, item) => itemSum + item.quantity, 0), 0)
    }

    const handleDownload = () => {
        const data = JSON.stringify(rooms, null, 2)
        const blob = new Blob([data], { type: 'application/json' })
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'home-inventory.json'
        a.click()
        URL.revokeObjectURL(url)
    }

    const handlePrint = () => {
        window.print()
    }

    const handleClear = () => {
        if (confirm('Are you sure you want to clear all inventory items? This cannot be undone.')) {
            setRooms(defaultRooms)
            localStorage.removeItem('homeInventory')
        }
    }

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
                            <ClipboardList className="h-8 w-8 text-lewis-blue" />
                        </div>
                        <h1 className="text-lewis-ink mb-4">Home Inventory Checklist</h1>
                        <p className="text-lg text-lewis-body">
                            Document your belongings room-by-room. A detailed inventory speeds up insurance claims
                            and helps ensure you have adequate coverage.
                        </p>
                    </div>
                </div>
            </section>

            {/* Summary Bar */}
            <section className="bg-white border-b border-lewis-border sticky top-0 z-10 print:hidden">
                <div className="container-lg py-4">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center gap-6">
                            <div>
                                <span className="text-sm text-lewis-body">Total Items</span>
                                <p className="font-semibold text-lewis-ink">{getTotalItems()}</p>
                            </div>
                            <div>
                                <span className="text-sm text-lewis-body">Total Value</span>
                                <p className="font-semibold text-lewis-ink text-lg">{formatCurrency(getGrandTotal())}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" onClick={handlePrint}>
                                <Printer className="h-4 w-4 mr-1" />
                                Print
                            </Button>
                            <Button variant="outline" size="sm" onClick={handleDownload}>
                                <Download className="h-4 w-4 mr-1" />
                                Download
                            </Button>
                            <Button variant="outline" size="sm" onClick={handleClear} className="text-red-600 hover:text-red-700">
                                Clear All
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Print Header */}
            <div className="hidden print:block p-8">
                <h1 className="text-2xl font-bold mb-2">Home Inventory</h1>
                <p className="text-sm text-gray-600 mb-4">Generated: {new Date().toLocaleDateString()}</p>
                <p className="text-lg font-semibold">Total Value: {formatCurrency(getGrandTotal())}</p>
            </div>

            {/* Inventory */}
            <section className="section-wrapper">
                <div className="container-lg max-w-4xl">
                    <div className="space-y-4">
                        {rooms.map((room) => (
                            <Card key={room.id} className="print:break-inside-avoid">
                                <CardHeader
                                    className="cursor-pointer print:cursor-default"
                                    onClick={() => toggleRoom(room.id)}
                                >
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="flex items-center gap-2">
                                            <span className="print:hidden">
                                                {room.isExpanded ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
                                            </span>
                                            {room.name}
                                            <span className="text-sm font-normal text-lewis-body">
                                                ({room.items.length} items)
                                            </span>
                                        </CardTitle>
                                        <span className="font-semibold text-lewis-blue">
                                            {formatCurrency(getRoomTotal(room))}
                                        </span>
                                    </div>
                                </CardHeader>

                                {(room.isExpanded || true) && (
                                    <CardContent className={`space-y-4 ${!room.isExpanded ? 'hidden print:block' : ''}`}>
                                        {/* Suggested Items */}
                                        {room.items.length === 0 && suggestedItems[room.id] && (
                                            <div className="print:hidden">
                                                <p className="text-sm text-lewis-body mb-2">Quick add suggested items:</p>
                                                <div className="flex flex-wrap gap-2">
                                                    {suggestedItems[room.id].map((item) => (
                                                        <Button
                                                            key={item}
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={(e) => {
                                                                e.stopPropagation()
                                                                addItem(room.id, item)
                                                            }}
                                                        >
                                                            <Plus className="h-3 w-3 mr-1" />
                                                            {item}
                                                        </Button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {/* Items List */}
                                        {room.items.map((item) => (
                                            <div key={item.id} className="grid grid-cols-12 gap-2 items-end border-b border-gray-100 pb-3">
                                                <div className="col-span-12 md:col-span-3">
                                                    <Label className="text-xs">Item Name</Label>
                                                    <Input
                                                        value={item.name}
                                                        onChange={(e) => updateItem(room.id, item.id, 'name', e.target.value)}
                                                        placeholder="Item name"
                                                        className="print:border-0 print:p-0"
                                                    />
                                                </div>
                                                <div className="col-span-4 md:col-span-1">
                                                    <Label className="text-xs">Qty</Label>
                                                    <Input
                                                        type="number"
                                                        value={item.quantity}
                                                        onChange={(e) => updateItem(room.id, item.id, 'quantity', parseInt(e.target.value) || 1)}
                                                        min={1}
                                                        className="print:border-0 print:p-0"
                                                    />
                                                </div>
                                                <div className="col-span-8 md:col-span-2">
                                                    <Label className="text-xs">Value ($)</Label>
                                                    <Input
                                                        type="number"
                                                        value={item.value || ''}
                                                        onChange={(e) => updateItem(room.id, item.id, 'value', parseInt(e.target.value) || 0)}
                                                        placeholder="0"
                                                        className="print:border-0 print:p-0"
                                                    />
                                                </div>
                                                <div className="col-span-6 md:col-span-2">
                                                    <Label className="text-xs">Purchase Date</Label>
                                                    <Input
                                                        type="date"
                                                        value={item.purchaseDate}
                                                        onChange={(e) => updateItem(room.id, item.id, 'purchaseDate', e.target.value)}
                                                        className="print:border-0 print:p-0"
                                                    />
                                                </div>
                                                <div className="col-span-5 md:col-span-3">
                                                    <Label className="text-xs">Serial #</Label>
                                                    <Input
                                                        value={item.serialNumber}
                                                        onChange={(e) => updateItem(room.id, item.id, 'serialNumber', e.target.value)}
                                                        placeholder="Optional"
                                                        className="print:border-0 print:p-0"
                                                    />
                                                </div>
                                                <div className="col-span-1 print:hidden">
                                                    <Button
                                                        variant="ghost"
                                                        size="sm"
                                                        onClick={() => removeItem(room.id, item.id)}
                                                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                                                    >
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}

                                        {/* Add Item Button */}
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={(e) => {
                                                e.stopPropagation()
                                                addItem(room.id)
                                            }}
                                            className="print:hidden"
                                        >
                                            <Plus className="h-4 w-4 mr-1" />
                                            Add Item
                                        </Button>
                                    </CardContent>
                                )}
                            </Card>
                        ))}
                    </div>

                    {/* Tips Section */}
                    <Card className="mt-8 bg-lewis-page print:hidden">
                        <CardHeader>
                            <CardTitle>Tips for Documenting Your Inventory</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="space-y-2 text-sm text-lewis-body">
                                <li>• <strong>Take photos/videos</strong> of each room and valuable items</li>
                                <li>• <strong>Keep receipts</strong> for major purchases as proof of value</li>
                                <li>• <strong>Store copies off-site</strong> - email to yourself or use cloud storage</li>
                                <li>• <strong>Update regularly</strong> - add new purchases, remove sold items</li>
                                <li>• <strong>Don&apos;t forget</strong> closets, attic, basement, and storage areas</li>
                                <li>• <strong>Record serial numbers</strong> for electronics and appliances</li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* CTA */}
                    <div className="mt-8 text-center print:hidden">
                        <p className="text-lewis-body mb-4">
                            Need help determining if you have enough coverage for your belongings?
                        </p>
                        <Button asChild className="btn-primary rounded-full">
                            <Link href="/contact">
                                Get a Free Coverage Review
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </>
    )
}
