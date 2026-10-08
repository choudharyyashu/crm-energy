-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 01, 2026 at 08:36 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crm-db`
--

-- --------------------------------------------------------

--
-- Table structure for table `activities`
--

CREATE TABLE `activities` (
  `id` varchar(191) NOT NULL,
  `tenantId` varchar(191) NOT NULL,
  `userId` varchar(191) DEFAULT NULL,
  `leadId` varchar(191) DEFAULT NULL,
  `contactId` varchar(191) DEFAULT NULL,
  `dealId` varchar(191) DEFAULT NULL,
  `type` enum('NOTE_ADDED','CALL_LOGGED','EMAIL_SENT','MEETING_HELD','STAGE_CHANGED','STATUS_CHANGED','LEAD_CONVERTED','TASK_CREATED','TASK_COMPLETED') NOT NULL,
  `title` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `metadata` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`metadata`)),
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activities`
--

INSERT INTO `activities` (`id`, `tenantId`, `userId`, `leadId`, `contactId`, `dealId`, `type`, `title`, `description`, `metadata`, `createdAt`) VALUES
('cmup4xhf10005to6gqwv97xif', 'TENANT-08492', 'cmuo3wl3c0001toeory5wre6k', NULL, 'cmup4of090001toykjtqezo8d', 'cmup4of150003toyksd53cas7', 'STAGE_CHANGED', 'ERP Handoff: Project \'Acme Enterprise ERP Implementation - Operational Deployment\' & Sales Order Created', 'Generated ERP Project #cmup4xhet0001to6g4hjreyjf with budget $75000 and Sales Order #SO-359.', NULL, '2026-10-01 06:10:15.277');

-- --------------------------------------------------------

--
-- Table structure for table `contacts`
--

