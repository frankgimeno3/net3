'use client';

import React, { FC, useEffect, useState } from 'react';
import NavContent from "../content/NavContent.json";
import 'flag-icons/css/flag-icons.min.css';
import { useRouter } from 'next/navigation';

interface MainNavProps {
    section: string;
    setSection: React.Dispatch<React.SetStateAction<string>>;
    lang: "ESP" | "ENG";
    setLang: React.Dispatch<React.SetStateAction<"ESP" | "ENG">>;
}

const MainNav: FC<MainNavProps> = ({ section, lang, setLang }) => {
    const router = useRouter();
    const [showLangMenu, setShowLangMenu] = useState(false);

    const handleRedirection = (redirection: string) => {
        router.push(redirection);
    };

    return (
        <nav className='flex flex-row w-full text-white p-5 justify-between items-center bg-black bg-opacity-80'>
            <p className='px-5 text-4xl hover:opacity-90' onClick={() => handleRedirection("/")}
            >net3<span className='text-teal-400'>.es</span></p>
            <div className='flex flex-row'>
                <div className={`px-4 py-2 mx-1 cursor-pointer transition-colors rounded ${section === "aboutus" ? 'bg-teal-700 ' : 'hover:bg-white hover:bg-opacity-5'}`}
                    onClick={() => handleRedirection("/")}>
                    <p>{NavContent.aboutus[lang]}</p>
                </div>
                <div className={`px-4 py-2 mx-1 cursor-pointer transition-colors rounded ${section === "ourMethod" ? 'bg-teal-700 ' : 'hover:bg-white hover:bg-opacity-5'}`}
                    onClick={() => handleRedirection("method")}>
                    <p>{NavContent.ourMethod[lang]}</p>
                </div>
                <div className={`px-4 py-2 mx-1 cursor-pointer transition-colors rounded ${section === "contentGuide" ? 'bg-teal-700 ' : 'hover:bg-white hover:bg-opacity-5'}`}
                    onClick={() => handleRedirection("guide")}>
                    <p>{NavContent.contentGuide[lang]}</p>
                </div>
                
            </div>
            <div className='flex flex-row relative'>
            <div className={`px-4 py-2 mx-1 cursor-pointer transition-colors rounded ${section === "contact" ? 'font-bold' : 'hover:bg-white hover:bg-opacity-5'}`}>
                    <p onClick={() => handleRedirection("/contact")}>{lang === "ENG" ? "Contact us" : "Contáctanos"}</p>
                </div>
                <div
                    className='cursor-pointer p-2 px-3 rounded-full hover:bg-white hover:bg-opacity-20'
                    onClick={() => setShowLangMenu(!showLangMenu)}
                >
                    <span className={`fi ${lang === "ESP" ? "fi-es" : "fi-gb"} rounded-full`} style={{ fontSize: '24px' }} />
                </div>
                {showLangMenu && (
                    <div className='absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-lg flex flex-col'>
                        <div
                            className='flex items-center px-3 py-2 cursor-pointer hover:bg-gray-700 rounded'
                            onClick={() => { setLang("ESP"); setShowLangMenu(false); }}
                        >
                            <span className='fi fi-es rounded-full' style={{ fontSize: '24px' }} />
                        </div>
                        <div
                            className='flex items-center px-3 py-2 cursor-pointer hover:bg-gray-700 rounded'
                            onClick={() => { setLang("ENG"); setShowLangMenu(false); }}
                        >
                            <span className='fi fi-gb rounded-full' style={{ fontSize: '24px' }} />
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default MainNav;
