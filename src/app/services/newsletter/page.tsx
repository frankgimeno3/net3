"use client"
import React, { FC, useEffect, useRef, useState } from 'react';
import { engContent } from '../page';
import { espContent } from '../page';
import MainNav from '@/app/components/navs/MainNav';
import PcServices from '../../components/servicesMenus/pcServices';
import FooterSection from '@/app/components/navs/FooterSection';
import MServices from '../../components/servicesMenus/mServices';
import ContactRedirectionButton from '@/app/components/ContactRedirectionButton';

interface NewsletterProps { }

const Newsletter: FC<NewsletterProps> = ({ }) => {
    const [section, setSection] = useState("services");
    const [lang, setLang] = useState<"ESP" | "ENG">("ESP");
    const [selectedService, setSelectedService] = useState(
        lang === "ESP" ? espContent[2] : engContent[2]
    );
    const [selectedQuestion, setSelectedQuestion] = useState<string>("none");

    useEffect(() => {
        setSelectedService(lang === "ESP" ? espContent[2] : engContent[2]);
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

    const handleSelectedQuestion = (question: string) => {
        setSelectedQuestion(prev => prev === question ? "none" : question);
    };

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
                    <p className="text-4xl">Email Marketing Estratégico</p>
                    <p className='pt-8 pr-36'>
                        En nuestra agencia, te ayudamos a que tus clientes no se pierdan ninguna de tus noticias. Creamos
                        estrategias personalizadas que incluyen la creación de <span className='font-bold text-yellow-200'>newsletters </span> en formato HTML, para que tus 
                        suscriptores reciban por email todas tus publicaciones.
                    </p>
                    <p className='pt-8 pr-36'>
                    <span className='font-bold text-yellow-200'>Olvídate de crear un diseño newsletter para cada nota prensa que crees.</span> Con nosotros, obtendrás un kit de contenidos con una sola carpeta,
                        en que recibirás tus notas de prensa por un lado, y el HTML para el newsletter ya diseñado por otro, con un link a la nota completa de tu web y los
                        UTM ya aplicados para que puedas analizar los resultados con posterioridad.
                    </p>
              

                    <div className='px-36 my-12 mb-96'>
                        <div className="pr-5 py-5 mt-4 text-right">
                            <p className="font-bold pb-2">¿Quieres saber más?</p>
                            {[{
                                id: "newsletter",
                                title: "¿Qué es un newsletter?",
                                answer: "Un newsletter es un correo electrónico de periodicidad regular enviado a un grupo de suscriptores. Su objetivo es mantenerlos informados sobre novedades, productos, servicios o contenido relevante, y fomentar la interacción y conversión."
                            },
                            {
                                id: "formatos",
                                title: "¿Qué formatos de email marketing puedo llevar a cabo?",
                                answer: "Existen diversos formatos de email marketing, tales como newsletters, promociones, actualizaciones de productos, invitaciones a eventos, y encuestas. Cada uno tiene un objetivo distinto y debe ser diseñado según la estrategia de comunicación de la marca."
                            },
                            {
                                id: "medir-resultados",
                                title: "¿Cómo medir resultados para email marketing?",
                                answer: "Los resultados de una campaña de email marketing se miden a través de métricas clave como la tasa de apertura, la tasa de clics (CTR), la conversión, la tasa de rebote y la tasa de cancelación de suscripción. Estos datos nos permiten evaluar el rendimiento y ajustar las estrategias."
                            },
                            {
                                id: "combinacion",
                                title: "¿Cómo puedo combinar email marketing con otras estrategias de contenidos?",
                                answer: "El email marketing puede combinarse eficazmente con otras estrategias, como el marketing en redes sociales o la optimización para motores de búsqueda (SEO). Por ejemplo, podemos promover contenidos de blog en tus newsletters, o incluir llamados a la acción para interactuar en redes sociales."
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

export default Newsletter;
