"use client";
import React from 'react';
import ServicePageLayout from '@/components/service-page-layout';
import { ShoppingCart, Store, CreditCard, Package, BarChart, Truck } from 'lucide-react';

const offerings = [
  {
    icon: Store,
    title: 'Online Store Setup',
    description: 'Complete setup of your e-commerce store on platforms like Shopify or with custom solutions.',
  },
  {
    icon: Package,
    title: 'Product Listing & Management',
    description: 'Professional product uploads, descriptions, and inventory management to keep your store updated.',
  },
  {
    icon: CreditCard,
    title: 'Payment Gateway Integration',
    description: 'Secure integration of popular payment gateways to ensure smooth and safe transactions.',
  },
  {
    icon: ShoppingCart,
    title: 'Shopping Cart & Checkout Optimization',
    description: 'Improving the user experience to reduce cart abandonment and increase conversions.',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics Setup',
    description: 'Configuring shipping rates, zones, and options to streamline your fulfillment process.',
  },
  {
    icon: BarChart,
    title: 'Sales Analytics & Reporting',
    description: 'Setting up analytics to track sales, customer behavior, and store performance.',
  },
];

export default function EcommerceSolutionsPage() {
  return (
    <ServicePageLayout
      pageTitle="E-Commerce Solutions"
      pageDescription="Your one-stop solution to build, manage, and grow your online store."
      offerings={offerings}
      contactPrompt="Ready to start selling online? Let's build your e-commerce empire."
      serviceIcon={ShoppingCart}
    />
  );
}
