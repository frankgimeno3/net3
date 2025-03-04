import React, { FC, useState, useEffect } from 'react';
import content3 from './content-3.json';
import Card from './Card';

interface SectionContent {
  ESP: { label: string; value: string }[];
  ENG: { label: string; value: string }[];
}

interface WhyWithUsProps {
  lang: "ESP" | "ENG";
}

const WhyWithUs: FC<WhyWithUsProps> = ({ lang }) => {
  const content = content3[lang];
  const [selectedCard, setSelectedCard] = useState<string>('card3');
  const [styles, setStyles] = useState<{ [key: string]: { opacity: string; height: string; width: string } }>({});
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

  const cardsArray = [
    { name: 'card1', titleValue: content.card1.titlevalue, subtitlecontent: content.card1.subtitlecontent, iconcontent: content.card1.iconcontent },
    { name: 'card2', titleValue: content.card2.titlevalue, subtitlecontent: content.card2.subtitlecontent, iconcontent: content.card2.iconcontent },
    { name: 'card3', titleValue: content.card3.titlevalue, subtitlecontent: content.card3.subtitlecontent, iconcontent: content.card3.iconcontent },
    { name: 'card4', titleValue: content.card4.titlevalue, subtitlecontent: content.card4.subtitlecontent, iconcontent: content.card4.iconcontent },
    { name: 'card5', titleValue: content.card5.titlevalue, subtitlecontent: content.card5.subtitlecontent, iconcontent: content.card5.iconcontent }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedCard(prev => {
        const currentIndex = cardsArray.findIndex(card => card.name === prev);
        const nextIndex = (currentIndex + 1) % cardsArray.length;
        return cardsArray[nextIndex].name;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const newStyles = cardsArray.reduce((acc, card) => {
      acc[card.name] = card.name === selectedCard
        ? { opacity: '100%', height: '450px', width: '350px' }
        : { opacity: '30%', height: '400px', width: '150px' };
      return acc;
    }, {} as { [key: string]: { opacity: string; height: string; width: string } });
    setStyles(newStyles);
  }, [selectedCard]);

  const handleCardClick = (cardId: string) => {
    setSelectedCard(cardId);
  };

  return (
    <div className='flex flex-col  min-h-screen '>
      <p className='text-7xl md:text-9xl text-white text-center pb-12 '>{content.titular}</p>
      <div>
        <div className='flex justify-center mb-4'>
          {cardsArray.map((card) => (
            <div
              key={card.name}
              onClick={() => handleCardClick(card.name)}
              className='w-3 h-3 rounded-full bg-gray-100 mx-2'
              style={{ opacity: selectedCard === card.name ? '100%' : '40%', cursor: 'pointer' }}
            />
          ))}
        </div>
        <div className='flex flex-row justify-center'>
          {isMobile ? (
            <div key={selectedCard} className='px-2'>
              <Card
                opacityByPosition='100%'
                heightByPosition='400px'
                widthByPosition='300px'
                titular={cardsArray.find(card => card.name === selectedCard)?.titleValue || ''}
                subtitulo={cardsArray.find(card => card.name === selectedCard)?.subtitlecontent || ''}
                icono={cardsArray.find(card => card.name === selectedCard)?.iconcontent || ''}
              />
            </div>
          ) : (
            cardsArray.map(card => (
              <div key={card.name} onClick={() => handleCardClick(card.name)} style={{ cursor: 'pointer' }} className='mx-2'>
                <Card
                  opacityByPosition={styles[card.name]?.opacity || '30%'}
                  heightByPosition={styles[card.name]?.height || '900px'}
                  widthByPosition={styles[card.name]?.width || '100px'}
                  titular={card.titleValue}
                  subtitulo={card.subtitlecontent}
                  icono={card.iconcontent}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default WhyWithUs;
