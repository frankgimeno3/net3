'use client';
import React, { FC, useEffect, useRef, useState } from 'react';

import MainNav from '@/app/components/navs/MainNav';
import FooterSection from '@/app/components/navs/FooterSection';
import ContactRedirectionButton from '@/app/components/ContactRedirectionButton';
import PcServices from '../components/servicesMenus/pcServices';
import { useLanguage } from '@/app/context/LanguageContext';  
import ServicesPcContent from './servicesComponents/ServicesPcContent';
import ServicesContentMobile from './servicesComponents/ServicesContentMobile';
import { useUI } from '@/app/context/UIContext';  
import BigMenu from '@/app/components/navs/BigMenu';  

const Servicios: FC = () => {
  const { lang } = useLanguage();
  const { isMenuOpen, setIsMenuOpen } = useUI();  

  const [selectedService] = useState('none');
  const [isNearFooter, setIsNearFooter] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

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

  // Función para manejar la redirección y cerrar el menú
  // const handleRedirection = (url: string) => {
  //   setIsMenuOpen(false);  // Cerramos el menú antes de hacer la redirección
  //   window.location.href = url;  // Redirigimos a la URL
  // };

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
        <MainNav />
      </div>

      {/* Mostrar BigMenu si isMenuOpen es true */}
      {isMenuOpen && (
        <BigMenu />
      )}

      <div className="flex flex-row">
        <div className="hidden md:block">
          <PcServices selectedService={selectedService} lang={lang} />
        </div>

        <div className="flex flex-col ml-0 md:ml-64 bg-gray-900 bg-opacity-70 min-h-screen p-6 md:p-24 md:pb-48 w-full">
          <div className="p-5 md:mb-96 w-full">
            <div className="hidden md:block pt-24">
              <ServicesPcContent showMessage={showMessage} closeMessage={closeMessage} />
            </div>
            <div className="block md:hidden pt-24 w-full">
              <ServicesContentMobile />
            </div>

            <div
              className="z-50"
              style={{
                position: 'fixed',
                right: '6rem',
                bottom: isNearFooter ? '120px' : '24px',
                transition: 'bottom 0.3s ease',
              }}
            >
              <ContactRedirectionButton  />
            </div>
          </div>
        </div>
      </div>

      <div ref={footerRef} className="relative z-40 w-full">
        <FooterSection   />
      </div>
    </div>
  );
};

export default Servicios;
