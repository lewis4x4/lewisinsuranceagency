"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, Phone, User } from "lucide-react"
import { siteConfig, navigation } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Badge } from "@/components/ui/badge"


export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-lewis-border">
            {/* Skip to main content */}
            <a href="#main-content" className="skip-link">
                Skip to main content
            </a>

            <div className="container-lg">
                <div className="flex h-16 md:h-20 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image
                            src="/brand/lewis-logo.png"
                            alt="Lewis Insurance - Your Florida Insurance Experts"
                            width={200}
                            height={50}
                            className="h-10 md:h-12 w-auto"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-lewis-ink transition-colors hover:bg-gray-100 hover:text-lewis-blue focus:bg-gray-100 focus:outline-none">
                                            Home
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                {/* Personal Dropdown */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent text-lewis-ink hover:bg-gray-100 hover:text-lewis-blue">
                                        Personal
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2">
                                            {navigation.main.find(item => item.name === "Personal")?.children?.map((child) => (
                                                <li key={child.href}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            href={child.href}
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                                                        >
                                                            <div className="text-sm font-medium text-lewis-ink">{child.name}</div>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {/* Business Dropdown */}
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent text-lewis-ink hover:bg-gray-100 hover:text-lewis-blue">
                                        Business
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <ul className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2">
                                            {navigation.main.find(item => item.name === "Business")?.children?.map((child) => (
                                                <li key={child.href}>
                                                    <NavigationMenuLink asChild>
                                                        <Link
                                                            href={child.href}
                                                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-gray-100 focus:bg-gray-100"
                                                        >
                                                            <div className="text-sm font-medium text-lewis-ink">{child.name}</div>
                                                        </Link>
                                                    </NavigationMenuLink>
                                                </li>
                                            ))}
                                        </ul>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/resources" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-lewis-ink transition-colors hover:bg-gray-100 hover:text-lewis-blue focus:bg-gray-100 focus:outline-none">
                                            Resources
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-lewis-ink transition-colors hover:bg-gray-100 hover:text-lewis-blue focus:bg-gray-100 focus:outline-none">
                                            About
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>

                                <NavigationMenuItem>
                                    <NavigationMenuLink asChild>
                                        <Link href="/contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-lewis-ink transition-colors hover:bg-gray-100 hover:text-lewis-blue focus:bg-gray-100 focus:outline-none">
                                            Contact
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>

                    {/* Desktop Right Side */}
                    <div className="hidden lg:flex items-center gap-4">
                        {/* Phone */}
                        <a
                            href={`tel:${siteConfig.contact.phone.main.replace(/[^0-9]/g, "")}`}
                            className="flex items-center gap-2 text-sm text-lewis-body hover:text-lewis-blue transition-colors whitespace-nowrap"
                        >
                            <Phone className="h-4 w-4 flex-shrink-0" />
                            <span>{siteConfig.contact.phone.main}</span>
                        </a>

                        {/* Client Portal */}
                        <Link
                            href="/portal"
                            className="flex items-center gap-2 text-sm text-lewis-body hover:text-lewis-blue transition-colors"
                        >
                            <User className="h-4 w-4" />
                            <span>Client Portal</span>
                        </Link>

                        {/* Licensed Badge */}
                        <Badge variant="secondary" className="hidden xl:flex bg-green-50 text-green-700 border-green-200">
                            Licensed Florida Agency
                        </Badge>

                        {/* Get a Quote Button */}
                        <Button asChild className="btn-accent rounded-full touch-target">
                            <Link href="/contact">Get a Quote</Link>
                        </Button>
                    </div>

                    {/* Mobile Right Side */}
                    <div className="flex lg:hidden items-center gap-3">
                        {/* Click to Call */}
                        <a
                            href={`tel:${siteConfig.contact.phone.main.replace(/[^0-9]/g, "")}`}
                            className="flex items-center justify-center w-10 h-10 rounded-full bg-lewis-blue text-white touch-target"
                            aria-label="Call us"
                        >
                            <Phone className="h-5 w-5" />
                        </a>

                        {/* Mobile Menu */}
                        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                            <SheetTrigger asChild>
                                <Button variant="ghost" size="icon" className="touch-target" aria-label="Open menu">
                                    <Menu className="h-6 w-6" />
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                                <nav className="flex flex-col gap-4 mt-8" aria-label="Mobile navigation">
                                    <Link
                                        href="/"
                                        className="text-lg font-medium text-lewis-ink py-2 border-b border-lewis-border"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Home
                                    </Link>

                                    {/* Personal Section */}
                                    <div className="space-y-2">
                                        <Link
                                            href="/personal"
                                            className="text-lg font-medium text-lewis-ink"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Personal Insurance
                                        </Link>
                                        <div className="pl-4 space-y-2 border-l-2 border-lewis-blue/20">
                                            {navigation.main.find(item => item.name === "Personal")?.children?.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="block text-sm text-lewis-body hover:text-lewis-blue py-1"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Business Section */}
                                    <div className="space-y-2">
                                        <Link
                                            href="/business"
                                            className="text-lg font-medium text-lewis-ink"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            Business Insurance
                                        </Link>
                                        <div className="pl-4 space-y-2 border-l-2 border-lewis-blue/20">
                                            {navigation.main.find(item => item.name === "Business")?.children?.map((child) => (
                                                <Link
                                                    key={child.href}
                                                    href={child.href}
                                                    className="block text-sm text-lewis-body hover:text-lewis-blue py-1"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>

                                    <Link
                                        href="/resources"
                                        className="text-lg font-medium text-lewis-ink py-2 border-b border-lewis-border"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Resources
                                    </Link>

                                    <Link
                                        href="/about"
                                        className="text-lg font-medium text-lewis-ink py-2 border-b border-lewis-border"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        About
                                    </Link>

                                    <Link
                                        href="/contact"
                                        className="text-lg font-medium text-lewis-ink py-2 border-b border-lewis-border"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Contact
                                    </Link>

                                    {/* Utility Links */}
                                    <div className="pt-4 border-t border-lewis-border space-y-3">
                                        <Link
                                            href="/portal"
                                            className="flex items-center gap-2 text-lewis-body hover:text-lewis-blue"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            <User className="h-5 w-5" />
                                            Client Portal
                                        </Link>
                                        <Badge className="bg-green-50 text-green-700 border-green-200">
                                            Licensed Florida Agency
                                        </Badge>
                                    </div>

                                    {/* CTA */}
                                    <div className="pt-4">
                                        <Button asChild className="w-full btn-accent rounded-full touch-target">
                                            <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
                                                Get a Quote
                                            </Link>
                                        </Button>
                                    </div>
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    )
}
