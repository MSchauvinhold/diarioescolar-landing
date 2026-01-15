import { Link } from 'react-router-dom';
import { News } from '../../types/news';
import MediaCarousel from '../MediaCarousel';
import { getRelativeDate } from '../../utils/dateUtils';

interface ArticleHeroProps {
  news: News;
}

export default function ArticleHero({ news }: ArticleHeroProps) {
  return (
    <Link to={`/noticia/${news.id}`}>
      <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer">
      <div className="h-96">
        <MediaCarousel media={news.media} alt={news.title} />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold text-blue-600 uppercase">
          {news.section}
        </span>
        <h2 className="text-4xl font-bold mt-2 text-gray-900">
          {news.title}
        </h2>
        <p className="text-gray-600 mt-4 text-lg">
          {news.summary}
        </p>
        <time className="text-sm text-gray-700 mt-4 block flex items-center gap-1">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {getRelativeDate(news.date)}
        </time>
      </div>
    </article>
    </Link>
  );
}
