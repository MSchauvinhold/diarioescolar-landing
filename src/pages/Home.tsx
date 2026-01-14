import { useState } from 'react';
import { news } from '../data/news';
import { Section } from '../types/news';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MediaCarousel from '../components/MediaCarousel';
import ScrollToTop from '../components/ScrollToTop';

export default function Home() {
  const [currentSection, setCurrentSection] = useState<Section | null>(null);

  const filteredNews = currentSection
    ? news.filter((n) => n.section === currentSection)
    : news;

  const sortedNews = [...filteredNews].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const latestNews = currentSection ? sortedNews : sortedNews.slice(0, 8);

  const [hero, secondary1, secondary2, editorial1, editorial2, additional1, additional2, additional3] = latestNews;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentSection={currentSection} onSectionChange={setCurrentSection} />

      <main className="max-w-7xl mx-auto px-4 py-8 transition-opacity duration-300">
        {hero && (
          <section className="mb-8">
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-96">
                <MediaCarousel media={hero.media} alt={hero.title} />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-blue-600 uppercase">
                  {hero.section}
                </span>
                <h2 className="text-4xl font-bold mt-2 text-gray-900">
                  {hero.title}
                </h2>
                <p className="text-gray-600 mt-4 text-lg">
                  {hero.summary}
                </p>
                <time className="text-sm text-gray-500 mt-4 block">
                  {new Date(hero.date).toLocaleDateString('es-AR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </time>
              </div>
            </article>
          </section>
        )}

        {(secondary1 || secondary2) && (
          <section className="grid md:grid-cols-2 gap-6 mb-8">
            {secondary1 && (
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-80">
                  <MediaCarousel media={secondary1.media} alt={secondary1.title} />
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-blue-600 uppercase">
                    {secondary1.section}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 text-gray-900">
                    {secondary1.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    {secondary1.summary}
                  </p>
                  <time className="text-xs text-gray-500 mt-3 block">
                    {new Date(secondary1.date).toLocaleDateString('es-AR')}
                  </time>
                </div>
              </article>
            )}
            {secondary2 && (
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-80">
                  <MediaCarousel media={secondary2.media} alt={secondary2.title} />
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-blue-600 uppercase">
                    {secondary2.section}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 text-gray-900">
                    {secondary2.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    {secondary2.summary}
                  </p>
                  <time className="text-xs text-gray-500 mt-3 block">
                    {new Date(secondary2.date).toLocaleDateString('es-AR')}
                  </time>
                </div>
              </article>
            )}
          </section>
        )}

        {(editorial1 || editorial2) && (
          <section className="grid md:grid-cols-2 gap-6 mb-8">
            {editorial1 && (
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64">
                  <MediaCarousel media={editorial1.media} alt={editorial1.title} />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-blue-600 uppercase">
                    {editorial1.section}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 text-gray-900">
                    {editorial1.title}
                  </h3>
                  {editorial1.subtitle && (
                    <h4 className="text-lg text-gray-700 mt-1 font-medium">
                      {editorial1.subtitle}
                    </h4>
                  )}
                  <p className="text-gray-600 mt-4 leading-relaxed">
                    {editorial1.summary}
                  </p>
                  <time className="text-xs text-gray-500 mt-4 block">
                    {new Date(editorial1.date).toLocaleDateString('es-AR')}
                  </time>
                </div>
              </article>
            )}
            {editorial2 && (
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64">
                  <MediaCarousel media={editorial2.media} alt={editorial2.title} />
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-blue-600 uppercase">
                    {editorial2.section}
                  </span>
                  <h3 className="text-2xl font-bold mt-2 text-gray-900">
                    {editorial2.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    {editorial2.summary}
                  </p>
                  <time className="text-xs text-gray-500 mt-3 block">
                    {new Date(editorial2.date).toLocaleDateString('es-AR')}
                  </time>
                </div>
              </article>
            )}
          </section>
        )}

        {additional1 && (
          <section className="grid md:grid-cols-3 gap-6">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64">
                <MediaCarousel media={additional1.media} alt={additional1.title} />
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold text-blue-600 uppercase">
                  {additional1.section}
                </span>
                <h3 className="text-xl font-bold mt-2 text-gray-900">
                  {additional1.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {additional1.summary}
                </p>
                <time className="text-xs text-gray-500 mt-3 block">
                  {new Date(additional1.date).toLocaleDateString('es-AR')}
                </time>
              </div>
            </article>
            {additional2 && (
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64">
                  <MediaCarousel media={additional2.media} alt={additional2.title} />
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-blue-600 uppercase">
                    {additional2.section}
                  </span>
                  <h3 className="text-xl font-bold mt-2 text-gray-900">
                    {additional2.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    {additional2.summary}
                  </p>
                  <time className="text-xs text-gray-500 mt-3 block">
                    {new Date(additional2.date).toLocaleDateString('es-AR')}
                  </time>
                </div>
              </article>
            )}
            {additional3 && (
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="h-64">
                  <MediaCarousel media={additional3.media} alt={additional3.title} />
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-blue-600 uppercase">
                    {additional3.section}
                  </span>
                  <h3 className="text-xl font-bold mt-2 text-gray-900">
                    {additional3.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    {additional3.summary}
                  </p>
                  <time className="text-xs text-gray-500 mt-3 block">
                    {new Date(additional3.date).toLocaleDateString('es-AR')}
                  </time>
                </div>
              </article>
            )}
          </section>
        )}
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
