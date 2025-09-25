"use client";

import Image from 'next/image';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { ExternalLink } from 'lucide-react';

export type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveLink?: string;
  image?: ImagePlaceholder;
  hint?: string;
};

interface ProjectDetailsProps {
  project: Project;
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
      <div>
        {project.image && (
          <Image
            src={project.image.imageUrl}
            alt={project.title}
            width={800}
            height={600}
            className="rounded-lg object-cover w-full h-auto shadow-lg"
            data-ai-hint={project.hint}
          />
        )}
      </div>
      <div className="flex flex-col">
        <p className="text-muted-foreground mb-6">{project.description}</p>
        
        <h3 className="text-lg font-semibold mb-3">Technologies Used</h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map(tech => (
            <Badge key={tech} variant="secondary">{tech}</Badge>
          ))}
        </div>

        {project.liveLink && (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
            <Button className="w-full mt-auto">
              View Live Demo
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        )}
      </div>
    </div>
  );
}
