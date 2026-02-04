import { flagBearers } from '../data/flagBearers';

export default function FlagBearersBanner() {
  return (
    <section className="relative w-full h-[500px] mb-12 rounded-lg overflow-hidden shadow-xl">
      <img
        src={flagBearers.image}
        alt="Abanderados"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 md:via-black/40 to-transparent flex items-end">
        <div className="w-full p-4 md:p-8 text-white">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">Abanderados {flagBearers.year}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
            {flagBearers.bearers.map((bearer, index) => (
              <div key={index} className="bg-white/20 md:bg-white/10 backdrop-blur-sm rounded-lg p-2 md:p-4">
                <p className="font-semibold text-sm md:text-lg">{bearer.name}</p>
                <p className="text-xs md:text-sm text-gray-200">{bearer.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
