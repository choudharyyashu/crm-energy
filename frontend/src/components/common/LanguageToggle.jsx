import React from 'react';
import { Globe } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { useLanguage } from '../../context/LanguageContext';

/**
 * LanguageToggle — 1-Click English ↔ Spanish UI Toggle
 * Instant Website & CRM ERP Translation (No external plugins required)
 */
export const LanguageToggle = ({ variant = 'default' }) => {
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
        backgroundColor: 'var(--web-surface-subtle, var(--surface-secondary, rgba(15, 23, 42, 0.6)))',
        borderColor: 'var(--web-border, var(--border, rgba(148, 163, 184, 0.2)))',
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
          backgroundColor: language === 'EN' ? '#0ea5e9' : 'transparent',
          color: language === 'EN' ? '#ffffff' : 'var(--web-text-muted, var(--text-secondary, #94a3b8))',
          boxShadow: language === 'EN' ? '0 1px 6px rgba(14, 165, 233, 0.4)' : 'none',
          fontSize: '11px',
        }}
        title="View in English"
      >
        <span>🇺🇸</span>
        <span>EN</span>
      </button>

      <span style={{ color: 'var(--web-border, var(--border, rgba(148, 163, 184, 0.3)))', fontSize: '10px', padding: '0 1px' }}>|</span>

      <button
        type="button"
        onClick={() => handleSelectLang('ES')}
        className="px-2.5 py-1 rounded-md transition-all cursor-pointer font-bold flex items-center gap-1"
        style={{
          border: 'none',
          backgroundColor: language === 'ES' ? '#0ea5e9' : 'transparent',
          color: language === 'ES' ? '#ffffff' : 'var(--web-text-muted, var(--text-secondary, #94a3b8))',
          boxShadow: language === 'ES' ? '0 1px 6px rgba(14, 165, 233, 0.4)' : 'none',
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
