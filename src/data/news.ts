import { News } from '../types/news';

export const news: News[] = [
  {
    id: 1,
    title: 'Comenzo el ciclo lectivo 2026',
    summary: 'La escuela dio inicio al nuevo ciclo lectivo con una ceremonia de bienvenida para todos los estudiantes y docentes.',
    media: [
      { type: 'image', url: 'https://i.imgur.com/mUPEfcY.jpeg' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800' }
    ],
    section: 'educacion',
    date: '2026-01-10',
  },
  {
    id: 2,
    title: 'Torneo intercolegial de futbol',
    summary: 'Los alumnos participaron del torneo intercolegial obteniendo el segundo lugar en la categoria sub-15.',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800' }
    ],
    section: 'deportes',
    date: '2026-01-08',
  },
  {
    id: 3,
    title: 'Nuevas instalaciones en la biblioteca',
    summary: 'Se inauguraron las nuevas instalaciones de la biblioteca escolar con mas de 2000 libros disponibles.',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800' }

    ],
    section: 'institucional',
    date: '2026-01-12',
  },
  {
    id: 4,
    title: 'Jornada de limpieza comunitaria',
    subtitle: 'Mas de 100 familias participaron',
    summary: 'Familias y estudiantes participaron de la jornada de limpieza en el barrio, recolectando mas de 100kg de residuos. La actividad se realizo en el marco del programa de responsabilidad social de la institucion.',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800' }
    ],
    section: 'comunidad',
    date: '2026-01-05',
  },
  {
    id: 5,
    title: 'Campeonato de ajedrez escolar',
    summary: 'Se realizo el primer campeonato interno de ajedrez con la participacion de 40 estudiantes.',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1560174038-da43ac74f01b?w=800' }
    ],
    section: 'deportes',
    date: '2026-01-15',
  },
  {
    id: 6,
    title: 'Taller de robotica para secundaria',
    summary: 'Comenzaron los talleres de robotica educativa para estudiantes de nivel secundario.',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800' }
    ],
    section: 'educacion',
    date: '2026-01-14',
  },
  {
    id: 7,
    title: 'Feria de ciencias 2026',
    subtitle: 'Mas de 50 proyectos presentados',
    summary: 'Los estudiantes presentaron sus proyectos de investigacion en la feria anual de ciencias. Se destacaron trabajos sobre energia renovable, medio ambiente y tecnologia.',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800' }
    ],
    section: 'educacion',
    date: '2026-01-18',
  },
  {
    id: 8,
    title: 'Encuentro deportivo interescolar',
    summary: 'Se realizo el encuentro deportivo con la participacion de 5 escuelas de la zona. Nuestros alumnos compitieron en atletismo, ciclismo y basquet.',
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1519766304817-4f37bda74a26?w=800' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800' }
    ],
    section: 'deportes',
    date: '2026-01-17',
  },
];
