'use client';
import { useEffect, useRef, useState } from "react";

import FooterSection from "../components/navs/FooterSection";
import MainNav from "../components/navs/MainNav";
import PcServices from "../components/servicesMenus/pcServices";
import MServices from "../components/servicesMenus/mServices";
import ContactRedirectionButton from "../components/ContactRedirectionButton";

export const espContent = [
  'Consultoría de contenido',
  'Notas de prensa',
  'Newsletter',
  'Contenido para redes',
  'SEM',
  'Otros servicios'
];

export const engContent = [
  'Content consultancy',
  'Press Releases',
  'Newsletter',
  'Social Media Content',
  'SEM',
  'Other services'
];

export default function Services() {
  const [section, setSection] = useState("services");
  const [lang, setLang] = useState<"ESP" | "ENG">("ESP");
  const [selectedService] = useState("main");
    const footerRef = useRef<HTMLDivElement>(null);
    const [isNearFooter, setIsNearFooter] = useState(false);
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
    <div className="relative flex flex-col min-h-screen w-full justify-between text-white"
      style={{
        backgroundImage: 'url(/background/bgrnd.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40 z-0" />
      
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

        <div className="p-12 pt-56">
          <p>Nuestros servicios</p>
          <p>Agrupamos nuestros servicios en x grupos:</p>
          <p>Consultoría</p>
          <div className="p-5 -m-5">
            <p className="font-bold">Creación de contenidos</p>
          </div>
        </div>
      </div>

      <div
                className="z-50"
                style={{
                    position: 'fixed',
                    right: '6rem',
                    bottom: isNearFooter ? '120px' : '24px',
                    transition: 'bottom 0.3s ease'
                }}
            >
                <ContactRedirectionButton lang={lang} />
            </div>

            <div ref={footerRef} className='absolute z-40 bottom-0 w-full'>
                <FooterSection lang={lang} />
            </div>
    </div>
  );
}
