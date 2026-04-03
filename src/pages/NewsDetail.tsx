import { useParams, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { news } from '../data/news';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import MediaCarousel from '../components/MediaCarousel';
import ArticleSmall from '../components/articles/ArticleSmall';
import { getFullDateWithRelative } from '../utils/dateUtils';
import { usePageTitle } from '../hooks/usePageTitle';

export default function NewsDetail() {
  const { id } = useParams();
  const location = useLocation();
  const article = news.find((n) => n.id === Number(id));

  // Scroll al inicio cuando cambia el artículo
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Determinar la sección de origen basado en el referrer o la sección del artículo
  const referrer = location.state?.from || '';
  const getSectionPath = () => {
    if (referrer.includes('/institucional')) return { path: '/institucional', label: 'Institucional' };
    if (referrer.includes('/comunidad')) return { path: '/comunidad', label: 'Comunidad' };
    if (referrer.includes('/pedagogico')) return { path: '/pedagogico', label: 'Pedagógico' };
    if (referrer.includes('/administrativo')) return { path: '/administrativo', label: 'Administrativo' };
    
    // Si no hay referrer, usar la sección del artículo
    if (article) {
      const sectionMap: Record<string, { path: string; label: string }> = {
        'institucional': { path: '/institucional', label: 'Institucional' },
        'comunidad': { path: '/comunidad', label: 'Comunidad' },
        'pedagogico': { path: '/pedagogico', label: 'Pedagógico' },
        'administrativo': { path: '/administrativo', label: 'Administrativo' }
      };
      return sectionMap[article.section.toLowerCase()] || { path: '/', label: 'Inicio' };
    }
    
    return { path: '/', label: 'Inicio' };
  };

  const backLink = getSectionPath();

  // Obtener noticias relacionadas de la misma sección
  const relatedNews = article 
    ? news
        .filter(n => n.section === article.section && n.id !== article.id)
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 3)
    : [];

  usePageTitle(
    article 
      ? `${article.title} - Escuela Nº 227 "Cnel Simeón Payba"` 
      : 'Noticia no encontrada - Escuela Nº 227 "Cnel Simeón Payba"'
  );

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
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
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 fade-in">
        <div className="flex items-center justify-between mb-4">
          <Link to="/" className="text-[#2B6389] hover:underline font-medium">
            ← Volver a Inicio
          </Link>
          {backLink.path !== '/' && (
            <Link to={backLink.path} className="text-[#2B6389] hover:underline font-medium">
              Volver a {backLink.label} →
            </Link>
          )}
        </div>

        <article className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="w-full bg-gray-100">
            <MediaCarousel media={article.media} alt={article.title} contain />
          </div>

          <div className="p-4 sm:p-6 lg:p-8">
            <span className="text-xs font-semibold text-[#2B6389] uppercase">
              {article.section}
            </span>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-gray-900 leading-tight">
              {article.title}
            </h1>

            {article.subtitle && (
              <h2 className="text-xl sm:text-2xl text-gray-700 mt-3 font-medium">
                {article.subtitle}
              </h2>
            )}

            <time className="text-sm text-gray-500 mt-4 block">
              {getFullDateWithRelative(article.date)}
            </time>

            <div className="mt-6 sm:mt-8 text-gray-800 text-base sm:text-lg leading-relaxed prose max-w-none news-content">
              <div dangerouslySetInnerHTML={{ __html: article.content || article.summary }} />
            </div>
          </div>
        </article>

        {relatedNews.length > 0 && (
          <section className="mt-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Noticias relacionadas</h2>
            <div className="grid md:grid-cols-3 gap-5">
              {relatedNews.map((relatedArticle) => (
                <ArticleSmall key={relatedArticle.id} news={relatedArticle} />
              ))}
            </div>
          </section>
        )}
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
