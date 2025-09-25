
"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowLeft, Gift, Leaf, PenTool } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const products = [
  { id: 1, name: 'Artisanal Vase', imageHint: 'ceramic vase', imageUrl: 'https://picsum.photos/seed/ls1/400/500', price: '$48' },
  { id: 2, name: 'Woven Blanket', imageHint: 'wool blanket', imageUrl: 'https://picsum.photos/seed/ls2/400/500', price: '$120' },
  { id: 3, name: 'Handmade Mug', imageHint: 'pottery mug', imageUrl: 'https://picsum.photos/seed/ls3/400/500', price: '$32' },
  { id: 4, name: 'Leather Journal', imageHint: 'leather journal', imageUrl: 'https://picsum.photos/seed/ls4/400/500', price: '$55' },
];

const features = [
    { icon: PenTool, title: "Handcrafted Quality", description: "Every item is made with passion by skilled artisans."},
    { icon: Leaf, title: "Sustainable Materials", description: "We prioritize eco-friendly and ethically sourced materials."},
    { icon: Gift, title: "Perfect for Gifting", description: "Find unique and thoughtful gifts for any occasion."},
]

export default function LocalStorePage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'project-local-store');
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
        title: "Subscribed!",
        description: "Thank you for joining our community. (This is a demo)",
    });
  };

  return (
    <div className="bg-[#FBF9F6] text-[#3D3D3D] min-h-screen font-serif">
      <Link href="/" className="absolute top-4 left-4 z-20">
        <Button variant="outline" className="bg-white/50 text-[#3D3D3D] hover:bg-white/80 border-[#3D3D3D]/20">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
        </Button>
      </Link>
      
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-10 p-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold tracking-widest">Aēsop</h1>
          <nav className="hidden md:flex gap-8 text-lg">
            <a href="#shop" className="hover:underline">Shop</a>
            <a href="#about" className="hover:underline">Our Story</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-start">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Artisanal products"
            fill
            className="object-cover"
            data-ai-hint="artisanal products"
          />
        )}
        <div className="relative z-10 p-8 md:p-24 max-w-xl">
          <h2 className="text-5xl md:text-6xl font-medium" style={{ lineHeight: '1.2' }}>
            Crafted with Purpose, <br />
            Designed for Life.
          </h2>
          <p className="mt-6 text-xl text-black/70">
            Discover a curated collection of handcrafted goods that bring beauty and intention to your everyday.
          </p>
          <a href="#shop">
            <Button size="lg" className="mt-8 bg-transparent border-2 border-[#3D3D3D] text-[#3D3D3D] hover:bg-[#3D3D3D] hover:text-white rounded-none text-lg px-10 py-6">
                Explore Collection
            </Button>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            {features.map(feature => (
                <div key={feature.title}>
                    <feature.icon className="mx-auto h-12 w-12 text-[#8B7C67]" />
                    <h3 className="mt-6 text-2xl font-medium">{feature.title}</h3>
                    <p className="mt-2 text-black/60">{feature.description}</p>
                </div>
            ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      <section id="shop" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#EAE6E1]">
        <div className="container mx-auto">
          <h2 className="text-4xl font-medium text-center mb-16">New Arrivals</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group text-center">
                <div className="overflow-hidden bg-white">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    width={400}
                    height={500}
                    data-ai-hint={product.imageHint}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="mt-6 text-xl font-medium">{product.name}</h3>
                <p className="text-md text-black/60">{product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="bg-[#FBF9F6] py-20 px-4">
        <div className="container mx-auto text-center max-w-2xl">
            <h2 className="text-3xl font-medium">Join Our World</h2>
            <p className="mt-4 text-lg text-black/60">
                Be the first to know about new arrivals, exclusive offers, and stories from our workshop.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-4" onSubmit={handleSubscribe}>
                <Input required type="email" placeholder="Your email address" className="bg-transparent border-black/20 rounded-none text-lg flex-grow h-14" />
                <Button type="submit" className="bg-[#3D3D3D] text-white hover:bg-black rounded-none text-lg h-14 px-8">Subscribe</Button>
            </form>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-[#EAE6E1] py-8 text-center text-black/50">
        <p>&copy; {new Date().getFullYear()} Aēsop. Timeless Goods.</p>
      </footer>
    </div>
  );
}
