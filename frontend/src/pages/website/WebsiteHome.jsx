import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  MessageSquare,
  Bot,
  ShieldCheck,
  Zap,
  Globe,
  Layers,
  CheckCircle2,
  Lock,
  ChevronDown,
  Building2,
  DollarSign,
  TrendingUp,
  Boxes,
  HelpCircle
} from 'lucide-react';
import {
  CRM_FEATURES_DATA,
  CRM_SOLUTIONS_DATA,
  INDUSTRIES_DATA,
  FAQ_QUESTIONS_DATA
} from '../../data/websiteNavData';

export const WebsiteHome = () => {
  const { onOpenZunme, onOpenSales, onSelectItem } = useOutletContext() || {};

  // Features filter tab
  const [featureCategory, setFeatureCategory] = useState('All');
  const featureCategories = [
    'All',
    'Core CRM',
    'ERP & Logistics',
    'Finance & Operations',
    'Sales & Growth',
    'Marketing & Web',
    'HR & Talent',
    'Governance & Security'
  ];

  // FAQ Active view tabs
  const [faqTab, setFaqTab] = useState('features'); // 'features' | 'solutions' | 'industries' | 'zunme'
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const filteredFeatures = featureCategory === 'All'
    ? CRM_FEATURES_DATA
    : CRM_FEATURES_DATA.filter((f) => f.category === featureCategory);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {/* ======================================================== */}
      {/* 1. HERO SECTION                                          */}
      {/* ======================================================== */}
      <section style={{
        padding: '4.5rem 1.25rem 4rem 1.25rem',
        textAlign: 'center',
        background: 'radial-gradient(ellipse at 50% -10%, rgba(79, 70, 229, 0.12) 0%, transparent 70%)',
        borderBottom: '1px solid var(--web-border)'
      }}>
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          {/* Energy Pill & Slogan */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '24px',
            background: 'rgba(99, 102, 241, 0.08)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            fontSize: '12.5px',
            fontWeight: 700,
            color: '#4f46e5'
          }}>
            <Sparkles size={14} style={{ color: '#f59e0b' }} />
            <span>CRM Solutions Every Business Needs • “Make AI Your Bestie”</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.1rem, 5vw, 3.4rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            color: 'var(--web-text-main)',
            margin: 0
          }}>
            CRM Solutions Every Business Needs
          </h1>

          <blockquote style={{
            fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)',
            fontWeight: 600,
            fontStyle: 'italic',
            color: 'var(--web-text-main)',
            lineHeight: 1.6,
            maxWidth: '820px',
            margin: '0.25rem 0 0 0',
            padding: '0 1rem',
            borderLeft: 'none'
          }}>
            “Delivering the most relevant CRM ERP software for your business to thrive and honing our AAI development to effectively prepare you to scale.”
          </blockquote>

          <p style={{
            fontSize: 'clamp(0.95rem, 1.8vw, 1.05rem)',
            color: 'var(--web-text-muted)',
            lineHeight: 1.6,
            maxWidth: '740px',
            margin: 0
          }}>
            A complete operating system combining all <strong>23 core CRM features</strong>, <strong>4 tailored solution frameworks</strong>, and <strong>23 industry modules</strong> with the autonomous power of the ZUNME AI Studio.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', marginTop: '0.75rem' }}>
            {/* Primary Features CTA */}
            <a
              href="#features"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                borderRadius: '10px',
                background: '#4f46e5',
                color: '#ffffff',
                textDecoration: 'none',
                fontWeight: 700,
                fontSize: '14px',
                boxShadow: '0 4px 16px rgba(79, 70, 229, 0.35)',
                transition: 'transform 0.2s ease'
              }}
            >
              <span>Explore 23 Features</span>
              <ArrowRight size={16} />
            </a>

            {/* Ask My Zunme CTA */}
            <button
              type="button"
              onClick={onOpenZunme}
              className="website-cta-zunme"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 22px',
                fontSize: '14px'
              }}
            >
              <Bot size={17} style={{ color: '#fef08a' }} />
              <span>Ask My Zunme — VA Assistant</span>
              <span style={{ fontWeight: 900 }}>&gt;&gt;</span>
            </button>

            {/* SALES chat eBox Button */}
            <button
              type="button"
              onClick={onOpenSales}
              className="website-btn-sales"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 22px',
                borderRadius: '10px',
                fontSize: '14px'
              }}
            >
              <MessageSquare size={17} />
              <span>SALES — chat eBox</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.75rem',
            flexWrap: 'wrap',
            fontSize: '12px',
            color: 'var(--web-text-muted)',
            marginTop: '1.5rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--web-border)',
            width: '100%'
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} style={{ color: '#10b981' }} />
              Enterprise Data Vault
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Zap size={16} style={{ color: '#f59e0b' }} />
              Real-time Workflows
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Globe size={16} style={{ color: '#0284c7' }} />
              23 Industry Configurations
            </span>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SECTION: 23 CRM FEATURES (Dolibarr Benchmark Style)   */}
      {/* ======================================================== */}
      <section id="features" style={{
        padding: '4rem 1.25rem',
        maxWidth: '1380px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 800,
            color: '#4f46e5',
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}>
            CRM Solutions Every Business Needs
          </span>
          <h2 style={{ fontSize: '28px', fontWeight: 900, color: 'var(--web-text-main)', margin: '4px 0 8px 0' }}>
            CRM NERGY Software Features (23 Modules)
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--web-text-muted)', maxWidth: '780px', margin: '0 auto', lineHeight: 1.5 }}>
            CRM software is essential for various industries to manage customer relationships and enhance operational efficiency. Every module is styled with CRM nErgy icon buttons inspired by the Dolibarr benchmark architecture.
          </p>

          {/* Category Filter Pills */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginTop: '1.5rem'
          }}>
            {featureCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setFeatureCategory(cat)}
                style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: featureCategory === cat ? 700 : 500,
                  backgroundColor: featureCategory === cat ? '#4f46e5' : 'var(--web-surface)',
                  color: featureCategory === cat ? '#ffffff' : 'var(--web-text-muted)',
                  border: `1px solid ${featureCategory === cat ? '#4f46e5' : 'var(--web-border)'}`,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 23 Cards Grid */}
        <div className="features-mega-grid">
          {filteredFeatures.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.id}
                className="dolibarr-card"
                onClick={() => onSelectItem && onSelectItem(f)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <div className="dolibarr-icon-box">
                    <Icon size={20} />
                  </div>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 700,
                    background: 'var(--web-surface-subtle)',
                    color: '#4f46e5',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    border: '1px solid var(--web-border)'
                  }}>
                    {f.tag}
                  </span>
                </div>
                <span className="dolibarr-title">{f.name}</span>
                <span className="dolibarr-desc">{f.desc}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2B. SECTION: BRANDING AND CUSTOMIZATION (CLIENT SPEC)    */}
      {/* ======================================================== */}
      <section style={{
        padding: '0 1.25rem 3.5rem 1.25rem',
        maxWidth: '1380px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(2, 132, 199, 0.05) 100%)',
          border: '1px solid var(--web-border)',
          borderRadius: '16px',
          padding: '2rem 1.75rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.04)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              fontSize: '11px',
              fontWeight: 800,
              color: '#4f46e5',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              background: 'rgba(79, 70, 229, 0.1)',
              padding: '3px 10px',
              borderRadius: '20px'
            }}>
              Branding and Customization
            </span>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#f59e0b' }}>
              “Make AI Your Friend”
            </span>
          </div>

          <h3 style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
            fontWeight: 800,
            color: 'var(--web-text-main)',
            margin: 0,
            lineHeight: 1.3
          }}>
            It’s Your Business, Displaying Your Brand, powered by CRM nErgy Software Customization
          </h3>

          <p style={{
            fontSize: '14px',
            color: 'var(--web-text-muted)',
            lineHeight: 1.65,
            margin: 0,
            maxWidth: '1020px'
          }}>
            The CRM nErgy drag-and-drop feature in customizable CRM software greatly enhances usability and efficiency, enabling users to customize their systems according to their specific business processes without requiring any coding skills. This functionality is crucial for contemporary CRM solutions, rendering them more flexible and user-friendly.
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingTop: '0.75rem',
            borderTop: '1px solid var(--web-border)'
          }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--web-text-main)' }}>
              CRM NERGY — “Make AI Your Friend”
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => {
                  const whiteLabelItem = CRM_FEATURES_DATA.find((f) => f.id === 'white-label-crm');
                  if (onSelectItem && whiteLabelItem) onSelectItem(whiteLabelItem);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 18px',
                  borderRadius: '8px',
                  background: 'var(--web-surface)',
                  border: '1px solid var(--web-border)',
                  color: 'var(--web-text-main)',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                <span>White Label Customization</span>
                <ArrowRight size={14} />
              </button>

              <button
                type="button"
                onClick={onOpenSales}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 20px',
                  borderRadius: '8px',
                  background: '#4f46e5',
                  color: '#ffffff',
                  fontSize: '13px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 12px rgba(79, 70, 229, 0.25)'
                }}
              >
                <MessageSquare size={14} />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. SECTION: 4 CRM SOLUTIONS GROUPS                      */}
      {/* ======================================================== */}
      <section id="solutions" style={{
        padding: '4rem 1.25rem',
        backgroundColor: 'var(--web-surface-subtle)',
        borderTop: '1px solid var(--web-border)',
        borderBottom: '1px solid var(--web-border)'
      }}>
        <div style={{ maxWidth: '1380px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Strategic Business Alignment
            </span>
            <h2 style={{ fontSize: '28px', fontWeight: 900, color: 'var(--web-text-main)', margin: '4px 0 8px 0' }}>
              CRM Solutions (4 Solution Groups)
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--web-text-muted)', maxWidth: '680px', margin: '0 auto' }}>
              Structured frameworks addressing 4 Types of CRM Software, Business CRM Software, Solutions for Entrepreneurs, and Third Party Integration.
            </p>
          </div>

          {/* White Label CRM or ERP Banner (Client Requirement) */}
          <div style={{
            background: 'var(--web-surface)',
            border: '1px solid var(--web-border)',
            borderLeft: '4px solid #0284c7',
            borderRadius: '14px',
            padding: '1.5rem 1.75rem',
            marginBottom: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.03)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{
                fontSize: '11px',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#0284c7',
                letterSpacing: '0.06em'
              }}>
                White Label Enterprise Opportunity
              </span>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--web-text-muted)' }}>
                “Make AI Your Bestie”
              </span>
            </div>

            <h3 style={{ fontSize: '19px', fontWeight: 800, color: 'var(--web-text-main)', margin: 0, lineHeight: 1.3 }}>
              Build & Promote Your Brand with the White Label CRM or ERP Software
            </h3>

            <p style={{ fontSize: '13.5px', color: 'var(--web-text-muted)', lineHeight: 1.6, margin: 0, maxWidth: '1080px' }}>
              CRM nErgy White Label CRM or ERP software includes customizable branding, client portals, sales and marketing automation, project management tools and much more. These platforms help businesses create new revenue streams by reselling the CRM solution under their own brand.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginTop: '0.5rem' }}>
              <button
                type="button"
                onClick={() => {
                  const whiteLabelItem = CRM_FEATURES_DATA.find((f) => f.id === 'white-label-crm');
                  if (onSelectItem && whiteLabelItem) onSelectItem(whiteLabelItem);
                }}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#0284c7',
                  fontSize: '13px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  padding: 0,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                <span>READ MORE &gt;&gt; continue on the White Label Feature Page</span>
              </button>

              <button
                type="button"
                onClick={onOpenSales}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 16px',
                  borderRadius: '7px',
                  background: '#0284c7',
                  color: '#ffffff',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <span>Contact Us</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          <div className="solutions-mega-grid">
            {CRM_SOLUTIONS_DATA.map((group, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--web-surface)',
                  borderRadius: '16px',
                  border: '1px solid var(--web-border)',
                  padding: '1.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.03)'
                }}
              >
                <div style={{ borderBottom: '1px solid var(--web-border)', paddingBottom: '0.75rem' }}>
                  <span style={{
                    fontSize: '10px',
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    color: '#0284c7',
                    letterSpacing: '0.06em'
                  }}>
                    {group.badge}
                  </span>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--web-text-main)', margin: '2px 0 0 0' }}>
                    {group.groupTitle}
                  </h3>
                  <span style={{ fontSize: '11.5px', color: 'var(--web-text-muted)' }}>{group.subtitle}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {group.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.id}
                        className="dolibarr-card"
                        style={{ padding: '0.75rem' }}
                        onClick={() => onSelectItem && onSelectItem({ ...item, groupTitle: group.groupTitle })}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <div style={{
                            width: '28px',
                            height: '28px',
                            borderRadius: '7px',
                            background: 'rgba(2, 132, 199, 0.1)',
                            color: '#0284c7',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            <Icon size={15} />
                          </div>
                          <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--web-text-main)' }}>
                            {item.name}
                          </span>
                        </div>
                        <span className="dolibarr-desc">{item.desc}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. SECTION: 23 INDUSTRIES SHOWCASE                       */}
      {/* ======================================================== */}
      <section id="industries" style={{
        padding: '4rem 1.25rem',
        maxWidth: '1380px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Domain-Specific Solutions
          </span>
          <h2 style={{ fontSize: '28px', fontWeight: 900, color: 'var(--web-text-main)', margin: '4px 0 8px 0' }}>
            Industries Using the CRM nErgy Software (23 Sectors)
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--web-text-muted)', maxWidth: '780px', margin: '0 auto', lineHeight: 1.5 }}>
            Some of the Industries that use the CRM nErgy Software. CRM software is essential for various industries to manage customer relationships and enhance operational efficiency.
          </p>
        </div>

        <div className="industries-mega-grid">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="dolibarr-card"
                onClick={() => onSelectItem && onSelectItem(ind)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                  <div className="dolibarr-icon-box" style={{
                    width: '36px',
                    height: '36px',
                    marginBottom: 0,
                    background: 'rgba(16, 185, 129, 0.1)',
                    color: '#10b981'
                  }}>
                    <Icon size={18} />
                  </div>
                  <span className="dolibarr-title" style={{ margin: 0 }}>{ind.name}</span>
                </div>
                <span className="dolibarr-desc">{ind.desc}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. SECTION: FAQS & KNOWLEDGE (CLIENT EXACT REQUIREMENTS) */}
      {/* ======================================================== */}
      <section id="faqs" style={{
        padding: '4.5rem 1.25rem',
        backgroundColor: 'var(--web-surface)',
        borderTop: '1px solid var(--web-border)'
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              Fact and Questions
            </span>
            <h2 style={{ fontSize: '28px', fontWeight: 900, color: 'var(--web-text-main)', margin: '4px 0 8px 0' }}>
              FAQs & Interactive Module Directory
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--web-text-muted)', maxWidth: '680px', margin: '0 auto' }}>
              Browse features, solution groups, and industry options as interactive icon buttons or review common questions.
            </p>

            {/* FAQ Visual Selector Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginTop: '1.5rem' }}>
              <button
                type="button"
                onClick={() => setFaqTab('features')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: 700,
                  backgroundColor: faqTab === 'features' ? '#4f46e5' : 'var(--web-surface-subtle)',
                  color: faqTab === 'features' ? '#ffffff' : 'var(--web-text-muted)',
                  border: `1px solid ${faqTab === 'features' ? '#4f46e5' : 'var(--web-border)'}`,
                  cursor: 'pointer'
                }}
              >
                CRM Features (Icon Buttons)
              </button>
              <button
                type="button"
                onClick={() => setFaqTab('solutions')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: 700,
                  backgroundColor: faqTab === 'solutions' ? '#0284c7' : 'var(--web-surface-subtle)',
                  color: faqTab === 'solutions' ? '#ffffff' : 'var(--web-text-muted)',
                  border: `1px solid ${faqTab === 'solutions' ? '#0284c7' : 'var(--web-border)'}`,
                  cursor: 'pointer'
                }}
              >
                CRM Solutions (4 Groups)
              </button>
              <button
                type="button"
                onClick={() => setFaqTab('industries')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: 700,
                  backgroundColor: faqTab === 'industries' ? '#10b981' : 'var(--web-surface-subtle)',
                  color: faqTab === 'industries' ? '#ffffff' : 'var(--web-text-muted)',
                  border: `1px solid ${faqTab === 'industries' ? '#10b981' : 'var(--web-border)'}`,
                  cursor: 'pointer'
                }}
              >
                Industries (Icon Buttons)
              </button>
              <button
                type="button"
                onClick={() => setFaqTab('zunme')}
                style={{
                  padding: '8px 16px',
                  borderRadius: '10px',
                  fontSize: '13px',
                  fontWeight: 700,
                  backgroundColor: faqTab === 'zunme' ? '#ec4899' : 'var(--web-surface-subtle)',
                  color: faqTab === 'zunme' ? '#ffffff' : 'var(--web-text-muted)',
                  border: `1px solid ${faqTab === 'zunme' ? '#ec4899' : 'var(--web-border)'}`,
                  cursor: 'pointer'
                }}
              >
                What is My Zunme?
              </button>
            </div>
          </div>

          {/* TAB 1: CRM FEATURES ICON BUTTONS GRID */}
          {faqTab === 'features' && (
            <div style={{
              background: 'var(--web-surface-subtle)',
              borderRadius: '16px',
              border: '1px solid var(--web-border)',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--web-text-main)', margin: 0 }}>
                  Display All Features (Icon Buttons)
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--web-text-muted)' }}>
                  Click any icon button to inspect feature capabilities or request a demo.
                </span>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: '10px'
              }}>
                {CRM_FEATURES_DATA.map((f) => {
                  const Icon = f.icon;
                  return (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => onSelectItem && onSelectItem(f)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        background: 'var(--web-surface)',
                        border: '1px solid var(--web-border)',
                        color: 'var(--web-text-main)',
                        cursor: 'pointer',
                        textAlign: 'left',
                        transition: 'all 0.15s ease'
                      }}
                      className="hover:surface-secondary"
                    >
                      <div style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '7px',
                        background: 'rgba(99, 102, 241, 0.1)',
                        color: '#4f46e5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Icon size={16} />
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 700, lineHeight: 1.2 }}>
                        {f.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: SOLUTIONS 4 GROUPS */}
          {faqTab === 'solutions' && (
            <div style={{
              background: 'var(--web-surface-subtle)',
              borderRadius: '16px',
              border: '1px solid var(--web-border)',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--web-text-main)', margin: 0 }}>
                  CRM Solutions: 4 Specialized Groups
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--web-text-muted)' }}>
                  Architectural and enterprise solution categories defined in the specification.
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '14px' }}>
                {CRM_SOLUTIONS_DATA.map((group, idx) => (
                  <div key={idx} style={{ background: 'var(--web-surface)', padding: '1.1rem', borderRadius: '12px', border: '1px solid var(--web-border)' }}>
                    <span style={{ fontSize: '10px', fontWeight: 800, color: '#0284c7', textTransform: 'uppercase' }}>
                      {group.badge}
                    </span>
                    <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--web-text-main)', margin: '2px 0 8px 0' }}>
                      {group.groupTitle}
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      {group.items.map((i) => (
                        <div
                          key={i.id}
                          onClick={() => onSelectItem && onSelectItem({ ...i, groupTitle: group.groupTitle })}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '6px 8px',
                            borderRadius: '6px',
                            fontSize: '12px',
                            fontWeight: 600,
                            color: 'var(--web-text-main)',
                            cursor: 'pointer',
                            background: 'var(--web-surface-subtle)'
                          }}
                        >
                          <CheckCircle2 size={13} style={{ color: '#0284c7', flexShrink: 0 }} />
                          <span>{i.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: INDUSTRIES ICON BUTTONS GRID */}
          {faqTab === 'industries' && (
            <div style={{
              background: 'var(--web-surface-subtle)',
              borderRadius: '16px',
              border: '1px solid var(--web-border)',
              padding: '1.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--web-text-main)', margin: 0 }}>
                  Industries (Icon Buttons)
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--web-text-muted)' }}>
                  All 23 vertical sector icon buttons available for enterprise configuration.
                </span>
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                gap: '10px'
              }}>
                {INDUSTRIES_DATA.map((ind) => {
                  const Icon = ind.icon;
                  return (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => onSelectItem && onSelectItem(ind)}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        background: 'var(--web-surface)',
                        border: '1px solid var(--web-border)',
                        color: 'var(--web-text-main)',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <div style={{
                        width: '30px',
                        height: '30px',
                        borderRadius: '7px',
                        background: 'rgba(16, 185, 129, 0.1)',
                        color: '#10b981',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <Icon size={16} />
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 700, lineHeight: 1.2 }}>
                        {ind.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 4: WHAT IS MY ZUNME? FEATURED CARD */}
          {faqTab === 'zunme' && (
            <div style={{
              background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(236, 72, 153, 0.08) 100%)',
              borderRadius: '16px',
              border: '1px solid rgba(99, 102, 241, 0.25)',
              padding: '2rem',
              marginBottom: '2rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', flexWrap: 'wrap' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '14px',
                  background: 'linear-gradient(135deg, #4f46e5 0%, #ec4899 100%)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 24px rgba(99, 102, 241, 0.35)',
                  flexShrink: 0
                }}>
                  <Bot size={28} />
                </div>
                <div style={{ flex: 1, minWidth: '280px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#ec4899', textTransform: 'uppercase' }}>
                      Artificial Intelligence SuperHouse
                    </span>
                    <span style={{ fontSize: '10px', background: 'rgba(99, 102, 241, 0.15)', color: '#4f46e5', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                      1,000+ Prompt Templates
                    </span>
                  </div>
                  <h3 style={{ fontSize: '22px', fontWeight: 900, color: 'var(--web-text-main)', margin: '4px 0 10px 0' }}>
                    What is My Zunme?
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--web-text-muted)', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
                    <strong>ZUNME</strong> is the integrated creative, monetization, and SEO engine inside CRM nErgy AI. It empowers creators, marketing agencies, and business owners to build content rapidly using pre-built AI workflows. Featuring over 1,000 specialized templates, ZUNME powers autonomous AI video agents, brand soundtrack synthesis, script writing, and enterprise copy generation.
                  </p>
                  <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      onClick={onOpenZunme}
                      className="website-cta-zunme"
                      style={{ padding: '8px 18px', fontSize: '13px' }}
                    >
                      <Sparkles size={14} />
                      <span>Launch Ask My Zunme Assistant &gt;&gt;</span>
                    </button>
                    <button
                      type="button"
                      onClick={onOpenSales}
                      className="website-btn-sales"
                      style={{ padding: '8px 18px', fontSize: '13px', borderRadius: '8px' }}
                    >
                      <span>Inquire About Zunme Licensing</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Accordion Questions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {FAQ_QUESTIONS_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    border: '1px solid var(--web-border)',
                    borderRadius: '12px',
                    background: 'var(--web-surface)',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    style={{
                      width: '100%',
                      padding: '1.1rem 1.25rem',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span style={{ fontSize: '14.5px', fontWeight: 700, color: 'var(--web-text-main)' }}>
                      {faq.q}
                    </span>
                    <ChevronDown size={18} style={{
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s',
                      color: 'var(--web-text-muted)'
                    }} />
                  </button>
                  {isOpen && (
                    <div style={{
                      padding: '0 1.25rem 1.25rem 1.25rem',
                      fontSize: '13.5px',
                      color: 'var(--web-text-muted)',
                      lineHeight: 1.6,
                      borderTop: '1px solid var(--web-border)',
                      paddingTop: '0.85rem'
                    }}>
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. SECTION: ABOUT & SECURITY ARCHITECTURE (#about)       */}
      {/* ======================================================== */}
      <section id="about" style={{
        padding: '4rem 1.25rem',
        backgroundColor: 'var(--web-surface-subtle)',
        borderTop: '1px solid var(--web-border)'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            Enterprise Governance
          </span>
          <h2 style={{ fontSize: '26px', fontWeight: 900, color: 'var(--web-text-main)', margin: '4px 0 12px 0' }}>
            Security, Resilience & High-Throughput Architecture
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--web-text-muted)', maxWidth: '680px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
            Designed for institutional-grade reliability, CRM nErgy implements strict tenant isolation, cryptographic vault storage, and granular role-based access control.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            <div style={{ background: 'var(--web-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--web-border)', textAlign: 'left' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(79, 70, 229, 0.1)', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Lock size={20} />
              </div>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--web-text-main)', margin: '0 0 6px 0' }}>
                Tenant Vault Isolation
              </h4>
              <p style={{ fontSize: '12.5px', color: 'var(--web-text-muted)', lineHeight: 1.5, margin: 0 }}>
                Every corporate subscriber operates within an encrypted tenant boundary ensuring proprietary deal flows and employee data remain isolated.
              </p>
            </div>

            <div style={{ background: 'var(--web-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--web-border)', textAlign: 'left' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(2, 132, 199, 0.1)', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Boxes size={20} />
              </div>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--web-text-main)', margin: '0 0 6px 0' }}>
                Real-Time Synchronous Sync
              </h4>
              <p style={{ fontSize: '12.5px', color: 'var(--web-text-muted)', lineHeight: 1.5, margin: 0 }}>
                Sub-second data replication across inventory, sales orders, leads, and accounting ledgers eliminates batch reconciliation delays.
              </p>
            </div>

            <div style={{ background: 'var(--web-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--web-border)', textAlign: 'left' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <ShieldCheck size={20} />
              </div>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--web-text-main)', margin: '0 0 6px 0' }}>
                Audit-Ready Compliance
              </h4>
              <p style={{ fontSize: '12.5px', color: 'var(--web-text-muted)', lineHeight: 1.5, margin: 0 }}>
                Immutable audit logging on every administrative action, contract signature, and banking transaction prepared for GAAP/IFRS reviews.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
