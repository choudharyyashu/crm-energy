/**
 * CRM nErgy Enterprise Portal Configuration
 *
 * Centralizes software application URL resolution so production visitors
 * are NEVER routed to localhost.
 *
 * Confirmed Deployments:
 * - Netlify Live Portal: https://crm-energy.netlify.app (confirmed in backend CORS & client audit)
 * - Local Dev Server: http://localhost:3000 (when developing locally)
 */

export const CONFIRMED_PRODUCTION_PORTAL = 'https://crm-energysoftware.netlify.app';
export const LOCAL_PORTAL_DEFAULT = 'http://localhost:3000';

export function getPortalBaseUrl() {
  const envUrl = import.meta.env.VITE_CRM_APP_URL;

  // Detect whether running in local browser environment
  const isLocalhost =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname === '[::1]');

  if (isLocalhost) {
    // In local development, respect env override or default to localhost:3000
    return envUrl || LOCAL_PORTAL_DEFAULT;
  }

  // In production / staging deployment:
  // If envUrl is explicitly provided and is NOT localhost, use it
  if (envUrl && !envUrl.includes('localhost') && !envUrl.includes('127.0.0.1')) {
    return envUrl;
  }

  // Otherwise fallback to the confirmed live deployment
  return CONFIRMED_PRODUCTION_PORTAL;
}

function getThemeQuery() {
  if (typeof window !== 'undefined') {
    const curTheme = localStorage.getItem('app_theme');
    if (curTheme === 'light' || curTheme === 'dark') {
      return `theme=${curTheme}`;
    }
  }
  return '';
}

export function getLoginUrl() {
  const base = getPortalBaseUrl().replace(/\/+$/, '');
  const tq = getThemeQuery();
  return tq ? `${base}/login?${tq}` : `${base}/login`;
}

export function getCrmLoginUrl() {
  const base = getPortalBaseUrl().replace(/\/+$/, '');
  const tq = getThemeQuery();
  return tq ? `${base}/crm/login?${tq}` : `${base}/crm/login`;
}

export function getSignupUrl() {
  const base = getPortalBaseUrl().replace(/\/+$/, '');
  const tq = getThemeQuery();
  return tq ? `${base}/crm/signup?${tq}` : `${base}/crm/signup`;
}

export function getOalUrl() {
  const base = getPortalBaseUrl().replace(/\/+$/, '');
  const tq = getThemeQuery();
  return tq ? `${base}/oal?${tq}` : `${base}/oal`;
}

export function getApiBaseUrl() {
  const envApi = import.meta.env.VITE_API_URL;
  if (envApi) return envApi.replace(/\/+$/, '');

  const isLocalhost =
    typeof window !== 'undefined' &&
    (window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname === '[::1]');

  if (isLocalhost) {
    return 'http://localhost:5000/api';
  }

  return 'https://crm-energy-backend-production.up.railway.app/api';
}
