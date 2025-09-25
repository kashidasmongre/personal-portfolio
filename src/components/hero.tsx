"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { AnimatedText } from './ui-elements/animated-text';
import { useAnimation } from '@/hooks/use-animation';
import { cn } from '@/lib/utils';
import { MoveRight } from 'lucide-react';

const Hero = () => {
  const profileImage = PlaceHolderImages.find(p => p.id === 'kashi-profile');
  const { ref: sectionRef, isVisible } = useAnimation(0.3);

  const handleScrollTo = (selector: string) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" ref={sectionRef} className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="container z-10 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div className={cn('space-y-6 text-center md:text-left transition-all duration-1000', isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10')}>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            <AnimatedText text="Hi, I’m Kashi Das Mongre 👋" />
          </h1>
          <p className={cn("text-lg text-primary sm:text-xl transition-opacity duration-1000 delay-500", isVisible ? 'opacity-100' : 'opacity-0')}>
            BBA Student | Aspiring Entrepreneur | Tech-driven Innovator
          </p>
          <p className={cn("max-w-md mx-auto md:mx-0 text-muted-foreground transition-opacity duration-1000 delay-700", isVisible ? 'opacity-100' : 'opacity-0')}>
            I help small businesses grow with digital and tech solutions.
          </p>
          <div className={cn("flex flex-col sm:flex-row items-center justify-center gap-4 md:justify-start transition-opacity duration-1000 delay-1000", isVisible ? 'opacity-100' : 'opacity-0')}>
            <Button size="lg" className="group w-full sm:w-auto relative overflow-hidden" onClick={() => handleScrollTo('#contact')}>
              <span className="absolute top-0 left-0 w-full h-full bg-primary-foreground/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              <span className="relative">Hire Me</span>
            </Button>
            <Button size="lg" variant="outline" className="group w-full sm-w-auto" onClick={() => handleScrollTo('#about')}>
              Learn More <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
        <div className={cn("relative mx-auto h-64 w-64 md:h-96 md:w-96 transition-all duration-1000 delay-300", isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90')}>
          {profileImage && (
            <Image
              src={profileImage.imageUrl}
              alt={profileImage.description}
              width={800}
              height={800}
              data-ai-hint={profileImage.imageHint}
              className="rounded-full object-cover border-4 border-primary/50 shadow-2xl"
              style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.5), 0 0 80px hsl(var(--accent) / 0.3)' }}
              priority
            />
          )}
          <div className="absolute inset-0 rounded-full border-2 border-primary animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
