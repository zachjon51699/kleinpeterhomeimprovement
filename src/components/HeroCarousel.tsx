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
    <section
      className={`relative min-h-0 md:min-h-screen flex flex-col md:flex-row overflow-hidden w-full max-w-[100vw] ${className}`}
    >
      {/* Carousel - on mobile only as tall as image block (16:9), on desktop full section - matches Home */}
      <div className="absolute top-0 left-0 right-0 z-0 min-w-0 w-full max-w-full overflow-hidden bg-gray-800 h-[56.25vw] md:inset-0 md:h-auto">
        {HERO_BACKGROUNDS.map((src, index) => (
          <img
            key={src}
            src={encodeURI(src)}
            alt=""
            className="absolute inset-0 w-full h-full max-w-full max-h-full min-w-0 object-cover object-top md:object-center transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: index === heroIndex ? 1 : 0,
              zIndex: index === heroIndex ? 0 : -1,
              filter: 'brightness(1.08)'
            }}
            aria-hidden={index !== heroIndex}
          />
        ))}
      </div>
      {/* Gradient overlay - matches Home */}
      <div
        className="absolute top-0 left-0 right-0 z-[1] h-[56.25vw] md:inset-0 md:h-auto bg-gradient-to-r from-transparent via-black/10 to-black/50 md:to-black/40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Mobile: image block only (16:9). Desktop: hidden so content overlays full carousel. */}
      <div
        className="relative z-10 w-full aspect-video flex-shrink-0 md:hidden"
        aria-hidden="true"
      />

      {/* Content - below image on mobile, overlays full carousel on desktop */}
      <div className="relative z-10 w-full flex flex-col md:absolute md:inset-0 md:flex md:items-center md:justify-center min-h-0 py-6 md:py-10 md:px-4">
        {children}
      </div>
    </section>
  );
}
