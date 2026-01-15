import { News } from '../types/news';

export interface HomeSlots {
  hero?: News;
  secondary: News[];
  editorial: News[];
  additional: News[];
}

export function mapNewsToSlots(news: News[]): HomeSlots {
  if (news.length === 0) {
    return { secondary: [], editorial: [], additional: [] };
  }

  return {
    hero: news[0],
    secondary: news.slice(1, 3),
    editorial: news.slice(3, 5),
    additional: news.slice(5, 8),
  };
}
