"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export function AnimatedText({ text, className }: AnimatedTextProps) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setDisplayedText(text.substring(0, i + 1));
      i++;
      if (i > text.length) {
        clearInterval(intervalId);
      }
    }, 100);
    return () => clearInterval(intervalId);
  }, [text]);

  return (
    <span className={cn(className, "relative")}>
      {displayedText}
      <span className="absolute right-[-2px] top-0 bottom-0 w-[2px] bg-primary animate-pulse" />
    </span>
  );
}
