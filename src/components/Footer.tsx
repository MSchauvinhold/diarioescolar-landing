export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="w-full py-12 border-t-4 border-gray-700">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 uppercase">Escuela Nº 227 "Cnel Simeón Payba"</h3>
              <p className="text-gray-400">Diario Escolar Digital</p>
              <p className="text-gray-400 text-sm mt-2">Informando a nuestra comunidad educativa</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contacto</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <p>Direccion: [Calle y Numero]</p>
                <p>Telefono: [Telefono]</p>
                <p>Email: [Email]</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Secciones</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>Educacion</li>
                <li>Deportes</li>
                <li>Institucional</li>
                <li>Comunidad</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-black py-4">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Institucion Educativa - Todos los derechos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
