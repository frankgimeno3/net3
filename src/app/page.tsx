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
    <div className="relative flex flex-col min-h-screen w-full bg-gray-800 text-white">
      <div className="fixed top-0 left-0 w-full z-50 bg-gray-900 shadow-md">
        <MainNav section={section} setSection={setSection} />
      </div>

      <main className="flex flex-col w-full pt-20 ">
        <QuienSomos lang={lang}   />
        <QueHacemos lang={lang} />
        <WhyWithUs lang={lang} />
      </main>

      <div
        className="sticky md:fixed md:bottom-5 mx-auto z-50 transition-all duration-300 md:right-16"
        style={{ bottom: isNearFooter ? '120px' : '24px' }}
      >
        <ContactRedirectionButton lang={lang} />
      </div>

      <footer ref={footerRef} className="relative w-full z-40">
        <FooterSection lang={lang} />
      </footer>
    </div>
  );
}
