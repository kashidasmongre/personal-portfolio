"use client";

import { CodeXml, BriefcaseBusiness, Bot, Palette, ShoppingCart, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAnimation } from '@/hooks/use-animation';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: CodeXml,
    title: 'Website & Online Presence',
    description: 'Business website design & development, landing pages, online portfolios.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Business Consulting',
    description: 'Market research, competitor analysis, business process improvement, pricing strategies.',
  },
  {
    icon: Bot,
    title: 'Tech & Tools Support',
    description: 'Automation of business tasks, data management & reporting, CRM setup.',
  },
  {
    icon: Palette,
    title: 'Branding & Digital Assets',
    description: 'Logo & brand identity design, flyers, brochures, product catalogs.',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce Support',
    description: 'Online store setup, product listing, payment integration, checkout optimization.',
  },
  {
    icon: Users,
    title: 'Training & Workshops',
    description: 'Staff training on business tools and website management.',
  }
];

const Services = () => {
    const { ref, isVisible } = useAnimation(0.2);
  return (
    <section id="services" ref={ref} className="bg-card/30">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl inline-block relative transition-all duration-700", isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            What I Do
            <span className={cn("absolute -bottom-2 left-0 w-full h-1 bg-primary transition-all duration-1000 delay-300", isVisible ? "scale-x-100" : "scale-x-0")} style={{transformOrigin: 'left'}}/>
          </h2>
           <p className={cn("mt-4 max-w-3xl mx-auto text-muted-foreground transition-opacity duration-700 delay-200", isVisible ? "opacity-100" : "opacity-0")}>
            I am a BBA student and a business technology consultant. I provide the following services to small and medium businesses. My focus is on providing smart and efficient tech and consulting solutions that help businesses grow.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className={cn('transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
            >
              <Card className="group glassmorphism h-full transform-gpu overflow-hidden text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/20">
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-accent/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <CardHeader className="relative items-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                    <service.icon className="h-8 w-8 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
