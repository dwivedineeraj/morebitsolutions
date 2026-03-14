"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Sparkles, ArrowRight, Zap, Globe, Heart } from "lucide-react"
import Link from "next/link"

export default function CareersPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-background py-32 lg:py-48">
                <div className="absolute inset-0 z-0 mesh-gradient opacity-40" />
                <div className="container relative z-10 px-4 sm:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8 inline-flex items-center rounded-full bg-white/60 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-md border glass-border"
                    >
                        <Sparkles className="mr-2 h-4 w-4" />
                        <span>Work on the Future of Enterprise AI</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-black tracking-tighter sm:text-7xl lg:text-9xl mb-8"
                    >
                        Join the <span className="text-secondary italic">MoreBit</span> Team
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="max-w-3xl mx-auto text-xl text-muted-foreground leading-relaxed lg:text-3xl"
                    >
                        We&apos;re looking for visionary engineers, designers, and strategists
                        who want to redefine how businesses operate through intelligent
                        ecosystems and Agentic AI.
                    </motion.p>
                </div>
            </section>

            {/* Values/Perks */}
            <section className="py-24 bg-muted/30">
                <div className="container px-4 sm:px-8">
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            {
                                icon: Zap,
                                title: "Rapid Innovation",
                                description: "Ship meaningful code every week. We don't do red tape; we do results."
                            },
                            {
                                icon: Globe,
                                title: "Remote-First",
                                description: "Work from anywhere in the world. We value talent over time-zones."
                            },
                            {
                                icon: Heart,
                                title: "Ownership Culture",
                                description: "Every team member has a stake in the success of the systems we build."
                            }
                        ].map((perk, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/40 p-10 rounded-3xl border border-primary/5 backdrop-blur-md"
                            >
                                <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                                    <perk.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-2xl font-black mb-4">{perk.title}</h3>
                                <p className="text-muted-foreground text-lg leading-relaxed">{perk.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Current Openings */}
            <section className="py-32">
                <div className="container px-4 sm:px-8">
                    <div className="mb-16">
                        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Open Roles</h2>
                        <p className="mt-4 text-xl text-muted-foreground">Don&apos;t see your role? Reach out anyway.</p>
                    </div>

                    <div className="space-y-4">
                        {[
                            { title: "AI/ML Engineer", type: "Full-Time", location: "Remote / Bengaluru" },
                            { title: "Senior Full-Stack Architect", type: "Full-Time", location: "Remote" },
                            { title: "Product Strategy Lead", type: "Full-Time", location: "Remote / Mumbai" }
                        ].map((role, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl border border-primary/5 bg-white/40 hover:bg-white hover:shadow-xl transition-all cursor-pointer"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{role.title}</h3>
                                    <div className="flex gap-4 mt-2 text-muted-foreground font-medium">
                                        <span>{role.type}</span>
                                        <span>•</span>
                                        <span>{role.location}</span>
                                    </div>
                                </div>
                                <Button asChild variant="ghost" className="mt-6 md:mt-0 rounded-xl font-bold">
                                    <Link href="/contact" className="flex items-center">
                                        Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
