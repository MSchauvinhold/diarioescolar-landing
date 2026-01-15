import { useState, useEffect } from 'react';
import { Media } from '../types/news';

interface MediaCarouselProps {
  media: Media[];
  alt: string;
}

export default function MediaCarousel({ media, alt }: MediaCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setCurrentIndex(0);
  }, [media]);

  if (!media || media.length === 0) {
    return null;
  }

  const hasMultiple = media.length > 1;

  const next = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIsLoading(true);
    setCurrentIndex((i) => (i + 1) % media.length);
  };
  const prev = (e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIsLoading(true);
    setCurrentIndex((i) => (i - 1 + media.length) % media.length);
  };

  const current = media[currentIndex];

  if (!current) {
    return null;
  }

  return (
    <div className="relative w-full h-full group">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      )}
      {current.type === 'image' ? (
        <img 
          src={current.url} 
          alt={alt} 
          className="w-full h-full object-cover transition-opacity duration-300"
          onLoad={() => setIsLoading(false)}
          style={{ opacity: isLoading ? 0 : 1 }}
        />
      ) : (
        <video 
          src={current.url} 
          controls 
          className="w-full h-full object-cover"
          onLoadedData={() => setIsLoading(false)}
        />
      )}

      {hasMultiple && (
        <>
          <button
            onClick={(e) => prev(e)}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition z-10"
          >
            ←
          </button>
          <button
            onClick={(e) => next(e)}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition z-10"
          >
            →
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {media.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-white' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
