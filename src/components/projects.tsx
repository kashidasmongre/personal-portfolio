"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlaceHolderImages, type ImagePlaceholder } from '@/lib/placeholder-images';
import { useAnimation } from '@/hooks/use-animation';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveLink: string;
  image?: ImagePlaceholder;
  hint?: string;
};

const projects: Project[] = [
  {
    id: 'project-burger-cafe',
    title: 'Burger Café Website',
    description: 'A modern, responsive website for a local burger joint to drive sales and engagement.',
    technologies: ['Next.js', 'React', 'ShadCN UI', 'Tailwind CSS'],
    liveLink: '/projects/burger-cafe',
    image: PlaceHolderImages.find(p => p.id === 'project-burger-cafe'),
    hint: 'burger cafe'
  },
  {
    id: 'project-local-store',
    title: 'Local Store Landing Page',
    description: 'A beautiful landing page designed to build an online identity and attract local customers.',
    technologies: ['Figma', 'Next.js', 'Tailwind CSS'],
    liveLink: '/projects/local-store',
    image: PlaceHolderImages.find(p => p.id === 'project-local-store'),
    hint: 'local store'
  },
  {
    id: 'project-barber-shop',
    title: 'Barber Shop Appointments',
    description: 'A stylish and functional website with an integrated appointment booking system.',
    technologies: ['React', 'Next.js', 'React Hook Form'],
    liveLink: '/projects/barber-shop',
    image: PlaceHolderImages.find(p => p.id === 'project-barber-shop'),
    hint: 'barber shop'
  },
  {
    id: 'project-restaurant-booking',
    title: 'Restaurant Table Reservations',
    description: 'A sophisticated web app for customers to view availability and book tables in real-time.',
    technologies: ['Next.js', 'Server Actions', 'Zod'],
    liveLink: '/projects/restaurant-booking',
    image: PlaceHolderImages.find(p => p.id === 'project-restaurant-booking'),
    hint: 'restaurant booking'
  },
];

const Projects = () => {
    const { ref, isVisible } = useAnimation(0.2);

  return (
    <section id="projects" ref={ref} className="bg-background">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
           <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl inline-block relative transition-all duration-700", isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            Projects
             <span className={cn("absolute -bottom-2 left-0 w-full h-1 bg-primary transition-all duration-1000 delay-300", isVisible ? "scale-x-100" : "scale-x-0")} style={{transformOrigin: 'left'}}/>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => {
            const image = project.image;
            return (
              <Link
                key={project.id}
                href={project.liveLink}
                className={cn('group block transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                <Card className="glassmorphism h-full transform-gpu overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                  <CardHeader className="p-0 relative">
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
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                        <div className="flex items-center gap-2 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span>View Project</span>
                            <ArrowRight className="w-5 h-5"/>
                        </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6">
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.technologies.map(tech => (
                            <Badge key={tech} variant="secondary">{tech}</Badge>
                        ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
