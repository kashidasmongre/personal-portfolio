"use client";

import { useAnimation } from '@/hooks/use-animation';
import { cn } from '@/lib/utils';

const Footer = () => {
    const { ref, isVisible } = useAnimation(0.1);
  return (
    <footer ref={ref} className="bg-background py-6">
      <div className="container mx-auto text-center">
        <p className={cn("text-sm text-muted-foreground transition-opacity duration-1000", isVisible ? "opacity-100" : "opacity-0")}>
          © 2025 Kashi Das Mongre | Web Developer in Bhopal | Built with passion & vision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
