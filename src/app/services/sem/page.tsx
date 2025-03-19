"use client"
import React, { FC, useEffect, useRef, useState } from 'react';
import { engContent, espContent } from '../content';
import MainNav from '@/app/components/navs/MainNav';
import PcServices from '../../components/servicesMenus/pcServices';
import FooterSection from '@/app/components/navs/FooterSection';
import MServices from '../../components/servicesMenus/mServices';
import ContactRedirectionButton from '@/app/components/ContactRedirectionButton';

interface SEMProps { }

const SEM: FC<SEMProps> = ({ }) => {
    const [section, setSection] = useState("services");
    const [lang, setLang] = useState<"ESP" | "ENG">("ESP");
    const [selectedService, setSelectedService] = useState(
        lang === "ESP" ? espContent[2] : engContent[2]
    );
    const [selectedQuestion, setSelectedQuestion] = useState<string>("none");

    const footerRef = useRef<HTMLDivElement>(null);
    const [isNearFooter, setIsNearFooter] = useState(false);

    const handleSelectedQuestion = (question: string) => {
        setSelectedQuestion((prev) => (prev === question ? "none" : question));
    };

    useEffect(() => {
        setSelectedService(lang === "ESP" ? espContent[4] : engContent[4]);
    }, [lang]);

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
        <div
            className="relative flex flex-col min-h-screen w-full justify-between text-white"
            style={{
                backgroundImage: 'url(/background/bgrnd.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',  
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
                </div>

                <div className="flex flex-col ml-64 mt-24 bg-gray-900 bg-opacity-70 min-h-screen p-24"
                    style={{ marginTop: "75px" }}>
                    <div className="p-5">
                        <p className="text-4xl">Publicidad SEM</p>
                        <p className="pt-8 pr-36">
                            Gestionamos campañas de publicidad en <span className='font-bold text-yellow-200'>buscadores</span>  (SEM) que te permiten llegar justo a las personas que están buscando lo que tu marca ofrece. Diseñamos y optimizamos campañas en <span className='font-bold text-yellow-200'>Google Ads</span> orientadas a obtener resultados concretos: visitas, leads o ventas.
                        </p>
                        <p className="pt-8 pr-36">
                        <span className='font-bold text-yellow-200'>Nos encargamos de todo el proceso</span>: desde la definición de objetivos y palabras clave hasta la redacción de anuncios y análisis de rendimiento. Integramos el SEM dentro del resto de tu estrategia de contenidos para maximizar el retorno y mantener la coherencia de tus mensajes.
                        </p>

                        <div className="px-36 my-12 mb-96">
                            <div className="pr-5 py-5 mt-4 text-right">
                                <p className="font-bold pb-2">¿Quieres saber más?</p>
                                {[
                                    {
                                        id: "como-funciona",
                                        title: "¿Cómo funciona una campaña de SEM?",
                                        answer: "Una campaña de SEM se basa en la selección de palabras clave relevantes para tu negocio, que luego se utilizan en anuncios que se muestran a los usuarios en los motores de búsqueda cuando buscan esas palabras clave. El objetivo es maximizar la visibilidad de tu marca y generar tráfico cualificado."
                                    },
                                    {
                                        id: "presupuesto",
                                        title: "¿Cuál es el presupuesto mínimo para una campaña de SEM?",
                                        answer: "El presupuesto de una campaña de SEM depende de varios factores, como la competencia de las palabras clave y los objetivos que tengas para la campaña. Trabajamos contigo para definir el presupuesto adecuado a tus necesidades y maximizar el retorno de la inversión."
                                    },
                                    {
                                        id: "plataformas",
                                        title: "¿En qué plataformas se puede hacer publicidad SEM?",
                                        answer: "Si bien Google Ads es la plataforma más popular para SEM, también podemos gestionar campañas en otras plataformas como Bing Ads, Amazon Ads y plataformas de redes sociales como Facebook e Instagram, dependiendo de la estrategia de tu negocio."
                                    },
                                    {
                                        id: "analisis",
                                        title: "¿Cómo se mide el éxito de una campaña SEM?",
                                        answer: "El éxito de una campaña SEM se mide a través de varios indicadores clave, como el CTR (tasa de clics), CPC (costo por clic), conversiones (leads o ventas) y el retorno de inversión (ROI). Realizamos un análisis constante para optimizar los anuncios y mejorar los resultados."
                                    }
                                ].map(({ id, title, answer }) => (
                                    <div
                                        key={id}
                                        className="bg-white bg-opacity-20 pr-5 hover:bg-opacity-30 cursor-pointer rounded-r mb-1"
                                        onClick={() => handleSelectedQuestion(id)}
                                    >
                                        <div className="flex justify-between items-center">
                                            <p className="p-5">{title}</p>
                                            <div className="ml-2">
                                                {selectedQuestion === id ? (
                                                    <svg className="w-4 h-4 inline" viewBox="0 0 24 24" fill="none">
                                                        <path d="M6 15L12 9L18 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                ) : (
                                                    <svg className="w-4 h-4 inline transform rotate-180" viewBox="0 0 24 24" fill="none">
                                                        <path d="M6 15L12 9L18 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                )}
                                            </div>
                                        </div>
                                        {selectedQuestion === id && (
                                            <p className="mt-2 text-sm text-left text-white px-8 pb-8">{answer}</p>
                                        )}
                                    </div>
                                ))}
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
                    </div>
                </div>
            </div>

            <div ref={footerRef} className="absolute z-40 bottom-0 w-full">
                <FooterSection lang={lang} />
            </div>
        </div>
    );
};

export default SEM;
