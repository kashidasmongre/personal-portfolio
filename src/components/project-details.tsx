"use client";

import * as React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { ImagePlaceholder } from '@/lib/placeholder-images';
import { ExternalLink, ShoppingCart, Star, UtensilsCrossed, Phone, Scissors, Calendar, Clock, User, Mail, Store, Package } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Calendar as ShadCnCalendar } from '@/components/ui/calendar';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';


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

// --- Burger Cafe Demo ---
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
                            <Select>
                                <SelectTrigger id="burger-select">
                                    <SelectValue placeholder="Select a burger" />
                                </SelectTrigger>
                                <SelectContent>
                                    {burgerMenuItems.map(item => <SelectItem key={item.name} value={item.name}>{item.name}</SelectItem>)}
                                </SelectContent>
                            </Select>
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

// --- Local Store Demo ---
const storeProducts = [
    { name: 'Handcrafted Vase', price: '$45', image: 'https://picsum.photos/seed/store1/200/200' },
    { name: 'Artisanal Soap', price: '$12', image: 'https://picsum.photos/seed/store2/200/200' },
    { name: 'Gourmet Coffee', price: '$22', image: 'https://picsum.photos/seed/store3/200/200' },
];

function LocalStoreDemo({ project }: { project: Project }) {
    return (
        <div className="space-y-6">
            <Card className="overflow-hidden">
                {project.image && (
                    <Image
                        src={project.image.imageUrl}
                        alt={project.title}
                        width={800}
                        height={300}
                        className="object-cover w-full h-40"
                    />
                )}
                <CardContent className="p-6 text-center">
                    <h2 className="text-2xl font-bold text-primary">The Corner Boutique</h2>
                    <p className="text-muted-foreground">Curated goods for the modern home.</p>
                </CardContent>
            </Card>

            <div>
                <h3 className="text-lg font-semibold mb-4 text-center">Featured Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {storeProducts.map(product => (
                        <Card key={product.name}>
                            <CardContent className="p-4 flex flex-col items-center text-center">
                                <Image src={product.image} alt={product.name} width={100} height={100} className="rounded-md mb-2" />
                                <h4 className="font-medium">{product.name}</h4>
                                <p className="text-sm text-muted-foreground">{product.price}</p>
                                <Button variant="outline" size="sm" className="mt-2">View</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            <Card>
                <CardHeader>
                    <CardTitle>Join Our Community</CardTitle>
                    <p className="text-muted-foreground text-sm">Get exclusive offers and updates straight to your inbox.</p>
                </CardHeader>
                <CardContent className="flex gap-2">
                    <Input type="email" placeholder="Enter your email" />
                    <Button>Subscribe</Button>
                </CardContent>
            </Card>
        </div>
    )
}

// --- Barber Shop Demo ---
const barberServices = [
    { name: 'Classic Haircut', price: '$30', duration: '30 min' },
    { name: 'Beard Trim & Shape-up', price: '$25', duration: '25 min' },
    { name: 'Hot Towel Shave', price: '$40', duration: '45 min' },
    { name: 'The Full Works', price: '$65', duration: '70 min' },
];

function BarberShopDemo() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
        <Tabs defaultValue="services" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="services"><Scissors className="mr-2 h-4 w-4" />Services</TabsTrigger>
                <TabsTrigger value="book"><Calendar className="mr-2 h-4 w-4" />Book Now</TabsTrigger>
                <TabsTrigger value="contact"><Phone className="mr-2 h-4 w-4" />Contact</TabsTrigger>
            </TabsList>
            <TabsContent value="services">
                <Card>
                    <CardContent className="space-y-4 pt-6">
                        {barberServices.map(item => (
                            <div key={item.name} className="flex justify-between items-center border-b pb-3 last:border-b-0">
                                <div>
                                    <h4 className="font-medium">{item.name}</h4>
                                    <p className="text-sm text-muted-foreground">{item.duration}</p>
                                </div>
                                <p className="font-semibold">{item.price}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="book">
                <Card>
                    <CardContent className="space-y-4 pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ShadCnCalendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                className="rounded-md border p-0"
                            />
                            <div className="space-y-2">
                                <Label>Select Time</Label>
                                <div className="grid grid-cols-2 gap-2">
                                    {['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM'].map(time => (
                                        <Button key={time} variant="outline">{time}</Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <Input placeholder="Your Name" />
                        <Button className="w-full">Request Appointment (Demo)</Button>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="contact">
                <Card>
                    <CardContent className="space-y-4 pt-6 text-center">
                        <h3 className="text-lg font-semibold">The Sharp Edge Barbers</h3>
                        <p>456 Grooming Ave, Style City, 10001</p>
                        <p className="font-bold">(555) 987-6543</p>
                        <div className="flex justify-center items-center gap-1 text-primary">
                            <Star className="w-5 h-5 fill-primary" />
                            <Star className="w-5 h-5 fill-primary" />
                            <Star className="w-5 h-5 fill-primary" />
                            <Star className="w-5 h-5 fill-primary" />
                            <Star className="w-5 h-5 fill-primary" />
                            <span className="text-muted-foreground ml-2">(879 Reviews)</span>
                        </div>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    );
}

// --- Restaurant Booking Demo ---
function RestaurantBookingDemo() {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle>Reserve Your Table</CardTitle>
                <p className="text-muted-foreground text-sm">Experience unforgettable dining at The Gilded Spoon.</p>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex justify-center">
                     <ShadCnCalendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border"
                    />
                </div>
                <div className="space-y-4">
                    <div>
                        <Label htmlFor="party-size">Party Size</Label>
                        <Select defaultValue="2">
                            <SelectTrigger id="party-size">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map(size => (
                                    <SelectItem key={size} value={String(size)}>{size} person{size > 1 && 's'}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                     <div>
                        <Label htmlFor="time">Time</Label>
                        <Select defaultValue="19:00">
                            <SelectTrigger id="time">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {['17:00', '18:00', '19:00', '20:00', '21:00'].map(time => (
                                    <SelectItem key={time} value={time}>{time}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                     <div>
                        <Label htmlFor="res-name">Full Name</Label>
                        <Input id="res-name" placeholder="Jane Doe" />
                    </div>
                    <Button className="w-full">Find a Table (Demo)</Button>
                </div>
            </CardContent>
        </Card>
    );
}


export function ProjectDetails({ project }: ProjectDetailsProps) {
  // Render specific demo based on project ID
  switch (project.id) {
    case 'project-burger-cafe':
      return <BurgerCafeDemo />;
    case 'project-local-store':
      return <LocalStoreDemo project={project} />;
    case 'project-barber-shop':
      return <BarberShopDemo />;
    case 'project-restaurant-booking':
      return <RestaurantBookingDemo />;
    default:
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
}
