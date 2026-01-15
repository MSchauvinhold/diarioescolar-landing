import { useState } from 'react';
import { Section } from '../types/news';
import escudo from '../assets/escudo.jpg';
import LiveClock from './LiveClock';

interface HeaderProps {
  currentSection: Section | null;
  onSectionChange: (section: Section | null) => void;
}

export default function Header({ currentSection, onSectionChange }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections: { key: Section | null; label: string }[] = [
    { key: null, label: 'Inicio' },
    { key: 'educacion', label: 'Educacion' },
    { key: 'deportes', label: 'Deportes' },
    { key: 'institucional', label: 'Institucional' },
    { key: 'comunidad', label: 'Comunidad' },
  ];

  const handleSectionClick = (key: Section | null) => {
    onSectionChange(key);
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-white border-b-2 border-gray-900 sticky top-0 z-50 shadow-lg">
      <div className="px-4 flex items-center justify-between h-20">
        <div className="flex items-center gap-3">
          <img 
            src={escudo} 
            alt="Logo Institución" 
            className="w-20 h-20 object-contain rounded-full"
          />
          <div>
            <span className="hidden md:inline text-lg font-bold text-gray-900">Escuela Nº 227 "Cnel Simeón Payba"</span>
            <span className="md:hidden text-lg font-serif italic text-gray-700">Diario Escolar</span>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-serif italic text-gray-700 hidden md:block">Diario Escolar</h1>
          <LiveClock />
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {sections.map((section) => (
            <button
              key={section.label}
              onClick={() => handleSectionClick(section.key)}
              className={`px-4 py-2 text-sm font-semibold uppercase transition relative ${
                currentSection === section.key
                  ? 'bg-gray-900/10 text-gray-900 shadow-inner'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
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
        <nav className="md:hidden border-t border-gray-200">
          {sections.map((section) => (
            <button
              key={section.label}
              onClick={() => handleSectionClick(section.key)}
              className={`block w-full text-left px-4 py-3 text-sm font-semibold uppercase ${
                currentSection === section.key
                  ? 'bg-gray-900/10 text-gray-900 shadow-inner'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              {section.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}
