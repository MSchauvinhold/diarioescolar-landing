import { useState } from 'react';
import { flagBearers } from '../data/flagBearers';

export default function FlagBearersBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = flagBearers.flags[currentIndex];
  const hasMultiple = flagBearers.flags.length > 1;

  const prev = () => setCurrentIndex((i) => (i - 1 + flagBearers.flags.length) % flagBearers.flags.length);
  const next = () => setCurrentIndex((i) => (i + 1) % flagBearers.flags.length);

  return (
    <section className="relative w-full h-[750px] mb-12 rounded-lg overflow-hidden shadow-xl group">
      <img
        key={current.image}
        src={current.image}
        alt={`Abanderados ${current.type}`}
        className="w-full h-full object-cover transition-opacity duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 md:via-black/40 to-transparent flex items-end">
        <div className="w-full p-3 md:p-8 text-white">
          <h2 className="text-base md:text-4xl font-bold mb-1 md:mb-4">
            ABANDERADOS {flagBearers.year} - BANDERA {current.type.toUpperCase()}
          </h2>
          <div className="grid grid-cols-3 gap-1 md:gap-4">
            {current.bearers.map((bearer, index) => (
              <div key={index} className="bg-white/20 md:bg-white/10 backdrop-blur-sm rounded-lg p-1.5 md:p-4">
                <p className="font-semibold text-xs md:text-lg">{bearer.name}</p>
                <p className="text-xs md:text-sm text-gray-200">{bearer.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {hasMultiple && (
        <>
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition z-10"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition z-10"
          >
            →
          </button>
          <div className="absolute top-3 right-3 flex gap-2">
            {flagBearers.flags.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition ${
                  i === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  );
}
