"use client"

import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, ArrowRight, Sparkles } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "./ui/button"

export function QuickContactFAB() {
    const [isOpen, setIsOpen] = useState(false)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener("scroll", toggleVisibility)
        return () => window.removeEventListener("scroll", toggleVisibility)
    }, [])

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 20 }}
                        className="mb-2 w-72 overflow-hidden rounded-[2rem] border border-primary/10 bg-white/80 p-6 shadow-2xl backdrop-blur-2xl transition-all glass-border"
                    >
                        <div className="mb-4 flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                                <Sparkles className="h-5 w-5" />
                            </div>
                            <div>
                                <h4 className="font-black text-foreground">Need Bespoke Help?</h4>
                                <p className="text-xs font-medium text-muted-foreground">Engineering sync in 24h</p>
                            </div>
                        </div>
                        <p className="mb-6 text-sm font-medium leading-relaxed text-muted-foreground/80">
                            Our engineering leadership is ready to discuss your unique project DNA.
                        </p>
                        <Button asChild className="w-full h-12 rounded-xl font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                Start Application <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0, rotate: -45 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        exit={{ opacity: 0, scale: 0, rotate: -45 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl shadow-2xl transition-all duration-500 ${isOpen ? "bg-foreground text-background" : "bg-primary text-white shadow-primary/20"
                            }`}
                    >
                        {isOpen ? <X className="h-8 w-8" /> : <MessageSquare className="h-8 w-8" />}
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    )
}
