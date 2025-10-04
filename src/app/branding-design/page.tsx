"use client";
import React from 'react';
import ServicePageLayout from '@/components/service-page-layout';
import { Palette, PenTool, Image, LayoutTemplate, Package, Heart } from 'lucide-react';

const offerings = [
  {
    icon: Heart,
    title: 'Logo & Brand Identity',
    description: 'Creating a memorable logo and a complete brand guide that defines your visual identity.',
  },
  {
    icon: PenTool,
    title: 'Marketing Collateral',
    description: 'Professionally designed flyers, brochures, business cards, and digital ads to promote your brand.',
  },
  {
    icon: Image,
    title: 'Social Media Graphics',
    description: 'Engaging and on-brand graphics for your social media channels to capture your audience\'s attention.',
  },
  {
    icon: LayoutTemplate,
    title: 'Product Catalogs & Lookbooks',
    description: 'Beautifully designed catalogs to showcase your products in the best light.',
  },
  {
    icon: Package,
    title: 'Packaging Design',
    description: 'Creative and practical packaging solutions that make your product stand out on the shelf.',
  },
];

export default function BrandingDesignPage() {
  return (
    <ServicePageLayout
      pageTitle="Branding & Digital Assets"
      pageDescription="Building a strong, cohesive brand that tells your story and connects with your audience."
      offerings={offerings}
      contactPrompt="Ready to build a brand that stands out? Let's create something memorable."
      serviceIcon={Palette}
    />
  );
}