CREATE TABLE `contacts` (
  `id` varchar(191) NOT NULL,
  `tenantId` varchar(191) NOT NULL,
  `assignedUserId` varchar(191) DEFAULT NULL,
  `name` varchar(191) NOT NULL,
  `company` varchar(191) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `type` varchar(191) DEFAULT 'Enterprise Client',
  `title` varchar(191) DEFAULT NULL,
  `status` varchar(191) DEFAULT 'Active',
  `lastActivity` datetime(3) DEFAULT NULL,
  `totalValue` decimal(12,2) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `contacts`
--

INSERT INTO `contacts` (`id`, `tenantId`, `assignedUserId`, `name`, `company`, `email`, `phone`, `type`, `title`, `status`, `lastActivity`, `totalValue`, `createdAt`, `updatedAt`) VALUES
('cmup4of090001toykjtqezo8d', 'TENANT-08492', 'cmuo3wl3c0001toeory5wre6k', 'Acme Test Contact', 'Acme Corp', 'test@acme.com', NULL, 'Enterprise Client', NULL, 'Active', NULL, NULL, '2026-10-01 06:03:12.250', '2026-10-01 06:03:12.250');

-- --------------------------------------------------------

--
-- Table structure for table `deals`
--

CREATE TABLE `deals` (
  `id` varchar(191) NOT NULL,
  `tenantId` varchar(191) NOT NULL,
  `contactId` varchar(191) DEFAULT NULL,
  `leadId` varchar(191) DEFAULT NULL,
  `assignedUserId` varchar(191) DEFAULT NULL,
  `title` varchar(191) NOT NULL,
  `customer` varchar(191) DEFAULT NULL,
  `value` decimal(12,2) NOT NULL DEFAULT 0.00,
  `stage` enum('NEW_LEAD','CONTACTED','QUALIFIED','OPPORTUNITY','PROPOSAL','NEGOTIATION','WON','LOST') NOT NULL DEFAULT 'NEW_LEAD',
  `probability` int(11) NOT NULL DEFAULT 50,
  `expectedClose` datetime(3) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `deals`
--

INSERT INTO `deals` (`id`, `tenantId`, `contactId`, `leadId`, `assignedUserId`, `title`, `customer`, `value`, `stage`, `probability`, `expectedClose`, `description`, `createdAt`, `updatedAt`) VALUES
('cmup4of150003toyksd53cas7', 'TENANT-08492', 'cmup4of090001toykjtqezo8d', NULL, 'cmuo3wl3c0001toeory5wre6k', 'Acme Enterprise ERP Implementation', NULL, 75000.00, 'WON', 50, NULL, NULL, '2026-10-01 06:03:12.276', '2026-10-01 06:03:12.276');

-- --------------------------------------------------------

--
-- Table structure for table `erp_projects`
--

CREATE TABLE `erp_projects` (
  `id` varchar(191) NOT NULL,
  `tenantId` varchar(191) NOT NULL,
  `dealId` varchar(191) DEFAULT NULL,
  `contactId` varchar(191) DEFAULT NULL,
  `assignedUserId` varchar(191) DEFAULT NULL,
  `name` varchar(191) NOT NULL,
  `client` varchar(191) NOT NULL,
  `budget` decimal(12,2) NOT NULL DEFAULT 0.00,
  `spent` decimal(12,2) NOT NULL DEFAULT 0.00,
  `progress` int(11) NOT NULL DEFAULT 0,
  `status` varchar(191) NOT NULL DEFAULT 'In Progress',
  `manager` varchar(191) DEFAULT NULL,
  `deadline` datetime(3) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `erp_projects`
--

INSERT INTO `erp_projects` (`id`, `tenantId`, `dealId`, `contactId`, `assignedUserId`, `name`, `client`, `budget`, `spent`, `progress`, `status`, `manager`, `deadline`, `createdAt`, `updatedAt`) VALUES
('cmup4xhet0001to6g4hjreyjf', 'TENANT-08492', 'cmup4of150003toyksd53cas7', 'cmup4of090001toykjtqezo8d', 'cmuo3wl3c0001toeory5wre6k', 'Acme Enterprise ERP Implementation - Operational Deployment', 'Acme Corp', 75000.00, 0.00, 10, 'In Progress', 'Business Owner', '2026-12-30 06:10:15.265', '2026-10-01 06:10:15.269', '2026-10-01 06:10:15.269');

-- --------------------------------------------------------

--
-- Table structure for table `inventory_items`
--

CREATE TABLE `inventory_items` (
  `id` varchar(191) NOT NULL,
  `tenantId` varchar(191) NOT NULL,
  `sku` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `category` varchar(191) NOT NULL DEFAULT 'Hardware',
  `warehouse` varchar(191) NOT NULL DEFAULT 'Austin Central',
  `quantity` int(11) NOT NULL DEFAULT 0,
  `minThreshold` int(11) NOT NULL DEFAULT 50,
  `unitCost` decimal(12,2) NOT NULL DEFAULT 0.00,
  `status` varchar(191) NOT NULL DEFAULT 'Optimal',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `inventory_items`
--

INSERT INTO `inventory_items` (`id`, `tenantId`, `sku`, `name`, `category`, `warehouse`, `quantity`, `minThreshold`, `unitCost`, `status`, `createdAt`, `updatedAt`) VALUES
('cmup4zmjs0001too8inx1ffxx', 'TENANT-08492', 'SKU-SRV-5239', 'Dedicated Cloud Core v4', 'Hardware', 'Austin Central', 50, 10, 1200.00, 'Optimal', '2026-10-01 06:11:55.240', '2026-10-01 06:11:55.240');

-- --------------------------------------------------------

--
-- Table structure for table `leads`
--

CREATE TABLE `leads` (
  `id` varchar(191) NOT NULL,
  `tenantId` varchar(191) NOT NULL,
  `assignedUserId` varchar(191) DEFAULT NULL,
  `name` varchar(191) NOT NULL,
  `company` varchar(191) NOT NULL,
  `email` varchar(191) DEFAULT NULL,
  `phone` varchar(191) DEFAULT NULL,
  `source` varchar(191) DEFAULT NULL,
  `territory` varchar(191) DEFAULT NULL,
  `status` enum('NEW','CONTACTED','QUALIFIED','PROPOSAL','WON','LOST') NOT NULL DEFAULT 'NEW',
  `qualification` varchar(191) DEFAULT NULL,
  `score` int(11) NOT NULL DEFAULT 75,
  `estimatedValue` decimal(12,2) DEFAULT NULL,
  `convertedToContactId` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` varchar(191) NOT NULL,
  `tenantId` varchar(191) NOT NULL,
  `authorId` varchar(191) DEFAULT NULL,
  `leadId` varchar(191) DEFAULT NULL,
  `contactId` varchar(191) DEFAULT NULL,
  `dealId` varchar(191) DEFAULT NULL,
  `content` text NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `purchase_orders`
--

CREATE TABLE `purchase_orders` (
  `id` varchar(191) NOT NULL,
  `tenantId` varchar(191) NOT NULL,
  `poNumber` varchar(191) DEFAULT NULL,
  `vendor` varchar(191) NOT NULL,
  `items` text NOT NULL,
  `amount` decimal(12,2) NOT NULL DEFAULT 0.00,
  `status` varchar(191) NOT NULL DEFAULT 'Pending Approval',
  `eta` varchar(191) DEFAULT NULL,
  `date` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `purchase_orders`
--

INSERT INTO `purchase_orders` (`id`, `tenantId`, `poNumber`, `vendor`, `items`, `amount`, `status`, `eta`, `date`, `createdAt`, `updatedAt`) VALUES
('cmup4zmk20003too821nbh0el', 'TENANT-08492', 'PO-TEST-5248', 'Dell Technologies Enterprise', '5x Rackmount Servers 2U', 24000.00, 'Pending Approval', 'Within 10 Days', '2026-10-01 06:11:55.248', '2026-10-01 06:11:55.250', '2026-10-01 06:11:55.250');

-- --------------------------------------------------------

--
-- Table structure for table `sales_orders`
--

CREATE TABLE `sales_orders` (
  `id` varchar(191) NOT NULL,
  `tenantId` varchar(191) NOT NULL,
  `dealId` varchar(191) DEFAULT NULL,
  `contactId` varchar(191) DEFAULT NULL,
  `projectId` varchar(191) DEFAULT NULL,
  `orderNumber` varchar(191) DEFAULT NULL,
  `customer` varchar(191) NOT NULL,
  `items` text NOT NULL,
  `total` decimal(12,2) NOT NULL DEFAULT 0.00,
  `status` varchar(191) NOT NULL DEFAULT 'Processing',
  `date` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sales_orders`
--

INSERT INTO `sales_orders` (`id`, `tenantId`, `dealId`, `contactId`, `projectId`, `orderNumber`, `customer`, `items`, `total`, `status`, `date`, `createdAt`, `updatedAt`) VALUES
('cmup4xhey0003to6gwo0cnvhm', 'TENANT-08492', 'cmup4of150003toyksd53cas7', 'cmup4of090001toykjtqezo8d', 'cmup4xhet0001to6g4hjreyjf', 'SO-359', 'Acme Corp', 'Acme Enterprise ERP Implementation — Deliverables & Commercial Fulfillment Scope', 75000.00, 'Processing', '2026-10-01 06:10:15.272', '2026-10-01 06:10:15.274', '2026-10-01 06:10:15.274');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `id` varchar(191) NOT NULL,
  `tenantId` varchar(191) NOT NULL,
  `assignedUserId` varchar(191) DEFAULT NULL,
  `leadId` varchar(191) DEFAULT NULL,
  `contactId` varchar(191) DEFAULT NULL,
  `dealId` varchar(191) DEFAULT NULL,
  `title` varchar(191) NOT NULL,
  `description` text DEFAULT NULL,
  `priority` enum('LOW','MEDIUM','HIGH','URGENT') NOT NULL DEFAULT 'MEDIUM',
  `status` enum('PENDING','IN_PROGRESS','COMPLETED','CANCELLED') NOT NULL DEFAULT 'PENDING',
  `dueDate` datetime(3) DEFAULT NULL,
  `reminder` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tenants`
--

CREATE TABLE `tenants` (
  `id` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `domain` varchar(191) DEFAULT NULL,
  `subscription` varchar(191) DEFAULT 'ACTIVE',
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tenants`
--

INSERT INTO `tenants` (`id`, `name`, `domain`, `subscription`, `createdAt`, `updatedAt`) VALUES
('cmunoyqx50000tovon49iw6gx', 'Tenant B Logistics', 'tenant-b.com', 'ACTIVE', '2026-09-30 05:55:34.217', '2026-09-30 05:55:34.217'),
('TENANT-08492', 'nErgy Enterprise Logistics', 'nergy.io', 'ACTIVE', '2026-09-30 05:52:09.743', '2026-09-30 05:52:09.743');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` varchar(191) NOT NULL,
  `tenantId` varchar(191) NOT NULL,
  `name` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `passwordHash` varchar(191) NOT NULL,
  `role` enum('BUSINESS_OWNER','CUSTOMER','CONTENT_CREATOR','CONTENT_BUILDER','INFLUENCER','AFFILIATE_PARTNER','AI_MARKETING_PRO','HR','OPERATIONS_SALES_ADMIN','FINANCE_COMPLIANCE_ADMIN','CRM_PRO','SUPER_ADMIN') NOT NULL DEFAULT 'CRM_PRO',
  `isActive` tinyint(1) NOT NULL DEFAULT 1,
  `avatar` varchar(191) DEFAULT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `updatedAt` datetime(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `tenantId`, `name`, `email`, `passwordHash`, `role`, `isActive`, `avatar`, `createdAt`, `updatedAt`) VALUES
('cmuo3wl3c0001toeory5wre6k', 'TENANT-08492', 'Business Owner', 'business.owner@nergy.io', '$2b$10$6NZnagCPFaHjKOfMDVqDxu5.jXIVdbGUhVHpnNU8aQCFfVkxgNmXe', 'BUSINESS_OWNER', 1, NULL, '2026-09-30 12:53:47.589', '2026-09-30 12:53:47.589'),
('cmuo3wl3m0003toeoslzck7oq', 'TENANT-08492', 'Customer', 'customer@nergy.io', '$2b$10$6NZnagCPFaHjKOfMDVqDxu5.jXIVdbGUhVHpnNU8aQCFfVkxgNmXe', 'CUSTOMER', 1, NULL, '2026-09-30 12:53:47.603', '2026-09-30 12:53:47.603'),
('cmuo3wl3t0005toeocyz1uqqk', 'TENANT-08492', 'Content Creator', 'content.creator@nergy.io', '$2b$10$6NZnagCPFaHjKOfMDVqDxu5.jXIVdbGUhVHpnNU8aQCFfVkxgNmXe', 'CONTENT_CREATOR', 1, NULL, '2026-09-30 12:53:47.609', '2026-09-30 12:53:47.609'),
('cmuo3wl3y0007toeoj027rocg', 'TENANT-08492', 'Content Builder', 'content.builder@nergy.io', '$2b$10$6NZnagCPFaHjKOfMDVqDxu5.jXIVdbGUhVHpnNU8aQCFfVkxgNmXe', 'CONTENT_BUILDER', 1, NULL, '2026-09-30 12:53:47.614', '2026-09-30 12:53:47.614'),
('cmuo3wl420009toeo92vzkhro', 'TENANT-08492', 'Influencer', 'influencer@nergy.io', '$2b$10$6NZnagCPFaHjKOfMDVqDxu5.jXIVdbGUhVHpnNU8aQCFfVkxgNmXe', 'INFLUENCER', 1, NULL, '2026-09-30 12:53:47.619', '2026-09-30 12:53:47.619'),
('cmuo3wl48000btoeoqg47fegq', 'TENANT-08492', 'Affiliate Partner', 'affiliate.partner@nergy.io', '$2b$10$6NZnagCPFaHjKOfMDVqDxu5.jXIVdbGUhVHpnNU8aQCFfVkxgNmXe', 'AFFILIATE_PARTNER', 1, NULL, '2026-09-30 12:53:47.624', '2026-09-30 12:53:47.624'),
('cmuo3wl4f000dtoeonzy8q5jg', 'TENANT-08492', 'AI Marketing Pro', 'ai.marketing@nergy.io', '$2b$10$6NZnagCPFaHjKOfMDVqDxu5.jXIVdbGUhVHpnNU8aQCFfVkxgNmXe', 'AI_MARKETING_PRO', 1, NULL, '2026-09-30 12:53:47.631', '2026-09-30 12:53:47.631'),
('cmuo3wl4k000ftoeojzegitnl', 'TENANT-08492', 'HR', 'hr@nergy.io', '$2b$10$6NZnagCPFaHjKOfMDVqDxu5.jXIVdbGUhVHpnNU8aQCFfVkxgNmXe', 'HR', 1, NULL, '2026-09-30 12:53:47.637', '2026-09-30 12:53:47.637'),
('cmuo3wl4p000htoeo3taieysg', 'TENANT-08492', 'Operations/Sales Admin', 'operations.admin@nergy.io', '$2b$10$6NZnagCPFaHjKOfMDVqDxu5.jXIVdbGUhVHpnNU8aQCFfVkxgNmXe', 'OPERATIONS_SALES_ADMIN', 1, NULL, '2026-09-30 12:53:47.641', '2026-09-30 12:53:47.641'),
('cmuo3wl4u000jtoeo2m4cmegr', 'TENANT-08492', 'Finance/Compliance Admin', 'finance.admin@nergy.io', '$2b$10$6NZnagCPFaHjKOfMDVqDxu5.jXIVdbGUhVHpnNU8aQCFfVkxgNmXe', 'FINANCE_COMPLIANCE_ADMIN', 1, NULL, '2026-09-30 12:53:47.646', '2026-09-30 12:53:47.646'),
('cmuo3wl50000ltoeojmmdwqth', 'TENANT-08492', 'CRM Pro', 'crm.pro@nergy.io', '$2b$10$6NZnagCPFaHjKOfMDVqDxu5.jXIVdbGUhVHpnNU8aQCFfVkxgNmXe', 'CRM_PRO', 1, NULL, '2026-09-30 12:53:47.652', '2026-09-30 12:53:47.652'),
('cmuo3wl55000ntoeo8qagixl1', 'TENANT-08492', 'Super Admin', 'super.admin@nergy.io', '$2b$10$6NZnagCPFaHjKOfMDVqDxu5.jXIVdbGUhVHpnNU8aQCFfVkxgNmXe', 'SUPER_ADMIN', 1, NULL, '2026-09-30 12:53:47.658', '2026-09-30 12:53:47.658');

-- --------------------------------------------------------

--
-- Table structure for table `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('16710b09-429f-48cc-be2d-dae4f26178a0', '48a4f431e1725ff8eab1985529e3a8c89ae0f307528826a054315b35f4cba297', '2026-09-30 05:37:37.123', '20260930053733_init_crm_schema', NULL, NULL, '2026-09-30 05:37:33.937', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activities`
--
ALTER TABLE `activities`
  ADD PRIMARY KEY (`id`),
  ADD KEY `activities_tenantId_idx` (`tenantId`),
  ADD KEY `activities_tenantId_createdAt_idx` (`tenantId`,`createdAt`),
  ADD KEY `activities_leadId_idx` (`leadId`),
  ADD KEY `activities_contactId_idx` (`contactId`),
  ADD KEY `activities_dealId_idx` (`dealId`),
  ADD KEY `activities_userId_idx` (`userId`);

--
-- Indexes for table `contacts`
--
ALTER TABLE `contacts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `contacts_tenantId_idx` (`tenantId`),
  ADD KEY `contacts_tenantId_email_idx` (`tenantId`,`email`),
  ADD KEY `contacts_assignedUserId_idx` (`assignedUserId`);

--
-- Indexes for table `deals`
--
ALTER TABLE `deals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `deals_tenantId_idx` (`tenantId`),
  ADD KEY `deals_tenantId_stage_idx` (`tenantId`,`stage`),
  ADD KEY `deals_contactId_idx` (`contactId`),
  ADD KEY `deals_leadId_idx` (`leadId`),
  ADD KEY `deals_assignedUserId_idx` (`assignedUserId`);

--
-- Indexes for table `erp_projects`
--
ALTER TABLE `erp_projects`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `erp_projects_dealId_key` (`dealId`),
  ADD KEY `erp_projects_tenantId_idx` (`tenantId`),
  ADD KEY `erp_projects_contactId_idx` (`contactId`),
  ADD KEY `erp_projects_dealId_idx` (`dealId`),
  ADD KEY `erp_projects_assignedUserId_fkey` (`assignedUserId`);

--
-- Indexes for table `inventory_items`
--
ALTER TABLE `inventory_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `inventory_items_tenantId_idx` (`tenantId`);

--
-- Indexes for table `leads`
--
ALTER TABLE `leads`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `leads_convertedToContactId_key` (`convertedToContactId`),
  ADD KEY `leads_tenantId_idx` (`tenantId`),
  ADD KEY `leads_tenantId_status_idx` (`tenantId`,`status`),
  ADD KEY `leads_assignedUserId_idx` (`assignedUserId`),
  ADD KEY `leads_createdAt_idx` (`createdAt`);

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notes_tenantId_idx` (`tenantId`),
  ADD KEY `notes_leadId_idx` (`leadId`),
  ADD KEY `notes_contactId_idx` (`contactId`),
  ADD KEY `notes_dealId_idx` (`dealId`),
  ADD KEY `notes_authorId_idx` (`authorId`);

--
-- Indexes for table `purchase_orders`
--
ALTER TABLE `purchase_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `purchase_orders_tenantId_idx` (`tenantId`);

--
-- Indexes for table `sales_orders`
--
ALTER TABLE `sales_orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sales_orders_tenantId_idx` (`tenantId`),
  ADD KEY `sales_orders_dealId_idx` (`dealId`),
  ADD KEY `sales_orders_projectId_idx` (`projectId`),
  ADD KEY `sales_orders_contactId_idx` (`contactId`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tasks_tenantId_idx` (`tenantId`),
  ADD KEY `tasks_tenantId_status_idx` (`tenantId`,`status`),
  ADD KEY `tasks_assignedUserId_idx` (`assignedUserId`),
  ADD KEY `tasks_dueDate_idx` (`dueDate`),
  ADD KEY `tasks_leadId_fkey` (`leadId`),
  ADD KEY `tasks_contactId_fkey` (`contactId`),
  ADD KEY `tasks_dealId_fkey` (`dealId`);

--
-- Indexes for table `tenants`
--
ALTER TABLE `tenants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_tenantId_email_key` (`tenantId`,`email`),
  ADD KEY `users_tenantId_idx` (`tenantId`),
  ADD KEY `users_email_idx` (`email`);

--
-- Indexes for table `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activities`
--
ALTER TABLE `activities`
  ADD CONSTRAINT `activities_contactId_fkey` FOREIGN KEY (`contactId`) REFERENCES `contacts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `activities_dealId_fkey` FOREIGN KEY (`dealId`) REFERENCES `deals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `activities_leadId_fkey` FOREIGN KEY (`leadId`) REFERENCES `leads` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `activities_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `tenants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `activities_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `contacts`
--
ALTER TABLE `contacts`
  ADD CONSTRAINT `contacts_assignedUserId_fkey` FOREIGN KEY (`assignedUserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `contacts_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `tenants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `deals`
--
ALTER TABLE `deals`
  ADD CONSTRAINT `deals_assignedUserId_fkey` FOREIGN KEY (`assignedUserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `deals_contactId_fkey` FOREIGN KEY (`contactId`) REFERENCES `contacts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `deals_leadId_fkey` FOREIGN KEY (`leadId`) REFERENCES `leads` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `deals_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `tenants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `erp_projects`
--
ALTER TABLE `erp_projects`
  ADD CONSTRAINT `erp_projects_assignedUserId_fkey` FOREIGN KEY (`assignedUserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `erp_projects_contactId_fkey` FOREIGN KEY (`contactId`) REFERENCES `contacts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `erp_projects_dealId_fkey` FOREIGN KEY (`dealId`) REFERENCES `deals` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `erp_projects_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `tenants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `inventory_items`
--
ALTER TABLE `inventory_items`
  ADD CONSTRAINT `inventory_items_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `tenants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `leads`
--
ALTER TABLE `leads`
  ADD CONSTRAINT `leads_assignedUserId_fkey` FOREIGN KEY (`assignedUserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `leads_convertedToContactId_fkey` FOREIGN KEY (`convertedToContactId`) REFERENCES `contacts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `leads_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `tenants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `notes_contactId_fkey` FOREIGN KEY (`contactId`) REFERENCES `contacts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `notes_dealId_fkey` FOREIGN KEY (`dealId`) REFERENCES `deals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `notes_leadId_fkey` FOREIGN KEY (`leadId`) REFERENCES `leads` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `notes_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `tenants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `purchase_orders`
--
ALTER TABLE `purchase_orders`
  ADD CONSTRAINT `purchase_orders_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `tenants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `sales_orders`
--
ALTER TABLE `sales_orders`
  ADD CONSTRAINT `sales_orders_contactId_fkey` FOREIGN KEY (`contactId`) REFERENCES `contacts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `sales_orders_dealId_fkey` FOREIGN KEY (`dealId`) REFERENCES `deals` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `sales_orders_projectId_fkey` FOREIGN KEY (`projectId`) REFERENCES `erp_projects` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `sales_orders_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `tenants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `tasks_assignedUserId_fkey` FOREIGN KEY (`assignedUserId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `tasks_contactId_fkey` FOREIGN KEY (`contactId`) REFERENCES `contacts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tasks_dealId_fkey` FOREIGN KEY (`dealId`) REFERENCES `deals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tasks_leadId_fkey` FOREIGN KEY (`leadId`) REFERENCES `leads` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tasks_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `tenants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_tenantId_fkey` FOREIGN KEY (`tenantId`) REFERENCES `tenants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
