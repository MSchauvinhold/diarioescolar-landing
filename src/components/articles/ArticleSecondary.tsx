import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { News } from '../../types/news';
import MediaCarousel from '../MediaCarousel';
import { getFullDateWithRelative } from '../../utils/dateUtils';

interface ArticleSecondaryProps {
  news: News;
}

export default function ArticleSecondary({ news }: ArticleSecondaryProps) {
  const location = useLocation();
  const [caption, setCaption] = useState<string | undefined>(news.media[0]?.caption);
  
  return (
    <Link to={`/noticia/${news.id}`} state={{ from: location.pathname }}>
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col transform hover:-translate-y-1">
      <div className="h-48 sm:h-80 bg-gray-100">
        <MediaCarousel media={news.media} alt={news.title} onCaptionChange={setCaption} />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        {caption && (
          <p className="text-xs text-gray-400 italic mb-2">{caption}</p>
        )}
        <span className="text-xs font-semibold text-[#2B6389] uppercase">
          {news.section}
        </span>
        <h3 className="text-2xl font-bold mt-2 text-gray-900 line-clamp-2">
          {news.title}
        </h3>
        {news.subtitle && (
          <p className="text-sm text-gray-500 mt-1 line-clamp-1">
            {news.subtitle}
          </p>
        )}
        <p className="text-gray-600 mt-2 text-sm line-clamp-3 flex-1">
          {news.summary}
        </p>
        <div className="mt-auto pt-3">
          <div className="flex items-center justify-between">
            <time className="text-xs text-gray-700 flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {getFullDateWithRelative(news.date)}
            </time>
            <span className="text-xs font-semibold text-[#2B6389] flex items-center gap-1">
              Leer más
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </article>
    </Link>
  );
}
