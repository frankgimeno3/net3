'use client';

import React, { FC, useEffect, useState } from 'react';
import NavContent from "../content/NavContent.json";

interface MainNavProps {
    section: string;
    setSection: React.Dispatch<React.SetStateAction<string>>;
    lang: "ESP" | "ENG";
    setLang: React.Dispatch<React.SetStateAction<"ESP" | "ENG">>;
}

const MainNav: FC<MainNavProps> = ({ section, setSection, lang, setLang }) => {
    const [content, setContent] = useState(NavContent.ESP);

    useEffect(() => {
        setContent(NavContent[lang as keyof typeof NavContent]);
    }, [lang]);

    return (
        <nav className='flex flex-row w-full text-white p-5 justify-between items-center'>
            <p>Logo</p>
            <div className='flex flex-row'>
                {content.sections.map(({ label, value }) => (
                    <div 
                        key={value} 
                        className={`px-4 py-2 mx-1 cursor-pointer transition-colors rounded ${section === value ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        onClick={() => setSection(value)}
                    >
                        <p>{label}</p>
                    </div>
                ))}
            </div>
            <div className='flex flex-row'>
                {content.languages.map(({ label, value }) => (
                    <div 
                        key={value} 
                        className={`px-2 py-1 mx-1 cursor-pointer transition-colors rounded ${lang === value ? 'bg-white bg-opacity-10' : 'hover:bg-white hover:bg-opacity-5'}`}
                        onClick={() => setLang(value as "ESP" | "ENG")}
                    >
                        <p>{label}</p>
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default MainNav;
