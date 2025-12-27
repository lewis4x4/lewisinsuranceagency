'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type CallbackState = 'processing' | 'success' | 'error'

export default function AuthCallbackPage() {
    const router = useRouter()
    const [state, setState] = useState<CallbackState>('processing')
    const [errorMessage, setErrorMessage] = useState('')

    useEffect(() => {
        const handleCallback = async () => {
            if (!supabase) {
                setState('error')
                setErrorMessage('Portal is not configured. Please contact support.')
                return
            }

            try {
                // Get session from URL hash (magic link auth)
                const { data, error } = await supabase.auth.getSession()

                if (error) {
                    console.error('Auth callback error:', error)
                    setState('error')
                    setErrorMessage(error.message)
                    return
                }

                if (data.session) {
                    setState('success')
                    // Short delay to show success message
                    setTimeout(() => {
                        router.push('/portal')
                    }, 1500)
                } else {
                    // Listen for auth state change (for magic link)
                    const { data: { subscription } } = supabase.auth.onAuthStateChange(
                        (event, session) => {
                            if (event === 'SIGNED_IN' && session) {
                                setState('success')
                                setTimeout(() => {
                                    router.push('/portal')
                                }, 1500)
                            } else if (event === 'TOKEN_REFRESHED') {
                                // Session refreshed, redirect
                                router.push('/portal')
                            }
                        }
                    )

                    // Set timeout for auth check
                    setTimeout(() => {
                        if (state === 'processing') {
                            setState('error')
                            setErrorMessage('Login link may have expired. Please request a new one.')
                        }
                        subscription.unsubscribe()
                    }, 10000)
                }
            } catch (err) {
                console.error('Callback processing error:', err)
                setState('error')
                setErrorMessage('An error occurred during login. Please try again.')
            }
        }

        handleCallback()
    }, [router, state])

    return (
        <div className="min-h-screen bg-lewis-page flex items-center justify-center p-4">
            <div className="w-full max-w-md text-center">
                {state === 'processing' && (
                    <div className="space-y-4">
                        <Loader2 className="h-12 w-12 text-lewis-blue animate-spin mx-auto" />
                        <h1 className="text-xl font-semibold text-lewis-ink">Completing login...</h1>
                        <p className="text-lewis-body">Please wait while we verify your session.</p>
                    </div>
                )}

                {state === 'success' && (
                    <div className="space-y-4">
                        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                            <CheckCircle className="h-8 w-8 text-green-600" />
                        </div>
                        <h1 className="text-xl font-semibold text-lewis-ink">Login successful!</h1>
                        <p className="text-lewis-body">Redirecting to your dashboard...</p>
                    </div>
                )}

                {state === 'error' && (
                    <div className="space-y-4">
                        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto">
                            <AlertCircle className="h-8 w-8 text-red-600" />
                        </div>
                        <h1 className="text-xl font-semibold text-lewis-ink">Login failed</h1>
                        <p className="text-lewis-body">{errorMessage}</p>
                        <Button asChild className="btn-primary">
                            <Link href="/portal/login">Try Again</Link>
                        </Button>
                    </div>
                )}
            </div>
        </div>
    )
}
