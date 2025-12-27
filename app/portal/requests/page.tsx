'use client'

export const dynamic = 'force-dynamic'

import Link from 'next/link'
import { MessageSquare, Plus, AlertCircle, CheckCircle, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { usePortalDashboard } from '@/hooks/usePortalDashboard'

const statusStyles: Record<string, { bg: string; text: string; icon: typeof Clock }> = {
    pending: { bg: 'bg-amber-100', text: 'text-amber-700', icon: Clock },
    in_progress: { bg: 'bg-blue-100', text: 'text-blue-700', icon: Clock },
    completed: { bg: 'bg-green-100', text: 'text-green-700', icon: CheckCircle },
    cancelled: { bg: 'bg-gray-100', text: 'text-gray-700', icon: AlertCircle },
}

export default function RequestsPage() {
    const { data, loading, error } = usePortalDashboard()

    if (loading) {
        return (
            <div className="space-y-6">
                <div className="h-8 bg-gray-200 rounded w-48 animate-pulse"></div>
                <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-20 bg-gray-200 rounded-lg animate-pulse"></div>
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
                    <h2 className="text-lg font-semibold text-red-900 mb-2">Unable to load requests</h2>
                    <p className="text-red-700">{error.message}</p>
                </CardContent>
            </Card>
        )
    }

    const requests = data?.pending_requests || []

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-lewis-ink">Service Requests</h1>
                    <p className="text-lewis-body mt-1">View and track your service requests.</p>
                </div>
                <Button asChild className="btn-primary">
                    <Link href="/portal/requests/new">
                        <Plus className="h-4 w-4 mr-2" />
                        New Request
                    </Link>
                </Button>
            </div>

            {requests.length === 0 ? (
                <Card>
                    <CardContent className="py-12 text-center">
                        <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h2 className="text-lg font-semibold text-lewis-ink mb-2">No Requests</h2>
                        <p className="text-lewis-body mb-6">
                            You haven&apos;t submitted any service requests yet.
                        </p>
                        <Button asChild>
                            <Link href="/portal/requests/new">Submit a Request</Link>
                        </Button>
                    </CardContent>
                </Card>
            ) : (
                <Card>
                    <CardHeader>
                        <CardTitle>Request History</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {requests.map((request) => {
                                const style = statusStyles[request.status] || statusStyles.pending
                                const StatusIcon = style.icon

                                return (
                                    <div
                                        key={request.id}
                                        className="flex items-start justify-between p-4 rounded-lg border border-lewis-border"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className={`w-10 h-10 rounded-lg ${style.bg} flex items-center justify-center`}>
                                                <StatusIcon className={`h-5 w-5 ${style.text}`} />
                                            </div>
                                            <div>
                                                <h3 className="font-medium text-lewis-ink">
                                                    {request.request_type.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
                                                </h3>
                                                {request.request_title && (
                                                    <p className="text-sm text-lewis-body">{request.request_title}</p>
                                                )}
                                                <p className="text-xs text-lewis-body mt-1">
                                                    Submitted {new Date(request.created_at).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                        <span className={`px-3 py-1 text-xs rounded-full ${style.bg} ${style.text} capitalize`}>
                                            {request.status.replace(/_/g, ' ')}
                                        </span>
                                    </div>
                                )
                            })}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
