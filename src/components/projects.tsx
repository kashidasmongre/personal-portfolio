"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Hourglass } from 'lucide-react';
import { useAnimation } from '@/hooks/use-animation';
import { cn } from '@/lib/utils';

const projects = [
  { id: 'project-burger', title: 'Burger Café Website', hint: 'burger website' },
  { id: 'project-branding', title: 'Local Store Branding', hint: 'store branding' },
  { id: 'project-marketing', title: 'Digital Marketing Campaigns', hint: 'digital marketing' },
];

const Projects = () => {
    const { ref, isVisible } = useAnimation(0.2);

  return (
    <section id="projects" ref={ref} className="bg-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
           <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl inline-block relative transition-all duration-700", isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            Projects & Startup Ideas
             <span className={cn("absolute -bottom-2 left-0 w-full h-1 bg-primary transition-all duration-1000 delay-300", isVisible ? "scale-x-100" : "scale-x-0")} style={{transformOrigin: 'left'}}/>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const image = PlaceHolderImages.find(p => p.id === project.id);
            return (
              <div
                key={project.id}
                className={cn('transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                <Card className="group glassmorphism h-full transform-gpu overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                  <CardHeader className="p-0">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={project.title}
                        width={600}
                        height={400}
                        data-ai-hint={project.hint}
                        className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                  </CardContent>
                </Card>
              </div>
            );
          })}
          <div
             className={cn('transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
             style={{ transitionDelay: `${projects.length * 200 + 300}ms` }}
            >
            <Card className="group glassmorphism flex h-full min-h-[292px] transform-gpu flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                <Hourglass className="h-12 w-12 text-primary transition-transform duration-300 group-hover:animate-spin" />
                <CardTitle className="mt-4 text-xl">Future Startup Ideas</CardTitle>
                <p className="mt-2 text-muted-foreground">Coming Soon...</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
