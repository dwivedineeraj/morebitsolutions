"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MapPin, Sparkles, ArrowRight, Loader2, CheckCircle2, Code2, Users, Brain, Globe } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

type SubmissionStatus = "idle" | "analyzing" | "matching" | "submitting" | "success" | "error"

const inputCls =
    "flex h-14 w-full rounded-2xl border border-primary/10 bg-white/50 px-5 text-base font-semibold placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all hover:bg-white"
const selectCls =
    "flex h-14 w-full rounded-2xl border border-primary/10 bg-white/50 px-5 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all hover:bg-white cursor-pointer"
const textareaCls =
    "flex min-h-[140px] w-full rounded-2xl border border-primary/10 bg-white/50 px-5 py-4 text-base font-semibold placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all hover:bg-white resize-none"
const labelCls = "block text-xs font-black uppercase tracking-widest text-muted-foreground/60 mb-2"

const REFERRAL_SOURCES = [
    { value: "google", label: "Google Search" },
    { value: "instagram", label: "Instagram" },
    { value: "linkedin", label: "LinkedIn" },
    { value: "twitter", label: "X / Twitter" },
    { value: "youtube", label: "YouTube" },
    { value: "facebook", label: "Facebook" },
    { value: "reddit", label: "Reddit" },
    { value: "hackernews", label: "Hacker News" },
    { value: "producthunt", label: "Product Hunt" },
    { value: "podcast", label: "Podcast / Interview" },
    { value: "referral", label: "Referral from a colleague" },
    { value: "client", label: "Existing client recommendation" },
    { value: "press", label: "News article / Press" },
    { value: "event", label: "Conference / Event" },
    { value: "other", label: "Other (please specify)" },
]

