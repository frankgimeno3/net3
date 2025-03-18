import React, { FC } from 'react';
import { useRouter } from 'next/navigation';

interface PcServicesProps {
    selectedService: string;
    lang: string;
}

const PcServices: FC<PcServicesProps> = ({ selectedService, lang }) => {
    const router = useRouter();

    const esp = [
        'Consultoría de contenido',
        'Notas de prensa',
        'Newsletter',
        'Contenido para redes',
        'SEM',
        'Otros servicios'
    ];

    const eng = [
        'Content consultancy',
        'Press Releases',
        'Newsletter',
        'Social Media Content',
        'SEM',
        'Other services'
    ];

    const directions = ['/services/consultancy', '/services/pr', '/services/newsletter', '/services/social', '/services/sem', '/services/other'];

    const contentArray = lang === 'ESP' ? esp : eng;

    const handleRedirection = (direction: string) => {
        router.push(`${direction}`);
    };

    return (
        <div
            style={{
                position: 'fixed',
                top: '0',
                left: '0',
                width: '256px',
                height: '100vh',
                color: '#4a5568',
                zIndex: 10,
                marginTop: '75px',
            }}
            className='bg-gray-800 bg-opacity-60 text-white text-sm pt-8'
        >
            <div className="flex flex-col">
                {contentArray.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleRedirection(directions[index])}
                        className={`flex flex-row cursor-pointer transition-all ${selectedService === item
                                ? 'bg-yellow-400 bg-opacity-20 text-white font-semibold'
                                : 'hover:bg-yellow-300 text-white hover:text-gray-600 pl-2'
                            }`}
                    >
                        {selectedService === item && (
                            <div className='bg-yellow-200 bg-opacity-100 w-2'></div>
                        )}
                        <div className="pl-2 py-2">{item}</div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default PcServices;
