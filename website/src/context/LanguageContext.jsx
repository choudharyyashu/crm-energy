import React, { createContext, useContext, useState, useEffect } from 'react';

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
    'Clear all': 'Clear all',
    'Clear all notifications': 'Clear all notifications',
    'All notifications cleared.': 'All notifications cleared.',
    'All notifications marked as read.': 'All notifications marked as read.',
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
    'Territory Management & Field Optimization': 'Gestión de Territorios y Optimización de Campo',
    'ERP & Operations': 'ERP y Operaciones',
    'Bestie AI Agent': 'Agente Bestie IA',
    'AI Voice Agent': 'Agente de Voz IA',
    'AI Content Studio': 'Estudio de Contenido IA',
    'AI Video Agent': 'Agente de Video IA',
    'AI Marketing Hub': 'Centro de Marketing IA',
    'OMP Deals (Auto DMS)': 'Tratos OMP (Auto DMS)',
    'HR & Recruiting': 'RR.HH. y Contratación',
    'Customer Support': 'Soporte al Cliente',
    'Knowledge Base': 'Base de Conocimiento',
    'My Fav Apps': 'Mis Apps Favoritas',
    'Internal AI Search': 'Búsqueda Interna IA',
    'Internal Search Engine Bar': 'Barra del Motor de Búsqueda Interno',
    'Search docs, tasks, files and others with AI...': 'Buscar documentos, tareas, archivos y otros con IA...',
    'Reports Hub': 'Centro de Informes',
    'Administration': 'Administración',
    'Secured eBox (SEA)': 'eBox Seguro (SEA)',
    'Settings': 'Configuración',

    // CRM ERP Software & Website Translation
    'CRM ERP software': 'Software CRM ERP',
    'CRM ERP website': 'Sitio Web CRM ERP',
    'Instant Website Translation': 'Traducción Instantánea del Sitio Web',
    'One-click translation without plugins': 'Traducción en un clic sin plugins adicionales',
    'Fully Translatable into Spanish': 'Completamente Traducible al Español',
    'Enterprise Portal Gateway': 'Portal de Acceso Empresarial',
    'Select Your Business Role & Persona': 'Seleccione su Rol Empresarial y Persona',
    '12 Autonomous User Hubs': '12 Centros Autónomos de Usuario',
    'Sign In to Workspace': 'Iniciar Sesión en el Espacio de Trabajo',
    'Business Email': 'Correo Electrónico Corporativo',
    'Password': 'Contraseña',
    'Quick One-Click Demo Access': 'Acceso Demo Rápido en 1 Clic',
    'Sign in with Selected Role': 'Iniciar Sesión con Rol Seleccionado',
    'Super Executive Admin [ SEA ]': 'Súper Administrador Ejecutivo [ SEA ]',
    'KT software dev team': 'Equipo de Desarrollo KT',
    'Super Executive Admin': 'Súper Administrador Ejecutivo',

    // ERP Submodules
    'Projects': 'Proyectos',
    'Procurement': 'Adquisiciones y Compras',
    'Sales Orders': 'Órdenes de Venta',
    'Finance': 'Finanzas y Contabilidad',
    'Inventory': 'Inventario y Stock',
    'Supply Chain': 'Cadena de Suministro',
    'Manufacturing': 'Manufactura y Producción',
    'Reports': 'Informes Ejecutivos',

    // 12 Personas & Roles
    'Business Owners': 'Propietarios de Negocios',
    'Business Owner': 'Propietario de Negocio',
    'Content Creators': 'Creadores de Contenido',
    'Content Creator': 'Creador de Contenido',
    'Influencers': 'Embajadores de Marca',
    'Influencer': 'Embajador de Marca',
    'AI Marketing Pros': 'Profesionales de Marketing IA',
    'AI Marketing Pro': 'Profesional de Marketing IA',
    'Admin I': 'Admin I (Operaciones)',
    'Operations/Sales Admin': 'Admin de Operaciones y Ventas',
    'Operations & Sales Administrator': 'Admin de Operaciones y Ventas',
    'CRM Pros': 'Especialistas en CRM',
    'CRM Pro': 'Especialista en CRM',
    'Human Resources Director': 'Directora de Recursos Humanos',
    'HR': 'Recursos Humanos (RR.HH.)',
    'Finance & Compliance Administrator': 'Admin de Finanzas y Cumplimiento',
    'Finance/Compliance Admin': 'Admin de Finanzas y Cumplimiento',
    'Admin II': 'Admin II (Finanzas)',
    'Customer': 'Cliente',
    'Content Builders': 'Constructores de Contenido',
    'Content Builder': 'Constructor de Contenido',
    'Affiliate Partners': 'Socios Afiliados',
    'Affiliate Partner': 'Socio Afiliado',
    'Affiliate Deal Partner': 'Socios de Negocios y Afiliados',
    'Super Admin': 'Súper Administrador',
    'Master Admin': 'Administrador Maestro',
    'Borrower Account': 'Cuenta de Prestatario',
    'Lender Account': 'Cuenta de Prestamista',
    'OAL Agent': 'Agente OAL',

    // Login Portal Specifics
    'ENTERPRISE CRM • ERP • AI SUPERHOUSE': 'CRM EMPRESARIAL • ERP • SUPERESTUDIO IA',
    'Sign in to continue to your CRM workspace.': 'Inicie sesión para acceder a su espacio de trabajo CRM.',
    'Enter email address': 'Ingrese su correo electrónico',
    'Enter password': 'Ingrese su contraseña',
    'Hide password': 'Ocultar contraseña',
    'Show password': 'Mostrar contraseña',
    'Authenticated as': 'Autenticado como',
    'Organization': 'Organización',
    'Secure Access': 'Acceso Seguro',
    'Secure enterprise session • Tenant-isolated workspace': 'Sesión empresarial segura • Espacio aislado por inquilino',
    'Encrypted RBAC Security Layer Active': 'Capa de Seguridad RBAC Cifrada Activa',
    '12 Roles Configured • Click to switch persona': '12 Roles Configurados • Clic para cambiar perfil',
    'Super Admin: VISIBLE': 'Súper Admin: VISIBLE',
    'Super Admin: HIDDEN': 'Súper Admin: OCULTO',
    'VISIBLE': 'VISIBLE',
    'HIDDEN': 'OCULTO',
    'AI POWERED': 'CON IA',
    'Signing In...': 'Iniciando Sesión...',

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
    'Notifications': 'Notificaciones',
    'System Notifications': 'Notificaciones del Sistema',
    'No unread notifications': 'No hay notificaciones sin leer',
    'Mark all as read': 'Marcar todo como leído',
    'Clear all': 'Borrar todo',
    'Clear all notifications': 'Borrar todas las notificaciones',
    'All notifications cleared.': 'Todas las notificaciones han sido borradas.',
    'All notifications marked as read.': 'Todas las notificaciones marcadas como leídas.',
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

    // Public Website Navigation
    'CRM Features': 'Características CRM',
    'CRM Solutions': 'Soluciones CRM',
    'Industries': 'Industrias',
    'FAQs': 'FAQs',
    'Ask My Zunme — VA Virtual Assistant': 'Ask My Zunme — Asistente VA',
    'Ask My Zunme — VA Virtual Assistant >>': 'Ask My Zunme — Asistente VA >>',
    'SALES': 'VENTAS',
    'SALES — chat eBox': 'VENTAS — chat eBox',
    'MORE': 'MÁS',
    'Login': 'Login',
    'Create Account': 'Crear Cuenta',
    'Sign In': 'Iniciar Sesión',
    'Portal': 'Portal',
    'Sign In / Portal': 'Iniciar Sesión / Portal',
    'Enterprise Platform': 'Plataforma Empresarial',
    'CRM Features Directory (23 Modules)': 'Directorio de Funcionalidades CRM (23 Módulos)',
    'CRM Solutions Frameworks': 'Marcos de Soluciones CRM',
    'Industries Showcase (23 Sectors)': 'Muestra de Industrias (23 Sectores)',

    // Public Website Homepage
    'CRM Solutions Every Business Needs • “Make AI Your Bestie”': 'Soluciones CRM que Todo Negocio Necesita • “Haz de la IA Tu Mejor Amigo”',
    'CRM Solutions Every Business Needs': 'Soluciones CRM que Todo Negocio Necesita',
    '“Delivering the most relevant CRM ERP software for your business to thrive and honing our AAI development to effectively prepare you to scale.”': '“Entregando el software CRM ERP más relevante para que su negocio prospere y perfeccionando nuestro desarrollo de AAI para prepararlo efectivamente para escalar.”',
    'A complete operating system combining all 23 core CRM features, 4 tailored solution frameworks, and 23 industry modules with the autonomous power of the ZUNME AI Studio.': 'Un sistema operativo completo que combina las 23 características principales de CRM, 4 marcos de soluciones adaptados y 23 módulos de la industria con el poder autónomo de ZUNME AI Studio.',
    'Explore 23 Features': 'Explorar 23 Funcionalidades',
    'Enterprise Data Vault': 'Bóveda de Datos Empresarial',
    'Real-time Workflows': 'Flujos de Trabajo en Tiempo Real',
    '23 Industry Configurations': '23 Configuraciones de la Industria',
    'CRM NERGY Software Features (23 Modules)': 'Características del Software CRM NERGY (23 Módulos)',
    'Branding and Customization': 'Marca y Personalización',
    '“Make AI Your Friend”': '“Haz de la IA Tu Amigo”',
    '“Make AI Your Bestie”': '“Haz de la IA Tu Mejor Amigo”',
    'It’s Your Business, Displaying Your Brand, powered by CRM nErgy Software Customization': 'Es Su Negocio, Mostrando Su Marca, impulsado por la Personalización de Software CRM nErgy',
    'The CRM nErgy drag-and-drop feature in customizable CRM software greatly enhances usability and efficiency, enabling users to customize their systems according to their specific business processes without requiring any coding skills. This functionality is crucial for contemporary CRM solutions, rendering them more flexible and user-friendly.': 'La función de arrastrar y soltar de CRM nErgy en software CRM personalizable mejora enormemente la usabilidad y la eficiencia, permitiendo a los usuarios personalizar sus sistemas según sus procesos comerciales específicos sin necesidad de conocimientos de programación. Esta funcionalidad es crucial para las soluciones CRM contemporáneas, haciéndolas más flexibles y fáciles de usar.',
    'White Label Customization': 'Personalización Marca Blanca',
    'Contact Us': 'Contáctenos',
    'CRM Solutions (4 Solution Groups)': 'Soluciones CRM (4 Grupos de Soluciones)',
    'Strategic Business Alignment': 'Alineación Estratégica Empresarial',
    'Build & Promote Your Brand with the White Label CRM or ERP Software': 'Construya y Promocione Su Marca con el Software CRM o ERP Marca Blanca',
    'CRM nErgy White Label CRM or ERP software includes customizable branding, client portals, sales and marketing automation, project management tools and much more. These platforms help businesses create new revenue streams by reselling the CRM solution under their own brand.': 'El software CRM o ERP Marca Blanca de CRM nErgy incluye marca personalizable, portales de clientes, automatización de ventas y marketing, herramientas de gestión de proyectos y mucho más. Estas plataformas ayudan a las empresas a crear nuevas fuentes de ingresos revendiendo la solución CRM bajo su propia marca.',
    'READ MORE >> continue on the White Label Feature Page': 'LEER MÁS >> continúe en la Página de Características Marca Blanca',
    'White Label Enterprise Opportunity': 'Oportunidad Empresarial Marca Blanca',
    'Frequently Asked Questions': 'Preguntas Frecuentes',

    // Public Website Footer
    'Help Center': 'Centro de Ayuda',
    'Check It Out': 'Échale un Vistazo',
    'CRM nErgy': 'CRM nErgy',
    'Academy': 'Academia',
    'Support': 'Soporte',
    '● (Available now)': '● (Disponible ahora)',
    'Resources': 'Recursos',
    'Virtual Assistant >>': 'Asistente Virtual >>',
    'Contact Center AI': 'Centro de Contacto IA',
    'CRM nErgy Training': 'Capacitación CRM nErgy',
    'Case studies': 'Casos de Estudio',
    'Commission calculator': 'Calculadora de Comisiones',
    'Videos': 'Videos',
    'What’s White Label?': '¿Qué es Marca Blanca?',
    'What is a CRM?': '¿Qué es un CRM?',
    'What is an ERP?': '¿Qué es un ERP?',
    'What is an ERP – CRM?': '¿Qué es un ERP – CRM?',
    'CRM nErgy Events': 'Eventos CRM nErgy',
    'Reviews': 'Reseñas',
    '4 Types of CRMs': '4 Tipos de CRM',
    'AAI - Sales More': 'AAI - Más Ventas',
    'Marketing Genius': 'Genio del Marketing',
    'Generating Leads': 'Generación de Prospectos',
    'Inventory Management': 'Gestión de Inventario',
    'SM / Influencer Management': 'Gestión de Redes / Influencers',
    'Best Sales Commission': 'Mejor Comisión de Ventas',
    'Affiliate Marketing': 'Marketing de Afiliados',
    'White Label Software': 'Software Marca Blanca',
    'Features': 'Características',
    'Privacy and security': 'Privacidad y Seguridad',
    'Company': 'Compañía',
    'Products': 'Productos',
    'Referral program': 'Programa de Referidos',
    'Jobs': 'Empleos',
    'Blog': 'Blog',
    'Pricing': 'Precios',
    'Contact': 'Contacto',
    'Third Party Integration': 'Integración de Terceros',
    'API': 'API',
    'Customer & Executive Login': 'Acceso para Clientes y Ejecutivos',
    'Privacy Policy': 'Política de Privacidad',
    'Terms of Service': 'Términos de Servicio',
    'Security Architecture': 'Arquitectura de Seguridad',
    'The unified AI-driven Enterprise Operating System combining complete CRM, ERP, Accounting, Supply Chain, and ZUNME AI Studio. “Make AI Your Bestie”.': 'El Sistema Operativo Empresarial unificado impulsado por IA que combina CRM completo, ERP, Contabilidad, Cadena de Suministro y ZUNME AI Studio. “Haz de la IA Tu Mejor Amigo”.',
    'SHA-256 Vault Encryption • 99.99% Enterprise Uptime': 'Cifrado de Bóveda SHA-256 • 99.99% de Disponibilidad Empresarial',

    // Dedicated Pages
    'Business CRM Software': 'Software CRM para Negocios',
    'CRM Software for Franchise Businesses': 'Software CRM para Empresas de Franquicia',
    'CRM Software for Startups': 'Software CRM para Startups',
    'CRM Software for Small to Mid-Size Businesses': 'Software CRM para Pequeñas y Medianas Empresas',
    'Analytic Accounting ERP - CRM Features': 'Características de Contabilidad Analítica ERP - CRM',
    'The Role of CRM Software in Franchise Operations': 'El Papel del Software CRM en las Operaciones de Franquicia',
    'Key Benefits of CRM for Startups': 'Beneficios Clave del CRM para Startups',
    'Consider the following when choosing a CRM System': 'Considere lo siguiente al elegir un sistema CRM',
    'Key Functions of CRM Software': 'Funciones Clave del Software CRM',
    'Why Use CRM nErgy Analytic Accounting software?': '¿Por qué usar el software de Contabilidad Analítica de CRM nErgy?',
    'Types of Businesses CRM nErgy Analytic Accounting Software Helps': 'Tipos de Negocios que Ayuda el Software de Contabilidad Analítica de CRM nErgy',
    'Business Type': 'Tipo de Negocio',
    'How Analytical CRM Helps': 'Cómo Ayuda el CRM Analítico',
    'Back to Solutions Overview': 'Volver al Resumen de Soluciones',
    'Back to 23 Features': 'Volver a las 23 Funcionalidades',
    'Explore Dedicated Page': 'Explorar Página Dedicada',
    'Inquire in Sales eBox': 'Consultar en Sales eBox',
    'Ask My Zunme AI': 'Preguntar a My Zunme IA',
    'Let’s Get Started': 'Comencemos',
    '[ Contact Us ]': '[ Contáctenos ]',
    '[ Contact US ]': '[ Contáctenos ]',
    'Contact AI': 'Contact AI (IA de Contacto)',
    'CRM for Influencers': 'CRM para Influencers',
    'Contact AI - Call Center': 'Contact AI - Centro de Llamadas',
    'CRM Software for Influencer Management': 'Software CRM para Gestión de Influencers',
    'Benefits of Using an AI Call Center': 'Beneficios de Usar un Centro de Llamadas con IA',
    'A Comprehensive Overview of CRM Software for Influencer Management': 'Descripción Integral del Software CRM para Gestión de Influencers',
    'Automation of Routine Tasks': 'Automatización de Tareas Rutinarias',
    'Improved Call Routing': 'Enrutamiento Inteligente de Llamadas',
    'Enhanced Customer Interactions': 'Interacciones Mejoradas con Clientes',
    'Focus on Complex Issues': 'Enfoque en Problemas Complejos',
    'Relationship Management': 'Gestión de Relaciones',
    'Campaign Performance Analysis': 'Análisis del Rendimiento de Campañas',
    'Collaboration Optimization': 'Optimización de Colaboraciones',
    'Call Center Knowledge Base': 'Base de Conocimiento de Centro de Llamadas',
    'Influencer CRM Knowledge Base': 'Base de Conocimiento de CRM para Influencers',
    'Ultra-Low Call Rates': 'Tarifas de Llamada Ultrabajas',
    'Operational Cost Savings': 'Ahorro en Costos Operativos',
    'Substantially less than human agent expenses': 'Sustancialmente menor que los gastos de agentes humanos',
    'Eliminate overhead vs traditional call centers': 'Elimine costos generales vs centros de llamadas tradicionales',
    'Industry Specific FAQs': 'Preguntas Frecuentes del Sector',
    'Included Capabilities': 'Capacidades Incluidas',
    'Module Overview': 'Descripción del Módulo',
    'Drag-and-Drop Architecture': 'Arquitectura de Arrastrar y Soltar',
    'White Label Opportunity': 'Oportunidad de Marca Blanca',
    'uses CRM nErgy Software to:': 'utiliza el software CRM nErgy para:',

    // ==========================================
    // Executive Dashboard Specifics
    // ==========================================
    'Executive Command Center': 'Centro de Comando Ejecutivo',
    'Live Telemetry Active': 'Telemetría en Vivo Activa',
    'Welcome back,': 'Bienvenido de nuevo,',
    'Real-time pipeline analytics, revenue attribution & enterprise deals.': 'Analítica de embudo en tiempo real, atribución de ingresos y tratos empresariales.',
    '7 Days': '7 Días',
    '30 Days': '30 Días',
    'YTD': 'Año a la Fecha (YTD)',
    'Sync Data': 'Sincronizar Datos',
    'Syncing...': 'Sincronizando...',
    'Add Contact': 'Agregar Contacto',
    '+ Add Contact': '+ Agregar Contacto',
    'New Task': 'Nueva Tarea',
    '+ New Task': '+ Nueva Tarea',
    'TOTAL LEADS ACQUIRED': 'TOTAL DE PROSPECTOS ADQUIRIDOS',
    'QUALIFIED OPPORTUNITIES': 'OPORTUNIDADES CALIFICADAS',
    'MONTHLY REVENUE (ARR)': 'INGRESOS MENSUALES (ARR)',
    'ACTIVE ENTERPRISE CLIENTS': 'CLIENTES EMPRESARIALES ACTIVOS',
    'CONVERSION RATE': 'TASA DE CONVERSIÓN',
    'AVG DEAL CYCLE': 'CICLO PROMEDIO DE TRATOS',
    'ACTIVE TASKS': 'TAREAS ACTIVAS',
    'DATA SYNC STATUS': 'ESTADO DE SINCRONIZACIÓN',
    'No active leads': 'Sin prospectos activos',
    'No active pipeline': 'Sin embudo activo',
    'No active accounts': 'Sin cuentas activas',
    'Pipeline Volume': 'Volumen del Embudo',
    'Active Accounts': 'Cuentas Activas',
    'Lead to Opportunity': 'De Prospecto a Oportunidad',
    'From Lead to Close': 'De Prospecto a Cierre',
    '0.0 Days': '0.0 Días',
    'All Clear': 'Todo al Día',
    'Follow-ups & Action Items': 'Seguimientos y Acciones',
    'No pending tasks': 'Sin tareas pendientes',
    'Synced': 'Sincronizado',
    'Just now': 'Hace un momento',
    'Live': 'En Vivo',
    'Sales Pipeline Distribution': 'Distribución del Embudo de Ventas',
    'View Kanban': 'Ver Kanban',
    'Negotiation Stage': 'Etapa de Negociación',
    'Proposal Sent': 'Propuesta Enviada',
    'Lead Sources & Attribution': 'Fuentes de Prospectos y Atribución',
    'All Leads': 'Todos los Prospectos',
    'Website Direct Forms': 'Formularios Directos del Sitio Web',
    'Referral Partners & Direct': 'Socios de Referencia y Directos',
    'Last 7 Days (Recent Activity)': 'Últimos 7 Días (Actividad Reciente)',
    'Last 30 Days (Rolling Cycle)': 'Últimos 30 Días (Ciclo Continuo)',
    'Current Full Month (MTD)': 'Mes Completo Actual (MTD)',
    'Full Fiscal Year': 'Año Fiscal Completo',

    // ==========================================
    // Tasks & Reminders Specifics
    // ==========================================
    'Tasks & Calendar Reminders': 'Tareas y Recordatorios de Calendario',
    'TOTAL TASKS': 'TOTAL DE TAREAS',
    'PENDING TASKS': 'TAREAS PENDIENTES',
    'HIGH PRIORITY': 'ALTA PRIORIDAD',
    'COMPLETED RATE': 'TASA DE FINALIZACIÓN',
    'Action Required': 'Acción Requerida',
    'Due Soon': 'Vence Pronto',
    'Sprint Progress': 'Progreso del Sprint',
    'Calendar View': 'Vista de Calendario',
    'List View': 'Vista de Lista',
    'Create Task': 'Crear Tarea',
    '+ Create Task': '+ Crear Tarea',
    'Search tasks by title or contact...': 'Buscar tareas por título o contacto...',
    'All Priorities': 'Todas las Prioridades',
    'Today': 'Hoy',
    'Sun': 'Dom',
    'Mon': 'Lun',
    'Tue': 'Mar',
    'Wed': 'Mié',
    'Thu': 'Jue',
    'Fri': 'Vie',
    'Sat': 'Sáb',
    'Live Sync': 'Sincronización en Vivo',

    // ==========================================
    // Communications Specifics
    // ==========================================
    'Multi-Channel Customer Communications': 'Comunicaciones Omnicanal con Clientes',
    'Internal Logging Mode': 'Modo de Registro Interno',
    'Messages are logged to the CRM database. External delivery (SendGrid / Twilio) requires provider configuration in Workspace Settings.': 'Los mensajes se registran en la base de datos del CRM. La entrega externa requiere configuración en los Ajustes del Espacio.',
    '+ Compose Message': '+ Redactar Mensaje',
    'TOTAL MESSAGES': 'TOTAL DE MENSAJES',
    'EMAIL RECORDS': 'REGISTROS DE CORREO',
    'SMS RECORDS': 'REGISTROS DE SMS',
    'EXTERNAL DELIVERY': 'ENTREGA EXTERNA',
    'CRM Database Logged': 'Registrado en BD CRM',
    'Internal Log (No SMTP)': 'Registro Interno (Sin SMTP)',
    'Internal Log (No Twilio)': 'Registro Interno (Sin Twilio)',
    'Unconfigured': 'Sin Configurar',
    'Configure in Settings': 'Configurar en Ajustes',
    'Inbox & Transmissions': 'Bandeja de Entrada y Transmisiones',
    'All persisted messages in this company workspace': 'Todos los mensajes guardados en este espacio empresarial',
    'Conversation Detail': 'Detalle de la Conversación',
    'Select a conversation from the left to view message details': 'Seleccione una conversación de la izquierda para ver los detalles',
    'No conversation selected. Choose a message or compose a new one.': 'Ninguna conversación seleccionada. Elija un mensaje o redacte uno nuevo.',
    'Search recipient or content...': 'Buscar destinatario o contenido...',
    'SMS Text': 'Texto SMS',
    "No EMAIL messages found. Click 'Compose Message' to start a new communication thread.": "No se encontraron correos. Haga clic en 'Redactar Mensaje' para iniciar un nuevo hilo.",

    // ==========================================
    // Bestie AI Agent Specifics
    // ==========================================
    'Bestie — My AI Agent': 'Bestie — Mi Agente de IA',
    'Autonomous Operating Partner': 'Socio Operativo Autónomo',
    'Your 24/7 autonomous operating partner & AI agent with live speech recognition, voice synthesis, CRM lead dispatch, and task automation.': 'Su socio operativo autónomo y agente de IA 24/7 con reconocimiento de voz en vivo, síntesis de voz, despacho de prospectos y automatización de tareas.',
    'Voice: On': 'Voz: Activa',
    'Voice: Off': 'Voz: Desactivada',
    'Voice: Muted': 'Voz: Silenciada',
    'Voice Output Enabled': 'Salida de Voz Activada',
    'Voice Output Muted': 'Salida de Voz Silenciada',
    'Bestie will read responses aloud.': 'Bestie leerá las respuestas en voz alta.',
    'Bestie responses are now silent.': 'Las respuestas de Bestie ahora están silenciadas.',
    'Click to Mute Voice': 'Clic para Silenciar Voz',
    'Click to Enable Voice': 'Clic para Activar Voz',
    'Clear Chat History': 'Borrar Historial de Chat',
    'Clear Chat': 'Limpiar Chat',
    'Vault Live': 'Bóveda en Vivo',
    'Autonomous v4.0': 'Autónomo v4.0',
    'Create New Lead': 'Crear Nuevo Prospecto',
    'Executive Priorities': 'Prioridades Ejecutivas',
    'Analyze Deals': 'Analizar Tratos',
    'Automate Tasks': 'Automatizar Tareas',
    'Open Pipeline': 'Abrir Embudo',
    'ERP Inventory Audit': 'Auditoría de Inventario ERP',
    'HR Screening': 'Evaluación de RR.HH.',
    'Verified Sources:': 'Fuentes Verificadas:',
    'CRM Database': 'Base de Datos CRM',
    'ERP Module': 'Módulo ERP',
    'Analyze Sales Velocity >': 'Analizar Velocidad de Ventas >',
    'Schedule Follow-up Task >': 'Programar Tarea de Seguimiento >',
    'Stop Audio': 'Detener Audio',
    'Listen': 'Escuchar',
    'Copied!': '¡Copiado!',
    'Copy': 'Copiar',
    'Exported': 'Exportado',
    'Brief saved as Markdown.': 'Informe guardado como Markdown.',
    'Download Markdown': 'Descargar Markdown',
    'Regenerate': 'Regenerar',
    'Listening to speech...': 'Escuchando voz...',
    'Ask Bestie anything, create leads, schedule tasks, or use the mic to speak...': 'Pregunte a Bestie cualquier cosa, cree prospectos, programe tareas o use el micrófono para hablar...',
    'Stop listening': 'Detener escucha',
    'Start speaking (Web Speech)': 'Comenzar a hablar (Web Speech)',
    'Autonomous CRM AI Agent • 2-Way Voice Active': 'Agente de IA Autónomo para CRM • Voz Bidireccional Activa',
    'Press Enter ↵ or Speak into Mic • Local Storage Vault Connected': 'Presione Enter ↵ o Hable al Micrófono • Bóveda Conectada',
    'Send': 'Enviar',
    'Telemetry Status': 'Estado de Telemetría',
    'Click to open Leads Directory': 'Clic para abrir Directorio de Prospectos',
    'Click to open Qualified Deals': 'Clic para abrir Tratos Calificados',
    'Click to view Revenue Pipeline': 'Clic para ver Embudo de Ingresos',
    'Click to view Enterprise Contacts': 'Clic para ver Contactos Empresariales',
    'Click to view all tasks & reminders': 'Clic para ver todas las tareas y recordatorios',
    'Deal Velocity': 'Velocidad de Tratos',
    'Stage Details': 'Detalles de Etapa',
    'Qualified Opportunities': 'Oportunidades Calificadas',
    'New Leads Discovery': 'Descubrimiento de Nuevos Prospectos',
    'Deals': 'Tratos',
    'Win Rate': 'Tasa de Ganancia',
    'Terms and SLA agreements in active negotiation review': 'Términos y acuerdos SLA en revisión activa de negociación',
    'Formal commercial quote submitted to decision makers': 'Cotización comercial formal enviada a los tomadores de decisiones',
    'Technical scope validated, budget confirmed': 'Alcance técnico validado, presupuesto confirmado',
    'Initial architectural consultation and capability fit': 'Consulta arquitectónica inicial y ajuste de capacidades',
    'Total:': 'Total:',
    'Weighted:': 'Ponderado:',
    'leads': 'prospectos',
    'contacts': 'contactos',
    'Active': 'Activo',
    'Verified': 'Verificado',
    'Synchronized': 'Sincronizado',
    'Total Leads:': 'Total de Prospectos:',
    'View All Sources': 'Ver Todas las Fuentes',
    'Live CRM Activity Audit': 'Auditoría de Actividad CRM en Vivo',
    'View All': 'Ver Todo',
    'All': 'Todo',
    'Pending': 'Pendiente',
    'Completed': 'Completada',
    'Upcoming Priority Tasks': 'Próximas Tareas Prioritarias',
    'View All Tasks': 'Ver Todas las Tareas',
    '+ Quick Add': '+ Añadir Rápido',
    'No Activity Logged': 'Sin Actividad Registrada',
    'Audit actions and CRM events will appear here in real-time.': 'Las acciones de auditoría y eventos de CRM aparecerán aquí en tiempo real.',
    'Previous Month': 'Mes Anterior',
    'Next Month': 'Mes Siguiente',
    "No messages found. Click 'Compose Message' to start a new communication thread.": "No se encontraron mensajes. Haga clic en 'Redactar Mensaje' para iniciar un nuevo hilo.",
    'Recipient:': 'Destinatario:',

    // ==========================================
    // Sales Pipeline & Deals Specifics
    // ==========================================
    'Commercial Sales Pipeline': 'Embudo de Ventas Comercial',
    'Add New Opportunity': 'Agregar Nueva Oportunidad',
    '+ Add New Opportunity': '+ Agregar Nueva Oportunidad',
    'TOTAL PIPELINE VALUE': 'VALOR TOTAL DEL EMBUDO',
    'across 8 stages': 'en 8 etapas',
    'WEIGHTED VALUE': 'VALOR PONDERADO',
    'prob. adj.': 'ajust. por prob.',
    'TOTAL ACTIVE DEALS': 'TRATOS ACTIVOS TOTALES',
    'this month': 'este mes',
    'WIN CONVERSION': 'CONVERSIÓN DE GANANCIA',
    'closed deals': 'tratos cerrados',
    'Stage:': 'Etapa:',
    'New Lead': 'Nuevo Prospecto',
    'Contacted': 'Contactado',
    'Qualified': 'Calificado',
    'Opportunity': 'Oportunidad',
    'Proposal': 'Propuesta',
    'Negotiation': 'Negociación',
    'Won': 'Ganado',
    'Lost': 'Perdido',
    'No deals in': 'Sin tratos en',
    'No deals in New Lead': 'Sin tratos en Nuevo Prospecto',
    'No deals in Contacted': 'Sin tratos en Contactado',
    'No deals in Qualified': 'Sin tratos en Calificado',
    'No deals in Opportunity': 'Sin tratos en Oportunidad',
    'No deals in Proposal': 'Sin tratos en Propuesta',
    'No deals in Negotiation': 'Sin tratos en Negociación',
    'No deals in Won': 'Sin tratos en Ganado',
    'No deals in Lost': 'Sin tratos en Perdido',
    'Opportunity Title': 'Título de la Oportunidad',
    'e.g. Enterprise Fleet Expansion': 'ej. Expansión de Flota Empresarial',
    'Customer / Account': 'Cliente / Cuenta',
    'e.g. Apex Global Technologies': 'ej. Apex Global Technologies',
    'Estimated Deal Value ($)': 'Valor Estimado del Trato ($)',
    'Target Stage': 'Etapa Objetivo',
    'Create Opportunity': 'Crear Oportunidad',

    // ==========================================
    // Leads Directory Specifics
    // ==========================================
    '+ Add New Lead': '+ Agregar Nuevo Prospecto',
    'Search leads by contact or company name...': 'Buscar prospectos por contacto o empresa...',
    'Lead ID': 'ID de Prospecto',
    'Contact Name': 'Nombre de Contacto',
    'Company Entity': 'Entidad Empresarial',
    'Estimated Value': 'Valor Estimado',
    'Lead Score': 'Puntaje de Prospecto',
    'Actions': 'Acciones',
    'New': 'Nuevo',
    '+ Add New Contact': '+ Agregar Nuevo Contacto',
    'Search contacts by name, company, email...': 'Buscar contactos por nombre, empresa, correo...',
    // Pipeline Card Actions & ERP Handoff
    'Prev': 'Ant',
    'Next': 'Sig',
    'Move Stage': 'Cambiar Etapa',
    'Owner:': 'Responsable:',
    'Prob': 'Prob',
    'Create ERP Project': 'Crear Proyecto ERP',
    'Project Active': 'Proyecto Activo',
    'ERP Operations:': 'Operaciones ERP:',
    'Create ERP Project & Sales Order': 'Crear Proyecto y Orden de Venta ERP',
    'Skip for Now': 'Omitir por Ahora',
    'Generate ERP Project & Order': 'Generar Proyecto y Orden ERP',
    'Opportunity:': 'Oportunidad:',
    'Client Account:': 'Cuenta de Cliente:',
    'Contract Value / Budget:': 'Valor de Contrato / Presupuesto:',
    'Assigned Delivery Manager:': 'Gerente de Entrega Asignado:',
    'Automated ERP Delivery Workflow:': 'Flujo de Trabajo de Entrega ERP Automatizado:',
    'Total Revenue': 'Ingresos Totales',
    'Total MRR Revenue': 'Ingresos MRR Totales',
    'Sales Volume': 'Volumen de Ventas',
    'Lead Conversion': 'Conversión de Prospectos',
    'Customer LTV': 'LTV de Clientes',

    // ==========================================
    // Territory Management & Field Optimization
    // ==========================================
    'Google Maps Powered': 'Potenciado por Google Maps',
    'Geographic sales mapping, route optimization, field rep scheduling, and prospect demographics intelligence.': 'Mapeo geográfico de ventas, optimización de rutas, programación de representantes y demografía de prospectos.',
    'Offline Field Mode': 'Modo de Campo Desconectado',
    'Disable Offline': 'Desactivar Modo Desconectado',
    'Define New Territory': 'Definir Nuevo Territorio',
    '+ Define New Territory': '+ Definir Nuevo Territorio',
    'Active Operating Zones': 'Zonas Operativas Activas',
    '4 Regional Corridors': '4 Corredores Regionales',
    'Prospect Count Tracked': 'Conteo de Prospectos Rastreados',
    '622 Accounts': '622 Cuentas',
    'Demographics Synced': 'Demografía Sincronizada',
    'Travel Time Saved': 'Tiempo de Viaje Ahorrado',
    '15.2 hrs/wk': '15.2 hrs/sem',
    'Route Optimization': 'Optimización de Rutas',
    'Automated Routing': 'Enrutamiento Automatizado',
    '100% Active': '100% Activo',
    'Zero Overlap': 'Cero Superposición',
    'Google Maps Geographic Visualizer & Routes': 'Visualizador Geográfico y Rutas de Google Maps',
    'Summary Table of Benefits & CRM Features': 'Tabla Resumen de Beneficios y Funciones CRM',
    'Defined Territories Database': 'Base de Datos de Territorios Definidos',
    'Google Maps in Territory Management': 'Google Maps en la Gestión de Territorios',
    'Geographic Visualization': 'Visualización Geográfica',
    'Offline Access': 'Acceso Sin Conexión',
    'Assigned Field Representative': 'Representante de Campo Asignado',
    'ASSIGNED FIELD REPRESENTATIVE': 'REPRESENTANTE DE CAMPO ASIGNADO',
    'Active Prospect Count:': 'Conteo de Prospectos Activos:',
    'Avg Deal Value:': 'Valor Promedio del Trato:',
    'Revenue Quota:': 'Cuota de Ingresos:',
    'DEMOGRAPHIC & MARKET PROFILE': 'PERFIL DEMOGRÁFICO Y DE MERCADO',
    'West Coast Metro': 'Metro Costa Oeste',
    'Northeast Corridor': 'Corredor Noreste',
    'Central Midwest Belt': 'Cinturón Medio Oeste Central',
    'Southern Sunbelt Hub': 'Centro Cinturón del Sol Sur',
    'Map': 'Mapa',
    'Satellite': 'Satélite',
    'Prospects: ON': 'Prospectos: ACTIVADO',
    'Prospects: OFF': 'Prospectos: DESACTIVADO',
    'Google Maps is used in territory management to help visualize geographic areas for sales representatives, allowing for route optimization and efficient scheduling. While standard maps lack advanced CRM layers, CRM nErgy directly bridges this with prospect counts and demographic data, delivering an all-in-one spatial field operations suite.': 'Google Maps se utiliza en la gestión de territorios para visualizar áreas geográficas para representantes de ventas, permitiendo la optimización de rutas y una programación eficiente. CRM nErgy complementa esto con conteos de prospectos y datos demográficos para operaciones de campo completas.',
    'Helps sales reps find the best routes to their appointments, saving time and reducing travel costs. Live turn-by-turn re-routing minimizes traffic bottlenecks.': 'Ayuda a los representantes a encontrar las mejores rutas para sus citas, ahorrando tiempo y costos de viaje. El reenrutamiento paso a paso minimiza congestiones de tráfico.',
    'Provides a clear view of the areas assigned to each sales rep, aiding in planning, balanced quota distribution, and seamless team organization.': 'Proporciona una vista clara de las áreas asignadas a cada representante de ventas, facilitando la planificación, distribución equilibrada de cuotas y organización del equipo.',
    'Allows users to access maps without an internet connection, ensuring sales reps in remote or low-connectivity field areas never lose appointment details.': 'Permite acceder a mapas sin conexión a internet, asegurando que los representantes en áreas remotas o de baja conectividad nunca pierdan detalles de sus citas.',
    'Demographic & Market Profile': 'Perfil Demográfico y de Mercado',
    'Coverage': 'Cobertura',
    'Optimized Route:': 'Ruta Optimizada:',
    'saved': 'ahorrado',
    'Offline Cache Active (Local GIS)': 'Caché Desconectada Activa (GIS Local)',
    'Live Telemetry Connected': 'Telemetría en Vivo Conectada',
    'Accounts': 'Cuentas',
    'accounts': 'cuentas',

    // ==========================================
    // ERP & Operations Management
    // ==========================================
    'ERP & Operations Management': 'Gestión de ERP y Operaciones',
    'New ERP Project': 'Nuevo Proyecto ERP',
    '+ New ERP Project': '+ Nuevo Proyecto ERP',
    'Active Projects': 'Proyectos Activos',
    '3 Milestones Pending': '3 Hitos Pendientes',
    'Purchase Orders': 'Órdenes de Compra',
    '$127,500 Total': '$127,500 Total',
    'Stock SKU Items': 'Artículos SKU de Stock',
    '1 Low Stock Alert': '1 Alerta de Stock Bajo',
    'Operational Expenses': 'Gastos Operativos',
    'On Budget': 'En Presupuesto',
    'ERP Enterprise Sub-Modules': 'Submódulos Empresariales ERP',
    'ERP ENTERPRISE SUB-MODULES': 'SUBMÓDULOS EMPRESARIALES ERP',
    '8 Integrated Suites': '8 Suites Integradas',
    'Projects List': 'Lista de Proyectos',
    'Milestones & Delivery': 'Hitos y Entregas',
    'Vendor POs & Invoices': 'Órdenes de Compra y Facturas de Proveedores',
    'Inventory SKU': 'SKU de Inventario',
    'Stock & Warehouses': 'Stock y Almacenes',
    'Finance Ledgers': 'Libros Contables',
    'AP/AR & Expenses': 'Cuentas por Cobrar/Pagar y Gastos',
    'Logistics & Freight': 'Logística y Flete',
    'Assembly & Production': 'Ensamblaje y Producción',
    'Commercial Fulfillment': 'Cumplimiento Comercial',
    'ERP Reports': 'Informes ERP',
    'Operational Analytics': 'Analítica Operativa',
    'Fleet Live': 'Flota en Vivo',
    '4 Workstations': '4 Estaciones de Trabajo',
    '12 Orders': '12 Órdenes',
    'Audit Hub': 'Centro de Auditoría',
    '0 Active': '0 Activos',
    '0 Orders': '0 Órdenes',
    '0 SKUs': '0 SKUs',
    '1 Active': '1 Activo',
    'Active ERP Project Milestones': 'Hitos Activos de Proyectos ERP',
    'Live delivery progress, budget burn rates, and executive targets': 'Progreso de entrega en vivo, tasa de consumo de presupuesto y metas ejecutivas',
    'View All Projects': 'Ver Todos los Proyectos',

    // ==========================================
    // Bestie AI Chat & Actions
    // ==========================================
    'Analyze Sales Velocity': 'Analizar Velocidad de Ventas',
    'Schedule Follow-up Task': 'Programar Tarea de Seguimiento',
    'Hello! I am Bestie': '¡Hola! Soy Bestie',
    "Hello! I'm Bestie, your CRM nErgy AI Autonomous Operating Partner. I'm connected to your enterprise platform to help you analyze deals, qualify leads, manage tasks, and optimize sales and ERP workflows.": "¡Hola! Soy Bestie, su Socio Operativo Autónomo de CRM nErgy IA. Estoy conectado a su plataforma empresarial para ayudarle a analizar acuerdos, calificar prospectos, administrar tareas y optimizar flujos de trabajo de ventas y ERP.",
    "Hello! I'm **Bestie**, your CRM nErgy AI Autonomous Operating Partner. I'm connected to your enterprise platform to help you analyze deals, qualify leads, manage tasks, and optimize sales and ERP workflows.\n\nHow can I assist your business operations today?": "¡Hola! Soy **Bestie**, su Socio Operativo Autónomo de CRM nErgy IA. Estoy conectado a su plataforma empresarial para ayudarle a analizar acuerdos, calificar prospectos, administrar tareas y optimizar flujos de trabajo de ventas y ERP.\n\n¿Cómo puedo asistir a sus operaciones comerciales hoy?",
    'How can I assist your business operations today?': '¿Cómo puedo asistir a sus operaciones comerciales hoy?',

    // ==========================================
    // AI Voice Agent
    // ==========================================
    'Voice Pipeline Standby': 'Tubería de Voz en Espera',
    'Pipeline Streaming Live': 'Tubería Transmitiendo en Vivo',
    'Real-time conversational voice system powered by Speech-to-Text (STT) ➔ Large Language Model (LLM) ➔ Text-to-Speech (TTS) streaming architecture.': 'Sistema de voz conversacional en tiempo real impulsado por arquitectura de transmisión de Voz a Texto (STT) ➔ Modelo de Lenguaje (LLM) ➔ Texto a Voz (TTS).',
    'End-to-End Latency': 'Latencia de Extremo a Extremo',
    'Streaming Pipeline': 'Tubería de Transmisión',
    'Disconnect Voice': 'Desconectar Voz',
    'Start Live Voice Call': 'Iniciar Llamada de Voz en Vivo',
    'Live Voice Terminal & Studio': 'Terminal y Estudio de Voz en Vivo',
    'Streaming Pipeline Architecture': 'Arquitectura de Tubería de Transmisión',
    'Pipeline Components & Steps Guide': 'Guía de Componentes y Pasos de la Tubería',
    'PIPELINE IDLE (READY)': 'TUBERÍA EN ESPERA (LISTA)',
    'Press "Start Live Voice Call" or choose a prompt below': 'Presione "Iniciar Llamada de Voz en Vivo" o elija una indicación abajo',
    'Mute Speaker': 'Silenciar Altavoz',
    'Unmute Speaker': 'Activar Altavoz',
    'Start Call': 'Iniciar Llamada',
    'QUICK SPEECH PROMPTS (CLICK TO TEST PIPELINE):': 'INDICACIONES RÁPIDAS DE VOZ (CLIC PARA PROBAR TUBERÍA):',
    'Show me the high-priority enterprise deals closing this month': 'Muéstrame los acuerdos empresariales de alta prioridad que cierran este mes',
    'Summarize inbound leads and callback requests': 'Resume los prospectos entrantes y las solicitudes de devolución de llamada',
    'Verify our Secured Communications eBox hotline with KT team': 'Verifica nuestra línea directa de eBox de Comunicaciones Seguras con el equipo de KT',
    'What is our streaming STT to TTS pipeline latency?': '¿Cuál es la latencia de nuestra canalización de STT a TTS en transmisión?',
    'Streaming Dialogue Transcript': 'Transcripción del Diálogo en Transmisión',
    'Real-time STT conversions & TTS responses': 'Conversiones STT y respuestas TTS en tiempo real',
    'Hello! I am your CRM nErgy AI Voice Agent. I am connected via a live STT → LLM → TTS streaming pipeline. How can I assist you with your leads, pipeline, or operations today?': '¡Hola! Soy su Agente de Voz CRM nErgy IA. Estoy conectado a través de una canalización en vivo de STT → LLM → TTS. ¿Cómo puedo ayudarle con sus prospectos, embudo u operaciones hoy?',
    'Can you show me the high-priority enterprise deals closing this month?': '¿Puede mostrarme los acuerdos empresariales de alta prioridad que cierran este mes?',
    'You have 4 enterprise deals in closing stage totaling $840,000, led by Apex Energy Solutions and Global Logistics Corp.': 'Tiene 4 acuerdos empresariales en etapa de cierre por un total de $840,000, liderados por Apex Energy Solutions y Global Logistics Corp.',

    // ==========================================
    // AI Content Studio & Production Labs
    // ==========================================
    'AI Content Studio & Production Labs': 'Estudio de Contenido IA y Laboratorios de Producción',
    'Multi-modal generative engine: commercial cinema creation, talking avatars, neural voice synthesis, and sonic brand soundscapes.': 'Motor generativo multimodal: creación de cine comercial, avatares parlantes, síntesis de voz neuronal y paisajes sonoros de marca.',
    'AI SuperHouse • Multi-Modal Studio Engine': 'SuperCasa de IA • Motor de Estudio Multimodal',
    'Open Bestie AI': 'Abrir Bestie IA',
    'Launch 4-Step Video Agent': 'Lanzar Agente de Video en 4 Pasos',
    'TOTAL STUDIOS': 'ESTUDIOS TOTALES',
    '15 Specialized Studios': '15 Estudios Especializados',
    '1.4s Tensor-Core Latency': 'Latencia Tensor-Core de 1.4s',
    'ElevenLabs Neural Audio': 'Audio Neuronal ElevenLabs',
    'UltraCinema v4.2': 'UltraCinema v4.2',
    '15 Sub-Studios': '15 Sub-Estudios',
    'All Neural Cores Online': 'Todos los Núcleos Neuronales en Línea',
    'AUDIO / VIDEO RENDERS': 'RENDERIZADOS DE AUDIO / VIDEO',
    '1,840 Assets': '1,840 Recursos',
    '+24% output this week': '+24% producción esta semana',
    'AVG RENDER LATENCY': 'LATENCIA PROMEDIO DE RENDER',
    '1.4 Seconds': '1.4 Segundos',
    'Real-time Tensor Core GPU': 'GPU Tensor Core en Tiempo Real',
    'STORAGE VAULT': 'BÓVEDA DE ALMACENAMIENTO',
    'SELECT PRODUCTION STUDIO': 'SELECCIONAR ESTUDIO DE PRODUCCIÓN',
    '15 AVAILABLE': '15 DISPONIBLES',
    'AVAILABLE': 'DISPONIBLES',
    'Available': 'Disponibles',
    'Click any studio node to mount workspace': 'Haga clic en cualquier nodo de estudio para montar el espacio',
    'Video Production': 'Producción de Video',
    'Voice & Speech': 'Voz y Habla',
    'Audio & Music': 'Audio y Música',
    'Image Studio': 'Estudio de Imágenes',
    'Avatar & 3D': 'Avatar y 3D',
    'Branding': 'Marca',
    'Automations': 'Automatizaciones',
    'Model Training': 'Entrenamiento de Modelos',
    'Active Studio': 'Estudio Activo',
    'Launch Studio': 'Iniciar Estudio',
  },
};

