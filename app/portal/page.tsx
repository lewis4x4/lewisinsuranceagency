'use client'

import Link from 'next/link'
import { FileText, CreditCard, MessageSquare, Plus, ArrowRight, AlertCircle, Clock } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { usePortalDashboard } from '@/hooks/usePortalDashboard'

export default function PortalDashboardPage() {
    const { data, loading, error } = usePortalDashboard()

    if (loading) {
        return (
            <div className="space-y-6">
                <div className="h-8 bg-gray-200 rounded w-48 animate-pulse"></div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="h-32 bg-gray-200 rounded-lg animate-pulse"></div>
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
                    <h2 className="text-lg font-semibold text-red-900 mb-2">Unable to load dashboard</h2>
                    <p className="text-red-700 mb-4">{error.message}</p>
                    <Button onClick={() => window.location.reload()}>Try Again</Button>
                </CardContent>
            </Card>
        )
    }

    const activePolicies = data?.policies?.filter(p => p.status === 'active') || []
    const recentDocuments = data?.documents?.slice(0, 5) || []
    const pendingRequests = data?.pending_requests || []

    return (
        <div className="space-y-8">
            {/* Welcome Header */}
            <div>
                <h1 className="text-2xl font-bold text-lewis-ink">
                    Welcome back{data?.user?.first_name ? `, ${data.user.first_name}` : ''}!
                </h1>
                <p className="text-lewis-body mt-1">
                    Here&apos;s an overview of your insurance policies and account.
                </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-lewis-body">Active Policies</p>
                                <p className="text-3xl font-bold text-lewis-ink">{activePolicies.length}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-lewis-blue/10 flex items-center justify-center">
                                <FileText className="h-6 w-6 text-lewis-blue" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-lewis-body">Documents</p>
                                <p className="text-3xl font-bold text-lewis-ink">{data?.documents?.length || 0}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                                <CreditCard className="h-6 w-6 text-green-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm text-lewis-body">Pending Requests</p>
                                <p className="text-3xl font-bold text-lewis-ink">{pendingRequests.length}</p>
                            </div>
                            <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                                <MessageSquare className="h-6 w-6 text-amber-600" />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Policies */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>My Policies</CardTitle>
                        <Button asChild variant="ghost" size="sm">
                            <Link href="/portal/policies">
                                View All <ArrowRight className="h-4 w-4 ml-1" />
                            </Link>
                        </Button>
                    </CardHeader>
                    <CardContent>
                        {activePolicies.length === 0 ? (
                            <p className="text-lewis-body text-center py-8">No active policies found.</p>
                        ) : (
                            <div className="space-y-3">
                                {activePolicies.slice(0, 3).map((policy) => (
                                    <Link
                                        key={policy.id}
                                        href={`/portal/policies/${policy.id}`}
                                        className="block p-4 rounded-lg border border-lewis-border hover:border-lewis-blue hover:bg-lewis-blue/5 transition-colors"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <p className="font-medium text-lewis-ink">{policy.policy_type}</p>
                                                <p className="text-sm text-lewis-body">#{policy.policy_number}</p>
                                            </div>
                                            <div className="text-right">
                                                <span className="inline-block px-2 py-1 text-xs rounded-full bg-green-100 text-green-700 capitalize">
                                                    {policy.status}
                                                </span>
                                                <p className="text-xs text-lewis-body mt-1">
                                                    Exp: {new Date(policy.expiration_date).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Recent Documents */}
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Recent Documents</CardTitle>
                        <Button asChild variant="ghost" size="sm">
                            <Link href="/portal/documents">
                                View All <ArrowRight className="h-4 w-4 ml-1" />
                            </Link>
                        </Button>
                    </CardHeader>
                    <CardContent>
                        {recentDocuments.length === 0 ? (
                            <p className="text-lewis-body text-center py-8">No documents available.</p>
                        ) : (
                            <div className="space-y-3">
                                {recentDocuments.map((doc) => (
                                    <div
                                        key={doc.id}
                                        className="flex items-center justify-between p-3 rounded-lg border border-lewis-border"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                                                <FileText className="h-5 w-5 text-gray-600" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-sm text-lewis-ink">{doc.document_name}</p>
                                                <p className="text-xs text-lewis-body">{doc.document_type}</p>
                                            </div>
                                        </div>
                                        <p className="text-xs text-lewis-body">
                                            {new Date(doc.created_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>

            {/* Pending Requests */}
            {pendingRequests.length > 0 && (
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-amber-500" />
                            Pending Requests
                        </CardTitle>
                        <Button asChild variant="ghost" size="sm">
                            <Link href="/portal/requests">
                                View All <ArrowRight className="h-4 w-4 ml-1" />
                            </Link>
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {pendingRequests.slice(0, 3).map((request) => (
                                <div
                                    key={request.id}
                                    className="flex items-center justify-between p-4 rounded-lg bg-amber-50 border border-amber-200"
                                >
                                    <div>
                                        <p className="font-medium text-lewis-ink">{request.request_type.replace(/_/g, ' ')}</p>
                                        <p className="text-sm text-lewis-body">
                                            Submitted {new Date(request.created_at).toLocaleDateString()}
                                        </p>
                                    </div>
                                    <span className="px-3 py-1 text-xs rounded-full bg-amber-200 text-amber-800 capitalize">
                                        {request.status}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Quick Actions */}
            <Card>
                <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <Button asChild variant="outline" className="h-auto py-4 flex-col gap-2">
                            <Link href="/portal/requests/new">
                                <Plus className="h-5 w-5" />
                                <span>New Request</span>
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="h-auto py-4 flex-col gap-2">
                            <Link href="/portal/documents">
                                <FileText className="h-5 w-5" />
                                <span>View Documents</span>
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="h-auto py-4 flex-col gap-2">
                            <Link href="/contact">
                                <MessageSquare className="h-5 w-5" />
                                <span>Contact Agent</span>
                            </Link>
                        </Button>
                        <Button asChild variant="outline" className="h-auto py-4 flex-col gap-2">
                            <Link href="/claims">
                                <AlertCircle className="h-5 w-5" />
                                <span>File a Claim</span>
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
