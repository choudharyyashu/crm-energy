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

export const CONFIRMED_PRODUCTION_PORTAL = 'https://crm-energy.netlify.app';
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

export function getLoginUrl() {
  const base = getPortalBaseUrl().replace(/\/+$/, '');
  return `${base}/login`;
}

export function getCrmLoginUrl() {
  const base = getPortalBaseUrl().replace(/\/+$/, '');
  return `${base}/crm/login`;
}

export function getSignupUrl() {
  const base = getPortalBaseUrl().replace(/\/+$/, '');
  return `${base}/crm/signup`;
}

export function getOalUrl() {
  const base = getPortalBaseUrl().replace(/\/+$/, '');
  return `${base}/oal`;
}
