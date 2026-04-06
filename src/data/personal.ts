export interface GroupPhoto {
  title: string;
  image: string;
}

export interface ServiceStaff {
  id: number;
  name: string;
  image?: string;
}

export const personalDocente: GroupPhoto = {
  title: 'Personal Docente',
  image: '/quienes-somos/personal-docente/personal-docente.webp',
};

export const personalServicio: ServiceStaff[] = [
  {
    id: 1,
    name: 'Alejandra Espíndola',
    image: '/quienes-somos/personal-servicio/personaldeservicio-alejandra-espindola.webp',
  },
  {
    id: 2,
    name: 'Fabián Ortiz',
    image:'/quienes-somos/personal-servicio/personaldeservicio-fabian-ortiz.webp',
  },
];