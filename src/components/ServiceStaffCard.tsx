import { useState } from 'react';
import { ServiceStaff } from '../data/personal';

interface ServiceStaffCardProps {
  staff: ServiceStaff;
}

export default function ServiceStaffCard({ staff }: ServiceStaffCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col border-t-4 border-[#2B6389]">
      <div className="relative h-72 bg-white">
        {!imageLoaded && staff.image && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}
        {staff.image ? (
          <img
            src={staff.image}
            alt={staff.name}
            className={`w-full h-full object-contain transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-100">
            <svg className="w-24 h-24 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
            </svg>
          </div>
        )}
      </div>
      <div className="p-5 border-t border-gray-200">
        <h3 className="text-lg font-bold text-gray-800 text-center">{staff.name}</h3>
      </div>
    </div>
  );
}
