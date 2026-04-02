export type EventType = 'important' | 'upcoming';

export interface Event {
  date: string;
  title: string;
  type: EventType;
}

export const events: Event[] = [
  { date: '2026-02-15', title: 'Inicio de clases', type: 'important' },
  { date: '2026-03-24', title: 'Día de la Memoria', type: 'important' },
  { date: '2026-04-02', title: 'Día del Veterano - Acto homenaje', type: 'important' },
  { date: '2026-04-17', title: 'Cumpleaños de la escuela - 42 años', type: 'important' },
  { date: '2026-05-01', title: 'Día del Trabajador', type: 'important' },
  { date: '2026-05-25', title: 'Revolución de Mayo', type: 'important' },
  { date: '2026-06-20', title: 'Día de la Bandera', type: 'important' },
  { date: '2026-03-30', title: 'Reunión de capacitación de Alfabetización Inicial con docentes de 1° grado', type: 'upcoming' },
  { date: '2026-03-31', title: 'Participación en el Vía Crucis Viviente - Invitación Colegio San José (Escuelas en Red)', type: 'upcoming' },
  { date: '2026-04-10', title: 'Capacitación con primer ciclo de Alfabetización Inicial', type: 'upcoming' },
  { date: '2026-04-11', title: 'Capacitación Batalla de San Joaquín (2° parte) - 8:00 hs, con escuela 477 (Escuelas en Red)', type: 'upcoming' },
];
