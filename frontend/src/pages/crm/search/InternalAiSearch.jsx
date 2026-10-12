import React, { useState, useEffect } from 'react';
import {
  Search,
  Sparkles,
  Filter,
  Users,
  Target,
  FileText,
  Boxes,
  LifeBuoy,
  ChevronRight,
  Clock,
  ArrowUpRight,
  BookOpen,
  Bot,
  CheckSquare,
  FileCheck,
  Download,
  ShieldCheck,
  Zap,
  Tag,
  SlidersHorizontal,
  Compass
} from 'lucide-react';
import { Breadcrumb, Button, Card, CardHeader, CardBody, Badge } from '../../../components/ui';
import { useToast } from '../../../context/ToastContext';
import { useCrm } from '../../../context/CrmContext';
import { useNavigate } from 'react-router-dom';

export const InternalAiSearch = () => {
  const { addToast } = useToast();
  const { refreshContacts, refreshDeals } = useCrm();
  const navigate = useNavigate();

  useEffect(() => {
    if (refreshContacts) refreshContacts();
    if (refreshDeals) refreshDeals();
  }, [refreshContacts, refreshDeals]);

  const [query, setQuery] = useState('Search docs, tasks, files and others with AI');
  const [activeFilter, setActiveFilter] = useState('All');

  // Exact client requested categories
  const filterTabs = ['All', 'Docs', 'Tasks', 'Files', 'Others', 'Contacts & Leads', 'Deals & ERP'];

  const searchDatabase = [
    // 1. DOCS
    {
      id: 'doc-1',
      title: 'Master Services Agreement & Enterprise SLA Guarantee',
      category: 'Docs',
      icon: FileText,
      badgeColor: '#0ea5e9',
      snippet: 'Binding software agreement for Apex Global SaaS rollout ($450,000). Guarantees 99.98% uptime, tier-1 technical support escalation and data sovereignty.',
      meta: 'Contract Type: Legal SaaS SLA • Format: Digital PDF • Verified: Active',
      path: '/crm/pipeline',
      matchScore: '99% Match',
      date: 'Updated 2 hours ago',
      actionLabel: 'Open Document',
    },
    {
      id: 'doc-2',
      title: 'Mutual NDA & Proprietary AI IP Protection Brief',
      category: 'Docs',
      icon: FileCheck,
      badgeColor: '#0ea5e9',
      snippet: 'Comprehensive non-disclosure and intellectual property brief covering CRM nErgy proprietary AI gateway pipelines, neural search RAG vectors, and attorney diligence.',
      meta: 'Signatories: Johnny (SEA) & Counsel • Encryption: AES-256 Vault',
      path: '/crm/ebox',
      matchScore: '97% Match',
      date: 'Updated Sep 14',
      actionLabel: 'Open Document',
    },
    {
      id: 'doc-3',
      title: 'Cryptographic Audit Certificate (AES-256 eBox Vault)',
      category: 'Docs',
      icon: ShieldCheck,
      badgeColor: '#0ea5e9',
      snippet: 'Third-party cybersecurity audit validating zero data leakage between Super Executive Admin (SEA) and KT software dev team. End-to-end encrypted messaging verified.',
      meta: 'Audit ID: CERT-2026-X7 • Status: Verified Compliant',
      path: '/crm/ebox',
      matchScore: '94% Match',
      date: 'Updated Sep 12',
      actionLabel: 'View Certificate',
    },

    // 2. TASKS
    {
      id: 'task-1',
      title: 'Finalize Attorney Diligence Presentation Exhibits with KT Dev Team',
      category: 'Tasks',
      icon: CheckSquare,
      badgeColor: '#10b981',
      snippet: 'Priority: Urgent. Align 2-week timeline roadmap, verify live digital glowing energy logo animation, and confirm Secured eBox channel demonstration for investor legal diligence.',
      meta: 'Assignee: Johnny (SEA) & Kiaan Tech Team • Deadline: Today, 5:00 PM',
      path: '/crm/tasks',
      matchScore: '98% Match',
      date: 'Due in 4 hours',
      actionLabel: 'View Task',
    },
    {
      id: 'task-2',
      title: 'Follow up on Apex Global SaaS Contract Final Execution',
      category: 'Tasks',
      icon: CheckSquare,
      badgeColor: '#10b981',
      snippet: 'Priority: High. Schedule signature call with Eleanor Vance (VP of Procurement) and verify Austin central warehouse hardware terminal allocation.',
      meta: 'Assignee: Alexander Wright • Stage: Closing Negotiation',
      path: '/crm/tasks',
      matchScore: '95% Match',
      date: 'Due Tomorrow',
      actionLabel: 'View Task',
    },
    {
      id: 'task-3',
      title: 'Execute Multi-Warehouse Stock Audit for SO-2026-402',
      category: 'Tasks',
      icon: CheckSquare,
      badgeColor: '#10b981',
      snippet: 'Priority: Normal. Inspect 50 IoT gateway sensors staged at Central Freight Depot prior to field deployment in the West Coast Corridor.',
      meta: 'Assignee: David Chen (ERP Controller) • Status: Pending Inspection',
      path: '/crm/tasks',
      matchScore: '91% Match',
      date: 'Due Friday',
      actionLabel: 'View Task',
    },

    // 3. FILES
    {
      id: 'file-1',
      title: 'Master_Roadmap_V3.pdf (2.4 MB)',
      category: 'Files',
      icon: Download,
      badgeColor: '#f59e0b',
      snippet: 'Compiled Q3/Q4 engineering release milestones, AI Content Studio architecture, and Auto DMS dealership integration deck.',
      meta: 'File Size: 2.4 MB • Format: Adobe PDF • Download: Direct',
      path: '/crm/ebox',
      matchScore: '96% Match',
      date: 'Uploaded Sep 09',
      actionLabel: 'Download File',
    },
    {
      id: 'file-2',
      title: 'Enterprise_Pricing_Matrix_2026.xlsx (1.2 MB)',
      category: 'Files',
      icon: Download,
      badgeColor: '#f59e0b',
      snippet: 'Comprehensive enterprise license calculations, per-seat tier pricing, automated commission splits, and regional auto dealership margin charts.',
      meta: 'File Size: 1.2 MB • Format: Microsoft Excel • Access: Executive Only',
      path: '/crm/reports',
      matchScore: '93% Match',
      date: 'Uploaded 4 days ago',
      actionLabel: 'Download File',
    },
    {
      id: 'file-3',
      title: 'Logo_Brand_Asset_Pack_Digital_Glow.zip (14.8 MB)',
      category: 'Files',
      icon: Download,
      badgeColor: '#f59e0b',
      snippet: 'Official high-resolution branding assets containing animated SVG plasma effects, dark mode gateway mockups, and client presentation icons.',
      meta: 'File Size: 14.8 MB • Format: ZIP Archive • Resolution: 4K Vector',
      path: '/crm/ai-studio',
      matchScore: '90% Match',
      date: 'Uploaded 1 week ago',
      actionLabel: 'Download File',
    },

    // 4. OTHERS
    {
      id: 'oth-1',
      title: 'AI Voice Agent Streaming Pipeline (STT ➔ LLM ➔ TTS)',
      category: 'Others',
      icon: Zap,
      badgeColor: '#a855f7',
      snippet: 'Real-time conversational voice agent terminal connected via Web Speech API, neural LLM prompt orchestration, and low-latency TTS natural voice synthesis.',
      meta: 'System: AI SuperHouse • Latency: ~218ms End-to-End',
      path: '/crm/ai-voice',
      matchScore: '98% Match',
      date: 'Active Real-Time',
      actionLabel: 'Launch Voice Agent',
    },
    {
      id: 'oth-2',
      title: 'Google Maps Territory Management & Field Optimization',
      category: 'Others',
      icon: Compass,
      badgeColor: '#a855f7',
      snippet: 'Spatial GIS engine providing route optimization, rep scheduling, prospect counts, offline access, and the 7-benefit summary matrix.',
      meta: 'Coverage: 4 Regional Corridors • Time Saved: 15.2 hrs/wk',
      path: '/crm/territory',
      matchScore: '95% Match',
      date: 'Active Telemetry',
      actionLabel: 'Open Territory Map',
    },

    // 5. CONTACTS & LEADS
    {
      id: 'cont-1',
      title: 'Eleanor Vance (VP of Procurement, Apex Global)',
      category: 'Contacts & Leads',
      icon: Users,
      badgeColor: '#38bdf8',
      snippet: 'Key executive decision maker for multi-year software procurement. Phone: +1 (555) 234-8901. Direct Email: e.vance@apex.io',
      meta: 'Account: Apex Global • Lead Score: 98 • Status: Qualified',
      path: '/crm/contacts',
      matchScore: '92% Match',
      date: 'Contacted Yesterday',
      actionLabel: 'View Contact',
    },

    // 6. DEALS & ERP
    {
      id: 'deal-1',
      title: 'Apex Global Technologies SaaS Contract ($450,000)',
      category: 'Deals & ERP',
      icon: Target,
      badgeColor: '#ec4899',
      snippet: 'Contract Stage: Legal Review. SLA guarantee 99.98% uptime with dedicated tier-1 support desk. Executive sponsor Alexander Wright.',
      meta: 'Value: $450,000 • Margin: 72% • Stage: Negotiation',
      path: '/crm/pipeline',
      matchScore: '94% Match',
      date: 'Closing This Month',
      actionLabel: 'View Deal',
    },
  ];

  const filteredResults = searchDatabase.filter((item) => {
    const matchesFilter = activeFilter === 'All' || item.category === activeFilter;
    if (!matchesFilter) return false;

    if (!query || query.trim() === '' || query === 'Search docs, tasks, files and others with AI') return true;

    const q = query.toLowerCase().trim();
    return (
      item.title.toLowerCase().includes(q) ||
      item.snippet.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.meta.toLowerCase().includes(q)
    );
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-6)' }}>
      {/* Page Header */}
      <div>
        <Breadcrumb items={[{ label: 'Dashboard', path: '/crm/dashboard' }, { label: 'Intelligence & Data' }, { label: 'Internal Search Engine', active: true }]} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginTop: 'var(--spacing-2)',
            flexWrap: 'wrap',
            gap: 'var(--spacing-4)',
          }}
        >
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 'var(--radius-lg)',
                  background: 'linear-gradient(135deg, #0ea5e9 0%, #6366f1 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 0 20px rgba(14, 165, 233, 0.4)',
                }}
              >
                <Search size={24} color="#ffffff" />
              </div>
              <div>
                <h1 style={{ fontSize: 'var(--font-2xl)', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: 'var(--spacing-2)' }}>
                  Internal Search Engine Bar
                  <Badge variant="primary" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    AI Cognitive RAG
                  </Badge>
                </h1>
                <p style={{ margin: '4px 0 0 0', color: 'var(--text-muted)', fontSize: 'var(--font-sm)' }}>
                  Search docs, tasks, files and others with AI across your entire enterprise workspace.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--spacing-3)' }}>
            <span
              style={{
                fontSize: '12px',
                padding: '6px 12px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(14, 165, 233, 0.1)',
                color: '#0ea5e9',
                border: '1px solid rgba(14, 165, 233, 0.25)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: 6,
              }}
            >
              <Sparkles size={14} />
              Neural Semantic Index Active
            </span>
          </div>
        </div>
      </div>

      {/* Main Search Engine Bar Container */}
      <Card style={{ padding: 'var(--spacing-4)', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-4)', border: '1px solid rgba(14, 165, 233, 0.3)', boxShadow: '0 4px 20px rgba(14, 165, 233, 0.08)' }}>
        {/* Large Prominent AI Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 18px',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: 'var(--surface-hover)',
            border: '2px solid rgba(14, 165, 233, 0.4)',
            transition: 'border-color 0.2s',
          }}
        >
          <Search size={22} color="#0ea5e9" style={{ flexShrink: 0 }} />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search docs, tasks, files and others with AI..."
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              fontSize: '15px',
              fontWeight: 600,
              color: 'var(--text)',
            }}
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '12px',
                padding: '2px 6px',
              }}
            >
              Clear
            </button>
          )}
          <Button
            variant="primary"
            onClick={() =>
              addToast({
                title: 'AI Search Dispatched',
                message: `Deep neural scanning executed for "${query}". Found ${filteredResults.length} records.`,
                type: 'info',
              })
            }
            style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 18px', fontWeight: 700 }}
          >
            <Sparkles size={16} /> Search with AI
          </Button>
        </div>

        {/* Category Filter Pills (Docs, Tasks, Files, Others, etc.) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, overflowX: 'auto', paddingBottom: 4 }}>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 700, textTransform: 'uppercase', marginRight: 4 }}>
            Filter by:
          </span>
          {filterTabs.map((tab) => {
            const isSelected = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-full)',
                  border: isSelected ? '1px solid #0ea5e9' : '1px solid var(--border)',
                  backgroundColor: isSelected ? '#0ea5e9' : 'var(--surface)',
                  color: isSelected ? '#ffffff' : 'var(--text-muted)',
                  fontSize: '12px',
                  fontWeight: isSelected ? 700 : 500,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease',
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </Card>

      {/* AI Synthesized Executive Answer Summary */}
      <Card
        style={{
          padding: 'var(--spacing-5) var(--spacing-6)',
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%), var(--surface)',
          border: '1px solid rgba(14, 165, 233, 0.3)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#0ea5e9', fontWeight: 700, fontSize: '14px' }}>
            <Bot size={18} />
            <span>AI Executive Synthesis & Knowledge RAG</span>
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
            Generated in 184ms • Verified Sources: 6 Indexes
          </span>
        </div>
        <p style={{ margin: 0, fontSize: '13px', color: 'var(--text)', lineHeight: 1.6 }}>
          Querying across enterprise <strong>Docs</strong>, <strong>Tasks</strong>, <strong>Files</strong>, and <strong>Others</strong>:
          Found active legal documents including the <strong>Master Services Agreement ($450k)</strong> and <strong>Cryptographic Audit Certificate</strong>.
          There are 3 high-priority tasks assigned to <strong>Johnny (SEA)</strong> and <strong>Alexander Wright</strong>, including the upcoming attorney presentation exhibits with the KT dev team.
          3 downloadable asset files (Roadmap V3, Pricing Matrix, Brand Pack) are ready for access.
        </p>
      </Card>

      {/* Relevant Search Results Grid */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-3)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 4px' }}>
          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-muted)' }}>
            Search Results ({filteredResults.length} Records)
          </span>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>Sorted by Neural RAG Match Relevance</span>
        </div>

        {filteredResults.map((item) => {
          const Icon = item.icon;
          return (
            <Card
              key={item.id}
              onClick={() => navigate(item.path)}
              style={{
                padding: 'var(--spacing-4) var(--spacing-5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 16,
                cursor: 'pointer',
                transition: 'border-color 0.2s, transform 0.15s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0ea5e9';
                e.currentTarget.style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div
                  style={{
                    width: 42,
                    height: 42,
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: `${item.badgeColor}18`,
                    color: item.badgeColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: `${item.badgeColor}22`,
                        color: item.badgeColor,
                      }}
                    >
                      {item.category}
                    </span>
                    <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 700 }}>{item.matchScore}</span>
                    <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>• {item.date}</span>
                  </div>
                  <h3 style={{ fontSize: '14px', fontWeight: 700, margin: '0 0 4px 0' }}>{item.title}</h3>
                  <p style={{ fontSize: '12.5px', color: 'var(--text-muted)', margin: '0 0 6px 0', lineHeight: 1.5, maxWidth: '820px' }}>
                    {item.snippet}
                  </p>
                  <div style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{item.meta}</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#0ea5e9', fontSize: '12px', fontWeight: 700, flexShrink: 0 }}>
                <span>{item.actionLabel}</span>
                <ArrowUpRight size={15} />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default InternalAiSearch;
