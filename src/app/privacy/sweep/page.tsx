"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Shield, CheckCircle2, ServerCrash, Database } from "lucide-react"

export default function SweepPrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-32 sm:px-8 max-w-4xl">
            {/* Back button */}
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="mb-8"
            >
                <Link
                    href="/privacy"
                    className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors group"
                >
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to general privacy
                </Link>
            </motion.div>

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-12 border-b border-primary/10 pb-8"
            >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary mb-4">
                    <Shield className="h-6 w-6" />
                </div>
                <h1 className="text-4xl font-black tracking-tight text-foreground md:text-6xl mb-4">
                    Sweep Privacy Policy
                </h1>
                <p className="text-xl text-muted-foreground">
                    Learn how we protect your personal identity when using the Sweep utility.
                </p>
            </motion.div>

            {/* Content */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed space-y-12"
            >
                {/* Highlight banner */}
                <div className="bg-emerald-50/50 border border-emerald-100 rounded-2xl p-6 flex items-start space-x-4">
                    <div className="bg-emerald-500 text-white rounded-lg p-2 flex-none">
                        <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-emerald-800 mb-1">Strict Database-Free Guarantee</h3>
                        <p className="text-emerald-700/80 text-sm leading-relaxed m-0">
                            Sweep is designed with architectural data sovereignty. Any identity attributes entered only exist within your active browser session. We run no database storage pipelines for this application.
                        </p>
                    </div>
                </div>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">1. Information We Capture</h2>
                    <p>
                        Sweep is a lightweight productivity utility. To personalize your workspace, greet you during use, or reference session assets, the app may request or capture:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Name</strong></li>
                        <li><strong>Nickname</strong></li>
                        <li><strong>Username</strong></li>
                    </ul>
                    <p>
                        This information is provided voluntarily by you when initiating or using the utility's interface.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <Database className="h-5.5 w-5.5 text-primary" />
                        2. Database-Free Architecture (No Storage)
                    </h2>
                    <p>
                        Unlike traditional applications, Sweep does not maintain a remote database.
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li><strong>Local Execution:</strong> All entered names, nicknames, or usernames are held in-memory or saved solely to your browser's local sandbox storage (such as LocalStorage or SessionStorage).</li>
                        <li><strong>No Server Database:</strong> MoreBit Solutions does not transmit, ingest, or save your identity parameters to our databases or servers.</li>
                        <li><strong>Session Volatility:</strong> When you clear your browser cookies, close your private window, or click the clear data trigger inside Sweep, all identity attributes are instantly and permanently erased.</li>
                    </ul>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                        <ServerCrash className="h-5.5 w-5.5 text-primary" />
                        3. How We Process Data
                    </h2>
                    <p>
                        Any information captured is processed exclusively on the client-side to customize your user interface experience locally. We do not use this data for tracking, user profiling, analytics, advertising, or sharing with external third-party services.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">4. Third-Party Web Services</h2>
                    <p>
                        Because Sweep operates purely in the client's web environment, no data is sent to external web hosts, cloud storage vendors, or analytical marketing platforms. Your privacy is fully maintained within the limits of your local computer or device security.
                    </p>
                </section>

                <section className="space-y-4">
                    <h2 className="text-2xl font-bold text-foreground">5. Your Control & Rights</h2>
                    <p>
                        Since we do not hold your data on our servers, there is no records database from which to search, retrieve, modify, or delete your credentials. You have total and immediate control: you can delete all session attributes at any time by clearing your browser cache/storage or resetting the app locally.
                    </p>
                </section>

                <section className="space-y-4 border-t border-primary/10 pt-8">
                    <h2 className="text-2xl font-bold text-foreground">Contact Us</h2>
                    <p>
                        If you have questions regarding the local-first architecture of Sweep or our general privacy commitments, feel free to contact us:
                    </p>
                    <p className="m-0">
                        Email: <a href="mailto:support@morebitsolutions.com" className="text-primary hover:underline">support@morebitsolutions.com</a>
                    </p>
                </section>

                <p className="text-xs text-muted-foreground/60 mt-12">
                    Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
            </motion.div>
        </div>
    )
}
