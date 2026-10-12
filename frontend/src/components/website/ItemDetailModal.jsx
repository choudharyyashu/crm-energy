import React from 'react';
import { X, Sparkles, MessageSquare, CheckCircle2, ArrowRight } from 'lucide-react';

export const ItemDetailModal = ({ item, isOpen, onClose, onOpenSales, onOpenZunme }) => {
  if (!isOpen || !item) return null;

  const Icon = item.icon || Sparkles;

  return (
    <div className="website-modal-backdrop" onClick={onClose}>
      <div className="website-modal-window" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
        <div style={{
          padding: '1.25rem',
          borderBottom: '1px solid var(--web-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'var(--web-surface-subtle)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: '#4f46e5',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(79, 70, 229, 0.3)'
            }}>
              <Icon size={22} />
            </div>
            <div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#4f46e5', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {item.category || item.groupTitle || 'CRM nErgy Enterprise'}
              </span>
              <h3 style={{ fontSize: '17px', fontWeight: 800, color: 'var(--web-text-main)', margin: '2px 0 0 0' }}>
                {item.name}
              </h3>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--web-text-muted)',
              padding: '6px',
              borderRadius: '6px'
            }}
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <h4 style={{ fontSize: '13px', fontWeight: 700, color: 'var(--web-text-main)', marginBottom: '6px' }}>
              Module Overview
            </h4>
            <p style={{ fontSize: '13.5px', color: 'var(--web-text-muted)', lineHeight: 1.5, margin: 0 }}>
              {item.desc}
            </p>
          </div>

          <div style={{
            background: 'rgba(99, 102, 241, 0.05)',
            border: '1px solid rgba(99, 102, 241, 0.15)',
            borderRadius: '10px',
            padding: '0.9rem'
          }}>
            <h5 style={{ fontSize: '12px', fontWeight: 700, color: '#4f46e5', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={14} />
              Included Capabilities
            </h5>
            <ul style={{ margin: 0, paddingLeft: '1.2rem', fontSize: '12px', color: 'var(--web-text-muted)', lineHeight: 1.6 }}>
              <li>Autonomous AI Copilot Integration (ZUNME Engine)</li>
              <li>Real-time telemetry, audit trails, and role-based permissions</li>
              <li>High-throughput bi-directional API synchronization</li>
              <li>Turnkey deployment ready for enterprise workloads</li>
            </ul>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginTop: '0.25rem' }}>
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenSales();
              }}
              style={{
                flex: 1,
                background: '#0284c7',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 14px',
                fontSize: '12.5px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <MessageSquare size={14} />
              <span>Inquire in Sales eBox</span>
            </button>

            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenZunme();
              }}
              style={{
                flex: 1,
                background: 'linear-gradient(135deg, #4f46e5 0%, #ec4899 100%)',
                color: '#ffffff',
                border: 'none',
                borderRadius: '8px',
                padding: '10px 14px',
                fontSize: '12.5px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              <Sparkles size={14} />
              <span>Ask My Zunme AI</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
