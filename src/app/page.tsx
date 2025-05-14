'use client';

import { useEffect, useRef, useState } from 'react';
import MainNav from './components/navs/MainNav';
import FooterSection from './components/navs/FooterSection';
import QuienSomos from './components/sections/aboutus/1WhoWeAre/QuienSomos';
import QueHacemos from './components/sections/aboutus/2WhatWeDo/QueHacemos';
import WhyWithUs from './components/sections/aboutus/3WhyWithUs/WhyWithUs';
import ContactRedirectionButton from './components/ContactRedirectionButton';
import { useLanguage } from './context/LanguageContext';
import BigMenu from './components/navs/BigMenu';
import { useUI } from './context/UIContext';

export default function Home() {
  const { lang } = useLanguage();
  const footerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null); // ← Referencia al video
  const [isNearFooter, setIsNearFooter] = useState(false);

  const { isMenuOpen } = useUI();

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
    // ← Establece la velocidad del video a 50%
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5
    }
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen w-full bg-gray-800 text-white opacity-90">
      <video
        ref={videoRef}  
        src="/abstract.mp4"
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="absolute top-0 left-0 w-full h-full bg-zinc-900 opacity-70 z-10" />

      <div className="fixed top-0 left-0 w-full z-50 shadow-md">
        <MainNav />
      </div>

      {isMenuOpen && (
        <BigMenu />
      )}

      <main className="flex flex-col w-full py-32 z-10 relative">
        <QuienSomos />
        <QueHacemos />
        <WhyWithUs />
      </main>

      <div
        className="sticky md:fixed md:bottom-5 mx-auto z-50 transition-all duration-300 md:right-16"
        style={{ bottom: isNearFooter ? '120px' : '24px' }}
      >
        <ContactRedirectionButton />
      </div>

      <footer ref={footerRef} className="relative w-full z-40">
        <FooterSection />
      </footer>
    </div>
  );
}
