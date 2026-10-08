import React, { useState, useEffect, useCallback } from 'react';
import {
  ShieldCheck,
  Users,
  Shield,
  Building2,
  Plug,
  Bell,
  History,
  Lock,
  CreditCard,
  CheckCircle2,
  ToggleRight,
  Sparkles,
  Plus,
  RefreshCw,
  Globe
} from 'lucide-react';
import {
  Breadcrumb,
  Button,
  Tabs,
  Badge,
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
  Switch,
  Input,
  Card,
  CardHeader,
  CardBody,
  Modal
} from '../../components/ui';
import { useAuth } from '../../context/AuthContext';
import { useToast } from '../../context/ToastContext';
import { SHOW_OAL } from '../../config/features';
import { SecuredEbox } from '../admin/SecuredEbox';
import tenantService from '../../services/tenantService';

export const CrmAdmin = () => {
  const { user, companyData } = useAuth();
  const { addToast } = useToast();

  const [activeAdminTab, setActiveAdminTab] = useState('subaccounts');
  const [subAccounts, setSubAccounts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Sub-account Modal
  const [isSubModalOpen, setIsSubModalOpen] = useState(false);
  const [subFormData, setSubFormData] = useState({
    name: '',
    domain: '',
    subscription: 'ACTIVE_PRO',
  });

  // Branding state
  const [branding, setBranding] = useState({
    workspaceTitle: companyData?.companyName || 'nErgy Enterprise Logistics',
    customDomain: 'crm.nergy-logistics.io',
    accentColor: '#1d4ed8',
  });

  const fetchTenantData = useCallback(async () => {
    try {
      setIsLoading(true);
      const [subs, settings] = await Promise.allSettled([
        tenantService.getSubAccounts(),
        tenantService.getSettings(),
      ]);

      if (subs.status === 'fulfilled' && Array.isArray(subs.value)) {
        setSubAccounts(subs.value);
      }
      if (settings.status === 'fulfilled' && settings.value) {
        setBranding((prev) => ({
          ...prev,
          workspaceTitle: settings.value.name || prev.workspaceTitle,
          customDomain: settings.value.domain || prev.customDomain,
        }));
      }
    } catch (err) {
      console.error('Failed to load admin tenant data:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchTenantData();
  }, [fetchTenantData]);

  const handleCreateSubAccount = async (e) => {
    e.preventDefault();
    if (!subFormData.name) {
      addToast({ title: 'Validation Error', message: 'Sub-account name is required.', type: 'error' });
      return;
    }

    try {
      const created = await tenantService.createSubAccount(subFormData);
      setSubAccounts((prev) => [created, ...prev]);
      setIsSubModalOpen(false);
      setSubFormData({ name: '', domain: '', subscription: 'ACTIVE_PRO' });
      addToast({ title: 'Sub-Account Provisioned', message: `Workspace created for ${created.name}`, type: 'success' });
    } catch (err) {
      addToast({ title: 'Error', message: err.message || 'Failed to provision sub-account.', type: 'error' });
    }
  };

  const handleSaveBranding = async (e) => {
    e?.preventDefault();
    try {
      await tenantService.updateSettings({
        name: branding.workspaceTitle,
        domain: branding.customDomain,
      });
      addToast({ title: 'Settings Saved', message: 'Workspace branding persisted in MySQL.', type: 'success' });
    } catch (err) {
      addToast({ title: 'Error', message: err.message || 'Failed to save branding.', type: 'error' });
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <Breadcrumb items={[{ label: 'CRM nErgy AI' }, { label: 'Administration' }]} />
          <div className="flex items-center gap-3 mt-1">
            <h1 className="text-2xl font-bold font-display tracking-tight text-primary flex items-center gap-2">
              System Administration & Sub-Account Provisioning
            </h1>
            <Badge variant="primary" className="bg-sky-500 text-white font-bold text-xs uppercase tracking-wider">
              Root Governance Active
            </Badge>
          </div>
          <p className="text-xs text-secondary mt-0.5">
            Multi-tenant workspace isolation, dynamic sub-account provisioning, API integrations, and root security.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" icon={RefreshCw} onClick={fetchTenantData} disabled={isLoading}>
            Refresh
          </Button>
          {activeAdminTab === 'subaccounts' && (
            <Button variant="primary" size="sm" icon={Plus} onClick={() => setIsSubModalOpen(true)}>
              Provision Sub-Account
            </Button>
          )}
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border gap-6">
        <button
          onClick={() => setActiveAdminTab('subaccounts')}
          className={`pb-3 text-sm font-semibold transition-colors relative ${
            activeAdminTab === 'subaccounts' ? 'text-sky-400 font-bold' : 'text-secondary hover:text-primary'
          }`}
        >
          Sub-Accounts & Multi-Tenant ({subAccounts.length})
          {activeAdminTab === 'subaccounts' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-t" />
          )}
        </button>
        <button
          onClick={() => setActiveAdminTab('branding')}
          className={`pb-3 text-sm font-semibold transition-colors relative ${
            activeAdminTab === 'branding' ? 'text-sky-400 font-bold' : 'text-secondary hover:text-primary'
          }`}
        >
          Branding & Custom Domain
          {activeAdminTab === 'branding' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-t" />
          )}
        </button>
        <button
          onClick={() => setActiveAdminTab('ebox')}
          className={`pb-3 text-sm font-semibold transition-colors relative ${
            activeAdminTab === 'ebox' ? 'text-sky-400 font-bold' : 'text-secondary hover:text-primary'
          }`}
        >
          Secured Communications eBox
          {activeAdminTab === 'ebox' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-t" />
          )}
        </button>
      </div>

      {/* Tab 1: Sub-Accounts & Multi-Tenant */}
      {activeAdminTab === 'subaccounts' && (
        <Card className="border shadow-sm">
          <CardHeader
            title="Provisioned Sub-Company Accounts"
            subtitle="Child organizations operating in isolated database tenants"
          />
          <CardBody className="p-0 overflow-x-auto">
            {isLoading ? (
              <div className="p-12 text-center text-xs text-secondary">Loading sub-accounts from database...</div>
            ) : subAccounts.length === 0 ? (
              <div className="p-12 text-center flex flex-col items-center justify-center">
                <Building2 className="w-12 h-12 text-slate-600 mb-3" />
                <h3 className="text-base font-bold text-primary">No Sub-Accounts Provisioned</h3>
                <p className="text-xs text-secondary max-w-sm mt-1 mb-4">
                  No child organizations have been created. Click 'Provision Sub-Account' to set up a new isolated client workspace.
                </p>
                <Button variant="primary" size="sm" icon={Plus} onClick={() => setIsSubModalOpen(true)}>
                  Provision First Sub-Account
                </Button>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell header>Organization Name</TableCell>
                    <TableCell header>Domain / CNAME</TableCell>
                    <TableCell header>Subscription Tier</TableCell>
                    <TableCell header>Users</TableCell>
                    <TableCell header>Leads</TableCell>
                    <TableCell header>Status</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {subAccounts.map((sub) => (
                    <TableRow key={sub.id}>
                      <TableCell className="font-semibold text-primary">{sub.name}</TableCell>
                      <TableCell className="text-xs text-secondary font-mono">{sub.domain || 'Auto-allocated'}</TableCell>
                      <TableCell className="text-xs text-secondary">{sub.subscription}</TableCell>
                      <TableCell className="text-xs text-secondary">{sub._count?.users || 1}</TableCell>
                      <TableCell className="text-xs text-secondary">{sub._count?.leads || 0}</TableCell>
                      <TableCell>
                        <Badge variant="success">{sub.status || 'ACTIVE'}</Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardBody>
        </Card>
      )}

      {/* Tab 2: Branding & Domain */}
      {activeAdminTab === 'branding' && (
        <Card className="border shadow-sm max-w-2xl">
          <CardHeader
            title="Company Identity & Custom Domain"
            subtitle="Configure enterprise workspace branding and white-labeling"
          />
          <CardBody className="p-6">
            <form onSubmit={handleSaveBranding} className="flex flex-col gap-4">
              <Input
                label="Workspace Organization Title"
                value={branding.workspaceTitle}
                onChange={(e) => setBranding({ ...branding, workspaceTitle: e.target.value })}
              />
              <Input
                label="Custom Subdomain / CNAME"
                placeholder="crm.yourbrand.io"
                value={branding.customDomain}
                onChange={(e) => setBranding({ ...branding, customDomain: e.target.value })}
              />
              <div className="flex justify-end mt-2">
                <Button variant="primary" type="submit">
                  Save Branding Settings
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      )}

      {/* Tab 3: Secured eBox */}
      {activeAdminTab === 'ebox' && <SecuredEbox />}

      {/* Sub-Account Modal */}
      <Modal
        isOpen={isSubModalOpen}
        onClose={() => setIsSubModalOpen(false)}
        title="Provision Sub-Company Workspace"
        size="md"
      >
        <form onSubmit={handleCreateSubAccount} className="flex flex-col gap-4">
          <Input
            label="Organization / Company Name *"
            placeholder="e.g. Pacific Coast Dealership Hub"
            value={subFormData.name}
            onChange={(e) => setSubFormData({ ...subFormData, name: e.target.value })}
            required
          />
          <Input
            label="Custom Domain / Subdomain"
            placeholder="e.g. pacific.crmnergy.io"
            value={subFormData.domain}
            onChange={(e) => setSubFormData({ ...subFormData, domain: e.target.value })}
          />
          <Input
            label="Subscription License Plan"
            value={subFormData.subscription}
            onChange={(e) => setSubFormData({ ...subFormData, subscription: e.target.value })}
          />
          <div className="flex justify-end gap-3 mt-2">
            <Button variant="outline" type="button" onClick={() => setIsSubModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Provision Workspace
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CrmAdmin;
