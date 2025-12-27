'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Mail, ArrowRight, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { usePortalAuth } from '@/hooks/usePortalAuth'

type LoginStep = 'email' | 'checking' | 'sending' | 'sent' | 'error'

export default function PortalLoginPage() {
    const [email, setEmail] = useState('')
    const [step, setStep] = useState<LoginStep>('email')
    const [errorMessage, setErrorMessage] = useState('')
    const { checkInvitation, signInWithMagicLink, user } = usePortalAuth()
    const router = useRouter()

    // Redirect if already logged in
    if (user) {
        router.push('/portal')
        return null
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setErrorMessage('')

        if (!email.trim()) {
            setErrorMessage('Please enter your email address')
            return
        }

        // Step 1: Check invitation
        setStep('checking')
        const result = await checkInvitation(email)

        if (!result.can_proceed) {
            setStep('error')
            setErrorMessage(result.message || 'Access not available for this email.')
            return
        }

        // Step 2: Send magic link
        setStep('sending')
        const { error } = await signInWithMagicLink(email)

        if (error) {
            setStep('error')
            setErrorMessage(error.message || 'Failed to send login link. Please try again.')
            return
        }

        setStep('sent')
    }

    return (
        <div className="min-h-screen bg-lewis-page flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Logo */}
                <div className="text-center mb-8">
                    <Link href="/" className="inline-flex items-center gap-2">
                        <div className="w-12 h-12 rounded-full bg-lewis-blue flex items-center justify-center">
                            <span className="text-white font-bold text-xl">L</span>
                        </div>
                        <div className="text-left">
                            <div className="font-heading font-bold text-lewis-ink text-xl">Lewis Insurance</div>
                            <div className="text-xs text-lewis-body">Client Portal</div>
                        </div>
                    </Link>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle className="text-center">
                            {step === 'sent' ? 'Check Your Email' : 'Sign In to Your Portal'}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        {step === 'sent' ? (
                            <div className="text-center space-y-4">
                                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                                    <CheckCircle className="h-8 w-8 text-green-600" />
                                </div>
                                <p className="text-lewis-body">
                                    We sent a login link to <strong>{email}</strong>
                                </p>
                                <p className="text-sm text-lewis-body">
                                    Click the link in your email to sign in. The link expires in 1 hour.
                                </p>
                                <Button
                                    variant="outline"
                                    onClick={() => {
                                        setStep('email')
                                        setEmail('')
                                    }}
                                    className="mt-4"
                                >
                                    Use a different email
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email Address</Label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="you@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="pl-10"
                                            disabled={step === 'checking' || step === 'sending'}
                                        />
                                    </div>
                                </div>

                                {step === 'error' && errorMessage && (
                                    <div className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
                                        <AlertCircle className="h-4 w-4 mt-0.5 flex-shrink-0" />
                                        <div>
                                            <p>{errorMessage}</p>
                                            {errorMessage.includes('not found') && (
                                                <p className="mt-1 text-xs">
                                                    If you&apos;re a Lewis Insurance client and need portal access,{' '}
                                                    <Link href="/contact" className="underline">
                                                        contact us
                                                    </Link>
                                                    .
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    className="w-full btn-primary"
                                    disabled={step === 'checking' || step === 'sending'}
                                >
                                    {step === 'checking' ? (
                                        <>
                                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                            Verifying access...
                                        </>
                                    ) : step === 'sending' ? (
                                        <>
                                            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                            Sending link...
                                        </>
                                    ) : (
                                        <>
                                            Send Login Link
                                            <ArrowRight className="h-4 w-4 ml-2" />
                                        </>
                                    )}
                                </Button>

                                <p className="text-xs text-center text-lewis-body">
                                    We&apos;ll send you a secure login link. No password required.
                                </p>
                            </form>
                        )}
                    </CardContent>
                </Card>

                {/* Help text */}
                <div className="mt-6 text-center text-sm text-lewis-body">
                    <p>
                        Need help?{' '}
                        <Link href="/contact" className="text-lewis-blue hover:underline">
                            Contact us
                        </Link>{' '}
                        or call{' '}
                        <a href="tel:3867550050" className="text-lewis-blue hover:underline">
                            (386) 755-0050
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}
