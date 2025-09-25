
"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowLeft, MapPin, Phone, Clock, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const menuItems = {
  coffee: [
    { name: 'Espresso', price: '$3.50', description: 'A concentrated shot of rich, dark coffee.' },
    { name: 'Latte', price: '$5.00', description: 'Smooth espresso with steamed milk and a light layer of foam.' },
    { name: 'Cappuccino', price: '$4.50', description: 'Equal parts espresso, steamed milk, and frothed milk.' },
  ],
  burgers: [
    { name: 'Classic Beef Burger', price: '$12.99', description: 'A juicy 1/3 lb beef patty with fresh lettuce, tomato, pickles, and our secret sauce.' },
    { name: 'Spicy Chicken Burger', price: '$11.99', description: 'Crispy fried chicken breast with a spicy kick, jalapeños, and cool ranch coleslaw.' },
    { name: 'Veggie Supreme Burger', price: '$10.99', description: 'A delicious plant-based patty with avocado, sprouts, grilled onions, and vegan mayo.' },
  ],
  sides: [
    { name: 'Loaded Fries', price: '$7.99', description: 'Golden fries topped with melted cheese, bacon bits, and green onions.' },
    { name: 'Onion Rings', price: '$6.99', description: 'Thick-cut and beer-battered, served with a side of chipotle aioli.' },
    { name: 'House Salad', price: '$5.99', description: 'Mixed greens with cherry tomatoes, cucumber, and a light vinaigrette.' },
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

export default function BurgerCafePage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'project-burger-cafe');
  const { toast } = useToast();

  const handleFormSubmit = (e: React.FormEvent, title: string, description: string) => {
    e.preventDefault();
    toast({
        title,
        description,
    });
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
        <Link href="/" className="absolute top-4 left-4 z-50">
          <Button variant="outline" className="bg-black/50 text-white hover:bg-black/80">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Button>
        </Link>
        <header className="absolute top-0 left-0 right-0 z-40 p-8">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-4xl font-extrabold" style={{ textShadow: '0 0 10px rgba(255,193,7,0.5)' }}>The Burger Joint</h1>
                 <nav className="hidden md:flex gap-6 text-lg">
                    <a href="#about" className="hover:text-yellow-400">About</a>
                    <a href="#menu" className="hover:text-yellow-400">Menu</a>
                    <a href="#booking" className="hover:text-yellow-400">Book a Table</a>
                    <a href="#contact" className="hover:text-yellow-400">Contact</a>
                </nav>
            </div>
        </header>
      
      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Delicious burger"
            fill
            className="object-cover opacity-40"
            data-ai-hint="burger hero"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-gray-900/50" />
        <div className="relative z-10 p-4">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight" style={{ textShadow: '0 0 20px rgba(255,193,7,0.7)' }}>
            Crave. Bite. Repeat.
          </h2>
          <p className="mt-4 text-lg md:text-xl text-yellow-300">Home of the Juiciest, Most Flavorful Creations</p>
          <div className="flex gap-4 justify-center mt-8">
            <a href="#menu">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-10 py-6">
                  View Menu
              </Button>
            </a>
            <a href="#booking">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-black font-bold text-lg px-10 py-6">
                  Book a Table
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-400">Our Story</h2>
                <p className="text-gray-300 mb-4">
                    Founded in 2015, The Burger Joint started as a humble food truck with one mission: to create the perfect burger. We believe in quality ingredients, creative recipes, and a passion for good food.
                </p>
                <p className="text-gray-300">
                    Now a beloved local spot, we continue to serve up our classic favorites and new, exciting specials. Every burger is made to order with love. Come taste the difference!
                </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-2xl shadow-yellow-500/10">
                <Image src="https://picsum.photos/seed/b-about/800/600" alt="The team at The Burger Joint" fill className="object-cover" data-ai-hint="restaurant team"/>
            </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">Our Famous Menu</h2>
          {Object.entries(menuItems).map(([category, items]) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold capitalize mb-6 text-center text-white">{category}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {items.map((item) => (
                  <Card key={item.name} className="bg-gray-900 border-yellow-500/30 overflow-hidden hover:shadow-lg hover:border-yellow-500/60 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-baseline">
                        <h4 className="text-xl font-semibold text-yellow-400">{item.name}</h4>
                        <p className="text-lg font-bold text-white">{item.price}</p>
                      </div>
                      <p className="mt-2 text-gray-400">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400">Book a Table</h2>
          <Card className="bg-gray-800 border-yellow-500/30 text-left">
            <CardContent className="p-6">
                <form className="space-y-4" onSubmit={(e) => handleFormSubmit(e, "Reservation Request Sent!", "We'll confirm your booking shortly. (This is a demo)")}>
                    <Input placeholder="Your Name" required className="bg-gray-700 border-gray-600 h-12" />
                    <Input type="tel" placeholder="Phone Number" required className="bg-gray-700 border-gray-600 h-12" />
                    <Input type="date" required defaultValue={new Date().toISOString().split('T')[0]} className="bg-gray-700 border-gray-600 h-12" />
                    <Input type="time" required defaultValue="19:00" className="bg-gray-700 border-gray-600 h-12" />
                     <Input type="number" min="1" placeholder="Number of Guests" required className="bg-gray-700 border-gray-600 h-12" />
                    <Button type="submit" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg">
                        Find a Table
                    </Button>
                </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-800">
        <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">Photo Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {galleryImages.map(img => (
                    <div key={img.id} className="relative aspect-video overflow-hidden rounded-lg group shadow-lg">
                        <Image src={img.src} alt={img.alt} fill className="object-cover transition-transform duration-300 group-hover:scale-110" data-ai-hint={img.hint} />
                    </div>
                ))}
            </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-start">
            <div>
                 <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400">Get In Touch</h2>
                 <div className="space-y-4 text-lg">
                    <div className="flex items-center gap-4">
                        <MapPin className="text-yellow-400 w-6 h-6"/>
                        <span>456 Burger Ave, Flavor Town, USA</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="text-yellow-400 w-6 h-6"/>
                        <span>(555) 555-BURGER</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Mail className="text-yellow-400 w-6 h-6"/>
                        <span>hello@theburgerjoint.com</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <Clock className="text-yellow-400 w-6 h-6"/>
                        <span>Open Daily: 11am - 10pm</span>
                    </div>
                 </div>
                 <div className="mt-8">
                     <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12613.344445582963!2d-122.4194156!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a3424497%3A0x4a4d6b6f3c5b8f72!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1622550645663!5m2!1sen!2s" 
                        width="100%" 
                        height="300" 
                        style={{ border: 0 }} 
                        allowFullScreen={false} 
                        loading="lazy"
                        className="rounded-lg opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all"
                    ></iframe>
                 </div>
            </div>
            <div>
                 <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400">Send a Message</h2>
                <Card className="bg-gray-800 border-yellow-500/30">
                    <CardContent className="p-6">
                        <form className="space-y-4" onSubmit={(e) => handleFormSubmit(e, "Message Sent!", "We'll get back to you soon. (This is a demo)")}>
                            <Input placeholder="Your Name" required className="bg-gray-700 border-gray-600 h-12" />
                            <Input type="email" placeholder="Your Email" required className="bg-gray-700 border-gray-600 h-12" />
                            <Textarea placeholder="Your Message" required className="bg-gray-700 border-gray-600 min-h-[120px]" />
                            <Button type="submit" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg">
                                Send Message
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 text-center text-gray-400 bg-gray-950">
         <div className="container mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">The Burger Joint</h3>
            <div className="flex justify-center gap-6 mb-8">
                <a href="#" className="text-gray-400 hover:text-white"><Instagram /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Facebook /></a>
                <a href="#" className="text-gray-400 hover:text-white"><Twitter /></a>
            </div>
            <p className="text-sm">456 Burger Ave, Flavor Town | (555) 555-BURGER</p>
            <p className="mt-8 text-xs">&copy; {new Date().getFullYear()} The Burger Joint. All Rights Reserved. A demo by Kashi Das Mongre.</p>
        </div>
      </footer>
    </div>
  );
}

    