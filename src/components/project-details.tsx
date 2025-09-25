"use client";

import Image from 'next/image';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { ExternalLink, ShoppingCart, Star, UtensilsCrossed, Phone } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';

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

const burgerMenuItems = [
    { name: 'Classic Cheeseburger', price: '$9.99', description: 'Juicy beef patty, melted cheddar, lettuce, tomato, and our special sauce.' },
    { name: 'Baconator', price: '$12.50', description: 'Double beef, double bacon, double cheese. A true beast.' },
    { name: 'Spicy Jalapeño Burger', price: '$10.99', description: 'Pepper jack cheese, fried jalapeños, and spicy aioli.' },
    { name: 'Mushroom Swiss', price: '$11.50', description: 'Sautéed mushrooms, melted Swiss cheese, and garlic aioli.' },
];


function BurgerCafeDemo() {
    return (
        <Tabs defaultValue="menu" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="menu"><UtensilsCrossed className="mr-2 h-4 w-4" />Menu</TabsTrigger>
                <TabsTrigger value="order"><ShoppingCart className="mr-2 h-4 w-4" />Order</TabsTrigger>
                <TabsTrigger value="contact"><Phone className="mr-2 h-4 w-4" />Contact</TabsTrigger>
            </TabsList>
            <TabsContent value="menu">
                <Card>
                    <CardContent className="space-y-4 pt-6">
                        <h3 className="text-lg font-semibold">Our Legendary Burgers</h3>
                        {burgerMenuItems.map(item => (
                            <div key={item.name} className="border-b pb-4 last:border-b-0">
                                <div className="flex justify-between font-medium">
                                    <h4>{item.name}</h4>
                                    <p>{item.price}</p>
                                </div>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="order">
                <Card>
                    <CardContent className="space-y-4 pt-6">
                         <h3 className="text-lg font-semibold">Place Your Order (Demo)</h3>
                         <div className="space-y-2">
                             <Label htmlFor="name">Name</Label>
                             <Input id="name" placeholder="John Doe" />
                         </div>
                         <div className="space-y-2">
                             <Label htmlFor="burger-select">Choose Your Burger</Label>
                            <select id="burger-select" className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                {burgerMenuItems.map(item => <option key={item.name} value={item.name}>{item.name}</option>)}
                            </select>
                         </div>
                         <div className="space-y-2">
                             <Label htmlFor="notes">Special Instructions</Label>
                             <Textarea id="notes" placeholder="e.g., Extra pickles, no onions" />
                         </div>
                         <Button className="w-full">
                             Add to Cart (Demo)
                         </Button>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="contact">
                <Card>
                    <CardContent className="space-y-4 pt-6 text-center">
                        <h3 className="text-lg font-semibold">Visit or Call Us!</h3>
                        <p>123 Burger Lane, Flavor Town, 90210</p>
                        <p className="font-bold">(555) 123-4567</p>
                         <div className="flex justify-center items-center gap-1 text-primary">
                            <Star className="w-5 h-5 fill-primary" />
                            <Star className="w-5 h-5 fill-primary" />
                            <Star className="w-5 h-5 fill-primary" />
                            <Star className="w-5 h-5 fill-primary" />
                            <Star className="w-5 h-5" />
                            <span className="text-muted-foreground ml-2">(1,234 Reviews)</span>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  // If this is the burger project, show the special demo component
  if (project.id === 'project-burger-cafe') {
    return <BurgerCafeDemo />;
  }
    
  // Fallback to the original simple details view for other projects
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
