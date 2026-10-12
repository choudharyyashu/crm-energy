import {
  Users,
  Target,
  Kanban,
  CheckSquare,
  MessageSquare,
  Boxes,
  UserCheck,
  LifeBuoy,
  Sparkles,
  ShieldCheck,
  Settings,
  DollarSign,
  Landmark,
  FileText,
  CreditCard,
  Building2,
  TrendingUp,
  History,
  BookOpen,
  MapPin,
  Bot,
  Video,
  Megaphone,
  Grid,
  Search,
  Car,
  Lock,
  Layers,
  Sliders,
  FileCheck,
  Download,
  HelpCircle,
  Zap,
  Globe,
  Briefcase,
  Smartphone,
  Factory,
  Package,
  ShoppingCart,
  PieChart,
  FolderKanban,
  ShoppingBag,
  Truck,
  FileSpreadsheet,
  Cpu,
  Radio,
  Tv,
  GraduationCap,
  HeartPulse,
  Compass,
  Store,
  Share2,
  Award,
  Shield,
  Plane,
  Building,
  Headphones,
  FileCode,
  Rocket
} from 'lucide-react';
import { INDUSTRY_CLIENT_DETAILS } from './industryDetailsData';

// 23 CRM FEATURES specified in client document
export const CRM_FEATURES_DATA = [
  {
    id: 'industries-homepage',
    name: 'Industries Homepage',
    category: 'Ecosystem & Overview',
    icon: Globe,
    desc: 'Centralized hub mapping industry-specific workflows, modules, and compliance templates.',
    tag: 'Overview'
  },
  {
    id: 'affiliate-management',
    name: 'Affiliate Management',
    category: 'Sales & Growth',
    icon: Award,
    desc: 'Multi-tiered partner referral tracking, commission payouts, and automated affiliate portal.',
    tag: 'Revenue'
  },
  {
    id: 'analytic-accounting',
    name: 'Analytic Accounting',
    category: 'Finance & Operations',
    icon: PieChart,
    desc: 'Multi-dimensional cost center ledger, project margin tracking, and financial analytics.',
    tag: 'Finance',
    route: '/features/analytic-accounting'
  },
  {
    id: 'contact-management',
    name: 'Contact Management',
    category: 'Core CRM',
    icon: Users,
    desc: '360° corporate and individual profiles, interaction timeline, and communication history.',
    tag: 'Core'
  },
  {
    id: 'customer-service',
    name: 'Customer Service',
    category: 'Support & Success',
    icon: Headphones,
    desc: 'Multi-channel SLA ticketing, automated escalations, and customer satisfaction tracking.',
    tag: 'Support'
  },
  {
    id: 'customizable-dashboards',
    name: 'Customizable Dashboards',
    category: 'Core CRM',
    icon: LayoutDashboardIcon(),
    desc: 'Drag-and-drop KPI widgets, executive telemetry, and role-based real-time visualizations.',
    tag: 'Analytics'
  },
  {
    id: 'data-management',
    name: 'Data Management',
    category: 'Governance & Security',
    icon: Layers,
    desc: 'Enterprise data hygiene, deduplication, automated backups, and SHA-256 integrity checks.',
    tag: 'Security'
  },
  {
    id: 'financial-accounting',
    name: 'Financial Accounting',
    category: 'Finance & Operations',
    icon: DollarSign,
    desc: 'Double-entry general ledger, automated bank reconciliation, and GAAP/IFRS tax reporting.',
    tag: 'Finance'
  },
  {
    id: 'inventory-management',
    name: 'Inventory Management',
    category: 'ERP & Logistics',
    icon: Package,
    desc: 'Multi-warehouse stock tracking, automated reorder triggers, and SKU barcode syncing.',
    tag: 'Operations'
  },
  {
    id: 'landing-page-creator',
    name: 'Landing Page Creator',
    category: 'Marketing & Web',
    icon: LayoutGridIcon(),
    desc: 'Intuitive drag-and-drop page builder for high-converting marketing campaigns and lead funnels.',
    tag: 'Growth'
  },
  {
    id: 'lead-management',
    name: 'Lead Management',
    category: 'Sales & Growth',
    icon: Target,
    desc: 'AI prospect scoring, automated qualification pipelines, and inbound capture automation.',
    tag: 'Sales'
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    category: 'ERP & Logistics',
    icon: Factory,
    desc: 'Bill of Materials (BOM), work center scheduling, production orders, and QA routing.',
    tag: 'Operations'
  },
  {
    id: 'marketing-automation',
    name: 'Marketing Automation',
    category: 'Marketing & Web',
    icon: Megaphone,
    desc: 'Omnichannel drip campaigns, email/SMS sequences, and generative AI content personalization.',
    tag: 'Growth'
  },
  {
    id: 'mobile-access',
    name: 'Mobile Access',
    category: 'Core CRM',
    icon: Smartphone,
    desc: 'Native-feel mobile responsive experience with offline sync and on-the-go deal management.',
    tag: 'Mobile'
  },
  {
    id: 'payroll-processing',
    name: 'Payroll Processing',
    category: 'Finance & Operations',
    icon: FileSpreadsheet,
    desc: 'Automated salary calculation, direct deposit scheduling, and corporate tax withholding.',
    tag: 'Finance'
  },
  {
    id: 'project-management',
    name: 'Project Management',
    category: 'ERP & Logistics',
    icon: FolderKanban,
    desc: 'Gantt charts, milestone tracking, resource allocation, and budget burn telemetry.',
    tag: 'Operations'
  },
  {
    id: 'purchasing-management',
    name: 'Purchasing Management',
    category: 'ERP & Logistics',
    icon: ShoppingBag,
    desc: 'Purchase order approval routing, vendor price comparison, and automatic 3-way matching.',
    tag: 'Operations'
  },
  {
    id: 'recruitment-onboarding',
    name: 'Recruitment and Onboarding',
    category: 'HR & Talent',
    icon: UserCheck,
    desc: 'Candidate pipeline tracking, AI resume parsing, automated interview scheduling, and e-signatures.',
    tag: 'HR'
  },
  {
    id: 'sales-management',
    name: 'Sales Management',
    category: 'Sales & Growth',
    icon: Kanban,
    desc: 'Kanban sales pipeline, contract quotation builder, and sales rep commission tracking.',
    tag: 'Sales'
  },
  {
    id: 'subscription-management',
    name: 'Subscription Management',
    category: 'Sales & Growth',
    icon: CreditCard,
    desc: 'Recurring SaaS billing, automated dunning, upgrade/downgrade workflows, and MRR tracking.',
    tag: 'Revenue'
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain',
    category: 'ERP & Logistics',
    icon: Truck,
    desc: 'Freight routing, vendor SLA audits, multi-modal tracking, and customs compliance.',
    tag: 'Operations'
  },
  {
    id: 'territory-management',
    name: 'Territory Management',
    category: 'Sales & Growth',
    icon: MapPin,
    desc: 'Geographic sales territory assignment, quota distribution, and regional revenue maps.',
    tag: 'Sales'
  },
  {
    id: 'white-label-crm',
    name: 'White Label CRM',
    category: 'Governance & Security',
    icon: Sparkles,
    desc: 'Custom domain branding, company logo embedding, and bespoke client portal styling.',
    tag: 'Enterprise'
  }
];

