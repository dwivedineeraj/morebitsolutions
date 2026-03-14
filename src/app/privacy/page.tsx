"use client"

import { motion } from "framer-motion"

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-32 sm:px-8 max-w-4xl">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-black tracking-tight mb-8 md:text-6xl"
            >
                Privacy Policy
            </motion.h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-8"
            >
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
                    <p>At MoreBit Solutions, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. Data We Collect</h2>
                    <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Identity Data: Name, username or similar identifier.</li>
                        <li>Contact Data: Email address and telephone numbers.</li>
                        <li>Technical Data: IP address, browser type and version, time zone setting and location.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Data</h2>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data to contact you regarding your inquiries or to provide the services you requested.</p>
                </section>
                <p className="text-sm mt-12">Last updated: {new Date().toLocaleDateString()}</p>
            </motion.div>
        </div>
    )
}
