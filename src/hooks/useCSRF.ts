'use client'

import { useState, useEffect, useCallback } from 'react'

interface UseCSRFResult {
    csrfToken: string | null
    isLoading: boolean
    error: Error | null
    refresh: () => Promise<void>
}

export function useCSRF(): UseCSRFResult {
    const [csrfToken, setCsrfToken] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<Error | null>(null)

    const fetchToken = useCallback(async () => {
        setIsLoading(true)
        setError(null)

        try {
            const response = await fetch('/api/lead', {
                method: 'GET',
                credentials: 'include', // Important for cookies
            })

            if (!response.ok) {
                throw new Error('Failed to fetch CSRF token')
            }

            const data = await response.json()
            setCsrfToken(data.csrfToken)
        } catch (err) {
            setError(err instanceof Error ? err : new Error('Unknown error'))
            setCsrfToken(null)
        } finally {
            setIsLoading(false)
        }
    }, [])

    useEffect(() => {
        fetchToken()
    }, [fetchToken])

    return {
        csrfToken,
        isLoading,
        error,
        refresh: fetchToken,
    }
}
