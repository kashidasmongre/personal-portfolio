
"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Particles from '@/components/particles';
import SubscriptionPlans from '@/components/subscription-plans';

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
