'use client'

export const dynamic = 'force-dynamic'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Send, Loader2, CheckCircle } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { submitServiceRequest, RequestType, REQUEST_TYPE_LABELS } from '@/lib/portalApi'
import { usePortalDashboard } from '@/hooks/usePortalDashboard'

type FormState = 'form' | 'submitting' | 'success' | 'error'

export default function NewRequestPage() {
    const { data } = usePortalDashboard()
    const [formState, setFormState] = useState<FormState>('form')
    const [errorMessage, setErrorMessage] = useState('')

    const [requestType, setRequestType] = useState<RequestType>('general_inquiry')
    const [policyId, setPolicyId] = useState('')
    const [subject, setSubject] = useState('')
    const [details, setDetails] = useState('')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrorMessage('')

        if (!subject.trim()) {
            setErrorMessage('Please enter a subject')
            return
        }

        if (!details.trim()) {
            setErrorMessage('Please provide details about your request')
            return
        }

        setFormState('submitting')

        const result = await submitServiceRequest(
            requestType,
            subject,
            { description: details },
            policyId || undefined
        )

        if (result.success) {
            setFormState('success')
        } else {
            setFormState('error')
            setErrorMessage(result.error || 'Failed to submit request')
        }
    }

    if (formState === 'success') {
        return (
            <div className="max-w-2xl mx-auto">
                <Card>
                    <CardContent className="py-12 text-center">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h2 className="text-xl font-semibold text-lewis-ink mb-2">Request Submitted!</h2>
                        <p className="text-lewis-body mb-6">
                            We&apos;ve received your request and will get back to you soon.
                        </p>
                        <div className="flex justify-center gap-4">
                            <Button asChild variant="outline">
                                <Link href="/portal/requests">View Requests</Link>
                            </Button>
                            <Button asChild>
                                <Link href="/portal">Back to Dashboard</Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        )
    }

    return (
        <div className="max-w-2xl mx-auto">
            <div className="mb-6">
                <Link
                    href="/portal/requests"
                    className="inline-flex items-center text-sm text-lewis-body hover:text-lewis-blue"
                >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Back to Requests
                </Link>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Submit a Service Request</CardTitle>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Request Type */}
                        <div className="space-y-2">
                            <Label htmlFor="request-type">Request Type</Label>
                            <select
                                id="request-type"
                                className="w-full px-3 py-2 border border-lewis-border rounded-lg focus:outline-none focus:ring-2 focus:ring-lewis-blue"
                                value={requestType}
                                onChange={(e) => setRequestType(e.target.value as RequestType)}
                            >
                                {Object.entries(REQUEST_TYPE_LABELS).map(([value, label]) => (
                                    <option key={value} value={value}>
                                        {label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Policy Selection (Optional) */}
                        {data?.policies && data.policies.length > 0 && (
                            <div className="space-y-2">
                                <Label htmlFor="policy">Related Policy (Optional)</Label>
                                <select
                                    id="policy"
                                    className="w-full px-3 py-2 border border-lewis-border rounded-lg focus:outline-none focus:ring-2 focus:ring-lewis-blue"
                                    value={policyId}
                                    onChange={(e) => setPolicyId(e.target.value)}
                                >
                                    <option value="">Select a policy...</option>
                                    {data.policies.map((policy) => (
                                        <option key={policy.id} value={policy.id}>
                                            {policy.policy_type} - #{policy.policy_number}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* Subject */}
                        <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                                id="subject"
                                placeholder="Brief description of your request"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                            />
                        </div>

                        {/* Details */}
                        <div className="space-y-2">
                            <Label htmlFor="details">Details</Label>
                            <Textarea
                                id="details"
                                placeholder="Please provide all relevant details about your request..."
                                rows={5}
                                value={details}
                                onChange={(e) => setDetails(e.target.value)}
                            />
                        </div>

                        {/* Error Message */}
                        {errorMessage && (
                            <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                                {errorMessage}
                            </div>
                        )}

                        {/* Submit Button */}
                        <div className="flex justify-end gap-4">
                            <Button type="button" variant="outline" asChild>
                                <Link href="/portal/requests">Cancel</Link>
                            </Button>
                            <Button
                                type="submit"
                                className="btn-primary"
                                disabled={formState === 'submitting'}
                            >
                                {formState === 'submitting' ? (
                                    <>
                                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        <Send className="h-4 w-4 mr-2" />
                                        Submit Request
                                    </>
                                )}
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
