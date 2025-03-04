import React, { FC } from 'react';

interface CardProps {
  opacityByPosition: string;
  heightByPosition: string;
  widthByPosition: string;
  titular: string;
  subtitulo: string;
  icono: string;
}

const Card: FC<CardProps> = ({ titular, subtitulo, icono, opacityByPosition, heightByPosition, widthByPosition }) => {
  return (
    <div
      className="flex flex-col items-center justify-center p-5 shadow-xl bg-white text-gray-500 rounded transition-all duration-300"
      style={{ height: heightByPosition, width: widthByPosition, opacity: opacityByPosition }}
    >
      <p className="font-bold text-3xl">{titular}</p>
      <p className="text-lg">{subtitulo}</p>
      <p className="text-2xl">{icono}</p>
    </div>
  );
};

export default Card;
