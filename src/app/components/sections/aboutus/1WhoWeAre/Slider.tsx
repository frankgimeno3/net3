import React, { FC, useEffect, useState } from 'react';

interface SliderProps {
  paises: string[];
}

const Slider: FC<SliderProps> = ({ paises }) => {
  const [fase, setFase] = useState(0);
  const [paisIndex, setPaisIndex] = useState(0);

  useEffect(() => {
    // Cambiar la fase cada segundo
    const faseInterval = setInterval(() => {
      if (fase <= 2) {
        setFase(prevFase => prevFase + 1);
      } else {
        setFase(0);
      }
    }, 2000);

    return () => clearInterval(faseInterval);
  }, [fase]);

  useEffect(() => {
    // Cuando fase es 3, mover los países una posición hacia la izquierda
    if (fase === 3) {
      setPaisIndex(prevIndex => (prevIndex + 1) % paises.length);
    }
  }, [fase, paises.length]);

  // Obtener los 5 países actuales según el índice
  const pais1 = paises[(paisIndex + 0) % paises.length];
  const pais2 = paises[(paisIndex + 1) % paises.length];
  const pais3 = paises[(paisIndex + 2) % paises.length];
  const pais4 = paises[(paisIndex + 3) % paises.length];
  const pais5 = paises[(paisIndex + 4) % paises.length];

  // Definir los anchos de los divs según la fase
  let width1 = '0%';
  let width2 = '0%';
  let width3 = '0%';
  let width4 = '0%';
  let width5 = '0%';

  if (fase === 0) {
    width1 = '33.33%';
    width2 = '33.33%';
    width3 = '33.33%';
    width4 = '0%';
    width5 = '0%';
  } else if (fase === 1) {
    width1 = '0%';
    width2 = '33.33%';
    width3 = '33.33%';
    width4 = '33.33%';
    width5 = '0%';
  } else if (fase === 2) {
    width1 = '0%';
    width2 = '0%';
    width3 = '33.33%';
    width4 = '33.33%';
    width5 = '33.33%';
  } else if (fase === 3) {
    width1 = '0%';
    width2 = '0%';
    width3 = '33.33%';
    width4 = '33.33%';
    width5 = '33.33%';
  }

  return (
    <>
      <p className="mx-auto text-9xl">Fase {fase}</p>
      <div className="bg-black w-full flex justify-center items-center py-4 px-24">
        <div
          className="bg-white text-black flex justify-center items-center h-32 mx-2"
          style={{
            width: width1,
            transition: 'width 0.5s ease-in-out', 
          }}
        >
          {pais1}
        </div>
        <div
          className="bg-white text-black flex justify-center items-center h-32 mx-2"
          style={{
            width: width2,
            transition: 'width 0.5s ease-in-out',  
          }}
        >
          {pais2}
        </div>
        <div
          className="bg-white text-black flex justify-center items-center h-32 mx-2"
          style={{
            width: width3,
            transition: 'width 0.5s ease-in-out', // Transición suave en el ancho
          }}
        >
          {pais3}
        </div>
        <div
          className="bg-white text-black flex justify-center items-center h-32 mx-2"
          style={{
            width: width4,
            transition: 'width 0.5s ease-in-out', // Transición suave en el ancho
          }}
        >
          {pais4}
        </div>
        <div
          className="bg-white text-black flex justify-center items-center h-32 mx-2"
          style={{
            width: width5,
            transition: 'width 0.5s ease-in-out', // Transición suave en el ancho
          }}
        >
          {pais5}
        </div>
      </div>
    </>
  );
};

export default Slider;
