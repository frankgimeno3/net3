import React, { FC, useEffect, useState } from 'react';
import Card from './Card';
import content2 from './content-2.json';

interface CardsContentProps {
    lang: "ESP" | "ENG";
}

const CardsContent: FC<CardsContentProps> = ({ lang }) => {
    const content = content2[lang];

    const [selectedCard, setSelectedCard] = useState<string>('card5');
    const [selectedTitle, setSelectedTitle] = useState<string>(content.Contenidos.titular);
    const [isMobile, setIsMobile] = useState<boolean>(false);

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

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth < 768);
            const handleResize = () => setIsMobile(window.innerWidth < 768);
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const startAutoChange = () => {
        return setInterval(() => {
            setSelectedCard(prev => {
                const currentIndex = cardsArray.findIndex(card => card.name === prev);
                const nextIndex = (currentIndex + 1) % cardsArray.length;
                const nextCard = cardsArray[nextIndex];
                setSelectedTitle(nextCard.titleValue);
                return nextCard.name;
            });
        }, 4500);
    };

    const [autoChangeInterval, setAutoChangeInterval] = useState<NodeJS.Timeout | null>(null);

    useEffect(() => {
        if (autoChangeInterval) {
            clearInterval(autoChangeInterval);
        }
        const interval = startAutoChange();
        setAutoChangeInterval(interval);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [selectedCard]);

    const handleSelectedTitle = (cardId: string) => {
        if (cardId === 'card1' || cardId === 'card2' || cardId === 'card3') {
            setSelectedTitle(content.Planes.titular);
        }
        if (cardId === 'card3' || cardId === 'card4' || cardId === 'card5' || cardId === 'card6') {
            setSelectedTitle(content.Contenidos.titular);
        }
        if (cardId === 'card7' || cardId === 'card8' || cardId === 'card9') {
            setSelectedTitle(content.Promocion.titular);
        }
    };

    const handleCardClick = (cardId: string) => {
        setSelectedCard(cardId);
        handleSelectedTitle(cardId);
    };

    const getCircularDiff = (index: number, selectedIndex: number, total: number) => {
        let diff = index - selectedIndex;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;
        return diff;
    };

    return (
        <div className='flex flex-col justify-start w-full'>
            {isMobile ? (
                <div key={selectedCard} className=''>
                    <Card
                        opacityByPosition='100%'
                        heightByPosition='400px'
                        widthByPosition='300px'
                        titulo={selectedTitle}
                        subtitulo={cardsArray.find(card => card.name === selectedCard)?.subtitlecontent || ''}
                    />
                </div>
            ) : (
                <div className='relative ' style={{ width: '400px', height: '400px', margin: '0 auto' }}>
                    {cardsArray.map((card, index) => {
                        const selectedIndex = cardsArray.findIndex(c => c.name === selectedCard);
                        const diff = getCircularDiff(index, selectedIndex, cardsArray.length);
                        const offsetX = 100;
                        const offsetY = 0;

                        if (Math.abs(diff) > 1) return null;

                        const isSelected = card.name === selectedCard;
                        const cardWidth = isSelected ? 350 : 300;
                        const cardHeight = isSelected ? 300 : 250;

                        const horizontalOffset = -diff * offsetX;
                        const verticalOffset = Math.abs(diff) * offsetY;

                        const zIndex = 100 - Math.abs(diff);

                        return (
                            <div
                                key={card.name}
                                onClick={() => handleCardClick(card.name)}
                                style={{
                                    position: 'absolute',
                                    left: `calc(50% + ${horizontalOffset}px - ${cardWidth / 2}px)`,
                                    top: `calc(50% + ${verticalOffset}px - ${cardHeight / 2}px)`,
                                    zIndex: zIndex,
                                    transition: 'all 2s',
                                }}
                            >
                                <Card
                                    opacityByPosition={isSelected ? '100%' : '30%'}
                                    heightByPosition={`${cardHeight}px`}
                                    widthByPosition={`${cardWidth}px`}
                                    titulo={selectedTitle}
                                    subtitulo={isSelected ? card.subtitlecontent : ''}
                                />
                            </div>
                        );
                    })}
                </div>
            )}
            <div className='flex flex-row mx-auto'>
                {cardsArray.reverse().map((card) => (
                    <div
                        key={card.name}
                        onClick={() => handleCardClick(card.name)}
                        className='w-3 h-3 rounded-full bg-yellow-300 mx-2'
                        style={{ opacity: selectedCard === card.name ? '100%' : '40%', cursor: 'pointer' }}
                    />
                ))}
            </div>
        </div>
    );
};

export default CardsContent;
