'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { usePortalAuth } from '@/hooks/usePortalAuth'
import Link from 'next/link'
import {
    LayoutDashboard,
    FileText,
    CreditCard,
    MessageSquare,
    LogOut,
    Menu,
    X
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

const publicPaths = ['/portal/login', '/portal/callback']

const navItems = [
    { href: '/portal', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/portal/policies', label: 'My Policies', icon: FileText },
    { href: '/portal/documents', label: 'Documents', icon: CreditCard },
    { href: '/portal/requests', label: 'Service Requests', icon: MessageSquare },
]

export default function PortalLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { user, loading, signOut } = usePortalAuth()
    const router = useRouter()
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const isPublicPath = publicPaths.some(path => pathname.startsWith(path))

    useEffect(() => {
        if (!loading && !user && !isPublicPath) {
            router.push('/portal/login')
        }
    }, [user, loading, isPublicPath, router])

    // Show loading state
    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-lewis-page">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-lewis-blue mx-auto mb-4"></div>
                    <p className="text-lewis-body">Loading...</p>
                </div>
            </div>
        )
    }

    // Public pages (login, callback) - render without nav
    if (isPublicPath) {
        return <>{children}</>
    }

    // Not authenticated - show nothing while redirecting
    if (!user) {
        return null
    }

    // Authenticated - show portal layout
    return (
        <div className="min-h-screen bg-lewis-page">
            {/* Portal Header */}
            <header className="bg-white border-b border-lewis-border sticky top-0 z-50">
                <div className="container-lg">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center gap-4">
                            <Link href="/portal" className="flex items-center gap-2">
                                <div className="w-8 h-8 rounded-full bg-lewis-blue flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">L</span>
                                </div>
                                <span className="font-heading font-semibold text-lewis-ink hidden sm:inline">Client Portal</span>
                            </Link>
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => {
                                const Icon = item.icon
                                const isActive = pathname === item.href ||
                                    (item.href !== '/portal' && pathname.startsWith(item.href))
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                            isActive
                                                ? 'bg-lewis-blue text-white'
                                                : 'text-lewis-body hover:bg-gray-100'
                                        }`}
                                    >
                                        <Icon className="h-4 w-4" />
                                        {item.label}
                                    </Link>
                                )
                            })}
                        </nav>

                        <div className="flex items-center gap-4">
                            <span className="text-sm text-lewis-body hidden sm:inline">
                                {user.email}
                            </span>
                            <Button
                                variant="ghost"
                                size="sm"
                                onClick={signOut}
                                className="text-lewis-body hover:text-red-600"
                            >
                                <LogOut className="h-4 w-4 mr-2" />
                                <span className="hidden sm:inline">Sign Out</span>
                            </Button>

                            {/* Mobile menu button */}
                            <button
                                className="md:hidden p-2"
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            >
                                {mobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Nav */}
                {mobileMenuOpen && (
                    <nav className="md:hidden border-t border-lewis-border bg-white">
                        <div className="container-lg py-4 space-y-2">
                            {navItems.map((item) => {
                                const Icon = item.icon
                                const isActive = pathname === item.href
                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                                            isActive
                                                ? 'bg-lewis-blue text-white'
                                                : 'text-lewis-body hover:bg-gray-100'
                                        }`}
                                    >
                                        <Icon className="h-5 w-5" />
                                        {item.label}
                                    </Link>
                                )
                            })}
                        </div>
                    </nav>
                )}
            </header>

            {/* Main Content */}
            <main className="container-lg py-8">
                {children}
            </main>

            {/* Back to Main Site */}
            <footer className="border-t border-lewis-border bg-white py-4">
                <div className="container-lg text-center">
                    <Link href="/" className="text-sm text-lewis-blue hover:underline">
                        ← Back to Lewis Insurance Website
                    </Link>
                </div>
            </footer>
        </div>
    )
}
