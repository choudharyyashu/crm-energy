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
import { CustomizableDashboardsPage } from '../pages/website/CustomizableDashboardsPage';
import { IndustryDetailPage } from '../pages/website/IndustryDetailPage';
import { FeatureDetailPage } from '../pages/website/FeatureDetailPage';
import { FeaturesPage } from '../pages/website/FeaturesPage';
import { SolutionsPage } from '../pages/website/SolutionsPage';
import { IndustriesPage } from '../pages/website/IndustriesPage';
import { FaqsPage } from '../pages/website/FaqsPage';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<WebsiteLayout />}>
        {/* Main Landing / Homepage */}
        <Route path="/" element={<WebsiteHome />} />

        {/* Dedicated Main Section Pages */}
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/industries" element={<IndustriesPage />} />
        <Route path="/faqs" element={<FaqsPage />} />

        {/* Dedicated Solutions Pages */}
        <Route path="/solutions/business-crm" element={<BusinessCrmPage />} />
        <Route path="/solutions/startups" element={<StartupsCrmPage />} />
        <Route path="/solutions/startups-crm" element={<StartupsCrmPage />} />
        <Route path="/solutions/midsize" element={<MidSizeCrmPage />} />
        <Route path="/solutions/mid-size" element={<MidSizeCrmPage />} />
        <Route path="/solutions/mid-size-crm" element={<MidSizeCrmPage />} />
        <Route path="/solutions/franchise" element={<FranchiseCrmPage />} />
        <Route path="/solutions/franchise-crm" element={<FranchiseCrmPage />} />
        <Route path="/solutions/contact-ai" element={<ContactAiPage />} />
        <Route path="/solutions/influencers" element={<InfluencersCrmPage />} />
        <Route path="/solutions/influencers-crm" element={<InfluencersCrmPage />} />

        {/* Dedicated Features Pages */}
        <Route path="/features/analytic-accounting" element={<AnalyticAccountingPage />} />
        <Route path="/features/customizable-dashboards" element={<CustomizableDashboardsPage />} />
        <Route path="/features/dashboards" element={<CustomizableDashboardsPage />} />
        <Route path="/features/:slug" element={<FeatureDetailPage />} />

        {/* Dedicated Industries Pages */}
        <Route path="/industries/professional-services" element={<ProfessionalServicesPage />} />
        <Route path="/industries/:slug" element={<IndustryDetailPage />} />

        {/* Catch-all redirect to Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