function LayoutDashboardIcon() {
  return Grid;
}

function LayoutGridIcon() {
  return Globe;
}

// 4 CRM SOLUTIONS GROUPS with all 15 items
export const CRM_SOLUTIONS_DATA = [
  {
    groupTitle: '4 Types of CRM Software',
    subtitle: 'Architectural Frameworks',
    badge: 'Frameworks',
    items: [
      {
        id: 'analytical-crm',
        name: 'Analytical CRM',
        icon: TrendingUp,
        desc: 'Advanced customer telemetry, cohort behavior models, and predictive lifetime value (LTV) calculation.'
      },
      {
        id: 'collaborative-crm',
        name: 'Collaborative CRM',
        icon: Users,
        desc: 'Cross-departmental data synchronization between sales, customer service, marketing, and executives.'
      },
      {
        id: 'operational-crm',
        name: 'Operational CRM',
        icon: Sliders,
        desc: 'Automation of daily front-office workflows including lead routing, sales orders, and customer ticketing.'
      },
      {
        id: 'strategic-crm',
        name: 'Strategic CRM',
        icon: Target,
        desc: 'Long-term relationship optimization, customer retention programs, and value-maximization frameworks.'
      }
    ]
  },
  {
    groupTitle: 'Business CRM Software',
    subtitle: 'Operational Scale',
    badge: 'Business',
    route: '/solutions/business-crm',
    items: [
      {
        id: 'contact-ai',
        name: 'Contact AI',
        icon: Bot,
        desc: 'Autonomous AI contact enrichment, sentiment analysis, and smart response generation.',
        route: '/solutions/contact-ai'
      },
      {
        id: 'franchise',
        name: 'Franchise',
        icon: Building2,
        desc: 'Multi-location franchise governance, royalties tracking, and centralized brand standard compliance.',
        route: '/solutions/franchise'
      },
      {
        id: 'influencers',
        name: 'Influencers',
        icon: Tv,
        desc: 'Campaign collaboration, sponsored content management, affiliate links, and brand outreach.',
        route: '/solutions/influencers'
      },
      {
        id: 'startup-business',
        name: 'Startup Business',
        icon: Rocket,
        desc: 'Lean sales automation, investor updates, rapid customer acquisition, and cash runway tracking.',
        route: '/solutions/startups'
      },
      {
        id: 'small-to-mid-size-biz',
        name: 'Small to Mid-Size Biz',
        icon: Store,
        desc: 'Turnkey all-in-one suite designed to minimize overhead and maximize operational efficiency.',
        route: '/solutions/mid-size'
      }
    ]
  },
  {
    groupTitle: 'CRM for Entrepreneurs',
    subtitle: 'Founder Capital & Growth',
    badge: 'Entrepreneurs',
    items: [
      {
        id: 'entrepreneurs-seeking-capital',
        name: 'Entrepreneurs Seeking Capital',
        icon: Landmark,
        desc: 'Direct bridge to institutional debt lenders, pitch deck data rooms, and capital readiness scoring.'
      },
      {
        id: 'entrepreneurs-save-money',
        name: 'Entrepreneurs Save Money',
        icon: DollarSign,
        desc: 'Consolidated toolstack replacement eliminating multiple SaaS subscriptions into a single platform.'
      },
      {
        id: 'software-for-entrepreneurs',
        name: 'Software for Entrepreneurs',
        icon: Sparkles,
        desc: 'Unified business OS combining CRM, ERP, and AI Content Studios tailored for busy founders.'
      }
    ]
  },
  {
    groupTitle: 'Third Party Integration',
    subtitle: 'Enterprise Connectivity',
    badge: 'Integrations',
    items: [
      {
        id: 'third-party-integration-crm',
        name: 'Third Party Integration CRM',
        icon: Share2,
        desc: 'Two-way connectors for Salesforce, HubSpot, Gmail, Outlook, Stripe, and customer telephony.'
      },
      {
        id: 'third-party-integration-erp',
        name: 'Third Party Integration ERP',
        icon: Boxes,
        desc: 'ERP connector bridges for SAP, Oracle, NetSuite, QuickBooks, and warehouse management systems.'
      },
      {
        id: 'third-party-crm-erp-integration',
        name: 'Third-Party CRM ERP Integration',
        icon: Cpu,
        desc: 'High-throughput bi-directional data pipelines bridging external systems with CRM nErgy.'
      }
    ]
  }
];

