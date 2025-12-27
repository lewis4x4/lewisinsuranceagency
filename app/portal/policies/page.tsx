'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import Link from 'next/link'
import { FileText, ArrowRight, AlertCircle } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { usePortalDashboard } from '@/hooks/usePortalDashboard'

// Calculate once at module load time to avoid impure render calls
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000

export default function PoliciesPage() {
    const { data, loading, error } = usePortalDashboard()
    const [mountTime] = useState(() => Date.now())

    if (loading) {
        return (
            <div className="space-y-6">
                <div className="h-8 bg-gray-200 rounded w-48 animate-pulse"></div>
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-24 bg-gray-200 rounded-lg animate-pulse"></div>
                    ))}
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <Card className="border-red-200 bg-red-50">
                <CardContent className="py-8 text-center">
                    <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <h2 className="text-lg font-semibold text-red-900 mb-2">Unable to load policies</h2>
                    <p className="text-red-700">{error.message}</p>
                </CardContent>
            </Card>
        )
    }

    const policies = data?.policies || []

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-lewis-ink">My Policies</h1>
                <p className="text-lewis-body mt-1">View and manage all your insurance policies.</p>
            </div>

            {policies.length === 0 ? (
                <Card>
                    <CardContent className="py-12 text-center">
                        <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h2 className="text-lg font-semibold text-lewis-ink mb-2">No Policies Found</h2>
                        <p className="text-lewis-body">
                            You don&apos;t have any policies on file yet. Contact us to get started.
                        </p>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid gap-4">
                    {policies.map((policy) => {
                        const isActive = policy.status === 'active'
                        const isExpiringSoon = new Date(policy.expiration_date).getTime() < mountTime + THIRTY_DAYS_MS

                        return (
                            <Card key={policy.id} className="hover:border-lewis-blue transition-colors">
                                <Link href={`/portal/policies/${policy.id}`}>
                                    <CardContent className="p-6">
                                        <div className="flex items-start justify-between">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-xl bg-lewis-blue/10 flex items-center justify-center">
                                                    <FileText className="h-6 w-6 text-lewis-blue" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-lewis-ink">{policy.policy_type}</h3>
                                                    <p className="text-sm text-lewis-body">Policy #{policy.policy_number}</p>
                                                    {policy.carrier_name && (
                                                        <p className="text-sm text-lewis-body">{policy.carrier_name}</p>
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-right">
                                                <span className={`inline-block px-3 py-1 text-xs rounded-full capitalize ${
                                                    isActive
                                                        ? 'bg-green-100 text-green-700'
                                                        : 'bg-gray-100 text-gray-700'
                                                }`}>
                                                    {policy.status}
                                                </span>
                                                <div className="mt-2 text-sm">
                                                    <p className={`${isExpiringSoon && isActive ? 'text-amber-600 font-medium' : 'text-lewis-body'}`}>
                                                        {isExpiringSoon && isActive && '⚠️ '}
                                                        Expires: {new Date(policy.expiration_date).toLocaleDateString()}
                                                    </p>
                                                    {policy.premium && (
                                                        <p className="text-lewis-body">
                                                            Premium: ${policy.premium.toLocaleString()}/yr
                                                        </p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-4 pt-4 border-t border-lewis-border flex justify-end">
                                            <span className="text-sm text-lewis-blue flex items-center">
                                                View Details <ArrowRight className="h-4 w-4 ml-1" />
                                            </span>
                                        </div>
                                    </CardContent>
                                </Link>
                            </Card>
                        )
                    })}
                </div>
            )}
        </div>
    )
}
