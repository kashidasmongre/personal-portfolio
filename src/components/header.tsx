
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const navLinks = [
  { href: '/#about', label: 'About' },
  { href: '/ai-automation', label: 'AI & Automation' },
  { href: '/#services', label: 'Services' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/#projects', label: 'Portfolio' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
     e.preventDefault();
     const targetId = href.split('#')[1];
     if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
     } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
     }
     setIsMenuOpen(false);
  };
  
  const renderNavLink = (link: typeof navLinks[0], isMobile: boolean = false) => {
    const className = isMobile 
      ? "w-full text-center text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
      : "text-sm font-medium text-foreground/80 transition-colors hover:text-primary";

    if (link.href.startsWith('/#')) {
        // If we are already on the homepage, use smooth scroll. Otherwise, use Link.
        if (pathname === '/') {
            return (
                <a key={link.href} href={link.href} onClick={(e) => handleScrollTo(e, link.href)} className={className}>
                    {link.label}
                </a>
            );
        }
        // If on another page, Link component will handle navigation to the homepage and then the browser will handle the hash.
        return (
            <Link key={link.href} href={link.href} passHref>
               <span onClick={() => setIsMenuOpen(false)} className={className} style={{cursor: 'pointer'}}>{link.label}</span>
            </Link>
        )
    }

    return (
      <Link key={link.href} href={link.href}>
        <span onClick={() => setIsMenuOpen(false)} className={className} style={{cursor: 'pointer'}}>{link.label}</span>
      </Link>
    );
  };


  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-background/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="/#home" onClick={(e) => handleScrollTo(e, '/#home')} className="font-headline text-2xl font-bold text-glow-primary">
          KDM
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
             renderNavLink(link)
          ))}
          <a href="/#contact" onClick={(e) => handleScrollTo(e, '/#contact')}>
            <Button size="sm">Hire Me</Button>
          </a>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      <div
        className={cn(
          "absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg md:hidden",
          "transition-transform duration-300 ease-in-out",
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <nav className="flex flex-col items-center gap-6 p-8">
          {navLinks.map((link) => (
            renderNavLink(link, true)
          ))}
          <a href="/#contact" className='w-full' onClick={(e) => handleScrollTo(e, '/#contact')}>
            <Button className='w-full'>Hire Me</Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
