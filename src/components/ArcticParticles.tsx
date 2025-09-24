import { useEffect, useRef } from "react";

export const ArcticParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "particle";
      
      // Random size between 2-6px
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Random horizontal position
      particle.style.left = Math.random() * 100 + "%";
      
      // Random animation duration between 15-25 seconds
      const duration = Math.random() * 10 + 15;
      particle.style.animationDuration = `${duration}s`;
      
      // Random delay to stagger particles
      particle.style.animationDelay = Math.random() * 5 + "s";
      
      // Random opacity
      particle.style.opacity = (Math.random() * 0.5 + 0.1).toString();
      
      container.appendChild(particle);
      
      // Remove particle after animation
      setTimeout(() => {
        if (container.contains(particle)) {
          container.removeChild(particle);
        }
      }, (duration + 5) * 1000);
    };

    // Create initial particles
    for (let i = 0; i < 30; i++) {
      setTimeout(() => createParticle(), Math.random() * 2000);
    }

    // Continue creating particles
    const interval = setInterval(createParticle, 800);

    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="arctic-particles"
      aria-hidden="true"
    />
  );
};