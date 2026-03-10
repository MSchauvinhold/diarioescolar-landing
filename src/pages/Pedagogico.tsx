import { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Sidebar from '../components/Sidebar';
import MobileSidebarButton from '../components/MobileSidebarButton';
import ArticleHero from '../components/articles/ArticleHero';
import ArticleSmall from '../components/articles/ArticleSmall';
import Pagination from '../components/Pagination';
import EmptyState from '../components/EmptyState';
import { useNews } from '../hooks/useNews';
import { usePagination } from '../hooks/usePagination';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Pedagogico() {
  usePageTitle('Pedagógico - Escuela Nº 227 "Cnel Simeón Payba"');
  const { latestNews } = useNews('pedagogico');
  const pagination = usePagination(latestNews.slice(1));

  useEffect(() => {
    pagination.goToPage(1);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-[1600px] mx-auto px-4 py-8 fade-in">
        <div className="flex gap-6">
          <div className="flex-1">
            {latestNews.length === 0 ? (
              <EmptyState section="Pedagógico" />
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
              <Sidebar showClock={true} />
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
