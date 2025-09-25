"use client";

import { Briefcase, Users, Building, Lightbulb, UserCheck } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAnimation } from '@/hooks/use-animation';
import { cn } from '@/lib/utils';

const workReasons = [
  {
    icon: Briefcase,
    title: '5+ Years Ground-Level Business Experience',
    description: 'Managed a village-based family cyber café, understanding local customer behavior and day-to-day business challenges.',
  },
  {
    icon: Users,
    title: 'Insight into All Scales of Business',
    description: 'Worked with small self-employed shop owners to larger business operators, learning their mindset, needs, and problem-solving approaches.',
  },
  {
    icon: Building,
    title: 'Corporate Exposure',
    description: '6+ months in a BPO handling digital payments via M-Pokket app, interacting directly with business owners and customers.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Solutions for Real Challenges',
    description: 'Combining village-level insights with corporate experience, I provide tailored, effective solutions that help businesses grow efficiently.',
  },
  {
    icon: UserCheck,
    title: 'Customer-Centric Approach',
    description: 'Deep understanding of what motivates clients and customers, ensuring that every solution aligns with real-world needs.',
  }
];

const WhyWorkWithMe = () => {
    const { ref, isVisible } = useAnimation(0.2);
  return (
    <section id="why-work-with-me" ref={ref} className="bg-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl inline-block relative transition-all duration-700", isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            Why Work With Me
            <span className={cn("absolute -bottom-2 left-0 w-full h-1 bg-primary transition-all duration-1000 delay-300", isVisible ? "scale-x-100" : "scale-x-0")} style={{transformOrigin: 'left'}}/>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workReasons.map((item, index) => (
            <div
              key={index}
              className={cn('transition-all duration-700 lg:col-span-1', workReasons.length === 5 && index >= 3 ? 'md:col-span-1 lg:col-span-1 lg:col-start-2' : 'md:col-span-1', workReasons.length === 5 && index === 4 ? 'lg:col-start-3' : '',
              {'lg:col-start-auto': workReasons.length !== 5 || index < 3},
              {'lg:col-start-2': workReasons.length === 5 && index === 3},
              {'lg:col-start-auto': workReasons.length === 5 && index === 4},
               'sm:last:col-start-auto',
               'md:last:col-start-auto',
               'lg:last:col-start-auto',

              )}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
            >
               {workReasons.length === 5 && index === 3 && <div className="hidden lg:block lg:col-start-1"></div>}
              <Card className="glassmorphism h-full text-center transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                <CardHeader className="items-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-8 w-8 text-glow-primary" />
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
