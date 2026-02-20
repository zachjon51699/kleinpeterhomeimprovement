import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type ServiceGalleryProps = {
  images: string[];
  title?: string;
  subtitle?: string;
};

export default function ServiceGallery({ images, title = 'Our Work', subtitle }: ServiceGalleryProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [images.length]);

  if (!images.length) return null;

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{title}</h2>
          {subtitle && <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
        </div>

        {/* Contained carousel */}
        <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl">
        <div className="relative w-full aspect-[2/1] min-h-[260px] max-h-[420px] md:min-h-[320px] bg-gray-100">
          {images.map((src, i) => (
            <div
              key={i}
              className="absolute inset-0 w-full transition-opacity duration-700 ease-in-out"
              style={{
                opacity: i === index ? 1 : 0,
                zIndex: i === index ? 1 : 0,
              }}
              aria-hidden={i !== index}
            >
              <img
                src={src}
                alt=""
                className="w-full h-full object-cover"
                loading={i === 0 ? 'eager' : 'lazy'}
                style={{
                  imageRendering: 'high-quality',
                  backfaceVisibility: 'hidden' as const,
                }}
              />
            </div>
          ))}
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-gray-800 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={() => setIndex((i) => (i + 1) % images.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg flex items-center justify-center text-gray-800 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === index ? 'bg-white scale-125' : 'bg-white/60 hover:bg-white/80'
                  }`}
                  aria-label={`Go to image ${i + 1}`}
                />
              ))}
            </div>
          </>
        )}
        </div>
      </div>
    </section>
  );
}
