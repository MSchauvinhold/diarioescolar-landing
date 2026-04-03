import { useState } from 'react';
import { Authority } from '../types/authority';

interface AuthorityCardProps {
  authority: Authority;
  variant?: 'A' | 'B' | 'C' | 'D';
}

export default function AuthorityCard({ authority, variant = 'A' }: AuthorityCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  const renderBadge = () => {
    switch (variant) {
      case 'A':
        return (
          <span className="inline-block bg-[#1a3f5c] text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded mb-2">
            {authority.role}
          </span>
        );
      case 'B':
        return (
          <div className="flex items-center gap-2 mb-2">
            <div className="w-1 h-5 bg-[#2B6389] rounded" />
            <p className="text-xs font-semibold uppercase tracking-widest text-[#2B6389]">{authority.role}</p>
          </div>
        );
      case 'C':
        return (
          <div className="-mx-5 -mt-5 mb-3 bg-[#1a3f5c] text-white px-5 py-2">
            <p className="text-xs font-semibold uppercase tracking-widest">{authority.role}</p>
          </div>
        );
      case 'D':
        return (
          <div className="mb-2">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400 flex-shrink-0" />
              <p className="text-xs font-semibold uppercase tracking-widest text-[#2B6389]">{authority.role}</p>
            </div>
            <div className="border-t border-gray-200 mt-2" />
          </div>
        );
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col border-t-4 border-[#2B6389]">
      <div className="relative h-72 bg-gray-100">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        <img
          src={authority.image}
          alt={authority.name}
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
        />
      </div>
      <div className="p-5">
        {renderBadge()}
        <h3 className="text-lg font-bold text-gray-800">{authority.name}</h3>
      </div>
    </div>
  );
}
