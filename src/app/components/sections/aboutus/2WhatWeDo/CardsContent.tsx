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
       
