"use client"

import { AdvantageSection } from "@/components/AdvantageSection";
import { ClientsSection } from "@/components/ClientsSection";
import { Hero } from "@/components/Hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <AdvantageSection />

      <ClientsSection />

      {/* Bespoke CTA Section */}
      <section className="relative overflow-hidden py-32 md:py-48">
        <div className="absolute inset-0 z-0 mesh-gradient opacity-30" />
        <div className="absolute left-[-10%] bottom-[-10%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px] animate-pulse-slow" />

        <div className="container relative z-10 px-4 text-center sm:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="mx-auto flex max-w-5xl flex-col items-center rounded-3xl border border-primary/10 bg-white/40 p-12 shadow-2xl backdrop-blur-2xl glass-border md:p-24"
          >
            <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Sparkles className="h-8 w-8" />
            </div>

            <h2 className="mb-8 text-4xl font-black tracking-tighter text-foreground sm:text-6xl lg:text-7xl">
              Ready for a solution <br /> as <span className="text-primary italic">unique</span> as you?
            </h2>

            <p className="mx-auto mb-12 max-w-2xl text-xl text-muted-foreground leading-relaxed lg:text-2xl">
              Stop settling for off-the-shelf limits. Let&apos;s build a bespoke digital ecosystem and Agentic AI workforce designed
              exclusively for your operational excellence.
            </p>

            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
              <Button size="lg" className="h-16 px-10 text-xl font-bold shadow-2xl shadow-primary/20 hover:scale-105 active:scale-95 transition-all" asChild>
                <Link href="/contact">
                  Start Your Bespoke Project <ArrowRight className="ml-2 h-6 w-6" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
