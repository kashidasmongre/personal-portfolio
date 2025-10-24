"use client";

import { CodeXml, BriefcaseBusiness, Bot, Palette, ShoppingCart, Users, BrainCircuit } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAnimation } from '@/hooks/use-animation';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const services = [
  {
    icon: CodeXml,
    title: 'Website & Online Presence',
    description: 'Custom business website design & development, landing pages, and online portfolios.',
    href: '/web-development'
  },
  {
    icon: BrainCircuit,
    title: 'AI & Automation',
    description: 'Custom AI solutions, chatbots, and business process automation to enhance efficiency.',
    href: '/ai-automation'
  },
];

const Services = () => {
    const { ref, isVisible } = useAnimation(0.2);
  return (
    <section id="services" ref={ref} className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl inline-block relative transition-all duration-700", isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            Services I offer
            <span className={cn("absolute -bottom-2 left-0 w-full h-1 bg-primary transition-all duration-1000 delay-300", isVisible ? "scale-x-100" : "scale-x-0")} style={{transformOrigin: 'left'}}/>
          </h2>
           <p className={cn("mt-4 max-w-3xl mx-auto text-muted-foreground transition-opacity duration-700 delay-200", isVisible ? "opacity-100" : "opacity-0")}>
            As a freelance web developer in Bhopal, I provide smart and efficient tech and consulting solutions that help businesses grow.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service, index) => (
            <Link
              href={service.href}
              key={index}
              className={cn('block transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
              <Card className="group glassmorphism h-full transform-gpu overflow-hidden text-center transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                <CardHeader className="relative items-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors duration-300">
                    <service.icon className="h-8 w-8 text-glow-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
