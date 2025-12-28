'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Application error:', error)
    }, [error])

    return (
        <div className="min-h-[50vh] flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-6">
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-2xl font-bold text-lewis-ink mb-3">
                    Something went wrong
                </h2>
                <p className="text-lewis-body mb-6">
                    We apologize for the inconvenience. Please try again, or contact us if the problem persists.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button onClick={reset} className="rounded-full">
                        Try Again
                    </Button>
                    <Button variant="outline" asChild className="rounded-full">
                        <a href="/contact">Contact Support</a>
                    </Button>
                </div>
                {error.digest && (
                    <p className="text-xs text-lewis-body/60 mt-4">
                        Error ID: {error.digest}
                    </p>
                )}
            </div>
        </div>
    )
}
