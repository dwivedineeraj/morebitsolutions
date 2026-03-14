import { CheckCircle2, Headphones, Layers, ShieldCheck, Zap, Globe, Cpu, Users, Bot, Database } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const services = [
    {
        title: "Technology Strategy",
        description: "We help you navigate the complex landscape of enterprise technology. From digital transformation roadmaps to architectural reviews, our consultants ensure your tech alignment with business goals.",
        icon: Globe,
        tags: ["Transformation", "Architecture", "Scaling"]
    },
    {
        title: "Data Engineering for AI",
        description: "Build the foundation for intelligent systems. We specialize in data consolidation, pipeline automation, and preparing your enterprise data for AI/ML readiness.",
        icon: Database,
        tags: ["Big Data", "Data Lakes", "MLOps"]
    },
    {
        title: "AI Agents & Automation",
        description: "Transform your operations with intelligent agents capable of autonomous decision-making, natural language processing, and complex multi-step workflow execution.",
        icon: Bot,
        tags: ["LLMs", "Agents", "Workflow Automation"]
    },
    {
        title: "Bespoke Engineering",
        description: "Beyond off-the-shelf solutions. We build mission-critical applications tailored to your unique operational flows, ensuring maximum efficiency and competitive advantage.",
        icon: Cpu,
        tags: ["Full-Stack", "Mobile", "Cloud-Native"]
    },
    {
        title: "System Modernization",
        description: "Breathe new life into your existing systems. We specialize in migrating legacy monoliths to modern, scalable microservices architectures without disrupting your business.",
        icon: Layers,
        tags: ["Migration", "Refactoring", "Optimization"]
    },
    {
        title: "Security & Compliance",
        description: "Protect your digital assets with enterprise-grade security. We conduct thorough audits, penetration testing, and ensure your systems meet global compliance standards.",
        icon: ShieldCheck,
        tags: ["Audit", "SRE", "Cybersecurity"]
    }
]

const supportPackages = [
    {
        name: "Standard",
        description: "Essential support for maintaining stable operations.",
        price: "Contact for Pricing",
        features: [
            "Business Day Support (9-5)",
            "Email & Ticket Support",
            "48-hour Response Time",
            "Access to Documentation",
            "Core Security Updates"
        ],
        highlighted: false
    },
    {
        name: "Premium",
        description: "Priority support for high-growth businesses.",
        price: "Contact for Pricing",
        features: [
            "24/7 Critical Support",
            "Priority Ticket Handling",
            "4-hour Response Time",
            "Dedicated Support Channel",
            "Quarterly Health Audits",
            "Infrastructure Optimization"
        ],
        highlighted: true
    },
    {
        name: "Enterprise",
        description: "Total engineering partnership for global scale.",
        price: "Custom Quote",
        features: [
            "15-minute Critical Response",
            "Dedicated Solutions Architect",
            "On-site Engineering Support",
            "Custom SLA Agreements",
            "Full Ecosystem Monitoring",
            "Direct Engineering Liaison"
        ],
        highlighted: false
    }
]

