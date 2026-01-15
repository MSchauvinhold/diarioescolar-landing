import { Link } from 'react-router-dom';
import { News } from '../../types/news';
import MediaCarousel from '../MediaCarousel';
import { getRelativeDate } from '../../utils/dateUtils';

interface ArticleEditorialProps {
  news: News;
}

export default function ArticleEditorial({ news }: ArticleEditorialProps) {
  return (
    <Link to={`/noticia/${news.id}`}>
      <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
      <div className="h-64">
        <MediaCarousel media={news.media} alt={news.title} />
      </div>
      <div className="p-6">
        <span className="text-xs font-semibold text-blue-600 uppercase">
          {news.section}
        </span>
        <h3 className="text-2xl font-bold mt-2 text-gray-900">
          {news.title}
        </h3>
        {news.subtitle && (
          <h4 className="text-lg text-gray-700 mt-1 font-medium">
            {news.subtitle}
          </h4>
        )}
        <p className="text-gray-600 mt-4 leading-relaxed">
          {news.summary}
        </p>
        <time className="text-xs text-gray-500 mt-4 block">
          {getRelativeDate(news.date)}
        </time>
      </div>
    </article>
    </Link>
  );
}
