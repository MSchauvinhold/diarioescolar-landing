import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Section } from '../types/news';
import escudo from '../assets/escudo.jpg';
import LiveClock from './LiveClock';

interface HeaderProps {
  currentSection?: Section | null;
  onSectionChange?: (section: Section | null) => void;
}

export default function Header({ }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const sections = [
    { path: '/', label: 'Inicio' },
    { path: '/institucional', label: 'Institucional' },
    { path: '/comunidad', label: 'Comunidad' },
    { path: '/pedagogico', label: 'Pedagógico' },
    { path: '/administrativo', label: 'Administrativo' },
  ];

  return (
    <header className="bg-white border-b-2 border-gray-900 sticky top-0 z-50 shadow-lg">
      <div className="px-4 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <img 
            src={escudo} 
            alt="Logo Institución" 
            className="w-16 h-16 object-contain rounded-full"
          />
          <div>
            <span className="hidden lg:inline text-lg font-bold text-gray-900">Escuela Nº 227 "Cnel Simeón Payba"</span>
            <span className="hidden md:inline lg:hidden text-base font-bold text-gray-900">Escuela Nº 227</span>
          </div>
        </Link>

        <div className="flex flex-col items-center lg:hidden">
          <LiveClock />
        </div>

        <nav className="hidden md:flex items-center gap-1">
          <Link
            to="/quienes-somos"
            className="px-4 py-2 text-sm font-semibold uppercase text-gray-700 hover:bg-gray-100 transition"
          >
            Quiénes Somos
          </Link>
          <div className="w-px h-6 bg-gray-300 mx-2"></div>
          {sections.map((section) => (
            <Link
              key={section.path}
              to={section.path}
              className={`px-4 py-2 text-sm font-semibold uppercase transition relative ${
                isActive(section.path)
                  ? 'bg-[#2B6389]/10 text-[#2B6389] shadow-inner'
                  : 'text-gray-700 hover:bg-[#2B6389]/5'
              }`}
            >
              {section.label}
            </Link>
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
            to="/quienes-somos"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-4 py-3 text-sm font-semibold uppercase text-gray-700 hover:bg-gray-100"
          >
            Quiénes Somos
          </Link>
          <div className="border-t border-gray-200"></div>
          {sections.map((section) => (
            <Link
              key={section.path}
              to={section.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 text-sm font-semibold uppercase ${
                isActive(section.path)
                  ? 'bg-[#2B6389]/10 text-[#2B6389]'
                  : 'text-gray-700 hover:bg-[#2B6389]/5'
              }`}
            >
              {section.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
