import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { WebsiteLayout } from '../layouts/WebsiteLayout';
import { WebsiteHome } from '../pages/website/WebsiteHome';
import { BusinessCrmPage } from '../pages/website/BusinessCrmPage';
import { StartupsCrmPage } from '../pages/website/StartupsCrmPage';
import { MidSizeCrmPage } from '../pages/website/MidSizeCrmPage';
import { FranchiseCrmPage } from '../pages/website/FranchiseCrmPage';
import { ContactAiPage } from '../pages/website/ContactAiPage';
import { InfluencersCrmPage } from '../pages/website/InfluencersCrmPage';
import { AnalyticAccountingPage } from '../pages/website/AnalyticAccountingPage';
import { ProfessionalServicesPage } from '../pages/website/ProfessionalServicesPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<WebsiteLayout />}>
        {/* Main Landing / Homepage */}
        <Route path="/" element={<WebsiteHome />} />

        {/* Dedicated Solutions Pages */}
        <Route path="/solutions/business-crm" element={<BusinessCrmPage />} />
        <Route path="/solutions/startups" element={<StartupsCrmPage />} />
        <Route path="/solutions/midsize" element={<MidSizeCrmPage />} />
        <Route path="/solutions/franchise" element={<FranchiseCrmPage />} />
        <Route path="/solutions/contact-ai" element={<ContactAiPage />} />
        <Route path="/solutions/influencers" element={<InfluencersCrmPage />} />

        {/* Dedicated Features Pages */}
        <Route path="/features/analytic-accounting" element={<AnalyticAccountingPage />} />

        {/* Dedicated Industries Pages */}
        <Route path="/industries/professional-services" element={<ProfessionalServicesPage />} />

        {/* Catch-all redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
