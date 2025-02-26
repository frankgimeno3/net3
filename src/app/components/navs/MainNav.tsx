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

const MainNav: FC<MainNavProps> = ({ section, setSection, lang, setLang }) => {
    const router = useRouter();
    const [showLangMenu, setShowLangMenu] = useState(false);

    const handleRedirection = (redirection: string) => {
        router.push(redirection);
    };

    return (
        <nav className='flex flex-row w-full text-white p-5 justify-between items-center'>
            <p className='px-5 text-4xl' onClick={() => handleRedirection("/")}
            >net3<span className='text-teal-400'>.es</span></p>
            <div className='flex flex-row'>
                <div className={`px-4 py-2 mx-1 cursor-pointer transition-colors rounded ${section === "aboutus" ? 'bg-teal-400 bg-opacity-60' : 'hover:bg-white hover:bg-opacity-5'}`}
                    onClick={() => setSection("aboutus")}>
                    <p>{NavContent.aboutus[lang]}</p>
                </div>
                <div className={`px-4 py-2 mx-1 cursor-pointer transition-colors rounded ${section === "ourMethod" ? 'bg-teal-400 bg-opacity-60' : 'hover:bg-white hover:bg-opacity-5'}`}
                    onClick={() => setSection("ourMethod")}>
                    <p>{NavContent.ourMethod[lang]}</p>
                </div>
                <div className={`px-4 py-2 mx-1 cursor-pointer transition-colors rounded ${section === "contentGuide" ? 'bg-teal-400 bg-opacity-60' : 'hover:bg-white hover:bg-opacity-5'}`}
                    onClick={() => setSection("contentGuide")}>
                    <p>{NavContent.contentGuide[lang]}</p>
                </div>
                <div className={`px-4 py-2 mx-1 cursor-pointer transition-colors rounded ${section === "contact" ? 'bg-teal-400 bg-opacity-60' : 'hover:bg-white hover:bg-opacity-5'}`}>
                    <p onClick={() => handleRedirection("/contact")}>{lang === "ENG" ? "Contact us" : "Contáctanos"}</p>
                </div>
            </div>
            <div className='relative'>
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
