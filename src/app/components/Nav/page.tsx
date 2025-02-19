'use client';

import React, { FC } from 'react';

interface MainNavProps {
    section: any;
    setSection: any;
}

const MainNav: FC<MainNavProps> = ({ section, setSection }) => {
    const items = [
        { label: 'Quiénes somos?', value: 'quienessomos' },
        { label: 'Qué hacemos?', value: 'quehacemos' },
        { label: 'Sobre el plan de contenidos', value: 'plancontenidos' },
        { label: 'Nuestros 7 pasos', value: 'pasos' },
        { label: 'Hablemos', value: 'hablemos' }
    ];

    return (
        <nav className='flex flex-row w-full text-white'>
            <p>Logo</p>
            <div className='flex flex-row'>
                {items.map(({ label, value }) => (
                    <div 
                        key={value} 
                        className={`px-4 py-2 cursor-pointer transition-colors rounded ${section === value ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        onClick={() => setSection(value)}
                    >
                        <p>{label}</p>
                    </div>
                ))}
            </div>
            <div></div>
        </nav>
    );
};

export default MainNav;
