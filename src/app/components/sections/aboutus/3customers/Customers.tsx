import { useLanguage } from '@/app/context/LanguageContext';
import React, { FC } from 'react';

interface CustomersProps { }

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
        urlES: '#',
        urlEN: '#',
        alt: 'Glass Mexico',
    },
    {
        src: '/customerLogos/doorswindows-Mexico.png',
        urlES: '#',
        urlEN: '#',
        alt: 'Doors & Windows Mexico',
    },
    {
        src: '/customerLogos/CHINAGLASS_2.jpeg',
        urlES: '#',
        urlEN: '#',
        alt: 'China Glass',
    },
    {
        src: '/customerLogos/VITRUM_25.png',
        urlES: '#',
        urlEN: '#',
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
            <div className="flex flex-col max-w-5xl mx-auto py-36 px-6">
                <h2 className="text-left text-4xl md:text-7xl font-bold my-12 mt-24">
                    {lang === 'ESP' ? 'Ya han trabajado con nosotros' : 'Already worked with us'}
                </h2>
                <p>
                    {lang === 'ESP'
                        ? (
                            <>
                                <span className="font-bold pr-0.5">NET</span><span className="text-red-500 font-bold text-lg">3</span> forma parte del grupo <span className='font-bold'>PROPORCION 3</span>, una empresa con más de 30 años de experiencia como creadora de contenidos técnicos especializados para los sectores del Vidrio, Ventanas, Puertas, Cerramientos y Protección Solar. Entre las marcas que han trabajado con nosotros se encuentran:
                            </>
                        )
                        : (
                            <>
                                <span className="font-bold pr-0.5">NET</span><span className="text-red-500 font-bold text-lg">3</span> is part of the <span className='font-bold'>PROPORCION 3</span> group, a company with over 30 years of experience creating specialized technical content for the Glass, Windows, Doors, Enclosures, and Solar Protection sectors. Among the brands that have worked with us are:
                            </>
                        )
                    }
                </p>

                <div className="mt-12 flex flex-wrap -mx-2">
                    {customersData.map((customer, index) => (
                        <a
                            key={index}
                            href={lang === 'ESP' ? customer.urlES : customer.urlEN}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-1/3 px-2 mb-4 overflow-hidden rounded-lg"
                            style={{ height: 150 }}
                        >
                            <div className="flex items-center justify-center h-full">
                                <img
                                    src={customer.src}
                                    alt={customer.alt}
                                    className="w-full h-auto object-center transform transition-transform duration-300 hover:scale-110"
                                    style={{ display: 'block' }}
                                />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Customers;
