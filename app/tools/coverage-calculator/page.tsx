"use client"

import { useState } from "react"
import Link from "next/link"
import { Calculator, Home, Car, Umbrella, Droplets, ArrowRight, AlertTriangle, CheckCircle } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface FormData {
    // Home
    squareFootage: number
    homeAge: number
    homeValue: number
    inFloodZone: boolean
    hasPool: boolean
    hasDog: boolean
    hasTrampoline: boolean
    personalPropertyValue: number

    // Auto
    numVehicles: number
    numDrivers: number
    hasTeenDriver: boolean
    annualMileage: number

    // Financial
    totalAssets: number
    annualIncome: number
}

interface Recommendations {
    dwelling: number
    personalProperty: number
    liability: number
    autoBI: string
    autoPD: number
    autoUM: string
    floodBuilding: number
    floodContents: number
    umbrella: number
    riskFactors: string[]
}

const initialFormData: FormData = {
    squareFootage: 2000,
    homeAge: 15,
    homeValue: 350000,
    inFloodZone: false,
    hasPool: false,
    hasDog: false,
    hasTrampoline: false,
    personalPropertyValue: 75000,
    numVehicles: 2,
    numDrivers: 2,
    hasTeenDriver: false,
    annualMileage: 12000,
    totalAssets: 250000,
    annualIncome: 100000,
}

function calculateRecommendations(data: FormData): Recommendations {
    const riskFactors: string[] = []

    // Dwelling coverage: Use rebuild cost estimate ($150-200/sqft in Florida)
    const rebuildCostPerSqFt = data.homeAge > 20 ? 175 : 150
    const dwelling = Math.max(data.squareFootage * rebuildCostPerSqFt, data.homeValue * 0.8)

    // Personal property: Typically 50-70% of dwelling, but use user's estimate
    const personalProperty = Math.max(data.personalPropertyValue, dwelling * 0.5)

    // Liability calculation based on assets and risk factors
    let liabilityMultiplier = 1
    if (data.hasPool) {
        riskFactors.push("Pool increases liability risk - consider higher limits")
        liabilityMultiplier += 0.5
    }
    if (data.hasDog) {
        riskFactors.push("Dog ownership increases liability exposure")
        liabilityMultiplier += 0.3
    }
    if (data.hasTrampoline) {
        riskFactors.push("Trampolines are high-risk attractive nuisances")
        liabilityMultiplier += 0.5
    }

    // Base liability on assets to protect
    let liability = 300000
    if (data.totalAssets > 500000) liability = 500000
    if (data.totalAssets > 1000000) liability = 1000000
    liability = liability * liabilityMultiplier

    // Auto recommendations
    let autoBI = "100/300"
    let autoPD = 100000
    let autoUM = "100/300"

    if (data.totalAssets > 500000) {
        autoBI = "250/500"
        autoPD = 250000
        autoUM = "250/500"
    }
    if (data.totalAssets > 1000000) {
        autoBI = "500/500"
        autoPD = 500000
        autoUM = "500/500"
    }

    if (data.hasTeenDriver) {
        riskFactors.push("Teen drivers significantly increase accident risk")
    }

    // Flood recommendations
    let floodBuilding = 0
    let floodContents = 0
    if (data.inFloodZone) {
        floodBuilding = Math.min(dwelling, 250000) // NFIP max
        floodContents = Math.min(personalProperty, 100000) // NFIP max
        riskFactors.push("Flood zone property - flood insurance is essential")
    } else {
        // Even outside flood zones, recommend consideration
        floodBuilding = Math.min(dwelling * 0.5, 250000)
        floodContents = Math.min(personalProperty * 0.5, 100000)
    }

    // Umbrella recommendation
    let umbrella = 0
    const totalExposure = data.totalAssets + (data.annualIncome * 5)
    if (totalExposure > 500000) umbrella = 1000000
    if (totalExposure > 1000000) umbrella = 2000000
    if (totalExposure > 2000000) umbrella = 3000000
    if (data.hasPool || data.hasTrampoline) {
        umbrella = Math.max(umbrella, 1000000)
        if (!riskFactors.includes("Consider umbrella policy for additional liability protection")) {
            riskFactors.push("Consider umbrella policy for additional liability protection")
        }
    }

    return {
        dwelling: Math.round(dwelling / 1000) * 1000,
        personalProperty: Math.round(personalProperty / 1000) * 1000,
        liability: Math.round(liability / 100000) * 100000,
        autoBI,
        autoPD,
        autoUM,
        floodBuilding,
        floodContents,
        umbrella,
        riskFactors,
    }
}

function formatCurrency(amount: number): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0,
    }).format(amount)
}