// Global WeakMaps to preserve original English content and placeholders
const originalTextMap = new WeakMap();
const originalPlaceholderMap = new WeakMap();

function walkDOM(node, isES, dict) {
  if (!node) return;
  if (node.nodeType === Node.TEXT_NODE) {
    const text = node.nodeValue;
    if (!text || !text.trim()) return;

    if (!originalTextMap.has(node)) {
      originalTextMap.set(node, text);
    }
    const orig = originalTextMap.get(node);

    if (isES) {
      const trimmed = orig.trim();
      if (dict[trimmed]) {
        const leading = orig.match(/^\s*/)[0];
        const trailing = orig.match(/\s*$/)[0];
        const translated = leading + dict[trimmed] + trailing;
        if (node.nodeValue !== translated) {
          node.nodeValue = translated;
        }
      }
    } else {
      if (node.nodeValue !== orig) {
        node.nodeValue = orig;
      }
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    const tag = node.tagName.toLowerCase();
    if (['script', 'style', 'code', 'pre', 'svg'].includes(tag)) return;

    // Placeholders
    if (node.placeholder) {
      if (!originalPlaceholderMap.has(node)) {
        originalPlaceholderMap.set(node, node.placeholder);
      }
      const orig = originalPlaceholderMap.get(node);
      if (isES) {
        const trimmed = orig.trim();
        if (dict[trimmed]) {
          node.placeholder = dict[trimmed];
        }
      } else {
        node.placeholder = orig;
      }
    }

    // Children
    const children = node.childNodes;
    for (let i = 0; i < children.length; i++) {
      walkDOM(children[i], isES, dict);
    }
  }
}

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

  // Instant In-Page DOM Translation Engine (Works across entire CRM and Website)
  useEffect(() => {
    if (typeof document === 'undefined') return;

    const dict = DICTIONARY.ES;
    const isES = language === 'ES';

    // 1. Initial document scan & translation
    walkDOM(document.body, isES, dict);

    // 2. MutationObserver for dynamic route changes, tabs, and modals
    let isTranslating = false;
    const observer = new MutationObserver((mutations) => {
      if (isTranslating) return;
      isTranslating = true;
      try {
        for (const m of mutations) {
          if (m.type === 'childList') {
            m.addedNodes.forEach((n) => walkDOM(n, isES, dict));
          } else if (m.type === 'characterData') {
            walkDOM(m.target, isES, dict);
          }
        }
      } finally {
        isTranslating = false;
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    return {
      language: 'EN',
      setLanguage: () => {},
      t: (key, fallback) => (DICTIONARY.EN && DICTIONARY.EN[key]) || fallback || key,
    };
  }
  return context;
};

export default LanguageContext;

