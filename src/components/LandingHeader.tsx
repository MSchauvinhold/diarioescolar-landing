import { useState } from 'react';
import { Link } from 'react-router-dom';
import escudo from '../assets/escudo.jpg';
import LiveClock from './LiveClock';

export default function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sections = [
    { id: 'institucion', label: 'Institución' },
    { id: 'directivos', label: 'Autoridades' },
    { id: 'personal-docente', label: 'Personal Docente' },
    { id: 'personal-limpieza', label: 'Personal de Limpieza' },
  ];

  return (
    <header className="bg-white border-b-2 border-gray-900 sticky top-0 z-50 shadow-lg">
      <div className="px-4 flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          <img 
            src={escudo} 
            alt="Logo Institución" 
            className="w-16 h-16 object-contain rounded-full"
          />
          <div>
            <span className="hidden md:inline text-lg font-bold text-gray-900">Escuela Nº 227 "Cnel Simeón Payba"</span>
            <span className="md:hidden text-lg font-serif italic text-gray-700">Nuestra Institucion</span>
          </div>
        </div>

        <div className="flex flex-col items-center md:hidden">
          <LiveClock />
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/"
            className="px-4 py-2 text-sm font-semibold uppercase text-gray-700 hover:bg-[#2B6389]/5 transition"
          >
            Inicio
          </Link>
          <div className="w-px h-6 bg-gray-300 mx-2"></div>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="px-4 py-2 text-sm font-semibold uppercase text-gray-700 hover:bg-[#2B6389]/5 transition"
            >
              {section.label}
            </button>
          ))}
        </nav>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-900"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-3 text-sm font-semibold uppercase text-gray-700 hover:bg-[#2B6389]/5"
          >
            Inicio
          </Link>
          <div className="border-t border-gray-200"></div>
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                scrollToSection(section.id);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left px-4 py-3 text-sm font-semibold uppercase text-gray-700 hover:bg-[#2B6389]/5"
            >
              {section.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}