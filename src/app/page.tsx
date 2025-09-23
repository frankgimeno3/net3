'use client';

import { useEffect, useRef } from 'react';
import QuienSomos from './components/sections/aboutus/1WhoWeAre/QuienSomos';
import QueHacemos from './components/sections/aboutus/2WhatWeDo/QueHacemos';
import WhyWithUs from './components/sections/aboutus/4WhyWithUs/WhyWithUs';
import ContactRedirectionButton from './components/ContactRedirectionButton';
import Contáctanos from './components/sections/contact/Contáctanos';
import OurServices from './components/sections/aboutus/3Services/OurServices';
import Customers from './components/sections/aboutus/3customers/Customers';

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;

      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.warn("Autoplay bloqueado por el navegador:", error);
        });
      }
    }
  }, []);

  const scrollToNextSection = () => {
    window.scrollBy({ top: 960, behavior: 'smooth' });
  };

  return (
    <div className="relative mx-auto z-10">
      <video
        ref={videoRef}
        src="/abstractvid.mp4"
        autoPlay
        loop
        muted
        className="fixed top-0 left-0 w-screen h-screen object-cover z-0"
      />

      <div className="relative z-10 text-white ">
        <QuienSomos />


        <div
          style={{
            position: "relative",
            zIndex: 11,
          }}
        >
          <QueHacemos />
        </div>
        {/* <div
          style={{
            position: "relative",
            zIndex: 10,
            marginTop: "-100px",
            marginBottom: "-100px",
          }}
        >
          <OurServices />
        </div>
        <WhyWithUs /> */}

        <div
          style={{
            position: "relative",
            zIndex: 10,
            marginTop: "-100px",
            marginBottom: "-100px",
          }}
        >
          <Customers />
        </div>

        <div
          style={{
            position: "relative",
            zIndex: 11,
            borderTopLeftRadius: "50% 100px",
            borderTopRightRadius: "50% 100px",
          }}
        >
          <Contáctanos />

        </div>
      </div>

      <button
        id="floating-scroll-button"
        onClick={scrollToNextSection}
        className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-gray-100 p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-gray-300 hover:opacity-50"
        style={{ zIndex: 1000 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-gray-500"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div className="hidden md:block fixed bottom-5 right-16 z-50 transition-all duration-300">
        <ContactRedirectionButton />
      </div>
    </div>
  );
}
