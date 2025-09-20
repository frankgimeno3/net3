"use client" 
import React, { FC } from 'react';
import ContentsFilter from './dashboardcomponents/ContentsFilter';
import ContentCard from './dashboardcomponents/ContentCard';
import DashboardNav from './dashboardcomponents/DashboardNav';

interface DashboardProps {
  
}

const Dashboard: FC<DashboardProps> = ({ }) => {
  return (
    <div>
        <p>Aquí tiene que haber:</p>
        <p>Un layout que importe una nav desde la que hacer logout</p>
        <DashboardNav/>
        <p>Listado de los contents, como cards</p>
        <ContentCard/>
        <p>Opción de filtrar los contents para encontrarlos</p>
        <ContentsFilter/>
        <p>Redirección a crear un content</p>
        <p>Redirección a detalles de un content creado</p>
        <p>En el futuro, potencialmente más cosas para gestionar</p>
    </div>
  );
};

export default Dashboard;