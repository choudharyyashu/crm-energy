import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Bot,
  MessageSquare,
  Sun,
  Moon,
  LogIn,
  ArrowRight,
  ShieldCheck,
  Globe,
  ExternalLink,
  Layers,
  HelpCircle,
  Briefcase
} from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { LanguageToggle } from '../common/LanguageToggle';
import { AiEnergyLogo } from '../common/AiEnergyLogo';
import {
  CRM_FEATURES_DATA,
  CRM_SOLUTIONS_DATA,
  INDUSTRIES_DATA
} from '../../data/websiteNavData';

export const WebsiteNavbar = ({
  onOpenZunme,
  onOpenSales,
  onSelectItem,
  activeSection = ''
}) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const [activeMenu, setActiveMenu] = useState(null); // 'features' | 'solutions' | 'industries' | 'more' | null
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);
  const navRef = useRef(null);

  // Close mega-menus on outside click or escape
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveMenu(null);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setMobileDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Close menus on route change
  useEffect(() => {
    setActiveMenu(null);
    setMobileDrawerOpen(false);
  }, [location.pathname]);

  const toggleMenu = (menuName) => {
    setActiveMenu((prev) => (prev === menuName ? null : menuName));
  };

  const scrollToFaq = () => {
    setActiveMenu(null);
    if (location.pathname !== '/') {
      navigate('/#faqs');
    } else {
      const el = document.getElementById('faqs');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCardClick = (item) => {
    setActiveMenu(null);
    setMobileDrawerOpen(false);
    if (item && item.route) {
      navigate(item.route);
      return;
    }
    if (onSelectItem) {
      onSelectItem(item);
    }
  };

  return (
    <header className="website-header-sticky" ref={navRef}>
      <div className="website-nav-inner">
        {/* Brand Logo */}
        <div
          onClick={() => navigate('/')}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', flexShrink: 0 }}
        >
          <AiEnergyLogo size={34} showText={false} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontSize: '17px',
              fontWeight: 800,
              fontFamily: 'var(--font-display)',
              color: 'var(--web-text-main)',
              letterSpacing: '-0.02em',
              lineHeight: 1.1
            }}>
              CRM nErgy AI
            </span>
            <span className="website-brand-sub" style={{ fontSize: '10px', fontWeight: 600, color: 'var(--web-text-muted)', lineHeight: 1.1 }}>
              {t('Enterprise Platform')}
            </span>
          </div>
        </div>

        {/* Desktop Main Navigation (7 Client Buttons) */}
        <nav className="website-main-nav">
          {/* 1. CRM Features */}
          <button
            type="button"
            className={`website-nav-btn ${activeMenu === 'features' ? 'active' : ''}`}
            onClick={() => toggleMenu('features')}
          >
            <span>{t('CRM Features')}</span>
            <ChevronDown size={14} style={{
              transform: activeMenu === 'features' ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.2s ease'
            }} />
          </button>

          {/* 2. CRM Solutions */}
          <button
            type="button"
            className={`website-nav-btn ${activeMenu === 'solutions' ? 'active' : ''}`}
            onClick={() => toggleMenu('solutions')}
          >
            <span>{t('CRM Solutions')}</span>
            <ChevronDown size={14} style={{
              transform: activeMenu === 'solutions' ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.2s ease'
            }} />
          </button>

          {/* 3. Industries */}
          <button
            type="button"
            className={`website-nav-btn ${activeMenu === 'industries' ? 'active' : ''}`}
            onClick={() => toggleMenu('industries')}
          >
            <span>{t('Industries')}</span>
            <ChevronDown size={14} style={{
              transform: activeMenu === 'industries' ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.2s ease'
            }} />
          </button>

          {/* 4. FAQs */}
          <button
            type="button"
            className="website-nav-btn"
            onClick={scrollToFaq}
          >
            <span>{t('FAQs')}</span>
          </button>

          {/* 5. Ask My Zunme – VA Virtual Assistant >> */}
          <button
            type="button"
            className="website-nav-btn website-cta-zunme"
            onClick={onOpenZunme}
            title={t('Ask My Zunme — VA Virtual Assistant')}
          >
            <Sparkles size={14} style={{ color: '#fef08a' }} />
            <span>{t('Ask My Zunme — VA Virtual Assistant')}</span>
            <span style={{ letterSpacing: '0.05em', fontWeight: 900 }}>&gt;&gt;</span>
          </button>

          {/* 6. SALES - chat eBox */}
          <button
            type="button"
            className="website-nav-btn website-btn-sales"
            onClick={onOpenSales}
            title="Open Sales Consultation chat eBox"
          >
            <MessageSquare size={14} />
            <span>{t('SALES')}</span>
          </button>

          {/* 7. MORE */}
          <button
            type="button"
            className={`website-nav-btn ${activeMenu === 'more' ? 'active' : ''}`}
            onClick={() => toggleMenu('more')}
          >
            <span>{t('MORE')}</span>
            <ChevronDown size={14} style={{
              transform: activeMenu === 'more' ? 'rotate(180deg)' : 'none',
              transition: 'transform 0.2s ease'
            }} />
          </button>
        </nav>

        {/* Right Side Controls: Language Switcher, Theme Toggle & Sign In */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
          {/* 1-Click English ↔ Spanish Language Selector */}
          <div style={{ flexShrink: 0 }}>
            <LanguageToggle />
          </div>

          {/* Theme Toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            style={{
              width: '36px',
              height: '36px',
              minWidth: '36px',
              minHeight: '36px',
              flexShrink: 0,
              borderRadius: '50%',
              background: 'var(--web-surface-subtle)',
              border: '1px solid var(--web-border)',
              color: 'var(--web-text-main)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
            title={theme === 'light' ? t('Switch to Dark Mode') : t('Switch to Light Mode')}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} style={{ color: '#f59e0b' }} />}
          </button>

          {/* DISTINCT LOGIN BUTTON */}
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="website-signin-btn"
            style={{
              background: 'transparent',
              border: '1px solid var(--web-border)',
              color: 'var(--web-text-main)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              padding: '6px 10px',
              fontSize: '12px',
              flexShrink: 0,
            }}
          >
            <LogIn size={13} />
            <span>{t('Login')}</span>
          </button>

          {/* DISTINCT CREATE ACCOUNT BUTTON */}
          <button
            type="button"
            onClick={() => navigate('/crm/signup')}
            className="website-signin-btn"
            style={{
              background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
              color: '#ffffff',
              border: 'none',
              boxShadow: '0 2px 8px rgba(2, 132, 199, 0.35)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '6px 10px',
              fontSize: '12px',
              flexShrink: 0,
            }}
          >
            <span>{t('Create Account')}</span>
            <ArrowRight size={13} />
          </button>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileDrawerOpen(true)}
            className="website-mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* ======================================================== */}
      {/* 1. MEGA MENU: CRM FEATURES (23 Dolibarr-style Cards)    */}
      {/* ======================================================== */}
      {activeMenu === 'features' && (
        <div className="mega-menu-overlay">
          <div className="mega-menu-inner">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--web-text-main)', margin: 0 }}>
                  CRM Features Directory (23 Modules)
                </h3>
                <p style={{ fontSize: '12px', color: 'var(--web-text-muted)', margin: '2px 0 0 0' }}>
                  Complete all-in-one suite of business, ERP, accounting, logistics, and AI workflows.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveMenu(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--web-text-muted)',
                  padding: '4px'
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div className="features-mega-grid">
              {CRM_FEATURES_DATA.map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.id}
                    className="dolibarr-card"
                    onClick={() => handleCardClick(feat)}
                  >
                    <div className="dolibarr-icon-box">
                      <Icon size={20} />
                    </div>
                    <span className="dolibarr-title">{feat.name}</span>
                    <span className="dolibarr-desc">{feat.desc}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 2. MEGA MENU: CRM SOLUTIONS (4 Categorized Columns)     */}
      {/* ======================================================== */}
      {activeMenu === 'solutions' && (
        <div className="mega-menu-overlay">
          <div className="mega-menu-inner">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--web-text-main)', margin: 0 }}>
                  CRM Solutions Frameworks
                </h3>
                <p style={{ fontSize: '12px', color: 'var(--web-text-muted)', margin: '2px 0 0 0' }}>
                  Targeted business solutions engineered for distinct corporate operational requirements.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveMenu(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--web-text-muted)',
                  padding: '4px'
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div className="solutions-mega-grid">
              {CRM_SOLUTIONS_DATA.map((col, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                    background: 'var(--web-surface-subtle)',
                    padding: '1rem',
                    borderRadius: '12px',
                    border: '1px solid var(--web-border)'
                  }}
                >
                  <div style={{ borderBottom: '1px solid var(--web-border)', paddingBottom: '0.65rem' }}>
                    <span style={{
                      fontSize: '10px',
                      fontWeight: 800,
                      textTransform: 'uppercase',
                      color: '#4f46e5',
                      letterSpacing: '0.06em'
                    }}>
                      {col.badge}
                    </span>
                    <h4
                      onClick={() => {
                        if (col.route) {
                          setActiveMenu(null);
                          navigate(col.route);
                        }
                      }}
                      style={{
                        fontSize: '14.5px',
                        fontWeight: 800,
                        color: 'var(--web-text-main)',
                        margin: '2px 0 0 0',
                        cursor: col.route ? 'pointer' : 'default',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      <span>{col.groupTitle}</span>
                      {col.route && <ArrowRight size={13} style={{ color: '#0284c7' }} />}
                    </h4>
                    <span style={{ fontSize: '11px', color: 'var(--web-text-muted)' }}>{col.subtitle}</span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {col.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.id}
                          className="dolibarr-card"
                          style={{ padding: '0.75rem' }}
                          onClick={() => handleCardClick({ ...item, groupTitle: col.groupTitle })}
                        >
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                            <div style={{
                              width: '26px',
                              height: '26px',
                              borderRadius: '6px',
                              background: 'rgba(99, 102, 241, 0.1)',
                              color: '#4f46e5',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              flexShrink: 0
                            }}>
                              <Icon size={14} />
                            </div>
                            <span style={{ fontSize: '12.5px', fontWeight: 700, color: 'var(--web-text-main)' }}>
                              {item.name}
                            </span>
                          </div>
                          <span className="dolibarr-desc" style={{ fontSize: '11px' }}>{item.desc}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 3. MEGA MENU: INDUSTRIES (23 Sector Cards)               */}
      {/* ======================================================== */}
      {activeMenu === 'industries' && (
        <div className="mega-menu-overlay">
          <div className="mega-menu-inner">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--web-text-main)', margin: 0 }}>
                  Industries Served (23 Sectors)
                </h3>
                <p style={{ fontSize: '12px', color: 'var(--web-text-muted)', margin: '2px 0 0 0' }}>
                  Pre-configured compliance pipelines and operational templates tailored for each vertical.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveMenu(null)}
                style={{
                  background: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--web-text-muted)',
                  padding: '4px'
                }}
              >
                <X size={18} />
              </button>
            </div>

            <div className="industries-mega-grid">
              {INDUSTRIES_DATA.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div
                    key={ind.id}
                    className="dolibarr-card"
                    style={{ padding: '0.85rem' }}
                    onClick={() => handleCardClick(ind)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                      <div className="dolibarr-icon-box" style={{ width: '32px', height: '32px', marginBottom: 0 }}>
                        <Icon size={16} />
                      </div>
                      <span className="dolibarr-title" style={{ fontSize: '13px', margin: 0 }}>{ind.name}</span>
                    </div>
                    <span className="dolibarr-desc">{ind.desc}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* 4. MORE DROPDOWN                                         */}
      {/* ======================================================== */}
      {activeMenu === 'more' && (
        <div style={{
          position: 'absolute',
          top: '72px',
          right: '80px',
          width: '280px',
          background: 'var(--web-surface)',
          border: '1px solid var(--web-border)',
          borderRadius: '12px',
          boxShadow: '0 20px 40px -10px rgba(0, 0, 0, 0.2)',
          padding: '8px',
          zIndex: 95
        }}>
          <div style={{
            fontSize: '10px',
            fontWeight: 800,
            textTransform: 'uppercase',
            color: 'var(--web-text-muted)',
            padding: '6px 10px',
            letterSpacing: '0.05em'
          }}>
            Explore CRM nErgy
          </div>

          <div
            onClick={() => {
              setActiveMenu(null);
              navigate('/#about');
              const el = document.getElementById('about');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 10px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--web-text-main)'
            }}
            className="hover:surface-secondary"
          >
            <ShieldCheck size={16} style={{ color: '#4f46e5' }} />
            <span>Security & Compliance</span>
          </div>

          <div
            onClick={() => {
              setActiveMenu(null);
              navigate('/oal');
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '8px',
              padding: '8px 10px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--web-text-main)'
            }}
            className="hover:surface-secondary"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Globe size={16} style={{ color: '#0f766e' }} />
              <span>OAL Lending Marketplace</span>
            </div>
            <ExternalLink size={12} style={{ color: 'var(--web-text-muted)' }} />
          </div>

          <div
            onClick={() => {
              setActiveMenu(null);
              onOpenSales();
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 10px',
              borderRadius: '8px',
              cursor: 'pointer',
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--web-text-main)'
            }}
            className="hover:surface-secondary"
          >
            <MessageSquare size={16} style={{ color: '#0284c7' }} />
            <span>Contact Executive Team</span>
          </div>
        </div>
      )}

      {/* ======================================================== */}
      {/* MOBILE / TABLET SLIDE-OUT DRAWER                        */}
      {/* ======================================================== */}
      {mobileDrawerOpen && (
        <div className="website-mobile-drawer">
          <div className="website-drawer-backdrop" onClick={() => setMobileDrawerOpen(false)} />
          <div className="website-drawer-content">
            <div style={{
              padding: '1.25rem',
              borderBottom: '1px solid var(--web-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <AiEnergyLogo size={28} showText={false} />
                <span style={{ fontWeight: 800, fontSize: '15px', color: 'var(--web-text-main)' }}>
                  CRM nErgy AI
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <LanguageToggle />
                <button
                  type="button"
                  onClick={() => setMobileDrawerOpen(false)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--web-text-muted)'
                  }}
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {/* Ask My Zunme Button */}
              <button
                type="button"
                className="website-cta-zunme"
                onClick={() => {
                  setMobileDrawerOpen(false);
                  onOpenZunme();
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '10px 14px'
                }}
              >
                <Sparkles size={16} />
                <span>{t('Ask My Zunme — VA Virtual Assistant >>')}</span>
              </button>

              {/* SALES button */}
              <button
                type="button"
                className="website-btn-sales"
                onClick={() => {
                  setMobileDrawerOpen(false);
                  onOpenSales();
                }}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '10px 14px',
                  borderRadius: '10px'
                }}
              >
                <MessageSquare size={16} />
                <span>{t('SALES — chat eBox')}</span>
              </button>

              <div style={{ height: '1px', background: 'var(--web-border)', margin: '8px 0' }} />

              {/* Mobile Accordion: CRM Features */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'features' ? null : 'features')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 8px',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--web-text-main)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span>{t('CRM Features')} (23)</span>
                  <ChevronDown size={16} style={{
                    transform: mobileExpandedSection === 'features' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s'
                  }} />
                </button>
                {mobileExpandedSection === 'features' && (
                  <div style={{ paddingLeft: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {CRM_FEATURES_DATA.map((f) => (
                      <div
                        key={f.id}
                        onClick={() => handleCardClick(f)}
                        style={{
                          padding: '6px 8px',
                          fontSize: '12px',
                          color: 'var(--web-text-muted)',
                          cursor: 'pointer',
                          borderRadius: '6px'
                        }}
                      >
                        {f.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Accordion: CRM Solutions */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'solutions' ? null : 'solutions')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 8px',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--web-text-main)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span>{t('CRM Solutions')} (4)</span>
                  <ChevronDown size={16} style={{
                    transform: mobileExpandedSection === 'solutions' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s'
                  }} />
                </button>
                {mobileExpandedSection === 'solutions' && (
                  <div style={{ paddingLeft: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {CRM_SOLUTIONS_DATA.map((g, idx) => (
                      <div key={idx} style={{ marginBottom: '4px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#4f46e5' }}>{g.groupTitle}</span>
                        {g.items.map((i) => (
                          <div
                            key={i.id}
                            onClick={() => handleCardClick({ ...i, groupTitle: g.groupTitle })}
                            style={{ padding: '4px 8px', fontSize: '12px', color: 'var(--web-text-muted)', cursor: 'pointer' }}
                          >
                            • {i.name}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Accordion: Industries */}
              <div>
                <button
                  type="button"
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'industries' ? null : 'industries')}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 8px',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: 'var(--web-text-main)',
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <span>{t('Industries')} (23)</span>
                  <ChevronDown size={16} style={{
                    transform: mobileExpandedSection === 'industries' ? 'rotate(180deg)' : 'none',
                    transition: 'transform 0.2s'
                  }} />
                </button>
                {mobileExpandedSection === 'industries' && (
                  <div style={{ paddingLeft: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {INDUSTRIES_DATA.map((ind) => (
                      <div
                        key={ind.id}
                        onClick={() => handleCardClick(ind)}
                        style={{ padding: '6px 8px', fontSize: '12px', color: 'var(--web-text-muted)', cursor: 'pointer' }}
                      >
                        {ind.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* FAQs */}
              <div
                onClick={() => {
                  setMobileDrawerOpen(false);
                  scrollToFaq();
                }}
                style={{
                  padding: '10px 8px',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: 'var(--web-text-main)',
                  cursor: 'pointer'
                }}
              >
                {t('FAQs')}
              </div>

              <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--web-border)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button
                  type="button"
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    navigate('/login');
                  }}
                  style={{
                    width: '100%',
                    background: 'transparent',
                    border: '1px solid var(--web-border)',
                    color: 'var(--web-text-main)',
                    borderRadius: '8px',
                    padding: '10px',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <LogIn size={15} />
                  <span>{t('Sign In')} / {t('Portal')}</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    setMobileDrawerOpen(false);
                    navigate('/crm/signup');
                  }}
                  style={{
                    width: '100%',
                    background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '10px',
                    fontSize: '13px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px'
                  }}
                >
                  <span>Create Account</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
