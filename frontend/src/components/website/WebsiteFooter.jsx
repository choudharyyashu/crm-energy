import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Lock, Globe, Sparkles, ArrowRight, Heart } from 'lucide-react';
import { AiEnergyLogo } from '../common/AiEnergyLogo';

export const WebsiteFooter = ({ onOpenZunme, onOpenSales }) => {
  const navigate = useNavigate();

  return (
    <footer style={{
      backgroundColor: 'var(--web-surface)',
      borderTop: '1px solid var(--web-border)',
      padding: '3.5rem 1.25rem 2rem 1.25rem',
      marginTop: 'auto'
    }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem'
        }}>
          {/* Col 1: Brand & Bio */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <AiEnergyLogo size={32} showText={false} />
              <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--web-text-main)' }}>
                CRM nErgy AI
              </span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--web-text-muted)', lineHeight: 1.5, margin: 0 }}>
              The unified AI-driven Enterprise Operating System combining complete CRM, ERP, Accounting, Supply Chain, and ZUNME AI Studio.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: 'var(--web-text-muted)' }}>
              <ShieldCheck size={16} style={{ color: '#10b981' }} />
              <span>SHA-256 Vault Encryption • 99.99% Enterprise Uptime</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--web-text-main)', letterSpacing: '0.05em' }}>
              Solutions & Features
            </span>
            <a href="#features" style={{ fontSize: '13px', color: 'var(--web-text-muted)', textDecoration: 'none' }}>23 CRM Modules</a>
            <a href="#solutions" style={{ fontSize: '13px', color: 'var(--web-text-muted)', textDecoration: 'none' }}>4 CRM Solutions</a>
            <a href="#industries" style={{ fontSize: '13px', color: 'var(--web-text-muted)', textDecoration: 'none' }}>23 Industries Directory</a>
            <a href="#faqs" style={{ fontSize: '13px', color: 'var(--web-text-muted)', textDecoration: 'none' }}>FAQs & Knowledge Base</a>
          </div>

          {/* Col 3: AI Ecosystem & Sales */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--web-text-main)', letterSpacing: '0.05em' }}>
              AI Ecosystem
            </span>
            <button
              type="button"
              onClick={onOpenZunme}
              style={{ background: 'none', border: 'none', textAlign: 'left', padding: 0, fontSize: '13px', color: '#4f46e5', fontWeight: 600, cursor: 'pointer' }}
            >
              Ask My Zunme — VA Assistant &gt;&gt;
            </button>
            <button
              type="button"
              onClick={onOpenSales}
              style={{ background: 'none', border: 'none', textAlign: 'left', padding: 0, fontSize: '13px', color: '#0284c7', fontWeight: 600, cursor: 'pointer' }}
            >
              SALES — chat eBox
            </button>
            <div
              onClick={() => navigate('/oal')}
              style={{ fontSize: '13px', color: 'var(--web-text-muted)', cursor: 'pointer' }}
            >
              OAL Lending Marketplace
            </div>
          </div>

          {/* Col 4: Portals & Compliance */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', color: 'var(--web-text-main)', letterSpacing: '0.05em' }}>
              Enterprise Access
            </span>
            <button
              type="button"
              onClick={() => navigate('/crm/login')}
              style={{
                background: '#0f2b5c',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 14px',
                fontSize: '12.5px',
                fontWeight: 700,
                cursor: 'pointer',
                textAlign: 'center'
              }}
            >
              Customer & Executive Login
            </button>
            <span style={{ fontSize: '11px', color: 'var(--web-text-light)' }}>
              Authorized company credentials required. Secured by Multi-Factor Authentication.
            </span>
          </div>
        </div>

        {/* Bottom bar */}
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
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Security Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
