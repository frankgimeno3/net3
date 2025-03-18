"use client"
import React, { FC, useEffect, useRef, useState } from 'react';
import { engContent } from '../page';
import { espContent } from '../page';
import MainNav from '@/app/components/navs/MainNav';
import PcServices from '../../components/servicesMenus/pcServices';
import FooterSection from '@/app/components/navs/FooterSection';
import MServices from '../../components/servicesMenus/mServices';
import ContactRedirectionButton from '@/app/components/ContactRedirectionButton';

interface ConsultancyProps {}

const Consultancy: FC<ConsultancyProps> = () => {
    const [section, setSection] = useState("services");
    const [lang, setLang] = useState<"ESP" | "ENG">("ESP");
    const [selectedService, setSelectedService] = useState(
        lang === "ESP" ? espContent[0] : engContent[0]
    );
    const [selectedQuestion, setSelectedQuestion] = useState<string>("none");

    const footerRef = useRef<HTMLDivElement>(null);
    const [isNearFooter, setIsNearFooter] = useState(false);

    const handleSelectedQuestion = (question: string) => {
        setSelectedQuestion(prev => prev === question ? "none" : question);
    };

    useEffect(() => {
        setSelectedService(lang === "ESP" ? espContent[0] : engContent[0]);
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
        <div className="relative flex flex-col w-full justify-between text-white"
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
                </div>

                <div className="flex flex-col ml-64 mt-24 bg-gray-900 bg-opacity-70 min-h-screen p-24"
                    style={{ marginTop: "75px" }}>
                    <p className="text-4xl">Estrategia y Consultoría de Contenidos</p>
                    <p className='pt-8 pr-36'>
                        Antes de producir cualquier contenido, es fundamental entender qué necesita tu marca, qué recursos tiene disponibles
                        y qué objetivos busca alcanzar. Por eso, comenzamos con una <span className='font-bold text-yellow-200'>sesión de consultoría personalizada</span> donde analizamos tu
                        situación actual, identificamos oportunidades y definimos los indicadores clave de rendimiento (KPIs) que guiarán toda
                        la estrategia.
                    </p>
                    <p className='pt-8 pr-36'>
                        A partir de ese diagnóstico, construimos un <span className='font-bold text-yellow-200'>plan de contenidos </span>alineado con tus metas, que incluye canales
                        (web, redes, medios), temáticas, formatos, materiales requeridos y presupuesto estimado. También desarrollamos un <span className='font-bold text-yellow-200'>calendario
                            editorial</span> que contempla cada fase del proceso, desde la ideación hasta la entrega final de cada pieza.
                    </p>
                    <p className='pt-8 pr-36'>
                        Llegada la fecha de cada entrega, te entregaremos un <span className='font-bold text-yellow-200'>kit de contenidos</span>, un carpeta con la que, para una misma publicación, tendrás
                        un formato diferente para las notas de prensas de medios, contenido para tu web, contenido para redes sociales y/o newsletter.
                    </p>

                    <div className='px-36 my-12 mb-96'>
                        <div className="pr-5 py-5 mt-4 text-right">
                            <p className="font-bold pb-2">¿Quieres saber más?</p>
                            {[
                                {
                                    id: "plan",
                                    title: "¿Qué es un plan de contenidos?",
                                    answer: "Es un documento estratégico que organiza y define qué tipo de contenido se va a crear, en qué canales se va a publicar, con qué frecuencia y con qué objetivo, todo alineado con la estrategia de marca."
                                },
                                {
                                    id: "estrategia",
                                    title: "¿Qué es una estrategia de redes?",
                                    answer: "Es un enfoque planificado para utilizar las redes sociales como herramienta de comunicación, marketing y posicionamiento de marca. Incluye objetivos, tipos de contenido, frecuencia y análisis de resultados."
                                },
                                {
                                    id: "kit",
                                    title: "¿Qué es un kit de contenidos?",
                                    answer: "Es un conjunto de piezas gráficas, textuales o audiovisuales diseñadas para ser reutilizadas en distintas plataformas, manteniendo coherencia visual y de mensaje en todas las comunicaciones de la marca."
                                }
                            ].map(({ id, title, answer }) => (
                                <div
                                    key={id}
                                    className='bg-white bg-opacity-20 pr-5 hover:bg-opacity-30 cursor-pointer rounded-r mb-1'
                                    onClick={() => handleSelectedQuestion(id)}
                                >
                                    <div className="flex justify-between items-center">
                                        <p className='p-5'>{title}</p>
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

             <div ref={footerRef} className='absolute z-40 bottom-0 w-full'>
                <FooterSection lang={lang} />
            </div>
        </div>
    );
};

export default Consultancy;
