"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { services } from "@/lib/services"

const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
]

export function Navbar() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [isServicesOpen, setIsServicesOpen] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const pathname = usePathname()

    React.useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const isActive = (href: string) => {
        if (href === "/" && pathname !== "/") return false
        return pathname === href || pathname.startsWith(href + "/")
    }

    return (
        <header className={cn(
            "fixed top-0 z-50 w-full transition-all duration-500",
            scrolled ? "py-4" : "py-6"
        )}>
            <div className="container mx-auto px-4 sm:px-8">
                <nav className={cn(
                    "relative flex h-16 items-center justify-between px-6 transition-all duration-500 rounded-2xl border",
                    scrolled
                        ? "bg-white/80 backdrop-blur-xl shadow-lg border-primary/5"
                        : "bg-transparent border-transparent"
                )}>
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3 group">
                        <div className="relative h-10 w-10 overflow-hidden rounded-xl bg-white p-1.5 shadow-sm transition-transform group-hover:rotate-12">
                            <Image
                                src="/logo.svg"
                                alt="MoreBit Logo"
                                fill
                                className="object-contain p-1"
                            />
                        </div>
                        <span className="text-xl font-black tracking-tighter text-foreground">
                            More<span className="text-primary italic">Bit</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navItems.map((item) => (
                            <div
                                key={item.href}
                                className="relative group"
                                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
                            >
                                <Link
                                    href={item.href}
                                    className={cn(
                                        "flex items-center space-x-1 text-sm font-bold tracking-tight transition-all hover:text-primary",
                                        isActive(item.href) ? "text-primary" : "text-foreground/70"
                                    )}
                                >
                                    <span>{item.name}</span>
                                    {item.hasDropdown && (
                                        <ChevronDown className={cn(
                                            "h-4 w-4 transition-transform duration-300",
                                            isServicesOpen ? "rotate-180" : ""
                                        )} />
                                    )}
                                </Link>

                                {item.hasDropdown && (
                                    <AnimatePresence>
                                        {isServicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 rounded-2xl border border-primary/10 bg-white p-2 shadow-2xl backdrop-blur-xl"
                                            >
                                                <div className="grid gap-1">
                                                    {services.map((service) => (
                                                        <Link
                                                            key={service.slug}
                                                            href={`/services/${service.slug}`}
                                                            className="flex items-center space-x-3 rounded-xl p-3 transition-colors hover:bg-primary/5 group/item"
                                                            onClick={() => setIsServicesOpen(false)}
                                                        >
                                                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover/item:bg-primary group-hover/item:text-white">
                                                                <service.icon className="h-5 w-5" />
                                                            </div>
                                                            <div>
                                                                <div className="text-sm font-bold text-foreground">
                                                                    {service.title}
                                                                </div>
                                                                <div className="line-clamp-1 text-xs text-foreground/50">
                                                                    {service.description}
                                                                </div>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}

                                {isActive(item.href) && !item.hasDropdown && (
                                    <motion.span
                                        layoutId="nav-dot"
                                        className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-primary"
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Button asChild className="h-11 rounded-xl bg-primary px-6 font-bold text-white shadow-xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all">
                            <Link href="/contact" className="flex items-center">
                                Elevate Your Business <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="rounded-xl p-2 md:hidden hover:bg-muted transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </nav>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute inset-x-4 top-24 z-50 rounded-3xl border border-primary/10 bg-white/95 p-6 shadow-2xl backdrop-blur-xl md:hidden"
                >
                    <div className="flex flex-col space-y-6">
                        {navItems.map((item) => (
                            <div key={item.href} className="space-y-4">
                                <Link
                                    href={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={cn(
                                        "text-2xl font-black tracking-tight transition-colors flex items-center justify-between",
                                        isActive(item.href) ? "text-primary" : "text-foreground/80"
                                    )}
                                >
                                    {item.name}
                                </Link>
                                {item.hasDropdown && (
                                    <div className="grid grid-cols-1 gap-2 pl-4">
                                        {services.map((service) => (
                                            <Link
                                                key={service.slug}
                                                href={`/services/${service.slug}`}
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center space-x-3 rounded-xl p-2 transition-colors hover:bg-primary/5"
                                            >
                                                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                                    <service.icon className="h-4 w-4" />
                                                </div>
                                                <span className="text-lg font-bold text-foreground/70">{service.title}</span>
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="h-px bg-primary/5 w-full" />
                        <Button asChild size="lg" className="h-16 rounded-2xl text-xl font-bold">
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                Contact Us
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            )}
        </header>
    )
}
