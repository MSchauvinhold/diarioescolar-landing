import { useMemo } from 'react';
import { news } from '../data/news';
import { Section } from '../types/news';

export function useNews(currentSection: Section | null) {
  const latestNews = useMemo(() => {
    const filtered = currentSection
      ? news.filter((n) => n.section === currentSection)
      : news;

    const sorted = [...filtered].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    return currentSection ? sorted : sorted.slice(0, 8);
  }, [currentSection]);

  return { latestNews };
}
