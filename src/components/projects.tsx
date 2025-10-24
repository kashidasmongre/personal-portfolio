
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
  altText: string;
};

const projects: Project[] = [
  {
    id: 'project-the-bakes',
    title: 'The Bakes - Bakery Website',
    description: 'A delightful and responsive website for a local bakery, designed to showcase their delicious products and attract customers.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    liveLink: 'https://thebakes.vercel.app/',
    image: PlaceHolderImages.find(p => p.id === 'project-the-bakes'),
    hint: 'bakery website',
    altText: 'Responsive bakery website design for a local Bhopal client.'
  },
  {
    id: 'project-burger-cafe',
    title: 'Burger Café Website',
    description: 'A mouth-watering website for a burger cafe, complete with a dynamic menu and a bold, modern design.',
    technologies: ['Next.js', 'React', 'Tailwind CSS'],
    liveLink: 'https://burger-landing-peag.vercel.app/',
    image: PlaceHolderImages.find(p => p.id === 'project-burger-cafe'),
    hint: 'burger cafe',
    altText: 'Custom website for a burger cafe in Bhopal with an online menu.'
  },
];

const Projects = () => {
    const { ref, isVisible } = useAnimation(0.2);

  return (
    <section id="projects" ref={ref} className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
           <h2 className={cn("text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl inline-block relative transition-all duration-700", isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4')}>
            My Recent Web Projects
             <span className={cn("absolute -bottom-2 left-0 w-full h-1 bg-primary transition-all duration-1000 delay-300", isVisible ? "scale-x-100" : "scale-x-0")} style={{transformOrigin: 'left'}}/>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {projects.map((project, index) => {
            const image = project.image;
            return (
              <a
                key={project.id}
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className={cn('group block transition-all duration-700', isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                <Card className="glassmorphism h-full transform-gpu overflow-hidden text-center transition-all duration-300 hover:border-primary hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2">
                  <CardHeader className="p-0 relative">
                    {image && (
                      <Image
                        src={image.imageUrl}
                        alt={project.altText}
                        width={600}
                        height={400}
                        data-ai-hint={project.hint}
                        className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-64 md:h-72"
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
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
