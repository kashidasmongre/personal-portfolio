"use client";
import React from 'react';
import ServicePageLayout from '@/components/service-page-layout';
import { Bot, Zap, Database, BarChart, Settings, Mail } from 'lucide-react';

const offerings = [
  {
    icon: Zap,
    title: 'Business Task Automation',
    description: 'Automating repetitive tasks like data entry, report generation, and social media posting to save you time.',
  },
  {
    icon: Database,
    title: 'Data Management & Reporting',
    description: 'Setting up systems to collect, organize, and visualize your business data for better decision-making.',
  },
  {
    icon: Settings,
    title: 'CRM Setup & Integration',
    description: 'Implementing and customizing CRM systems (like Zoho or HubSpot) to manage customer relationships effectively.',
  },
  {
    icon: Mail,
    title: 'Email Marketing Automation',
    description: 'Creating automated email sequences for newsletters, customer onboarding, and promotions.',
  },
  {
    icon: Bot,
    title: 'Custom Tool Development',
    description: 'Building small, custom applications or scripts to solve specific business problems.',
  },
];

export default function TechSupportPage() {
  return (
    <ServicePageLayout
      pageTitle="Tech & Tools Support"
      pageDescription="Streamlining your business with smart automation and efficient technology solutions."
      offerings={offerings}
      contactPrompt="Ready to make your business more efficient? Let's automate your success."
      serviceIcon={Bot}
    />
  );
}
