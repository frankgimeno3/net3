"use client"
import React, { useEffect, useRef } from "react";
import MainNav from "@/app/components/navs/MainNav";
import FooterSection from "@/app/components/navs/FooterSection";
import Contáctanos from "@/app/components/sections/contact/Contáctanos";

export default function Layout({ children }: { children: React.ReactNode }) {

    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 1;

            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.warn("Autoplay bloqueado por el navegador:", error);
                });
            }
        }
    }, []);
    return (

        <div className="relative mx-auto z-10">
            <video
                ref={videoRef}
                src="/abstractvid.mp4"
                autoPlay
                loop
                muted
                className="fixed top-0 left-0 w-screen h-screen object-cover z-0"
            />

            <div className="relative z-10 text-white min-h-screen     ">
                <div className='flex flex-col text-center  pt-24'>

                    {children}
                    <Contáctanos />

                </div>
            </div>
        </div>

    );
}
