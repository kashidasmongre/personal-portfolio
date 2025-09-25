
"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, MapPin, Phone, Clock, Mail, Instagram, Facebook, Twitter, UtensilsCrossed, Star, ChefHat } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';
import { useAnimation } from '@/hooks/use-animation';

const menuItems = {
  burgers: [
    { name: 'Classic Beef Burger', price: '$12.99', description: 'A juicy 1/3 lb beef patty with fresh lettuce, tomato, pickles, and our secret sauce.', image: 'https://picsum.photos/seed/b-burger1/400/300', hint: 'classic burger' },
    { name: 'Spicy Chicken Burger', price: '$11.99', description: 'Crispy fried chicken breast with a spicy kick, jalapeños, and cool ranch coleslaw.', image: 'https://picsum.photos/seed/b-burger2/400/300', hint: 'chicken burger' },
    { name: 'Veggie Supreme Burger', price: '$10.99', description: 'A delicious plant-based patty with avocado, sprouts, grilled onions, and vegan mayo.', image: 'https://picsum.photos/seed/b-burger3/400/300', hint: 'veggie burger' },
  ],
  coffee: [
    { name: 'Espresso', price: '$3.50', description: 'A concentrated shot of rich, dark coffee.', image: 'https://picsum.photos/seed/b-coffee1/400/300', hint: 'espresso shot' },
    { name: 'Latte', price: '$5.00', description: 'Smooth espresso with steamed milk and a light layer of foam.', image: 'https://picsum.photos/seed/b-coffee2/400/300', hint: 'latte art' },
    { name: 'Cappuccino', price: '$4.50', description: 'Equal parts espresso, steamed milk, and frothed milk.', image: 'https://picsum.photos/seed/b-coffee3/400/300', hint: 'cappuccino coffee' },
  ],
  sides: [
    { name: 'Loaded Fries', price: '$7.99', description: 'Golden fries topped with melted cheese, bacon bits, and green onions.', image: 'https://picsum.photos/seed/b-side1/400/300', hint: 'loaded fries' },
    { name: 'Onion Rings', price: '$6.99', description: 'Thick-cut and beer-battered, served with a side of chipotle aioli.', image: 'https://picsum.photos/seed/b-side2/400/300', hint: 'onion rings' },
    { name: 'House Salad', price: '$5.99', description: 'Mixed greens with cherry tomatoes, cucumber, and a light vinaigrette.', image: 'https://picsum.photos/seed/b-side3/400/300', hint: 'fresh salad' },
  ],
};

const galleryImages = [
    { id: 'g1', src: 'https://picsum.photos/seed/burger1/600/400', alt: 'Burger and fries meal', hint: 'burger meal' },
    { id: 'g2', src: 'https://picsum.photos/seed/burger2/600/400', alt: 'Customers enjoying food', hint: 'people eating' },
    { id: 'g3', src: 'https://picsum.photos/seed/burger3/600/400', alt: 'Close up of a burger', hint: 'burger closeup' },
    { id: 'g4', src: 'https://picsum.photos/seed/burger4/600/400', alt: 'Interior of the cafe', hint: 'cafe interior' },
    { id: 'g5', src: 'https://picsum.photos/seed/coffee1/600/400', alt: 'Latte art', hint: 'latte art' },
    { id: 'g6', src: 'https://picsum.photos/seed/coffee2/600/400', alt: 'Cafe ambiance', hint: 'cozy cafe' },
]

