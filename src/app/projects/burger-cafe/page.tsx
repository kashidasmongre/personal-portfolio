
"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowLeft, MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const menuItems = [
  { name: 'Classic Beef Burger', price: '$12.99', description: 'A juicy 1/3 lb beef patty with fresh lettuce, tomato, pickles, and our secret sauce.' },
  { name: 'Spicy Chicken Burger', price: '$11.99', description: 'Crispy fried chicken breast with a spicy kick, jalapeños, and cool ranch coleslaw.' },
  { name: 'Veggie Supreme Burger', price: '$10.99', description: 'A delicious plant-based patty with avocado, sprouts, grilled onions, and vegan mayo.' },
  { name: 'The Double Bacon', price: '$15.99', description: 'Two beef patties, four strips of bacon, cheddar cheese, and BBQ sauce.' },
  { name: 'Loaded Fries', price: '$7.99', description: 'Golden fries topped with melted cheese, bacon bits, and green onions.' },
  { name: 'Onion Rings', price: '$6.99', description: 'Thick-cut and beer-battered, served with a side of chipotle aioli.' },
];

const galleryImages = [
    { id: 'g1', src: 'https://picsum.photos/seed/burger1/600/400', alt: 'Burger and fries meal', hint: 'burger meal' },
    { id: 'g2', src: 'https://picsum.photos/seed/burger2/600/400', alt: 'Customers enjoying food', hint: 'people eating' },
    { id: 'g3', src: 'https://picsum.photos/seed/burger3/600/400', alt: 'Close up of a burger', hint: 'burger closeup' },
    { id: 'g4', src: 'https://picsum.photos/seed/burger4/600/400', alt: 'Interior of the cafe', hint: 'cafe interior' },
]

export default function BurgerCafePage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'project-burger-cafe');
  const { toast } = useToast();

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
        title: "Order Placed!",
        description: "Your delicious burgers are being prepared! (This is a demo)",
    });
  }

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
        <Link href="/" className="absolute top-4 left-4 z-20">
          <Button variant="outline" className="bg-black/50 text-white hover:bg-black/80">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Button>
        </Link>
        <header className="absolute top-0 left-0 right-0 z-10 p-8">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-4xl font-extrabold" style={{ textShadow: '0 0 10px rgba(255,193,7,0.5)' }}>The Burger Joint</h1>
                 <nav className="hidden md:flex gap-6 text-lg">
                    <a href="#menu" className="hover:text-yellow-400">Menu</a>
                    <a href="#about" className="hover:text-yellow-400">About</a>
                    <a href="#contact" className="hover:text-yellow-400">Contact</a>
                </nav>
            </div>
        </header>
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center text-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Delicious burger"
            fill
            className="object-cover opacity-40"
            data-ai-hint="burger hero"
          />
        )}
        <div className="relative z-10 p-4">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight" style={{ textShadow: '0 0 20px rgba(255,193,7,0.7)' }}>
            The Best Burgers in Town
          </h2>
          <p className="mt-4 text-lg md:text-xl text-yellow-300">Home of the Juiciest, Most Flavorful Creations</p>
          <a href="#order">
            <Button size="lg" className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg px-10 py-6">
                Order Online
            </Button>
          </a>
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
            <div className="relative h-80 rounded-lg overflow-hidden">
                <Image src="https://picsum.photos/seed/b-about/800/600" alt="The team at The Burger Joint" fill className="object-cover" data-ai-hint="restaurant team"/>
            </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">Our Famous Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {menuItems.map((item, index) => (
              <Card key={index} className="bg-gray-900 border-yellow-500/30 overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-semibold text-yellow-400">{item.name}</h3>
                    <p className="text-lg font-bold text-white">{item.price}</p>
                  </div>
                  <p className="mt-2 text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       {/* Order Online Section */}
      <section id="order" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-lg text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-yellow-400">Order For Pickup</h2>
          <Card className="bg-gray-800 border-yellow-500/30 text-left">
            <CardContent className="p-6">
                <form className="space-y-4" onSubmit={handleOrder}>
                    <Input placeholder="Your Name" required className="bg-gray-700 border-gray-600 h-12" />
                    <Input type="tel" placeholder="Phone Number" required className="bg-gray-700 border-gray-600 h-12" />
                    <textarea placeholder="Your Order (e.g., 2 Classic Beef, 1 Loaded Fries)" required className="bg-gray-700 border-gray-600 w-full rounded-md p-3 min-h-[100px]"></textarea>
                    <Button type="submit" size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg">
                        Place My Order
                    </Button>
                </form>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Footer */}
      <footer id="contact" className="py-16 text-center text-gray-400 bg-gray-950">
         <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-yellow-400">Find Us</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                <div className="flex items-center gap-3">
                    <MapPin className="text-yellow-400"/>
                    <span>456 Burger Ave, Flavor Town</span>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="text-yellow-400"/>
                    <span>(555) 555-BURGER</span>
                </div>
                <div className="flex items-center gap-3">
                    <Clock className="text-yellow-400"/>
                    <span>Open Daily: 11am - 10pm</span>
                </div>
            </div>
            <p className="mt-12">&copy; {new Date().getFullYear()} The Burger Joint. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}
