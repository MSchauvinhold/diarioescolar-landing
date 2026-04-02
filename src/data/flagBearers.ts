import { FlagBearersData } from '../types/flagBearers';

export const flagBearers: FlagBearersData = {
  year: 2026,
  flags: [
    {
      type: 'Nacional',
      image: '/abanderados/abanderados-nacion.webp',
      bearers: [
        { name: 'Nombre 1', role: 'Abanderado/a' },
        { name: 'Nombre 2', role: '1era Escolta' },
        { name: 'Nombre 3', role: '2da Escolta' },
      ],
    },
    {
      type: 'Provincial',
      image: '/abanderados/abanderados-provincia.webp',
      bearers: [
        { name: 'Nombre 1', role: 'Abanderado/a' },
        { name: 'Nombre 2', role: '1era Escolta' },
        { name: 'Nombre 3', role: '2da Escolta' },
      ],
    },
  ],
};
