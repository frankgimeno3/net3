"use client"
import React, { FC, useEffect, useRef, useState } from 'react';
import { engContent, espContent } from '../content';
import MainNav from '@/app/components/navs/MainNav';
import PcServices from '../../components/servicesMenus/pcServices';
import FooterSection from '@/app/components/navs/FooterSection';
import MServices from '../../components/servicesMenus/mServices';
import ContactRedirectionButton from '@/app/components/ContactRedirectionButton';

interface SocialProps { }

const Social: FC<SocialProps> = ({ }) => {
    const [section, setSection] = useState("services");
    const [lang, setLang] = useState<"ESP" | "ENG">("ESP");
    const [selectedService, setSelectedService] = useState(
        lang === "ESP" ? espContent[3] : engContent[3]
    );
    const [selectedQuestion, setSelectedQuestion] = useState<string>("none");

    const footerRef = useRef<HTMLDivElement>(null);
    const [isNearFooter, setIsNearFooter] = useState(false);

    const handleSelectedQuestion = (question: string) => {
        setSelectedQuestion((prev) => (prev === question ? "none" : question));
    };

    useEffect(() => {
        setSelectedService(lang === "ESP" ? espContent[3] : engContent[3]);
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
            className="relative flex flex-col w-full justify-between text-white"
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

                <div className="flex flex-col xl:mt-24 bg-gray-900 bg-opacity-70 min-h-screen w-full pt-24 md:p-24 md:pl-[295px] max-w-9/10 "
                    style={{ marginTop: "75px" }}>
                    <p className="text-2xl md:text-4xl px-8 md:pl-12">Gestión de Redes Sociales</p>
                    <p className='pt-8 px-8 md:pl-12 xl:pr-36'>
                        Desarrollamos <span className='font-bold text-yellow-200'>estrategias de contenidos</span> que se alinean con los objetivos de tu marca, enfocándonos
                        en la creación de contenido visualmente atractivo y relevante para tu audiencia. Nos encargamos de
                        gestionar la presencia de tu marca en las principales redes sociales, maximizando el alcance y
                        fomentando la interacción.
                    </p>
                    <p className="pt-8 px-8 md:pl-12 xl:pr-36">
                        Olvídate de dedicar horas gestionando tu contenido para redes cada vez que tengas algo que publicar. 
                        Para cada nota de prensa que creemos, te enviaremos un titular para publicar, junto a una miniatura y un link, con los tags UTM, 
                        para medir y analizar los clicks, ya aplicados.  
                    </p>
                    <p className="pt-8 px-8 md:pl-12 xl:pr-36">
                        Creamos <span className='font-bold text-yellow-200'>miniaturas personalizadas</span> a partir de los contenidos de las notas de 
                        prensa para cada una de tus publicaciones en redes, mejorando la tasa de interacción respecto a contenidos de sólo texto, y
                        proporcionamos análisis detallados sobre la interacción de tus seguidores con la implementación de <span className='font-bold text-yellow-200'>links utm</span>
                        que redirijan a la nota de prensa completa trackeando así el tráfico de cada publicación.
                    </p>

                    <div className="px-8 md:pl-12 xl:pr-36 my-12 mb-96">
                        <div className="pr-5 py-5 mt-4 text-right mb-96 md:mb-0">
                            <p className="font-bold pb-2">¿Quieres saber más?</p>
                            {[  
                                {
                                    id: "packs",
                                    title: "¿Cómo funcionan los packs de publicaciones?",
                                    answer: "Los packs de publicaciones son paquetes de contenido planificados que incluyen publicaciones, imágenes, y textos diseñados para garantizar una frecuencia constante de interacción con tu audiencia. Estos paquetes se adaptan a las necesidades de cada marca y se programan con antelación para asegurar la coherencia y el impacto a largo plazo."
                                },
                                {
                                    id: "redes",
                                    title: "¿En qué redes sociales me interesa publicar mi contenido?",
                                    answer: "La elección de las redes sociales depende de la audiencia de tu marca y los objetivos de comunicación. Las plataformas más comunes son Instagram, Facebook, LinkedIn, y Twitter, pero la elección ideal puede incluir redes como TikTok, Pinterest o YouTube, dependiendo de tus metas y el tipo de contenido que compartas."
                                },
                                {
                                    id: "interacciones",
                                    title: "¿Cómo puedo medir las interacciones de mis seguidores en redes?",
                                    answer: "Las interacciones en redes sociales se miden a través de métricas como 'likes', 'comentarios', 'compartidos', y la tasa de clics. Estas métricas son esenciales para entender cómo responde tu audiencia a las publicaciones, y nos permiten ajustar las estrategias para maximizar el engagement."
                                },
                                {
                                    id: "miniaturas",
                                    title: "¿Qué es una miniatura, y para qué sirve?",
                                    answer: "Una miniatura es una imagen pequeña que acompaña a un post o video. Su objetivo es captar la atención del usuario y motivarlo a interactuar con el contenido. Es un elemento clave en la estrategia de marketing visual, ya que genera curiosidad y mejora la tasa de clics."
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

            <div ref={footerRef} className="absolute z-40 bottom-0 w-full">
                <FooterSection lang={lang} />
            </div>
        </div>
    );
};

export default Social;
