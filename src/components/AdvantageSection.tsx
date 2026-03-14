"use client"

import {
    Briefcase,
    Key,
    Zap,
    Wallet,
    BookOpen,
    ArrowUpRight,
    Code2,
    LifeBuoy,
    Share2,
    Activity,
    LucideIcon,
    Bot,
    LineChart
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion, Variants } from "framer-motion"

interface Advantage {
    title: string
    description: string
    icon: LucideIcon
    tag: string
}

const advantages: Advantage[] = [
    {
        title: "Agentic AI & Automation",
        description: "Deploy autonomous digital workers that execute multi-step workflows, replacing rigid rules with intelligent problem-solving.",
        icon: Bot,
        tag: "Efficiency"
    },
    {
        title: "Predictive Analytics",
        description: "Transform raw data into actionable foresight. We build systems that model trends, optimize processes, and predict customer behavior.",
        icon: LineChart,
        tag: "Foresight"
    },
    {
        title: "Business-First Strategy",
        description: "We lead with ROI. Every feature we build is designed to either increase your revenue or decrease your operational costs.",
        icon: Briefcase,
        tag: "ROI Focus"
    },
    {
        title: "100% IP Ownership",
        description: "You own the source code from day one. Full transparency, no hidden fees, and no vendor lock-in that you don't agree to.",
        icon: Key,
        tag: "Full Control"
    },
    {
        title: "Continuous Support",
        description: "Support isn't a ticket; it's a partnership. We provide proactive maintenance and continuous evolution of your platform.",
        icon: LifeBuoy,
        tag: "Evolution"
    },
    {
        title: "Rapid Development",
        description: "Stop waiting months for results. We deliver functional modules in 4-6 week cycles, ensuring immediate ROI and feedback.",
        icon: Zap,
        tag: "Speed"
    },
    {
        title: "Cost-Effective Growth",
        description: "Our architectures are built to scale without exponential costs, keeping your growth lean and sustainable.",
        icon: Wallet,
        tag: "Economics"
    },
    {
        title: "Knowledge Transfer",
        description: "We don't keep you in the dark. We train your internal teams and provide extensive documentation for every module.",
        icon: BookOpen,
        tag: "Enablement"
    },
    {
        title: "Seamless Scaling",
        description: "As your user base grows, our engagement scale with you. Easily ramp up resources as your product hits new milestones.",
        icon: ArrowUpRight,
        tag: "Agility"
    },
    {
        title: "10+ Years of Solutions",
        description: "Deep engineering expertise of designing and building complex and scalable systems across various industries.",
        icon: Code2,
        tag: "Trust"
    },
    {
        title: "Systems Integration",
        description: "Bridge the gap between your CRM, ERP, and internal tools with advanced integrations that eliminate data silos.",
        icon: Share2,
        tag: "Integration"
    },
    {
        title: "Operational Excellence",
        description: "Systems designed for 99.9% uptime, handling complex workflows with ease and industrial reliability.",
        icon: Activity,
        tag: "Stability"
    },
]

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
}

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
}

export function AdvantageSection() {
    return (
        <section className="relative overflow-hidden bg-background py-32 md:py-48">
            {/* Background visual detail */}
            <div className="absolute right-0 top-0 h-96 w-96 bg-primary/5 blur-[100px]" />
            <div className="absolute left-0 bottom-0 h-96 w-96 bg-secondary/5 blur-[100px]" />

            <div className="container relative z-10 mx-auto px-4 sm:px-8">
                <div className="mb-24 flex flex-col items-center text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-black uppercase tracking-widest text-primary/60"
                    >
                        The MoreBit Methodology
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="mt-4 text-4xl font-black tracking-tight text-foreground sm:text-6xl lg:text-8xl"
                    >
                        Enterprise Engineering <br /> built for <span className="text-secondary italic">Scale</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mx-auto mt-8 max-w-4xl text-xl text-muted-foreground leading-relaxed lg:text-3xl"
                    >
                        Bespoke software isn&apos;t just about code. It&apos;s about architecting a foundation for your
                        business to grow <span className="text-primary font-semibold underline decoration-primary/20 decoration-4 underline-offset-8">without limits</span>.
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                >
                    {advantages.map((item, index) => (
                        <motion.div key={index} variants={itemVariants} className="group">
                            <Card className="h-full border border-primary/5 bg-white/40 shadow-xl shadow-black/[0.02] backdrop-blur-md transition-all duration-500 hover:-translate-y-2 hover:bg-white/90 hover:shadow-primary/10 glass-border">
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:rotate-6">
                                            <item.icon className="h-7 w-7" />
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground bg-muted/30 px-3 py-1.5 rounded-full border border-black/[0.03]">
                                            {item.tag}
                                        </span>
                                    </div>
                                    <CardTitle className="text-2xl font-bold tracking-tight">{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <CardDescription className="text-base leading-relaxed text-muted-foreground/80 lg:text-lg">
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
