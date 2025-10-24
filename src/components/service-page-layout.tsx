
"use client";
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, LucideIcon } from 'lucide-react';
import Particles from '@/components/particles';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useAnimation } from '@/hooks/use-animation';

type Offering = {
  icon: LucideIcon;
  title: string;
  description: string;
};

type ServicePageLayoutProps = {
  pageTitle: string;
  pageDescription: string;
  offerings: Offering[];
  contactPrompt: string;
  serviceIcon: LucideIcon;
};

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  pageTitle,
  pageDescription,
  offerings,
  contactPrompt,
  serviceIcon: ServiceIcon,
}) => {
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
             <ServiceIcon className="h-10 w-10 text-primary" />
          </div>
          <h1 className={cn("text-4xl sm:text-5xl lg:text-6xl font-bold text-glow-primary transition-all duration-700", isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            {pageTitle}
          </h1>
          <p className={cn("mt-4 max-w-2xl mx-auto text-lg text-muted-foreground transition-opacity duration-700 delay-200", isVisible ? 'opacity-100' : 'opacity-0')}>
            {pageDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">{contactPrompt}</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Let's discuss how I can help your business thrive online. Get in touch for a free consultation.
          </p>
          <Link href="/#contact" passHref>
            <Button asChild size="lg">
              <a>Contact Me</a>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicePageLayout;
