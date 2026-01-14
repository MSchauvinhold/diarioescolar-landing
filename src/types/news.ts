export type Section =
  | 'educacion'
  | 'deportes'
  | 'institucional'
  | 'comunidad';

export type MediaType = 'image' | 'video';

export interface Media {
  type: MediaType;
  url: string;
}

export interface News {
  id: number;
  title: string;
  summary: string;
  media: Media[];
  section: Section;
  date: string;
  subtitle?: string;
}
