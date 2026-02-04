export interface GroupPhoto {
  title: string;
  image: string;
  members: string[];
}

export const personalDocente: GroupPhoto = {
  title: 'Personal Docente',
  image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200',
  members: [
    'Prof. Nombre Apellido - Matemáticas',
    'Prof. Nombre Apellido - Lengua',
    'Prof. Nombre Apellido - Ciencias Naturales',
    'Prof. Nombre Apellido - Ciencias Sociales',
    'Prof. Nombre Apellido - Educación Física',
    'Prof. Nombre Apellido - Inglés',
    'Prof. Nombre Apellido - Plástica',
    'Prof. Nombre Apellido - Música',
  ],
};

export const personalLimpieza: GroupPhoto = {
  title: 'Personal de Limpieza',
  image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1200',
  members: [
    'Nombre Apellido',
    'Nombre Apellido',
    'Nombre Apellido',
    'Nombre Apellido',
  ],
};