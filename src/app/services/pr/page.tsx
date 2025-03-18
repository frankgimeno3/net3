"use client"
import React, { FC, useEffect, useState } from 'react';
import { engContent } from '../page';
import { espContent } from '../page';
import MainNav from '@/app/components/navs/MainNav';
import PcServices from '../servicesMenu/pcServices';
import Contáctanos from '@/app/components/sections/contact/Contáctanos';
import FooterSection from '@/app/components/navs/FooterSection';
import MServices from '../servicesMenu/mServices';

interface PRProps {

}

const PR: FC<PRProps> = ({ }) => {
    const [section, setSection] = useState("services");
    const [lang, setLang] = useState<"ESP" | "ENG">("ESP");
    const [selectedService, setSelectedService] = useState(
        lang === "ESP" ? espContent[1] : engContent[1]
    );

    // Esto sincroniza selectedService si cambia lang
    useEffect(() => {
        setSelectedService(lang === "ESP" ? espContent[1] : engContent[1]);
    }, [lang]);

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
                    <div className="p-5">
                        <p>Creación de notas de prensa</p>
                        <p>Te ofrecemos un plan en forma de pack, para que puedas publicar una nota de prensa cada mes</p>
                        <p>Planificamos todos los artículos del año con antelación, para que conozcas el contenido de la campaña antes de elaborarlo</p>
                        <p>Entregamos el contenido en un kit de contenidos, para que puedas adaptarlo a cada plataforma</p>
                        <div className="p-5 mt-4">
                            <p className="font-bolt pb-2 ">Quieres saber más?</p>
                            <p>Qué es una nota de prensa?</p>
                            <p>Cuántas?</p>
                            <p>Qué es un kit de contenidos?</p>
                            <button className="px-3 py-1 bg-white text-gray-600 hover:bg-gray-100 mt-3">Solicita un presupuesto</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-20 pt-16  pl-64">
                <Contáctanos lang={lang} />
            </div>
            <div className='absolute z-50 bottom-0 w-full'>
                <FooterSection lang={lang} />
            </div>
        </div>
            );
};

export default PR;