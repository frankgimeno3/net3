import React, { FC, useState, useEffect } from 'react';
import content3 from './content-3.json';
import Svgs from './svgs/Svgs';

interface WhyWithUsProps {
  lang: "ESP" | "ENG";
}

const WhyWithUs: FC<WhyWithUsProps> = ({ lang }) => {
  const content = content3[lang];

  const [selectedReason, setSelectedReason] = useState<number>(0);

  const reasons = [
    'Asegúrate de tener contenido para todo el año en redes',
    'Externaliza en manos de un especialista',
    'Promociona tu contenido sin presupuestos adicionales',
    'Haz contenido para varias redes y formatos haciendo una sola gestión',
    'Convierte el coste variable de la comunicación en un coste previsible'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedReason(prevReason => (prevReason + 1) % reasons.length);  
    }, 2000);  

    // Limpieza al desmontar el componente
    return () => clearInterval(timer);
  }, [reasons.length]);  // Agregada la dependencia 'reasons.length'

  return (
    <div className='flex flex-col min-h-screen text-center text-white justify-center text-xl py-12'>
      <div>
        <p className="text-4xl sm:text-5xl md:text-8xl glitch">{content.titular}</p>
      </div>

      <div className="flex justify-center mt-24 mb-56 px-12 md:mb-0 md:px-0">
        <div className="flex flex-col bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-lg max-w-2xl w-full justify-left">
          <div className="flex flex-col items-left text-left">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className={`flex items-center flex-row py-2 text-xl`}
              >
                <div className='w-12 h-12 mt-1 mr-5'>
                  <Svgs index={index} selectedReason={selectedReason} />
                </div>
                <p className={`${selectedReason === index ? 'text-yellow-200' : 'text-gray-400 opacity-50'}`}> 
                  {reason} 
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyWithUs;
