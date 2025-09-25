
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
import { Calendar as CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

export default function RestaurantBookingPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'project-restaurant-booking');
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="bg-black text-gray-200 min-h-screen font-serif">
      <Link href="/" className="absolute top-4 left-4 z-20">
        <Button variant="outline" className="bg-black/50 text-white hover:bg-white hover:text-black border-gray-600">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Button>
      </Link>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Elegant restaurant dining room"
            fill
            className="object-cover opacity-40"
          />
        )}
        <div className="relative z-10 p-8 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left side text */}
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-thin tracking-wider uppercase text-white" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)'}}>
                Étoile
              </h1>
              <p className="mt-4 text-xl text-gray-300">
                An unforgettable dining experience under the stars.
              </p>
            </div>
            
            {/* Right side booking form */}
            <div className="bg-black/60 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
                <h2 className="text-3xl font-medium text-center mb-6 text-white">Make a Reservation</h2>
                <form className="space-y-4">
                     <Select>
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
                                className="text-white"
                                classNames={{
                                  day_selected: "bg-white text-black",
                                  day_today: "bg-gray-700 text-white",
                                }}
                            />
                        </PopoverContent>
                    </Popover>
                    <Select>
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
      <footer className="py-8 text-center text-gray-500 bg-black">
        <p>&copy; 2024 Étoile Restaurant. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
