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
    caseStudies?: { title: string; description: string }[];
    customers?: { name: string; logo: string }[];
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
        caseStudies: [
            { title: "FinTech Global", description: "Automated 70% of level-1 compliance checks with perfect accuracy." },
            { title: "Retail Giant", description: "Reduced customer escalation rates by 45% using empathetic AI agents." }
        ],
        customers: [
            { name: "FinTech Global", logo: "/images/customers/customer13.png" },
            { name: "Retail Giant", logo: "/images/customers/customer14.png" }
        ]
    },
    {
        slug: "private-ai-deployment",
        title: "Private AI Deployment",
        description: "Secure, on-premise or private cloud AI infrastructure with total data sovereignty.",
        fullDescription: "Protect your proprietary data while leveraging the power of LLMs. We specialize in deploying private, secure AI instances (including Llama, Mistral, and custom models) within your own perimeter. Our deployment services ensure no data ever leaves your control, meeting the highest enterprise security and compliance standards.",
        icon: ShieldCheck,
        features: ["Data Sovereignty", "On-Premise Hosting", "Custom Model Tuning", "Secure API Wrappers"],
        image: "/images/services/private-ai.png",
        caseStudies: [
            { title: "Pushkar Scents", description: "Deployed private RAG system for secure recipe management and supply chain optimization." },
            { title: "SecureBank", description: "Implemented air-gapped LLM for internal document analysis." }
        ],
        customers: [
            { name: "Pushkar Scents", logo: "/images/customers/customer17.png" },
            { name: "SecureBank", logo: "/images/customers/customer18.png" }
        ]
    },
    {
        slug: "knowledge-base",
        title: "Intelligent Knowledge Base",
        description: "Generative AI system for instant retrieval and summarization of internal documentation and IT support.",
        fullDescription: "Transform your company's scattered documentation into a single, intelligent source of truth. Our system uses advanced RAG (Retrieval-Augmented Generation) to provide instant, conversational answers to internal queries, reducing IT support overhead and accelerating employee onboarding.",
        icon: BookOpen,
        features: ["Conversational Search", "Automated Summarization", "Cross-Silo Integration", "Real-time Updates"],
        image: "/images/services/knowledge-base.png",
        caseStudies: [
            { title: "Enterprise Corp", description: "Reduced internal IT support tickets by 60% in the first quarter." },
            { title: "Legal Partners", description: "Saved 15 hours per week for analysts searching through case history." }
        ],
        customers: [
            { name: "Enterprise Corp", logo: "/images/customers/customer15.png" },
            { name: "Legal Partners", logo: "/images/customers/customer16.png" }
        ]
    },
    {
        slug: "lead-management",
        title: "Lead Management",
        description: "Automated distribution and predictive scoring system to convert prospects faster.",
        fullDescription: "Our Lead Management module uses advanced scoring algorithms to prioritize high-value prospects. It automates the distribution of leads to the right team members, ensuring zero delay in response times. With built-in tracking and conversion analytics, you can optimize your sales funnel with precision.",
        icon: TrendingUp,
        features: ["Automated Lead Scoring", "Smart Distribution", "Conversion Tracking", "CRM Integration"],
        image: "/images/products/lead-intelligence.png",
        caseStudies: [
            { title: "Global Sales Corp", description: "Increased conversion rates by 45% within three months of implementation." },
            { title: "TechGrowth Solutions", description: "Reduced lead response time from 24 hours to under 15 minutes." }
        ],
        customers: [
            { name: "Global Sales Corp", logo: "/images/customers/customer1.png" },
            { name: "TechGrowth Solutions", logo: "/images/customers/customer2.png" }
        ]
    },
    {
        slug: "resource-scheduling",
        title: "Resource Scheduling",
        description: "Smart class and resource scheduling with automated reminders and conflict resolution.",
        fullDescription: "Our Resource Scheduling engine handles complex allocation with ease. Whether it's staffing, classroom management, or client appointments, our system resolves conflicts automatically and sends real-time updates to all stakeholders. It's designed to maximize utilization and minimize idle time.",
        icon: Calendar,
        features: ["Conflict Resolution", "Resource Optimization", "Real-time Reminders", "Multi-platform Sync"],
        image: "/images/products/dynamic-scheduling.png",
        caseStudies: [
            { title: "EduBright Academies", description: "Streamlined scheduling for 50+ locations, saving 200+ hours monthly." },
            { title: "FitForce Gyms", description: "Improved class occupancy by 30% through automated waitlist management." }
        ],
        customers: [
            { name: "EduBright Academies", logo: "/images/customers/customer3.png" },
            { name: "FitForce Gyms", logo: "/images/customers/customer4.png" }
        ]
    },
    {
        slug: "billing-invoicing",
        title: "Billing & Invoicing",
        description: "End-to-end orders and invoicing with automated recurring billing and tax compliance.",
        fullDescription: "Our Billing system streamlines the entire quote-to-cash cycle. Handle complex recurring billing, multi-currency transactions, and automated tax compliance without lifting a finger. Our robust ledger integration ensures that your financial data is always accurate and ready for audit.",
        icon: Receipt,
        features: ["Recurring Billing", "Automated Invoicing", "Tax Compliance", "Advanced Ledger Support"],
        image: "/images/products/flow-commerce.png",
        caseStudies: [
            { title: "SaaS Rocket", description: "Automated billing for 10k+ subscribers, reducing churn by 12%." },
            { title: "Nordic Retail", description: "Seamlessly handled multi-currency expansion into 5 new markets." }
        ],
        customers: [
            { name: "SaaS Rocket", logo: "/images/customers/customer5.png" },
            { name: "Nordic Retail", logo: "/images/customers/customer6.png" }
        ]
    },
    {
        slug: "payroll-management",
        title: "Payroll Management",
        description: "Error-free payroll processing with automated tax calculations and direct deposit exports.",
        fullDescription: "Eliminate payroll errors and compliance risks. Our Payroll module automates tax calculations, benefit deductions, and direct deposit file generation. It scales from 10 to 10,000 employees with the same level of granular control and reporting accuracy.",
        icon: CreditCard,
        features: ["Automated Tax Calculations", "Direct Deposit Integration", "Compliance Reporting", "Self-service Portals"],
        image: "/images/products/precision-payroll.png",
        caseStudies: [
            { title: "Manufacturing Hub", description: "Achieved 100% payroll accuracy for a workforce of 1,200 employees." },
            { title: "Non-Profit Org", description: "Simplified grant-based payroll distributions and reporting." }
        ],
        customers: [
            { name: "Manufacturing Hub", logo: "/images/customers/customer7.png" },
            { name: "Non-Profit Org", logo: "/images/customers/customer8.png" }
        ]
    },
    {
        slug: "timesheet-tracking",
        title: "Timesheet Tracking",
        description: "Advanced tracking with project-wise cost analysis and approval workflows.",
        fullDescription: "Track every billable second. Our Timesheet module provides high-fidelity time tracking integrated directly with project budgets. Monitor profitability in real-time and automate complex approval hierarchies to ensure project health and accurate billing.",
        icon: Clock,
        features: ["Project-wise tracking", "Profitability Analytics", "Approval Workflows", "Mobile-ready Logging"],
        image: "/images/products/tempo-management.png",
        caseStudies: [
            { title: "Creative Agency X", description: "Increased billable hours by 18% through more accurate time capture." },
            { title: "Engineering Firm Y", description: "Automated complex multi-level approval workflows for 50+ projects." }
        ],
        customers: [
            { name: "Creative Agency X", logo: "/images/customers/customer9.png" },
            { name: "Engineering Firm Y", logo: "/images/customers/customer10.png" }
        ]
    },
    {
        slug: "inventory-management",
        title: "Inventory Management",
        description: "Real-time stock tracking across multiple warehouses with predictive alerts.",
        fullDescription: "Gain total visibility over your supply chain. Our Inventory system tracks stock movements in real-time across multiple locations. Use predictive alerts to prevent stockouts and optimize reorder points based on historical consumption patterns and lead times.",
        icon: ShoppingBag,
        features: ["Multi-warehouse Support", "Predictive Alerts", "Audit Logging", "Barcode/QR Integration"],
        image: "/images/products/live-inventory.png",
        caseStudies: [
            { title: "Durable Goods Ltd", description: "Reduced inventory carrying costs by 22% while eliminating stockouts." },
            { title: "Fast-Track Logistics", description: "Optimized picking routes and warehouse layout for 3 major hubs." }
        ],
        customers: [
            { name: "Durable Goods Ltd", logo: "/images/customers/customer11.png" },
            { name: "Fast-Track Logistics", logo: "/images/customers/customer12.png" }
        ]
    },
]
