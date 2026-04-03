import LandingHeader from '../components/LandingHeader';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import ImageTextBlock from '../components/ImageTextBlock';
import GroupPhotoSection from '../components/GroupPhotoSection';
import FadeInSection from '../components/FadeInSection';
import { aboutData } from '../data/about';
import { directivos } from '../data/directivos';
import { personalDocente, personalServicio } from '../data/personal';
import ServiceStaffCard from '../components/ServiceStaffCard';
import { usePageTitle } from '../hooks/usePageTitle';

export default function About() {
  usePageTitle('Quiénes Somos - Escuela Nº 227 "Cnel Simeón Payba"');

  return (
    <div className="min-h-screen bg-gray-50">
      <LandingHeader />

      <main className="fade-in">
        {/* Sección Institución */}
        <section id="institucion" className="w-full bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4">
            <FadeInSection direction="up">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Nuestra institución
              </h2>
            </FadeInSection>
            <div className="bg-white rounded-xl shadow-lg border-l-4 border-[#2B6389] p-8">
              <div className="grid grid-cols-1 md:grid-cols-[780px_1fr] gap-8 items-center">
                <FadeInSection direction="left" delay={100}>
                  <img
                    src={aboutData.image}
                    alt="Edificio de la Escuela Nº 227 Cnel Simeón Payba"
                    className="w-full h-auto md:h-[480px] object-contain md:object-cover rounded-lg"
                    loading="lazy"
                  />
                </FadeInSection>
                <FadeInSection direction="right" delay={200}>
                  <h3 className="text-2xl font-bold text-gray-800 mb-5">{aboutData.title}</h3>
                  <div className="space-y-4">
                    {aboutData.paragraphs.map((p, i) => (
                      <p key={i} className="text-gray-600 leading-relaxed text-base">{p}</p>
                    ))}
                  </div>
                </FadeInSection>
              </div>
            </div>
          </div>
        </section>

        {/* Sección Autoridades */}
        <section id="directivos" className="w-full bg-gray-100 py-12">
          <FadeInSection direction="up">
            <div className="w-full bg-[#2B6389] text-white py-5 text-center mb-8">
              <h1 className="text-3xl font-bold">Autoridades</h1>
            </div>
          </FadeInSection>
          <div className="max-w-4xl mx-auto px-4 space-y-6">
            {directivos.map((directivo, i) => (
              <FadeInSection key={directivo.id} direction={i % 2 === 0 ? 'left' : 'right'} delay={0}>
                <ImageTextBlock authority={directivo} imageRight={false} />
              </FadeInSection>
            ))}
          </div>
        </section>

        {/* Sección Personal Docente */}
        <section id="personal-docente" className="w-full bg-white py-16 px-4">
          <FadeInSection direction="up">
            <div className="w-full bg-[#2B6389] text-white py-5 text-center mb-8">
              <h1 className="text-3xl font-bold">Personal Docente</h1>
            </div>
          </FadeInSection>
          <FadeInSection direction="up" delay={100}>
            <GroupPhotoSection data={personalDocente} />
          </FadeInSection>
        </section>

        <section id="personal-limpieza" className="w-full bg-gray-100 py-16 px-4">
          <FadeInSection direction="up">
            <div className="w-full bg-[#2B6389] text-white py-5 text-center mb-8">
              <h1 className="text-3xl font-bold">Personal de Servicio</h1>
            </div>
          </FadeInSection>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {personalServicio.map((staff, i) => (
                <FadeInSection key={staff.id} direction="up" delay={i * 100}>
                  <ServiceStaffCard staff={staff} />
                </FadeInSection>
              ))}
            </div>
          </div>
        </section>
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
}
