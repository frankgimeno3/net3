'use client';
import { useState } from "react";
 
 import FooterSection from "../components/navs/FooterSection";
import Contáctanos from "../components/sections/contact/Contáctanos";
import MainNav from "../components/navs/MainNav";
import IntroOurMethod from "../components/sections/ourMethod/IntroOurMethod";

export default function Method() {
  const [section, setSection] = useState("ourMethod");
  const [lang, setLang] = useState<"ESP" | "ENG">("ESP");

  return (
    <div className="relative flex flex-col min-h-screen justify-between text-white bg-slate-900">
      <div className="fixed top-0 left-0 w-full bg-black bg-opacity-80 z-50">
        <MainNav section={section} setSection={setSection} lang={lang} setLang={setLang} />
      </div>
      <IntroOurMethod lang={lang}/>
      <p>Lo de arriba no me gusta</p>
      <p>......................................................</p>
      <p className="font-bold text-4xl">Imagina cómo sería trabajar con nosotros</p>
      <div className="p-5">
      <p>Subtítulo con un resumen de los pasos que se siguen</p>
      <p>Subtítulo con un resumen de los pasos que se siguen</p>
      <p>Subtítulo con un resumen de los pasos que se siguen</p>
      <p className="py-5">Explicación de que se desagregan a continuación los pasos</p>
      </div>
      <div className="p-5">
      <p className="font-bold text-3xl">Paso número 1 - Estudio de necesidades, posibilidades, objetivos y entorno</p>
      <p>Aquí abajo tiene que ir un análisis muy detallado de qué</p>
      <p>es este paso y de qué procesos hay aquí concretamente</p>
      <p>es este paso y de qué procesos hay aquí concretamente</p>
      <p>es este paso y de qué procesos hay aquí concretamente</p>
      </div>
      <div className="p-5">
      <p className="font-bold text-3xl">Paso número 2 - Elaboración del plan de contenidos y redes</p>
      <p>Aquí abajo tiene que ir un análisis muy detallado de qué</p>
      <p>es este paso y de qué procesos hay aquí concretamente</p>
      <p>es este paso y de qué procesos hay aquí concretamente</p>
      <p>es este paso y de qué procesos hay aquí concretamente</p>
      </div>
      <div className="p-5">
      <p className="font-bold text-3xl">Paso número 3 - Fase de obtención de materiales y supervisión de entregas</p>
      <p>Aquí abajo tiene que ir un análisis muy detallado de qué</p>
      <p>es este paso y de qué procesos hay aquí concretamente</p>
      <p>es este paso y de qué procesos hay aquí concretamente</p>
      <p>es este paso y de qué procesos hay aquí concretamente</p>
      </div>
      <div className="p-5">
      <p className="font-bold text-3xl">Paso número 4 - Entrega de los kits y asesoramiento pre y post publicación en fecha</p>
      <p>Aquí abajo tiene que ir un análisis muy detallado de qué</p>
      <p>es este paso y de qué procesos hay aquí concretamente</p>
      <p>es este paso y de qué procesos hay aquí concretamente</p>
      <p>es este paso y de qué procesos hay aquí concretamente</p>
      </div>
      <div className="p-5">
      <p className="font-bold text-3xl">Paso número 5 - Análisis de resultados y optimización de estrategias</p>
      <p>Aquí abajo tiene que ir un análisis muy detallado de qué</p>
      <p>es este paso y de qué procesos hay aquí concretamente</p>
      <p>es este paso y de qué procesos hay aquí concretamente</p>
      <p>es este paso y de qué procesos hay aquí concretamente</p>
      </div>
      
      <div className="flex flex-col mt-20 pt-16">
        <Contáctanos lang={lang} />
      </div>
        <FooterSection lang={lang} />
    </div>
  );
}
