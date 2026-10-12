import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Landmark,
  Puzzle,
  Users,
  FolderKanban,
  Package,
  Factory,
  Store,
  Save,
  BookOpen,
  ShoppingBag,
  TrendingUp,
  ChevronsRight,
  Sun,
  Moon,
  Bot,
  Sparkles,
  ArrowRight,
  X,
  Send,
  Zap,
  CheckCircle2,
  Quote,
  Shield,
  Layers,
  BarChart3,
  Globe,
  Sliders,
  ChevronRight
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { AiEnergyLogo } from '../components/common/AiEnergyLogo';
import { slugify } from '../data/topicContent';

export const CrmLanding = () => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [searchTerm, setSearchTerm] = useState('');
  const [showVaModal, setShowVaModal] = useState(false);
  const [vaMessage, setVaMessage] = useState('');
  const [vaChat, setVaChat] = useState([
    {
      sender: 'zunme',
      text: 'Hello! I am Zunme, your CRM nErgy AI Virtual Assistant. How can I help your business thrive and scale today?',
    },
  ]);

  // 12 Business Modules from Client Reference Specification
  const modules = [
    {
      id: 'accounting',
      name: 'ACCOUNTING',
      icon: Landmark,
      accent: '#38bdf8',
      desc: 'Financial ledgers, multi-currency accounts receivable & automated balance sheets.',
    },
    {
      id: 'crm',
      name: 'CRM',
      icon: Puzzle,
      accent: '#06b6d4',
      desc: 'High-velocity sales pipelines, contact 360 vaults, deal desking & interaction history.',
    },
    {
      id: 'hr',
      name: 'HR',
      icon: Users,
      accent: '#3b82f6',
      desc: 'Workforce recruitment, employee attendance, team rosters & performance telemetry.',
    },
    {
      id: 'project',
      name: 'PROJECT',
      icon: FolderKanban,
      accent: '#818cf8',
      desc: 'Milestone management, Gantt sprint scheduling, work orders & deliverables.',
    },
    {
      id: 'inventory',
      name: 'INVENTORY',
      icon: Package,
      accent: '#38bdf8',
      desc: 'Multi-warehouse bin tracking, barcode scanning, FIFO valuation & reorder triggers.',
    },
    {
      id: 'manufacturing',
      name: 'MANUFACTURING',
      icon: Factory,
      accent: '#f97316',
      desc: 'Multi-level Bills of Materials (BOM), shop floor capacity routing & assembly runs.',
    },
    {
      id: 'ecommerce',
      name: 'E-COMMERCE',
      icon: Store,
      accent: '#10b981',
      desc: 'Direct-to-consumer store sync, digital catalogs, omnichannel carts & payment rails.',
    },
    {
      id: 'pdm',
      name: 'PDM',
      icon: Save,
      accent: '#06b6d4',
      desc: 'Product Data Management, engineering revisions & technical specification vaults.',
    },
    {
      id: 'km',
      name: 'KM',
      icon: BookOpen,
      accent: '#6366f1',
      desc: 'Knowledge Management, SOP standard operating procedures, team wikis & policies.',
    },
    {
      id: 'pos',
      name: 'POS',
      icon: ShoppingBag,
      accent: '#f59e0b',
      desc: 'Point of sale terminal registers, split tenders, barcode checkout & cash drawers.',
    },
    {
      id: 'trade',
      name: 'TRADE',
      icon: TrendingUp,
      accent: '#22c55e',
      desc: 'Import/export freight tracking, international customs clearance & vendor terms.',
    },
    {
      id: 'more',
      name: 'MORE',
      icon: ChevronsRight,
      accent: '#38bdf8',
      desc: 'OMP Deals suite, executive desking hub, AI SuperHouse & micro-services.',
    },
  ];

  const filteredModules = modules.filter(
    (m) =>
      m.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) ||
      m.desc.toLowerCase().includes(searchTerm.trim().toLowerCase())
  );

  const handleModuleClick = (module) => {
    navigate(`/topic/${module.id}`);
  };

  const handleFooterLinkClick = (item) => {
    navigate(`/topic/${slugify(item)}`);
  };

  const handleSendVaMessage = (e) => {
    e.preventDefault();
    if (!vaMessage.trim()) return;

    const userText = vaMessage;
    setVaChat((prev) => [...prev, { sender: 'user', text: userText }]);
    setVaMessage('');

    setTimeout(() => {
      setVaChat((prev) => [
        ...prev,
        {
          sender: 'zunme',
          text: `Thank you for asking about "${userText}". As your AAI Bestie, I can assist you across CRM, ERP, and autonomous scaling once you sign in to your command portal.`,
        },
      ]);
    }, 600);
  };

  // 4 Columns strictly from Client Document
  const footerColumn1 = [
    'Help Center',
    'Knowledge Base',
    'Academy',
    'FAQs',
    'Support',
    '(Available now)',
    'Resources',
    'Virtual Assistant',
    'Contact Center AI',
  ];

  const footerColumn2 = [
    'Check It Out',
    'CRM nErgy Training',
    'Case studies',
    'Commission calculator',
    'Videos',
    'What’s White Label?',
    'What is a CRM?',
    'What is an ERP?',
    'What is an ERP – CRM?',
    'CRM nErgy Events',
    'Reviews',
    'Industries',
  ];

  const footerColumn3 = [
    'Business Solutions',
    '4 Types of CRMs',
    'AAI - Sales More',
    'Marketing Genius',
    'Manufacturing',
    'Generating Leads',
    'Inventory Management',
    'SM / Influencer Management',
    'Best Sales Commission',
    'Affiliate Marketing',
    'White Label Software',
    'Features',
    'Privacy and security',
    'Third Party Integration',
    'API',
  ];

  const footerColumn4 = [
    'CRM NERGY',
    'Company',
    'Products',
    'Affiliate Partners',
    'Referral program',
    'Jobs',
    'Blog',
    'Pricing',
    'Contact',
  ];

  const isDark = theme === 'dark';

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: isDark ? '#060a17' : '#f8fafc',
        backgroundImage: isDark
          ? `radial-gradient(circle at 15% 12%, rgba(14, 165, 233, 0.14) 0%, transparent 45%),
             radial-gradient(circle at 85% 20%, rgba(249, 115, 22, 0.09) 0%, transparent 40%),
             radial-gradient(circle at 50% 65%, rgba(6, 182, 212, 0.08) 0%, transparent 50%),
             radial-gradient(rgba(56, 189, 248, 0.04) 1px, transparent 1px)`
          : `radial-gradient(circle at 15% 12%, rgba(14, 165, 233, 0.08) 0%, transparent 45%),
             radial-gradient(circle at 85% 20%, rgba(249, 115, 22, 0.05) 0%, transparent 40%),
             radial-gradient(circle at 50% 65%, rgba(6, 182, 212, 0.05) 0%, transparent 50%),
             radial-gradient(rgba(14, 165, 233, 0.03) 1px, transparent 1px)`,
        backgroundSize: 'auto, auto, auto, 28px 28px',
        color: isDark ? '#f8fafc' : '#0f172a',
        fontFamily: 'var(--font-sans)',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
      }}
    >
      <style>{`
        .crm-header-nav-link {
          color: ${isDark ? '#94a3b8' : '#475569'};
          font-size: 0.885rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          padding: 0.35rem 0.65rem;
          border-radius: var(--radius-sm);
        }
        .crm-header-nav-link:hover {
          color: #38bdf8 !important;
          background-color: ${isDark ? 'rgba(56, 189, 248, 0.1)' : 'rgba(2, 132, 199, 0.06)'};
        }
        .crm-btn-login {
          padding: 0.6rem 1.15rem;
          border-radius: var(--radius-md);
          border: ${isDark ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid #cbd5e1'};
          background: ${isDark ? 'rgba(15, 23, 42, 0.65)' : '#ffffff'};
          color: ${isDark ? '#f8fafc' : '#0f172a'};
          font-weight: 700;
          font-size: 0.875rem;
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .crm-btn-login:hover {
          border-color: #38bdf8;
          color: #38bdf8;
          transform: translateY(-1px);
        }
        .crm-btn-create {
          padding: 0.6rem 1.35rem;
          border-radius: var(--radius-md);
          border: none;
          background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          color: #ffffff;
          font-weight: 700;
          font-size: 0.875rem;
          cursor: pointer;
          display: flex;
          alignItems: center;
          gap: 0.4rem;
          box-shadow: 0 4px 14px rgba(2, 132, 199, 0.35);
          transition: all 0.2s ease;
        }
        .crm-btn-create:hover {
          background: linear-gradient(135deg, #0369a1 0%, #0284c7 100%);
          box-shadow: 0 6px 20px rgba(56, 189, 248, 0.5);
          transform: translateY(-1px);
        }
        .crm-card-interactive {
          transition: all 0.26s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .crm-card-interactive:hover {
          transform: translateY(-6px);
          border-color: rgba(56, 189, 248, 0.5) !important;
          box-shadow: 0 14px 30px -4px rgba(14, 165, 233, 0.22) !important;
        }
        .crm-footer-link {
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-block;
        }
        .crm-footer-link:hover {
          color: #38bdf8 !important;
          transform: translateX(4px);
        }
      `}</style>

      {/* 1. PROFESSIONAL ENTERPRISE NAVBAR (UNIFIED, WITH DISTINCT LOGIN & CREATE ACCOUNT BUTTONS) */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backgroundColor: isDark ? 'rgba(7, 11, 25, 0.88)' : 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isDark ? '1px solid rgba(56, 189, 248, 0.16)' : '1px solid rgba(226, 232, 240, 0.85)',
          padding: '0.85rem 2.5rem',
          boxShadow: isDark ? '0 4px 20px rgba(0, 0, 0, 0.4)' : '0 2px 12px rgba(15, 23, 42, 0.05)',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
          }}
        >
          {/* Brand Left */}
          <div
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ display: 'flex', alignItems: 'center', gap: '0.9rem', cursor: 'pointer', flexShrink: 0 }}
          >
            <AiEnergyLogo size={42} showText={false} />
            <div>
              <div
                style={{
                  fontSize: '1.45rem',
                  fontWeight: 900,
                  letterSpacing: '0.04em',
                  fontFamily: 'var(--font-display)',
                  lineHeight: 1.1,
                  background: isDark
                    ? 'linear-gradient(135deg, #ffffff 40%, #93c5fd 100%)'
                    : 'linear-gradient(135deg, #0f2b5c 30%, #0284c7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                CRM NERGY
              </div>
              <div
                style={{
                  fontSize: '0.74rem',
                  color: isDark ? '#38bdf8' : '#0284c7',
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  marginTop: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <Sparkles size={11} className="inline text-energy-sky" />
                Advanced Artificial Intelligence
              </div>
            </div>
          </div>

          {/* Center Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              flexWrap: 'wrap',
            }}
          >
            <span onClick={() => navigate('/topic/features')} className="crm-header-nav-link">
              Features
            </span>
            <span
              onClick={() => {
                const el = document.getElementById('solutions-hub');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="crm-header-nav-link"
            >
              Solutions
            </span>
            <span onClick={() => navigate('/topic/industries')} className="crm-header-nav-link">
              Industries
            </span>
            <span onClick={() => navigate('/topic/faqs')} className="crm-header-nav-link">
              FAQs
            </span>

            {/* Ask Zunme - VA Interactive Trigger */}
            <span
              onClick={() => setShowVaModal(true)}
              style={{
                cursor: 'pointer',
                color: '#38bdf8',
                fontWeight: 700,
                fontSize: '0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                padding: '0.3rem 0.75rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: isDark ? 'rgba(6, 182, 212, 0.12)' : 'rgba(14, 165, 233, 0.1)',
                border: isDark ? '1px solid rgba(6, 182, 212, 0.35)' : '1px solid rgba(14, 165, 233, 0.3)',
                transition: 'all 0.2s ease',
              }}
            >
              <Bot size={15} style={{ color: '#06b6d4' }} />
              Ask Zunme - VA
            </span>

            <span
              onClick={() => navigate('/topic/aai-sales-more')}
              style={{
                cursor: 'pointer',
                fontWeight: 800,
                fontSize: '0.82rem',
                color: '#f97316',
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: isDark ? 'rgba(249, 115, 22, 0.12)' : 'rgba(249, 115, 22, 0.08)',
                border: '1px solid rgba(249, 115, 22, 0.3)',
              }}
            >
              SALES MORE
            </span>

            <span
              onClick={() => navigate('/topic/virtual-assistant')}
              style={{
                cursor: 'pointer',
                color: '#38bdf8',
                fontWeight: 700,
                fontSize: '0.85rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              Virtual Assistant &gt;&gt;
            </span>
          </nav>

          {/* Right Action Controls: Theme Toggle, Separate LOGIN Button, Separate CREATE ACCOUNT Button */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <button
              onClick={toggleTheme}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-md)',
                border: isDark ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid #cbd5e1',
                backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : '#f1f5f9',
                color: isDark ? '#f8fafc' : '#334155',
                cursor: 'pointer',
              }}
            >
              {isDark ? <Sun size={17} style={{ color: '#fbbf24' }} /> : <Moon size={17} />}
            </button>

            {/* DISTINCT LOGIN BUTTON */}
            <button onClick={() => navigate('/login')} className="crm-btn-login">
              Login
            </button>

            {/* DISTINCT CREATE ACCOUNT BUTTON */}
            <button onClick={() => navigate('/crm/signup')} className="crm-btn-create">
              <span>Create Account</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section
        style={{
          padding: '5rem 1.5rem 3.5rem',
          maxWidth: '1180px',
          margin: '0 auto',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '2.25rem',
          position: 'relative',
        }}
      >
        {/* Subtle Ambient Halo */}
        <div
          style={{
            position: 'absolute',
            top: '25%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '300px',
            background: isDark
              ? 'radial-gradient(circle, rgba(14, 165, 233, 0.2) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(14, 165, 233, 0.12) 0%, transparent 70%)',
            filter: 'blur(55px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Pre-headline Pill Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            padding: '0.4rem 1.15rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: isDark ? 'rgba(14, 165, 233, 0.12)' : 'rgba(2, 132, 199, 0.08)',
            border: isDark ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid rgba(2, 132, 199, 0.25)',
            boxShadow: '0 0 15px rgba(56, 189, 248, 0.15)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Zap size={14} style={{ color: '#38bdf8' }} />
          <span style={{ fontSize: '0.82rem', fontWeight: 800, letterSpacing: '0.04em', color: '#38bdf8', textTransform: 'uppercase' }}>
            Enterprise CRM • ERP • Autonomous AI SuperHouse
          </span>
        </div>

        {/* Main Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem, 6vw, 4.25rem)',
            fontWeight: 900,
            lineHeight: 1.12,
            fontFamily: 'var(--font-display)',
            margin: 0,
            letterSpacing: '-0.03em',
            position: 'relative',
            zIndex: 1,
            background: isDark
              ? 'linear-gradient(135deg, #ffffff 25%, #f1f5f9 55%, #93c5fd 100%)'
              : 'linear-gradient(135deg, #0f172a 20%, #0f2b5c 65%, #0284c7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            maxWidth: '960px',
          }}
        >
          CRM Solutions Every Business Needs
        </h1>

        {/* Mission Quote in Spotlight Card */}
        <div
          style={{
            maxWidth: '920px',
            width: '100%',
            backgroundColor: isDark ? 'rgba(11, 17, 36, 0.72)' : '#ffffff',
            border: isDark ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid rgba(203, 213, 225, 0.85)',
            borderLeft: '5px solid #38bdf8',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem 2.5rem',
            boxShadow: isDark
              ? '0 12px 35px -8px rgba(0, 0, 0, 0.65), 0 0 25px rgba(56, 189, 248, 0.12)'
              : '0 12px 30px -5px rgba(15, 23, 42, 0.08)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            position: 'relative',
            zIndex: 1,
            textAlign: 'left',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1.25rem' }}>
            <Quote size={32} style={{ color: '#38bdf8', flexShrink: 0, opacity: 0.85 }} />
            <div>
              <p
                style={{
                  fontSize: 'clamp(1.1rem, 2.6vw, 1.35rem)',
                  lineHeight: 1.6,
                  color: isDark ? '#e2e8f0' : '#1e293b',
                  fontStyle: 'italic',
                  margin: 0,
                  fontWeight: 500,
                }}
              >
                “Delivering the most relevant CRM ERP software for your business to thrive and honing our AAI development to effectively prepare you to scale.”
              </p>
              <div style={{ marginTop: '0.85rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <span style={{ fontWeight: 800, fontSize: '0.885rem', color: '#38bdf8', letterSpacing: '0.04em' }}>
                  CRM NERGY EXECUTIVE FOUNDATION
                </span>
                <span style={{ color: isDark ? '#475569' : '#cbd5e1' }}>•</span>
                <span style={{ fontSize: '0.85rem', color: isDark ? '#94a3b8' : '#64748b' }}>Release 2027</span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Slogan Banner */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '0.75rem 2rem',
            backgroundColor: isDark ? 'rgba(15, 23, 42, 0.85)' : '#ffffff',
            border: isDark ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid #cbd5e1',
            borderRadius: 'var(--radius-full)',
            boxShadow: isDark
              ? '0 0 24px rgba(56, 189, 248, 0.18)'
              : '0 4px 16px rgba(15, 23, 42, 0.06)',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <span
            style={{
              fontWeight: 900,
              fontSize: '1.1rem',
              letterSpacing: '0.06em',
              fontFamily: 'var(--font-display)',
              color: isDark ? '#f8fafc' : '#0f172a',
            }}
          >
            CRM NERGY
          </span>
          <span style={{ color: isDark ? '#334155' : '#cbd5e1' }}>|</span>
          <span
            style={{
              fontSize: '1.1rem',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #38bdf8 0%, #06b6d4 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontStyle: 'italic',
            }}
          >
            “Make AI Your Bestie”
          </span>
        </div>

        {/* Hero Dual CTA Action Buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', zIndex: 1 }}>
          <button
            onClick={() => navigate('/crm/signup')}
            style={{
              padding: '0.85rem 2rem',
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
              color: '#ffffff',
              border: 'none',
              fontWeight: 800,
              fontSize: '1rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 6px 20px rgba(2, 132, 199, 0.4)',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-2px)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <span>Create Free Account</span>
            <ArrowRight size={18} />
          </button>

          <button
            onClick={() => {
              const el = document.getElementById('solutions-hub');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              padding: '0.85rem 1.75rem',
              borderRadius: 'var(--radius-lg)',
              backgroundColor: isDark ? 'rgba(15, 23, 42, 0.8)' : '#ffffff',
              color: isDark ? '#f8fafc' : '#0f172a',
              border: isDark ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid #cbd5e1',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#38bdf8';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = isDark ? 'rgba(56, 189, 248, 0.35)' : '#cbd5e1';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Explore Solutions
          </button>
        </div>
      </section>

      {/* 3. SOLUTIONS HUB & 12 CORE MODULES (STUNNING SAAS CARD GRID) */}
      <section
        id="solutions-hub"
        style={{
          padding: '4rem 1.5rem 6rem',
          maxWidth: '1240px',
          width: '100%',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '3rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '720px' }}>
          <span
            style={{
              color: '#38bdf8',
              fontWeight: 800,
              fontSize: '0.82rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
            }}
          >
            Unified Business Model Architecture
          </span>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 900,
              fontFamily: 'var(--font-display)',
              margin: '0.5rem 0 0.85rem',
              color: isDark ? '#f8fafc' : '#0f172a',
            }}
          >
            12 Core Enterprise Modules
          </h2>
          <p style={{ fontSize: '1rem', color: isDark ? '#94a3b8' : '#64748b', margin: 0, lineHeight: 1.6 }}>
            From front-office client acquisition to back-office supply chain fulfillment—every department operates in a single, synchronized data lake.
          </p>
        </div>

        {/* Search Bar matching reference */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            maxWidth: '560px',
            backgroundColor: isDark ? 'rgba(11, 17, 36, 0.85)' : '#ffffff',
            border: isDark ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid #cbd5e1',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            boxShadow: isDark
              ? '0 8px 24px -4px rgba(0, 0, 0, 0.5), 0 0 16px rgba(56, 189, 248, 0.12)'
              : '0 4px 16px rgba(15, 23, 42, 0.06)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '1.15rem', color: isDark ? '#38bdf8' : '#64748b' }}>
            <Search size={19} />
          </div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search business modules, ERP tools & AI solutions..."
            style={{
              flex: 1,
              padding: '0.85rem 0.95rem',
              border: 'none',
              outline: 'none',
              backgroundColor: 'transparent',
              color: isDark ? '#f8fafc' : '#0f172a',
              fontSize: '0.925rem',
            }}
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              style={{
                border: 'none',
                background: 'transparent',
                color: '#94a3b8',
                cursor: 'pointer',
                padding: '0 0.5rem',
              }}
            >
              <X size={17} />
            </button>
          )}
          <button
            onClick={() => {
              if (searchTerm.trim()) {
                navigate(`/topic/${slugify(searchTerm)}`);
              }
            }}
            style={{
              padding: '0.85rem 1.6rem',
              backgroundColor: isDark ? 'rgba(14, 165, 233, 0.15)' : '#f1f5f9',
              borderLeft: isDark ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid #cbd5e1',
              borderTop: 'none',
              borderRight: 'none',
              borderBottom: 'none',
              color: isDark ? '#38bdf8' : '#0f2b5c',
              fontWeight: 700,
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = isDark ? 'rgba(14, 165, 233, 0.28)' : '#e2e8f0';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = isDark ? 'rgba(14, 165, 233, 0.15)' : '#f1f5f9';
            }}
          >
            Search
          </button>
        </div>

        {/* 12 Solution Grid Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '1.5rem',
            width: '100%',
          }}
        >
          {filteredModules.map((item) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                onClick={() => handleModuleClick(item)}
                className="crm-card-interactive"
                style={{
                  backgroundColor: isDark ? 'rgba(11, 17, 36, 0.72)' : '#ffffff',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem 1.6rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.15rem',
                  cursor: 'pointer',
                  boxShadow: isDark
                    ? '0 6px 20px -2px rgba(0, 0, 0, 0.4)'
                    : '0 4px 12px -2px rgba(15, 23, 42, 0.05)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  position: 'relative',
                }}
              >
                {/* Top Row: Icon & Tag */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div
                    style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: isDark ? 'rgba(14, 165, 233, 0.1)' : 'rgba(2, 132, 199, 0.08)',
                      border: isDark ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid rgba(2, 132, 199, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: item.accent,
                    }}
                  >
                    <IconComponent size={30} strokeWidth={1.8} />
                  </div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 800,
                      color: '#38bdf8',
                      letterSpacing: '0.04em',
                      backgroundColor: isDark ? 'rgba(56, 189, 248, 0.1)' : 'rgba(56, 189, 248, 0.08)',
                      padding: '2px 8px',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    CORE
                  </span>
                </div>

                {/* Module Title */}
                <div>
                  <h3
                    style={{
                      margin: '0 0 0.4rem',
                      fontSize: '1.05rem',
                      fontWeight: 800,
                      letterSpacing: '0.05em',
                      color: isDark ? '#f8fafc' : '#0f172a',
                      fontFamily: 'var(--font-display)',
                    }}
                  >
                    {item.name}
                  </h3>
                  <p style={{ margin: 0, fontSize: '0.875rem', lineHeight: 1.5, color: isDark ? '#94a3b8' : '#64748b' }}>
                    {item.desc}
                  </p>
                </div>

                {/* Action Link */}
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.82rem',
                    fontWeight: 700,
                    color: '#38bdf8',
                  }}
                >
                  <span>Explore Architecture</span>
                  <ChevronRight size={14} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. PRE-FOOTER CALL TO ACTION BANNER */}
      <section
        style={{
          padding: '0 1.5rem 5rem',
          maxWidth: '1240px',
          width: '100%',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            backgroundColor: isDark ? 'rgba(7, 12, 28, 0.95)' : '#0f2b5c',
            border: isDark ? '1px solid rgba(56, 189, 248, 0.35)' : 'none',
            borderRadius: 'var(--radius-xl)',
            padding: '3.5rem 2.5rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            color: '#ffffff',
            boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.5)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <h2
            style={{
              margin: 0,
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 900,
              fontFamily: 'var(--font-display)',
              letterSpacing: '-0.02em',
            }}
          >
            Ready to Unify Your Enterprise Stack?
          </h2>
          <p style={{ margin: 0, maxWidth: '680px', fontSize: '1.05rem', color: '#93c5fd', lineHeight: 1.6 }}>
            Eliminate stack sprawl and empower every team member with autonomous CRM, ERP, and AI. Launch your enterprise portal today.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.5rem' }}>
            <button
              onClick={() => navigate('/crm/signup')}
              style={{
                padding: '0.85rem 2.25rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: '#ffffff',
                color: '#0f2b5c',
                border: 'none',
                fontWeight: 800,
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
              }}
            >
              Create Account
            </button>
            <button
              onClick={() => navigate('/login')}
              style={{
                padding: '0.85rem 2rem',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.35)',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
              }}
            >
              Sign In to Portal
            </button>
          </div>
        </div>
      </section>

      {/* 5. PROPER ENTERPRISE MEGA FOOTER (DISTINCT CONTRAST BACKGROUND, BRAND SECTION & 4 COLUMNS) */}
      <footer
        id="footer-section"
        style={{
          marginTop: 'auto',
          backgroundColor: isDark ? '#040712' : '#0f172a',
          borderTop: isDark ? '1px solid rgba(56, 189, 248, 0.18)' : '1px solid #1e293b',
          color: '#cbd5e1',
          padding: '5rem 2.5rem 2.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3.5rem',
          }}
        >
          {/* Brand Column Left */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <AiEnergyLogo size={38} showText={false} />
              <div>
                <div style={{ fontSize: '1.25rem', fontWeight: 900, color: '#ffffff', fontFamily: 'var(--font-display)' }}>
                  CRM NERGY
                </div>
                <div style={{ fontSize: '0.72rem', color: '#38bdf8', fontWeight: 700 }}>
                  Advanced Artificial Intelligence
                </div>
              </div>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: '#94a3b8', margin: '0 0 1.5rem' }}>
              Delivering the most relevant CRM ERP software for your business to thrive and honing our AAI development to effectively prepare you to scale.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(34, 197, 94, 0.12)',
                border: '1px solid rgba(34, 197, 94, 0.3)',
                color: '#22c55e',
                fontSize: '0.75rem',
                fontWeight: 700,
              }}
            >
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
              All Systems Operational • Release 2027
            </div>
          </div>

          {/* Column 1 */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                borderBottom: '2px solid #38bdf8',
                paddingBottom: '0.5rem',
                display: 'inline-block',
              }}
            >
              Support & AI
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerColumn1.map((item, idx) => (
                <li key={idx}>
                  <span
                    onClick={() => handleFooterLinkClick(item)}
                    className="crm-footer-link"
                    style={{ fontSize: '0.85rem', color: '#94a3b8' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                borderBottom: '2px solid #06b6d4',
                paddingBottom: '0.5rem',
                display: 'inline-block',
              }}
            >
              Resources & Guides
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerColumn2.map((item, idx) => (
                <li key={idx}>
                  <span
                    onClick={() => handleFooterLinkClick(item)}
                    className="crm-footer-link"
                    style={{ fontSize: '0.85rem', color: '#94a3b8' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                borderBottom: '2px solid #f97316',
                paddingBottom: '0.5rem',
                display: 'inline-block',
              }}
            >
              Business Solutions
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerColumn3.map((item, idx) => (
                <li key={idx}>
                  <span
                    onClick={() => handleFooterLinkClick(item)}
                    className="crm-footer-link"
                    style={{ fontSize: '0.85rem', color: '#94a3b8' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4
              style={{
                fontSize: '0.9rem',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1.25rem',
                borderBottom: '2px solid #3b82f6',
                paddingBottom: '0.5rem',
                display: 'inline-block',
              }}
            >
              CRM NERGY
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {footerColumn4.map((item, idx) => (
                <li key={idx}>
                  <span
                    onClick={() => handleFooterLinkClick(item)}
                    className="crm-footer-link"
                    style={{ fontSize: '0.85rem', color: '#94a3b8' }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Sub-footer */}
        <div
          style={{
            maxWidth: '1280px',
            margin: '4rem auto 0',
            paddingTop: '2rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1.25rem',
            fontSize: '0.82rem',
            color: '#64748b',
          }}
        >
          <div>© 2027 CRM nErgy. Advanced Artificial Intelligence. All rights reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.75rem' }}>
            <span style={{ color: '#94a3b8' }}>Make AI Your Bestie</span>
            <span>•</span>
            <span onClick={() => navigate('/login')} style={{ cursor: 'pointer', color: '#38bdf8', fontWeight: 600 }}>
              Portal Login
            </span>
            <span>•</span>
            <span onClick={() => navigate('/crm/signup')} style={{ cursor: 'pointer', color: '#38bdf8', fontWeight: 600 }}>
              Create Account
            </span>
          </div>
        </div>
      </footer>

      {/* 6. INTERACTIVE ASK ZUNME - VA MODAL */}
      {showVaModal && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 120,
            backgroundColor: 'rgba(0, 0, 0, 0.65)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1rem',
          }}
          onClick={() => setShowVaModal(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: '100%',
              maxWidth: '540px',
              backgroundColor: isDark ? '#0c1224' : '#ffffff',
              border: isDark ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid #cbd5e1',
              borderRadius: 'var(--radius-xl)',
              boxShadow: isDark
                ? '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 30px rgba(56, 189, 248, 0.2)'
                : '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                padding: '1.1rem 1.4rem',
                backgroundColor: isDark ? 'rgba(15, 23, 42, 0.75)' : '#f8fafc',
                borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'rgba(6, 182, 212, 0.18)',
                    color: '#06b6d4',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 12px rgba(6, 182, 212, 0.3)',
                  }}
                >
                  <Bot size={20} />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: isDark ? '#f8fafc' : '#0f172a' }}>
                    Ask Zunme - VA
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600 }}>
                    AAI Virtual Assistant • CRM nErgy
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowVaModal(false)}
                style={{
                  border: 'none',
                  background: 'transparent',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: '4px',
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Chat Body */}
            <div
              style={{
                padding: '1.25rem 1.4rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                maxHeight: '340px',
                overflowY: 'auto',
              }}
            >
              {vaChat.map((msg, i) => (
                <div
                  key={i}
                  style={{
                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                    maxWidth: '85%',
                    padding: '0.8rem 1.1rem',
                    borderRadius: 'var(--radius-lg)',
                    fontSize: '0.885rem',
                    lineHeight: 1.5,
                    backgroundColor:
                      msg.sender === 'user'
                        ? 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)'
                        : isDark
                        ? 'rgba(15, 23, 42, 0.8)'
                        : '#f1f5f9',
                    color: msg.sender === 'user' ? '#ffffff' : isDark ? '#f1f5f9' : '#0f172a',
                    border:
                      msg.sender === 'user'
                        ? 'none'
                        : isDark
                        ? '1px solid rgba(255, 255, 255, 0.08)'
                        : '1px solid #e2e8f0',
                  }}
                >
                  {msg.text}
                </div>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={handleSendVaMessage}
              style={{
                padding: '0.9rem 1.4rem',
                borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                display: 'flex',
                gap: '0.75rem',
                backgroundColor: isDark ? '#080c1a' : '#ffffff',
              }}
            >
              <input
                type="text"
                value={vaMessage}
                onChange={(e) => setVaMessage(e.target.value)}
                placeholder="Ask Zunme anything about CRM nErgy..."
                style={{
                  flex: 1,
                  padding: '0.65rem 0.95rem',
                  borderRadius: 'var(--radius-md)',
                  border: isDark ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid #cbd5e1',
                  backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : '#f8fafc',
                  color: isDark ? '#f8fafc' : '#0f172a',
                  fontSize: '0.885rem',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '0.65rem 1.15rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: '#0284c7',
                  color: '#ffffff',
                  border: 'none',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  boxShadow: '0 0 12px rgba(2, 132, 199, 0.35)',
                }}
              >
                <Send size={15} />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrmLanding;
