import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Building2, Mail, Phone, Lock, AlertCircle, ArrowRight } from 'lucide-react';
import { Input, Button, Card, Stepper } from '../../components/ui';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';

export const CrmSignup = () => {
  const navigate = useNavigate();
  const { register, updateCompanyData } = useAuth();
  const { addToast } = useToast();

  const [formData, setFormData] = useState({
    companyName: '',
    legalName: '',
    businessEmail: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (field, val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: null }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.companyName.trim()) errs.companyName = 'Company name is required';
    if (!formData.legalName.trim()) errs.legalName = 'Legal company name is required';
    if (!formData.businessEmail.trim() || !formData.businessEmail.includes('@')) {
      errs.businessEmail = 'Valid business email is required';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.password || formData.password.length < 8) {
      errs.password = 'Password must be at least 8 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      errs.confirmPassword = 'Passwords do not match';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      addToast({ title: 'Validation Error', message: 'Please correct the highlighted form errors.', type: 'error' });
      return;
    }

    setIsLoading(true);

    try {
      await register({
        companyName: formData.companyName.trim(),
        name: formData.legalName.split(' ')[0] || formData.companyName.trim(),
        email: formData.businessEmail.trim(),
        password: formData.password,
        role: 'BUSINESS_OWNER',
      });

      updateCompanyData({
        companyName: formData.companyName,
        legalName: formData.legalName,
        businessEmail: formData.businessEmail,
        phone: formData.phone,
      });

      addToast({
        title: 'Company Workspace Created',
        message: 'Account provisioned for ' + formData.businessEmail,
        type: 'success',
      });
      setIsLoading(false);
      navigate('/crm/verify');
    } catch (error) {
      setIsLoading(false);
      const msg = error.message || 'Registration failed. Please try again.';
      setErrors((prev) => ({ ...prev, businessEmail: msg }));
      addToast({ title: 'Registration Failed', message: msg, type: 'error' });
    }
  };

  return (
    <div className="w-full" style={{ maxWidth: '460px', margin: '0 auto' }}>
      <style>{`
        .crm-signup-card .form-group {
          gap: 0.15rem;
        }
        .crm-signup-card .form-label {
          font-size: 0.73rem;
          font-weight: 600;
          line-height: 1.2;
        }
        .crm-signup-card .form-control {
          height: 35px;
          font-size: 0.8125rem;
          padding: 0 0.75rem;
        }
        .crm-signup-card .form-control-wrapper .input-icon-start {
          left: 0.65rem;
        }
        .crm-signup-card .form-control-has-icon-start {
          padding-left: 2.1rem;
        }
        .crm-signup-card .form-helper,
        .crm-signup-card .form-error-msg {
          font-size: 0.68rem;
          line-height: 1;
          margin-top: 0.1rem;
        }
      `}</style>
      <Card
        className="crm-signup-card"
        style={{
          width: '100%',
          boxSizing: 'border-box',
          boxShadow: 'var(--shadow-card)',
          borderRadius: '14px',
          padding: '0.85rem 1.35rem',
        }}
      >
        <div className="flex flex-col items-center text-center" style={{ marginBottom: '0.45rem' }}>
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: 'var(--radius-md)',
              backgroundColor: 'var(--primary)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 800,
              fontSize: '15px',
              fontFamily: 'var(--font-display)',
              marginBottom: '0.25rem',
            }}
          >
            nE
          </div>
          <h2 style={{ fontSize: '1.18rem', fontWeight: 800, margin: 0, marginBottom: '0.1rem', color: 'var(--text-primary)' }}>
            Create Company Account
          </h2>
          <p className="text-secondary" style={{ fontSize: '11px', margin: 0 }}>
            Step 1 of 6: Provision isolated company workspace
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col" style={{ gap: '0.35rem' }}>
          <Input
            label="Company Name"
            value={formData.companyName}
            onChange={(e) => handleChange('companyName', e.target.value)}
            startIcon={Building2}
            errorMessage={errors.companyName}
            required
          />

          <Input
            label="Legal Company Name"
            value={formData.legalName}
            onChange={(e) => handleChange('legalName', e.target.value)}
            startIcon={Building2}
            errorMessage={errors.legalName}
            required
          />

          <Input
            label="Business Email"
            type="email"
            value={formData.businessEmail}
            onChange={(e) => handleChange('businessEmail', e.target.value)}
            startIcon={Mail}
            errorMessage={errors.businessEmail}
            required
          />

          <Input
            label="Business Phone Number"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleChange('phone', e.target.value)}
            startIcon={Phone}
            errorMessage={errors.phone}
            required
          />

          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '0.45rem' }}>
            <Input
              label="Password"
              type="password"
              value={formData.password}
              onChange={(e) => handleChange('password', e.target.value)}
              startIcon={Lock}
              errorMessage={errors.password}
              helperText="Min 8 characters"
              required
            />

            <Input
              label="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={(e) => handleChange('confirmPassword', e.target.value)}
              startIcon={Lock}
              errorMessage={errors.confirmPassword}
              required
            />
          </div>

          <Button
            variant="primary"
            size="md"
            type="submit"
            isLoading={isLoading}
            icon={ArrowRight}
            iconPosition="right"
            className="w-full"
            style={{ minHeight: '36px', height: '36px', fontSize: '13px', fontWeight: 700, marginTop: '0.2rem' }}
          >
            Create Account & Verify
          </Button>
        </form>

        <div
          className="border-t border-subtle text-center text-secondary"
          style={{ marginTop: '0.45rem', paddingTop: '0.35rem', fontSize: '11.5px' }}
        >
          Already registered?{' '}
          <Link to="/crm/login" className="font-semibold text-primary">
            Sign in to workspace
          </Link>
        </div>
      </Card>
    </div>
  );
};
