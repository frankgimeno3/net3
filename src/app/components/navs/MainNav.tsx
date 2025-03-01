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
        <nav className='flex flex-row w-full text-white px-5 justify-between items-center bg-gray-950 bg-opacity-90'>
            <p className='px-5 text-4xl hover:opacity-90' onClick={() => handleRedirection("/")}
            >net3<span className='text-teal-400'>.es</span></p>
            <div className='flex flex-row relative text-sm'>
                <div className={` pt-6 pb-5 mx-3 text-center text-white ${section === "services" ? '' : 'opacity-50 hover:opacity-100'}`}
                    onClick={() => handleRedirection("services")} >
                    <p>{NavContent.services[lang]}</p>                </div>
                <div className={` pt-6 pb-5 mx-3 text-center text-white ${section === "ourMethod" ? '' : 'opacity-50 hover:opacity-100'}`}
                    onClick={() => handleRedirection("method")} >
                    <p>{NavContent.ourMethod[lang]}</p>                </div>
                <div className={` pt-6 pb-5 mx-3 text-center text-white ${section === "contentGuide" ? '' : 'opacity-50 hover:opacity-100'}`}
                    onClick={() => handleRedirection("guide")} >
                    <p>{NavContent.contentGuide[lang]}</p>
                </div>
                <div className={` pt-6 pb-5 mx-3 text-center text-white ${section === "contact" ? '' : 'opacity-50 hover:opacity-100'}`}
                    onClick={() => handleRedirection("/contact")} >
                    <p >{lang === "ENG" ? "Contact us" : "Contáctanos"}</p>
                </div>
                <div
                    className='cursor-pointer py-5 px-3 rounded-full hover:bg-white hover:bg-opacity-20'
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
        </nav >
    );
};

export default MainNav;
