"use client"

import { motion } from "framer-motion"

export default function TermsPage() {
    return (
        <div className="container mx-auto px-4 py-32 sm:px-8 max-w-4xl">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-black tracking-tight mb-8 md:text-6xl"
            >
                Terms of Service
            </motion.h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-8"
            >
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
                    <p>By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions, you may not access the website or use any services.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. Intellectual Property</h2>
                    <p>The service and its original content, features, and functionality are and will remain the exclusive property of MoreBit Solutions and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of MoreBit Solutions.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. Limitation of Liability</h2>
                    <p>In no event shall MoreBit Solutions be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
                </section>
                <p className="text-sm mt-12">Last updated: {new Date().toLocaleDateString()}</p>
            </motion.div>
        </div>
    )
}
