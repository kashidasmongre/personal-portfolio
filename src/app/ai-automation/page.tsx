
"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, LucideIcon, Zap, Bot, Database, Sparkles, BrainCircuit, MessageSquare, Cog } from 'lucide-react';
import Particles from '@/components/particles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useAnimation } from '@/hooks/use-animation';

const offerings = [
  {
    icon: MessageSquare,
    title: 'Your Ultimate WhatsApp Automation Expert',
    description: 'Leverage the power of WhatsApp to build an automated engine for your business. I create AI-powered, human-like chat systems for 24/7 lead capture and automated appointment booking, providing instant customer support and helping to reduce drop-offs dramatically.',
    useCases: [
        "For Restaurants: Automate table bookings and order confirmations.",
        "For Coaches: Automatically qualify leads and schedule consultation calls.",
        "For Local Shops: Answer common questions and capture sales leads after hours."
    ]
  },
  {
    icon: Cog,
    title: 'Automate Your Back-Office',
    description: 'Free up your valuable time by automating repetitive internal tasks. I can build custom workflows for data entry automation, automated reporting, invoice generation, and even streamline employee onboarding processes.',
  },
  {
    icon: Bot,
    title: 'Your 24/7 AI-Powered Support Agent',
    description: 'Deploy an intelligent chatbot on your website or social media to provide instant answers to frequently asked questions. This system handles lead qualification and ensures a seamless human handover for complex issues, so your team can focus on what matters most.',
  },
];

export default function AiAutomationPage() {
  const { ref, isVisible } = useAnimation(0.1);

  return (
    <div className="bg-background text-foreground min-h-screen">
      <Particles />
      <div ref={ref} className="relative z-10 container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <Link href="/" className="absolute top-6 left-6 z-20">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Button>
        </Link>

        <div className="text-center pt-24 pb-16">
          <div className="inline-block bg-primary/10 p-4 rounded-full mb-4">
             <BrainCircuit className="h-10 w-10 text-primary" />
          </div>
          <h1 className={cn("text-4xl sm:text-5xl lg:text-6xl font-bold text-glow-primary transition-all duration-700", isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            AI & WhatsApp Automation Services in Bhopal
          </h1>
          <p className={cn("mt-4 max-w-3xl mx-auto text-lg text-muted-foreground transition-opacity duration-700 delay-200", isVisible ? 'opacity-100' : 'opacity-0')}>
            Are you spending more time answering messages than running your business? I build automated "engines" that save you time, reduce costs, and capture every single lead, turning your manual tasks into automated success.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div
              key={offering.title}
              className={cn('transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
              style={{ transitionDelay: `${index * 150 + 400}ms` }}
            >
              <Card className="glassmorphism h-full text-center">
                <CardHeader className="items-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <offering.icon className="h-8 w-8" />
                  </div>
                  <CardTitle>{offering.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{offering.description}</p>
                   {offering.useCases && (
                    <div className="text-left mt-4 text-sm text-muted-foreground/80">
                        <p className="font-semibold text-foreground/90">Use Cases:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            {offering.useCases.map(uc => <li key={uc}>{uc}</li>)}
                        </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center glassmorphism max-w-4xl mx-auto p-8 rounded-lg">
             <h2 className="text-2xl font-semibold mb-4 text-glow-accent">Why Choose a Developer for Your Automation?</h2>
             <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                The magic isn't just the AI tool; it's the seamless integration. As a Web Developer and Automation Expert, I connect these AI systems directly into your website, database, and existing software (like CRMs). This creates one unified, powerful system that works for you, not the other way around.
             </p>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Reclaim Your Time?</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            In a free 15-minute call, I'll identify the #1 automation opportunity that can save you 10+ hours a week.
          </p>
          <Link href="/#contact" passHref>
            <Button asChild size="lg">
             <a>Get Your FREE Automation Audit</a>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
