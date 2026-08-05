import {
    TrendingUp,
    Calendar,
    Receipt,
    CreditCard,
    Clock,
    ShoppingBag,
    LucideIcon,
    Bot,
    BookOpen,
    ShieldCheck
} from "lucide-react"

export interface Service {
    slug: string;
    title: string;
    description: string;
    fullDescription: string;
    icon: LucideIcon;
    features: string[];
    image: string;
}

export const services: Service[] = [
    {
        slug: "agentic-ai",
        title: "Agentic AI Platform",
        description: "Enterprise platform for deploying autonomous digital workers that execute complex workflows.",
        fullDescription: "Our Agentic AI platform allows you to move beyond simple automation. Deploy intelligent agents capable of understanding context, making decisions, and executing multi-step business processes independently. From autonomous customer support to predictive supply chain adjustments, our agents integrate seamlessly with your existing infrastructure to multiply your workforce's output.",
        icon: Bot,
        features: ["Autonomous Workflows", "Natural Language Processing", "Contextual Memory", "Legacy System Integration"],
        image: "/images/services/agentic-ai.png",
    },
    {
        slug: "private-ai-deployment",
        title: "Private AI Deployment",
        description: "Secure, on-premise or private cloud AI infrastructure with total data sovereignty.",
        fullDescription: "Protect your proprietary data while leveraging the power of LLMs. We specialize in deploying private, secure AI instances (including Llama, Mistral, and custom models) within your own perimeter. Our deployment services ensure no data ever leaves your control, meeting the highest enterprise security and compliance standards.",
        icon: ShieldCheck,
        features: ["Data Sovereignty", "On-Premise Hosting", "Custom Model Tuning", "Secure API Wrappers"],
        image: "/images/services/private-ai.png",
    },
    {
        slug: "knowledge-base",
        title: "Intelligent Knowledge Base",
        description: "Generative AI system for instant retrieval and summarization of internal documentation and IT support.",
        fullDescription: "Transform your company's scattered documentation into a single, intelligent source of truth. Our system uses advanced RAG (Retrieval-Augmented Generation) to provide instant, conversational answers to internal queries, reducing IT support overhead and accelerating employee onboarding.",
        icon: BookOpen,
        features: ["Conversational Search", "Automated Summarization", "Cross-Silo Integration", "Real-time Updates"],
        image: "/images/services/knowledge-base.png",
    },
    {
        slug: "lead-management",
        title: "Lead Management",
        description: "Automated distribution and predictive scoring system to convert prospects faster.",
        fullDescription: "Our Lead Management module uses advanced scoring algorithms to prioritize high-value prospects. It automates the distribution of leads to the right team members, ensuring zero delay in response times. With built-in tracking and conversion analytics, you can optimize your sales funnel with precision.",
        icon: TrendingUp,
        features: ["Automated Lead Scoring", "Smart Distribution", "Conversion Tracking", "CRM Integration"],
        image: "/images/products/lead-intelligence.png",
    },
    {
        slug: "resource-scheduling",
        title: "Resource Scheduling",
        description: "Smart class and resource scheduling with automated reminders and conflict resolution.",
        fullDescription: "Our Resource Scheduling engine handles complex allocation with ease. Whether it's staffing, classroom management, or client appointments, our system resolves conflicts automatically and sends real-time updates to all stakeholders. It's designed to maximize utilization and minimize idle time.",
        icon: Calendar,
        features: ["Conflict Resolution", "Resource Optimization", "Real-time Reminders", "Multi-platform Sync"],
        image: "/images/products/dynamic-scheduling.png",
    },
    {
        slug: "billing-invoicing",
        title: "Billing & Invoicing",
        description: "End-to-end orders and invoicing with automated recurring billing and tax compliance.",
        fullDescription: "Our Billing system streamlines the entire quote-to-cash cycle. Handle complex recurring billing, multi-currency transactions, and automated tax compliance without lifting a finger. Our robust ledger integration ensures that your financial data is always accurate and ready for audit.",
        icon: Receipt,
        features: ["Recurring Billing", "Automated Invoicing", "Tax Compliance", "Advanced Ledger Support"],
        image: "/images/products/flow-commerce.png",
    },
    {
        slug: "payroll-management",
        title: "Payroll Management",
        description: "Error-free payroll processing with automated tax calculations and direct deposit exports.",
        fullDescription: "Eliminate payroll errors and compliance risks. Our Payroll module automates tax calculations, benefit deductions, and direct deposit file generation. It scales from 10 to 10,000 employees with the same level of granular control and reporting accuracy.",
        icon: CreditCard,
        features: ["Automated Tax Calculations", "Direct Deposit Integration", "Compliance Reporting", "Self-service Portals"],
        image: "/images/products/precision-payroll.png",
    },
    {
        slug: "timesheet-tracking",
        title: "Timesheet Tracking",
        description: "Advanced tracking with project-wise cost analysis and approval workflows.",
        fullDescription: "Track every billable second. Our Timesheet module provides high-fidelity time tracking integrated directly with project budgets. Monitor profitability in real-time and automate complex approval hierarchies to ensure project health and accurate billing.",
        icon: Clock,
        features: ["Project-wise tracking", "Profitability Analytics", "Approval Workflows", "Mobile-ready Logging"],
        image: "/images/products/tempo-management.png",
    },
    {
        slug: "inventory-management",
        title: "Inventory Management",
        description: "Real-time stock tracking across multiple warehouses with predictive alerts.",
        fullDescription: "Gain total visibility over your supply chain. Our Inventory system tracks stock movements in real-time across multiple locations. Use predictive alerts to prevent stockouts and optimize reorder points based on historical consumption patterns and lead times.",
        icon: ShoppingBag,
        features: ["Multi-warehouse Support", "Predictive Alerts", "Audit Logging", "Barcode/QR Integration"],
        image: "/images/products/live-inventory.png",
    },
]
