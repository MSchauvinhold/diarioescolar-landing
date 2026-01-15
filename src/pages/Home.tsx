import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Section } from '../types/news';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Pagination from '../components/Pagination';
import Sidebar from '../components/Sidebar';
import MobileSidebarButton from '../components/MobileSidebarButton';
import ArticleHero from '../components/articles/ArticleHero';
import ArticleSecondary from '../components/articles/ArticleSecondary';
import ArticleEditorial from '../components/articles/ArticleEditorial';
import ArticleSmall from '../components/articles/ArticleSmall';
import { useNews } from '../hooks/useNews';
import { usePagination } from '../hooks/usePagination';
import { mapNewsToSlots } from '../utils/mapNewsToSlots';
import { usePageTitle } from '../hooks/usePageTitle';

const SECTION_NAMES: Record<Section, string> = {
  educacion: 'Educación',
  deportes: 'Deportes',
  institucional: 'Institucional',
  comunidad: 'Comunidad',
};

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section | null>(null);
  const navigate = useNavigate();
  const { latestNews } = useNews(currentSection);
  const isHomePage = currentSection === null;
  const slots = isHomePage ? mapNewsToSlots(latestNews) : null;

  const pageTitle = currentSection
    ? `${SECTION_NAMES[currentSection]} - Diario Escolar`
    : 'Diario Escolar - Escuela Nº 227 "Cnel Simeón Payba"';
  
  usePageTitle(pageTitle);

  const handleSectionChange = (section: Section | null) => {
    setCurrentSection(section);
    navigate('/');
  };

  const filteredForSection = isHomePage ? latestNews.slice(1) : latestNews.slice(1);
  const pagination = usePagination(filteredForSection);

  useEffect(() => {
    pagination.goToPage(1);
  }, [currentSection]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentSection={currentSection} onSectionChange={handleSectionChange} />

      <main className="max-w-[1400px] mx-auto px-4 py-8 fade-in">
        <div className="flex gap-6">
          <div className="flex-1">
            {latestNews.length === 0 ? (
              <div className="text-center py-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">No hay noticias disponibles</h2>
                <p className="text-gray-600">Aún no se han publicado noticias en esta sección.</p>
              </div>
            ) : isHomePage ? (
          slots && (
            <>
              {slots.hero && (
                <section className="mb-8">
                  <ArticleHero news={slots.hero} />
                </section>
              )}

              {slots.secondary.length > 0 && (
                <section className="grid md:grid-cols-2 gap-5 mb-8">
                  {slots.secondary.map((news) => (
                    <ArticleSecondary key={news.id} news={news} />
                  ))}
                </section>
              )}

              {slots.editorial.length > 0 && (
                <section className="grid md:grid-cols-2 gap-5 mb-8">
                  {slots.editorial.map((news) => (
                    <ArticleEditorial key={news.id} news={news} />
                  ))}
                </section>
              )}

              {slots.additional.length > 0 && (
                <section className="grid md:grid-cols-3 gap-5">
                  {slots.additional.map((news) => (
                    <ArticleSmall key={news.id} news={news} />
                  ))}
                </section>
              )}
            </>
          )
        ) : (
          <>
            {latestNews[0] && (
              <section className="mb-8">
                <ArticleHero news={latestNews[0]} />
              </section>
            )}
            {pagination.items.length > 0 && (
              <>
                <section className="grid md:grid-cols-3 gap-5">
                  {pagination.items.map((news) => (
                    <ArticleSmall key={news.id} news={news} />
                  ))}
                </section>
                <Pagination
                  currentPage={pagination.currentPage}
                  totalPages={pagination.totalPages}
                  hasNext={pagination.hasNext}
                  hasPrev={pagination.hasPrev}
                  onNext={pagination.nextPage}
                  onPrev={pagination.prevPage}
                  onGoTo={pagination.goToPage}
                />
              </>
            )}
          </>
        )}
          </div>

          <div className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-28">
              <Sidebar />
            </div>
          </div>
        </div>
      </main>

      <ScrollToTop />
      <MobileSidebarButton />
      <Footer />
    </div>
  );
}
