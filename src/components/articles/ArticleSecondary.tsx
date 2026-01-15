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
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      <div className="h-80">
        <MediaCarousel media={news.media} alt={news.title} />
      </div>
      <div className="p-4">
        <span className="text-xs font-semibold text-blue-600 uppercase">
          {news.section}
        </span>
        <h3 className="text-2xl font-bold mt-2 text-gray-900">
          {news.title}
        </h3>
        <p className="text-gray-600 mt-2 text-sm">
          {news.summary}
        </p>
        <time className="text-xs text-gray-500 mt-3 block">
          {getRelativeDate(news.date)}
        </time>
      </div>
    </article>
    </Link>
  );
}
