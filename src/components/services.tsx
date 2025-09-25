"use client";

import { CodeXml, Store, BriefcaseBusiness, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAnimation } from '@/hooks/use-animation';
import { cn } from '@/lib/utils';

const services = [
  {
    icon: CodeXml,
    title: 'Website Development',
    description: 'Professional and responsive websites for businesses.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Business Consultancy',
    description: 'Guiding small businesses with smart strategies and digital growth plans.',
  },
  {
    icon: Store,
    title: 'Google Business Profile Setup',
    description: 'Helping local businesses get discovered online.',
  },
  {
    icon: Rocket,
    title: 'Digital Tools Integration',
    description: 'Setting up billing, inventory, and automation tools.',
  },
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
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
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
