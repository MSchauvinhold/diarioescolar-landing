import { useState } from 'react';
import { Authority } from '../types/authority';

interface AccordionProps {
  directivos: Authority[];
}

export default function DirectivosAccordion({ directivos }: AccordionProps) {
  const [openSections, setOpenSections] = useState<number[]>([]);

  const toggleSection = (id: number) => {
    setOpenSections(prev => 
      prev.includes(id) 
        ? prev.filter(sectionId => sectionId !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="space-y-4">
      {directivos.map((directivo) => {
        const isOpen = openSections.includes(directivo.id);
        
        return (
          <div key={directivo.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <button
              onClick={() => toggleSection(directivo.id)}
              className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
            >
              <span className="text-lg font-semibold text-gray-900 uppercase tracking-wide">
                {directivo.role}
              </span>
              <svg
                className={`w-5 h-5 text-gray-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {isOpen && (
              <div className="p-6 animate-slide-down">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="w-full md:w-1/3">
                    <img
                      src={directivo.image}
                      alt={directivo.name}
                      className="w-full h-64 object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="w-full md:w-2/3">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{directivo.name}</h3>
                    <h4 className="text-lg text-blue-600 font-medium mb-4">{directivo.role}</h4>
                    <p className="text-gray-600 leading-relaxed">{directivo.bio}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}