// 23 INDUSTRIES specified in client document
const BASE_INDUSTRIES_DATA = [
  { id: 'ind-home', name: 'Industries Homepage', icon: Globe, desc: 'Centralized directory of specialized sector frameworks.' },
  { id: 'automotive', name: 'Automotive', icon: Car, desc: 'Dealership management, vehicle inventory sync, desking & repair center.' },
  { id: 'construction', name: 'Construction', icon: Building, desc: 'Jobsite bidding, subcontractor agreements, equipment and material logistics.' },
  { id: 'consulting-firms', name: 'Consulting Firms', icon: Briefcase, desc: 'Billable hours, client milestone delivery, and multi-team advisory decks.' },
  { id: 'e-commerce', name: 'E-commerce', icon: ShoppingCart, desc: 'Cart abandonment recapture, fulfillment tracking, and customer loyalty retention.' },
  { id: 'education', name: 'Education', icon: GraduationCap, desc: 'Student enrollment admissions, faculty records, and curriculum management.' },
  { id: 'entertainment', name: 'Entertainment', icon: Tv, desc: 'Talent management, royalties distribution, and media production schedules.' },
  { id: 'financial-services', name: 'Financial Services', icon: Landmark, desc: 'FinCEN KYC compliance, institutional asset registries, and loan servicing.' },
  { id: 'healthcare', name: 'Healthcare', icon: HeartPulse, desc: 'HIPAA-compliant records, patient intake scheduling, and clinic operations.' },
  { id: 'hospitality', name: 'Hospitality', icon: Compass, desc: 'Guest reservation engines, event booking, and concierge operations.' },
  { id: 'insurance', name: 'Insurance', icon: Shield, desc: 'Policy underwriting, claims processing, and broker commission settlements.' },
  { id: 'manufacturing-ind', name: 'Manufacturing', icon: Factory, desc: 'Shop floor telemetry, production lines, and raw material supply chain.' },
  { id: 'marketing-ind', name: 'Marketing', icon: Megaphone, desc: 'Client account management, ad campaign analytics, and deliverable tracking.' },
  { id: 'media-ind', name: 'Media', icon: Radio, desc: 'Digital asset warehouses, broadcast syndication, and editorial calendars.' },
  { id: 'non-profit', name: 'Non-Profit', icon: Award, desc: 'Donor management, charitable grant tracking, and fundraising campaigns.' },
  { id: 'professional-services', name: 'Professional Services', icon: FileCheck, desc: 'Client retainer billing, SLA tracking, and audit-ready reporting.' },
  { id: 'real-estate', name: 'Real Estate', icon: Building2, desc: 'Property listings, broker commission splits, and escrow pipeline.' },
  { id: 'retail', name: 'Retail', icon: Store, desc: 'Omnichannel POS, in-store inventory balances, and loyalty programs.' },
  { id: 'software-dev', name: 'Software Development', icon: FileCode, desc: 'Sprint planning, bug issue tracking, and client code delivery milestones.' },
  { id: 'technology', name: 'Technology', icon: Cpu, desc: 'Hardware lifecycle, cloud license provisioning, and IT asset control.' },
  { id: 'telecom', name: 'Telecom', icon: Radio, desc: 'Subscriber billing, infrastructure maintenance, and service dispatch.' },
  { id: 'travel', name: 'Travel', icon: Plane, desc: 'Itinerary builders, airline/hotel partner APIs, and traveler support.' },
  { id: 'unique-service-biz', name: 'Unique Service Business', icon: Sparkles, desc: 'Bespoke custom workflow configurations for niche enterprise operations.' }
];

