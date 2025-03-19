'use client';
import { useEffect, useRef, useState } from 'react';
import MainNav from './components/navs/MainNav';
import FooterSection from './components/navs/FooterSection';
import QuienSomos from './components/sections/aboutus/1WhoWeAre/QuienSomos';
import QueHacemos from './components/sections/aboutus/2WhatWeDo/QueHacemos';
import WhyWithUs from './components/sections/aboutus/3WhyWithUs/WhyWithUs';
import ContactRedirectionButton from './components/ContactRedirectionButton';
import { useLanguage } from './context/LanguageContext'; 

export default function Home() {
  const [section, setSection] = useState('aboutus');
  const { lang } = useLanguage();  
  const footerRef = useRef<HTMLDivElement>(null);
  const [isNearFooter, setIsNearFooter] = useState(false);

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
      <div className="absolute inset-0 bg-black opacity-40 z-0" />
      <div className="fixed top-0 left-0 w-full z-50">
        <MainNav section={section} setSection={setSection} />
      </div>
      <div className="flex flex-col z-10 w-full mb-96">
        {/* Pasa lang desde el contexto */}
        <QuienSomos lang={lang} />
        <QueHacemos lang={lang} />
        <WhyWithUs lang={lang} />
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
        {/* Pasa lang desde el contexto */}
        <ContactRedirectionButton lang={lang} />
      </div>

      <div ref={footerRef} className="absolute z-40 bottom-0 w-full">
        {/* Pasa lang desde el contexto */}
        <FooterSection lang={lang} />
      </div>
    </div>
  );
}
