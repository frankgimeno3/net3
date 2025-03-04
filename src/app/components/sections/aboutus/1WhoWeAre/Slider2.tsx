// Slider.tsx
import React, { FC, useEffect, useState } from 'react';

interface SliderProps {
  paises: string[];
}

const Slider: FC<SliderProps> = ({ paises }) => {
  const [paisesVisibles, setPaisesVisibles] = useState<{ pais: string }[]>( 
    paises.slice(0, 10).map(pais => ({ pais }))
  );
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!animating) {
        setAnimating(true);

        setPaisesVisibles((prevPaises) => {
          return prevPaises.map((paisObj, index) => {
            if (index === 0 || index === 9) {
              return paisObj;  
            } else {
              return paisObj;  
            }
          });
        });

        setTimeout(() => {
          setPaisesVisibles((prevPaises) => {
            const newPaises = [
              ...prevPaises.slice(1),
              { pais: paises[(paises.indexOf(prevPaises[prevPaises.length - 1].pais) + 1) % paises.length] }
            ];

            return newPaises;
          });

          setAnimating(false);
        }, 1000); 
      }
    }, 1300);  

    return () => clearInterval(interval);
  }, [animating, paises]);

  const getStyles = (index: number) => {
    const totalWidth = 100;  
    const widthPerItem = totalWidth / 8;  

    if (index === 0 || index === 9) {
      return {
        width: `${(totalWidth / 9)}%`, 
        transition: 'all 1s ease-in-out',
      };
    }

    return {
      width: `${widthPerItem}%`,  
      marginLeft: index !== 0 ? '0.5rem' : '0',
      marginRight: index !== 9 ? '0.5rem' : '0',
      transition: 'all 1s ease-in-out',
    };
  };

  return (
    <div className='bg-black w-full flex justify-center items-center py-4 px-24'>
      {paisesVisibles.map((paisObj, index) => (
        <div
          key={paisObj.pais}
          className={`fi fi-${paisObj.pais} text-6xl`}
          style={getStyles(index)}  
        />
      ))}
    </div>
  );
};

export default Slider;