export default function CoverageCalculatorPage() {
    const [formData, setFormData] = useState<FormData>(initialFormData)
    const [showResults, setShowResults] = useState(false)
    const [recommendations, setRecommendations] = useState<Recommendations | null>(null)

    const handleInputChange = (field: keyof FormData, value: number | boolean) => {
        setFormData(prev => ({ ...prev, [field]: value }))
    }

    const handleCalculate = () => {
        const results = calculateRecommendations(formData)
        setRecommendations(results)
        setShowResults(true)
    }

    const handleReset = () => {
        setFormData(initialFormData)
        setShowResults(false)
        setRecommendations(null)
    }

    return (
        <>
            {/* Hero */}
            <section className="hero-gradient py-12 md:py-16">
                <div className="container-lg">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="w-16 h-16 rounded-2xl bg-lewis-blue/10 flex items-center justify-center mx-auto mb-6">
                            <Calculator className="h-8 w-8 text-lewis-blue" />
                        </div>
                        <h1 className="text-lewis-ink mb-4">Coverage Needs Calculator</h1>
                        <p className="text-lg text-lewis-body">
                            Answer a few questions about your home, vehicles, and financial situation
                            to get personalized coverage recommendations.
                        </p>
                    </div>
                </div>
            </section>

            {/* Calculator */}
            <section className="section-wrapper">
                <div className="container-lg max-w-4xl">
                    {!showResults ? (
                        <div className="space-y-8">
                            {/* Home Section */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Home className="h-5 w-5 text-lewis-blue" />
                                        Home Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <Label htmlFor="squareFootage">Square Footage</Label>
                                            <Input
                                                id="squareFootage"
                                                type="number"
                                                value={formData.squareFootage}
                                                onChange={(e) => handleInputChange('squareFootage', parseInt(e.target.value) || 0)}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="homeAge">Home Age (years)</Label>
                                            <Input
                                                id="homeAge"
                                                type="number"
                                                value={formData.homeAge}
                                                onChange={(e) => handleInputChange('homeAge', parseInt(e.target.value) || 0)}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="homeValue">Estimated Home Value</Label>
                                            <Input
                                                id="homeValue"
                                                type="number"
                                                value={formData.homeValue}
                                                onChange={(e) => handleInputChange('homeValue', parseInt(e.target.value) || 0)}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="personalPropertyValue">Personal Property Value</Label>
                                            <Input
                                                id="personalPropertyValue"
                                                type="number"
                                                value={formData.personalPropertyValue}
                                                onChange={(e) => handleInputChange('personalPropertyValue', parseInt(e.target.value) || 0)}
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.inFloodZone}
                                                onChange={(e) => handleInputChange('inFloodZone', e.target.checked)}
                                                className="w-4 h-4 rounded border-gray-300"
                                            />
                                            <span className="text-sm">In Flood Zone</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.hasPool}
                                                onChange={(e) => handleInputChange('hasPool', e.target.checked)}
                                                className="w-4 h-4 rounded border-gray-300"
                                            />
                                            <span className="text-sm">Has Pool</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.hasDog}
                                                onChange={(e) => handleInputChange('hasDog', e.target.checked)}
                                                className="w-4 h-4 rounded border-gray-300"
                                            />
                                            <span className="text-sm">Has Dog</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={formData.hasTrampoline}
                                                onChange={(e) => handleInputChange('hasTrampoline', e.target.checked)}
                                                className="w-4 h-4 rounded border-gray-300"
                                            />
                                            <span className="text-sm">Has Trampoline</span>
                                        </label>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Auto Section */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Car className="h-5 w-5 text-lewis-blue" />
                                        Vehicle Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <Label htmlFor="numVehicles">Number of Vehicles</Label>
                                            <Input
                                                id="numVehicles"
                                                type="number"
                                                value={formData.numVehicles}
                                                onChange={(e) => handleInputChange('numVehicles', parseInt(e.target.value) || 0)}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="numDrivers">Number of Drivers</Label>
                                            <Input
                                                id="numDrivers"
                                                type="number"
                                                value={formData.numDrivers}
                                                onChange={(e) => handleInputChange('numDrivers', parseInt(e.target.value) || 0)}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="annualMileage">Annual Mileage (per vehicle)</Label>
                                            <Input
                                                id="annualMileage"
                                                type="number"
                                                value={formData.annualMileage}
                                                onChange={(e) => handleInputChange('annualMileage', parseInt(e.target.value) || 0)}
                                            />
                                        </div>
                                        <div className="flex items-center">
                                            <label className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    checked={formData.hasTeenDriver}
                                                    onChange={(e) => handleInputChange('hasTeenDriver', e.target.checked)}
                                                    className="w-4 h-4 rounded border-gray-300"
                                                />
                                                <span className="text-sm">Teen Driver (under 25)</span>
                                            </label>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Financial Section */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Umbrella className="h-5 w-5 text-lewis-blue" />
                                        Financial Information
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <Label htmlFor="totalAssets">Total Assets (savings, investments, property)</Label>
                                            <Input
                                                id="totalAssets"
                                                type="number"
                                                value={formData.totalAssets}
                                                onChange={(e) => handleInputChange('totalAssets', parseInt(e.target.value) || 0)}
                                            />
                                        </div>
                                        <div>
                                            <Label htmlFor="annualIncome">Annual Household Income</Label>
                                            <Input
                                                id="annualIncome"
                                                type="number"
                                                value={formData.annualIncome}
                                                onChange={(e) => handleInputChange('annualIncome', parseInt(e.target.value) || 0)}
                                            />
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Calculate Button */}
                            <div className="flex justify-center">
                                <Button onClick={handleCalculate} className="btn-primary rounded-full px-12 py-6 text-lg">
                                    Calculate My Coverage Needs
                                    <ArrowRight className="h-5 w-5 ml-2" />
                                </Button>
                            </div>
                        </div>
                    ) : recommendations && (
                        <div className="space-y-8">
                            {/* Results Header */}
                            <div className="text-center">
                                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                <h2 className="text-2xl font-bold text-lewis-ink mb-2">Your Coverage Recommendations</h2>
                                <p className="text-lewis-body">Based on your inputs, here&apos;s what we recommend:</p>
                            </div>

                            {/* Risk Factors */}
                            {recommendations.riskFactors.length > 0 && (
                                <Card className="border-amber-200 bg-amber-50">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2 text-amber-800">
                                            <AlertTriangle className="h-5 w-5" />
                                            Risk Factors to Consider
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-2">
                                            {recommendations.riskFactors.map((factor, i) => (
                                                <li key={i} className="flex items-start gap-2 text-amber-700">
                                                    <span>•</span>
                                                    {factor}
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            )}

                            {/* Results Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Homeowners */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Home className="h-5 w-5 text-lewis-blue" />
                                            Homeowners Insurance
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-lewis-body">Dwelling Coverage</span>
                                            <span className="font-semibold text-lewis-ink">{formatCurrency(recommendations.dwelling)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-lewis-body">Personal Property</span>
                                            <span className="font-semibold text-lewis-ink">{formatCurrency(recommendations.personalProperty)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-lewis-body">Liability</span>
                                            <span className="font-semibold text-lewis-ink">{formatCurrency(recommendations.liability)}</span>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Auto */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Car className="h-5 w-5 text-lewis-blue" />
                                            Auto Insurance
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-lewis-body">Bodily Injury (BI)</span>
                                            <span className="font-semibold text-lewis-ink">{recommendations.autoBI}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-lewis-body">Property Damage (PD)</span>
                                            <span className="font-semibold text-lewis-ink">{formatCurrency(recommendations.autoPD)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-lewis-body">Uninsured Motorist (UM)</span>
                                            <span className="font-semibold text-lewis-ink">{recommendations.autoUM}</span>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Flood */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Droplets className="h-5 w-5 text-lewis-blue" />
                                            Flood Insurance
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex justify-between items-center py-2 border-b">
                                            <span className="text-lewis-body">Building Coverage</span>
                                            <span className="font-semibold text-lewis-ink">{formatCurrency(recommendations.floodBuilding)}</span>
                                        </div>
                                        <div className="flex justify-between items-center py-2">
                                            <span className="text-lewis-body">Contents Coverage</span>
                                            <span className="font-semibold text-lewis-ink">{formatCurrency(recommendations.floodContents)}</span>
                                        </div>
                                        <p className="text-xs text-lewis-body mt-2">
                                            {formData.inFloodZone
                                                ? "Flood insurance is required for your property."
                                                : "Even outside flood zones, 25% of claims occur in low-risk areas."
                                            }
                                        </p>
                                    </CardContent>
                                </Card>

                                {/* Umbrella */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Umbrella className="h-5 w-5 text-lewis-blue" />
                                            Umbrella Policy
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        {recommendations.umbrella > 0 ? (
                                            <>
                                                <div className="flex justify-between items-center py-2">
                                                    <span className="text-lewis-body">Recommended Coverage</span>
                                                    <span className="font-semibold text-lewis-ink">{formatCurrency(recommendations.umbrella)}</span>
                                                </div>
                                                <p className="text-xs text-lewis-body mt-2">
                                                    Umbrella policies provide additional liability protection above your home and auto limits.
                                                </p>
                                            </>
                                        ) : (
                                            <p className="text-lewis-body">
                                                Based on your assets, an umbrella policy may not be necessary at this time.
                                            </p>
                                        )}
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Disclaimer */}
                            <div className="bg-gray-50 p-6 rounded-xl text-center">
                                <p className="text-sm text-lewis-body mb-4">
                                    These recommendations are estimates based on general guidelines.
                                    Your actual coverage needs may vary. Speak with a licensed agent for personalized advice.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Button onClick={handleReset} variant="outline" className="rounded-full">
                                        Start Over
                                    </Button>
                                    <Button asChild className="btn-primary rounded-full">
                                        <Link href="/contact">
                                            Get a Free Quote
                                            <ArrowRight className="h-4 w-4 ml-2" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </>
    )
}
