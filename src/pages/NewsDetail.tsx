import { useParams, Link } from 'react-router-dom';
import { news } from '../data/news';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import MediaCarousel from '../components/MediaCarousel';
import { getRelativeDate } from '../utils/dateUtils';
import { usePageTitle } from '../hooks/usePageTitle';

export default function NewsDetail() {
  const { id } = useParams();
  const article = news.find((n) => n.id === Number(id));

  usePageTitle(
    article 
      ? `${article.title} - Diario Escolar` 
      : 'Noticia no encontrada - Diario Escolar'
  );

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header currentSection={null} onSectionChange={() => {}} />
        <main className="max-w-7xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Noticia no encontrada</h1>
          <p className="text-gray-600 mb-8">La noticia que buscas no existe o fue eliminada.</p>
          <Link to="/" className="text-blue-600 hover:underline font-semibold">
            Volver al inicio
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentSection={null} onSectionChange={() => {}} />
      
      <main className="max-w-4xl mx-auto px-4 py-8 fade-in">
        <Link to="/" className="text-blue-600 hover:underline mb-4 inline-block">
          ← Volver al inicio
        </Link>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="h-96">
            <MediaCarousel media={article.media} alt={article.title} />
          </div>

          <div className="p-8">
            <span className="text-xs font-semibold text-blue-600 uppercase">
              {article.section}
            </span>
            
            <h1 className="text-5xl font-bold mt-3 text-gray-900 leading-tight">
              {article.title}
            </h1>

            {article.subtitle && (
              <h2 className="text-2xl text-gray-700 mt-3 font-medium">
                {article.subtitle}
              </h2>
            )}

            <time className="text-sm text-gray-500 mt-4 block">
              {getRelativeDate(article.date)}
            </time>

            <div className="mt-8 text-gray-800 text-lg leading-relaxed">
              <p>{article.summary}</p>
            </div>
          </div>
        </article>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
