export function getRelativeDate(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDays < 0) {
    return date.toLocaleDateString('es-AR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  if (diffDays === 0) return 'Hoy';
  if (diffDays === 1) return 'Ayer';
  if (diffDays < 7) return `Hace ${diffDays} días`;
  if (diffDays < 30) return `Hace ${Math.floor(diffDays / 7)} semanas`;
  
  return date.toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export function getFullDateWithRelative(dateString: string): string {
  const date = new Date(dateString);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  const fullDate = date.toLocaleDateString('es-AR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  
  let relative = '';
  if (diffDays === 0) relative = 'hoy';
  else if (diffDays === 1) relative = 'hace 1 día';
  else if (diffDays < 7) relative = `hace ${diffDays} días`;
  else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    relative = weeks === 1 ? 'hace 1 semana' : `hace ${weeks} semanas`;
  } else {
    const months = Math.floor(diffDays / 30);
    relative = months === 1 ? 'hace 1 mes' : `hace ${months} meses`;
  }
  
  return `${fullDate} · ${relative}`;
}
