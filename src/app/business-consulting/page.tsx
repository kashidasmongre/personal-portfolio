"use client";
import React from 'react';
import ServicePageLayout from '@/components/service-page-layout';
import { BriefcaseBusiness, BarChart2, Target, TrendingUp, Lightbulb, Search } from 'lucide-react';

const offerings = [
  {
    icon: Search,
    title: 'Market Research',
    description: 'In-depth analysis of your industry, target audience, and market trends to identify opportunities.',
  },
  {
    icon: BarChart2,
    title: 'Competitor Analysis',
    description: 'Understanding your competitors\' strengths and weaknesses to define your unique selling proposition.',
  },
  {
    icon: Target,
    title: 'Business Process Improvement',
    description: 'Streamlining your operations for increased efficiency, reduced costs, and better customer satisfaction.',
  },
  {
    icon: TrendingUp,
    title: 'Pricing & Go-to-Market Strategy',
    description: 'Developing effective pricing models and a solid plan to launch and grow your business.',
  },
  {
    icon: Lightbulb,
    title: 'Startup Mentoring',
    description: 'Guidance for early-stage startups on everything from idea validation to securing initial traction.',
  },
];

export default function BusinessConsultingPage() {
  return (
    <ServicePageLayout
      pageTitle="Business Consulting Services"
      pageDescription="Strategic guidance to help your business navigate challenges, seize opportunities, and achieve sustainable growth."
      offerings={offerings}
      contactPrompt="Ready to refine your business strategy? Let's talk."
      serviceIcon={BriefcaseBusiness}
    />
  );
}
