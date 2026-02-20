import { useState, useEffect } from 'react';

const HERO_BACKGROUNDS = [
  `${import.meta.env.BASE_URL}Main Background Image 1.avif`,
  `${import.meta.env.BASE_URL}Main Background Image 2.avif`,
  `${import.meta.env.BASE_URL}Main Background Image 3.avif`,
  `${import.meta.env.BASE_URL}Main Background Image 4.avif`
];

interface HeroCarouselProps {
  children: React.ReactNode;
  className?: string;
}

export default function HeroCarousel({ children, className = '' }: HeroCarouselProps) {
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    if (HERO_BACKGROUNDS.length <= 1) return;
    const interval = setInterval(() => {
      setHeroIndex((i) => (i + 1) % HERO_BACKGROUNDS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative overflow-hidden text-white min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] ${className}`}>
      {/* Background carousel - images fill section and crop consistently */}
      <div className="absolute inset-0 z-0 min-w-0 min-h-0 flex items-center justify-center">
        {HERO_BACKGROUNDS.map((src, index) => (
          <img
            key={src}
            src={src}
            alt=""
            className="absolute inset-0 w-full h-full min-w-full min-h-full object-cover object-top sm:object-center transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === heroIndex ? 1 : 0,
              zIndex: index === heroIndex ? 0 : -1,
              filter: 'brightness(1.08)'
            }}
            aria-hidden={index !== heroIndex}
          />
        ))}
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 z-[1] bg-black/20 pointer-events-none" aria-hidden="true" />
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </section>
  );
}
