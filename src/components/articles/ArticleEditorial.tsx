import { Link, useLocation } from 'react-router-dom';
import { News } from '../../types/news';
import MediaCarousel from '../MediaCarousel';
import { getFullDateWithRelative } from '../../utils/dateUtils';

interface ArticleEditorialProps {
  news: News;
}

export default function ArticleEditorial({ news }: ArticleEditorialProps) {
  const location = useLocation();
  
  return (
    <Link to={`/noticia/${news.id}`} state={{ from: location.pathname }}>
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col transform hover:-translate-y-1">
      <div className="h-64">
        <MediaCarousel media={news.media} alt={news.title} />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <span className="text-xs font-semibold text-[#2B6389] uppercase">
          {news.section}
        </span>
        <h3 className="text-2xl font-bold mt-2 text-gray-900 line-clamp-2">
          {news.title}
        </h3>
        {news.subtitle && (
          <h4 className="text-lg text-gray-700 mt-1 font-medium line-clamp-1">
            {news.subtitle}
          </h4>
        )}
        <p className="text-gray-600 mt-4 leading-relaxed line-clamp-3 flex-1">
          {news.summary}
        </p>
        <div className="mt-auto pt-4">
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
