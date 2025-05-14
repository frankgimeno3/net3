import React, { FC } from 'react';

interface CardProps {
  opacityByPosition: string;
  heightByPosition: string;
  widthByPosition: string;
  titulo: string;
  subtitulo: string;
}

const Card: FC<CardProps> = ({ subtitulo, opacityByPosition, heightByPosition, widthByPosition, titulo }) => {
  return (
    <div
      className="flex flex-col shadow-xl text-gray-500 rounded-md transition-all duration-300 h-full overflow-hidden border-2 border-transparent"
      style={{
        height: heightByPosition,
        width: widthByPosition,
        opacity: opacityByPosition,
      }}
    >
      <div className="flex flex-col justify-center w-full bg-gray-500 px-12 h-36 text-lg md:text-xl">
        <p className="my-auto text-center text-white font-bold">{titulo}</p>
      </div>
      <div className="flex flex-col h-full px-12 bg-white">
        <p className={`text-lg md:text-2xl text-center my-auto`}>
          {subtitulo}
        </p>
      </div>
    </div>
  );
};

export default Card;
