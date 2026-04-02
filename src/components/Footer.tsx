import { Link } from 'react-router-dom';
import escudo from '../assets/escudo.jpg';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="w-full py-12 border-t-4 border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3">
                <img src={escudo} alt="Escudo Escuela 227" className="w-10 h-10 rounded-full object-cover" />
                <h3 className="text-xl font-bold uppercase">Escuela Nº 227 "Cnel Simeón Payba"</h3>
              </div>
              <p className="text-gray-400 text-sm mt-2">Informando a nuestra comunidad educativa</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-3 text-gray-400 text-sm">
                <a
                  href="https://maps.app.goo.gl/eYmwL1FwvwQxBx4ZA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Ver ubicación en Google Maps
                </a>
                <a
                  href="https://www.instagram.com/simeonpayba?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-white transition"
                >
                  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @simeonpayba
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Secciones</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/quienes-somos" className="text-gray-400 hover:text-white transition">Quienes somos</Link></li>
                <li><Link to="/institucional" className="text-gray-400 hover:text-white transition">Institucional</Link></li>
                <li><Link to="/comunidad" className="text-gray-400 hover:text-white transition">Comunidad</Link></li>
                <li><Link to="/pedagogico" className="text-gray-400 hover:text-white transition">Pedagógico</Link></li>
                <li><Link to="/administrativo" className="text-gray-400 hover:text-white transition">Administrativo</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Institucion Educativa
          </p>
        </div>
      </div>
    </footer>
  );
}
