'use client'

import { FileText, Download, AlertCircle, Search } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { usePortalDashboard } from '@/hooks/usePortalDashboard'
import { useState } from 'react'

export default function DocumentsPage() {
    const { data, loading, error } = usePortalDashboard()
    const [searchTerm, setSearchTerm] = useState('')

    if (loading) {
        return (
            <div className="space-y-6">
                <div className="h-8 bg-gray-200 rounded w-48 animate-pulse"></div>
                <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="h-16 bg-gray-200 rounded-lg animate-pulse"></div>
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
                    <h2 className="text-lg font-semibold text-red-900 mb-2">Unable to load documents</h2>
                    <p className="text-red-700">{error.message}</p>
                </CardContent>
            </Card>
        )
    }

    const documents = data?.documents || []
    const filteredDocuments = documents.filter(doc =>
        doc.document_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.document_type.toLowerCase().includes(searchTerm.toLowerCase())
    )

    // Group documents by type
    const groupedDocuments = filteredDocuments.reduce((acc, doc) => {
        const type = doc.document_type || 'Other'
        if (!acc[type]) acc[type] = []
        acc[type].push(doc)
        return acc
    }, {} as Record<string, typeof documents>)

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-lewis-ink">Documents</h1>
                <p className="text-lewis-body mt-1">Access your policy documents, ID cards, and more.</p>
            </div>

            {/* Search */}
            <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                    type="search"
                    placeholder="Search documents..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {documents.length === 0 ? (
                <Card>
                    <CardContent className="py-12 text-center">
                        <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                        <h2 className="text-lg font-semibold text-lewis-ink mb-2">No Documents Found</h2>
                        <p className="text-lewis-body">
                            You don&apos;t have any documents on file yet.
                        </p>
                    </CardContent>
                </Card>
            ) : filteredDocuments.length === 0 ? (
                <Card>
                    <CardContent className="py-8 text-center">
                        <p className="text-lewis-body">No documents match your search.</p>
                    </CardContent>
                </Card>
            ) : (
                <div className="space-y-6">
                    {Object.entries(groupedDocuments).map(([type, docs]) => (
                        <Card key={type}>
                            <CardHeader>
                                <CardTitle className="text-lg">{type}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="divide-y divide-lewis-border">
                                    {docs.map((doc) => (
                                        <div
                                            key={doc.id}
                                            className="flex items-center justify-between py-3 first:pt-0 last:pb-0"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                                                    <FileText className="h-5 w-5 text-gray-600" />
                                                </div>
                                                <div>
                                                    <p className="font-medium text-sm text-lewis-ink">{doc.document_name}</p>
                                                    <p className="text-xs text-lewis-body">
                                                        Added {new Date(doc.created_at).toLocaleDateString()}
                                                    </p>
                                                </div>
                                            </div>
                                            <Button
                                                variant="outline"
                                                size="sm"
                                                onClick={() => {
                                                    // TODO: Implement document download
                                                    alert('Document download coming soon')
                                                }}
                                            >
                                                <Download className="h-4 w-4 mr-1" />
                                                Download
                                            </Button>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}

            {/* ID Cards Section */}
            {data?.id_cards && data.id_cards.length > 0 && (
                <Card>
                    <CardHeader>
                        <CardTitle>Insurance ID Cards</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {data.id_cards.map((card) => (
                                <div
                                    key={card.id}
                                    className="p-4 rounded-lg border-2 border-dashed border-lewis-border bg-gray-50"
                                >
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="text-sm font-medium text-lewis-ink">ID Card</span>
                                        <Button variant="outline" size="sm">
                                            <Download className="h-4 w-4 mr-1" />
                                            Download
                                        </Button>
                                    </div>
                                    <p className="text-xs text-lewis-body">
                                        Policy ID: {card.policy_id}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}
