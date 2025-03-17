'use client';
import { useState } from "react";

import FooterSection from "../components/navs/FooterSection";
import Contáctanos from "../components/sections/contact/Contáctanos";
import MainNav from "../components/navs/MainNav";
import PcServices from "./servicesMenu/pcServices";

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
]

export default function Services() {
  const [section, setSection] = useState("services");
  const [lang, setLang] = useState<"ESP" | "ENG">("ESP");
  const [selectedService] = useState("main")


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
        <PcServices selectedService={selectedService} lang={lang} />
        <div className="p-12 pt-56">
          <p>Nuestros servicios</p>
          <p>Agrupamos nuestros servicios en x grupos:</p>
          <p>Consultoría</p>
          <div className="p-5 -m-5">
            <p className="font-bold">Creación de contenidos</p>
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
}
