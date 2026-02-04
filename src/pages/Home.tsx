import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import Sidebar from '../components/Sidebar';
import MobileSidebarButton from '../components/MobileSidebarButton';
import ClockCard from '../components/ClockCard';
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

      <main className="max-w-[1400px] mx-auto px-4 py-8 fade-in">
        <div className="flex gap-6">
          <div className="flex-1">
            {slots && (
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
              <Sidebar />
            </div>
          </div>
        </div>
      </main>

      <ScrollToTop />
      <ClockCard />
      <MobileSidebarButton />
      <Footer />
    </div>
  );
}
