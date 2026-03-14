import Link from "next/link"
import Image from "next/image"
import { Linkedin, Mail, Twitter } from "lucide-react"

export function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 py-12 sm:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5 lg:gap-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="relative h-8 w-8 overflow-hidden rounded-md bg-white/10 p-1">
                                <Image
                                    src="/logo.svg"
                                    alt="MoreBit Logo"
                                    width={32}
                                    height={32}
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight">
                                MoreBit Solutions
                            </span>
                        </Link>
                        <p className="max-w-xs text-sm text-secondary-foreground/80">
                            Architecting the future of business operations through ecosystem-driven engineering.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-white/80 transition-colors">
                                <Linkedin size={20} />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link href="#" className="hover:text-white/80 transition-colors">
                                <Twitter size={20} />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link href="#" className="hover:text-white/80 transition-colors">
                                <Mail size={20} />
                                <span className="sr-only">Email</span>
                            </Link>
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
                        <ul className="space-y-2 text-sm text-secondary-foreground/80">
                            <li><Link href="/services/agentic-ai" className="hover:text-white">Agentic AI Platform</Link></li>
                            <li><Link href="/services/private-ai-deployment" className="hover:text-white">Private AI Deployment</Link></li>
                            <li><Link href="/services/knowledge-base" className="hover:text-white">Intelligent Knowledge Base</Link></li>
                            <li><Link href="/services" className="hover:text-white font-medium text-primary-foreground/90">View All Services</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h3>
                        <ul className="space-y-2 text-sm text-secondary-foreground/80">
                            <li><Link href="/about" className="hover:text-white">Our Philosophy</Link></li>
                            <li><Link href="/careers" className="hover:text-white">Careers</Link></li>
                            <li><Link href="/contact" className="hover:text-white">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Legal</h3>
                        <ul className="space-y-2 text-sm text-secondary-foreground/80">
                            <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
                            <li><Link href="/cookie-policy" className="hover:text-white">Cookie Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/10 pt-8 text-center text-xs text-secondary-foreground/60">
                    <p>&copy; {new Date().getFullYear()} MoreBit Solutions. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
