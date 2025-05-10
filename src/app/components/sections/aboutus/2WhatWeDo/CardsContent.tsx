import React, { FC, useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import content2 from './content-2.json';
import Card from './Card';
import ProgressBar from './ProgressBar'; // Asegúrate de importar correctamente el componente de la barra de progreso

gsap.registerPlugin(ScrollTrigger);

interface CardsContentProps {
  lang: 'ESP' | 'ENG';
}

const CardsContent: FC<CardsContentProps> = ({ lang }) => {
  const content = content2[lang];
  const cardsArray = [
    { name: 'card1', titleValue: content.Planes.titular, subtitlecontent: content.Planes.content1 },
    { name: 'card2', titleValue: content.Contenidos.titular, subtitlecontent: content.Contenidos.content1 },
    { name: 'card3', titleValue: content.Promocion.titular, subtitlecontent: content.Promocion.content1 },
    { name: 'card4', titleValue: content.Planes.titular, subtitlecontent: content.Planes.content2 },
    { name: 'card5', titleValue: content.Contenidos.titular, subtitlecontent: content.Contenidos.content2 },
    { name: 'card6', titleValue: content.Promocion.titular, subtitlecontent: content.Promocion.content2 },
    { name: 'card7', titleValue: content.Planes.titular, subtitlecontent: content.Planes.content3 },
    { name: 'card8', titleValue: content.Contenidos.titular, subtitlecontent: content.Contenidos.content3 },
    { name: 'card9', titleValue: content.Promocion.titular, subtitlecontent: content.Promocion.content3 },
    { name: 'card10', titleValue: content.Contenidos.titular, subtitlecontent: content.Contenidos.content4 }
  ];

  const [selectedCard, setSelectedCard] = useState<number>(0);
  const [showButtons, setShowButtons] = useState<boolean>(false); // Estado para mostrar los botones
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // ScrollTrigger para los botones flotantes
    const buttonTrigger = ScrollTrigger.create({
      trigger: el,
      start: 'top top', // Cuando la parte superior de la sección está en la parte superior de la pantalla
      end: `+=${cardsArray.length * 100}vh`, // Extiende hasta la última tarjeta
      onEnter: () => setShowButtons(true), // Muestra los botones cuando se entra en la sección
      onLeave: () => setShowButtons(false), // Oculta los botones cuando se sale de la sección
      onEnterBack: () => setShowButtons(true), // Muestra los botones cuando se vuelve hacia la sección
      onLeaveBack: () => setShowButtons(false), // Oculta los botones al irse hacia arriba
    });

    // ScrollTrigger para las tarjetas
    ScrollTrigger.create({
      trigger: el,
      start: 'top top',
      end: `+=${cardsArray.length * 100}vh`, // Ajustar a la cantidad de tarjetas (100vh por tarjeta)
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const index = Math.floor(progress * cardsArray.length);
        setSelectedCard(Math.min(index, cardsArray.length - 1));
      },
    });

    // ScrollTrigger para que los botones desaparezcan al llegar al final (última tarjeta)
    const hideButtonsTrigger = ScrollTrigger.create({
      trigger: cardRefs.current[cardsArray.length - 1], // Última tarjeta
      start: 'top bottom', // Cuando la última tarjeta esté completamente visible
      onEnter: () => setShowButtons(false), // Los botones desaparecen
    });

    return () => {
      buttonTrigger.kill();
      hideButtonsTrigger.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [cardsArray.length]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      gsap.to(card, {
        x: i === selectedCard ? '0%' : i < selectedCard ? '-100%' : '100%',
        opacity: i === selectedCard ? 1 : 0,
        visibility: i === selectedCard ? 'visible' : 'hidden',
        duration: 0.6,
        ease: 'power2.out',
        pointerEvents: i === selectedCard ? 'auto' : 'none',
      });
    });
  }, [selectedCard]);

  // Función para desplazar hacia la tarjeta anterior o siguiente
  const scrollToCard = (direction: 'up' | 'down') => {
    // Hacemos el scroll hacia arriba o hacia abajo por 10px
    if (direction === 'up') {
      window.scrollBy({ top: -80, behavior: 'smooth' });
    } else if (direction === 'down') {
      window.scrollBy({ top: 80, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section ref={containerRef} className="relative text-gray-600 mb-32 overflow-hidden">
        <div style={{ height: `220vh` }} className="relative">
          <div className="flex flex-col sticky top-0 h-screen items-center justify-center px-2">
            <h2 className="text-4xl md:text-5xl font-bold mt-5 text-center">
              {lang === 'ESP' ? '¿Qué hacemos?' : 'What we do'}
            </h2>

            {/* Fondo blanco flotante */}
            <div className="mt-12 relative max-w-3xl w-full h-96">
              <div className="absolute inset-0 bg-gray-100 rounded-xl shadow-xl z-0" />

              {cardsArray.map((card, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    if (el) cardRefs.current[index] = el;
                  }}
                  className="absolute inset-0 z-10 flex items-center justify-center"
                  style={{ pointerEvents: index === selectedCard ? 'auto' : 'none' }}
                >
                  <Card
                    titulo={card.titleValue}
                    subtitulo={card.subtitlecontent}
                    opacityByPosition={index === selectedCard ? '1' : '0'}
                    heightByPosition="100%"
                    widthByPosition="100%"
                  />
                </div>
              ))}
            </div>

            {/* Barra de progreso */}
            <ProgressBar current={selectedCard + 1} total={cardsArray.length} />
          </div>
        </div>
      </section>

      {/* Botones de navegación flotantes */}
      {showButtons && (
        <>
          <button
            onClick={() => scrollToCard('up')}
            className="fixed bg-gray-100 hover:bg-gray-200 hover:bg-opacity-40 left-96 top-96 mt-12 transform -translate-y-1/2 p-4 rounded-full bg-white shadow-xl text-gray-500 font-bold z-[9999]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-left">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            onClick={() => scrollToCard('down')}
            className="fixed bg-gray-100 hover:bg-gray-200 hover:bg-opacity-40 right-96 top-96 mt-12 transform -translate-y-1/2 p-4 rounded-full bg-white shadow-xl text-gray-500 font-bold z-[9999]"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-right">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </>
      )}
    </>
  );
};

export default CardsContent;
