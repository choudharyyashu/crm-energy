import React, { useState } from 'react';
import { UserPlus, X, ShieldCheck, CheckCircle2, Lock, Building2, Mail, Phone, User, ArrowRight, Sparkles } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const SignupModal = ({ isOpen, onClose }) => {
  const { language, t } = useLanguage();
  const isEs = language === 'ES';

  const [formData, setFormData] = useState({
    companyName: '',
    fullName: '',
    email: '',
    phone: '',
    industry: 'Professional Services',
    password: '',
    agreed: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const industriesList = [
    'Professional Services',
    'Startup Business',
    'Small to Mid-Size Business',
    'Franchise Network',
    'Influencer / Creator Agency',
    'Automotive & Dealership',
    'Healthcare & Medical',
    'Financial Services',
    'E-Commerce & Retail',
    'Education & Academics',
    'Other Industry'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.email || !formData.password) return;
    setLoading(true);

    // Simulate instant workspace provisioning
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      companyName: '',
      fullName: '',
      email: '',
      phone: '',
      industry: 'Professional Services',
      password: '',
      agreed: true
    });
  };

  const CRM_APP_URL = import.meta.env.VITE_CRM_APP_URL || 'http://localhost:3000';

  return (
    <div className="website-modal-backdrop" onClick={onClose}>
      <div className="website-modal-window" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '560px' }}>
        {/* Header */}
        <div style={{
          padding: '1.1rem 1.25rem',
          borderBottom: '1px solid var(--web-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: 'linear-gradient(135deg, rgba(2, 132, 199, 0.08) 0%, rgba(99, 102, 241, 0.08) 100%)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #0284c7 0%, #4f46e5 100%)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(2, 132, 199, 0.35)'
            }}>
              <UserPlus size={20} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ fontWeight: 800, fontSize: '15px', color: 'var(--web-text-main)' }}>
                  {isEs ? 'Crear Cuenta — Registrarse' : 'Create Account — Sign Up'}
                </span>
                <span style={{
                  fontSize: '9.5px',
                  fontWeight: 800,
                  background: 'rgba(2, 132, 199, 0.12)',
                  color: '#0284c7',
                  padding: '2px 6px',
                  borderRadius: '4px'
                }}>
                  {isEs ? 'PRUEBA DE 14 DÍAS' : '14-DAY TRIAL'}
                </span>
              </div>
              <span style={{ fontSize: '11.5px', color: 'var(--web-text-muted)' }}>
                {isEs ? 'Configure su espacio de trabajo • Sin tarjeta de crédito' : 'Set up your company workspace • No credit card required'}
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

        {/* Modal Body */}
        <div style={{ padding: '1.25rem', overflowY: 'auto', maxHeight: '76vh' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(16, 185, 129, 0.12)',
                color: '#10b981',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.25rem auto'
              }}>
                <CheckCircle2 size={32} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 800, color: 'var(--web-text-main)', margin: '0 0 6px 0' }}>
                {isEs ? '¡Registro Completado con Éxito!' : 'Workspace Created Successfully!'}
              </h3>
              <p style={{ fontSize: '13.5px', color: 'var(--web-text-muted)', lineHeight: 1.55, maxWidth: '420px', margin: '0 auto 1.5rem auto' }}>
                {isEs
                  ? `Se ha aprovisionado el entorno para ${formData.companyName || formData.email}. Puede iniciar sesión en la plataforma completa.`
                  : `Your company workspace for ${formData.companyName || formData.email} is ready. You can now access your CRM ERP platform.`}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '360px', margin: '0 auto' }}>
                <button
                  type="button"
                  onClick={() => {
                    window.location.href = `${CRM_APP_URL}/crm/login`;
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '6px',
                    padding: '11px 20px',
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                    color: '#ffffff',
                    fontSize: '13.5px',
                    fontWeight: 700,
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(2, 132, 199, 0.3)'
                  }}
                >
                  <span>{isEs ? 'Ir al Portal de Inicio de Sesión' : 'Proceed to Login Portal'}</span>
                  <ArrowRight size={15} />
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: 'var(--web-text-muted)',
                    fontSize: '12.5px',
                    cursor: 'pointer',
                    padding: '6px'
                  }}
                >
                  {isEs ? 'Registrar otra empresa' : 'Register another company'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{
                background: 'rgba(2, 132, 199, 0.05)',
                border: '1px solid rgba(2, 132, 199, 0.2)',
                borderRadius: '8px',
                padding: '0.75rem',
                fontSize: '12px',
                color: 'var(--web-text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <ShieldCheck size={16} style={{ color: '#0284c7', flexShrink: 0 }} />
                <span>
                  {isEs
                    ? 'Aprovisionamiento instantáneo de CRM, ERP y Asistente ZUNME AI con cifrado de grado bancario.'
                    : 'Instant workspace setup with complete CRM, ERP, and ZUNME AI Studio with enterprise bank-grade security.'}
                </span>
              </div>

              {/* 2 Column Fields: Company Name & Full Name */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 600, color: 'var(--web-text-main)', marginBottom: '4px' }}>
                    {isEs ? 'Nombre de la Empresa *' : 'Company / Organization Name *'}
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Building2 size={15} style={{ position: 'absolute', left: '10px', top: '10px', color: 'var(--web-text-muted)' }} />
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder={isEs ? 'Ej. Global Tech Corp' : 'e.g. Apex Global Corp'}
                      style={{
                        width: '100%',
                        padding: '8px 10px 8px 32px',
                        borderRadius: '6px',
                        border: '1px solid var(--web-border)',
                        background: 'var(--web-surface)',
                        color: 'var(--web-text-main)',
                        fontSize: '12.5px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 600, color: 'var(--web-text-main)', marginBottom: '4px' }}>
                    {isEs ? 'Nombre Completo (Admin) *' : 'Full Name (Administrator) *'}
                  </label>
                  <div style={{ position: 'relative' }}>
                    <User size={15} style={{ position: 'absolute', left: '10px', top: '10px', color: 'var(--web-text-muted)' }} />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={isEs ? 'Ej. Carlos Méndez' : 'e.g. Alexander Vance'}
                      style={{
                        width: '100%',
                        padding: '8px 10px 8px 32px',
                        borderRadius: '6px',
                        border: '1px solid var(--web-border)',
                        background: 'var(--web-surface)',
                        color: 'var(--web-text-main)',
                        fontSize: '12.5px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* 2 Column Fields: Business Email & Phone */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 600, color: 'var(--web-text-main)', marginBottom: '4px' }}>
                    {isEs ? 'Correo Electrónico Corporativo *' : 'Business Work Email *'}
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Mail size={15} style={{ position: 'absolute', left: '10px', top: '10px', color: 'var(--web-text-muted)' }} />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alexander@company.com"
                      style={{
                        width: '100%',
                        padding: '8px 10px 8px 32px',
                        borderRadius: '6px',
                        border: '1px solid var(--web-border)',
                        background: 'var(--web-surface)',
                        color: 'var(--web-text-main)',
                        fontSize: '12.5px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 600, color: 'var(--web-text-main)', marginBottom: '4px' }}>
                    {isEs ? 'Teléfono Directo' : 'Phone Number'}
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Phone size={15} style={{ position: 'absolute', left: '10px', top: '10px', color: 'var(--web-text-muted)' }} />
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 019-2834"
                      style={{
                        width: '100%',
                        padding: '8px 10px 8px 32px',
                        borderRadius: '6px',
                        border: '1px solid var(--web-border)',
                        background: 'var(--web-surface)',
                        color: 'var(--web-text-main)',
                        fontSize: '12.5px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* 2 Column Fields: Industry & Password */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 600, color: 'var(--web-text-main)', marginBottom: '4px' }}>
                    {isEs ? 'Sector / Industria' : 'Industry / Sector'}
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      borderRadius: '6px',
                      border: '1px solid var(--web-border)',
                      background: 'var(--web-surface)',
                      color: 'var(--web-text-main)',
                      fontSize: '12.5px',
                      outline: 'none',
                      boxSizing: 'border-box',
                      cursor: 'pointer'
                    }}
                  >
                    {industriesList.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '11.5px', fontWeight: 600, color: 'var(--web-text-main)', marginBottom: '4px' }}>
                    {isEs ? 'Contraseña Segura *' : 'Secure Password *'}
                  </label>
                  <div style={{ position: 'relative' }}>
                    <Lock size={15} style={{ position: 'absolute', left: '10px', top: '10px', color: 'var(--web-text-muted)' }} />
                    <input
                      type="password"
                      required
                      minLength={6}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      placeholder="••••••••••••"
                      style={{
                        width: '100%',
                        padding: '8px 10px 8px 32px',
                        borderRadius: '6px',
                        border: '1px solid var(--web-border)',
                        background: 'var(--web-surface)',
                        color: 'var(--web-text-main)',
                        fontSize: '12.5px',
                        outline: 'none',
                        boxSizing: 'border-box'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Checkbox agreement */}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginTop: '2px' }}>
                <input
                  type="checkbox"
                  id="signup-agreed"
                  checked={formData.agreed}
                  onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                  style={{ marginTop: '3px', cursor: 'pointer' }}
                />
                <label htmlFor="signup-agreed" style={{ fontSize: '11.5px', color: 'var(--web-text-muted)', lineHeight: 1.45, cursor: 'pointer' }}>
                  {isEs
                    ? 'Acepto los Términos de Servicio de CRM nErgy y la Política de Privacidad de Datos en Bóveda SHA-256.'
                    : 'I agree to the CRM nErgy Enterprise Terms of Service and SHA-256 Vault Data Protection Policy.'}
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || !formData.agreed}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  padding: '11px 20px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #0284c7 0%, #0369a1 100%)',
                  color: '#ffffff',
                  fontSize: '13.5px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: (loading || !formData.agreed) ? 'not-allowed' : 'pointer',
                  opacity: (loading || !formData.agreed) ? 0.6 : 1,
                  boxShadow: '0 4px 14px rgba(2, 132, 199, 0.35)',
                  marginTop: '0.25rem'
                }}
              >
                {loading ? (
                  <span>{isEs ? 'Creando Espacio de Trabajo...' : 'Provisioning Workspace...'}</span>
                ) : (
                  <>
                    <span>{isEs ? 'Crear Cuenta y Registrarse' : 'Complete Sign Up & Get Started'}</span>
                    <ArrowRight size={15} />
                  </>
                )}
              </button>

              {/* Bottom Login Link */}
              <div style={{ textAlign: 'center', paddingTop: '0.5rem', borderTop: '1px solid var(--web-border)' }}>
                <span style={{ fontSize: '12px', color: 'var(--web-text-muted)' }}>
                  {isEs ? '¿Ya tiene una cuenta?' : 'Already have an enterprise account?'}
                  {' '}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    window.location.href = `${CRM_APP_URL}/crm/login`;
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#0284c7',
                    fontWeight: 700,
                    fontSize: '12px',
                    cursor: 'pointer',
                    textDecoration: 'underline'
                  }}
                >
                  {isEs ? 'Iniciar Sesión' : 'Log In'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
