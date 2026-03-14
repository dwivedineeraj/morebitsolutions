"use client"

import { motion } from "framer-motion"

export default function CookiePolicyPage() {
    return (
        <div className="container mx-auto px-4 py-32 sm:px-8 max-w-4xl">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-black tracking-tight mb-8 md:text-6xl"
            >
                Cookie Policy
            </motion.h1>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-8"
            >
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">1. What are Cookies?</h2>
                    <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
                </section>
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">2. How We Use Cookies</h2>
                    <p>We use cookies for the following purposes:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Essential Cookies: Required for the operation of our website.</li>
                        <li>Analytical/Performance Cookies: Allow us to recognize and count the number of visitors and see how they move around our website.</li>
                        <li>Functionality Cookies: Used to recognize you when you return to our website.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-2xl font-bold text-foreground mb-4">3. Managing Cookies</h2>
                    <p>Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit www.aboutcookies.org or www.allaboutcookies.org.</p>
                </section>
                <p className="text-sm mt-12">Last updated: {new Date().toLocaleDateString()}</p>
            </motion.div>
        </div>
    )
}
