# CRM nErgy AI — Public Website & Landing Portal

This is the standalone frontend for the **CRM nErgy public website and landing pages**. It is completely separated from the internal CRM & ERP software application.

## Features Included
- **Homepage (`/`)**: Hero section, Features explorer, 4 Solutions groups, 23 Vertical Industries grid, Client FAQs, ZUNME AI assistant integration, and Sales Consultation modal.
- **Dedicated Solutions Pages**:
  - `/solutions/business-crm` — What is a CRM / What is an ERP / ERP-CRM
  - `/solutions/startups` — Startups CRM
  - `/solutions/midsize` — Mid-Size Business CRM
  - `/solutions/franchise` — Franchise CRM
  - `/solutions/contact-ai` — Contact AI CRM
  - `/solutions/influencers` — Influencers CRM
- **Dedicated Feature Pages**:
  - `/features/analytic-accounting` — Analytic & Financial Accounting
- **Dedicated Industry Pages**:
  - `/industries/professional-services` — Professional Service Firms (PSA, 8 business types, 6 white-label benefits, 9 FAQs)
- **Shared Modals & Utilities**:
  - Ask My Zunme (VA Virtual Assistant) Modal
  - Sales Consultation chat eBox Modal
  - Industry/Feature Detail Modal
  - 1-Click English ↔ Spanish Language Toggle
  - Dark / Light Theme Toggle

## How to Run Locally

```bash
# 1. Install dependencies (if not already installed)
npm install

# 2. Run the development server
npm run dev
```

The website dev server will start at:
👉 **http://localhost:3001**

## Configuration (`.env`)

```env
# Port for the website dev server
VITE_PORT=3001

# URL of the main CRM / ERP software app (where Login & Portal links point)
VITE_CRM_APP_URL=http://localhost:3000
```

## Production Build

```bash
npm run build
```
Build output is saved to the `dist/` directory, ready for deployment to any static hosting service (Vercel, Netlify, Cloudflare Pages, AWS S3, or Nginx).
