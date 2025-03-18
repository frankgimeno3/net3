"use client"
import React, { FC, useEffect, useRef, useState } from 'react';
import { engContent } from '../page';
import { espContent } from '../page';
import MainNav from '@/app/components/navs/MainNav';
import PcServices from '../../components/servicesMenus/pcServices';
import FooterSection from '@/app/components/navs/FooterSection';
import MServices from '../../components/servicesMenus/mServices';
import ContactRedirectionButton from '@/app/components/ContactRedirectionButton';

interface SEMProps {

}

const SEM: FC<SEMProps> = ({ }) => {
    const [section, setSection] = useState("services");
    const [lang, setLang] = useState<"ESP" | "ENG">("ESP");
    const [selectedService, setSelectedService] = useState(
        lang === "ESP" ? espContent[4] : engContent[4]
    );

     useEffect(() => {
        setSelectedService(lang === "ESP" ? espContent[4] : engContent[4]);
    }, [lang]);

    
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
            <div className="fixed top-0 left-0 w-full z-50">
                <MainNav section={section} setSection={setSection} lang={lang} setLang={setLang} />
            </div>
            <div className="flex flex-row">
            <div className="hidden md:block">
          <PcServices selectedService={selectedService} lang={lang} />
        </div>

         <div className="block md:hidden fixed bottom-0 left-0 w-full z-50">
          <MServices selectedService={selectedService} lang={lang} />
        </div>                <div className="p-5 m-5 pl-64 pt-24">
                    <p className="font-bold">Asesoría</p>
                    <p>Analizamos tu empresa, entorno y posibilidades</p>
                    <p>Te exponemos tus posibilidades, opciones, y te hacemos una propuesta</p>
                    <p>Detallamos las necesidades de material, proceso y coste</p>
                    <p>Calendarizamos cada parte del proceso</p>
                    <p>Entregamos como resultado un plan de contenidos y redes</p>
                    <div className="p-5 mt-4">
                        <p className="font-bolt pb-2 ">Quieres saber más?</p>
                        <p>Qué es un plan de contenidos?</p>
                        <p>Qué es una estrategia de redes?</p>
                        <p>Qué es un kit de contenidos?</p>
                        <button className="px-3 py-1 bg-white text-gray-600 hover:bg-gray-100 mt-3">Solicita un presupuesto</button>
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
};

export default SEM;