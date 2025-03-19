'use client';
import React, { FC, useEffect, useRef, useState } from 'react';

import MainNav from '@/app/components/navs/MainNav';
import FooterSection from '@/app/components/navs/FooterSection';
import ContactRedirectionButton from '@/app/components/ContactRedirectionButton';
import PcServices from '../components/servicesMenus/pcServices';
import MServices from '../components/servicesMenus/mServices';
import { useLanguage } from '@/app/context/LanguageContext'; // Importar el hook del contexto

interface ServiciosProps {}

const Servicios: FC<ServiciosProps> = ({}) => {
  const { lang } = useLanguage(); // Usar el hook del contexto para obtener el idioma
  const [section, setSection] = useState('');
  const [selectedService] = useState('none');

  const footerRef = useRef<HTMLDivElement>(null);
  const [isNearFooter, setIsNearFooter] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      const footerTop = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsNearFooter(footerTop < windowHeight + 60);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(true);
    }, 8000);

    return () => clearTimeout(timer);
  }, []);

  const closeMessage = () => {
    setShowMessage(false);
  };

  return (
    <div
      className="relative flex flex-col min-h-screen w-full justify-between text-white"
      style={{
        backgroundImage: 'url(/background/bgrnd.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="fixed top-0 left-0 w-full z-50">
        <MainNav section={section} setSection={setSection} />
      </div>
      <div className="flex flex-row">
        <div className="hidden md:block">
          <PcServices selectedService={selectedService} lang={lang} />
        </div>

        <div className="block md:hidden fixed bottom-0 left-0 w-full z-50">
          <MServices selectedService={selectedService} lang={lang} />
        </div>

        <div
          className="flex flex-col ml-0 md:ml-64 mt-24 bg-gray-900 bg-opacity-70 min-h-screen p-24"
          style={{ marginTop: '75px' }}
        >
          <div className="p0 p-5 mb-96">
            {lang === 'ESP' && <p className="text-4xl">Nuestros servicios</p>}
            {lang === 'ENG' && <p className="text-4xl">Our Services</p>}
            {lang === 'ESP' && (
              <>
                <p className="pt-8 pr-0 md:pr-36">
                  Ofrecemos consultoría estratégica de contenido para optimizar tu presencia en línea. A través de un análisis profundo de tu marca y audiencia, desarrollamos estrategias de contenido que maximizan el impacto y el alcance, asegurando que tu mensaje resuene efectivamente con tu público objetivo.
                </p>
                <p className="pt-8 pr-0 md:pr-36">
                  Nos especializamos en la creación y distribución de notas de prensa que capturan la atención de los medios de comunicación y potenciales clientes. Nuestra experiencia en redacción y relaciones públicas asegura una cobertura significativa, generando visibilidad y credibilidad para tu marca.
                </p>
              </>
            )}

            {lang === 'ENG' && (
              <>
                <p className="pt-8 pr-0 md:pr-36">
                  We offer strategic content consulting to optimize your online presence. Through in-depth analysis of your brand and audience, we develop content strategies that maximize impact and reach, ensuring your message effectively resonates with your target audience.
                </p>
                <p className="pt-8 pr-0 md:pr-36">
                  We specialize in creating and distributing press releases that capture the attention of the media and potential clients. Our expertise in writing and public relations ensures meaningful coverage, generating visibility and credibility for your brand.
                </p>
              </>
            )}

            {showMessage && (
              <div
                className="hidden md:block absolute top-24 left-56 text-sm opacity-80 bg-yellow-300"
                style={{
                  zIndex: 1000,
                  fontWeight: 'normal',
                  padding: '10px 20px',
                  borderRadius: '5px',
                  color: 'white',
                }}
              >
                <div className="flex flex-row items-center justify-between">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 text-gray-700"
                    >
                      <path d="M14 19l-7-7 7-7" />
                    </svg>
                    {lang === 'ESP' && <p className="max-w-96 px-5 text-gray-700">Haz click para más detalles</p>}
                    {lang === 'ENG' && <p className="max-w-96 px-5 text-gray-700">Click for more details</p>}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="cursor-pointer text-gray-700"
                      onClick={closeMessage}
                    >
                      <path d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            <div
              className="z-50"
              style={{
                position: 'fixed',
                right: '6rem',
                bottom: isNearFooter ? '120px' : '24px',
                transition: 'bottom 0.3s ease',
              }}
            >
              <ContactRedirectionButton lang={lang} />
            </div>
          </div>
        </div>
      </div>

      <div ref={footerRef} className="absolute z-40 bottom-0 w-full">
        <FooterSection lang={lang} />
      </div>
    </div>
  );
};

export default Servicios;
