'use client';
import React, { FC, useEffect, useRef, useState } from 'react';
 
import PcServices from '../components/servicesMenus/pcServices';
import { useLanguage } from '@/app/context/LanguageContext';
import ServicesPcContent from './servicesComponents/ServicesPcContent';
import ServicesContentMobile from './servicesComponents/ServicesContentMobile';
 
const Servicios: FC = () => {
  const { lang } = useLanguage();
 
  const [selectedService] = useState('none');
   const [showMessage, setShowMessage] = useState(false);
 
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
