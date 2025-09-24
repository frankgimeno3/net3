import { useLanguage } from '@/app/context/LanguageContext';
import React, { FC } from 'react';
import Image from 'next/image';

interface CustomersProps {}

const customersData = [
    {
        src: '/customerLogos/hueco-arquitectura.jpg',
        urlES: 'https://www.vidrioperfil.com/es-es/hueco-arquitectura',
        urlEN: 'https://www.vidrioperfil.com/en/hueco-arquitectura',
        alt: 'Hueco Arquitectura',
    },
    {
        src: '/customerLogos/revista-de-ventanas.jpg',
        urlES: 'https://www.vidrioperfil.com/es-es/revistas-espana-y-portugal',
        urlEN: 'https://www.vidrioperfil.com/en/revistas-spain-and-portugal',
        alt: 'Revista de Ventanas',
    },
    {
        src: '/customerLogos/revista-del-vidrio.jpg',
        urlES: 'https://www.vidrioperfil.com/es-es/revistas-espana-y-portugal',
        urlEN: 'https://www.vidrioperfil.com/en/revistas-spain-and-portugal',
        alt: 'Revista del Vidrio',
    },
    {
        src: '/customerLogos/GlassMexico-png-transparent-300x113.png',
        urlES: 'https://www.glasstechmexico.com/',
        urlEN: 'https://www.glasstechmexico.com/',
        alt: 'Glass Mexico',
    },
    {
        src: '/customerLogos/doorswindows-Mexico.png',
        urlES: 'https://www.glasstechmexico.com/en/doorswindows-2/',
        urlEN: 'https://www.glasstechmexico.com/en/doorswindows-2/',
        alt: 'Doors & Windows Mexico',
    },
    {
        src: '/customerLogos/CHINAGLASS_2.jpeg',
        urlES: 'https://www.vidrioperfil.com/es-es/china-glass',
        urlEN: 'https://www.vidrioperfil.com/es-es/china-glass',
        alt: 'China Glass',
    },
    {
        src: '/customerLogos/VITRUM_25.png',
        urlES: 'https://vitrumlife.it/magazine/',
        urlEN: 'https://vitrumlife.it/magazine/',
        alt: 'VITRUM',
    },
];

const Customers: FC<CustomersProps> = () => {
    const { lang } = useLanguage();

    return (
        <section
            className="bg-zinc-900 text-white bg-opacity-90 pb-24"
            style={{
                position: 'relative',
                zIndex: 10,
                borderBottomLeftRadius: '50% 100px',
                borderBottomRightRadius: '50% 100px',
            }}
        >
            <div className="flex flex-col max-w-6xl mx-auto py-36 px-6">
                <h2 className="text-left text-4xl md:text-7xl font-bold my-12 mt-24">
                    {lang === 'ESP' ? 'Ya han trabajado con nosotros' : 'Already worked with us'}
                </h2>
                <p className="text-lg leading-relaxed">
                    {lang === 'ESP' ? (
                        <>
                            <Image
                                src="/net3Complete.svg"
                                alt="net3"
                                height={24}
                                width={60}
                                className="inline align-baseline"
                            />{' '}
                            forma parte del grupo <span className="font-bold">PROPORCION 3</span>, una empresa con más de 30 años de experiencia como creadora de contenidos técnicos especializados para los sectores del Vidrio, Ventanas, Puertas, Cerramientos y Protección Solar. Entre las marcas que han trabajado con nosotros se encuentran:
                        </>
                    ) : (
                        <>
                            <Image
                                src="/net3Complete.svg"
                                alt="net3"
                                height={24}
                                width={60}
                                className="inline align-baseline"
                            />{' '}
                            is part of the <span className="font-bold">PROPORCION 3</span> group, a company with over 30 years of experience creating specialized technical content for the Glass, Windows, Doors, Enclosures, and Solar Protection sectors. Among the brands that have worked with us are:
                        </>
                    )}
                </p>

                <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                    {customersData.map((customer, index) => (
                        <a
                            key={index}
                            href={lang === 'ESP' ? customer.urlES : customer.urlEN}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-full h-36 sm:h-40 md:h-44 lg:h-48 rounded-lg overflow-hidden bg-white flex items-center justify-center"
                        >
                            <Image
                                src={customer.src}
                                alt={customer.alt}
                                fill
                                className="object-contain transition-transform duration-300 hover:scale-110"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Customers;
