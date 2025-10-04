
"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CodeXml, Palette, ShoppingCart, Bot } from 'lucide-react';
import Particles from '@/components/particles';
import SubscriptionPlans from '@/components/subscription-plans';

const offerings = [
    {
        icon: CodeXml,
        title: 'Custom Websites',
        price: 'Starts at ₹1,500',
        description: 'Beautiful, responsive, and fast websites tailored to your business needs. From simple portfolios to complex business sites.'
    },
    {
        icon: ShoppingCart,
        title: 'E-Commerce Stores',
        price: 'Starts at ₹5,000',
        description: 'Complete online store solutions, including product catalogs, secure payments, and inventory management to get you selling online.'
    },
    {
        icon: Palette,
        title: 'Branding & Design',
        price: 'Starts at ₹2,000',
        description: 'Establish a strong brand identity with custom logos, color schemes, and digital assets that resonate with your audience.'
    },
    {
        icon: Bot,
        title: 'Automation & Tools',
        price: 'Custom Pricing',
        description: 'Streamline your business operations with custom tools, CRM setups, and automation to save you time and money.'
    }
]

export default function WebDevelopmentPage() {
  return (
    <div className="bg-background text-foreground min-h-screen">
        <Particles />
        <div className="relative z-10 container mx-auto px-4 py-16 sm:px-6 lg:px-8">
            <Link href="/" className="absolute top-6 left-6 z-20">
                <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
                </Button>
            </Link>

            <div className="text-center pt-24 pb-16">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-glow-primary">Web Development Services</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Crafting digital solutions that empower small and medium-sized businesses in Bhopal and beyond.
                </p>
            </div>

            <SubscriptionPlans />

             <div className="mt-20 text-center">
                <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Project?</h2>
                <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Let's discuss how I can help your business thrive online. Get in touch for a free consultation.</p>
                <Button asChild size="lg">
                    <Link href="/#contact">
                        Contact Me
                    </Link>
                </Button>
            </div>
        </div>
    </div>
  );
}
