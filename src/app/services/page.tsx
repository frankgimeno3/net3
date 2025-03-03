'use client';
import { useState } from "react";

import FooterSection from "../components/navs/FooterSection";
import Contáctanos from "../components/sections/contact/Contáctanos";
import MainNav from "../components/navs/MainNav";

export default function Services() {
  const [section, setSection] = useState("services");
  const [lang, setLang] = useState<"ESP" | "ENG">("ESP");

  return (
    <div className="relative flex flex-col min-h-screen justify-between text-white bg-slate-900">
      <div className="fixed top-0 left-0 w-full bg-black bg-opacity-80 z-50">
        <MainNav section={section} setSection={setSection} lang={lang} setLang={setLang} />
      </div>
      <p>Nuestros servicios</p>
      <p>Agrupamos nuestros servicios en 3 grupos:</p>
      <div className="p-5 m-5">
        <p className="font-bold">Asesoría</p>
        <p>Analizamos tu empresa, entorno y posibilidades</p>
        <p>Te exponemos tus posibilidades, opciones, y te hacemos una propuesta</p>
        <p>Detallamos las necesidades de material, proceso y coste</p>
        <p>Calendarizamos cada parte del proceso</p>
        <p>Entregamos como resultado un plan de contenidos y redes</p>
        <div className="p-5 mt-4">
          <p className="font-bolt pb-2 ">Quieres saber más?</p>
          <p>Qué es un plan de contenidos?</p>
          <p>Qué es una estrategia de redes?</p>
          <p>Qué es un kit de contenidos?</p>
          <button className="px-3 py-1 bg-white text-gray-600 hover:bg-gray-100 mt-3">Solicita un presupuesto</button>
        </div>
      </div>
      <div className="p-5 -m-5">
        <p className="font-bold">Creación de contenidos</p>
        <div className="p-5">
          <p>Creación de contenido para redes</p>
          <p>Te ofrecemos un plan en forma de pack, para que puedas publicar con periodicidad planificada</p>
          <p>Nos encargamos de que puedas tener contenido a publicar todo el año, sin afectar las variaciones en tu carga de trabajo</p>
          <p>Mejoramos el engagement con la creación de miniaturas para llamar la atención de tu público</p>
          <p>Te ayudamos a analizar la interacción de tus seguidores con el post</p>
          <div className="p-5 mt-4">
            <p className="font-bolt pb-2 ">Quieres saber más?</p>
            <p>Cómo funcionan los packs de publicaciones?</p>
            <p>En qué redes sociales me interesa publicar mi contenido?</p>
            <p>Para qué redes sociales me ofrecéis asistencia?</p>
            <p>Cómo puedo medir las interacciones de mis seguidores en redes?</p>
            <p>Qué es una miniatura, y para qué sirve?</p>
            <button className="px-3 py-1 bg-white text-gray-600 hover:bg-gray-100 mt-3">Solicita un presupuesto</button>
          </div>
        </div>
        <div className="p-5">
          <p>Creación de notas de prensa</p>
          <p>Te ofrecemos un plan en forma de pack, para que puedas publicar una nota de prensa cada mes</p>
          <p>Planificamos todos los artículos del año con antelación, para que conozcas el contenido de la campaña antes de elaborarlo</p>
          <p>Entregamos el contenido en un kit de contenidos, para que puedas adaptarlo a cada plataforma</p>
          <div className="p-5 mt-4">
            <p className="font-bolt pb-2 ">Quieres saber más?</p>
            <p>Qué es una nota de prensa?</p>
            <p>Cuántas?</p>
            <p>Qué es un kit de contenidos?</p>
            <button className="px-3 py-1 bg-white text-gray-600 hover:bg-gray-100 mt-3">Solicita un presupuesto</button>
          </div>
        </div>
        <div className="p-5">
          <p>Creación de campañas de email marketing</p>
          <p>Te ayudamos a crear tu propio newsletter o campañas de email marketing</p>
          <p>Creamos contenido de interés para tus suscriptores</p>
          <p>Reconvertimos el formato de tus notas de prensa y publicaciones para que puedas usarlo como newsletter</p>
          <p>Hacemos la gestión integral del envío de los newsletter</p>
          <div className="p-5 mt-4">
            <p className="font-bolt pb-2 ">Quieres saber más?</p>
            <p>Qué es un newsletter?</p>
            <p>Qué formatos de email marketing puedo llevar a cabo?</p>
            <p>Cómo medir resultados para email marketing?</p>
            <p>Cómo puedo combinar email marketing con otras estrategias de contenidos?</p>
            <button className="px-3 py-1 bg-white text-gray-600 hover:bg-gray-100 mt-3">Solicita un presupuesto</button>
          </div>
        </div>
        <div className="p-5">
          <p>Servicios adicionales</p>
          <p>Contratación de fotógrafos para catálogos o notas de prensa</p>
          <p>Elaboración de catálogos multiformato</p>
          <p>Grabación de video-entrevistas</p>
          <p>Diseño gráfico de banners y miniaturas</p>
          <p>Servicios de traducción supervisada inglés-español</p>
          <div className="p-5 mt-4">
            <p className="font-bolt pb-2 ">Quieres saber más?</p>
            <button className="px-3 py-1 bg-white text-gray-600 hover:bg-gray-100 my-3">Obtén personalizados </button>
            <button className="px-3 py-1 bg-white text-gray-600 hover:bg-gray-100">Solicita un presupuesto</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-20 pt-16">
        <Contáctanos lang={lang} />
      </div>
      <FooterSection lang={lang} />
    </div>
  );
}
