import { Link } from 'react-router-dom';
import { News } from '../../types/news';
import MediaCarousel from '../MediaCarousel';
import { getRelativeDate } from '../../utils/dateUtils';

interface ArticleSecondaryProps {
  news: News;
}

export default function ArticleSecondary({ news }: ArticleSecondaryProps) {
  return (
    <Link to={`/noticia/${news.id}`}>
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col">
      <div className="h-80">
        <MediaCarousel media={news.media} alt={news.title} />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <span className="text-xs font-semibold text-blue-600 uppercase">
          {news.section}
        </span>
        <h3 className="text-2xl font-bold mt-2 text-gray-900 line-clamp-2">
          {news.title}
        </h3>
        <p className="text-gray-600 mt-2 text-sm line-clamp-3 flex-1">
          {news.summary}
        </p>
        <div className="mt-auto pt-3">
          <time className="text-xs text-gray-700 mt-3 block flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {getRelativeDate(news.date)}
          </time>
        </div>
      </div>
    </article>
    </Link>
  );
}
