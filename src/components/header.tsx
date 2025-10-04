
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/#about', label: 'About', isExternal: false },
  { href: '/web-development', label: 'Services', isExternal: false },
  { href: '/#projects', label: 'Portfolio', isExternal: false },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
        e.preventDefault();
        const targetId = href.substring(2);
        
        if (window.location.pathname !== '/') {
            window.location.href = `/${href.substring(1)}`;
        } else {
            const targetElement = document.getElementById(targetId);
            targetElement?.scrollIntoView({ behavior: 'smooth' });
        }
    }
    setIsMenuOpen(false);
  };
  
    const renderNavLink = (link: typeof navLinks[0], isMobile: boolean = false) => {
    const className = isMobile 
      ? "w-full text-center text-lg font-medium text-foreground/80 transition-colors hover:text-primary"
      : "text-sm font-medium text-foreground/80 transition-colors hover:text-primary";

    if (link.isExternal) {
      return (
        <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className={className}>
          {link.label}
        </a>
      );
    }
    
    if (link.href.startsWith('/#')) {
        return (
            <a key={link.href} href={link.href} onClick={(e) => handleLinkClick(e, link.href)} className={className}>
                {link.label}
            </a>
        );
    }

    return (
      <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className={className}>
        {link.label}
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
        <a href="/#home" onClick={(e) => handleLinkClick(e, '/#home')} className="font-headline text-2xl font-bold text-glow-primary">
          KDM
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
             renderNavLink(link)
          ))}
          <a href="/#contact" onClick={(e) => handleLinkClick(e, '/#contact')}>
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
          <a href="/#contact" className='w-full' onClick={(e) => handleLinkClick(e, '/#contact')}>
            <Button className='w-full'>Hire Me</Button>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
