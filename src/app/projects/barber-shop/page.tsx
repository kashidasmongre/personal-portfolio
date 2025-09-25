
"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowLeft, Scissors, Calendar, Phone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const services = [
  { name: 'Classic Haircut', price: '$35', duration: '30 min' },
  { name: 'Hot Towel Shave', price: '$40', duration: '45 min' },
  { name: 'Beard Trim', price: '$25', duration: '20 min' },
  { name: 'Haircut & Shave Combo', price: '$70', duration: '1 hr 15 min' },
];

export default function BarberShopPage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'project-barber-shop');

  return (
    <div className="bg-zinc-900 text-stone-200 min-h-screen font-['Bebas_Neue',_cursive]">
       <head>
          <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Roboto+Condensed:wght@400;700&display=swap" rel="stylesheet" />
       </head>
        <Link href="/" className="absolute top-4 left-4 z-20">
          <Button variant="outline" className="bg-black/50 text-white hover:bg-black/80 border-stone-600">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Button>
        </Link>
      
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-bold tracking-widest text-amber-400">THE GENTLEMAN'S CUT</h1>
          <nav className="hidden md:flex gap-6 text-xl tracking-wider">
            <a href="#services" className="hover:text-amber-400">Services</a>
            <a href="#booking" className="hover:text-amber-400">Booking</a>
            <a href="#contact" className="hover:text-amber-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Stylish barber shop interior"
            fill
            className="object-cover opacity-30"
          />
        )}
        <div className="relative z-10 p-4">
          <h2 className="text-7xl md:text-9xl font-bold tracking-wider" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.5)' }}>
            PRECISION & STYLE
          </h2>
          <p className="mt-2 text-2xl text-amber-400 tracking-widest">
            CRAFTING THE MODERN GENTLEMAN SINCE 2010
          </p>
          <Button size="lg" className="mt-8 bg-amber-400 hover:bg-amber-500 text-black font-bold text-xl px-10 py-7 tracking-wider">
            Book an Appointment
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-zinc-800/50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 tracking-widest text-amber-400">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service) => (
              <div key={service.name} className="border-l-4 border-amber-400 pl-6">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-3xl tracking-wider">{service.name}</h3>
                  <p className="text-2xl font-['Roboto_Condensed'] font-bold text-white">{service.price}</p>
                </div>
                <p className="text-lg text-stone-400 font-['Roboto_Condensed']">{service.duration}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-24">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-5xl font-bold text-center mb-12 tracking-widest text-amber-400">Book Your Cut</h2>
            <Card className="max-w-md mx-auto bg-zinc-800 border-stone-700 text-left">
                <CardHeader>
                    <CardTitle className="text-2xl tracking-wider text-amber-400">Book an Appointment</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 font-['Roboto_Condensed']">
                    <Input placeholder="Your Name" className="bg-zinc-700 border-stone-600 h-12 text-lg" />
                    <Input type="tel" placeholder="Phone Number" className="bg-zinc-700 border-stone-600 h-12 text-lg" />
                    <Select>
                        <SelectTrigger className="h-12 text-lg bg-zinc-700 border-stone-600">
                            <SelectValue placeholder="Select Service" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-800 border-stone-600 text-stone-200">
                            {services.map(s => <SelectItem key={s.name} value={s.name} className="text-lg">{s.name}</SelectItem>)}
                        </SelectContent>
                    </Select>
                    <Input type="date" className="bg-zinc-700 border-stone-600 h-12 text-lg" />
                    <Button className="w-full bg-amber-400 text-black hover:bg-amber-500 h-12 text-lg tracking-wider">Request Booking</Button>
                </CardContent>
            </Card>
        </div>
      </section>
      
      {/* Footer */}
      <footer id="contact" className="bg-zinc-950 py-10 text-center text-stone-400 font-['Roboto_Condensed']">
        <p className="text-lg">123 Barber Lane, Downtown | (555) 123-4567</p>
        <p className="mt-2 text-amber-500">Walk-ins Welcome | Appointments Recommended</p>
      </footer>
    </div>
  );
}
