export type EventType = 'important' | 'upcoming';

export interface Event {
  date: string;
  title: string;
  type: EventType;
}

export const events: Event[] = [
  { date: '2026-02-15', title: 'Inicio de clases', type: 'important' },
  { date: '2026-03-24', title: 'Día de la Memoria', type: 'important' },
  { date: '2026-04-02', title: 'Día del Veterano', type: 'important' },
  { date: '2026-05-01', title: 'Día del Trabajador', type: 'important' },
  { date: '2026-05-25', title: 'Revolución de Mayo', type: 'important' },
  { date: '2026-06-20', title: 'Día de la Bandera', type: 'important' },
  { date: '2026-02-20', title: 'Reunión de padres', type: 'upcoming' },
  { date: '2026-03-10', title: 'Feria del libro', type: 'upcoming' },
  { date: '2026-04-15', title: 'Torneo deportivo', type: 'upcoming' },
];
