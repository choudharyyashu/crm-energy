import React, { useState } from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
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
  HelpCircle,
  Move,
  LayoutDashboard,
  Bell,
  Users,
  Search,
  Cpu,
  Database,
  Network,
  RefreshCw,
  FileSearch
} from 'lucide-react';
import {
  CRM_FEATURES_DATA,
  CRM_SOLUTIONS_DATA,
  INDUSTRIES_DATA,
  FAQ_QUESTIONS_DATA
} from '../../data/websiteNavData';

export const WebsiteHome = () => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const isEs = language === 'ES';
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

  const categoryMap = {
    'All': isEs ? 'Todo' : 'All',
    'Core CRM': isEs ? 'CRM Principal' : 'Core CRM',
    'ERP & Logistics': isEs ? 'ERP y Logística' : 'ERP & Logistics',
    'Finance & Operations': isEs ? 'Finanzas y Operaciones' : 'Finance & Operations',
    'Sales & Growth': isEs ? 'Ventas y Crecimiento' : 'Sales & Growth',
    'Marketing & Web': isEs ? 'Marketing y Web' : 'Marketing & Web',
    'HR & Talent': isEs ? 'RR.HH. y Talento' : 'HR & Talent',
    'Governance & Security': isEs ? 'Gobernanza y Seguridad' : 'Governance & Security'
  };

  // FAQ Active view tabs
  const [faqTab, setFaqTab] = useState('features'); // 'features' | 'solutions' | 'industries' | 'zunme'
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  // FAQs DATA SEARCH BAR ENGINE State (AI-powered Centralized Knowledge Base with RAG)
  const [faqSearchQuery, setFaqSearchQuery] = useState('');
  const [isAiSearching, setIsAiSearching] = useState(false);

  const getAiRagResponse = (query) => {
    if (!query || query.trim() === '') return null;
    const qLower = query.toLowerCase();

    if (qLower.includes('rag') || qLower.includes('benefit') || qLower.includes('central') || qLower.includes('knowledge base') || qLower.includes('beneficio') || qLower.includes('base de conocimiento')) {
      return {
        title: isEs ? 'Respuesta Sintetizada RAG: Base de Conocimiento Centralizada' : 'Synthesized RAG Answer: Centralized AI Knowledge Base',
        text: isEs
          ? 'Sí, hacemos que este sistema sea mucho más inteligente que las preguntas frecuentes tradicionales mediante una Base de Conocimiento centralizada con RAG. Los 8 beneficios clave son: 1) Gestión desde un solo lugar central, 2) Distribución automática a más de 100 páginas web, 3) Consultas en lenguaje natural sin búsquedas manuales, 4) Respuestas fundamentadas en datos reales de CRM/ERP eliminando alucinaciones, 5) Actualizaciones en vivo sin alterar código en cada página, 6) Descubrimiento de preguntas no indexadas para cerrar brechas de contenido, 7) Motor compartido para asistentes web, CRM, ERP y agentes de soporte, y 8) RAG de código abierto para controlar los costos continuos.'
          : 'Yes, we make this much smarter than a normal FAQ system by using an AI-powered centralized Knowledge Base with RAG. The main benefits are: 1) All FAQs and product knowledge managed from one central place, 2) The same knowledge automatically serves 100+ website pages, 3) Visitors ask questions naturally instead of searching manually, 4) AI answers based on actual CRM/ERP verified records, reducing incorrect answers, 5) New information can be added anytime without changing every page, 6) Automatic discovery of unanswered customer queries, 7) Shared foundation powering website assistants, CRM Bestie, ERP bots, and customer support, and 8) Open-source RAG technology with API connections only where needed to control ongoing costs.',
        sources: [isEs ? 'Bóveda Vectorial RAG' : 'RAG Vector Vault', isEs ? 'Módulo Central ERP' : 'ERP Core Ledger', isEs ? 'Base de Datos CRM' : 'CRM Database'],
        confidence: '99.4%',
        inKnowledgeBase: true
      };
    }

    if (qLower.includes('dashboard') || qLower.includes('drag') || qLower.includes('drop') || qLower.includes('tablero') || qLower.includes('arrastrar')) {
      return {
        title: isEs ? 'Respuesta Sintetizada: Tableros Personalizables' : 'Synthesized Answer: Customizable Dashboards',
        text: isEs
          ? 'Los tableros personalizables y la interfaz Drag-and-Drop permiten a los usuarios organizar tareas, contactos y embudos de ventas con el mínimo de clics. Los usuarios adaptan la vista a sus roles y responsabilidades específicos, enfocándose únicamente en los KPIs clave para su productividad.'
          : 'Customizable dashboards and Drag-and-Drop interfaces allow users to easily organize and manage contacts, tasks, and sales pipelines with minimal clicks. Tailoring the interface to specific roles presents only relevant KPIs, accelerating daily workflow efficiency.',
        sources: ['Core CRM Analytics', 'Sales Pipeline Kanban', 'UI/UX Component Engine'],
        confidence: '98.8%',
        inKnowledgeBase: true
      };
    }

    if (qLower.includes('cost') || qLower.includes('open-source') || qLower.includes('free') || qLower.includes('precio') || qLower.includes('costo') || qLower.includes('código abierto')) {
      return {
        title: isEs ? 'Respuesta Sintetizada: Control de Costos con RAG de Código Abierto' : 'Synthesized Answer: Cost Control via Open-Source RAG',
        text: isEs
          ? 'Utilizamos tecnología RAG de código abierto y modelos de vectores locales para la indexación y recuperación en masa, conectando APIs comerciales solo para razonamiento avanzado puntual. Esto mantiene los costos de nube predecibles y mínimos mientras escala a miles de usuarios.'
          : 'We utilize open-source and free RAG vector embedding technologies for indexing and fast retrieval, connecting to commercial frontier AI APIs only when advanced reasoning or creative synthesis is required. This strictly controls ongoing operating expenses while scaling infinitely.',
        sources: ['Vector Embedding Store', 'API Cost Optimizer', 'Open-Source RAG Engine'],
        confidence: '99.1%',
        inKnowledgeBase: true
      };
    }

    if (qLower.includes('erp') || qLower.includes('accounting') || qLower.includes('contab') || qLower.includes('inventar')) {
      return {
        title: isEs ? 'Respuesta Sintetizada: Integración CRM & ERP' : 'Synthesized Answer: Unified CRM & ERP Architecture',
        text: isEs
          ? 'CRM nErgy integra de forma nativa 10 módulos de ERP (Planificación, Producción, Adquisiciones, Informes, Ventas, RR.HH., Inventario, Finanzas, Cadena de Suministro y Relación con Clientes) conectados a una única base de datos sin redundancias.'
          : 'CRM nErgy natively unifies 10 core ERP operational modules (Planning, Production, Procurement, Reporting, Sales, HR, Inventory, Finance, Supply Chain, and Customer Relationships) into a single operational core, eliminating siloed third-party software.',
        sources: ['ERP Core Ledger', 'Inventory Warehouse', 'CRM nErgy Hub'],
        confidence: '98.2%',
        inKnowledgeBase: true
      };
    }

    if (qLower.includes('white label') || qLower.includes('marca blanca') || qLower.includes('brand') || qLower.includes('logo')) {
      return {
        title: isEs ? 'Respuesta Sintetizada: CRM Marca Blanca' : 'Synthesized Answer: White Label CRM Platform',
        text: isEs
          ? 'Nuestra solución de Marca Blanca permite a agencias y corporaciones personalizar al 100% el logotipo, dominios personalizados, colores corporativos y portal de clientes para revender o implementar bajo su propia marca.'
          : 'Our White Label CRM allows agencies and enterprises to fully rebrand CRM nErgy with their own corporate identity, custom domains, logo, color schemes, and client portal aesthetics with zero developer overhead.',
        sources: ['White Label Tenant Hub', 'Client Portal Engine', 'Domain Registry'],
        confidence: '99.5%',
        inKnowledgeBase: true
      };
    }

    const matchedFaq = FAQ_QUESTIONS_DATA.find(f =>
      (f.q && f.q.toLowerCase().includes(qLower)) ||
      (f.qEs && f.qEs.toLowerCase().includes(qLower)) ||
      (f.a && f.a.toLowerCase().includes(qLower)) ||
      (f.aEs && f.aEs.toLowerCase().includes(qLower))
    );

    if (matchedFaq) {
      return {
        title: isEs ? (matchedFaq.qEs || matchedFaq.q) : matchedFaq.q,
        text: isEs ? (matchedFaq.aEs || matchedFaq.a) : matchedFaq.a,
        sources: ['Verified FAQ Database', 'RAG Centralized Vault'],
        confidence: '97.5%',
        inKnowledgeBase: true
      };
    }

    return {
      title: isEs ? `Consulta Registrada: "${query}"` : `Inquiry Registered: "${query}"`,
      text: isEs
        ? `Pregunta registrada en la Analítica de Brechas de Conocimiento de IA. Nuestro equipo y el modelo de IA indexarán la respuesta para esta consulta en breve para expandir continuamente nuestra base de conocimiento centralizada de más de 100 páginas.`
        : `Question logged to AI Knowledge Gap Analytics — Our team & AI model will index verified answers for this inquiry shortly to continuously expand our 100+ page centralized knowledge base.`,
      sources: ['AI Knowledge Gap Analytics (Logged)', 'RAG Telemetry Feed'],
      confidence: isEs ? 'Registrado para Indexación' : 'Logged for Indexing',
      inKnowledgeBase: false
    };
  };

  const activeRagAnswer = getAiRagResponse(faqSearchQuery);

  const filteredFaqQuestions = faqSearchQuery.trim() === ''
    ? FAQ_QUESTIONS_DATA
    : FAQ_QUESTIONS_DATA.filter((faq) => {
        const fullContent = `${faq.q || ''} ${faq.qEs || ''} ${faq.a || ''} ${faq.aEs || ''}`.toLowerCase();
        return fullContent.includes(faqSearchQuery.toLowerCase());
      });

  const filteredFeatures = featureCategory === 'All'
    ? CRM_FEATURES_DATA
    : CRM_FEATURES_DATA.filter((f) => f.category === featureCategory);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', overflowX: 'hidden' }}>
      {/* ======================================================== */}
      {/* 1. HERO SECTION                                          */}
      {/* ======================================================== */}
      <section className="website-hero-section">
        <div style={{ maxWidth: '960px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          {/* Energy Pill & Slogan */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '6px 16px',
            borderRadius: '24px',
            background: 'rgba(99, 102, 241, 0.08)',
            border: '1px solid rgba(99, 102, 241, 0.25)',
            fontSize: 'clamp(11px, 2.6vw, 12.5px)',
            fontWeight: 700,
            color: '#4f46e5',
            maxWidth: '100%',
            textAlign: 'center',
            lineHeight: 1.4
          }}>
            <Sparkles size={14} style={{ color: '#f59e0b', flexShrink: 0 }} />
            <span>{t('CRM Solutions Every Business Needs • “Make AI Your Bestie”')}</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(1.85rem, 5vw, 3.4rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            color: 'var(--web-text-main)',
            margin: 0
          }}>
            {t('CRM Solutions Every Business Needs')}
          </h1>

          <blockquote style={{
            fontSize: 'clamp(0.95rem, 2vw, 1.25rem)',
            fontWeight: 600,
            fontStyle: 'italic',
            color: 'var(--web-text-main)',
            lineHeight: 1.6,
            maxWidth: '820px',
            textAlign: 'center',
            margin: '0.25rem 0 0 0',
            padding: '0 0.5rem',
            borderLeft: 'none'
          }}>
            {t('“Delivering the most relevant CRM ERP software for your business to thrive and honing our AAI development to effectively prepare you to scale.”')}
          </blockquote>

          <p style={{
            fontSize: 'clamp(0.88rem, 1.7vw, 1.05rem)',
            color: 'var(--web-text-muted)',
            lineHeight: 1.6,
            maxWidth: '740px',
            margin: 0,
            textAlign: 'center'
          }}>
            {t('A complete operating system combining all 23 core CRM features, 4 tailored solution frameworks, and 23 industry modules with the autonomous power of the ZUNME AI Studio.')}
          </p>

          {/* Action Buttons */}
          <div className="website-hero-cta-group">
            {/* Primary Features CTA */}
            <a
              href="#features"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
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
              <span>{t('Explore 23 Features')}</span>
              <ArrowRight size={16} />
            </a>

            {/* Ask My Zunme CTA */}
            <button
              type="button"
              onClick={onOpenZunme}
              className="website-cta-zunme hero-cta-zunme"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 22px',
                fontSize: '14px'
              }}
            >
              <Bot size={17} style={{ color: '#fef08a', flexShrink: 0 }} />
              <span>{isEs ? 'Preguntar a My Zunme — Asistente VA' : 'Ask My Zunme — VA Assistant'}</span>
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
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 22px',
                borderRadius: '10px',
                fontSize: '14px'
              }}
            >
              <MessageSquare size={17} style={{ flexShrink: 0 }} />
              <span>{isEs ? 'VENTAS — chat eBox' : 'SALES — chat eBox'}</span>
            </button>
          </div>

          {/* Trust Badges */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 'clamp(0.75rem, 2vw, 1.75rem)',
            flexWrap: 'wrap',
            fontSize: '12px',
            color: 'var(--web-text-muted)',
            marginTop: '1.5rem',
            paddingTop: '1.25rem',
            borderTop: '1px solid var(--web-border)',
            width: '100%'
          }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <ShieldCheck size={16} style={{ color: '#10b981', flexShrink: 0 }} />
              {t('Enterprise Data Vault')}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Zap size={16} style={{ color: '#f59e0b', flexShrink: 0 }} />
              {t('Real-time Workflows')}
            </span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Globe size={16} style={{ color: '#0284c7', flexShrink: 0 }} />
              {t('23 Industry Configurations')}
            </span>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2. SECTION: 23 CRM FEATURES (Dolibarr Benchmark Style)   */}
      {/* ======================================================== */}
      <section id="features" className="website-section-container">
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span style={{
            fontSize: '11px',
            fontWeight: 800,
            color: '#4f46e5',
            textTransform: 'uppercase',
            letterSpacing: '0.06em'
          }}>
            {t('CRM Solutions Every Business Needs')}
          </span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 28px)', fontWeight: 900, color: 'var(--web-text-main)', margin: '4px 0 8px 0' }}>
            {t('CRM NERGY Software Features (23 Modules)')}
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--web-text-muted)', maxWidth: '780px', margin: '0 auto', lineHeight: 1.5 }}>
            {t('CRM software is essential for various industries to manage customer relationships and enhance operational efficiency. Every module is styled with CRM nErgy icon buttons inspired by the Dolibarr benchmark architecture.')}
          </p>

          {/* Category Filter Pills */}
          <div className="website-filter-pills">
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
                {categoryMap[cat] || t(cat)}
              </button>
            ))}
          </div>
        </div>

        {/* 23 Cards Grid */}
        <div className="features-mega-grid">
          {filteredFeatures.map((f) => {
            const Icon = f.icon;
            const title = (isEs && f.nameEs) ? f.nameEs : t(f.name);
            const desc = (isEs && f.descEs) ? f.descEs : t(f.desc);
            const tag = (isEs && f.tagEs) ? f.tagEs : t(f.tag);

            return (
              <div
                key={f.id}
                className="dolibarr-card"
                onClick={() => {
                  if (f.route) {
                    navigate(f.route);
                  } else if (onSelectItem) {
                    onSelectItem(f);
                  }
                }}
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
                    {tag}
                  </span>
                </div>
                <span className="dolibarr-title">{title}</span>
                <span className="dolibarr-desc">{desc}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2B. SECTION: BRANDING AND CUSTOMIZATION (CLIENT SPEC)    */}
      {/* ======================================================== */}
      <section style={{
        padding: '0 clamp(1rem, 3vw, 1.25rem) 3.5rem clamp(1rem, 3vw, 1.25rem)',
        maxWidth: '1380px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <div className="website-branding-box">
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
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
              {t('Branding and Customization')}
            </span>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#f59e0b' }}>
              {t('“Make AI Your Friend”')}
            </span>
          </div>

          <h3 style={{
            fontSize: 'clamp(1.2rem, 2.5vw, 1.65rem)',
            fontWeight: 800,
            color: 'var(--web-text-main)',
            margin: 0,
            lineHeight: 1.3
          }}>
            {t('It’s Your Business, Displaying Your Brand, powered by CRM nErgy Software Customization')}
          </h3>

          <p style={{
            fontSize: '14px',
            color: 'var(--web-text-muted)',
            lineHeight: 1.65,
            margin: 0,
            maxWidth: '1020px'
          }}>
            {t('The CRM nErgy drag-and-drop feature in customizable CRM software greatly enhances usability and efficiency, enabling users to customize their systems according to their specific business processes without requiring any coding skills. This functionality is crucial for contemporary CRM solutions, rendering them more flexible and user-friendly.')}
          </p>

          <div className="website-branding-bottom">
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--web-text-main)' }}>
              CRM NERGY — {t('“Make AI Your Friend”')}
            </span>

            <div className="website-branding-actions" style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => {
                  const whiteLabelItem = CRM_FEATURES_DATA.find((f) => f.id === 'white-label-crm');
                  if (onSelectItem && whiteLabelItem) onSelectItem(whiteLabelItem);
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
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
                <span>{t('White Label Customization')}</span>
                <ArrowRight size={14} />
              </button>

              <button
                type="button"
                onClick={onOpenSales}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
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
                <span>{t('Contact Us')}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 2C. SECTION: CUSTOMIZABLE DASHBOARDS & DRAG-AND-DROP     */}
      {/* ======================================================== */}
      <section id="customizable-dashboards" className="website-section-container" style={{ paddingTop: '0' }}>
        <div style={{
          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
          border: '1px solid rgba(79, 70, 229, 0.22)',
          borderRadius: '20px',
          padding: 'clamp(1.5rem, 4vw, 2.5rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)'
        }}>
          {/* Header & Badges */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span style={{
                fontSize: '11px',
                fontWeight: 800,
                color: '#4f46e5',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                background: 'rgba(79, 70, 229, 0.1)',
                padding: '4px 12px',
                borderRadius: '20px'
              }}>
                {isEs ? 'Tableros Personalizables' : 'Customizable Dashboards'}
              </span>
              <span style={{
                fontSize: '11.5px',
                fontWeight: 700,
                color: '#0284c7',
                background: 'rgba(2, 132, 199, 0.1)',
                padding: '4px 10px',
                borderRadius: '20px'
              }}>
                {isEs ? '[ Interfaz Arrastrar y Soltar ]' : '[ Drag-and-Drop Interface ]'}
              </span>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#f59e0b' }}>
                {isEs ? '“Haga de la IA su Amigo”' : '“Make AI Your Friend”'}
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
              fontWeight: 900,
              color: 'var(--web-text-main)',
              margin: 0,
              lineHeight: 1.25
            }}>
              {isEs
                ? 'Tableros Personalizables con Interfaz Drag-and-Drop'
                : 'Customizable Dashboards [ Drag-and-Drop Interface ]'}
            </h2>

            <p style={{
              fontSize: 'clamp(14px, 1.8vw, 15.5px)',
              color: 'var(--web-text-muted)',
              lineHeight: 1.65,
              margin: 0,
              maxWidth: '980px'
            }}>
              {isEs
                ? 'CRM fácil de navegar, una interfaz limpia y optimizada para el usuario que le permite acceder rápidamente a las funciones que necesita sin perderse en menús complejos. Los tableros personalizables y los marcadores inteligentes pueden mejorar la usabilidad y la eficiencia.'
                : 'Easy to navigate CRM, a clean and streamlined user friendly interface that allows users to quickly access the features they need without getting lost in complex menus. Customizable dashboards and smart bookmarks can enhance usability and efficiency.'}
            </p>
          </div>

          {/* Q&A Callout Box */}
          <div style={{
            background: 'var(--web-surface)',
            border: '1px solid var(--web-border)',
            borderRadius: '16px',
            padding: 'clamp(1.25rem, 3vw, 1.75rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem'
          }}>
            <h3 style={{
              fontSize: 'clamp(1.15rem, 2.5vw, 1.45rem)',
              fontWeight: 800,
              color: 'var(--web-text-main)',
              margin: 0,
              lineHeight: 1.3
            }}>
              {isEs
                ? '¿Cómo mejoran los tableros personalizables la experiencia del usuario de CRM?'
                : 'How do customizable dashboards enhance CRM user experience?'}
            </h3>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem'
            }}>
              <div style={{
                background: 'var(--web-surface-subtle)',
                borderRadius: '12px',
                padding: '1rem',
                border: '1px solid var(--web-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Move size={16} style={{ color: '#4f46e5' }} />
                  <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--web-text-main)' }}>
                    {isEs ? 'Mínimos Clics y Simplicidad' : 'Minimal Clicks & Intuitive Design'}
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--web-text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {isEs
                    ? 'Las funciones de CRM de fácil navegación cuentan con una interfaz de arrastrar y soltar (Drag-and-Drop), lo que permite a los usuarios organizar y gestionar fácilmente contactos, tareas y embudos de ventas con el mínimo de clics. Este diseño intuitivo mejora la experiencia del usuario y la productividad al simplificar las tareas comunes.'
                    : 'Easy navigational CRM features Drag-and-Drop interface, which allows users to easily organize and manage contacts, tasks, and sales pipelines with minimal clicks. This intuitive design enhances user experience and productivity by simplifying common tasks.'}
                </p>
              </div>

              <div style={{
                background: 'var(--web-surface-subtle)',
                borderRadius: '12px',
                padding: '1rem',
                border: '1px solid var(--web-border)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <LayoutDashboard size={16} style={{ color: '#06b6d4' }} />
                  <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--web-text-main)' }}>
                    {isEs ? 'Enfoque en Roles y KPIs Relevantes' : 'Role Tailoring & Key Metrics'}
                  </span>
                </div>
                <p style={{ fontSize: '13px', color: 'var(--web-text-muted)', lineHeight: 1.6, margin: 0 }}>
                  {isEs
                    ? 'Los tableros personalizables mejoran la experiencia del usuario de CRM al permitirles adaptar la interfaz a sus roles y responsabilidades específicos, presentando solo la información más relevante. Este enfoque específico mejora la productividad y ayuda a los usuarios a concentrarse en los indicadores clave de rendimiento que más importan para sus tareas.'
                    : 'Customizable dashboards enhance CRM user experience by allowing users to tailor the interface to their specific roles and responsibilities, presenting only the most relevant information. This targeted approach improves productivity and helps users focus on key performance indicators that matter most to their tasks.'}
                </p>
              </div>
            </div>
          </div>

          {/* Comparison of CRM Features Table */}
          <div>
            <div style={{ marginBottom: '1rem' }}>
              <span style={{ fontSize: '11px', fontWeight: 800, color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {isEs ? 'Matriz Comparativa' : 'Feature Comparison Matrix'}
              </span>
              <h3 style={{ fontSize: '18px', fontWeight: 900, color: 'var(--web-text-main)', margin: '2px 0 0 0' }}>
                {isEs ? 'Comparación de Características de CRM' : 'Comparison of CRM Features'}
              </h3>
            </div>

            <div style={{
              background: 'var(--web-surface)',
              border: '1px solid var(--web-border)',
              borderRadius: '14px',
              overflow: 'hidden'
            }}>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '600px' }}>
                  <thead>
                    <tr style={{ background: 'var(--web-surface-subtle)', borderBottom: '1px solid var(--web-border)' }}>
                      <th style={{ padding: '12px 16px', fontSize: '11.5px', fontWeight: 800, color: 'var(--web-text-main)', textTransform: 'uppercase' }}>
                        {isEs ? 'Característica' : 'Feature'}
                      </th>
                      <th style={{ padding: '12px 16px', fontSize: '11.5px', fontWeight: 800, color: 'var(--web-text-main)', textTransform: 'uppercase' }}>
                        {isEs ? 'Descripción' : 'Description'}
                      </th>
                      <th style={{ padding: '12px 16px', fontSize: '11.5px', fontWeight: 800, color: 'var(--web-text-main)', textTransform: 'uppercase' }}>
                        {isEs ? 'Beneficios' : 'Benefits'}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        featEn: 'Drag-and-Drop Interface',
                        featEs: 'Interfaz Arrastrar y Soltar',
                        descEn: 'Allows easy organization of tasks and contacts',
                        descEs: 'Permite organizar fácilmente tareas y contactos',
                        benEn: 'User-friendly, efficient',
                        benEs: 'Fácil de usar, eficiente'
                      },
                      {
                        featEn: 'Intuitive Dashboard',
                        featEs: 'Tablero Intuitivo',
                        descEn: 'Customizable view of key metrics and tasks',
                        descEs: 'Vista personalizable de métricas clave y tareas',
                        benEn: 'Quick access to important info',
                        benEs: 'Acceso rápido a información importante'
                      },
                      {
                        featEn: 'Streamlined Contact Management',
                        featEs: 'Gestión de Contactos Optimizada',
                        descEn: 'Easy addition and retrieval of contact information',
                        descEs: 'Fácil adición y recuperación de información de contacto',
                        benEn: 'Saves time, reduces frustration',
                        benEs: 'Ahorra tiempo, reduce la frustración'
                      },
                      {
                        featEn: 'Task Reminders',
                        featEs: 'Recordatorios de Tareas',
                        descEn: 'Automated notifications for follow ups',
                        descEs: 'Notificaciones automatizadas para seguimientos',
                        benEn: 'Ensures timely actions',
                        benEs: 'Garantiza acciones oportunas'
                      },
                      {
                        featEn: 'Pipeline Visibility',
                        featEs: 'Visibilidad del Embudo',
                        descEn: 'Visual representation of sales opportunities',
                        descEs: 'Representación visual de oportunidades de venta',
                        benEn: 'Enhances tracking and management',
                        benEs: 'Mejora el seguimiento y la gestión'
                      }
                    ].map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        style={{ borderBottom: rIdx < 4 ? '1px solid var(--web-border)' : 'none' }}
                      >
                        <td style={{ padding: '12px 16px', fontSize: '13px', fontWeight: 700, color: 'var(--web-text-main)' }}>
                          {isEs ? row.featEs : row.featEn}
                        </td>
                        <td style={{ padding: '12px 16px', fontSize: '12.5px', color: 'var(--web-text-muted)' }}>
                          {isEs ? row.descEs : row.descEn}
                        </td>
                        <td style={{ padding: '12px 16px' }}>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '4px',
                            padding: '3px 10px',
                            borderRadius: '12px',
                            background: 'rgba(16, 185, 129, 0.1)',
                            color: '#059669',
                            fontSize: '11.5px',
                            fontWeight: 700
                          }}>
                            <CheckCircle2 size={12} />
                            {isEs ? row.benEs : row.benEn}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Summary Conclusion */}
              <div style={{
                padding: '12px 16px',
                background: 'var(--web-surface-subtle)',
                borderTop: '1px solid var(--web-border)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Sparkles size={16} style={{ color: '#f59e0b', flexShrink: 0 }} />
                <span style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--web-text-main)' }}>
                  {isEs
                    ? 'Estas características contribuyen colectivamente a una experiencia de usuario más eficiente y agradable, haciendo que los CRM sean más fáciles de adoptar y utilizar de forma eficaz.'
                    : 'These features collectively contribute to a more efficient and enjoyable user experience, making CRMs easier to adopt and use effectively.'}
                </span>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--web-text-main)' }}>
              CRM NERGY AI — {isEs ? 'Tableros y Flujos Sin Código' : 'Code-Free Dynamic Dashboards'}
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <button
                type="button"
                onClick={() => navigate('/features/customizable-dashboards')}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '9px 18px',
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
                <span>{isEs ? 'Abrir Simulador Interactivo y Kanban' : 'Explore Interactive Sandbox & Kanban'}</span>
                <ArrowRight size={14} />
              </button>

              <button
                type="button"
                onClick={onOpenSales}
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
                <MessageSquare size={14} />
                <span>{isEs ? 'Consultar Asesor' : 'Talk to Advisor'}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. SECTION: 4 CRM SOLUTIONS GROUPS                      */}
      {/* ======================================================== */}
      <section id="solutions" style={{
        padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1rem, 3vw, 1.25rem)',
        backgroundColor: 'var(--web-surface-subtle)',
        borderTop: '1px solid var(--web-border)',
        borderBottom: '1px solid var(--web-border)'
      }}>
        <div style={{ maxWidth: '1380px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {t('Strategic Business Alignment')}
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 28px)', fontWeight: 900, color: 'var(--web-text-main)', margin: '4px 0 8px 0' }}>
              {t('CRM Solutions (4 Solution Groups)')}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--web-text-muted)', maxWidth: '680px', margin: '0 auto' }}>
              {t('Structured frameworks addressing 4 Types of CRM Software, Business CRM Software, Solutions for Entrepreneurs, and Third Party Integration.')}
            </p>
          </div>

          {/* White Label CRM or ERP Banner */}
          <div className="website-whitelabel-box">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <span style={{
                fontSize: '11px',
                fontWeight: 800,
                textTransform: 'uppercase',
                color: '#0284c7',
                letterSpacing: '0.06em'
              }}>
                {t('White Label Enterprise Opportunity')}
              </span>
              <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--web-text-muted)' }}>
                {t('“Make AI Your Bestie”')}
              </span>
            </div>

            <h3 style={{ fontSize: 'clamp(1.1rem, 2.2vw, 19px)', fontWeight: 800, color: 'var(--web-text-main)', margin: 0, lineHeight: 1.3 }}>
              {t('Build & Promote Your Brand with the White Label CRM or ERP Software')}
            </h3>

            <p style={{ fontSize: '13.5px', color: 'var(--web-text-muted)', lineHeight: 1.6, margin: 0, maxWidth: '1080px' }}>
              {t('CRM nErgy White Label CRM or ERP software includes customizable branding, client portals, sales and marketing automation, project management tools and much more. These platforms help businesses create new revenue streams by reselling the CRM solution under their own brand.')}
            </p>

            <div className="website-whitelabel-bottom">
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
                  gap: '4px',
                  textAlign: 'left'
                }}
              >
                <span>{t('READ MORE >> continue on the White Label Feature Page')}</span>
              </button>

              <button
                type="button"
                onClick={onOpenSales}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '8px 16px',
                  borderRadius: '7px',
                  background: '#0284c7',
                  color: '#ffffff',
                  fontSize: '12.5px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                <span>{t('Contact Us')}</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          <div className="solutions-mega-grid">
            {CRM_SOLUTIONS_DATA.map((group, idx) => {
              const badge = (isEs && group.badgeEs) ? group.badgeEs : t(group.badge);
              const groupTitle = (isEs && group.groupTitleEs) ? group.groupTitleEs : t(group.groupTitle);
              const subtitle = (isEs && group.subtitleEs) ? group.subtitleEs : t(group.subtitle);

              return (
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
                      {badge}
                    </span>
                    <h3
                      onClick={() => {
                        if (group.route) navigate(group.route);
                      }}
                      style={{
                        fontSize: '16px',
                        fontWeight: 800,
                        color: 'var(--web-text-main)',
                        margin: '2px 0 0 0',
                        cursor: group.route ? 'pointer' : 'default',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>{groupTitle}</span>
                      {group.route && <ArrowRight size={14} style={{ color: '#0284c7' }} />}
                    </h3>
                    <span style={{ fontSize: '11.5px', color: 'var(--web-text-muted)' }}>{subtitle}</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {group.items.map((item) => {
                      const Icon = item.icon;
                      const itemName = (isEs && item.nameEs) ? item.nameEs : t(item.name);
                      const itemDesc = (isEs && item.descEs) ? item.descEs : t(item.desc);

                      return (
                        <div
                          key={item.id}
                          className="dolibarr-card"
                          style={{ padding: '0.75rem' }}
                          onClick={() => onSelectItem && onSelectItem({ ...item, groupTitle })}
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
                              {itemName}
                            </span>
                          </div>
                          <span className="dolibarr-desc">{itemDesc}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. SECTION: 23 INDUSTRIES SHOWCASE                       */}
      {/* ======================================================== */}
      <section id="industries" className="website-section-container">
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            {t('Domain-Specific Solutions')}
          </span>
          <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 28px)', fontWeight: 900, color: 'var(--web-text-main)', margin: '4px 0 8px 0' }}>
            {t('Industries Using the CRM nErgy Software (23 Sectors)')}
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--web-text-muted)', maxWidth: '780px', margin: '0 auto', lineHeight: 1.5 }}>
            {t('Some of the Industries that use the CRM nErgy Software. CRM software is essential for various industries to manage customer relationships and enhance operational efficiency.')}
          </p>
        </div>

        <div className="industries-mega-grid">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = ind.icon;
            const indTitle = (isEs && ind.nameEs) ? ind.nameEs : t(ind.name);
            const indDesc = (isEs && ind.descEs) ? ind.descEs : t(ind.desc);

            return (
              <div
                key={ind.id}
                className="dolibarr-card"
                onClick={() => ind.route ? navigate(ind.route) : (onSelectItem && onSelectItem(ind))}
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
                  <span className="dolibarr-title" style={{ margin: 0 }}>{indTitle}</span>
                </div>
                <span className="dolibarr-desc">{indDesc}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. SECTION: FAQS & KNOWLEDGE (CLIENT EXACT REQUIREMENTS) */}
      {/* ======================================================== */}
      <section id="faqs" style={{
        padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1rem, 3vw, 1.25rem)',
        backgroundColor: 'var(--web-surface)',
        borderTop: '1px solid var(--web-border)'
      }}>
        <div style={{ maxWidth: '1240px', margin: '0 auto', width: '100%' }}>
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span style={{ fontSize: '11px', fontWeight: 800, color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {t('Fact and Questions')}
            </span>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3.5vw, 28px)', fontWeight: 900, color: 'var(--web-text-main)', margin: '4px 0 8px 0' }}>
              {t('FAQs & Interactive Module Directory')}
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--web-text-muted)', maxWidth: '680px', margin: '0 auto' }}>
              {t('Browse features, solution groups, and industry options as interactive icon buttons or review common questions.')}
            </p>
          </div>

          {/* ======================================================== */}
          {/* FAQS DATA SEARCH BAR ENGINE (AI RAG KNOWLEDGE BASE)      */}
          {/* ======================================================== */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.05) 0%, rgba(6, 182, 212, 0.05) 100%)',
            border: '1px solid rgba(79, 70, 229, 0.22)',
            borderRadius: '20px',
            padding: 'clamp(1.5rem, 3.5vw, 2.25rem)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.75rem',
            marginBottom: '2.5rem',
            boxShadow: '0 8px 30px rgba(0, 0, 0, 0.03)',
            textAlign: 'left'
          }}>
            {/* Header Badges & Timestamp */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#4f46e5',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  background: 'rgba(79, 70, 229, 0.12)',
                  padding: '4px 12px',
                  borderRadius: '20px'
                }}>
                  FAQs DATA SEARCH BAR ENGINE
                </span>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#0284c7',
                  background: 'rgba(2, 132, 199, 0.1)',
                  padding: '4px 10px',
                  borderRadius: '20px'
                }}>
                  {isEs ? '[ Base de Conocimiento Centralizada con RAG ]' : '[ Centralized Knowledge Base with RAG ]'}
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#f59e0b',
                  background: 'rgba(245, 158, 11, 0.1)',
                  padding: '3px 8px',
                  borderRadius: '6px'
                }}>
                  8/11/2026 • Aug 11, 6:07 AM
                </span>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 800,
                  color: '#10b981',
                  background: 'rgba(16, 185, 129, 0.1)',
                  padding: '3px 8px',
                  borderRadius: '6px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <Cpu size={12} />
                  <span>RAG Engine: Live</span>
                </span>
              </div>
            </div>

            {/* Vision Quote / Core Statement (from User Text) */}
            <div>
              <h3 style={{
                fontSize: 'clamp(1.25rem, 2.5vw, 1.65rem)',
                fontWeight: 900,
                color: 'var(--web-text-main)',
                margin: '0 0 8px 0',
                lineHeight: 1.3
              }}>
                {isEs
                  ? 'Sí, podemos hacer que esto sea mucho más inteligente que un sistema normal de preguntas frecuentes utilizando una base de conocimiento centralizada impulsada por IA con RAG.'
                  : 'Yes, we can make this much smarter than a normal FAQ system by using an AI-powered centralized Knowledge Base with RAG.'}
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--web-text-muted)', margin: 0, lineHeight: 1.6 }}>
                {isEs
                  ? 'Gestione todas las preguntas frecuentes y el conocimiento de producto desde un solo lugar central, distribuyendo respuestas verificadas automáticamente a más de 100 páginas de su sitio web sin alucinaciones.'
                  : 'Manage all FAQs and product intelligence from one central place, automatically serving 100+ website pages with grounded CRM/ERP information.'}
              </p>
            </div>

            {/* Interactive Search Bar Input */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                width: '100%'
              }}>
                <Search size={18} style={{ position: 'absolute', left: '16px', color: '#4f46e5', pointerEvents: 'none' }} />
                <input
                  type="text"
                  value={faqSearchQuery}
                  onChange={(e) => setFaqSearchQuery(e.target.value)}
                  placeholder={
                    isEs
                      ? "Pregunte de forma natural... (ej. '¿Cuáles son los beneficios de RAG?', '¿Cómo conectar CRM con ERP?', '¿Cómo usar drag and drop?')"
                      : "Ask any question naturally... (e.g. 'What are the main benefits of centralized RAG?', 'How does CRM connect with ERP?', 'Can we control costs with open source?')"
                  }
                  style={{
                    width: '100%',
                    padding: '14px 44px 14px 46px',
                    borderRadius: '12px',
                    border: '2px solid rgba(79, 70, 229, 0.3)',
                    background: 'var(--web-surface)',
                    fontSize: '14px',
                    color: 'var(--web-text-main)',
                    outline: 'none',
                    boxShadow: '0 4px 16px rgba(79, 70, 229, 0.08)',
                    boxSizing: 'border-box',
                    transition: 'border-color 0.15s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#4f46e5'}
                  onBlur={(e) => e.target.style.borderColor = 'rgba(79, 70, 229, 0.3)'}
                />
                {faqSearchQuery && (
                  <button
                    type="button"
                    onClick={() => setFaqSearchQuery('')}
                    style={{
                      position: 'absolute',
                      right: '14px',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      fontSize: '12px',
                      fontWeight: 700,
                      color: 'var(--web-text-muted)',
                      padding: '4px 8px',
                      borderRadius: '4px'
                    }}
                  >
                    {isEs ? 'Limpiar' : 'Clear'}
                  </button>
                )}
              </div>

              {/* Quick Query Suggestion Chips */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: 'var(--web-text-muted)', textTransform: 'uppercase' }}>
                  {isEs ? 'Consultas Frecuentes:' : 'Popular Queries:'}
                </span>
                {[
                  { en: 'Benefits of centralized RAG?', es: '¿Beneficios de RAG centralizado?' },
                  { en: 'How does CRM connect with ERP?', es: '¿Cómo conectar CRM con ERP?' },
                  { en: 'Control costs with open-source RAG?', es: '¿Controlar costos con RAG open-source?' },
                  { en: 'How do customizable dashboards work?', es: '¿Cómo funciona drag and drop?' },
                  { en: 'What is White Label CRM?', es: '¿Qué es CRM Marca Blanca?' }
                ].map((chip, cIdx) => (
                  <button
                    key={cIdx}
                    type="button"
                    onClick={() => setFaqSearchQuery(isEs ? chip.es : chip.en)}
                    style={{
                      fontSize: '11.5px',
                      fontWeight: 600,
                      padding: '4px 10px',
                      borderRadius: '16px',
                      background: faqSearchQuery.toLowerCase().includes((isEs ? chip.es : chip.en).slice(0, 10).toLowerCase()) ? '#4f46e5' : 'var(--web-surface)',
                      color: faqSearchQuery.toLowerCase().includes((isEs ? chip.es : chip.en).slice(0, 10).toLowerCase()) ? '#ffffff' : 'var(--web-text-main)',
                      border: '1px solid var(--web-border)',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {isEs ? chip.es : chip.en}
                  </button>
                ))}
              </div>
            </div>

            {/* Real-Time Synthesized AI RAG Answer Card */}
            {activeRagAnswer && (
              <div style={{
                background: 'var(--web-surface)',
                border: activeRagAnswer.inKnowledgeBase ? '2px solid #4f46e5' : '2px dashed #f59e0b',
                borderRadius: '14px',
                padding: '1.25rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.04)',
                animation: 'fadeIn 0.2s ease-in-out'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      background: activeRagAnswer.inKnowledgeBase ? '#4f46e5' : '#f59e0b',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Bot size={16} />
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 800, color: 'var(--web-text-main)' }}>
                      {activeRagAnswer.title}
                    </span>
                  </div>

                  <span style={{
                    fontSize: '11px',
                    fontWeight: 800,
                    padding: '2px 8px',
                    borderRadius: '12px',
                    background: activeRagAnswer.inKnowledgeBase ? 'rgba(16, 185, 129, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                    color: activeRagAnswer.inKnowledgeBase ? '#059669' : '#d97706',
                    border: `1px solid ${activeRagAnswer.inKnowledgeBase ? 'rgba(16, 185, 129, 0.25)' : 'rgba(245, 158, 11, 0.25)'}`
                  }}>
                    {activeRagAnswer.confidence}
                  </span>
                </div>

                <p style={{
                  fontSize: '13.5px',
                  color: 'var(--web-text-main)',
                  lineHeight: 1.6,
                  margin: 0,
                  background: 'var(--web-surface-subtle)',
                  padding: '10px 14px',
                  borderRadius: '8px'
                }}>
                  {activeRagAnswer.text}
                </p>

                {/* Verified Citations */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap', paddingTop: '2px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--web-text-muted)' }}>
                    {isEs ? 'Fuentes Verificadas:' : 'Verified Sources:'}
                  </span>
                  {activeRagAnswer.sources.map((src, sIdx) => (
                    <span
                      key={sIdx}
                      style={{
                        fontSize: '10.5px',
                        fontWeight: 700,
                        background: 'rgba(79, 70, 229, 0.08)',
                        color: '#4f46e5',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        border: '1px solid rgba(79, 70, 229, 0.2)'
                      }}
                    >
                      {src}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* The 8 Main Benefits Grid (Directly from User Text) */}
            <div>
              <div style={{ marginBottom: '10px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  {isEs ? 'Arquitectura y Ventajas Estratégicas' : 'Strategic Architectural Advantages'}
                </span>
                <h4 style={{ fontSize: '16px', fontWeight: 900, color: 'var(--web-text-main)', margin: '2px 0 0 0' }}>
                  {isEs ? 'Los 8 Beneficios Principales de la Base Centralizada con RAG' : 'The 8 Main Benefits of an AI-Powered Centralized Knowledge Base with RAG'}
                </h4>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '12px'
              }}>
                {[
                  {
                    num: '01',
                    icon: Database,
                    color: '#4f46e5',
                    titleEn: 'Centralized Single Source',
                    titleEs: 'Fuente Única Centralizada',
                    descEn: 'All FAQs and product knowledge managed from one central place.',
                    descEs: 'Todas las preguntas frecuentes y conocimiento de producto se gestionan desde un solo lugar central.'
                  },
                  {
                    num: '02',
                    icon: Network,
                    color: '#0284c7',
                    titleEn: '100+ Website Pages Syndication',
                    titleEs: 'Distribución en 100+ Páginas',
                    descEn: 'The same knowledge can automatically serve 100+ website pages without manual duplication.',
                    descEs: 'El mismo conocimiento atiende automáticamente a más de 100 páginas web sin duplicación manual.'
                  },
                  {
                    num: '03',
                    icon: MessageSquare,
                    color: '#10b981',
                    titleEn: 'Natural Language Inquiries',
                    titleEs: 'Consultas en Lenguaje Natural',
                    descEn: 'Visitors can ask questions naturally instead of searching manually through rigid menus.',
                    descEs: 'Los visitantes pueden preguntar de forma natural en lugar de buscar manualmente por menús rígidos.'
                  },
                  {
                    num: '04',
                    icon: ShieldCheck,
                    color: '#f97316',
                    titleEn: 'Grounded CRM/ERP Information',
                    titleEs: 'Fundamentación en CRM/ERP Real',
                    descEn: 'AI answers based on your actual CRM/ERP information, reducing incorrect answers and hallucinations.',
                    descEs: 'La IA responde basándose en información real de su CRM/ERP, reduciendo respuestas incorrectas.'
                  },
                  {
                    num: '05',
                    icon: RefreshCw,
                    color: '#8b5cf6',
                    titleEn: 'Zero-Code Live Additions',
                    titleEs: 'Actualizaciones Sin Código',
                    descEn: 'New questions and information can be added anytime without changing every page.',
                    descEs: 'Se pueden agregar nuevas preguntas e información en cualquier momento sin alterar cada página.'
                  },
                  {
                    num: '06',
                    icon: FileSearch,
                    color: '#ec4899',
                    titleEn: 'Knowledge Gap Analytics',
                    titleEs: 'Detección de Brechas de Preguntas',
                    descEn: 'We can identify questions customers are asking that aren’t yet in the knowledge base.',
                    descEs: 'Permite identificar preguntas que los clientes hacen y que aún no están en la base de conocimiento.'
                  },
                  {
                    num: '07',
                    icon: Bot,
                    color: '#06b6d4',
                    titleEn: 'Omnichannel Agent Ecosystem',
                    titleEs: 'Ecosistema de Agentes Omnicanal',
                    descEn: 'The same system can later power your website assistant, CRM assistant, ERP assistant, customer support, and AI agents.',
                    descEs: 'El mismo sistema impulsa luego su asistente web, asistente CRM, ERP, soporte al cliente y agentes de IA.'
                  },
                  {
                    num: '08',
                    icon: Zap,
                    color: '#eab308',
                    titleEn: 'Open-Source Cost Control',
                    titleEs: 'Control de Costos con Open-Source',
                    descEn: 'We can use open-source/free RAG technology for much of the system and connect an AI API only where needed, helping control ongoing costs.',
                    descEs: 'Usamos tecnología RAG gratuita/open-source para el núcleo y conectamos APIs de IA solo cuando es necesario, controlando costos.'
                  }
                ].map((b) => {
                  const BIcon = b.icon;
                  return (
                    <div
                      key={b.num}
                      style={{
                        background: 'var(--web-surface)',
                        border: '1px solid var(--web-border)',
                        borderRadius: '12px',
                        padding: '12px 14px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '6px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '8px',
                          background: `${b.color}15`,
                          color: b.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <BIcon size={16} />
                        </div>
                        <span style={{ fontSize: '11px', fontWeight: 900, color: b.color, fontFamily: 'var(--font-mono)' }}>
                          {b.num}
                        </span>
                      </div>
                      <h5 style={{ fontSize: '13px', fontWeight: 800, color: 'var(--web-text-main)', margin: '2px 0 0 0' }}>
                        {isEs ? b.titleEs : b.titleEn}
                      </h5>
                      <p style={{ fontSize: '11.5px', color: 'var(--web-text-muted)', margin: 0, lineHeight: 1.45 }}>
                        {isEs ? b.descEs : b.descEn}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Architecture Conclusion (from User Text) */}
            <div style={{
              padding: '14px 18px',
              background: 'var(--web-surface)',
              border: '1px solid var(--web-border)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexWrap: 'wrap'
            }}>
              <Sparkles size={18} style={{ color: '#f59e0b', flexShrink: 0 }} />
              <p style={{ fontSize: '13px', fontWeight: 700, color: 'var(--web-text-main)', margin: 0, lineHeight: 1.5 }}>
                {isEs
                  ? 'Así, en lugar de construir solo una sección de preguntas frecuentes, construimos un sistema central de conocimiento con IA que crece con toda la plataforma.'
                  : 'So instead of building just an FAQ section, we build one central AI knowledge system that grows with the entire platform.'}
              </p>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
            {/* FAQ Visual Selector Tabs */}
            <div className="website-faq-tabs">
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
                {isEs ? 'Funcionalidades CRM (Botones de Iconos)' : 'CRM Features (Icon Buttons)'}
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
                {isEs ? 'Soluciones CRM (4 Grupos)' : 'CRM Solutions (4 Groups)'}
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
                {isEs ? 'Industrias (Botones de Iconos)' : 'Industries (Icon Buttons)'}
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
                {isEs ? '¿Qué es My Zunme?' : 'What is My Zunme?'}
              </button>
            </div>
          </div>

          {/* TAB 1: CRM FEATURES ICON BUTTONS GRID */}
          {faqTab === 'features' && (
            <div style={{
              background: 'var(--web-surface-subtle)',
              borderRadius: '16px',
              border: '1px solid var(--web-border)',
              padding: 'clamp(1rem, 2.5vw, 1.5rem)',
              marginBottom: '2rem'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--web-text-main)', margin: 0 }}>
                  {t('Display All Features (Icon Buttons)')}
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--web-text-muted)' }}>
                  {t('Click any icon button to inspect feature capabilities or request a demo.')}
                </span>
              </div>
              <div className="website-icon-btn-grid">
                {CRM_FEATURES_DATA.map((f) => {
                  const Icon = f.icon;
                  const fName = (isEs && f.nameEs) ? f.nameEs : t(f.name);

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
                        {fName}
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
              padding: 'clamp(1rem, 2.5vw, 1.5rem)',
              marginBottom: '2rem'
            }}>
              <div style={{ marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--web-text-main)', margin: 0 }}>
                  {t('CRM Solutions: 4 Specialized Groups')}
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--web-text-muted)' }}>
                  {t('Architectural and enterprise solution categories defined in the specification.')}
                </span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))', gap: '14px' }}>
                {CRM_SOLUTIONS_DATA.map((group, idx) => {
                  const badge = (isEs && group.badgeEs) ? group.badgeEs : t(group.badge);
                  const groupTitle = (isEs && group.groupTitleEs) ? group.groupTitleEs : t(group.groupTitle);

                  return (
                    <div key={idx} style={{ background: 'var(--web-surface)', padding: '1.1rem', borderRadius: '12px', border: '1px solid var(--web-border)' }}>
                      <span style={{ fontSize: '10px', fontWeight: 800, color: '#0284c7', textTransform: 'uppercase' }}>
                        {badge}
                      </span>
                      <h4 style={{ fontSize: '14.5px', fontWeight: 800, color: 'var(--web-text-main)', margin: '2px 0 8px 0' }}>
                        {groupTitle}
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {group.items.map((i) => {
                          const itemName = (isEs && i.nameEs) ? i.nameEs : t(i.name);

                          return (
                            <div
                              key={i.id}
                              onClick={() => onSelectItem && onSelectItem({ ...i, groupTitle })}
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
                              <span>{itemName}</span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: INDUSTRIES ICON BUTTONS GRID */}
          {faqTab === 'industries' && (
            <div style={{
              background: 'var(--web-surface-subtle)',
              borderRadius: '16px',
              border: '1px solid var(--web-border)',
              padding: 'clamp(1rem, 2.5vw, 1.5rem)',
              marginBottom: '2rem'
            }}>
              <div style={{ marginBottom: '1rem' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 800, color: 'var(--web-text-main)', margin: 0 }}>
                  {t('Industries (Icon Buttons)')}
                </h3>
                <span style={{ fontSize: '12px', color: 'var(--web-text-muted)' }}>
                  {t('All 23 vertical sector icon buttons available for enterprise configuration.')}
                </span>
              </div>
              <div className="website-icon-btn-grid">
                {INDUSTRIES_DATA.map((ind) => {
                  const Icon = ind.icon;
                  const indName = (isEs && ind.nameEs) ? ind.nameEs : t(ind.name);

                  return (
                    <button
                      key={ind.id}
                      type="button"
                      onClick={() => ind.route ? navigate(ind.route) : (onSelectItem && onSelectItem(ind))}
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
                        {indName}
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
              padding: 'clamp(1.25rem, 3vw, 2rem)',
              marginBottom: '2rem'
            }}>
              <div className="website-zunme-card-inner">
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
                <div style={{ flex: 1, minWidth: 'min(280px, 100%)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#ec4899', textTransform: 'uppercase' }}>
                      {t('Artificial Intelligence SuperHouse')}
                    </span>
                    <span style={{ fontSize: '10px', background: 'rgba(99, 102, 241, 0.15)', color: '#4f46e5', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                      {t('1,000+ Prompt Templates')}
                    </span>
                  </div>
                  <h3 style={{ fontSize: 'clamp(1.25rem, 2.5vw, 22px)', fontWeight: 900, color: 'var(--web-text-main)', margin: '4px 0 10px 0' }}>
                    {t('What is My Zunme?')}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--web-text-muted)', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
                    <strong>ZUNME</strong> {t('is the integrated creative, monetization, and SEO engine inside CRM nErgy AI. It empowers creators, marketing agencies, and business owners to build content rapidly using pre-built AI workflows. Featuring over 1,000 specialized templates, ZUNME powers autonomous AI video agents, brand soundtrack synthesis, script writing, and enterprise copy generation.')}
                  </p>
                  <div className="website-zunme-actions" style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      onClick={onOpenZunme}
                      className="website-cta-zunme"
                      style={{ padding: '8px 18px', fontSize: '13px' }}
                    >
                      <Sparkles size={14} />
                      <span>{isEs ? 'Iniciar Asistente My Zunme >>' : 'Launch Ask My Zunme Assistant >>'}</span>
                    </button>
                    <button
                      type="button"
                      onClick={onOpenSales}
                      className="website-btn-sales"
                      style={{ padding: '8px 18px', fontSize: '13px', borderRadius: '8px' }}
                    >
                      <span>{isEs ? 'Consultar sobre Licencias Zunme' : 'Inquire About Zunme Licensing'}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Accordion Questions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {filteredFaqQuestions.length === 0 ? (
              <div style={{
                textAlign: 'center',
                padding: '2.5rem',
                background: 'var(--web-surface-subtle)',
                borderRadius: '12px',
                border: '1px dashed var(--web-border)'
              }}>
                <FileSearch size={28} style={{ color: '#4f46e5', margin: '0 auto 8px auto' }} />
                <p style={{ fontSize: '14px', fontWeight: 700, color: 'var(--web-text-main)', margin: '0 0 4px 0' }}>
                  {isEs ? 'No se encontraron preguntas coincidentes en la lista clásica' : 'No matching classic FAQ questions found'}
                </p>
                <span style={{ fontSize: '12px', color: 'var(--web-text-muted)' }}>
                  {isEs ? 'Consulte la respuesta sintetizada de IA RAG en la parte superior' : 'Refer to the AI RAG synthesized answer box above'}
                </span>
              </div>
            ) : filteredFaqQuestions.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              const question = (isEs && faq.qEs) ? faq.qEs : t(faq.q);
              const answer = (isEs && faq.aEs) ? faq.aEs : t(faq.a);

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
                      {question}
                    </span>
                    <ChevronDown size={18} style={{
                      transform: isOpen ? 'rotate(180deg)' : 'none',
                      transition: 'transform 0.2s',
                      color: 'var(--web-text-muted)',
                      flexShrink: 0
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
                      {answer}
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
        padding: 'clamp(2.5rem, 5vw, 4rem) clamp(1rem, 3vw, 1.25rem)',
        backgroundColor: 'var(--web-surface-subtle)',
        borderTop: '1px solid var(--web-border)'
      }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            {t('Enterprise Governance')}
          </span>
          <h2 style={{ fontSize: 'clamp(1.4rem, 3.2vw, 26px)', fontWeight: 900, color: 'var(--web-text-main)', margin: '4px 0 12px 0' }}>
            {t('Security, Resilience & High-Throughput Architecture')}
          </h2>
          <p style={{ fontSize: '14px', color: 'var(--web-text-muted)', maxWidth: '680px', margin: '0 auto 2.5rem auto', lineHeight: 1.6 }}>
            {t('Designed for institutional-grade reliability, CRM nErgy implements strict tenant isolation, cryptographic vault storage, and granular role-based access control.')}
          </p>

          <div className="website-security-grid">
            <div style={{ background: 'var(--web-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--web-border)', textAlign: 'left' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(79, 70, 229, 0.1)', color: '#4f46e5', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Lock size={20} />
              </div>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--web-text-main)', margin: '0 0 6px 0' }}>
                {t('Tenant Vault Isolation')}
              </h4>
              <p style={{ fontSize: '12.5px', color: 'var(--web-text-muted)', lineHeight: 1.5, margin: 0 }}>
                {t('Every corporate subscriber operates within an encrypted tenant boundary ensuring proprietary deal flows and employee data remain isolated.')}
              </p>
            </div>

            <div style={{ background: 'var(--web-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--web-border)', textAlign: 'left' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(2, 132, 199, 0.1)', color: '#0284c7', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <Boxes size={20} />
              </div>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--web-text-main)', margin: '0 0 6px 0' }}>
                {t('Real-Time Synchronous Sync')}
              </h4>
              <p style={{ fontSize: '12.5px', color: 'var(--web-text-muted)', lineHeight: 1.5, margin: 0 }}>
                {t('Sub-second data replication across inventory, sales orders, leads, and accounting ledgers eliminates batch reconciliation delays.')}
              </p>
            </div>

            <div style={{ background: 'var(--web-surface)', padding: '1.5rem', borderRadius: '12px', border: '1px solid var(--web-border)', textAlign: 'left' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                <ShieldCheck size={20} />
              </div>
              <h4 style={{ fontSize: '15px', fontWeight: 800, color: 'var(--web-text-main)', margin: '0 0 6px 0' }}>
                {t('Audit-Ready Compliance')}
              </h4>
              <p style={{ fontSize: '12.5px', color: 'var(--web-text-muted)', lineHeight: 1.5, margin: 0 }}>
                {t('Immutable audit logging on every administrative action, contract signature, and banking transaction prepared for GAAP/IFRS reviews.')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebsiteHome;
