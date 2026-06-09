"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, Variants } from "framer-motion"
import { Brush, Sparkles, Shield, ArrowUpRight, Code, Laptop } from "lucide-react"
import Link from "next/link"

interface WorkItem {
    title: string
    description: string
    icon: any
    tag: string
    status: "Active" | "Beta" | "Concept"
    privacyLink?: string
    accentColor: string
}

const workItems: WorkItem[] = [
    {
        title: "Sweep",
        description: "A secure, lightning-fast utility designed to capture transient notes, snippets, or local nicknames. To respect your digital boundaries, Sweep processes all identification locally and stores absolutely zero data in our database.",
        icon: Brush,
        tag: "Privacy Utility",
        status: "Active",
        privacyLink: "/privacy/sweep",
        accentColor: "from-emerald-500/10 to-teal-500/10 hover:border-emerald-500/30"
    },
    {
        title: "FocusFlow",
        description: "A distraction-free markdown canvas and task manager designed specifically for engineering deep work. Built to sync via secure localized files.",
        icon: Laptop,
        tag: "Developer Tool",
        status: "Beta",
        accentColor: "from-amber-500/10 to-orange-500/10 hover:border-amber-500/30"
    },
    {
        title: "GitTrace",
        description: "An automated git commit history visualizer that generates high-fidelity timelines and metrics for seamless client reporting.",
        icon: Code,
        tag: "Visualization",
        status: "Concept",
        accentColor: "from-blue-500/10 to-indigo-500/10 hover:border-blue-500/30"
    }
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

export function OtherWorksSection() {
    return (
        <section className="relative overflow-hidden bg-muted/30 py-32 md:py-48 border-t border-b border-primary/5">
            {/* Ambient gradients */}
            <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
            <div className="absolute left-[-10%] bottom-[-10%] h-[500px] w-[500px] rounded-full bg-secondary/5 blur-[120px] pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 sm:px-8">
                <div className="mb-24 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="mb-4 inline-flex items-center space-x-2 rounded-full border border-primary/10 bg-primary/5 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-primary"
                    >
                        <Sparkles className="h-3.5 w-3.5" />
                        <span>Product Lab</span>
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-black tracking-tight text-foreground sm:text-6xl lg:text-7xl"
                    >
                        Other <span className="text-primary italic">Works</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed md:text-xl"
                    >
                        Alongside our bespoke client integrations, we build proprietary tools and open-source utilities to optimize daily digital operations.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
                >
                    {workItems.map((item, index) => (
                        <motion.div key={index} variants={itemVariants} className="group h-full">
                            <Card className={`flex flex-col h-full bg-gradient-to-br ${item.accentColor} border border-primary/5 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl glass-border`}>
                                <CardHeader className="flex-none">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white p-2.5 text-primary shadow-sm transition-all duration-500 group-hover:rotate-6 group-hover:bg-primary group-hover:text-white">
                                            <item.icon className="h-6 w-6" />
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <span className="text-[10px] font-black uppercase tracking-wider text-muted-foreground bg-white/60 px-2.5 py-1 rounded-full border border-black/[0.02]">
                                                {item.tag}
                                            </span>
                                            <span className={`text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border ${
                                                item.status === 'Active' 
                                                    ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                                                    : item.status === 'Beta' 
                                                        ? 'bg-amber-50 text-amber-700 border-amber-200'
                                                        : 'bg-blue-50 text-blue-700 border-blue-200'
                                            }`}>
                                                {item.status}
                                            </span>
                                        </div>
                                    </div>
                                    <CardTitle className="text-2xl font-bold tracking-tight text-foreground">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="flex-1 flex flex-col justify-between">
                                    <CardDescription className="text-base leading-relaxed text-muted-foreground/90 mb-8">
                                        {item.description}
                                    </CardDescription>

                                    {item.privacyLink ? (
                                        <div className="flex items-center space-x-4 mt-auto pt-4 border-t border-black/[0.04]">
                                            <Link 
                                                href={item.privacyLink}
                                                className="inline-flex items-center text-sm font-bold text-primary hover:text-primary-foreground/80 group-hover:underline transition-colors"
                                            >
                                                <Shield className="mr-1.5 h-4 w-4" />
                                                Privacy Policy
                                                <ArrowUpRight className="ml-1 h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </Link>
                                        </div>
                                    ) : (
                                        <div className="text-xs font-semibold text-muted-foreground/60 italic mt-auto pt-4 border-t border-black/[0.04]">
                                            Development phase: {item.status}
                                        </div>
                                    )}
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
