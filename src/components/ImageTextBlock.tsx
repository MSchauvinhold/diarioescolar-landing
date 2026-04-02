import { useState } from 'react';

interface ImageTextBlockProps {
  image: string;
  title: string;
  role?: string;
}

export default function ImageTextBlock({
  image,
  title,
  role,
}: ImageTextBlockProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8 items-center max-w-6xl mx-auto">
      <div className="relative">
        {!imageLoaded && (
          <div className="w-full h-[360px] bg-gray-200 rounded-lg animate-pulse flex items-center justify-center">
            <div className="text-gray-400">Cargando...</div>
          </div>
        )}
        <img
          src={image}
          alt={title}
          className={`w-full h-[360px] object-cover rounded-lg transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0 absolute top-0'
          }`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div>
        <p className="text-2xl font-bold text-[#2B6389] mb-1">{role}</p>
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      </div>
    </div>
  );
}