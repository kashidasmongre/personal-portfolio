"use client";
import React from 'react';
import ServicePageLayout from '@/components/service-page-layout';
import SubscriptionPlans from '@/components/subscription-plans';
import { CodeXml, Server, Store, Brush } from 'lucide-react';

const offerings = [
  {
    icon: CodeXml,
    title: 'Custom Websites',
    description: 'Beautiful, responsive, and fast websites tailored to your business needs. From simple portfolios to complex business sites.',
  },
  {
    icon: Store,
    title: 'E-Commerce Stores',
    description: 'Complete online store solutions, including product catalogs, secure payments, and inventory management to get you selling online.',
  },
   {
    icon: Brush,
    title: 'Landing Pages',
    description: 'High-converting landing pages designed to capture leads and drive sales for your marketing campaigns.',
  },
  {
    icon: Server,
    title: 'Website Maintenance',
    description: 'Ongoing support, updates, and security checks to keep your website running smoothly and securely.',
  },
];

export default function WebDevelopmentPage() {
  return (
    <>
      <ServicePageLayout
        pageTitle="Web Development Services"
        pageDescription="Crafting digital solutions that empower small and medium-sized businesses in Bhopal and beyond."
        offerings={offerings}
        contactPrompt="Ready to Start Your Project?"
        serviceIcon={CodeXml}
      />
      <div className="relative z-10">
        <SubscriptionPlans />
      </div>
    </>
  );
}
