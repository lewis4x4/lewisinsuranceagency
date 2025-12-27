'use client'

import { useEffect, useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase'

export interface PortalUser {
    id: string
    email: string
    first_name: string
    last_name: string
    account_name: string
}

export interface Policy {
    id: string
    policy_number: string
    policy_type: string
    status: string
    expiration_date: string
    premium: number
    carrier_name?: string
}

export interface Document {
    id: string
    document_name: string
    document_type: string
    created_at: string
    policy_id?: string
    download_url?: string
}

export interface IDCard {
    id: string
    policy_id: string
    card_data: Record<string, unknown>
}

export interface ServiceRequest {
    id: string
    request_type: string
    request_title: string
    status: string
    created_at: string
    updated_at?: string
}

export interface DashboardData {
    user: PortalUser
    policies: Policy[]
    documents: Document[]
    id_cards: IDCard[]
    pending_requests: ServiceRequest[]
}

export function usePortalDashboard() {
    const [data, setData] = useState<DashboardData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    const fetchDashboard = useCallback(async () => {
        setLoading(true)
        setError(null)

        try {
            const { data: dashboardData, error: fetchError } = await supabase.functions.invoke(
                'portal-get-my-dashboard'
            )

            if (fetchError) {
                throw new Error(fetchError.message || 'Failed to load dashboard')
            }

            setData(dashboardData)
        } catch (err) {
            setError(err as Error)
        } finally {
            setLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchDashboard()
    }, [fetchDashboard])

    return {
        data,
        loading,
        error,
        refetch: fetchDashboard,
    }
}

export function usePortalPolicyDetails(policyId: string | null) {
    const [data, setData] = useState<Policy | null>(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        if (!policyId) return

        async function fetchPolicy() {
            setLoading(true)
            setError(null)

            try {
                const { data: policyData, error: fetchError } = await supabase.functions.invoke(
                    'portal-get-policy-details',
                    { body: { policy_id: policyId } }
                )

                if (fetchError) {
                    throw new Error(fetchError.message || 'Failed to load policy details')
                }

                setData(policyData)
            } catch (err) {
                setError(err as Error)
            } finally {
                setLoading(false)
            }
        }

        fetchPolicy()
    }, [policyId])

    return { data, loading, error }
}
