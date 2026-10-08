import React from 'react';
import { Globe } from 'lucide-react';
import { useToast } from '../../context/ToastContext';
import { useLanguage } from '../../context/LanguageContext';

/**
 * LanguageToggle — 1-Click English ↔ Spanish UI Toggle (P-01 / P-11)
 * Features segmented EN | ES buttons with visible active indicator,
 * hover states, and keyboard accessibility.
 */
export const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const { addToast } = useToast();

  const handleSelectLang = (newLang) => {
    if (newLang === language) return;
    setLanguage(newLang);
    addToast({
      title: newLang === 'ES' ? 'Idioma Cambiado' : 'Language Updated',
      message: newLang === 'ES' ? 'Plataforma cambiada a Español (ES).' : 'Platform switched to English (EN).',
      type: 'info',
    });
  };

  return (
    <div
      className="inline-flex items-center p-0.5 rounded-lg border text-xs select-none"
      style={{
        backgroundColor: 'var(--surface-secondary, #f8fafc)',
        borderColor: 'var(--border, #e2e8f0)',
      }}
      role="group"
      aria-label="Language Selector"
    >
      <div className="flex items-center pl-1.5 pr-1" title="Language Switcher">
        <Globe size={13} style={{ color: '#0ea5e9' }} />
      </div>

      <button
        type="button"
        onClick={() => handleSelectLang('EN')}
        className="px-2 py-1 rounded-md transition-all cursor-pointer font-bold"
        style={{
          border: 'none',
          backgroundColor: language === 'EN' ? '#0284c7' : 'transparent',
          color: language === 'EN' ? '#ffffff' : 'var(--text-secondary, #64748b)',
          boxShadow: language === 'EN' ? '0 1px 4px rgba(2, 132, 199, 0.35)' : 'none',
          fontSize: '11px',
        }}
        title="Switch to English"
      >
        EN
      </button>

      <span style={{ color: 'var(--border, #cbd5e1)', fontSize: '10px', padding: '0 1px' }}>|</span>

      <button
        type="button"
        onClick={() => handleSelectLang('ES')}
        className="px-2 py-1 rounded-md transition-all cursor-pointer font-bold"
        style={{
          border: 'none',
          backgroundColor: language === 'ES' ? '#0284c7' : 'transparent',
          color: language === 'ES' ? '#ffffff' : 'var(--text-secondary, #64748b)',
          boxShadow: language === 'ES' ? '0 1px 4px rgba(2, 132, 199, 0.35)' : 'none',
          fontSize: '11px',
        }}
        title="Cambiar a Español"
      >
        ES
      </button>
    </div>
  );
};

export default LanguageToggle;