const SectionWrapper: React.FC<{ id: string; children: React.ReactNode; className?: string }> = ({ id, children, className }) => {
    const { ref, isVisible } = useAnimation(0.2);
    return (
        <section ref={ref} id={id} className={cn("py-20 px-4 sm:px-6 lg:px-8 transition-all duration-1000", isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10', className)}>
            {children}
        </section>
    );
};

export default function BurgerCafePage() {
  const { toast } = useToast();
  const { ref: heroRef, isVisible: heroIsVisible } = useAnimation(0.3);

  const handleFormSubmit = (e: React.FormEvent, title: string, description: string) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    toast({
        title,
        description,
    });
    form.reset();
  }

  const handleScrollTo = (selector: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans antialiased">
       <head>
         <title>The Burger Joint - Crave. Bite. Repeat.</title>
         <meta name="description" content="Home of the Juiciest, Most Flavorful Creations. The Burger Joint combines the best of burgers and coffee in a cozy, modern atmosphere." />
       </head>

        <Link href="/" className="fixed top-4 left-4 z-50 group">
          <Button variant="outline" className="bg-black/50 text-white hover:bg-yellow-500 hover:text-black border-yellow-500/50 transition-all duration-300">
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" /> Back to Portfolio
          </Button>
        </Link>
        <header className="fixed top-0 left-0 right-0 z-40 p-6 transition-all duration-300" id="main-header">
            <div className="container mx-auto flex justify-between items-center">
                <a href="#home" onClick={handleScrollTo('#home')} className="text-3xl font-extrabold text-glow-accent">The Burger Joint</a>
                 <nav className="hidden md:flex gap-6 text-lg">
                    <a href="#about" onClick={handleScrollTo('#about')} className="hover:text-yellow-400 transition-colors">About</a>
                    <a href="#menu" onClick={handleScrollTo('#menu')} className="hover:text-yellow-400 transition-colors">Menu</a>
                    <a href="#booking" onClick={handleScrollTo('#booking')} className="hover:text-yellow-400 transition-colors">Book a Table</a>
                    <a href="#contact" onClick={handleScrollTo('#contact')} className="hover:text-yellow-400 transition-colors">Contact</a>
                </nav>
            </div>
        </header>
      
      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
          <Image
            src="https://picsum.photos/seed/b-hero/1920/1080"
            alt="Delicious burger on a table"
            fill
            priority
            className="object-cover opacity-30 scale-105"
            data-ai-hint="burger hero background"
          />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50" />
        <div className="relative z-10 p-4">
          <h2 className={cn("text-5xl md:text-7xl font-extrabold tracking-tight text-white transition-all duration-1000", heroIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{ textShadow: '0 0 20px rgba(255,193,7,0.7)', transitionDelay: '200ms' }}>
            Crave. Bite. Repeat.
          </h2>
          <p className={cn("mt-4 text-lg md:text-xl text-yellow-300 transition-all duration-1000", heroIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{transitionDelay: '500ms'}}>Home of the Juiciest, Most Flavorful Creations</p>
          <div className={cn("flex flex-col sm:flex-row gap-4 justify-center mt-8 transition-all duration-1000", heroIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8')} style={{transitionDelay: '800ms'}}>
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-10 py-6 transition-transform hover:scale-105" onClick={handleScrollTo('#menu')}>
                  View Menu
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black font-bold text-lg px-10 py-6 transition-transform hover:scale-105">
                  Book a Table
              </Button>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <SectionWrapper id="about">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 flex items-center gap-3"><ChefHat /> Our Story</h2>
                <p className="text-gray-300 leading-relaxed">
                    Founded in 2015, The Burger Joint started as a humble food truck with one mission: to create the perfect burger. We believe in quality ingredients, creative recipes, and a passion for good food.
                </p>
                <p className="text-gray-300 leading-relaxed">
                    Now a beloved local spot, we continue to serve up our classic favorites and new, exciting specials. Every burger is made to order with love. Come taste the difference!
                </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl shadow-yellow-500/10 group">
                <Image src="https://picsum.photos/seed/b-about/800/600" alt="The team at The Burger Joint" fill className="object-cover transition-transform duration-500 group-hover:scale-110" data-ai-hint="restaurant team"/>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300"></div>
            </div>
        </div>
      </SectionWrapper>

      {/* Menu Section */}
      <SectionWrapper id="menu" className="bg-gray-800/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400 flex items-center justify-center gap-3"><UtensilsCrossed/> Our Famous Menu</h2>
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold capitalize mb-8 text-center text-white">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {items.map((item) => (
                  <Card key={item.name} className="bg-gray-900 border-yellow-500/20 overflow-hidden group transition-all duration-300 hover:border-yellow-500/60 hover:shadow-lg hover:shadow-yellow-500/10 hover:-translate-y-2">
                    <div className="aspect-video relative overflow-hidden">
                         <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-500 group-hover:scale-110" data-ai-hint={item.hint}/>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-baseline">
                        <h4 className="text-xl font-semibold text-yellow-400">{item.name}</h4>
                        <p className="text-lg font-bold text-white">{item.price}</p>
                      </div>
                      <p className="mt-2 text-gray-400 text-sm">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Booking Section */}
      <SectionWrapper id="booking">
        <div className="container mx-auto max-w-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400">Book a Table</h2>
          <Card className="bg-gray-800 border-yellow-500/30 text-left transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/10">
            <CardContent className="p-8">
                <form className="space-y-4" onSubmit={(e) => handleFormSubmit(e, "Reservation Request Sent!", "We'll confirm your booking shortly. (This is a demo)")}>
                    <Input placeholder="Your Name" required className="bg-gray-700 border-gray-600 h-12 focus:border-yellow-500 focus:ring-yellow-500" />
                    <Input type="tel" placeholder="Phone Number" required className="bg-gray-700 border-gray-600 h-12 focus:border-yellow-500 focus:ring-yellow-500" />
                    <div className="grid grid-cols-2 gap-4">
                        <Input type="date" required defaultValue={new Date().toISOString().split('T')[0]} className="bg-gray-700 border-gray-600 h-12 focus:border-yellow-500 focus:ring-yellow-500" />
                        <Input type="time" required defaultValue="19:00" className="bg-gray-700 border-gray-600 h-12 focus:border-yellow-500 focus:ring-yellow-500" />
                    </div>
                     <Input type="number" min="1" placeholder="Number of Guests" required className="bg-gray-700 border-gray-600 h-12 focus:border-yellow-500 focus:ring-yellow-500" />
                    <Button type="submit" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg transition-transform hover:scale-105">
                        Find a Table
                    </Button>
                </form>
            </CardContent>
          </Card>
        </div>
      </SectionWrapper>

      {/* Gallery Section */}
      <SectionWrapper id="gallery" className="bg-gray-800/50">
        <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">Photo Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map(img => (
                    <div key={img.id} className="relative aspect-video overflow-hidden rounded-lg group shadow-lg">
                        <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" data-ai-hint={img.hint} />
                         <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-all duration-300"></div>
                    </div>
                ))}
            </div>
        </div>
      </SectionWrapper>
      
      {/* Contact Section */}
      <SectionWrapper id="contact">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 items-start">
            <div>
                 <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400">Get In Touch</h2>
                 <div className="space-y-4 text-lg">
                    <p className="flex items-center gap-4 text-gray-300"><MapPin className="text-yellow-400 w-6 h-6 shrink-0"/><span>456 Burger Ave, Flavor Town, USA</span></p>
                    <p className="flex items-center gap-4 text-gray-300"><Phone className="text-yellow-400 w-6 h-6 shrink-0"/><span>(555) 555-BURGER</span></p>
                    <p className="flex items-center gap-4 text-gray-300"><Mail className="text-yellow-400 w-6 h-6 shrink-0"/><span>hello@theburgerjoint.com</span></p>
                    <p className="flex items-center gap-4 text-gray-300"><Clock className="text-yellow-400 w-6 h-6 shrink-0"/><span>Open Daily: 11am - 10pm</span></p>
                 </div>
                 <div className="mt-8">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12613.344445582963!2d-122.4194156!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a3424497%3A0x4a4d6b6f3c5b8f72!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1622550645663!5m2!1sen!2s" 
                        width="100%" 
                        height="300" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy"
                        className="rounded-lg opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                 </div>
            </div>
            <div>
                 <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400">Send a Message</h2>
                <Card className="bg-gray-800 border-yellow-500/30">
                    <CardContent className="p-6">
                        <form className="space-y-4" onSubmit={(e) => handleFormSubmit(e, "Message Sent!", "We'll get back to you soon. (This is a demo)")}>
                            <Input placeholder="Your Name" required className="bg-gray-700 border-gray-600 h-12 focus:border-yellow-500 focus:ring-yellow-500" />
                            <Input type="email" placeholder="Your Email" required className="bg-gray-700 border-gray-600 h-12 focus:border-yellow-500 focus:ring-yellow-500" />
                            <Textarea placeholder="Your Message" required className="bg-gray-700 border-gray-600 min-h-[120px] focus:border-yellow-500 focus:ring-yellow-500" />
                            <Button type="submit" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg transition-transform hover:scale-105">
                                Send Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="py-16 text-center text-gray-400 bg-gray-950">
         <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">The Burger Joint</h3>
            <div className="flex justify-center gap-6 mb-8">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter /></a>
            </div>
            <p className="text-sm">456 Burger Ave, Flavor Town | (555) 555-BURGER</p>
            <p className="mt-8 text-xs">&copy; {new Date().getFullYear()} The Burger Joint. All Rights Reserved. A demo by Kashi Das Mongre.</p>
        </div>
      </footer>
    </div>
  );
}

    