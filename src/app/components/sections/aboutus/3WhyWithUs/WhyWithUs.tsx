import React, { FC, useState, useEffect } from 'react';
import content3 from './content-3.json';

interface WhyWithUsProps {
  lang: "ESP" | "ENG";
}

const WhyWithUs: FC<WhyWithUsProps> = ({ lang }) => {
  const content = content3[lang];
 

  return (
    <div className='flex flex-col min-h-screen  text-center text-white justify-center text-xl py-12'>
      <div>
        <p className="text-4xl sm:text-8xl glitch">{content.titular}</p>
      </div>{/* Aqui quiero poner una card centrada, con los iconos en lista vertical como sin fuerza, con uno seleccionado que itere
el seleccionado sí debe tener fuerza y color, y a la derecha se debe de mostrar en texto el motivo a destacar
Los motivos deben ser:
· Asegúrate de tener contenido para todo el año en redes
· Externaliza en manos de un especialista
· Promociona tu contenido sin presupuestos adicionales
· Haz contenido para varias redes y formatos haciendo una sola gestión
· Convierte el coste variable de la comunicación en un coste previsible */}
</div>
  );
};

export default WhyWithUs;
