import { FlagBearersData } from '../types/flagBearers';

export const flagBearers: FlagBearersData = {
  year: 2026,
  flags: [
    {
      type: 'Nacional',
      image: '/abanderados/abanderados-nacion.webp',
      bearers: [
        { name: 'Gutiérrez, Cristian Iván', role: 'Abanderado' },
        { name: 'Terruzi González, Alma', role: '1era Escolta' },
        { name: 'Sosa Ayala Cuello de Souza, Guido', role: '2da Escolta' },
      ],
    },
    {
      type: 'Provincial',
      image: '/abanderados/abanderados-provincia.webp',
      bearers: [
        { name: 'Vega, Abril de los Ángeles', role: 'Abanderada' },
        { name: 'Moraes Carlsson, Alvin Ramiro', role: '1era Escolta' },
        { name: 'Rodríguez, Gabriel Agustín', role: '2do Escolta' },
      ],
    },
  ],
};
