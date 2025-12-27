import { supabase } from './supabase'

export type RequestType =
    | 'add_vehicle'
    | 'remove_vehicle'
    | 'address_change'
    | 'coverage_change'
    | 'document_request'
    | 'certificate_request'
    | 'billing_question'
    | 'general_inquiry'
    | 'other'

export const REQUEST_TYPE_LABELS: Record<RequestType, string> = {
    add_vehicle: 'Add Vehicle',
    remove_vehicle: 'Remove Vehicle',
    address_change: 'Address Change',
    coverage_change: 'Coverage Change',
    document_request: 'Document Request',
    certificate_request: 'Certificate of Insurance',
    billing_question: 'Billing Question',
    general_inquiry: 'General Inquiry',
    other: 'Other',
}

interface ServiceRequestResponse {
    success: boolean
    request_id?: string
    message?: string
    error?: string
}

export async function submitServiceRequest(
    requestType: RequestType,
    title: string,
    details: Record<string, unknown>,
    policyId?: string
): Promise<ServiceRequestResponse> {
    if (!supabase) {
        return {
            success: false,
            error: 'Portal is not configured',
        }
    }

    try {
        const { data, error } = await supabase.functions.invoke('portal-submit-request', {
            body: {
                request_type: requestType,
                request_title: title,
                request_data: details,
                policy_id: policyId,
            },
        })

        if (error) {
            return {
                success: false,
                error: error.message || 'Failed to submit request',
            }
        }

        return {
            success: true,
            request_id: data?.request_id,
            message: data?.message || 'Request submitted successfully',
        }
    } catch (err) {
        return {
            success: false,
            error: err instanceof Error ? err.message : 'An unexpected error occurred',
        }
    }
}

export async function getDocument(documentId: string): Promise<{ url: string | null; error: string | null }> {
    if (!supabase) {
        return { url: null, error: 'Portal is not configured' }
    }

    try {
        const { data, error } = await supabase.functions.invoke('portal-get-document', {
            body: { document_id: documentId },
        })

        if (error) {
            return { url: null, error: error.message }
        }

        return { url: data?.url, error: null }
    } catch (err) {
        return {
            url: null,
            error: err instanceof Error ? err.message : 'Failed to get document',
        }
    }
}
