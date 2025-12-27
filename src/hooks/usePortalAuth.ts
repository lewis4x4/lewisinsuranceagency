'use client'

import { useEffect, useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { User, AuthError } from '@supabase/supabase-js'

interface InvitationCheckResult {
    status: 'invited' | 'existing' | 'not_found' | 'error'
    message: string
    can_proceed: boolean
}

export function usePortalAuth() {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Handle case where supabase is not configured
        if (!supabase) {
            setLoading(false)
            return
        }

        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null)
            setLoading(false)
        })

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
        })

        return () => subscription.unsubscribe()
    }, [])

    const checkInvitation = useCallback(async (email: string): Promise<InvitationCheckResult> => {
        if (!supabase) {
            return {
                status: 'error',
                message: 'Portal is not configured. Please contact support.',
                can_proceed: false,
            }
        }

        try {
            const { data, error } = await supabase.functions.invoke('check-portal-access', {
                body: { email },
            })

            if (error) {
                return {
                    status: 'error',
                    message: 'Unable to verify access. Please try again.',
                    can_proceed: false,
                }
            }

            return data as InvitationCheckResult
        } catch {
            return {
                status: 'error',
                message: 'Unable to connect to server. Please try again.',
                can_proceed: false,
            }
        }
    }, [])

    const signInWithMagicLink = useCallback(async (email: string): Promise<{ error: AuthError | null }> => {
        if (!supabase) {
            return { error: { message: 'Portal is not configured' } as AuthError }
        }

        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: {
                emailRedirectTo: `${window.location.origin}/portal/callback`,
            },
        })

        return { error }
    }, [])

    const signOut = useCallback(async () => {
        if (!supabase) return
        await supabase.auth.signOut()
    }, [])

    return {
        user,
        loading,
        isAuthenticated: !!user,
        checkInvitation,
        signInWithMagicLink,
        signOut,
    }
}
