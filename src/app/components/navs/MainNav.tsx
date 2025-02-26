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
    const router = useRouter()
    const [content, setContent] = useState(NavContent.ESP);
    const [showLangMenu, setShowLangMenu] = useState(false);

    useEffect(() => {
        setContent(NavContent[lang as keyof typeof NavContent]);
    }, [lang]);

    const handleRedirection = (redirection: string)=>{
        router.push(redirection)
    }

    return (
        <nav className='flex flex-row w-full text-white p-5 justify-between items-center'>
            <p className='px-5 text-4xl' onClick={()=>{handleRedirection("/")}}
            >net3<span className='text-teal-400'>.es</span></p>
            <div className='flex flex-row'>
                {content.sections.map(({ label, value }) => (
                    <div 
                        key={value} 
                        className={`px-4 py-2 mx-1 cursor-pointer transition-colors rounded ${section === value ? 'bg-teal-400 bg-opacity-60' : 'hover:bg-white hover:bg-opacity-5'}`}
                        onClick={() => setSection(value)}
                    >
                        <p>{label}</p>
                    </div>
                ))}
            </div>
            <div className='relative'>
                <div 
                    className='cursor-pointer p-2 px-3 rounded-full hover:bg-white hover:bg-opacity-20 ' 
                    onClick={() => setShowLangMenu(!showLangMenu)}
                >
                    <span className={`fi ${lang === "ESP" ? "fi-es" : "fi-gb"} rounded-full`} style={{ fontSize: '24px' }} />
                </div>
                {showLangMenu && (
                    <div className='absolute right-0 mt-2 bg-gray-800 rounded-lg shadow-lg flex flex-col '>
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
