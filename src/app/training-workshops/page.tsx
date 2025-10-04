"use client";
import React from 'react';
import ServicePageLayout from '@/components/service-page-layout';
import { Users, MonitorPlay, Code, Briefcase } from 'lucide-react';

const offerings = [
  {
    icon: MonitorPlay,
    title: 'Website Management Training',
    description: 'Learn how to update and manage your website content, blog posts, and products without needing a developer.',
  },
  {
    icon: Code,
    title: 'Digital Tools Workshop',
    description: 'Hands-on training for your team on essential business tools like CRMs, project management software, and marketing platforms.',
  },
  {
    icon: Briefcase,
    title: 'Intro to Digital Marketing',
    description: 'A beginner-friendly workshop covering the basics of SEO, social media marketing, and email campaigns.',
  },
];

export default function TrainingWorkshopsPage() {
  return (
    <ServicePageLayout
      pageTitle="Training & Workshops"
      pageDescription="Empowering your team with the skills and knowledge to succeed in the digital world."
      offerings={offerings}
      contactPrompt="Ready to upskill your team? Let's schedule a training session."
      serviceIcon={Users}
    />
  );
}
