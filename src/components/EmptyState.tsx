interface EmptyStateProps {
  section?: string;
}

export default function EmptyState({ section }: EmptyStateProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-12 text-center">
      <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
      <h3 className="text-xl font-bold text-gray-900 mb-2">
        {section ? `No hay noticias en ${section}` : 'No hay noticias disponibles'}
      </h3>
      <p className="text-gray-600">
        Aún no se han publicado noticias{section ? ` en esta sección` : ''}. Vuelve pronto para ver las novedades.
      </p>
    </div>
  );
}