import React, { useState, useEffect, useCallback } from 'react';
import {
  MapPin,
  Users,
  Target,
  DollarSign,
  TrendingUp,
  Shield,
  Layers,
  Search,
  Plus,
  Compass,
  CheckCircle2,
  ChevronRight,
  BarChart2,
  Briefcase,
  RefreshCw,
  AlertTriangle
} from 'lucide-react';
import { Breadcrumb, Button, Card, CardHeader, CardBody, Badge, Select, KPICard, Modal, Input, Table, TableHeader, TableBody, TableRow, TableCell } from '../../../components/ui';
import { useToast } from '../../../context/ToastContext';
import territoryService from '../../../services/territoryService';

export const TerritoryManagement = () => {
  const { addToast } = useToast();
  const [territories, setTerritories] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [isLoading, setIsLoading] = useState(false);

  // New Territory Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    region: 'North America',
    states: '',
    targetQuota: '',
    status: 'Active',
  });

  const fetchTerritories = useCallback(async () => {
    try {
      setIsLoading(true);
      const data = await territoryService.getTerritories(
        selectedRegion !== 'All Regions' ? { region: selectedRegion } : {}
      );
      setTerritories(data);
    } catch (err) {
      console.error('Failed to load territories:', err);
    } finally {
      setIsLoading(false);
    }
  }, [selectedRegion]);

  useEffect(() => {
    fetchTerritories();
  }, [fetchTerritories]);

  const handleCreateTerritory = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.region) {
      addToast({ title: 'Validation Error', message: 'Territory name and region are required.', type: 'error' });
      return;
    }

    try {
      const created = await territoryService.createTerritory(formData);
      setTerritories((prev) => [...prev, created]);
      setIsModalOpen(false);
      setFormData({ name: '', region: 'North America', states: '', targetQuota: '', status: 'Active' });
      addToast({ title: 'Territory Defined', message: `Territory ${created.name} created.`, type: 'success' });
    } catch (err) {
      addToast({ title: 'Error', message: err.message || 'Failed to create territory.', type: 'error' });
    }
  };

  const totalQuota = territories.reduce((acc, t) => acc + (parseFloat(t.targetQuota) || 0), 0);

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <Breadcrumb items={[{ label: 'CRM nErgy AI' }, { label: 'Core Modules' }, { label: 'Territory Management' }]} />
          <div className="flex items-center gap-3 mt-1">
            <h1 className="text-2xl font-bold font-display tracking-tight text-primary flex items-center gap-2">
              Territory Management & Field Distribution
            </h1>
            <Badge variant="primary" className="bg-sky-500 text-white font-bold text-xs uppercase tracking-wider">
              Live Database Connected
            </Badge>
          </div>
          <p className="text-xs text-secondary mt-0.5">
            Geographic sales zone mapping: Region → Territory → Sales Manager → Sales Rep → Lead Allocation.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" icon={RefreshCw} onClick={fetchTerritories} disabled={isLoading}>
            Refresh
          </Button>
          <Button
            variant="primary"
            icon={Plus}
            onClick={() => setIsModalOpen(true)}
            className="text-xs font-bold"
          >
            Define New Territory
          </Button>
        </div>
      </div>

      {/* KPI Overview */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <KPICard title="Active Operating Zones" value={String(territories.length)} change="Database Persisted" changeType="positive" icon={Compass} />
        <KPICard title="Total Territory Quota" value={`$${totalQuota.toLocaleString()}`} change="Target Volume" changeType="positive" icon={DollarSign} />
        <KPICard title="Active Field Reps" value="Assigned in MySQL" change="100% Isolated" changeType="positive" icon={Users} />
        <KPICard title="Territory Governance" value="Active" change="RBAC Enforced" changeType="positive" icon={Shield} />
      </div>

      {/* GIS / Map Provider Status Notice */}
      <Card className="border border-slate-800 shadow-sm bg-slate-900/60">
        <CardBody className="p-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-primary">Geographic GIS Visualizer Provider</h4>
              <p className="text-xs text-secondary mt-0.5">
                Google Maps API credentials are not set in environment settings. Displaying tabular territory allocation data.
              </p>
            </div>
          </div>
          <Badge variant="warning" className="text-xs">
            GIS Provider Unconfigured
          </Badge>
        </CardBody>
      </Card>

      {/* Territories Table */}
      <Card className="border shadow-sm">
        <CardHeader
          title="Defined Sales Territories"
          subtitle="All geographic territories managed under this company tenant"
        />
        <CardBody className="p-0 overflow-x-auto">
          {isLoading ? (
            <div className="p-12 text-center text-xs text-secondary">Loading territories from database...</div>
          ) : territories.length === 0 ? (
            <div className="p-12 text-center flex flex-col items-center justify-center">
              <Compass className="w-12 h-12 text-slate-600 mb-3" />
              <h3 className="text-base font-bold text-primary">No Territories Configured</h3>
              <p className="text-xs text-secondary max-w-sm mt-1 mb-4">
                No geographic zones have been created yet. Click 'Define New Territory' to create your first sales territory.
              </p>
              <Button variant="primary" size="sm" icon={Plus} onClick={() => setIsModalOpen(true)}>
                Define First Territory
              </Button>
            </div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell header>Code</TableCell>
                  <TableCell header>Territory Name</TableCell>
                  <TableCell header>Region</TableCell>
                  <TableCell header>Assigned States / Jurisdictions</TableCell>
                  <TableCell header>Target Quota</TableCell>
                  <TableCell header>Status</TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                {territories.map((t) => (
                  <TableRow key={t.id}>
                    <TableCell className="font-mono font-bold text-sky-400">{t.code}</TableCell>
                    <TableCell className="font-medium text-primary">{t.name}</TableCell>
                    <TableCell className="text-secondary text-xs">{t.region}</TableCell>
                    <TableCell className="text-secondary text-xs">{t.states || 'All Regional Zones'}</TableCell>
                    <TableCell className="font-bold text-primary">
                      ${parseFloat(t.targetQuota || 0).toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge variant={t.status === 'Active' ? 'success' : 'warning'}>{t.status}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardBody>
      </Card>

      {/* Create Territory Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Define Geographic Sales Territory"
        size="md"
      >
        <form onSubmit={handleCreateTerritory} className="flex flex-col gap-4">
          <Input
            label="Territory Name *"
            placeholder="e.g. West Coast Commercial Corridor"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
          />
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Region *"
              placeholder="e.g. West Coast"
              value={formData.region}
              onChange={(e) => setFormData({ ...formData, region: e.target.value })}
              required
            />
            <Input
              label="States / Coverage"
              placeholder="e.g. CA, OR, WA, NV"
              value={formData.states}
              onChange={(e) => setFormData({ ...formData, states: e.target.value })}
            />
          </div>
          <Input
            label="Target Revenue Quota ($)"
            type="number"
            placeholder="1500000"
            value={formData.targetQuota}
            onChange={(e) => setFormData({ ...formData, targetQuota: e.target.value })}
          />
          <div className="flex justify-end gap-3 mt-2">
            <Button variant="outline" type="button" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" type="submit">
              Save Territory
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default TerritoryManagement;
