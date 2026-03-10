import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Sidebar from '../components/Sidebar';
import MobileSidebarButton from '../components/MobileSidebarButton';
import ArticleHero from '../components/articles/ArticleHero';
import ArticleSecondary from '../components/articles/ArticleSecondary';
import ArticleEditorial from '../components/articles/ArticleEditorial';
import ArticleSmall from '../components/articles/ArticleSmall';
import { useNews } from '../hooks/useNews';
import { mapNewsToSlots } from '../utils/mapNewsToSlots';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle('Escuela Nº 227 "Cnel Simeón Payba"');
  const { latestNews } = useNews(null);
  const slots = mapNewsToSlots(latestNews);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-[1600px] mx-auto px-4 py-8 fade-in">
        <div className="flex gap-6">
          <div className="flex-1">
            {latestNews.length === 0 ? (
              <div className="bg-white rounded-lg shadow-md p-12 text-center">
                <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-900 mb-2">No hay noticias disponibles</h3>
                <p className="text-gray-600">Aún no se han publicado noticias. Vuelve pronto para ver las novedades.</p>
              </div>
            ) : slots && (
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
