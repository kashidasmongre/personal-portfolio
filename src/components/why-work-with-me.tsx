"use client";

import { Briefcase, Users, Building, Lightbulb, UserCheck, Computer, GraduationCap, Hourglass } from 'lucide-react';
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
    description: '6+ months in a BPO handling digital payments via a finance app, interacting directly with business owners and customers.',
  },
  {
    icon: Computer,
    title: 'Technical Expertise (ITI in COPA)',
    description: 'Skilled in computer operations, basic IT solutions, and software handling, ensuring smooth management of digital tools for your business.',
  },
  {
    icon: GraduationCap,
    title: 'Academic Knowledge (BBA Student)',
    description: 'Learning business management, strategy, and entrepreneurship, bringing a mix of practical and theoretical knowledge to every project.',
  },
  {
    icon: Lightbulb,
    title: 'Practical Solutions for Real Challenges',
    description: 'Combining village-level insights, corporate exposure, technical skills, and academic knowledge to provide tailored, effective solutions.',
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
              className={cn('transition-all duration-700', isVisible ? `opacity-100 translate-y-0` : `opacity-0 translate-y-8`)}
              style={{ transitionDelay: `${index * 150 + 300}ms` }}
            >
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
           <div
              className={cn('transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
              style={{ transitionDelay: `${workReasons.length * 150 + 300}ms` }}
            >
            <Card className="group glassmorphism flex h-full min-h-[292px] transform-gpu flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                <Hourglass className="h-12 w-12 text-primary transition-transform duration-300 group-hover:animate-spin" />
                <CardTitle className="mt-4 text-xl">More Experience</CardTitle>
                <p className="mt-2 text-muted-foreground">Coming Soon...</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
