"use client";

import { useState, useEffect } from 'react';

const Particles = () => {
  const [particles, setParticles] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 30 }).map((_, i) => {
        const size = Math.random() * 3 + 1;
        const animationDuration = Math.random() * 20 + 10;
        const animationDelay = Math.random() * 10;
        return {
          id: i,
          style: {
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${size}px`,
            height: `${size}px`,
            animation: `float ${animationDuration}s ease-in-out infinite`,
            animationDelay: `${animationDelay}s`,
            opacity: Math.random() * 0.5 + 0.1,
          },
        };
      });
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-primary/50"
          style={particle.style}
        />
      ))}
    </div>
  );
};

export default Particles;
