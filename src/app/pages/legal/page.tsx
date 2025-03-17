"use client"
import FooterSection from '@/app/components/navs/FooterSection';
import MainNav from '@/app/components/navs/MainNav';
import React, { FC, useState } from 'react';

interface LegalProps {}

const Legal: FC<LegalProps> = ({}) => {
      const [section, setSection] = useState("aboutus");
      const [lang, setLang] = useState<"ESP" | "ENG">("ESP");
      
  return (
    <div className="relative flex flex-col min-h-screen w-full justify-between bg-white">
      <MainNav section={section} setSection={setSection} lang={lang} setLang={setLang} />
       
      <div className="  px-4 py-12 text-gray-800 space-y-12">
      <h1 className="text-3xl font-bold mb-6">Condiciones Legales</h1>

      <section className="mb-8 pl-24">
        <h2 className="text-2xl font-semibold mb-4">Información General</h2>
        <p>
          Proporcion3, S.A., responsable del sitio web, en adelante "la Empresa", presenta este documento para dar cumplimiento a las exigencias de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), y para informar sobre las condiciones de uso del portal.
        </p>
        <p>
          Al acceder a este sitio, cualquier persona se considera usuario y asume la responsabilidad de cumplir con todas las disposiciones legales aplicables y las condiciones descritas aquí.
        </p>
      </section>

      <section className="mb-8 pl-24">
        <h2 className="text-2xl font-semibold mb-4">Datos Identificativos</h2>
        <p><strong>Denominación social:</strong> Proporcion3, S.A.</p>
        <p><strong>Nombre comercial:</strong> Net3</p>
        <p><strong>Registro Mercantil:</strong> Inscrita en el Registro Mercantil de Barcelona, Hoja B-123456, Tomo 12345, Folio 67.</p>
        <p><strong>NIF:</strong> A12345678</p>
        <p><strong>Domicilio:</strong> C/ Ejemplo, 123, 08000 Barcelona</p>
        <p><strong>Correo electrónico:</strong> contacto@proporcion3.sa</p>
      </section>

      <section className="mb-8 pl-24">
        <h2 className="text-2xl font-semibold mb-4">Objetivo del Sitio</h2>
        <p>
          Este sitio web proporciona información relacionada con los servicios ofrecidos por Net3, agencia de contenidos. El acceso a dicho contenido está destinado a los usuarios interesados en conocer más sobre los servicios de marketing digital, creación de contenidos y otros servicios relacionados.
        </p>
      </section>

      <section className="mb-8 pl-24">
        <h2 className="text-2xl font-semibold mb-4">Propiedad Intelectual e Industrial</h2>
        <p>
          Los contenidos disponibles en el sitio, como textos, imágenes, logos, software, nombres comerciales y marcas, están protegidos por derechos de propiedad intelectual e industrial, perteneciendo a Proporcion3, S.A. o a terceros con los que se tengan acuerdos. Queda prohibida la reproducción, distribución o modificación sin la autorización correspondiente.
        </p>
        <p>
          El acceso a este sitio no implica ninguna cesión de derechos de propiedad sobre los contenidos. Cualquier uso no autorizado será considerado una infracción y podrá dar lugar a acciones legales.
        </p>
      </section>

      <section className="mb-8 pl-24">
        <h2 className="text-2xl font-semibold mb-4">Obligaciones del Usuario</h2>
        <p>
          El usuario se compromete a utilizar el sitio y los servicios de manera correcta, respetando la legislación vigente y las condiciones establecidas. Además, debe proporcionar datos verídicos cuando se requiera información personal, y mantenerlos actualizados.
        </p>
        <p>
          El usuario no debe realizar un uso fraudulento del sitio ni interferir en su funcionamiento. Está prohibido introducir virus o sistemas que puedan dañar los equipos informáticos relacionados con el sitio.
        </p>
      </section>

      <section className="mb-8 pl-24">
        <h2 className="text-2xl font-semibold mb-4">Responsabilidades</h2>
        <p>
          La Empresa no garantiza el acceso continuo ni la disponibilidad de los servicios. No será responsable por daños derivados de interrupciones o fallos ajenos al control de Proporcion3, S.A.
        </p>
        <p>
          En caso de incumplimiento de las condiciones de uso, la empresa se reserva el derecho de suspender el acceso al sitio web sin previo aviso.
        </p>
      </section>

      <section className="mb-8 pl-24">
        <h2 className="text-2xl font-semibold mb-4">Enlaces a Otros Sitios</h2>
        <p>
          El sitio web puede incluir enlaces a otras páginas gestionadas por terceros. Proporcion3, S.A. no se hace responsable de los contenidos de esos sitios ni de los servicios ofrecidos a través de los mismos.
        </p>
      </section>

      <section className="mb-8 pl-24">
        <h2 className="text-2xl font-semibold mb-4">Protección de Datos Personales</h2>
        <p>
          En cumplimiento con el RGPD, LOPDGDD y LSSI, Proporcion3, S.A. garantiza la protección de los datos personales que se proporcionen en el sitio. Para más detalles sobre el tratamiento de los datos, consulte nuestra Política de Privacidad.
        </p>
      </section>

      <section className="mb-8 pl-24">
        <h2 className="text-2xl font-semibold mb-4">Uso de Cookies</h2>
        <p>
          Este sitio utiliza cookies para mejorar la experiencia del usuario. Las cookies permiten personalizar el contenido y facilitar la navegación. El usuario puede configurar su navegador para rechazar cookies si lo desea.
        </p>
      </section>

      <section className="mb-96">
        <h2 className="text-2xl font-semibold mb-4">Legislación y Jurisdicción</h2>
        <p>
          Las condiciones de uso del sitio se rigen por la legislación española. Para la resolución de cualquier controversia derivada del uso del sitio, las partes se someten a los tribunales de Barcelona.
        </p>
      </section>
      <div className='absolute z-50 bottom-0 w-full'>
        <FooterSection lang={lang} />
        </div>
        </div>
        </div> 
         );
};

export default Legal;
