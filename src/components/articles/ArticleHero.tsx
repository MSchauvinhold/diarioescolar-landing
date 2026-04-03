import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { News } from '../../types/news';
import MediaCarousel from '../MediaCarousel';
import { getFullDateWithRelative } from '../../utils/dateUtils';

interface ArticleHeroProps {
  news: News;
}

export default function ArticleHero({ news }: ArticleHeroProps) {
  const location = useLocation();
  const [caption, setCaption] = useState<string | undefined>(news.media[0]?.caption);
  
  return (
    <Link to={`/noticia/${news.id}`} state={{ from: location.pathname }}>
      <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 max-w-8xl mx-auto">
      <div className="h-48 sm:h-[580px] bg-gray-100">
        <MediaCarousel media={news.media} alt={news.title} onCaptionChange={setCaption} />
      </div>
      <div className="p-6">
        {caption && (
          <p className="text-xs text-gray-400 italic mb-2">{caption}</p>
        )}
        <span className="text-xs font-semibold text-[#2B6389] uppercase">
          {news.section}
        </span>
        <h2 className="text-4xl font-bold mt-2 text-gray-900">
          {news.title}
        </h2>
        {news.subtitle && (
          <h3 className="text-xl text-gray-600 mt-1 font-medium">
            {news.subtitle}
          </h3>
        )}
        <p className="text-gray-600 mt-4 text-lg">
          {news.summary}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <time className="text-sm text-gray-700 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {getFullDateWithRelative(news.date)}
          </time>
          <span className="text-sm font-semibold text-[#2B6389] flex items-center gap-1">
            Leer más
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </article>
    </Link>
  );
}
