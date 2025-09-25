
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const menuItems = [
  { name: 'Classic Beef Burger', price: '$12.99', description: 'A juicy beef patty with fresh lettuce, tomato, and our secret sauce.' },
  { name: 'Spicy Chicken Burger', price: '$11.99', description: 'Crispy chicken breast with a spicy kick, pickles, and coleslaw.' },
  { name: 'Veggie Supreme Burger', price: '$10.99', description: 'A delicious plant-based patty with avocado, sprouts, and vegan mayo.' },
  { name: 'Loaded Fries', price: '$7.99', description: 'Golden fries topped with cheese, bacon bits, and green onions.' },
];

export default function BurgerCafePage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'project-burger-cafe');

  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
        <Link href="/" className="absolute top-4 left-4 z-20">
          <Button variant="outline" className="bg-black/50 text-white hover:bg-black/80">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Button>
        </Link>
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt="Delicious burger"
            fill
            className="object-cover opacity-40"
          />
        )}
        <div className="relative z-10 p-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight" style={{ textShadow: '0 0 20px rgba(255,193,7,0.7)' }}>
            The Burger Joint
          </h1>
          <p className="mt-4 text-lg md:text-xl text-yellow-300">Home of the Juiciest Burgers in Town</p>
          <Button size="lg" className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-lg">
            Order Now
          </Button>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-yellow-400">Our Menu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {menuItems.map((item, index) => (
              <Card key={index} className="bg-gray-900 border-yellow-500/30 overflow-hidden transition-transform hover:scale-105 duration-300">
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

      {/* Footer */}
      <footer className="py-8 text-center text-gray-400">
        <p>&copy; 2024 The Burger Joint. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
