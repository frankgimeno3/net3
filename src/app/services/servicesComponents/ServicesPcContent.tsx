'use client';
import React from 'react';
import { useLanguage } from '@/app/context/LanguageContext';

interface ServicesPcContentProps {
    showMessage: boolean;
    closeMessage: () => void;
}

const ServicesPcContent: React.FC<ServicesPcContentProps> = ({ showMessage, closeMessage }) => {
    const { lang } = useLanguage();

    return (
        <div >
            {lang === 'ESP' && <p className="text-4xl">Nuestros servicios</p>}
            {lang === 'ENG' && <p className="text-4xl">Our Services</p>}

            {lang === 'ESP' && (
                <>
                    <p className="pt-8 pr-0 md:pr-36">
                        Ofrecemos consultoría estratégica de contenido para optimizar tu presencia en línea. A través de un análisis profundo de tu marca y audiencia, desarrollamos estrategias de contenido que maximizan el impacto y el alcance, asegurando que tu mensaje resuene efectivamente con tu público objetivo.
                    </p>
                    <p className="pt-8 pr-0 md:pr-36">
                        Nos especializamos en la creación y distribución de notas de prensa que capturan la atención de los medios de comunicación y potenciales clientes. Nuestra experiencia en redacción y relaciones públicas asegura una cobertura significativa, generando visibilidad y credibilidad para tu marca.
                    </p>
                </>
            )}

            {lang === 'ENG' && (
                <>
                    <p className="pt-8 pr-0 md:pr-36">
                        We offer strategic content consulting to optimize your online presence. Through in-depth analysis of your brand and audience, we develop content strategies that maximize impact and reach, ensuring your message effectively resonates with your target audience.
                    </p>
                    <p className="pt-8 pr-0 md:pr-36">
                        We specialize in creating and distributing press releases that capture the attention of the media and potential clients. Our expertise in writing and public relations ensures meaningful coverage, generating visibility and credibility for your brand.
                    </p>
                </>
            )}

            {showMessage && (
                <div
                    className="hidden md:block absolute top-24 left-56 text-sm opacity-80 bg-yellow-300"
                    style={{
                        zIndex: 1000,
                        fontWeight: 'normal',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        color: 'white',
                    }}
                >
                    <div className="flex flex-row items-center justify-between">
                        <div className="flex items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="mr-2 text-gray-700"
                            >
                                <path d="M14 19l-7-7 7-7" />
                            </svg>
                            {lang === 'ESP' && <p className="max-w-96 px-5 text-gray-700">Haz click para más detalles</p>}
                            {lang === 'ENG' && <p className="max-w-96 px-5 text-gray-700">Click for more details</p>}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="cursor-pointer text-gray-700"
                                onClick={closeMessage}
                            >
                                <path d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ServicesPcContent;
