"use client";
import FooterSection from '@/app/components/navs/FooterSection';
import MainNav from '@/app/components/navs/MainNav';
import React, { FC, useState } from 'react';
import { useLanguage } from '../../context/LanguageContext'; 

interface LegalProps { }

const Legal: FC<LegalProps> = ({ }) => {
  const [section, setSection] = useState("aboutus");
  const { lang } = useLanguage();  

  return (
    <div className="relative flex flex-col min-h-screen w-full justify-between bg-white">
      <MainNav section={section} setSection={setSection}   />

      <div className="  px-4 py-12 text-gray-800 space-y-12 pl-24 mb-96">
        <h1 className="text-3xl font-bold mb-6">
          {lang === "ESP" ? "Condiciones Legales" : "Legal Terms"}
        </h1>

        <section className="mb-8 ">
          <h2 className="text-2xl font-semibold mb-4">
            {lang === "ESP" ? "Información General" : "General Information"}
          </h2>
          <p>
            {lang === "ESP" 
              ? `Proporcion3, S.A., responsable del sitio web, en adelante "la Empresa", presenta este documento para dar cumplimiento a las exigencias de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), y para informar sobre las condiciones de uso del portal.` 
              : `Proporcion3, S.A., the company responsible for this website, hereinafter referred to as "the Company", presents this document to comply with the requirements of Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSICE), and to inform users about the terms of use of the website.`
            }
          </p>
          <p>
            {lang === "ESP" 
              ? `Al acceder a este sitio, cualquier persona se considera usuario y asume la responsabilidad de cumplir con todas las disposiciones legales aplicables y las condiciones descritas aquí.` 
              : `By accessing this site, any individual is considered a user and agrees to comply with all applicable legal provisions and the terms outlined herein.`
            }
          </p>
        </section>

        <section className="mb-8 ">
          <h2 className="text-2xl font-semibold mb-4">
            {lang === "ESP" ? "Datos Identificativos" : "Company Information"}
          </h2>
          <p><strong>{lang === "ESP" ? "Denominación social:" : "Company name:"}</strong> Proporcion3, S.A.</p>
          <p><strong>{lang === "ESP" ? "Nombre comercial:" : "Trade name:"}</strong> Net3</p>
          <p><strong>{lang === "ESP" ? "Registro Mercantil:" : "Commercial Registry:"}</strong> Inscrita en el Registro Mercantil de Barcelona, Hoja B-123456, Tomo 12345, Folio 67.</p>
          <p><strong>{lang === "ESP" ? "NIF:" : "Tax ID:"}</strong> A12345678</p>
          <p><strong>{lang === "ESP" ? "Domicilio:" : "Address:"}</strong> C/ Ejemplo, 123, 08000 Barcelona</p>
          <p><strong>{lang === "ESP" ? "Correo electrónico:" : "Email:"}</strong> contacto@proporcion3.sa</p>
        </section>

        <section className="mb-8 ">
          <h2 className="text-2xl font-semibold mb-4">
            {lang === "ESP" ? "Objetivo del Sitio" : "Website Purpose"}
          </h2>
          <p>
            {lang === "ESP" 
              ? `Este sitio web proporciona información relacionada con los servicios ofrecidos por Net3, agencia de contenidos. El acceso a dicho contenido está destinado a los usuarios interesados en conocer más sobre los servicios de marketing digital, creación de contenidos y otros servicios relacionados.` 
              : `This website provides information related to the services offered by Net3, a content agency. Access to this content is intended for users interested in learning more about digital marketing, content creation, and other related services.`
            }
          </p>
        </section>

        <section className="mb-8 ">
          <h2 className="text-2xl font-semibold mb-4">
            {lang === "ESP" ? "Propiedad Intelectual e Industrial" : "Intellectual and Industrial Property"}
          </h2>
          <p>
            {lang === "ESP" 
              ? `Los contenidos disponibles en el sitio, como textos, imágenes, logos, software, nombres comerciales y marcas, están protegidos por derechos de propiedad intelectual e industrial, perteneciendo a Proporcion3, S.A. o a terceros con los que se tengan acuerdos. Queda prohibida la reproducción, distribución o modificación sin la autorización correspondiente.` 
              : `The content available on this site, such as texts, images, logos, software, trade names, and trademarks, is protected by intellectual and industrial property rights, belonging to Proporcion3, S.A. or third parties with whom agreements have been made. Reproduction, distribution, or modification without proper authorization is prohibited.`
            }
          </p>
          <p>
            {lang === "ESP" 
              ? `El acceso a este sitio no implica ninguna cesión de derechos de propiedad sobre los contenidos. Cualquier uso no autorizado será considerado una infracción y podrá dar lugar a acciones legales.` 
              : `Access to this site does not imply any transfer of ownership rights over the content. Any unauthorized use will be considered an infringement and may result in legal actions.`
            }
          </p>
        </section>

        <section className="mb-8 ">
          <h2 className="text-2xl font-semibold mb-4">
            {lang === "ESP" ? "Obligaciones del Usuario" : "User Responsibilities"}
          </h2>
          <p>
            {lang === "ESP" 
              ? `El usuario se compromete a utilizar el sitio y los servicios de manera correcta, respetando la legislación vigente y las condiciones establecidas. Además, debe proporcionar datos verídicos cuando se requiera información personal, y mantenerlos actualizados.` 
              : `The user agrees to use the site and services correctly, respecting applicable laws and the established terms. Additionally, the user must provide accurate personal information when requested and keep it up to date.`
            }
          </p>
          <p>
            {lang === "ESP" 
              ? `El usuario no debe realizar un uso fraudulento del sitio ni interferir en su funcionamiento. Está prohibido introducir virus o sistemas que puedan dañar los equipos informáticos relacionados con el sitio.` 
              : `The user must not use the site fraudulently or interfere with its operation. Introducing viruses or systems that could damage the site's related computer equipment is prohibited.`
            }
          </p>
        </section>

        <section className="mb-8 ">
          <h2 className="text-2xl font-semibold mb-4">
            {lang === "ESP" ? "Responsabilidades" : "Liabilities"}
          </h2>
          <p>
            {lang === "ESP" 
              ? `La Empresa no garantiza el acceso continuo ni la disponibilidad de los servicios. No será responsable por daños derivados de interrupciones o fallos ajenos al control de Proporcion3, S.A.` 
              : `The Company does not guarantee continuous access or availability of services. It will not be liable for damages arising from interruptions or failures beyond the control of Proporcion3, S.A.`
            }
          </p>
          <p>
            {lang === "ESP" 
              ? `En caso de incumplimiento de las condiciones de uso, la empresa se reserva el derecho de suspender el acceso al sitio web sin previo aviso.` 
              : `In case of violation of the terms of use, the company reserves the right to suspend access to the website without prior notice.`
            }
          </p>
        </section>

        <section className="mb-8 ">
          <h2 className="text-2xl font-semibold mb-4">
            {lang === "ESP" ? "Enlaces a Otros Sitios" : "Links to Other Websites"}
          </h2>
          <p>
            {lang === "ESP" 
              ? `El sitio web puede incluir enlaces a otras páginas gestionadas por terceros. Proporcion3, S.A. no se hace responsable de los contenidos de esos sitios ni de los servicios ofrecidos a través de los mismos.` 
              : `The website may include links to other pages managed by third parties. Proporcion3, S.A. is not responsible for the content of those sites or the services offered through them.`
            }
          </p>
        </section>

        <section className="mb-8 ">
          <h2 className="text-2xl font-semibold mb-4">
            {lang === "ESP" ? "Protección de Datos Personales" : "Personal Data Protection"}
          </h2>
          <p>
            {lang === "ESP" 
              ? `En cumplimiento con el RGPD, LOPDGDD y LSSI, Proporcion3, S.A. garantiza la protección de los datos personales que se proporcionen en el sitio. Para más detalles sobre el tratamiento de los datos, consulte nuestra Política de Privacidad.` 
              : `In compliance with the GDPR, LOPDGDD, and LSSI, Proporcion3, S.A. ensures the protection of personal data provided on the site. For more details on data processing, please refer to our Privacy Policy.`
            }
          </p>
        </section>

        <section className="mb-8 ">
          <h2 className="text-2xl font-semibold mb-4">
            {lang === "ESP" ? "Uso de Cookies" : "Cookie Usage"}
          </h2>
          <p>
            {lang === "ESP" 
              ? `Este sitio utiliza cookies para mejorar la experiencia del usuario. Las cookies permiten personalizar el contenido y facilitar la navegación. El usuario puede configurar su navegador para rechazar cookies si lo desea.` 
              : `This site uses cookies to enhance the user experience. Cookies allow for content customization and easier navigation. Users may configure their browser to reject cookies if desired.`
            }
          </p>
        </section>

        <section className="mb-96">
          <h2 className="text-2xl font-semibold mb-4">
            {lang === "ESP" ? "Legislación y Jurisdicción" : "Governing Law and Jurisdiction"}
          </h2>
          <p>
            {lang === "ESP" 
              ? `Las condiciones de uso del sitio se rigen por la legislación española. Para la resolución de cualquier controversia derivada del uso del sitio, las partes se someten a los tribunales de Barcelona.` 
              : `The terms of use of the site are governed by Spanish law. For the resolution of any disputes arising from the use of the site, the parties submit to the courts of Barcelona.`
            }
          </p>
        </section>
      </div>
      <div className='absolute z-50 bottom-0 w-full'>
        <FooterSection lang={lang} />
      </div>
    </div>
  );
};

export default Legal;
