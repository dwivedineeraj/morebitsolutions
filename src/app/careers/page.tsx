"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import {
    Sparkles, ArrowRight, Zap, Globe, Heart,
    Loader2, CheckCircle2, Briefcase, Code2, Brain
} from "lucide-react"
import { useRef, useState } from "react"

// ─── Styles ────────────────────────────────────────────────────────────────
const inputCls =
    "flex h-14 w-full rounded-2xl border border-primary/10 bg-white/50 px-5 text-base font-semibold placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all hover:bg-white"
const selectCls =
    "flex h-14 w-full rounded-2xl border border-primary/10 bg-white/50 px-5 text-base font-semibold focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all hover:bg-white cursor-pointer"
const textareaCls =
    "flex min-h-[140px] w-full rounded-2xl border border-primary/10 bg-white/50 px-5 py-4 text-base font-semibold placeholder:text-muted-foreground/30 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all hover:bg-white resize-none"
const labelCls = "block text-xs font-black uppercase tracking-widest text-muted-foreground/60 mb-2"

// ─── Referral sources ──────────────────────────────────────────────────────
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

// ─── Open roles ────────────────────────────────────────────────────────────
const OPEN_ROLES = [
    { title: "AI / ML Engineer", type: "Full-Time", location: "Remote / Dehradun" },
    { title: "Senior Full-Stack Architect", type: "Full-Time", location: "Remote / Dehradun" },
    { title: "Product Strategy Lead", type: "Full-Time", location: "Remote / Dehradun" },
    { title: "Sales Lead", type: "Full-Time", location: "Remote / Dehradun" },
]

type SubmissionStatus = "idle" | "analyzing" | "matching" | "submitting" | "success" | "error"

