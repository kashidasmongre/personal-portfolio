
"use client";

import { BookOpen, Target, Rocket } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAnimation } from '@/hooks/use-animation';
import { cn } from '@/lib/utils';

const aboutItems = [
  {
    icon: BookOpen,
    title: 'Education',
    description: '12th Pass (2023), ITI COPA Cleared, and currently pursuing a BBA to build a strong business foundation for my work as a web developer in Bhopal.',
  },
  {
    icon: Target,
    title: 'Vision',
    description: 'My vision is to empower small businesses in Bhopal and across India with technology, and build startups that create jobs and long-term impact for society.',
  },
  {
    icon: Rocket,
    title: 'Mission',
    description: 'My mission is to deliver high-quality, freelance web development services, helping businesses succeed with a strong online presence.',
  },
];

const About = () => {
  const { ref, isVisible } = useAnimation(0.2);

  return (
    <section id="about" ref={ref} className="bg-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl inline-block relative transition-all duration-700", isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            About Me - Web Developer from Bhopal
             <span className={cn("absolute -bottom-2 left-0 w-full h-1 bg-primary transition-all duration-1000 delay-300", isVisible ? "scale-x-100" : "scale-x-0")} style={{transformOrigin: 'left'}}/>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {aboutItems.map((item, index) => (
            <div
              key={index}
              className={cn('transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
              style={{ transitionDelay: `${index * 200 + 300}ms` }}
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
        </div>
      </div>
    </section>
  );
};

export default About;
