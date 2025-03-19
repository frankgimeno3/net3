"use client"
import React, { FC, useEffect, useRef, useState } from 'react';
import { engContent, espContent } from '../content';
import MainNav from '@/app/components/navs/MainNav';
import PcServices from '../../components/servicesMenus/pcServices';
import FooterSection from '@/app/components/navs/FooterSection';
import MServices from '../../components/servicesMenus/mServices';
import ContactRedirectionButton from '@/app/components/ContactRedirectionButton';
import { social } from './socialContents.json';

interface SocialProps { }

const Social: FC<SocialProps> = ({ }) => {
    const [section, setSection] = useState("services");
    const [lang, setLang] = useState<"ESP" | "ENG">("ESP");
    const [selectedService, setSelectedService] = useState(
        lang === "ESP" ? espContent[3] : engContent[3]
    );
    const [selectedQuestion, setSelectedQuestion] = useState<string>("none");

    const footerRef = useRef<HTMLDivElement>(null);
    const [isNearFooter, setIsNearFooter] = useState(false);

    const handleSelectedQuestion = (question: string) => {
        setSelectedQuestion((prev) => (prev === question ? "none" : question));
    };

    useEffect(() => {
        setSelectedService(lang === "ESP" ? espContent[3] : engContent[3]);
    }, [lang]);

    useEffect(() => {
        const handleScroll = () => {
            if (!footerRef.current) return;
            const footerTop = footerRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            setIsNearFooter(footerTop < windowHeight + 60);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const content = lang === "ESP" ? social.ESP : social.ENG;

    return (
        <div
            className="relative flex flex-col w-full justify-between text-white"
            style={{
                backgroundImage: 'url(/background/bgrnd.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="fixed top-0 left-0 w-full z-50">
                <MainNav section={section} setSection={setSection} lang={lang} setLang={setLang} />
            </div>
            <div className="flex flex-row">
                <div className="hidden md:block">
                    <PcServices selectedService={selectedService} lang={lang} />
                </div>

                <div className="block md:hidden fixed bottom-0 left-0 w-full z-50">
                    <MServices selectedService={selectedService} lang={lang} />
                </div>

                <div className="flex flex-col xl:mt-24 bg-gray-900 bg-opacity-70 min-h-screen w-full pt-24 md:p-24 md:pl-[295px] max-w-9/10 "
                    style={{ marginTop: "75px" }}>
                    <p className="text-2xl md:text-4xl px-8 md:pl-12">{content.title}</p>
                    <p className='pt-8 px-8 md:pl-12 xl:pr-36'>
                        {content.description.first}
                    </p>
                    <p className="pt-8 px-8 md:pl-12 xl:pr-36">
                        {content.description.second}
                    </p>
                    <p className="pt-8 px-8 md:pl-12 xl:pr-36">
                        {content.description.third}
                    </p>

                    <div className="px-8 md:pl-12 xl:pr-36 my-12 mb-96">
                        <div className="pr-5 py-5 mt-4 text-right mb-96 md:mb-0">
                            <p className="font-bold pb-2">{content.questions.packs.title}</p>
                            {[  
                                {
                                    id: "packs",
                                    title: content.questions.packs.title,
                                    answer: content.questions.packs.answer
                                },
                                {
                                    id: "redes",
                                    title: content.questions.redes.title,
                                    answer: content.questions.redes.answer
                                },
                                {
                                    id: "interacciones",
                                    title: content.questions.interacciones.title,
                                    answer: content.questions.interacciones.answer
                                },
                                {
                                    id: "miniaturas",
                                    title: content.questions.miniaturas.title,
                                    answer: content.questions.miniaturas.answer
                                }
                            ].map(({ id, title, answer }) => (
                                <div
                                    key={id}
                                    className="bg-white bg-opacity-20 pr-5 hover:bg-opacity-30 cursor-pointer rounded-r mb-1"
                                    onClick={() => handleSelectedQuestion(id)}
                                >
                                    <div className="flex justify-between items-center">
                                        <p className="p-5">{title}</p>
                                        <div className="ml-2">
                                            {selectedQuestion === id ? (
                                                <svg className="w-4 h-4 inline" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 15L12 9L18 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            ) : (
                                                <svg className="w-4 h-4 inline transform rotate-180" viewBox="0 0 24 24" fill="none">
                                                    <path d="M6 15L12 9L18 15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            )}
                                        </div>
                                    </div>
                                    {selectedQuestion === id && (
                                        <p className="mt-2 text-sm text-left text-white px-8 pb-8">{answer}</p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div
                        className="z-50"
                        style={{
                            position: 'fixed',
                            right: '6rem',
                            bottom: isNearFooter ? '120px' : '24px',
                            transition: 'bottom 0.3s ease'
                        }}
                    >
                        <ContactRedirectionButton lang={lang} />
                    </div>
                </div>
            </div>

            <div ref={footerRef} className="absolute z-40 bottom-0 w-full">
                <FooterSection lang={lang} />
            </div>
        </div>
    );
};

export default Social;