export default function ContactPage() {
    const [status, setStatus] = useState<SubmissionStatus>("idle")
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        subject: "Bespoke ERP Design",
        message: "",
        referral: "",
        referralOther: "",
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("analyzing")
        await new Promise(r => setTimeout(r, 1400))
        setStatus("matching")
        await new Promise(r => setTimeout(r, 1400))
        setStatus("submitting")
        try {
            const referralLabel =
                formData.referral === "other"
                    ? formData.referralOther || "Other"
                    : REFERRAL_SOURCES.find(s => s.value === formData.referral)?.label ?? formData.referral

            const res = await fetch("https://formsubmit.co/ajax/support@morebitsolutions.com", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    company: formData.company,
                    subject: formData.subject,
                    message: formData.message,
                    referral_source: referralLabel,
                    _subject: `[Project Inquiry] ${formData.subject}`,
                    _template: "table",
                }),
            })
            if (!res.ok) throw new Error()
            setStatus("success")
            setFormData({ name: "", email: "", company: "", subject: "Bespoke ERP Design", message: "", referral: "", referralOther: "" })
            setTimeout(() => setStatus("idle"), 5000)
        } catch {
            setStatus("error")
            setTimeout(() => setStatus("idle"), 3000)
        }
    }

    return (
        <div className="flex flex-col min-h-screen">

            {/* ── Hero ── */}
            <section className="relative overflow-hidden bg-background pt-40 pb-24 lg:pt-56 lg:pb-32">
                <div className="absolute inset-0 z-0 mesh-gradient opacity-40" />
                <div className="absolute left-[-8%] top-[5%] h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-pulse-slow" />
                <div className="absolute right-[-5%] bottom-[10%] h-[350px] w-[350px] rounded-full bg-secondary/10 blur-[100px] animate-float" />

                <div className="container relative z-10 px-4 sm:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl"
                    >
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold text-primary">
                            <Sparkles className="h-4 w-4" />
                            <span>Let&apos;s Build Something Remarkable</span>
                        </div>

                        <h1 className="text-5xl font-black tracking-tighter sm:text-7xl lg:text-8xl leading-[0.95] mb-8">
                            Your next big idea<br />
                            deserves{" "}
                            <span
                                style={{
                                    background: "linear-gradient(90deg, #2E7D32 0%, #66bb6a 40%, #2E7D32 60%, #1b5e20 100%)",
                                    backgroundSize: "200% auto",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                    animation: "shimmer 3s linear infinite",
                                }}
                            >
                                the right team.
                            </span>
                        </h1>

                        <p className="text-xl text-muted-foreground leading-relaxed lg:text-2xl max-w-3xl mb-12">
                            We read every submission personally. Describe your challenge and we&apos;ll come back with a clear plan — not a sales pitch.
                        </p>

                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 max-w-2xl">
                            {[
                                { icon: Globe, stat: "10+", label: "Years in Engineering" },
                                { icon: Code2, stat: "50+", label: "Systems Shipped" },
                                { icon: Users, stat: "20+", label: "Enterprise Clients" },
                                { icon: Brain, stat: "∞", label: "Problems Solved" },
                            ].map(({ icon: Icon, stat, label }) => (
                                <motion.div
                                    key={label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="rounded-2xl border border-primary/10 bg-white/50 backdrop-blur-md p-4 text-center glass-border"
                                >
                                    <Icon className="h-4 w-4 text-primary mx-auto mb-2" />
                                    <p className="text-2xl font-black text-foreground">{stat}</p>
                                    <p className="text-[11px] font-bold text-muted-foreground/70 leading-tight mt-1">{label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── Form ── */}
            <section className="py-24 bg-slate-50 relative z-20">
                <div className="container px-4 sm:px-8">
                    <div className="grid gap-12 lg:grid-cols-5">

                        {/* Info card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <Card className="h-full bg-white/40 border border-primary/5 shadow-2xl backdrop-blur-xl glass-border p-8">
                                <CardContent className="p-0 space-y-10">
                                    <div>
                                        <h3 className="text-2xl font-black tracking-tight mb-6">Direct Access</h3>
                                        <div className="space-y-8">
                                            <div className="flex items-start group">
                                                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-primary/10 text-primary mr-5 group-hover:scale-110 transition-transform shrink-0">
                                                    <Mail className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground/60 mb-1">Email</p>
                                                    <a href="mailto:support@morebitsolutions.com" className="text-base font-bold hover:text-primary transition-colors break-all">
                                                        support@morebitsolutions.com
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="flex items-start group">
                                                <div className="h-12 w-12 flex items-center justify-center rounded-2xl bg-secondary/10 text-secondary mr-5 group-hover:scale-110 transition-transform shrink-0">
                                                    <MapPin className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <p className="text-xs font-black uppercase tracking-widest text-muted-foreground/60 mb-1">Headquarters</p>
                                                    <p className="text-base font-bold leading-relaxed">
                                                        Dehradun, Uttarakhand, India<br />
                                                        <span className="text-muted-foreground font-medium">Global Operations</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-2xl bg-primary/5 p-6 border border-primary/10">
                                        <h4 className="font-black text-primary uppercase tracking-widest text-xs mb-2">Enterprise Priority</h4>
                                        <p className="text-sm font-medium text-muted-foreground/80 leading-relaxed">
                                            Dedicated engineering for critical infrastructure. 24/7 proactive monitoring included in all bespoke partnerships.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>

                        {/* Form card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-3"
                        >
                            <Card className="bg-white/60 border border-primary/5 shadow-2xl backdrop-blur-xl glass-border p-8 md:p-12">
                                <CardContent className="p-0">
                                    <form onSubmit={handleSubmit} className="space-y-6">

                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div>
                                                <label className={labelCls}>Full Name</label>
                                                <input required value={formData.name}
                                                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                                                    className={inputCls} placeholder="e.g. Neeraj Dwivedi" />
                                            </div>
                                            <div>
                                                <label className={labelCls}>Work Email</label>
                                                <input type="email" required value={formData.email}
                                                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                                                    className={inputCls} placeholder="you@company.com" />
                                            </div>
                                        </div>

                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div>
                                                <label className={labelCls}>Company / Organisation</label>
                                                <input value={formData.company}
                                                    onChange={e => setFormData(p => ({ ...p, company: e.target.value }))}
                                                    className={inputCls} placeholder="Acme Corp" />
                                            </div>
                                            <div>
                                                <label className={labelCls}>Scope of Work</label>
                                                <select value={formData.subject}
                                                    onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))}
                                                    className={selectCls}>
                                                    <option value="Bespoke ERP Design">Bespoke ERP Design</option>
                                                    <option value="Agentic AI Integration">Agentic AI Integration</option>
                                                    <option value="Private AI Deployment">Private AI Deployment</option>
                                                    <option value="Intelligent Knowledge Base">Intelligent Knowledge Base</option>
                                                    <option value="Lead Management System">Lead Management System</option>
                                                    <option value="Custom Web / Mobile App">Custom Web / Mobile App</option>
                                                    <option value="Architecture Consultation">Architecture Consultation</option>
                                                    <option value="General Inquiry">General Inquiry</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className={labelCls}>Project Brief</label>
                                            <textarea required value={formData.message}
                                                onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                                                className={textareaCls}
                                                placeholder="Describe the unique challenges of your business and what you're trying to achieve…" />
                                        </div>

                                        {/* Referral */}
                                        <div>
                                            <label className={labelCls}>Where did you hear about us?</label>
                                            <select value={formData.referral}
                                                onChange={e => setFormData(p => ({ ...p, referral: e.target.value }))}
                                                className={selectCls}>
                                                <option value="">— Select an option —</option>
                                                {REFERRAL_SOURCES.map(s => (
                                                    <option key={s.value} value={s.value}>{s.label}</option>
                                                ))}
                                            </select>
                                            <AnimatePresence>
                                                {formData.referral === "other" && (
                                                    <motion.div
                                                        initial={{ opacity: 0, height: 0 }}
                                                        animate={{ opacity: 1, height: "auto" }}
                                                        exit={{ opacity: 0, height: 0 }}
                                                        className="overflow-hidden"
                                                    >
                                                        <input
                                                            type="text"
                                                            value={formData.referralOther}
                                                            onChange={e => setFormData(p => ({ ...p, referralOther: e.target.value }))}
                                                            className={`${inputCls} mt-3`}
                                                            placeholder="Tell us where you found us…"
                                                        />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                        {/* Submit */}
                                        <Button
                                            type="submit"
                                            size="lg"
                                            className={`h-16 w-full rounded-2xl text-lg font-black shadow-2xl transition-all duration-500 overflow-hidden relative ${status === "success" ? "bg-green-500 hover:bg-green-500"
                                                : status === "error" ? "bg-red-500 hover:bg-red-500"
                                                    : "bg-primary shadow-primary/20"
                                                }`}
                                            disabled={status !== "idle"}
                                        >
                                            <AnimatePresence mode="wait">
                                                {status === "idle" && (
                                                    <motion.span key="idle" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center gap-2">
                                                        Start the Conversation <ArrowRight className="h-5 w-5" />
                                                    </motion.span>
                                                )}
                                                {status === "analyzing" && (
                                                    <motion.span key="analyzing" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center gap-3">
                                                        <Loader2 className="h-5 w-5 animate-spin" /> Noting down requirements…
                                                    </motion.span>
                                                )}
                                                {status === "matching" && (
                                                    <motion.span key="matching" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center gap-3">
                                                        <Sparkles className="h-5 w-5 animate-pulse" /> Waking up the lead architect…
                                                    </motion.span>
                                                )}
                                                {status === "submitting" && (
                                                    <motion.span key="submitting" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center gap-3">
                                                        <Loader2 className="h-5 w-5 animate-spin" /> Sending your brief…
                                                    </motion.span>
                                                )}
                                                {status === "success" && (
                                                    <motion.span key="success" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex items-center gap-3">
                                                        <CheckCircle2 className="h-5 w-5 text-white" /> Request submitted!
                                                    </motion.span>
                                                )}
                                                {status === "error" && (
                                                    <motion.span key="error" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                                                        Something went wrong. Please try again.
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

        </div>
    )
}