export default function ServicesPage() {
    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-background pt-32 pb-16 lg:pt-48 lg:pb-24">
                <div className="absolute inset-0 z-0 mesh-gradient opacity-30" />
                <div className="absolute left-[-10%] top-[10%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px] animate-pulse-slow" />

                <div className="container relative z-10 px-4 sm:px-8">
                    <div className="max-w-4xl space-y-8">
                        <div className="inline-flex items-center space-x-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-bold tracking-tight text-primary">
                            <Users className="h-4 w-4" />
                            <span>Engineering Excellence</span>
                        </div>
                        <h1 className="text-5xl font-black tracking-tighter sm:text-7xl lg:text-8xl">
                            Specialized <span className="text-primary italic">Services</span> & Support
                        </h1>
                        <p className="text-2xl text-muted-foreground leading-relaxed lg:text-3xl max-w-3xl">
                            We don&apos;t just provide software; we provide the engineering infrastructure and expert guidance needed to scale your business into the future.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container px-4 sm:px-8">
                    <div className="mb-20 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl font-black tracking-tight sm:text-5xl mb-6">Expertise at Your Service</h2>
                        <p className="text-xl text-muted-foreground">Deep domain expertise across the entire spectrum of modern enterprise engineering.</p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-2">
                        {services.map((service, i) => (
                            <div key={i} className="group p-10 rounded-3xl border border-black/5 bg-white shadow-xl shadow-black/[0.02] hover:shadow-primary/5 hover:border-primary/20 transition-all">
                                <div className="mb-8 rounded-2xl bg-primary/10 p-5 w-fit text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <service.icon className="h-8 w-8" />
                                </div>
                                <h3 className="text-3xl font-black text-foreground mb-4 leading-tight">{service.title}</h3>
                                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">{service.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {service.tags.map((tag, j) => (
                                        <span key={j} className="px-4 py-1.5 rounded-full bg-secondary/5 border border-secondary/10 text-sm font-bold tracking-tight text-secondary">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Support Packages */}
            <section className="py-24 bg-background">
                <div className="container px-4 sm:px-8 text-center max-w-6xl">
                    <div className="mb-20">
                        <div className="inline-flex items-center space-x-2 rounded-full border border-secondary/20 bg-secondary/5 px-4 py-1.5 text-sm font-bold tracking-tight text-secondary mb-6">
                            <Headphones className="h-4 w-4" />
                            <span>Unrivaled Support</span>
                        </div>
                        <h2 className="text-3xl font-black tracking-tight sm:text-5xl mb-6">Support Engineering</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Choose a support tier that aligns with your operational criticality and growth velocity.</p>
                    </div>

                    <div className="grid gap-8 lg:grid-cols-3">
                        {supportPackages.map((pkg, i) => (
                            <div
                                key={i}
                                className={`relative p-10 rounded-[2.5rem] border transition-all text-left flex flex-col ${pkg.highlighted
                                    ? "bg-white border-primary shadow-2xl scale-105 z-10"
                                    : "bg-white/50 border-black/5 hover:border-primary/20"
                                    }`}
                            >
                                {pkg.highlighted && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-6 py-2 rounded-full bg-primary text-white text-sm font-black uppercase tracking-widest shadow-xl shadow-primary/30">
                                        Most Popular
                                    </div>
                                )}
                                <div className="mb-8">
                                    <h3 className="text-3xl font-black mb-2">{pkg.name}</h3>
                                    <p className="text-muted-foreground font-medium">{pkg.description}</p>
                                </div>
                                <div className="mb-10 p-6 rounded-2xl bg-slate-50 border border-black/5">
                                    <span className="text-2xl font-black tracking-tight">{pkg.price}</span>
                                </div>
                                <div className="space-y-4 mb-12 flex-grow">
                                    {pkg.features.map((feature, j) => (
                                        <div key={j} className="flex items-start gap-3">
                                            <CheckCircle2 className={`h-5 w-5 mt-0.5 ${pkg.highlighted ? "text-primary" : "text-muted-foreground/50"}`} />
                                            <span className="font-bold text-foreground/80 leading-snug">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                                <Button className={`w-full h-16 rounded-2xl text-xl font-bold shadow-xl transition-all ${pkg.highlighted ? "bg-primary shadow-primary/20 hover:scale-105" : "bg-foreground shadow-black/10 hover:scale-105"
                                    }`} asChild>
                                    <Link href="/contact">Select Package</Link>
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 container px-4 sm:px-8">
                <div className="relative p-12 lg:p-24 rounded-[3rem] bg-foreground text-background overflow-hidden">
                    <div className="absolute right-[-5%] top-[-10%] h-[600px] w-[600px] rounded-full bg-primary/10 blur-[150px]" />
                    <div className="relative z-10 max-w-4xl flex flex-col lg:flex-row items-center gap-12">
                        <div className="space-y-8 flex-grow">
                            <h2 className="text-4xl font-black tracking-tighter sm:text-6xl">Need a bespoke <span className="text-primary italic">partnership?</span></h2>
                            <p className="text-xl text-background/70 leading-relaxed lg:text-2xl max-w-2xl">
                                Every enterprise is unique. If your requirements don&apos;t fit into our standard packages, our engineering leadership will work with you to design a custom framework.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button className="h-16 px-10 rounded-2xl text-xl font-bold bg-primary hover:bg-primary/90 hover:scale-105 transition-all text-white border-transparent" asChild>
                                    <Link href="/contact">Request Engineering Consultation</Link>
                                </Button>
                                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                                    <Zap className="h-5 w-5 text-primary" />
                                    <span className="text-sm font-bold uppercase tracking-wider text-white">Direct Engineering Access</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
