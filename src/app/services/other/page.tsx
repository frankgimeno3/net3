"use client";
import React, { FC, useEffect, useRef, useState } from 'react';
import { engContent, espContent } from '../content';
import MainNav from '@/app/components/navs/MainNav';
import PcServices from '../../components/servicesMenus/pcServices';
import FooterSection from '@/app/components/navs/FooterSection';
import MServices from '../../components/servicesMenus/mServices';
import ContactRedirectionButton from '@/app/components/ContactRedirectionButton';

interface OtherProps {}

const Other: FC<OtherProps> = () => {
  const [section, setSection] = useState("services");
  const [lang, setLang] = useState<"ESP" | "ENG">("ESP");
  const [selectedService, setSelectedService] = useState(
    lang === "ESP" ? espContent[4] : engContent[4]
  );
  const [selectedQuestion, setSelectedQuestion] = useState<string>("none");

  const footerRef = useRef<HTMLDivElement>(null);
  const [isNearFooter, setIsNearFooter] = useState(false);

  const handleSelectedQuestion = (question: string) => {
    setSelectedQuestion(prev => (prev === question ? "none" : question));
  };

  useEffect(() => {
    setSelectedService(lang === "ESP" ? espContent[5] : engContent[5]);
  }, [lang]);

  useEffect(() => {
    const handleScroll = () => {
      if (!footerRef.current) return;
      const footerTop = footerRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setIsNearFooter(footerTop < windowHeight + 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative flex flex-col w-full justify-between text-white"
      style={{
        backgroundImage: 'url(/background/bgrnd.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="fixed top-0 left-0 w-full z-50">
        <MainNav section={section} setSection={setSection} lang={lang} setLang={setLang} />
      </div>

      <div className="flex flex-row">
        <div className="hidden md:block">
          <PcServices selectedService={selectedService} lang={lang} />
        </div>

        <div className="block md:hidden fixed bottom-0 left-0 w-full z-50">
          <MServices selectedService={selectedService} lang={lang} />
        </div>

        <div className="flex flex-col xl:mt-24 bg-gray-900 bg-opacity-70 min-h-screen w-full pt-24 md:p-24 md:pl-[295px] max-w-9/10"
             style={{ marginTop: "75px" }}
        >
          <p className="text-2xl md:text-4xl px-8 md:pl-12">
            Servicios Adicionales
          </p>
          <p className="pt-8 px-8 md:pl-12 xl:pr-36">
            Además de los servicios incluidos en nuestros packs principales, ofrecemos{" "}
            <span className="font-bold text-yellow-200">soluciones personalizadas</span> para cubrir necesidades específicas que puedan surgir en tu estrategia de comunicación. Esto puede incluir desde diseño gráfico, producción audiovisual, gestión de influencers, posicionamiento SEO o campañas puntuales de comunicación interna.
          </p>
          <p className="pt-8 px-8 md:pl-12 xl:pr-36">
            Cada uno de estos servicios se define en función de tu caso particular, con propuestas y presupuestos hechos a medida.{" "}
            <span className="font-bold text-yellow-200">Queremos que tengas todo lo que necesitas en un solo lugar</span>, con la flexibilidad de sumar lo que te aporte más valor en cada etapa.
          </p>

          <div className="px-8 md:pl-12 xl:pr-36 my-12 mb-96">
            <div className="pr-5 py-5 mt-4 text-right mb-96 md:mb-0">
              <p className="font-bold pb-2">¿Quieres saber más?</p>
              {[
                {
                  id: "tipos-servicios",
                  title: "¿Qué tipos de servicios adicionales ofrecen?",
                  answer:
                    "Ofrecemos una amplia gama de servicios adicionales como diseño gráfico, producción audiovisual, gestión de influencers, SEO, y campañas de comunicación interna, todo adaptado a tus necesidades específicas.",
                },
                {
                  id: "subcontrataciones",
                  title: "¿Puedo subcontratar algunos de estos servicios?",
                  answer:
                    "Sí, podemos gestionar subcontrataciones para servicios específicos, asegurándonos de que todo se integre perfectamente en tu estrategia de comunicación. Nos encargamos de coordinar y supervisar el trabajo.",
                },
                {
                  id: "presupuesto-adicional",
                  title: "¿Cómo se definen los presupuestos para estos servicios?",
                  answer:
                    "Los presupuestos para los servicios adicionales se crean de manera personalizada, tomando en cuenta la naturaleza del servicio y los objetivos que deseas alcanzar. Trabajamos contigo para definir una propuesta que se ajuste a tu presupuesto.",
                },
                {
                  id: "beneficios-adicionales",
                  title: "¿Cómo pueden estos servicios adicionales mejorar mi estrategia?",
                  answer:
                    "Estos servicios adicionales complementan y optimizan tu estrategia de comunicación al abordar áreas específicas que no cubren los packs principales, mejorando la visibilidad, el engagement y el rendimiento general de tus campañas.",
                },
              ].map(({ id, title, answer }) => (
                <div
                  key={id}
                  className="bg-white bg-opacity-20 pr-5 hover:bg-opacity-30 cursor-pointer rounded-r mb-1"
                  onClick={() => handleSelectedQuestion(id)}
                >
                  <div className="flex justify-between items-center">
                    <p className="p-5">{title}</p>
                    <div className="ml-2">
                      {selectedQuestion === id ? (
                        <svg
                          className="w-4 h-4 inline"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6 15L12 9L18 15"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="w-4 h-4 inline transform rotate-180"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M6 15L12 9L18 15"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                  {selectedQuestion === id && (
                    <p className="mt-2 text-sm text-left text-white px-8 pb-8">
                      {answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div
            className="z-50"
            style={{
              position: "fixed",
              right: "6rem",
              bottom: isNearFooter ? "120px" : "24px",
              transition: "bottom 0.3s ease",
            }}
          >
            <ContactRedirectionButton lang={lang} />
          </div>
        </div>
      </div>

      <div ref={footerRef} className="absolute z-40 bottom-0 w-full">
        <FooterSection lang={lang} />
      </div>
    </div>
  );
};

export default Other;
