'use client';
import React from 'react';
import { useLanguage } from '@/app/context/LanguageContext';

interface ServicesPcContentProps { 
}

const ServicesPcContent: React.FC<ServicesPcContentProps> = ({ }) => {
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

        </div>
    );
};

export default ServicesPcContent;
