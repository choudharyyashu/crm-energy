import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { useToast } from '../../context/ToastContext';
import { Globe } from 'lucide-react';

/**
 * LanguageToggle — 1-Click English ↔ Spanish UI Toggle (P-01 / P-11)
 * Works seamlessly across both the public website and internal CRM/OAL suites.
 */
export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const { addToast } = useToast();

  const handleSelectLang = (newLang) => {
    if (newLang === language) return;
    setLanguage(newLang);
    addToast({
      title: newLang === 'ES' ? '🇪🇸 Idioma Cambiado a Español' : '🇺🇸 Switched to English',
      message: newLang === 'ES' ? 'CRM ERP y el portal web ahora están en Español.' : 'CRM ERP software and website switched to English.',
      type: 'success',
    });
  };

  return (
    <div
      className="inline-flex items-center p-0.5 rounded-lg border text-xs select-none"
      style={{
        backgroundColor: 'var(--web-surface-subtle, var(--surface-secondary, #f8fafc))',
        borderColor: 'var(--web-border, var(--border, #e2e8f0))',
      }}
      role="group"
      aria-label="Instant Language Selector"
      title="Instant 1-Click Translation (No plugins required)"
    >
      <div className="flex items-center pl-1.5 pr-1 gap-1" title="Instant Website & App Translation">
        <Globe size={13} style={{ color: '#0ea5e9' }} />
      </div>

      <button
        type="button"
        onClick={() => handleSelectLang('EN')}
        className="px-2.5 py-1 rounded-md transition-all cursor-pointer font-bold flex items-center gap-1"
        style={{
          border: 'none',
          backgroundColor: language === 'EN' ? '#0284c7' : 'transparent',
          color: language === 'EN' ? '#ffffff' : 'var(--web-text-muted, var(--text-secondary, #64748b))',
          boxShadow: language === 'EN' ? '0 1px 4px rgba(2, 132, 199, 0.35)' : 'none',
          fontSize: '11px',
        }}
        title="View in English"
      >
        <span>🇺🇸</span>
        <span>EN</span>
      </button>

      <span style={{ color: 'var(--web-border, var(--border, #cbd5e1))', fontSize: '10px', padding: '0 1px' }}>|</span>

      <button
        type="button"
        onClick={() => handleSelectLang('ES')}
        className="px-2.5 py-1 rounded-md transition-all cursor-pointer font-bold flex items-center gap-1"
        style={{
          border: 'none',
          backgroundColor: language === 'ES' ? '#0284c7' : 'transparent',
          color: language === 'ES' ? '#ffffff' : 'var(--web-text-muted, var(--text-secondary, #64748b))',
          boxShadow: language === 'ES' ? '0 1px 4px rgba(2, 132, 199, 0.35)' : 'none',
          fontSize: '11px',
        }}
        title="Ver en Español (Instantáneo sin plugins)"
      >
        <span>🇪🇸</span>
        <span>ES</span>
      </button>
    </div>
  );
};

export default LanguageToggle;
