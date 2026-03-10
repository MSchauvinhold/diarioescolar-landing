import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ImageTextBlock from '../components/ImageTextBlock';
import GroupPhotoSection from '../components/GroupPhotoSection';
import { aboutData } from '../data/about';
import { directivos } from '../data/directivos';
import { personalDocente, personalLimpieza } from '../data/personal';
import { usePageTitle } from '../hooks/usePageTitle';

export default function About() {
  usePageTitle('Quiénes Somos - Escuela Nº 227 "Cnel Simeón Payba"');

  return (
    <div className="min-h-screen bg-gray-50">
      <LandingHeader />

      <main className="fade-in">
        {/* Sección Institución */}
        <section id="institucion" className="w-full bg-gray-50 py-16">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Nuestra Historia
            </h2>
            <div className="bg-white rounded-xl shadow-lg border-l-4 border-[#2B6389] p-8">
              <div className="grid grid-cols-1 md:grid-cols-[360px_1fr] gap-8 items-center">
                <div>
                  <img
                    src={aboutData.image}
                    alt="Edificio de la Escuela Nº 227 Cnel Simeón Payba"
                    className="w-full h-[360px] object-cover rounded-lg"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{aboutData.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{aboutData.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Autoridades */}
        <section id="directivos" className="w-full bg-gray-50 py-12">
          <div className="w-full bg-[#2B6389] text-white py-5 text-center mb-0">
            <h1 className="text-3xl font-bold">Autoridades</h1>
          </div>
          <div className="px-4">
            {directivos.map((directivo) => (
              <div key={directivo.id}>
                <div className="bg-gray-600 text-white py-2 text-center font-semibold tracking-wide mb-6">
                  <h3 className="text-lg">{directivo.role}</h3>
                </div>
                <div className="mt-6 mb-12">
                  <ImageTextBlock
                    image={directivo.image}
                    title={directivo.name}
                    description={directivo.bio}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sección Personal Docente */}
        <section id="personal-docente" className="w-full bg-white py-16 px-4">
          <div className="w-full bg-[#2B6389] text-white py-5 text-center mb-8">
            <h1 className="text-3xl font-bold">Personal Docente</h1>
          </div>
          <GroupPhotoSection data={personalDocente} />
        </section>

        {/* Sección Personal de Limpieza */}
        <section id="personal-limpieza" className="w-full bg-gray-100 py-16 px-4">
          <div className="w-full bg-[#2B6389] text-white py-5 text-center mb-8">
            <h1 className="text-3xl font-bold">Personal de Limpieza</h1>
          </div>
          <GroupPhotoSection data={personalLimpieza} />
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
