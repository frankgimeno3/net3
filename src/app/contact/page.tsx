'use client';

import FooterSection from "../components/navs/FooterSection";
import Contáctanos from "../components/sections/contact/Contáctanos";
import MainNav from "../components/navs/MainNav";
import BigMenu from "../components/navs/BigMenu";
import { useUI } from '../context/UIContext'; 

export default function Contact() {
   const { isMenuOpen } = useUI();  

  return (
    <div className="relative flex flex-col min-h-screen justify-between text-white bg-slate-900 w-full">
      <div className="fixed top-0 left-0 w-full bg-black bg-opacity-80 z-50">
        <MainNav />
        {isMenuOpen && <BigMenu />}
      </div>
      
      <div className="flex flex-col mt-20 pt-16">
        <Contáctanos />
      </div>

      <FooterSection />
    </div>
  );
}
