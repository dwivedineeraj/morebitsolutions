"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Sparkles, ArrowRight, Loader2, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type SubmissionStatus = "idle" | "analyzing" | "matching" | "submitting" | "success" | "error"

export default function ContactPage() {
    const [status, setStatus] = useState<SubmissionStatus>("idle")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "Bespoke ERP Design",
        message: ""
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        // Start "Intelligent" Flow
        setStatus("analyzing")
        await new Promise(r => setTimeout(r, 1500))

        setStatus("matching")
        await new Promise(r => setTimeout(r, 1500))

        setStatus("submitting")

        try {
            const response = await fetch("https://formsubmit.co/ajax/support@morebitsolutions.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `[Bespoke Inquiry] ${formData.subject}`,
                    _template: "table"
                }),
            })

            if (!response.ok) throw new Error("Failed to send message")

            setStatus("success")
            setFormData({ name: "", email: "", subject: "Bespoke ERP Design", message: "" })

            // Revert to idle after 5 seconds
            setTimeout(() => setStatus("idle"), 5000)
        } catch (error) {
            console.error(error)
            setStatus("error")
            setTimeout(() => setStatus("idle"), 3000)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Premium Header */}
            <section className="relative overflow-hidden bg-background py-10 lg:py-10">

            </section >

            <section className="py-24 -mt-20 relative z-20">
                <div className="container px-4 sm:px-8">
                    <div className="grid gap-12 lg:grid-cols-5">
                        {/* Contact Info Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <Card className="h-full bg-white/40 border border-primary/5 shadow-2xl backdrop-blur-xl glass-border p-10">
                                <CardContent className="p-0 space-y-12">
                                    <div>
                                        <h3 className="text-3xl font-black tracking-tight mb-8">Direct Access</h3>
                                        <div className="space-y-10">
                                            <div className="flex items-start group">
                                                <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mr-6 group-hover:scale-110 transition-transform">
                                                    <Mail className="h-7 w-7" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-black uppercase tracking-widest text-muted-foreground/60 mb-1">Email</p>
                                                    <a href="mailto:support@morebitsolutions.com" className="text-xl font-bold hover:text-primary transition-colors">
                                                        support@morebitsolutions.com
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="flex items-start group">
                                                <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-secondary/10 text-secondary mr-6 group-hover:scale-110 transition-transform">
                                                    <MapPin className="h-7 w-7" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-black uppercase tracking-widest text-muted-foreground/60 mb-1">Headquarters</p>
                                                    <p className="text-xl font-bold leading-relaxed">
                                                        Bengaluru, India<br />
                                                        <span className="text-muted-foreground font-medium">Global Operations</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-3xl bg-primary/5 p-8 border border-primary/10">
                                        <h4 className="font-black text-primary uppercase tracking-widest text-xs mb-3">Enterprise Priority</h4>
                                        <p className="text-base font-medium text-muted-foreground/80 leading-relaxed">
                                            Dedicated support engineering for critical infrastructure environments. 24/7 proactive monitoring included in all bespoke partnerships.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <Card className="h-full bg-white/60 border border-primary/5 shadow-2xl backdrop-blur-xl glass-border p-10 md:p-16">
                                <CardContent className="p-0">
                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid gap-8 sm:grid-cols-2">
                                            <div className="space-y-3">
                                                <label htmlFor="name" className="text-sm font-black uppercase tracking-widest text-muted-foreground/60">Full Name</label>
                                                <input
                                                    id="name"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="flex h-16 w-full rounded-2xl border border-primary/10 bg-white/50 px-6 text-lg font-bold placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all hover:bg-white"
                                                    placeholder="e.g. Neeraj Dwivedi"
                                                />
                                            </div>
                                            <div className="space-y-3">
                                                <label htmlFor="email" className="text-sm font-black uppercase tracking-widest text-muted-foreground/60">Email</label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    className="flex h-16 w-full rounded-2xl border border-primary/10 bg-white/50 px-6 text-lg font-bold placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all hover:bg-white"
                                                    placeholder="you@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <label htmlFor="subject" className="text-sm font-black uppercase tracking-widest text-muted-foreground/60">Implementation Scope</label>
                                            <select
                                                id="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                className="flex h-16 w-full rounded-2xl border border-primary/10 bg-white/50 px-6 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all hover:bg-white cursor-pointer"
                                            >
                                                <option value="Bespoke ERP Design">Bespoke ERP Design</option>
                                                <option value="Agentic AI Integration">Agentic AI Integration</option>
                                                <option value="Asset Architecture Consultation">Asset Architecture Consultation</option>
                                                <option value="General Inquiry">General Inquiry</option>
                                            </select>
                                        </div>

                                        <div className="space-y-3">
                                            <label htmlFor="message" className="text-sm font-black uppercase tracking-widest text-muted-foreground/60">Project DNA</label>
                                            <textarea
                                                id="message"
                                                required
                                                value={formData.message}
                                                onChange={handleChange}
                                                className="flex min-h-[160px] w-full rounded-2xl border border-primary/10 bg-white/50 px-6 py-4 text-lg font-bold placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all hover:bg-white"
                                                placeholder="Describe the unique challenges of your business..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            size="lg"
                                            className={`h-20 w-full rounded-2xl text-xl font-black shadow-2xl transition-all duration-500 overflow-hidden relative ${status === "success" ? "bg-green-500 hover:bg-green-500" :
                                                status === "error" ? "bg-red-500 hover:bg-red-500" :
                                                    "bg-primary shadow-primary/20"
                                                }`}
                                            disabled={status !== "idle"}
                                        >
                                            <AnimatePresence mode="wait">
                                                {status === "idle" && (
                                                    <motion.span
                                                        key="idle"
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        exit={{ y: -20, opacity: 0 }}
                                                        className="flex items-center"
                                                    >
                                                        Initiate Scoping Session <ArrowRight className="ml-2 h-6 w-6" />
                                                    </motion.span>
                                                )}
                                                {status === "analyzing" && (
                                                    <motion.span
                                                        key="analyzing"
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        exit={{ y: -20, opacity: 0 }}
                                                        className="flex items-center gap-3"
                                                    >
                                                        <Loader2 className="h-6 w-6 animate-spin" />
                                                        Noting down requirements...
                                                    </motion.span>
                                                )}
                                                {status === "matching" && (
                                                    <motion.span
                                                        key="matching"
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        exit={{ y: -20, opacity: 0 }}
                                                        className="flex items-center gap-3"
                                                    >
                                                        <Sparkles className="h-6 w-6 animate-pulse" />
                                                        Waking up the lead architect with fresh cold brew...
                                                    </motion.span>
                                                )}
                                                {status === "submitting" && (
                                                    <motion.span
                                                        key="submitting"
                                                        initial={{ y: 20, opacity: 0 }}
                                                        animate={{ y: 0, opacity: 1 }}
                                                        exit={{ y: -20, opacity: 0 }}
                                                        className="flex items-center gap-3"
                                                    >
                                                        <Loader2 className="h-6 w-6 animate-spin" />
                                                        Initializing Project DNA...
                                                    </motion.span>
                                                )}
                                                {status === "success" && (
                                                    <motion.span
                                                        key="success"
                                                        initial={{ scale: 0.8, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                        className="flex items-center gap-3"
                                                    >
                                                        <CheckCircle2 className="h-6 w-6 text-white" />
                                                        Request successfully submitted!
                                                    </motion.span>
                                                )}
                                                {status === "error" && (
                                                    <motion.span
                                                        key="error"
                                                        initial={{ scale: 0.8, opacity: 0 }}
                                                        animate={{ scale: 1, opacity: 1 }}
                                                    >
                                                        Transmission Interrupted.
                                                    </motion.span>
                                                )}
                                            </AnimatePresence>
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div >
    )
}
