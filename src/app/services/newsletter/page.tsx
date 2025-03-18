"use client"
import React, { FC, useEffect, useState } from 'react';
import { engContent } from '../page';
import { espContent } from '../page';
import MainNav from '@/app/components/navs/MainNav';
import PcServices from '../servicesMenu/pcServices';
import Contáctanos from '@/app/components/sections/contact/Contáctanos';
import FooterSection from '@/app/components/navs/FooterSection';
import MServices from '../servicesMenu/mServices';

interface NewsletterProps {

}

const Newsletter: FC<NewsletterProps> = ({ }) => {
    const [section, setSection] = useState("services");
    const [lang, setLang] = useState<"ESP" | "ENG">("ESP");
    const [selectedService, setSelectedService] = useState(
        lang === "ESP" ? espContent[2] : engContent[2]
    );

    useEffect(() => {
        setSelectedService(lang === "ESP" ? espContent[2] : engContent[2]);
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
              <p>Creación de campañas de email marketing</p>
              <p>Te ayudamos a crear tu propio newsletter o campañas de email marketing</p>
              <p>Creamos contenido de interés para tus suscriptores</p>
              <p>Reconvertimos el formato de tus notas de prensa y publicaciones para que puedas usarlo como newsletter</p>
              <p>Hacemos la gestión integral del envío de los newsletter</p>
              <div className="p-5 mt-4">
                <p className="font-bolt pb-2 ">Quieres saber más?</p>
                <p>Qué es un newsletter?</p>
                <p>Qué formatos de email marketing puedo llevar a cabo?</p>
                <p>Cómo medir resultados para email marketing?</p>
                <p>Cómo puedo combinar email marketing con otras estrategias de contenidos?</p>
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
        </div>    );
};

export default Newsletter;