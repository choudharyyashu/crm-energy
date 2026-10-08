import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export const DICTIONARY = {
  EN: {
    // Navigation items (CRM)
    'Dashboard': 'Dashboard',
    'Contacts': 'Contacts',
    'Leads Directory': 'Leads Directory',
    'Sales Pipeline': 'Sales Pipeline',
    'Tasks & Reminders': 'Tasks & Reminders',
    'Communication Hub': 'Communication Hub',
    'Territory Management': 'Territory Management',
    'ERP & Operations': 'ERP & Operations',
    'Bestie AI Agent': 'Bestie AI Agent',
    'AI Content Studio': 'AI Content Studio',
    'AI Video Agent': 'AI Video Agent',
    'AI Marketing Hub': 'AI Marketing Hub',
    'OMP Deals (Auto DMS)': 'OMP Deals (Auto DMS)',
    'HR & Recruiting': 'HR & Recruiting',
    'Customer Support': 'Customer Support',
    'Knowledge Base': 'Knowledge Base',
    'My Fav Apps': 'My Fav Apps',
    'Internal AI Search': 'Internal AI Search',
    'Reports Hub': 'Reports Hub',
    'Administration': 'Administration',
    'Secured eBox (SEA)': 'Secured eBox (SEA)',
    'Settings': 'Settings',

    // Navigation items (OAL)
    'Borrower Overview': 'Borrower Overview',
    'KYC Vault': 'KYC Vault',
    'Loan Application': 'Loan Application',
    'Lender Offers': 'Lender Offers',
    'AI Risk Rating': 'AI Risk Rating',
    'Messages & Agent Chat': 'Messages & Agent Chat',
    'Lender Portal': 'Lender Portal',
    'Qualified Leads Pool': 'Qualified Leads Pool',
    'Active Underwriting': 'Active Underwriting',
    'Term Sheets Manager': 'Term Sheets Manager',
    'OAL Agent Desk': 'OAL Agent Desk',
    'Borrower Queue': 'Borrower Queue',
    'Platform Admin': 'Platform Admin',
    'Lender Governance': 'Lender Governance',
    'AI Scoring Config': 'AI Scoring Config',
    'AI Support Desk': 'AI Support Desk',
    'Audit Log Feed': 'Audit Log Feed',

    // Sections
    'Core CRM': 'Core CRM',
    'Enterprise ERP': 'Enterprise ERP',
    'AI SuperHouse': 'AI SuperHouse',
    'Industry Solutions': 'Industry Solutions',
    'Business Solutions': 'Business Solutions',
    'Governance & Data': 'Governance & Data',
    'General': 'General',
    'Borrower Portal': 'Borrower Portal',
    'Institutional Lender': 'Institutional Lender',
    'OAL Licensed Agent': 'OAL Licensed Agent',
    'Master Governance': 'Master Governance',

    // Topbar & System
    'Search...': 'Search...',
    'Search': 'Search',
    'Ask Bestie': 'Ask Bestie',
    'Sign Out (CRM)': 'Sign Out (CRM)',
    'Sign Out (OAL)': 'Sign Out (OAL)',
    'Logged Out': 'Logged Out',
    'Executive Platform': 'Executive Platform',
    'Business Owner': 'Business Owner',
    'Notifications': 'Notifications',
    'System Notifications': 'System Notifications',
    'No unread notifications': 'No unread notifications',
    'Mark all as read': 'Mark all as read',
    'Account Profile': 'Account Profile',
    'Workspace Vault': 'Workspace Vault',
    'Log Out (CRM)': 'Log Out (CRM)',
    'Log Out (OAL)': 'Log Out (OAL)',
    'Switch to Dark Mode': 'Switch to Dark Mode',
    'Switch to Light Mode': 'Switch to Light Mode',

    // Common Page Headers & Actions
    'Commercial Sales Leads': 'Commercial Sales Leads',
    'Contacts & Accounts Directory': 'Contacts & Accounts Directory',
    'Add New Lead': 'Add New Lead',
    'Add New Contact': 'Add New Contact',
    'Compose Message': 'Compose Message',
    'Refresh': 'Refresh',
    'Cancel': 'Cancel',
    'Submit': 'Submit',
    'Save': 'Save',
    'Edit': 'Edit',
    'Delete': 'Delete',
    'Filter': 'Filter',
    'Export': 'Export',
    'Import': 'Import',
    'All Lead Statuses': 'All Lead Statuses',
    'All Contact Types': 'All Contact Types',
    'All Statuses': 'All Statuses',
    'Status': 'Status',
    'Action': 'Action',
  },
  ES: {
    // Navigation items (CRM)
    'Dashboard': 'Panel de Control',
    'Contacts': 'Contactos',
    'Leads Directory': 'Directorio de Prospectos',
    'Sales Pipeline': 'Embudo de Ventas',
    'Tasks & Reminders': 'Tareas y Recordatorios',
    'Communication Hub': 'Centro de Comunicaciones',
    'Territory Management': 'Gestión de Territorios',
    'ERP & Operations': 'ERP y Operaciones',
    'Bestie AI Agent': 'Agente Bestie IA',
    'AI Content Studio': 'Estudio de Contenido IA',
    'AI Video Agent': 'Agente de Video IA',
    'AI Marketing Hub': 'Centro de Marketing IA',
    'OMP Deals (Auto DMS)': 'Tratos OMP (Auto DMS)',
    'HR & Recruiting': 'RR.HH. y Contratación',
    'Customer Support': 'Soporte al Cliente',
    'Knowledge Base': 'Base de Conocimiento',
    'My Fav Apps': 'Mis Apps Favoritas',
    'Internal AI Search': 'Búsqueda Interna IA',
    'Reports Hub': 'Centro de Informes',
    'Administration': 'Administración',
    'Secured eBox (SEA)': 'eBox Seguro (SEA)',
    'Settings': 'Configuración',

    // Navigation items (OAL)
    'Borrower Overview': 'Resumen del Prestatario',
    'KYC Vault': 'Bóveda KYC',
    'Loan Application': 'Solicitud de Préstamo',
    'Lender Offers': 'Ofertas del Prestamista',
    'AI Risk Rating': 'Calificación de Riesgo IA',
    'Messages & Agent Chat': 'Mensajes y Chat de Agente',
    'Lender Portal': 'Portal de Prestamista',
    'Qualified Leads Pool': 'Fondo de Prospectos Cualificados',
    'Active Underwriting': 'Evaluación de Riesgo Activa',
    'Term Sheets Manager': 'Gestor de Hojas de Términos',
    'OAL Agent Desk': 'Mesa de Agente OAL',
    'Borrower Queue': 'Cola de Prestatarios',
    'Platform Admin': 'Admin de Plataforma',
    'Lender Governance': 'Gobernanza de Prestamistas',
    'AI Scoring Config': 'Configuración de Puntuación IA',
    'AI Support Desk': 'Mesa de Soporte IA',
    'Audit Log Feed': 'Registro de Auditoría',

    // Sections
    'Core CRM': 'CRM Principal',
    'Enterprise ERP': 'ERP Empresarial',
    'AI SuperHouse': 'SuperCasa de IA',
    'Industry Solutions': 'Soluciones Industriales',
    'Business Solutions': 'Soluciones de Negocio',
    'Governance & Data': 'Gobernanza y Datos',
    'General': 'General',
    'Borrower Portal': 'Portal del Prestatario',
    'Institutional Lender': 'Prestamista Institucional',
    'OAL Licensed Agent': 'Agente Autorizado OAL',
    'Master Governance': 'Gobernanza Maestra',

    // Topbar & System
    'Search...': 'Buscar...',
    'Search': 'Buscar',
    'Ask Bestie': 'Consultar a Bestie',
    'Sign Out (CRM)': 'Cerrar Sesión (CRM)',
    'Sign Out (OAL)': 'Cerrar Sesión (OAL)',
    'Logged Out': 'Sesión Cerrada',
    'Executive Platform': 'Plataforma Ejecutiva',
    'Business Owner': 'Propietario / Dueño',
    'Notifications': 'Notificaciones',
    'System Notifications': 'Notificaciones del Sistema',
    'No unread notifications': 'No hay notificaciones sin leer',
    'Mark all as read': 'Marcar todo como leído',
    'Account Profile': 'Perfil de Cuenta',
    'Workspace Vault': 'Bóveda del Espacio',
    'Log Out (CRM)': 'Cerrar Sesión (CRM)',
    'Log Out (OAL)': 'Cerrar Sesión (OAL)',
    'Switch to Dark Mode': 'Cambiar a Modo Oscuro',
    'Switch to Light Mode': 'Cambiar a Modo Claro',

    // Common Page Headers & Actions
    'Commercial Sales Leads': 'Prospectos de Ventas Comerciales',
    'Contacts & Accounts Directory': 'Directorio de Contactos y Cuentas',
    'Add New Lead': '+ Nuevo Prospecto',
    'Add New Contact': '+ Nuevo Contacto',
    'Compose Message': 'Redactar Mensaje',
    'Refresh': 'Actualizar',
    'Cancel': 'Cancelar',
    'Submit': 'Enviar',
    'Save': 'Guardar',
    'Edit': 'Editar',
    'Delete': 'Eliminar',
    'Filter': 'Filtrar',
    'Export': 'Exportar',
    'Import': 'Importar',
    'All Lead Statuses': 'Todos los Estados',
    'All Contact Types': 'Todos los Tipos',
    'All Statuses': 'Todos los Estados',
    'Status': 'Estado',
    'Action': 'Acción',
  },
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('crm_nergy_language') || 'EN';
  });

  const setLanguage = (newLang) => {
    const lang = newLang === 'ES' ? 'ES' : 'EN';
    setLanguageState(lang);
    localStorage.setItem('crm_nergy_language', lang);
  };

  const t = (key, fallback) => {
    if (!key) return fallback || '';
    const dict = DICTIONARY[language] || DICTIONARY.EN;
    return dict[key] || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
