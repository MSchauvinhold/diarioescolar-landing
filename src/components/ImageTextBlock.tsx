import { useState } from 'react';
import { Authority } from '../types/authority';

interface ImageTextBlockProps {
  authority: Authority;
  imageRight?: boolean;
}

export default function ImageTextBlock({ authority, imageRight = false }: ImageTextBlockProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden max-w-4xl mx-auto">
      <div className={`flex flex-col ${imageRight ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className="relative w-full md:w-72 h-72 flex-shrink-0 bg-gray-100">
          {!imageLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
          <img
            src={authority.image}
            alt={authority.name}
            className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        <div className={`flex flex-col justify-center p-8 border-l-4 border-[#2B6389]`}>
          <p className="text-base font-semibold uppercase tracking-widest text-[#2B6389] mb-2">{authority.role}</p>
          <h3 className="text-3xl font-bold text-gray-800">{authority.name}</h3>
        </div>
      </div>
    </div>
  );
}