"use client"

import { motion } from "framer-motion"

const clients = [
    { name: "Vaidant Dental", slug: "vaidant-dental" },
    { name: "MyAdvo", slug: "myadvo" },
    { name: "7OceansMusic", slug: "7oceansmusic" },
    { name: "UbuNanny", slug: "ubunanny" },
    { name: "Pushkar Scents", slug: "pushkar-scents" },
]

export function ClientsSection() {
    return (
        <section className="relative overflow-hidden bg-muted/30 py-24">
            <div className="container relative z-10 mx-auto px-4 sm:px-8">
                <div className="mb-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-sm font-black uppercase tracking-widest text-primary/60"
                    >
                        Trusted By Industry Leaders
                    </motion.h2>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:gap-12">
                    {clients.map((client, index) => (
                        <motion.div
                            key={client.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: index * 0.1,
                                duration: 0.8,
                                ease: [0.21, 0.47, 0.32, 0.98]
                            }}
                            className="group relative"
                        >
                            <div className="relative flex min-h-[140px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl border border-primary/5 bg-white/40 p-8 text-center transition-all duration-500 hover:border-primary/20 hover:bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] glass-border">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                <span className="relative z-10 text-xl font-black tracking-tighter text-foreground/40 transition-all duration-500 group-hover:scale-110 group-hover:text-primary lg:text-3xl">
                                    {client.name.split(' ').map((word, i) => (
                                        <span key={i} className={i === 0 ? "" : "text-foreground/20 group-hover:text-primary/40 ml-1"}>
                                            {word}
                                        </span>
                                    ))}
                                </span>

                                <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
