"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Linkedin, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

const team = [
    {
        name: "Neeraj Dwivedi",
        role: "Co-founder & Chief Architect",
        bio: "Leading our technical vision with deep expertise in full-stack architecture and system design.",
        image: "/images/team/neeraj.jpeg",
    },
    {
        name: "Sukhi",
        role: "Co-founder & Product Lead",
        bio: "Expert in cloud architecture and building highly responsive ERP platforms.",
        image: "/images/team/sukhi.jpg",
    },
    {
        name: "Rohan Kapoor",
        role: "Lead Developer",
        bio: "Developing intuitive user interfaces for complex industrial integrations.",
        image: "/images/team/rohan.png",
    },
]

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Premium Header */}
            <section className="relative overflow-hidden bg-background py-32 lg:py-48">
                <div className="absolute inset-0 z-0 mesh-gradient opacity-40" />
                <div className="absolute right-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-slow" />

                <div className="container relative z-10 px-4 sm:px-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="mb-8 inline-flex items-center rounded-full bg-white/60 px-4 py-1.5 text-sm font-semibold text-primary shadow-sm backdrop-blur-md border glass-border"
                    >
                        <Sparkles className="mr-2 h-4 w-4" />
                        <span>The MoreBit Philosophy</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl font-black tracking-tighter sm:text-7xl lg:text-8xl mb-8"
                    >
                        Engineering with <span className="text-primary italic underline decoration-primary/20 decoration-8 underline-offset-12">Empathy</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="max-w-4xl text-xl text-muted-foreground leading-relaxed lg:text-3xl"
                    >
                        We don&apos;t start with code; we start with your business goals.
                        We architect solutions that address the specific friction points
                        in your unique operations. Our mission is bespoke innovation that
                        scales with your vision.
                    </motion.p>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 md:py-32">
                <div className="container px-4 sm:px-8">
                    <div className="mb-20">
                        <h2 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">The Core Team</h2>
                        <p className="mt-6 text-xl text-muted-foreground lg:text-2xl">Driven by experts committed to your technical excellence.</p>
                    </div>

                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {team.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Card className="overflow-hidden bg-white/40 border border-primary/5 shadow-xl backdrop-blur-md glass-border group">
                                    <div className="aspect-square w-full relative bg-primary/5 flex items-center justify-center text-6xl font-black text-primary/10 transition-all duration-500 group-hover:bg-primary/10">
                                        {'image' in member ? (
                                            <Image 
                                                src={member.image as string} 
                                                alt={member.name}
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        ) : (
                                            (member as {initials: string}).initials
                                        )}
                                    </div>
                                    <CardContent className="p-8">
                                        <h3 className="text-2xl font-bold tracking-tight">{member.name}</h3>
                                        <p className="text-lg font-bold text-primary mb-4">{member.role}</p>
                                        <p className="text-muted-foreground text-base leading-relaxed mb-6">{member.bio}</p>
                                        <div className="flex gap-4">
                                            <Link href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted/50 text-muted-foreground hover:bg-primary hover:text-white transition-all">
                                                <Linkedin size={20} />
                                            </Link>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="relative overflow-hidden py-32 bg-secondary text-secondary-foreground">
                <div className="absolute right-[-10%] bottom-[-10%] h-[400px] w-[400px] rounded-full bg-white/5 blur-[100px] animate-pulse-slow" />

                <div className="container relative z-10 px-4 sm:px-8 text-center">
                    <h2 className="text-4xl font-black tracking-tight sm:text-6xl mb-20 leading-tight">Our Artisan <br /> Principles</h2>
                    <div className="grid gap-10 sm:grid-cols-3 text-left">
                        {[
                            {
                                title: "Transparency",
                                desc: "No hidden costs, no obfuscated code. You know exactly what we build and why we build it."
                            },
                            {
                                title: "Ownership",
                                desc: "We believe you should own the technology that powers your business. 100% IP rights from day one."
                            },
                            {
                                title: "Longevity",
                                desc: "Systems built to last decades, not just until the next trend. We engineer for the long-term asset."
                            }
                        ].map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/10 p-10 rounded-3xl backdrop-blur-xl border border-white/10"
                            >
                                <CheckCircle2 className="h-10 w-10 text-primary mb-6" />
                                <h3 className="font-extrabold text-2xl mb-4 tracking-tight">{v.title}</h3>
                                <p className="text-white/70 text-lg leading-relaxed">{v.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
