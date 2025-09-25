"use client";

import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useAnimation } from '@/hooks/use-animation';
import { cn } from '@/lib/utils';
import { ProjectDetails, type Project } from './project-details';


const projects: Project[] = [
  {
    id: 'project-burger-cafe',
    title: 'Burger Café Website',
    description: 'A modern, responsive website for a local burger joint. Features an interactive menu, an easy-to-use online ordering system mockup, and a prominent contact section to drive sales and engagement.',
    technologies: ['Next.js', 'React', 'ShadCN UI', 'Tailwind CSS'],
    liveLink: '#',
    image: PlaceHolderImages.find(p => p.id === 'project-burger-cafe'),
    hint: 'burger cafe'
  },
  {
    id: 'project-local-store',
    title: 'Local Store Branding & Landing Page',
    description: 'A complete branding package and a beautiful landing page for a small retail business. Designed to build a strong online identity, attract local customers, and provide key business information at a glance.',
    technologies: ['Figma', 'Next.js', 'Tailwind CSS'],
    liveLink: '#',
    image: PlaceHolderImages.find(p => p.id === 'project-local-store'),
    hint: 'local store'
  },
  {
    id: 'project-barber-shop',
    title: 'Barber Shop Appointment Booking',
    description: 'A stylish and functional website for a barber shop, featuring a service menu and an integrated appointment booking system to streamline scheduling and reduce no-shows.',
    technologies: ['React', 'Next.js', 'React Hook Form', 'ShadCN UI'],
    liveLink: '#',
    image: PlaceHolderImages.find(p => p.id === 'project-barber-shop'),
    hint: 'barber shop'
  },
  {
    id: 'project-restaurant-booking',
    title: 'Restaurant Table Reservation System',
    description: 'A sophisticated web application for a fine-dining restaurant that allows customers to view seating availability and book a table in real-time, enhancing the customer experience and optimizing restaurant operations.',
    technologies: ['Next.js', 'Server Actions', 'Zod', 'React Day Picker'],
    liveLink: '#',
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
            Projects & Startup Ideas
             <span className={cn("absolute -bottom-2 left-0 w-full h-1 bg-primary transition-all duration-1000 delay-300", isVisible ? "scale-x-100" : "scale-x-0")} style={{transformOrigin: 'left'}}/>
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => {
            const image = project.image;
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
                    <CardTitle className="text-xl mb-4">{project.title}</CardTitle>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{project.description}</p>
                     <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">View Details</Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-3xl">
                        <ProjectDetails project={project} />
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
