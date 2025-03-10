import { useEffect, useRef } from 'react';

export default function HeroBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const createRune = () => {
      const rune = document.createElement('div');
      rune.className = 'rune';
      rune.style.left = `${Math.random() * 100}%`;
      rune.style.animationDelay = `${Math.random() * 4}s`;
      rune.style.animationDuration = `${4 + Math.random() * 4}s`;
      container.appendChild(rune);

      setTimeout(() => {
        rune.remove();
      }, 8000);
    };

    const interval = setInterval(createRune, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <div className="northern-lights" />
      <div className="northern-lights" style={{ animationDelay: '-4s' }} />
    </div>
  );
}