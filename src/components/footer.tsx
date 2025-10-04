
"use client";

import { useAnimation } from '@/hooks/use-animation';
import { cn } from '@/lib/utils';

const Footer = () => {
    const { ref, isVisible } = useAnimation(0.1);
  return (
    <footer ref={ref} className="border-t py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className={cn("text-xs sm:text-sm text-muted-foreground transition-opacity duration-1000", isVisible ? "opacity-100" : "opacity-0")}>
          © 2024 Kashi Das Mongre | Web Developer in Bhopal | Built with passion & vision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
