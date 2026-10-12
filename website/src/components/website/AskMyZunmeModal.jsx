import React, { useState } from 'react';
import { Bot, Sparkles, X, Send, ArrowRight, CheckCircle2, MessageSquare, Zap, ShieldCheck } from 'lucide-react';

export const AskMyZunmeModal = ({ isOpen, onClose, onOpenSales }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'zunme',
      text: 'Hello! I am My Zunme — your VA Virtual Assistant for CRM nErgy. How can I help power your business today?'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  if (!isOpen) return null;

  const quickPrompts = [
    'What features are in CRM nErgy?',
    'How do the 4 CRM Solutions work?',
    'What is Zunme Content Warehouse?',
    'How do entrepreneurs save money with CRM nErgy?'
  ];

  const handleSend = (textToSend) => {
    const query = textToSend || inputVal;
    if (!query.trim()) return;

    const userMsg = { id: Date.now(), sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      let reply = 'CRM nErgy provides an enterprise-ready operating system unifying CRM, ERP, and AI Content Studios into one interface.';
      const lower = query.toLowerCase();

      if (lower.includes('feature')) {
        reply = 'CRM nErgy includes 23 core modules: Analytic & Financial Accounting, Contact Management, Customizable Dashboards, Inventory, Manufacturing, Lead & Sales Pipelines, and White Label CRM.';
      } else if (lower.includes('solution') || lower.includes('4 crm')) {
        reply = 'Our 4 Solution pillars are: (1) 4 Types of CRM (Analytical, Collaborative, Operational, Strategic), (2) Business CRM (Contact AI, Franchise, Influencers), (3) CRM for Entrepreneurs (Seeking Capital & Cost Saving), and (4) Third-Party Integrations.';
      } else if (lower.includes('zunme') || lower.includes('content') || lower.includes('warehouse')) {
        reply = 'Zunme is our generative AI superhouse with 1,000+ specialized templates for video ads, marketing copy, SEO blogs, and multimedia assets designed to 10x your output.';
      } else if (lower.includes('save money') || lower.includes('capital') || lower.includes('cost')) {
        reply = 'By eliminating fractured subscriptions (Salesforce, QuickBooks, Asana, Zapier) and replacing them with CRM nErgy, companies typically save 60-80% in operational software costs.';
      }

      setMessages((prev) => [
        ...prev,
        { id: Date.now() + 1, sender: 'zunme', text: reply }
      ]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="website-modal-backdrop" onClick={onClose}>
      <div className="website-modal-window" onClick={(e) => e.stopPropagation()} style={{ height: 'min(620px, 92vh)', display: 'flex', flexDirection: 'column' }}>
        {/* Header */}
        <div style={{
          padding: '1.1rem 1.25rem',
          borderBottom: '1px solid var(--web-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.08) 0%, rgba(236, 72, 153, 0.08) 100%)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(99, 102, 241, 0.35)'
            }}>
              <Bot size={20} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: 800, fontSize: '15px', color: 'var(--web-text-main)' }}>
                  Ask My Zunme — VA Virtual Assistant
                </span>
                <span style={{
                  fontSize: '9.5px',
                  fontWeight: 800,
                  background: 'rgba(99, 102, 241, 0.12)',
                  color: '#4f46e5',
                  padding: '2px 6px',
                  borderRadius: '4px'
                }}>
                  PUBLIC DEMO
                </span>
              </div>
              <span style={{ fontSize: '11.5px', color: 'var(--web-text-muted)' }}>
                Instant AI Intelligence for CRM nErgy Solutions
              </span>
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

        {/* Chat Thread */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
          {messages.map((m) => {
            const isZunme = m.sender === 'zunme';
            return (
              <div
                key={m.id}
                style={{
                  display: 'flex',
                  justifyContent: isZunme ? 'flex-start' : 'flex-end',
                  gap: '8px'
                }}
              >
                {isZunme && (
                  <div style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '8px',
                    background: '#4f46e5',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    marginTop: '2px'
                  }}>
                    <Sparkles size={14} />
                  </div>
                )}
                <div style={{
                  maxWidth: '82%',
                  padding: '0.75rem 0.95rem',
                  borderRadius: isZunme ? '4px 14px 14px 14px' : '14px 4px 14px 14px',
                  background: isZunme ? 'var(--web-surface-subtle)' : '#4f46e5',
                  color: isZunme ? 'var(--web-text-main)' : '#ffffff',
                  fontSize: '13px',
                  lineHeight: 1.45,
                  border: isZunme ? '1px solid var(--web-border)' : 'none'
                }}>
                  {m.text}
                </div>
              </div>
            );
          })}

          {isTyping && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--web-text-muted)', fontSize: '12px' }}>
              <Sparkles size={14} style={{ color: '#4f46e5' }} />
              <span>Zunme is answering...</span>
            </div>
          )}
        </div>

        {/* Quick Prompts Bar */}
        <div style={{
          padding: '0.65rem 1rem',
          borderTop: '1px solid var(--web-border)',
          backgroundColor: 'var(--web-surface-subtle)',
          display: 'flex',
          gap: '6px',
          overflowX: 'auto',
          whiteSpace: 'nowrap'
        }}>
          {quickPrompts.map((p, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSend(p)}
              style={{
                fontSize: '11px',
                fontWeight: 600,
                color: '#4f46e5',
                background: 'var(--web-surface)',
                border: '1px solid var(--web-border)',
                borderRadius: '16px',
                padding: '4px 10px',
                cursor: 'pointer'
              }}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Input Bar */}
        <div style={{
          padding: '0.85rem 1rem',
          borderTop: '1px solid var(--web-border)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask anything about CRM nErgy or Zunme..."
            style={{
              flex: 1,
              padding: '9px 12px',
              borderRadius: '8px',
              border: '1px solid var(--web-border)',
              background: 'var(--web-surface)',
              color: 'var(--web-text-main)',
              fontSize: '13px',
              outline: 'none'
            }}
          />
          <button
            type="button"
            onClick={() => handleSend()}
            style={{
              background: '#4f46e5',
              color: '#ffffff',
              border: 'none',
              borderRadius: '8px',
              padding: '9px 14px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <Send size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};
