import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, MessageSquare, LogIn } from 'lucide-react';
import { AiEnergyLogo } from '../common/AiEnergyLogo';

export const WebsiteFooter = ({ onOpenZunme, onOpenSales }) => {
  const navigate = useNavigate();

  const handleAnchor = (hash) => {
    if (window.location.pathname !== '/') {
      navigate('/' + hash);
    } else {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer style={{
      backgroundColor: 'var(--web-surface)',
      borderTop: '1px solid var(--web-border)',
      padding: '3.5rem 1.25rem 2rem 1.25rem',
      marginTop: 'auto'
    }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        
        {/* Top Section: Brand & Executive Access */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          paddingBottom: '2.5rem',
          borderBottom: '1px solid var(--web-border)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxWidth: '640px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <AiEnergyLogo size={32} showText={false} />
              <span style={{ fontSize: '19px', fontWeight: 900, color: 'var(--web-text-main)', letterSpacing: '-0.02em' }}>
                CRM nErgy AI
              </span>
              <span style={{
                fontSize: '10.5px',
                fontWeight: 700,
                color: '#4f46e5',
                background: 'rgba(79, 70, 229, 0.08)',
                padding: '2px 8px',
                borderRadius: '12px',
                border: '1px solid rgba(79, 70, 229, 0.2)'
              }}>
                Enterprise Platform
              </span>
            </div>
            <p style={{ fontSize: '13.5px', color: 'var(--web-text-muted)', lineHeight: 1.55, margin: 0 }}>
              The unified AI-driven Enterprise Operating System combining complete CRM, ERP, Accounting, Supply Chain, and ZUNME AI Studio. “Make AI Your Bestie”.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--web-text-muted)', marginTop: '2px' }}>
              <ShieldCheck size={16} style={{ color: '#10b981' }} />
              <span>SHA-256 Vault Encryption • 99.99% Enterprise Uptime</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={onOpenSales}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '9px 16px',
                borderRadius: '8px',
                background: 'var(--web-surface-subtle)',
                border: '1px solid var(--web-border)',
                color: 'var(--web-text-main)',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <MessageSquare size={14} style={{ color: '#0284c7' }} />
              <span>SALES — chat eBox</span>
            </button>

            <button
              type="button"
              onClick={() => navigate('/crm/login')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: '#0f2b5c',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '9px 18px',
                fontSize: '13px',
                fontWeight: 700,
                cursor: 'pointer'
              }}
            >
              <LogIn size={14} />
              <span>Customer & Executive Login</span>
            </button>
          </div>
        </div>

        {/* 4 Client-Specified Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem'
        }}>
          {/* Column 1: Help Center */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--web-text-main)', letterSpacing: '0.06em', marginBottom: '4px' }}>
              Help Center
            </span>
            <a href="#knowledge-base" onClick={(e) => { e.preventDefault(); handleAnchor('#faqs'); }} style={linkStyle}>Knowledge Base</a>
            <a href="#academy" onClick={(e) => { e.preventDefault(); handleAnchor('#features'); }} style={linkStyle}>Academy</a>
            <a href="#faqs" onClick={(e) => { e.preventDefault(); handleAnchor('#faqs'); }} style={linkStyle}>FAQs</a>
            <button type="button" onClick={onOpenSales} style={btnLinkStyle}>Support</button>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', margin: '2px 0' }}>
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                color: '#10b981',
                background: 'rgba(16, 185, 129, 0.1)',
                padding: '2px 8px',
                borderRadius: '6px',
                border: '1px solid rgba(16, 185, 129, 0.25)'
              }}>
                ● (Available now)
              </span>
            </div>
            <a href="#resources" onClick={(e) => { e.preventDefault(); handleAnchor('#features'); }} style={linkStyle}>Resources</a>
            <button type="button" onClick={onOpenZunme} style={{ ...btnLinkStyle, color: '#4f46e5', fontWeight: 700 }}>
              Virtual Assistant &gt;&gt;
            </button>
            <button type="button" onClick={onOpenSales} style={btnLinkStyle}>Contact Center AI</button>
          </div>

          {/* Column 2: Check It Out */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--web-text-main)', letterSpacing: '0.06em', marginBottom: '4px' }}>
              Check It Out
            </span>
            <a href="#training" onClick={(e) => { e.preventDefault(); handleAnchor('#features'); }} style={linkStyle}>CRM nErgy Training</a>
            <a href="#case-studies" onClick={(e) => { e.preventDefault(); handleAnchor('#solutions'); }} style={linkStyle}>Case studies</a>
            <a href="#calculator" onClick={(e) => { e.preventDefault(); handleAnchor('#solutions'); }} style={linkStyle}>Commission calculator</a>
            <a href="#videos" onClick={(e) => { e.preventDefault(); handleAnchor('#features'); }} style={linkStyle}>Videos</a>
            <a href="#solutions" onClick={(e) => { e.preventDefault(); handleAnchor('#solutions'); }} style={linkStyle}>What’s White Label?</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); handleAnchor('#features'); }} style={linkStyle}>What is a CRM?</a>
            <a href="#solutions" onClick={(e) => { e.preventDefault(); handleAnchor('#solutions'); }} style={linkStyle}>What is an ERP?</a>
            <a href="#solutions" onClick={(e) => { e.preventDefault(); handleAnchor('#solutions'); }} style={linkStyle}>What is an ERP – CRM?</a>
            <a href="#events" onClick={(e) => { e.preventDefault(); handleAnchor('#features'); }} style={linkStyle}>CRM nErgy Events</a>
            <a href="#reviews" onClick={(e) => { e.preventDefault(); handleAnchor('#features'); }} style={linkStyle}>Reviews</a>
            <a href="#industries" onClick={(e) => { e.preventDefault(); handleAnchor('#industries'); }} style={linkStyle}>Industries</a>
          </div>

          {/* Column 3: Business Solutions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--web-text-main)', letterSpacing: '0.06em', marginBottom: '4px' }}>
              Business Solutions
            </span>
            <a href="#solutions" onClick={(e) => { e.preventDefault(); handleAnchor('#solutions'); }} style={linkStyle}>4 Types of CRMs</a>
            <button type="button" onClick={onOpenSales} style={btnLinkStyle}>AAI - Sales More</button>
            <button type="button" onClick={onOpenZunme} style={btnLinkStyle}>Marketing Genius</button>
            <a href="#features" onClick={(e) => { e.preventDefault(); handleAnchor('#features'); }} style={linkStyle}>Manufacturing</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); handleAnchor('#features'); }} style={linkStyle}>Generating Leads</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); handleAnchor('#features'); }} style={linkStyle}>Inventory Management</a>
            <a href="#solutions" onClick={(e) => { e.preventDefault(); handleAnchor('#solutions'); }} style={linkStyle}>SM / Influencer Management</a>
            <button type="button" onClick={onOpenSales} style={btnLinkStyle}>Best Sales Commission</button>
            <a href="#features" onClick={(e) => { e.preventDefault(); handleAnchor('#features'); }} style={linkStyle}>Affiliate Marketing</a>
            <a href="#solutions" onClick={(e) => { e.preventDefault(); handleAnchor('#solutions'); }} style={linkStyle}>White Label Software</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); handleAnchor('#features'); }} style={linkStyle}>Features</a>
            <a href="#security" onClick={(e) => { e.preventDefault(); handleAnchor('#about'); }} style={linkStyle}>Privacy and security</a>
          </div>

          {/* Column 4: CRM nErgy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontSize: '13px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--web-text-main)', letterSpacing: '0.06em', marginBottom: '4px' }}>
              CRM nErgy
            </span>
            <a href="#about" onClick={(e) => { e.preventDefault(); handleAnchor('#about'); }} style={linkStyle}>Company</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); handleAnchor('#features'); }} style={linkStyle}>Products</a>
            <a href="#features" onClick={(e) => { e.preventDefault(); handleAnchor('#features'); }} style={linkStyle}>Affiliate Partners</a>
            <a href="#referrals" onClick={(e) => { e.preventDefault(); handleAnchor('#features'); }} style={linkStyle}>Referral program</a>
            <a href="#jobs" onClick={(e) => { e.preventDefault(); handleAnchor('#about'); }} style={linkStyle}>Jobs</a>
            <a href="#blog" onClick={(e) => { e.preventDefault(); handleAnchor('#features'); }} style={linkStyle}>Blog</a>
            <button type="button" onClick={onOpenSales} style={btnLinkStyle}>Pricing</button>
            <button type="button" onClick={onOpenSales} style={btnLinkStyle}>Contact</button>
            <a href="#solutions" onClick={(e) => { e.preventDefault(); handleAnchor('#solutions'); }} style={linkStyle}>Third Party Integration</a>
            <a href="#api" onClick={(e) => { e.preventDefault(); handleAnchor('#solutions'); }} style={linkStyle}>API</a>
          </div>
        </div>

        {/* Bottom row: Copyright & Legal */}
        <div style={{
          borderTop: '1px solid var(--web-border)',
          paddingTop: '1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '12px',
          color: 'var(--web-text-muted)'
        }}>
          <div>
            © {new Date().getFullYear()} CRM nErgy AI & ZUNME AI SuperHouse. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '18px', flexWrap: 'wrap' }}>
            <span style={{ cursor: 'pointer' }} onClick={() => handleAnchor('#about')}>Privacy Policy</span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleAnchor('#about')}>Terms of Service</span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleAnchor('#about')}>Security Architecture</span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleAnchor('#solutions')}>Third Party Integration</span>
            <span style={{ cursor: 'pointer' }} onClick={() => handleAnchor('#solutions')}>API</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

const linkStyle = {
  fontSize: '13px',
  color: 'var(--web-text-muted)',
  textDecoration: 'none',
  lineHeight: 1.5,
  transition: 'color 0.15s ease',
  cursor: 'pointer'
};

const btnLinkStyle = {
  background: 'none',
  border: 'none',
  textAlign: 'left',
  padding: 0,
  fontSize: '13px',
  color: 'var(--web-text-muted)',
  cursor: 'pointer',
  lineHeight: 1.5,
  transition: 'color 0.15s ease'
};