export const INDUSTRIES_DATA = BASE_INDUSTRIES_DATA.map(item => {
  const extra = INDUSTRY_CLIENT_DETAILS && INDUSTRY_CLIENT_DETAILS[item.id];
  if (extra) {
    return {
      ...item,
      clientOverview: extra.overview || item.desc,
      capabilities: extra.capabilities || [],
      clientFaqs: extra.faqs || []
    };
  }
  return item;
});

// FAQS DATA as required by client document
export const FAQ_QUESTIONS_DATA = [
  {
    q: 'What is CRM nErgy AI and how is it different from traditional CRMs?',
    a: 'CRM nErgy AI is a next-generation unified enterprise operating system combining comprehensive CRM, full ERP operations, HR, Customer Support, and the ZUNME AI Studio. Unlike legacy CRMs like Salesforce that require costly third-party add-ons, CRM nErgy integrates everything natively into one high-performance platform.'
  },
  {
    q: 'What is My Zunme (AI Platform for Content & Warehouse)?',
    a: 'ZUNME is the integrated generative AI engine and 1,000+ template content warehouse inside CRM nErgy. It empowers creators, marketing agencies, and business owners to generate high-converting copy, cinematic video scripts, marketing campaigns, and SEO assets autonomously.'
  },
  {
    q: 'Can CRM nErgy replace our current accounting and ERP software?',
    a: 'Yes. CRM nErgy includes enterprise-grade Analytic & Financial Accounting, General Ledger, Bill of Materials, Procurement, Inventory, and Supply Chain management, making external ERP systems redundant.'
  },
  {
    q: 'How does the SALES - chat eBox work?',
    a: 'SALES - chat eBox is our dedicated, secure sales consultation interface. Potential clients and enterprise buyers can instantly discuss pricing, customized white-label implementations, and schedule executive demonstrations with zero friction.'
  },
  {
    q: 'Is White Label CRM available for agencies and enterprise partners?',
    a: 'Yes. Our White Label solution allows agencies and enterprises to fully rebrand CRM nErgy with their own corporate identity, custom domains, logo, and client portal aesthetics.'
  },
  {
    q: 'Can we integrate CRM nErgy with our existing third-party applications?',
    a: 'Absolutely. We provide certified high-throughput API connectors for Salesforce, QuickBooks, SAP, Stripe, Google Workspace, Microsoft 365, and custom webhooks.'
  }
];
