"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
    return (
        <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden bg-background py-32">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 z-0 mesh-gradient opacity-60" />

            {/* Organic Animated Shapes */}
            <div className="absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-slow" />
            <div className="absolute right-[-5%] bottom-[5%] h-[400px] w-[400px] rounded-full bg-secondary/10 blur-[100px] animate-float" />

            <div className="container relative z-10 mx-auto px-4 sm:px-8">
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 inline-flex items-center rounded-full bg-white/60 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-md border glass-border"
                    >
                        <Sparkles className="mr-2 h-4 w-4" />
                        <span>Custom Software, AI Systems & Specialized Engineering</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="max-w-5xl text-5xl font-black tracking-tighter text-foreground sm:text-7xl md:text-8xl lg:text-9xl"
                    >
                        Because your business <br /> is <span className="text-primary relative inline-block">
                            unique
                            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 100 12" preserveAspectRatio="none">
                                <path d="M0,10 C30,2 70,2 100,10" stroke="currentColor" strokeWidth="3" fill="none" className="text-primary/30" />
                            </svg>
                        </span>.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="mt-10 max-w-3xl text-xl text-muted-foreground sm:text-2xl leading-relaxed lg:text-3xl"
                    >
                        We build <span className="text-primary font-bold">custom software</span> and <span className="text-primary font-bold">intelligent AI agents</span>
                        tailored to your operational needs. No compromises.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="mt-16 flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0"
                    >
                        <Button size="lg" className="h-16 px-10 text-xl font-bold shadow-2xl shadow-primary/30 hover:scale-105 transition-all active:scale-95" asChild>
                            <Link href="/contact">
                                Start Your Project <ArrowRight className="ml-2 h-6 w-6" />
                            </Link>
                        </Button>
                        <Button variant="outline" size="lg" className="h-16 px-10 text-xl font-bold backdrop-blur-md hover:bg-white/80 transition-all border-primary/20" asChild>
                            <Link href="/products">View Products</Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
