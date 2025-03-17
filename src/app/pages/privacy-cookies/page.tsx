"use client"
import React, { FC, useState } from 'react';
import Link from 'next/link';
import MainNav from '@/app/components/navs/MainNav';
import FooterSection from '@/app/components/navs/FooterSection';

interface PrivacyCookiesProps {}

const PrivacyCookies: FC<PrivacyCookiesProps> = ({ }) => {
    const [section, setSection] = useState("aboutus");
    const [lang, setLang] = useState<"ESP" | "ENG">("ESP");
    
  return (
    <div className="relative flex flex-col min-h-screen w-full justify-between bg-white">
      <MainNav section={section} setSection={setSection} lang={lang} setLang={setLang} />
     <div className=" px-4 py-12 text-gray-800 space-y-12 ml-12">
      <h1 className="text-3xl font-bold">Política de Privacidad y Cookies</h1>
      <p className="text-sm text-gray-500">Última actualización: 17/03/2025</p>

      <section className='ml-12'>
        <h2 className="text-2xl font-semibold mb-4">Política de Privacidad</h2>
        <p className="mb-4">
          Este documento describe cómo se recopilan, gestionan y protegen los datos personales proporcionados durante el uso del sitio web www.net3.es. El presente compromiso responde fielmente lo dispuesto en la normativa vigente en materia de protección de información personal: el Reglamento (UE) 2016/679 y la Ley Orgánica 3/2018.
        </p>
        <p className="mb-4">
          El acceso o uso de este sitio implica plena aceptación de este documento, junto con el contenido del Aviso Legal correspondiente.
        </p>

        <div className=' mt-6 '>
        <h3 className="text-xl font-semibold mb-2">Información del responsable</h3>
        <p><strong>Nombre legal:</strong> PROPORCION3,S.A.</p>
        <p><strong>CIF:</strong> A46449005</p>
        <p><strong>Dirección:</strong> Bruc 48, 08010 – Barcelona</p>
        <p><strong>Email:</strong> info@vidrioperfil.com</p>
        <p><strong>Web:</strong> www.vidrioperfil.com</p>
        </div>

        <div className=' mt-6 '>
        <h3 className="text-xl font-semibold mt-6 mb-2">Fundamentos del tratamiento de información</h3>
        <ul className="space-y-2 list-disc ml-5">
          <li>Transparencia y legitimidad: Todos los tratamientos de información tienen justificación clara y se explican con lenguaje sencillo.</li>
          <li>Minimización: Solo se recogerán los datos imprescindibles según el objetivo.</li>
          <li>Tiempo limitado: La conservación se realizará solo durante el periodo necesario.</li>
          <li>Confidencialidad garantizada: Medidas técnicas y organizativas están implementadas para proteger los datos contra accesos no autorizados o usos indebidos.</li>
        </ul>
        </div>
        
        <div className=' mt-6 '>
        <h3 className="text-xl font-semibold mt-6 mb-2">Origen de los datos personales</h3>
        <p className="mb-4">Se recogen datos únicamente en los siguientes contextos:</p>
        <ul className="space-y-2 list-disc ml-5">
          <li>Contacto mediante formularios disponibles en la web</li>
          <li>Mensajes enviados por correo electrónico</li>
          <li>Registro de usuarios en el espacio digital</li>
          <li>Proceso de compra de productos</li>
        </ul>
        </div>
        <div className=' mt-6 '>
        <h3 className="text-xl font-semibold mt-6 mb-2">Derechos de la persona usuaria</h3>
        <p className="mb-4">
          El titular de los datos puede ejercer los siguientes derechos: Acceso, Rectificación, Supresión, Limitación del tratamiento, Portabilidad y Oposición. Para ejercerlos, se deberá enviar un mensaje electrónico a info@vidrioperfil.com indicando el derecho que desea ejercer. Puede requerirse prueba de identidad. En caso de desacuerdo, se puede recurrir ante la Agencia Española de Protección de Datos.
        </p>
        </div>

        <div className=' mt-6 '>
        <h3 className="text-xl font-semibold mt-6 mb-2">Finalidades, legitimación y conservación</h3>
        <div className="space-y-4">
          <div>
            <strong>Consultas y formularios web:</strong> Interés legítimo. Conservación durante el tiempo necesario para gestionar la solicitud.
          </div>
          <div>
            <strong>Correo electrónico directo:</strong> Interés legítimo. Conservación estrictamente necesaria.
          </div>
        </div>
        </div>
        <div className=' mt-6 '>
        <h3 className="text-xl font-semibold mt-6 mb-2">Tratamiento con otras finalidades</h3>
        <ul className="space-y-2 list-disc ml-5">
          <li>Supervisión del cumplimiento legal y técnico del sitio web</li>
          <li>Optimización de servicios ofrecidos</li>
          <li>Análisis del comportamiento digital mediante herramientas estadísticas</li>
          <li>Gestión de la presencia en redes sociales (Instagram, LinkedIn)</li>
        </ul>
        </div>
        <div className=' mt-6 '>
        <h3 className="text-xl font-semibold mt-6 mb-2">Herramientas de terceros utilizadas</h3>
        <div className="space-y-3">
          <div>
            <strong>Google Analytics:</strong> Permite analizar la interacción del usuario con el sitio. Más info en:&nbsp;
            <Link href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">analytics.google.com</Link>
          </div>
        </div>
        </div>
        <div className=' mt-6 '>
        <h3 className="text-xl font-semibold mt-6 mb-2">Seguridad de la información</h3>

        <h3 className="text-xl font-semibold mt-6 mb-2">Compromiso con la veracidad</h3>
        <p className="mb-4">
          La persona usuaria garantiza que los datos proporcionados son ciertos y actualizados, y se compromete a comunicar cualquier cambio.
        </p>
        </div>
        <div className=' mt-6 '>
        <h3 className="text-xl font-semibold mt-6 mb-2">Modificaciones</h3>
        <p>
          Este documento puede actualizarse sin previo aviso. La versión vigente estará disponible en&nbsp;
          <Link href="https://www.net3.es/privacy-cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            net3.es/privacy-cookies
          </Link>
        </p>
        </div>
      </section>

      <section className='ml-12'>
        <h2 className="text-2xl font-semibold mb-4">Política de Cookies</h2>

        <h3 className="text-xl font-semibold mb-2">¿Qué son exactamente las cookies?</h3>
        <p className="mb-4">
          Las cookies son fragmentos pequeños de texto que se almacenan en el dispositivo desde el cual accedes a este sitio. Su función principal es recordar información para que la experiencia de navegación sea más fluida, rápida y adaptada a tus preferencias.
        </p>

        <h3 className="text-xl font-semibold mb-2">Finalidad del uso de cookies en este sitio</h3>
        <p className="mb-4">
          Desde el momento en que accedes, pueden activarse cookies tanto propias como externas. Cada una cumple un propósito distinto:
        </p>
        <ul className="space-y-2 list-disc ml-5">
          <li><strong>Cookies internas:</strong> necesarias para que todo funcione sin errores. No recopilan información personal.</li>
          <li><strong>Cookies de terceros:</strong> utilizadas para analizar navegación, reforzar seguridad, personalizar contenido y mejorar la experiencia.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-2">Configura tus preferencias</h3>
        <p className="mb-4">
          Puedes ajustar en cualquier momento tus elecciones accediendo al panel de ajustes de cookies en este sitio.
        </p>
        <p className="mb-4">
          También puedes gestionarlas desde tu navegador. Aquí te dejamos enlaces útiles:
        </p>
        <div className="flex flex-col space-y-2 text-blue-600">
          <Link href="https://support.google.com/accounts/answer/32050" target="_blank" rel="noopener noreferrer">Google Chrome</Link>
          <Link href="https://support.apple.com/en-in/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</Link>
          <Link href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" target="_blank" rel="noopener noreferrer">Mozilla Firefox</Link>
          <Link href="https://support.microsoft.com/en-us/topic/how-to-delete-cookie-files-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc" target="_blank" rel="noopener noreferrer">Internet Explorer</Link>
        </div>
        <p className="mb-96">
        Si usas otro navegador, consulta la web oficial del mismo para conocer los pasos a seguir.
        </p>
      </section>
    </div>
    <div className='absolute z-50 bottom-0 w-full'>
        <FooterSection lang={lang} />
      </div>
    </div>
  );
};

export default PrivacyCookies;
