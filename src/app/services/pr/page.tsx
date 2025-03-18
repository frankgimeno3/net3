"use client"
import React, { FC, useEffect, useRef, useState } from 'react';
import { engContent } from '../page';
import { espContent } from '../page';
import MainNav from '@/app/components/navs/MainNav';
import PcServices from '../../components/servicesMenus/pcServices';
import FooterSection from '@/app/components/navs/FooterSection';
import MServices from '../../components/servicesMenus/mServices';
import ContactRedirectionButton from '@/app/components/ContactRedirectionButton';

interface PRProps { }

const PR: FC<PRProps> = ({ }) => {
    const [section, setSection] = useState("services");
    const [lang, setLang] = useState<"ESP" | "ENG">("ESP");
    const [selectedService, setSelectedService] = useState(
        lang === "ESP" ? espContent[1] : engContent[1]
    );
    const [selectedQuestion, setSelectedQuestion] = useState<string>("none");

    const footerRef = useRef<HTMLDivElement>(null);
    const [isNearFooter, setIsNearFooter] = useState(false);

    const handleSelectedQuestion = (question: string) => {
        setSelectedQuestion((prev) => (prev === question ? "none" : question));
    };

    useEffect(() => {
        setSelectedService(lang === "ESP" ? espContent[1] : engContent[1]);
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
                        <p className="text-4xl">Notas de Prensa y Relaciones con Medios</p>
                        <p className="pt-8 pr-36">
                            Ofrecemos un servicio especializado en la <span className='font-bold text-yellow-200'>creación y distribución de notas de prensa</span>, adaptado a las necesidades de tu marca. Nuestro objetivo es garantizar que tu mensaje llegue a los medios más relevantes y a la audiencia adecuada. Planificamos la estrategia de comunicación con antelación, asegurando que cada nota de prensa esté alineada con los objetivos de tu campaña.
                        </p>
                        <p className="pt-8 pr-36">
Para cada una de tus publicaciones, hacemos el servicio de <span className='font-bold text-yellow-200'>recolección de datos</span> a partir de formatos prácticos como preguntas directas por email a ti o a quien nos indiques, formularios, o incluso podemos hacerte propuestas informativas a partir de contenido propio. Posteriormente, realizaremos el <span className='font-bold text-yellow-200'>copywriting</span> a partir de dicho contenido, aplicando <span className='font-bold text-yellow-200'>filtros SEO</span> para optimizar resultados en buscadores, y te enviaremos un resultado para revisar y/o publicar con los medios o en tu propia página web.
                        </p>
                        <p className="pt-8 pr-36">
                            Entregamos el contenido de forma estructurada en un <span className='font-bold text-yellow-200'> kit de contenidos</span>, lo que te permite adaptar las notas de prensa a las características de cada plataforma y garantizar una mayor efectividad en la difusión.
                        </p>

                        <div className="px-36 my-12 mb-96">
                            <div className="pr-5 py-5 mt-4 text-right">
                                <p className="font-bold pb-2">¿Quieres saber más?</p>
                                {[
                                    {
                                        id: "nota",
                                        title: "¿Qué es una nota de prensa?",
                                        answer: "Una nota de prensa es un documento informativo utilizado para comunicar eventos o novedades relevantes a los medios de comunicación. Su objetivo es captar la atención de los periodistas y medios especializados para que difundan la información entre su audiencia."
                                    },
                                    {
                                        id: "cantidad",
                                        title: "¿Cuántas notas de prensa se incluyen?",
                                        answer: "Ofrecemos distintos paquetes que incluyen una o varias notas de prensa al mes, dependiendo de las necesidades de tu campaña. Nuestro servicio está diseñado para adaptarse a tus objetivos y calendario de comunicación."
                                    },
                                    {
                                        id: "kit",
                                        title: "¿Qué es un kit de contenidos?",
                                        answer: "Un kit de contenidos es un conjunto de materiales que incluye la nota de prensa, imágenes, infografías y otros recursos diseñados para que puedas adaptarlos fácilmente a diversas plataformas. Este kit facilita la difusión del contenido en los medios y redes sociales."
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

export default PR;
