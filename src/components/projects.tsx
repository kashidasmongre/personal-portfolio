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
    id: 'project-electrician', 
    title: 'Local Electrician Website',
    description: 'A professional, responsive website for a local electrician to showcase services, display testimonials, and capture leads through a simple contact form. Built to be fast, SEO-friendly, and easy for the client to manage.',
    technologies: ['Next.js', 'React', 'Tailwind CSS', 'ShadCN UI'],
    liveLink: '#',
    image: PlaceHolderImages.find(p => p.id === 'project-electrician'),
    hint: 'electrician website'
  },
  { 
    id: 'project-inventory', 
    title: 'Small Business Inventory Manager',
    description: 'A clean and simple web application for small retail shops to track product inventory. Features include adding new products, updating stock levels, and viewing a real-time inventory dashboard with low-stock alerts.',
    technologies: ['React', 'Next.js (App Router)', 'ShadCN UI', 'Recharts'],
    liveLink: '#',
    image: PlaceHolderImages.find(p => p.id === 'project-inventory'),
    hint: 'inventory dashboard'
  },
  { 
    id: 'project-support-ticket', 
    title: 'Customer Support Ticket Tool',
    description: 'An internal tool for a small team to manage customer support requests. It allows agents to view, update, and close tickets in a centralized dashboard, improving response times and organization.',
    technologies: ['Next.js', 'Server Actions', 'Zod', 'React Hook Form'],
    liveLink: '#',
    image: PlaceHolderImages.find(p => p.id === 'project-support-ticket'),
    hint: 'customer support'
  },
  {
    id: 'project-payment-qr',
    title: 'Dynamic QR Payment Generator',
    description: 'A simple tool that generates a UPI QR code with a pre-filled amount. Useful for small vendors to quickly accept payments for specific items without needing the customer to manually enter the amount.',
    technologies: ['JavaScript', 'HTML/CSS', 'QR Code Library'],
    liveLink: '#',
    image: PlaceHolderImages.find(p => p.id === 'project-payment-qr'),
    hint: 'qr payment'
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
