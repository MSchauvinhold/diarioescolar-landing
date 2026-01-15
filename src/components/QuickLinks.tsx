export default function QuickLinks() {
  const links = [
    { title: 'Contacto' },
    { title: 'Calendario Escolar' },
    { title: 'Biblioteca Digital' },
    { title: 'Galería de Fotos' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-md p-5 border-t-4 border-gray-800">
      <h3 className="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wide">
        Accesos Rápidos
      </h3>
      <ul className="space-y-2">
        {links.map((link, idx) => (
          <li key={idx}>
            <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-50 transition">
              <span className="text-sm text-gray-800 font-medium">{link.title}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