export default function CareersPage() {
    const formRef = useRef<HTMLDivElement>(null)

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        role: "",
        experience: "",
        portfolio: "",
        message: "",
        referral: "",
        referralOther: "",
    })
    const [status, setStatus] = useState<SubmissionStatus>("idle")

    // When a role card's "Apply Now" is clicked, prefill the role and scroll to form
    const handleApplyNow = (roleTitle: string) => {
        setFormData(p => ({ ...p, role: roleTitle }))
        setTimeout(() => {
            formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
        }, 50)
    }

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
                    role_applied: formData.role,
                    years_experience: formData.experience,
                    portfolio_link: formData.portfolio,
                    cover_note: formData.message,
                    referral_source: referralLabel,
                    _subject: `[Career Application] ${formData.role || "Open Application"}`,
                    _template: "table",
                }),
            })
            if (!res.ok) throw new Error()
            setStatus("success")
            setFormData({ name: "", email: "", role: "", experience: "", portfolio: "", message: "", referral: "", referralOther: "" })
            setTimeout(() => setStatus("idle"), 5000)
        } catch {
            setStatus("error")
            setTimeout(() => setStatus("idle"), 3000)
        }
    }

    return (
        <div className="flex flex-col min-h-screen">

            {/* ── Hero ── */}
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

            {/* ── Values / Perks ── */}
            <section className="py-24 bg-muted/30">
                <div className="container px-4 sm:px-8">
                    <div className="grid gap-8 md:grid-cols-3">
                        {[
                            { icon: Zap, title: "Rapid Innovation", description: "Ship meaningful code every week. We don't do red tape; we do results." },
                            { icon: Globe, title: "Remote-First", description: "Work from anywhere in the world. We value talent over time-zones." },
                            { icon: Heart, title: "Ownership Culture", description: "Every team member has a stake in the success of the systems we build." },
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

            {/* ── Open Roles ── */}
            <section className="py-32">
                <div className="container px-4 sm:px-8">
                    <div className="mb-16">
                        <h2 className="text-4xl font-black tracking-tight sm:text-6xl">Open Roles</h2>
                        <p className="mt-4 text-xl text-muted-foreground">
                            Don&apos;t see your role? Apply anyway — scroll down and send us an open application.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {OPEN_ROLES.map((role, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col md:flex-row md:items-center justify-between p-8 rounded-3xl border border-primary/5 bg-white/40 hover:bg-white hover:shadow-xl transition-all"
                            >
                                <div>
                                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{role.title}</h3>
                                    <div className="flex gap-4 mt-2 text-muted-foreground font-medium">
                                        <span>{role.type}</span>
                                        <span>•</span>
                                        <span>{role.location}</span>
                                    </div>
                                </div>
                                <Button
                                    variant="ghost"
                                    className="mt-6 md:mt-0 rounded-xl font-bold"
                                    onClick={() => handleApplyNow(role.title)}
                                >
                                    Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Application Form ── */}
            <section ref={formRef} className="py-24 bg-slate-50 scroll-mt-24">
                <div className="container px-4 sm:px-8">
                    <div className="grid gap-12 lg:grid-cols-5">

                        {/* Left panel */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2"
                        >
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-1.5 text-sm font-bold text-secondary">
                                <Briefcase className="h-4 w-4" />
                                <span>Apply Now</span>
                            </div>

                            {/* Dynamic heading mirrors selected role */}
                            <h2 className="text-4xl font-black tracking-tight sm:text-5xl mb-4 leading-tight">
                                {formData.role
                                    ? <><span className="text-secondary italic">{formData.role}</span><br />application</>
                                    : <>Your open <span className="text-secondary italic">application</span></>
                                }
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                                We read every submission. Be honest, be yourself — that&apos;s what stands out.
                            </p>

                            <Card className="bg-white/40 border border-secondary/10 shadow-xl backdrop-blur-xl glass-border p-8">
                                <CardContent className="p-0 space-y-6">
                                    {[
                                        { icon: Code2, title: "Engineering-first culture", desc: "Your code goes straight to production — no layers of non-technical re-review." },
                                        { icon: Brain, title: "Frontier problems", desc: "Agentic AI, private LLM deployments, complex enterprise systems. Not CRUD apps." },
                                        { icon: Zap, title: "Move at startup speed", desc: "Ship in days, not quarters. We trust our people." },
                                        { icon: Globe, title: "Remote-friendly", desc: "Async-first, results-driven. Work from wherever." },
                                    ].map(({ icon: Icon, title, desc }) => (
                                        <div key={title} className="flex items-start gap-4">
                                            <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-secondary/10 text-secondary shrink-0">
                                                <Icon className="h-5 w-5" />
                                            </div>
                                            <div>
                                                <p className="font-black text-foreground text-sm">{title}</p>
                                                <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{desc}</p>
                                            </div>
                                        </div>
                                    ))}
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
                            <Card className="bg-white/60 border border-secondary/10 shadow-2xl backdrop-blur-xl glass-border p-8 md:p-12">
                                <CardContent className="p-0">
                                    <form onSubmit={handleSubmit} className="space-y-6">

                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div>
                                                <label className={labelCls}>Full Name</label>
                                                <input required value={formData.name}
                                                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                                                    className={inputCls} placeholder="Your name" />
                                            </div>
                                            <div>
                                                <label className={labelCls}>Email</label>
                                                <input type="email" required value={formData.email}
                                                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                                                    className={inputCls} placeholder="you@email.com" />
                                            </div>
                                        </div>

                                        <div className="grid gap-6 sm:grid-cols-2">
                                            <div>
                                                <label className={labelCls}>Role You&apos;re Applying For</label>
                                                <select value={formData.role}
                                                    onChange={e => setFormData(p => ({ ...p, role: e.target.value }))}
                                                    className={selectCls}>
                                                    <option value="">— Select a role —</option>
                                                    <option value="AI / ML Engineer">AI / ML Engineer</option>
                                                    <option value="Senior Full-Stack Architect">Senior Full-Stack Architect</option>
                                                    <option value="Product Strategy Lead">Product Strategy Lead</option>
                                                    <option value="Sales Lead">Sales Lead</option>
                                                    <option value="Open Application">Open Application</option>
                                                </select>
                                            </div>
                                            <div>
                                                <label className={labelCls}>Years of Experience</label>
                                                <select value={formData.experience}
                                                    onChange={e => setFormData(p => ({ ...p, experience: e.target.value }))}
                                                    className={selectCls}>
                                                    <option value="">— Select —</option>
                                                    <option value="0–1 years (Fresher)">0–1 years (Fresher)</option>
                                                    <option value="1–3 years">1–3 years</option>
                                                    <option value="3–6 years">3–6 years</option>
                                                    <option value="6–10 years">6–10 years</option>
                                                    <option value="10+ years">10+ years</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div>
                                            <label className={labelCls}>Portfolio / GitHub / LinkedIn URL</label>
                                            <input type="url" value={formData.portfolio}
                                                onChange={e => setFormData(p => ({ ...p, portfolio: e.target.value }))}
                                                className={inputCls} placeholder="https://github.com/yourhandle" />
                                        </div>

                                        <div>
                                            <label className={labelCls}>Cover Note</label>
                                            <textarea required value={formData.message}
                                                onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                                                className={textareaCls}
                                                placeholder="What makes you different? What have you built that you're most proud of? Be honest, not corporate." />
                                        </div>

                                        {/* Referral source */}
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
                                            className={`h-16 w-full rounded-2xl text-lg font-black shadow-2xl transition-all duration-500 overflow-hidden relative ${
                                                status === "success" ? "bg-green-500 hover:bg-green-500"
                                                : status === "error"  ? "bg-red-500 hover:bg-red-500"
                                                : "bg-secondary shadow-secondary/20"
                                            }`}
                                            disabled={status !== "idle"}
                                        >
                                            <AnimatePresence mode="wait">
                                                {status === "idle" && (
                                                    <motion.span key="idle" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center gap-2">
                                                        Submit Application <ArrowRight className="h-5 w-5" />
                                                    </motion.span>
                                                )}
                                                {status === "analyzing" && (
                                                    <motion.span key="analyzing" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center gap-3">
                                                        <Loader2 className="h-5 w-5 animate-spin" /> Reading your profile…
                                                    </motion.span>
                                                )}
                                                {status === "matching" && (
                                                    <motion.span key="matching" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center gap-3">
                                                        <Sparkles className="h-5 w-5 animate-pulse" /> Checking team fit…
                                                    </motion.span>
                                                )}
                                                {status === "submitting" && (
                                                    <motion.span key="submitting" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -20, opacity: 0 }} className="flex items-center gap-3">
                                                        <Loader2 className="h-5 w-5 animate-spin" /> Sending your application…
                                                    </motion.span>
                                                )}
                                                {status === "success" && (
                                                    <motion.span key="success" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="flex items-center gap-3">
                                                        <CheckCircle2 className="h-5 w-5" /> Application submitted!
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
