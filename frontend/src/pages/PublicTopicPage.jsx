import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import {
  Sun,
  Moon,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Bot,
  Send,
  HelpCircle,
  Shield,
  Layers,
  ArrowRight,
  ExternalLink,
  Building2,
  Mail,
  Calculator,
  ChevronDown
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { AiEnergyLogo } from '../components/common/AiEnergyLogo';
import { getTopicBySlug, slugify, topicData } from '../data/topicContent';

export const PublicTopicPage = ({ slug: propSlug }) => {
  const { slug: paramSlug } = useParams();
  const slug = propSlug || paramSlug;
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  // Scroll to top when page opens or slug changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const topic = getTopicBySlug(slug) || {
    title: slug ? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()) : 'Platform Information',
    category: 'CRM nErgy Platform',
    subtitle: 'Unified Enterprise Solutions for Modern Scaling Organizations',
    overview: 'Welcome to this section of the CRM nErgy platform. Here you will find authoritative technical, operational, and architectural documentation regarding our unified CRM, ERP, and Autonomous Artificial Intelligence ecosystem.',
    keyPoints: [
      'Directly unified into the single-database CRM nErgy enterprise cloud.',
      'Protected by 256-bit AES encryption, TLS 1.3, and multi-tenant isolation.',
      'Supported by autonomous Zunme VA agents for hands-free workflow automation.'
    ]
  };

  // State for interactive features on pages
  const [calcDeals, setCalcDeals] = useState(15);
  const [calcAvgValue, setCalcAvgValue] = useState(8000);
  const [calcRate, setCalcRate] = useState(12);

  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });

  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const isDark = theme === 'dark';

  const totalDealRevenue = calcDeals * calcAvgValue;
  const calculatedCommission = totalDealRevenue * (calcRate / 100);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactForm.email) return;
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleFooterLinkClick = (text) => {
    const targetSlug = slugify(text);
    navigate(`/topic/${targetSlug}`);
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

  return (
    <div
      style={{
        minHeight: '100vh',
        backgroundColor: isDark ? '#060a17' : '#f8fafc',
        backgroundImage: isDark
          ? `radial-gradient(circle at 15% 15%, rgba(14, 165, 233, 0.12) 0%, transparent 40%),
             radial-gradient(circle at 85% 25%, rgba(249, 115, 22, 0.08) 0%, transparent 40%),
             radial-gradient(circle at 50% 70%, rgba(6, 182, 212, 0.08) 0%, transparent 50%),
             radial-gradient(rgba(56, 189, 248, 0.04) 1px, transparent 1px)`
          : `radial-gradient(circle at 15% 15%, rgba(14, 165, 233, 0.08) 0%, transparent 40%),
             radial-gradient(circle at 85% 25%, rgba(249, 115, 22, 0.05) 0%, transparent 40%),
             radial-gradient(circle at 50% 70%, rgba(6, 182, 212, 0.06) 0%, transparent 50%),
             radial-gradient(rgba(14, 165, 233, 0.03) 1px, transparent 1px)`,
        backgroundSize: 'auto, auto, auto, 28px 28px',
        color: isDark ? '#f8fafc' : '#0f172a',
        fontFamily: 'var(--font-sans)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* 1. TOP HEADER */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          backgroundColor: isDark ? 'rgba(7, 11, 25, 0.85)' : 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: isDark ? '1px solid rgba(56, 189, 248, 0.15)' : '1px solid rgba(226, 232, 240, 0.8)',
          padding: '0.85rem 2.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          onClick={() => navigate('/')}
          style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }}
        >
          <AiEnergyLogo size={44} showText={false} />
          <div>
            <div
              style={{
                fontSize: '1.45rem',
                fontWeight: 900,
                letterSpacing: '0.04em',
                fontFamily: 'var(--font-display)',
                lineHeight: 1.15,
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
                fontSize: '0.78rem',
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

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
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
          <button
            onClick={() => navigate('/login')}
            style={{
              padding: '0.55rem 1.1rem',
              borderRadius: 'var(--radius-md)',
              border: isDark ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid #cbd5e1',
              backgroundColor: isDark ? 'rgba(15, 23, 42, 0.65)' : '#ffffff',
              color: isDark ? '#f8fafc' : '#0f172a',
              fontWeight: 700,
              fontSize: '0.875rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = '#38bdf8';
              e.currentTarget.style.color = '#38bdf8';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = isDark ? 'rgba(56, 189, 248, 0.3)' : '#cbd5e1';
              e.currentTarget.style.color = isDark ? '#f8fafc' : '#0f172a';
            }}
          >
            Login
          </button>

          {/* DISTINCT CREATE ACCOUNT BUTTON */}
          <button
            onClick={() => navigate('/crm/signup')}
            style={{
              padding: '0.55rem 1.25rem',
              borderRadius: 'var(--radius-md)',
              border: 'none',
              background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
              color: '#ffffff',
              fontWeight: 700,
              fontSize: '0.875rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              boxShadow: '0 4px 14px rgba(2, 132, 199, 0.35)',
              transition: 'all 0.2s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'translateY(-1px)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
          >
            <span>Create Account</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </header>

      {/* 2. SUB-NAVIGATION BAR */}
      <nav
        style={{
          backgroundColor: isDark ? 'rgba(11, 16, 33, 0.65)' : 'rgba(241, 245, 249, 0.85)',
          backdropFilter: 'blur(10px)',
          borderBottom: isDark ? '1px solid rgba(255, 255, 255, 0.06)' : '1px solid #e2e8f0',
          padding: '0.75rem 2rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: isDark ? '#94a3b8' : '#475569',
        }}
      >
        <span onClick={() => navigate('/topic/features')} style={{ cursor: 'pointer' }}>Features</span>
        <span onClick={() => navigate('/#solutions-section')} style={{ cursor: 'pointer' }}>Solutions</span>
        <span onClick={() => navigate('/topic/industries')} style={{ cursor: 'pointer' }}>Industries</span>
        <span onClick={() => navigate('/topic/faqs')} style={{ cursor: 'pointer' }}>FAQs</span>
        <span
          onClick={() => navigate('/topic/virtual-assistant')}
          style={{
            cursor: 'pointer',
            color: '#38bdf8',
            fontWeight: 700,
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            padding: '0.25rem 0.75rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: isDark ? 'rgba(6, 182, 212, 0.12)' : 'rgba(14, 165, 233, 0.1)',
            border: isDark ? '1px solid rgba(6, 182, 212, 0.35)' : '1px solid rgba(14, 165, 233, 0.3)',
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
            color: '#f97316',
            padding: '0.2rem 0.6rem',
            borderRadius: 'var(--radius-sm)',
            backgroundColor: isDark ? 'rgba(249, 115, 22, 0.1)' : 'rgba(249, 115, 22, 0.08)',
            border: '1px solid rgba(249, 115, 22, 0.25)',
          }}
        >
          SALES MORE
        </span>
        <span
          onClick={() => navigate('/topic/virtual-assistant')}
          style={{ cursor: 'pointer', color: '#38bdf8', fontWeight: 700 }}
        >
          Virtual Assistant &gt;&gt;
        </span>
      </nav>

      {/* 3. MAIN TOPIC PAGE BODY (NO POPUP - FULL PAGE VIEW) */}
      <main
        style={{
          flex: 1,
          maxWidth: '1040px',
          width: '100%',
          margin: '0 auto',
          padding: '3rem 1.5rem 5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '2.5rem',
        }}
      >
        {/* Breadcrumb & Back Button */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <button
            onClick={() => navigate('/')}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: 'var(--radius-md)',
              border: isDark ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid #cbd5e1',
              backgroundColor: isDark ? 'rgba(15, 23, 42, 0.6)' : '#ffffff',
              color: isDark ? '#38bdf8' : '#0284c7',
              fontWeight: 600,
              fontSize: '0.85rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
          >
            <ArrowLeft size={16} />
            ← Back to Home
          </button>

          <div style={{ fontSize: '0.85rem', color: isDark ? '#94a3b8' : '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span onClick={() => navigate('/')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Home</span>
            <span>/</span>
            <span style={{ color: '#38bdf8' }}>{topic.category}</span>
            <span>/</span>
            <span style={{ fontWeight: 600, color: isDark ? '#f8fafc' : '#0f172a' }}>{topic.title}</span>
          </div>
        </div>

        {/* Hero Section Banner */}
        <div
          style={{
            backgroundColor: isDark ? 'rgba(11, 17, 36, 0.75)' : '#ffffff',
            border: isDark ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid #cbd5e1',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem 2.5rem',
            boxShadow: isDark
              ? '0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 0 20px rgba(56, 189, 248, 0.1)'
              : '0 10px 25px -5px rgba(15, 23, 42, 0.05)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '4px',
              height: '100%',
              background: 'linear-gradient(to bottom, #38bdf8, #06b6d4, #f97316)',
            }}
          />

          <span
            style={{
              alignSelf: 'flex-start',
              padding: '0.35rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: isDark ? 'rgba(14, 165, 233, 0.15)' : 'rgba(2, 132, 199, 0.1)',
              border: isDark ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid rgba(2, 132, 199, 0.25)',
              color: '#38bdf8',
              fontSize: '0.78rem',
              fontWeight: 800,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            {topic.category}
          </span>

          <h1
            style={{
              fontSize: 'clamp(2rem, 4vw, 2.75rem)',
              fontWeight: 900,
              fontFamily: 'var(--font-display)',
              margin: 0,
              letterSpacing: '-0.02em',
              color: isDark ? '#f8fafc' : '#0f172a',
            }}
          >
            {topic.title}
          </h1>

          {topic.subtitle && (
            <p
              style={{
                fontSize: '1.15rem',
                color: isDark ? '#94a3b8' : '#475569',
                margin: 0,
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >
              {topic.subtitle}
            </p>
          )}
        </div>

        {/* Overview Box */}
        <div
          style={{
            backgroundColor: isDark ? 'rgba(15, 23, 42, 0.65)' : '#ffffff',
            border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem 2.25rem',
            lineHeight: 1.7,
            fontSize: '1.05rem',
            color: isDark ? '#cbd5e1' : '#334155',
          }}
        >
          <h2
            style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              color: isDark ? '#f8fafc' : '#0f172a',
              marginTop: 0,
              marginBottom: '1rem',
              fontFamily: 'var(--font-display)',
            }}
          >
            Overview
          </h2>
          <p style={{ margin: 0 }}>{topic.overview}</p>
        </div>

        {/* Key Highlights */}
        {topic.keyPoints && topic.keyPoints.length > 0 && (
          <div
            style={{
              backgroundColor: isDark ? 'rgba(11, 17, 36, 0.7)' : '#ffffff',
              border: isDark ? '1px solid rgba(56, 189, 248, 0.2)' : '1px solid #e2e8f0',
              borderRadius: 'var(--radius-xl)',
              padding: '2rem 2.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <h2
              style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                color: isDark ? '#f8fafc' : '#0f172a',
                margin: 0,
                fontFamily: 'var(--font-display)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.6rem',
              }}
            >
              <CheckCircle2 size={20} style={{ color: '#38bdf8' }} />
              Key Platform Highlights
            </h2>

            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              {topic.keyPoints.map((point, idx) => (
                <li
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.85rem',
                    fontSize: '0.985rem',
                    lineHeight: 1.6,
                    color: isDark ? '#cbd5e1' : '#334155',
                  }}
                >
                  <div
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#38bdf8',
                      flexShrink: 0,
                      marginTop: '9px',
                    }}
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Deep Dive Sections */}
        {topic.sections && topic.sections.length > 0 && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {topic.sections.map((sec, idx) => (
              <div
                key={idx}
                style={{
                  backgroundColor: isDark ? 'rgba(15, 23, 42, 0.65)' : '#ffffff',
                  border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem 2.25rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.85rem',
                }}
              >
                <h3
                  style={{
                    margin: 0,
                    fontSize: '1.2rem',
                    fontWeight: 800,
                    color: isDark ? '#f8fafc' : '#0f172a',
                    fontFamily: 'var(--font-display)',
                  }}
                >
                  {sec.heading}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.985rem',
                    lineHeight: 1.65,
                    color: isDark ? '#cbd5e1' : '#475569',
                  }}
                >
                  {sec.content}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* Interactive Tool: Commission Calculator */}
        {topic.type === 'calculator' && (
          <div
            style={{
              backgroundColor: isDark ? 'rgba(11, 17, 36, 0.85)' : '#ffffff',
              border: isDark ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid #cbd5e1',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.75rem',
              boxShadow: isDark ? '0 10px 30px rgba(0, 0, 0, 0.5)' : '0 10px 20px rgba(15, 23, 42, 0.05)',
            }}
          >
            <h3 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 800 }}>
              Live Commission Simulator
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Deals Closed per Month: {calcDeals}</label>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={calcDeals}
                  onChange={(e) => setCalcDeals(Number(e.target.value))}
                  style={{ accentColor: '#38bdf8' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Average Deal Value: ${calcAvgValue.toLocaleString()}</label>
                <input
                  type="range"
                  min="1000"
                  max="50000"
                  step="1000"
                  value={calcAvgValue}
                  onChange={(e) => setCalcAvgValue(Number(e.target.value))}
                  style={{ accentColor: '#38bdf8' }}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label style={{ fontWeight: 600, fontSize: '0.9rem' }}>Commission Rate (%): {calcRate}%</label>
                <input
                  type="range"
                  min="1"
                  max="35"
                  value={calcRate}
                  onChange={(e) => setCalcRate(Number(e.target.value))}
                  style={{ accentColor: '#38bdf8' }}
                />
              </div>
            </div>

            <div
              style={{
                backgroundColor: isDark ? 'rgba(15, 23, 42, 0.8)' : '#f1f5f9',
                padding: '1.5rem 2rem',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
                border: isDark ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid #cbd5e1',
              }}
            >
              <div>
                <div style={{ fontSize: '0.85rem', color: isDark ? '#94a3b8' : '#64748b' }}>Total Monthly Pipeline Closed</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800 }}>${totalDealRevenue.toLocaleString()}</div>
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', color: isDark ? '#94a3b8' : '#64748b' }}>Estimated Sales Commission Earned</div>
                <div style={{ fontSize: '1.85rem', fontWeight: 900, color: '#22c55e' }}>
                  ${calculatedCommission.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Tool: Contact Form */}
        {topic.type === 'contact' && (
          <div
            style={{
              backgroundColor: isDark ? 'rgba(11, 17, 36, 0.85)' : '#ffffff',
              border: isDark ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid #cbd5e1',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}
          >
            <h3 style={{ margin: 0, fontSize: '1.35rem', fontWeight: 800 }}>Send Direct Executive Inquiry</h3>
            {contactSubmitted ? (
              <div
                style={{
                  padding: '1.5rem',
                  borderRadius: 'var(--radius-lg)',
                  backgroundColor: 'rgba(34, 197, 94, 0.15)',
                  border: '1px solid #22c55e',
                  color: '#22c55e',
                  fontWeight: 700,
                  textAlign: 'center',
                }}
              >
                ✓ Message received! An enterprise solutions architect will respond within 2 business hours.
              </div>
            ) : (
              <form onSubmit={handleContactSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    required
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: isDark ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid #cbd5e1',
                      backgroundColor: isDark ? '#080c1a' : '#f8fafc',
                      color: isDark ? '#f8fafc' : '#0f172a',
                      outline: 'none',
                    }}
                  />
                  <input
                    type="email"
                    placeholder="Work Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    required
                    style={{
                      padding: '0.8rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      border: isDark ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid #cbd5e1',
                      backgroundColor: isDark ? '#080c1a' : '#f8fafc',
                      color: isDark ? '#f8fafc' : '#0f172a',
                      outline: 'none',
                    }}
                  />
                </div>
                <textarea
                  rows="4"
                  placeholder="Tell us about your organization and requirements..."
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  required
                  style={{
                    padding: '0.8rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    border: isDark ? '1px solid rgba(56, 189, 248, 0.25)' : '1px solid #cbd5e1',
                    backgroundColor: isDark ? '#080c1a' : '#f8fafc',
                    color: isDark ? '#f8fafc' : '#0f172a',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
                <button
                  type="submit"
                  style={{
                    padding: '0.85rem 1.75rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: '#0284c7',
                    color: '#ffffff',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    alignSelf: 'flex-start',
                  }}
                >
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>
        )}

        {/* Interactive Pricing Comparison */}
        {topic.type === 'pricing' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            <div
              style={{
                backgroundColor: isDark ? 'rgba(15, 23, 42, 0.7)' : '#ffffff',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e2e8f0',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <h4 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800 }}>Starter Tier</h4>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#38bdf8' }}>$49 <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>/ month</span></div>
              <p style={{ fontSize: '0.885rem', color: isDark ? '#94a3b8' : '#64748b' }}>Ideal for growing sales teams requiring high-velocity CRM pipelines.</p>
              <button onClick={() => navigate('/login')} style={{ marginTop: 'auto', padding: '0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid #38bdf8', backgroundColor: 'transparent', color: '#38bdf8', fontWeight: 700, cursor: 'pointer' }}>Get Started</button>
            </div>

            <div
              style={{
                backgroundColor: isDark ? 'rgba(14, 165, 233, 0.12)' : '#f0f9ff',
                border: '2px solid #0284c7',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                position: 'relative',
              }}
            >
              <span style={{ position: 'absolute', top: '-12px', right: '20px', backgroundColor: '#0284c7', color: '#ffffff', fontSize: '0.72rem', fontWeight: 800, padding: '3px 10px', borderRadius: 'var(--radius-full)' }}>MOST POPULAR</span>
              <h4 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800 }}>Growth Tier</h4>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#0284c7' }}>$149 <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>/ month</span></div>
              <p style={{ fontSize: '0.885rem', color: isDark ? '#cbd5e1' : '#475569' }}>Unifies CRM with multi-warehouse ERP inventory and procurement.</p>
              <button onClick={() => navigate('/login')} style={{ marginTop: 'auto', padding: '0.65rem', borderRadius: 'var(--radius-md)', border: 'none', backgroundColor: '#0284c7', color: '#ffffff', fontWeight: 700, cursor: 'pointer' }}>Launch Workspace</button>
            </div>

            <div
              style={{
                backgroundColor: isDark ? 'rgba(15, 23, 42, 0.7)' : '#ffffff',
                border: isDark ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid #e2e8f0',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <h4 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800 }}>Enterprise SuperHouse</h4>
              <div style={{ fontSize: '2rem', fontWeight: 900, color: '#f97316' }}>Custom <span style={{ fontSize: '0.9rem', color: '#94a3b8' }}>Quote</span></div>
              <p style={{ fontSize: '0.885rem', color: isDark ? '#94a3b8' : '#64748b' }}>Complete AI SuperHouse, OMP Deals, custom white label, and dedicated SLA.</p>
              <button onClick={() => navigate('/topic/contact')} style={{ marginTop: 'auto', padding: '0.65rem', borderRadius: 'var(--radius-md)', border: '1px solid #f97316', backgroundColor: 'transparent', color: '#f97316', fontWeight: 700, cursor: 'pointer' }}>Contact Sales</button>
            </div>
          </div>
        )}

        {/* Call to Action Card */}
        <div
          style={{
            backgroundColor: isDark ? 'rgba(7, 12, 28, 0.9)' : '#f1f5f9',
            border: isDark ? '1px solid rgba(56, 189, 248, 0.35)' : '1px solid #cbd5e1',
            borderRadius: 'var(--radius-xl)',
            padding: '2.5rem',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.25rem',
            boxShadow: isDark ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none',
          }}
        >
          <h3 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 800, fontFamily: 'var(--font-display)' }}>
            Ready to Experience CRM nErgy?
          </h3>
          <p style={{ margin: 0, maxWidth: '600px', color: isDark ? '#94a3b8' : '#64748b', fontSize: '0.95rem' }}>
            Empower your organization with unified CRM, ERP, and Autonomous AI. Sign in to your command portal or create your enterprise account today.
          </p>
          <button
            onClick={() => navigate('/login')}
            style={{
              padding: '0.75rem 1.75rem',
              borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
              color: '#ffffff',
              border: 'none',
              fontWeight: 700,
              fontSize: '0.925rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 0 16px rgba(14, 165, 233, 0.4)',
            }}
          >
            [ Login / Create Account ]
            <ArrowRight size={16} />
          </button>
        </div>
      </main>

      {/* 4. MEGA FOOTER / SITEMAP GRID (Navigates to proper full pages) */}
      <footer
        style={{
          marginTop: 'auto',
          backgroundColor: isDark ? 'rgba(5, 8, 18, 0.95)' : '#ffffff',
          borderTop: isDark ? '1px solid rgba(56, 189, 248, 0.15)' : '1px solid #e2e8f0',
          padding: '4.5rem 2rem 2.5rem',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '3rem',
          }}
        >
          {/* Column 1 */}
          <div>
            <h4
              style={{
                fontSize: '0.925rem',
                fontWeight: 800,
                color: isDark ? '#f8fafc' : '#0f172a',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1.4rem',
                borderBottom: '2px solid #38bdf8',
                paddingBottom: '0.6rem',
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
                    style={{
                      fontSize: '0.875rem',
                      color: isDark ? '#94a3b8' : '#475569',
                      cursor: 'pointer',
                      display: 'inline-block',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#38bdf8';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = isDark ? '#94a3b8' : '#475569';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
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
                fontSize: '0.925rem',
                fontWeight: 800,
                color: isDark ? '#f8fafc' : '#0f172a',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1.4rem',
                borderBottom: '2px solid #06b6d4',
                paddingBottom: '0.6rem',
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
                    style={{
                      fontSize: '0.875rem',
                      color: isDark ? '#94a3b8' : '#475569',
                      cursor: 'pointer',
                      display: 'inline-block',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#06b6d4';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = isDark ? '#94a3b8' : '#475569';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
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
                fontSize: '0.925rem',
                fontWeight: 800,
                color: isDark ? '#f8fafc' : '#0f172a',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1.4rem',
                borderBottom: '2px solid #f97316',
                paddingBottom: '0.6rem',
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
                    style={{
                      fontSize: '0.875rem',
                      color: isDark ? '#94a3b8' : '#475569',
                      cursor: 'pointer',
                      display: 'inline-block',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#f97316';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = isDark ? '#94a3b8' : '#475569';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
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
                fontSize: '0.925rem',
                fontWeight: 800,
                color: isDark ? '#f8fafc' : '#0f172a',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '1.4rem',
                borderBottom: '2px solid #3b82f6',
                paddingBottom: '0.6rem',
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
                    style={{
                      fontSize: '0.875rem',
                      color: isDark ? '#94a3b8' : '#475569',
                      cursor: 'pointer',
                      display: 'inline-block',
                      transition: 'all 0.2s ease',
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.color = '#38bdf8';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.color = isDark ? '#94a3b8' : '#475569';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright & Sub-footer */}
        <div
          style={{
            maxWidth: '1200px',
            margin: '3.5rem auto 0',
            paddingTop: '1.5rem',
            borderTop: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            fontSize: '0.82rem',
            color: isDark ? '#64748b' : '#94a3b8',
          }}
        >
          <div>© 2027 CRM nErgy. Advanced Artificial Intelligence. All rights reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <span style={{ color: isDark ? '#94a3b8' : '#64748b' }}>Make AI Your Bestie</span>
            <span>•</span>
            <span
              onClick={() => navigate('/login')}
              style={{ cursor: 'pointer', color: '#38bdf8', fontWeight: 600 }}
            >
              Portal Login
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PublicTopicPage;
