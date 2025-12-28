'use client'

import { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { AlertCircle } from 'lucide-react'

export default function PortalError({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error('Portal error:', error)
    }, [error])

    return (
        <Card className="border-red-200 bg-red-50">
            <CardContent className="py-8 text-center">
                <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h2 className="text-lg font-semibold text-red-900 mb-2">
                    Unable to load this page
                </h2>
                <p className="text-red-700 mb-4 max-w-md mx-auto">
                    There was a problem loading your information. Please try again.
                </p>
                <div className="flex gap-3 justify-center">
                    <Button onClick={reset}>Try Again</Button>
                    <Button variant="outline" onClick={() => window.location.href = '/portal'}>
                        Back to Dashboard
                    </Button>
                </div>
                {error.digest && (
                    <p className="text-xs text-red-600/60 mt-4">
                        Error ID: {error.digest}
                    </p>
                )}
            </CardContent>
        </Card>
    )
}
