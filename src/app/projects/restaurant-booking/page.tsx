
"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { cn } from '@/lib/utils';
import { Calendar as CalendarIcon, Clock, Phone, MapPin } from 'lucide-react';
import { format } from 'date-fns';
import { useToast } from '@/hooks/use-toast';

const menuHighlights = [
    { name: 'Seared Scallops', description: 'With saffron risotto and asparagus.'},
    { name: 'Filet Mignon', description: '8oz center-cut with truffle mashed potatoes.'},
    { name: 'Lobster Thermidor', description: 'Rich, creamy, and baked to perfection.'},
]

const galleryImages = [
    { id: 'r1', src: 'https://picsum.photos/seed/resto1/600/400', alt: 'Elegant main course', hint: 'gourmet food' },
    { id: 'r2', src: 'https://picsum.photos/seed/resto2/600/400', alt: 'Fine wine selection', hint: 'wine glasses' },
    { id: 'r3', src: 'https://picsum.photos/seed/resto3/600/400', alt: 'Dessert masterpiece', hint: 'fancy dessert' },
    { id: 'r4', src: 'https://picsum.photos/seed/resto4/600/400', alt: 'Restaurant ambient lighting', hint: 'restaurant ambiance' },
]

export default function RestaurantBookingPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'project-restaurant-booking');
  const [date, setDate] = React.useState<Date>();
  const { toast } = useToast();

  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!date) {
        toast({ variant: 'destructive', title: 'Please select a date.' });
        return;
    }
    toast({
        title: "Reservation Request Sent!",
        description: "We are checking for availability. You'll receive a confirmation shortly. (This is a demo)",
    });
  }

  return (
    <div className="bg-black text-gray-200 min-h-screen font-serif">
        <Link href="/" className="absolute top-4 left-4 z-20">
            <Button variant="outline" className="bg-black/50 text-white hover:bg-white hover:text-black border-gray-600">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
            </Button>
        </Link>
        <header className="absolute top-0 left-0 right-0 z-10 p-8">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-4xl md:text-5xl font-thin tracking-wider uppercase text-white">Étoile</h1>
                <nav className="hidden md:flex gap-6 text-lg">
                    <a href="#menu" className="hover:text-gray-300">Menu</a>
                    <a href="#gallery" className="hover:text-gray-300">Gallery</a>
                    <a href="#contact" className="hover:text-gray-300">Contact</a>
                </nav>
            </div>
        </header>
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Elegant restaurant dining room"
            fill
            className="object-cover opacity-40"
            data-ai-hint="elegant restaurant"
          />
        )}
        <div className="relative z-10 p-8 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left side text */}
            <div className="text-center md:text-left">
              <h2 className="text-5xl md:text-7xl font-thin tracking-wider uppercase text-white" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>
                Experience a Culinary Journey
              </h2>
              <p className="mt-4 text-xl text-gray-300">
                An unforgettable dining experience under the stars.
              </p>
            </div>
            
            {/* Right side booking form */}
            <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
                <h3 className="text-3xl font-medium text-center mb-6 text-white">Make a Reservation</h3>
                <form className="space-y-4" onSubmit={handleReservation}>
                     <Select required>
                        <SelectTrigger className="h-12 text-base bg-transparent border-gray-600 text-white">
                            <SelectValue placeholder="Party Size" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-gray-600 text-gray-200">
                           {[...Array(8)].map((_, i) => <SelectItem key={i} value={`${i + 1}`} className="text-base">{i+1} Guest{i > 0 && 's'}</SelectItem>)}
                        </SelectContent>
                    </Select>
                     <Popover>
                        <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn(
                            "w-full justify-start text-left font-normal h-12 text-base bg-transparent border-gray-600 text-white hover:bg-black/20 hover:text-white",
                            !date && "text-muted-foreground"
                            )}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : <span>Pick a date</span>}
                        </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0 bg-black border-gray-600" align="start">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                                disabled={(d) => d < new Date(new Date().setDate(new Date().getDate() - 1))}
                                className="text-white"
                                classNames={{
                                  day_selected: "bg-white text-black",
                                  day_today: "bg-gray-700 text-white",
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                    <Select required>
                        <SelectTrigger className="h-12 text-base bg-transparent border-gray-600 text-white">
                            <SelectValue placeholder="Time" />
                        </SelectTrigger>
                        <SelectContent className="bg-black border-gray-600 text-gray-200">
                           {['6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'].map((time) => 
                           <SelectItem key={time} value={time} className="text-base">{time}</SelectItem>
                           )}
                        </SelectContent>
                    </Select>
                    <Button type="submit" className="w-full bg-white text-black hover:bg-gray-200 h-12 text-base font-bold">
                        Find a Table
                    </Button>
                </form>
            </div>
        </div>
      </section>

      {/* Menu Highlights Section */}
      <section id="menu" className="py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-thin tracking-wider uppercase mb-12">Signature Dishes</h2>
            <div className="grid md:grid-cols-3 gap-12">
                {menuHighlights.map(item => (
                    <div key={item.name}>
                        <h3 className="text-2xl text-white mb-2">{item.name}</h3>
                        <p className="text-gray-400">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-zinc-900/70">
        <div className="container mx-auto px-4">
            <h2 className="text-4xl font-thin tracking-wider uppercase text-center mb-12">A Glimpse of Étoile</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {galleryImages.map(img => (
                    <div key={img.id} className="relative aspect-video overflow-hidden group">
                        <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-110" data-ai-hint={img.hint} />
                    </div>
                ))}
            </div>
        </div>
      </section>

      <footer id="contact" className="py-16 text-center text-gray-500 bg-black">
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 text-gray-300">
                 <div className="flex items-center gap-3">
                    <MapPin/>
                    <span>789 Celestial Ave, Metro City</span>
                </div>
                <div className="flex items-center gap-3">
                    <Phone/>
                    <span>(555) 987-6543</span>
                </div>
                <div className="flex items-center gap-3">
                    <Clock/>
                    <span>Dinner Service: 5pm - 11pm</span>
                </div>
            </div>
            <p className="mt-12 text-gray-500">&copy; {new Date().getFullYear()} Étoile Restaurant. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
