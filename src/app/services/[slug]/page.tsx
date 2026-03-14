"use client"

import { useParams, useRouter } from "next/navigation"
import { services } from "@/lib/services"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle2, Sparkles, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function ServiceDetailPage() {
    const { slug } = useParams()
    const router = useRouter()
    const service = services.find(s => s.slug === slug)

    if (!service) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
                <h1 className="text-4xl font-black mb-4">Service Not Found</h1>
                <p className="text-xl text-muted-foreground mb-8">The engineering scope you are looking for does not exist.</p>
                <Button onClick={() => router.push("/services")}>Back to Services</Button>
            </div>
        )
    }

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header / Hero */}
            <section className="relative overflow-hidden bg-background pt-24 pb-12 lg:pt-32 lg:pb-16 mt-16">
                <div className="absolute inset-0 z-0 mesh-gradient opacity-20" />
                <div className="container relative z-10 px-4 sm:px-8">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-7xl"
                    >
                        <Link 
                            href="/services" 
                            className="inline-flex items-center text-sm font-bold text-primary mb-12 hover:translate-x-[-4px] transition-transform"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                        </Link>
                        
                        <div className="flex items-center space-x-4 mb-8">
                            <div className="h-16 w-16 flex items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                <service.icon className="h-8 w-8" />
                            </div>
                            <div className="h-px flex-grow bg-primary/10" />
                        </div>

                        <h1 className="text-4xl font-black tracking-tighter sm:text-6xl lg:text-7xl mb-6 leading-none">
                            {service.title.split(' ')[0]} <span className="text-primary italic">{service.title.split(' ').slice(1).join(' ')}</span>
                        </h1>
                        
                        <p className="text-xl text-muted-foreground leading-relaxed lg:text-3xl max-w-5xl">
                            {service.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Deep Dive */}
            <section className="py-24 bg-slate-50 relative z-10 -mt-10 rounded-t-[3rem] border-t border-primary/5">
                <div className="container px-4 sm:px-8">
                    <div className="grid gap-16 lg:grid-cols-2 items-center">
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-sm font-black uppercase tracking-widest text-primary mb-4 flex items-center">
                                    <Sparkles className="mr-2 h-4 w-4" /> Technical Deep Dive
                                </h2>
                                <p className="text-2xl font-bold leading-relaxed text-foreground">
                                    {service.fullDescription}
                                </p>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                {service.features.map((feature, i) => (
                                    <div key={i} className="flex items-center p-4 rounded-2xl bg-white border border-black/5 shadow-sm">
                                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                                        <span className="font-bold text-foreground/80">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                            <Image 
                                src={service.image} 
                                alt={service.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-10 left-10 right-10">
                                <p className="text-white/80 font-bold text-sm uppercase tracking-widest mb-2">Operational Context</p>
                                <p className="text-white text-xl font-bold italic">&quot;We build systems that adapt to your business, not the other way around.&quot;</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Case Studies */}
            {service.caseStudies && (
                <section className="py-24 bg-background">
                    <div className="container px-4 sm:px-8">
                        <h2 className="text-4xl font-black tracking-tight mb-16">Proof of <span className="text-primary italic">Value</span></h2>
                        <div className="grid gap-8 md:grid-cols-2">
                            {service.caseStudies.map((study) => (
                                <div key={study.title} className="p-10 rounded-3xl bg-slate-50 border border-black/5 hover:border-primary/20 transition-all">
                                    <h3 className="text-2xl font-black mb-4">{study.title}</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">{study.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA */}
            <section className="py-24 container px-4 sm:px-8">
                <div className="relative p-12 lg:p-24 rounded-[3rem] bg-foreground text-background overflow-hidden text-center">
                    <div className="absolute inset-0 mesh-gradient opacity-10" />
                    <div className="relative z-10 max-w-3xl mx-auto space-y-10">
                        <h2 className="text-5xl font-black tracking-tighter sm:text-7xl">Ready for <br /> <span className="text-primary italic">Precision</span> Engineering?</h2>
                        <p className="text-xl text-background/60 leading-relaxed font-medium">
                            Let&apos;s sync to discuss how our {service.title} can be tailored to your unique architectural requirements.
                        </p>
                        <Button size="lg" className="h-20 px-12 rounded-2xl text-2xl font-black bg-primary text-white hover:scale-105 transition-all" asChild>
                            <Link href="/contact" className="flex items-center">
                                Start Intake <ArrowRight className="ml-3 h-8 w-8" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
