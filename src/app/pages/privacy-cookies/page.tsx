"use client"
import React, { FC } from 'react';
import Link from 'next/link';
import MainNav from '@/app/components/navs/MainNav';
import FooterSection from '@/app/components/navs/FooterSection';
import { useLanguage } from '../../context/LanguageContext'; 

interface PrivacyCookiesProps {}

const PrivacyCookies: FC<PrivacyCookiesProps> = ({ }) => {
     const { lang } = useLanguage();  
    
    return (
        <div className="relative flex flex-col min-h-screen w-full justify-between bg-white">
            <MainNav     />
            <div className=" px-4 py-12 text-gray-800 space-y-12 ml-12">
                <h1 className="text-3xl font-bold">{lang === "ESP" ? "Política de Privacidad y Cookies" : "Privacy and Cookie Policy"}</h1>
                <p className="text-sm text-gray-500">{lang === "ESP" ? "Última actualización: 17/03/2025" : "Last updated: 17/03/2025"}</p>

                <section className='ml-12'>
                    <h2 className="text-2xl font-semibold mb-4">{lang === "ESP" ? "Política de Privacidad" : "Privacy Policy"}</h2>
                    <p className="mb-4">
                        {lang === "ESP"
                            ? "Este documento describe cómo se recopilan, gestionan y protegen los datos personales proporcionados durante el uso del sitio web www.net3.es. El presente compromiso responde fielmente lo dispuesto en la normativa vigente en materia de protección de información personal: el Reglamento (UE) 2016/679 y la Ley Orgánica 3/2018."
                            : "This document outlines how personal data is collected, managed, and protected during the use of the website www.net3.es. This commitment fully complies with the regulations governing personal data protection: Regulation (EU) 2016/679 and Organic Law 3/2018."
                        }
                    </p>
                    <p className="mb-4">
                        {lang === "ESP"
                            ? "El acceso o uso de este sitio implica plena aceptación de este documento, junto con el contenido del Aviso Legal correspondiente."
                            : "Accessing or using this site implies full acceptance of this document, along with the content of the corresponding Legal Notice."
                        }
                    </p>

                    <div className=' mt-6 '>
                        <h3 className="text-xl font-semibold mb-2">{lang === "ESP" ? "Información del responsable" : "Information about the Data Controller"}</h3>
                        <p><strong>{lang === "ESP" ? "Nombre legal:" : "Legal name:"}</strong> PROPORCION3,S.A.</p>
                        <p><strong>{lang === "ESP" ? "CIF:" : "Tax ID:"}</strong> A46449005</p>
                        <p><strong>{lang === "ESP" ? "Dirección:" : "Address:"}</strong> Bruc 48, 08010 – Barcelona</p>
                        <p><strong>{lang === "ESP" ? "Email:" : "Email:"}</strong> info@vidrioperfil.com</p>
                        <p><strong>{lang === "ESP" ? "Web:" : "Website:"}</strong> www.vidrioperfil.com</p>
                    </div>

                    <div className=' mt-6 '>
                        <h3 className="text-xl font-semibold mt-6 mb-2">{lang === "ESP" ? "Fundamentos del tratamiento de información" : "Legal Basis for Data Processing"}</h3>
                        <ul className="space-y-2 list-disc ml-5">
                            <li>{lang === "ESP" ? "Transparencia y legitimidad: Todos los tratamientos de información tienen justificación clara y se explican con lenguaje sencillo." : "Transparency and legitimacy: All data processing activities are clearly justified and explained in simple terms."}</li>
                            <li>{lang === "ESP" ? "Minimización: Solo se recogerán los datos imprescindibles según el objetivo." : "Data minimization: Only the necessary data will be collected according to the purpose."}</li>
                            <li>{lang === "ESP" ? "Tiempo limitado: La conservación se realizará solo durante el periodo necesario." : "Time limitation: Data will be kept only for as long as necessary."}</li>
                            <li>{lang === "ESP" ? "Confidencialidad garantizada: Medidas técnicas y organizativas están implementadas para proteger los datos contra accesos no autorizados o usos indebidos." : "Guaranteed confidentiality: Technical and organizational measures are in place to protect data from unauthorized access or misuse."}</li>
                        </ul>
                    </div>
                    
                    <div className=' mt-6 '>
                        <h3 className="text-xl font-semibold mt-6 mb-2">{lang === "ESP" ? "Origen de los datos personales" : "Source of Personal Data"}</h3>
                        <p className="mb-4">{lang === "ESP" ? "Se recogen datos únicamente en los siguientes contextos:" : "Data is collected only in the following contexts:"}</p>
                        <ul className="space-y-2 list-disc ml-5">
                            <li>{lang === "ESP" ? "Contacto mediante formularios disponibles en la web" : "Contact through forms available on the website"}</li>
                            <li>{lang === "ESP" ? "Mensajes enviados por correo electrónico" : "Messages sent via email"}</li>
                            <li>{lang === "ESP" ? "Registro de usuarios en el espacio digital" : "User registration on the digital platform"}</li>
                            <li>{lang === "ESP" ? "Proceso de compra de productos" : "Product purchase process"}</li>
                        </ul>
                    </div>

                    <div className=' mt-6 '>
                        <h3 className="text-xl font-semibold mt-6 mb-2">{lang === "ESP" ? "Derechos de la persona usuaria" : "User Rights"}</h3>
                        <p className="mb-4">
                            {lang === "ESP"
                                ? "El titular de los datos puede ejercer los siguientes derechos: Acceso, Rectificación, Supresión, Limitación del tratamiento, Portabilidad y Oposición. Para ejercerlos, se deberá enviar un mensaje electrónico a info@vidrioperfil.com indicando el derecho que desea ejercer. Puede requerirse prueba de identidad. En caso de desacuerdo, se puede recurrir ante la Agencia Española de Protección de Datos."
                                : "The data subject may exercise the following rights: Access, Rectification, Erasure, Restriction of processing, Portability, and Objection. To exercise these rights, an email should be sent to info@vidrioperfil.com specifying the right to be exercised. Proof of identity may be required. In case of disagreement, the Spanish Data Protection Agency can be contacted."
                            }
                        </p>
                    </div>

                    <div className=' mt-6 '>
                        <h3 className="text-xl font-semibold mt-6 mb-2">{lang === "ESP" ? "Finalidades, legitimación y conservación" : "Purposes, Legitimization, and Retention"}</h3>
                        <div className="space-y-4">
                            <div>
                                <strong>{lang === "ESP" ? "Consultas y formularios web:" : "Web queries and forms:"}</strong> {lang === "ESP" ? "Interés legítimo. Conservación durante el tiempo necesario para gestionar la solicitud." : "Legitimate interest. Retained for as long as necessary to process the request."}
                            </div>
                            <div>
                                <strong>{lang === "ESP" ? "Correo electrónico directo:" : "Direct email:"}</strong> {lang === "ESP" ? "Interés legítimo. Conservación estrictamente necesaria." : "Legitimate interest. Retained only for what is strictly necessary."}
                            </div>
                        </div>
                    </div>

                    <div className=' mt-6 '>
                        <h3 className="text-xl font-semibold mt-6 mb-2">{lang === "ESP" ? "Tratamiento con otras finalidades" : "Processing for Other Purposes"}</h3>
                        <ul className="space-y-2 list-disc ml-5">
                            <li>{lang === "ESP" ? "Supervisión del cumplimiento legal y técnico del sitio web" : "Monitoring legal and technical compliance of the website"}</li>
                            <li>{lang === "ESP" ? "Optimización de servicios ofrecidos" : "Optimization of offered services"}</li>
                            <li>{lang === "ESP" ? "Análisis del comportamiento digital mediante herramientas estadísticas" : "Analysis of digital behavior using statistical tools"}</li>
                            <li>{lang === "ESP" ? "Gestión de la presencia en redes sociales (Instagram, LinkedIn)" : "Management of social media presence (Instagram, LinkedIn)"}</li>
                        </ul>
                    </div>

                    <div className=' mt-6 '>
                        <h3 className="text-xl font-semibold mt-6 mb-2">{lang === "ESP" ? "Herramientas de terceros utilizadas" : "Third-Party Tools Used"}</h3>
                        <div className="space-y-3">
                            <div>
                                <strong>Google Analytics:</strong> {lang === "ESP" ? "Permite analizar la interacción del usuario con el sitio. Más info en:" : "Allows analyzing user interaction with the site. More info at:"}&nbsp;
                                <Link href="https://analytics.google.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">analytics.google.com</Link>
                            </div>
                        </div>
                    </div>

                    <div className=' mt-6 '>
                        <h3 className="text-xl font-semibold mt-6 mb-2">{lang === "ESP" ? "Seguridad de la información" : "Information Security"}</h3>
                    </div>

                    <div className=' mt-6 '>
                        <h3 className="text-xl font-semibold mt-6 mb-2">{lang === "ESP" ? "Compromiso con la veracidad" : "Commitment to Accuracy"}</h3>
                        <p className="mb-4">
                            {lang === "ESP" ? "La persona usuaria garantiza que los datos proporcionados son ciertos y actualizados, y se compromete a comunicar cualquier cambio." : "The user guarantees that the data provided is accurate and up to date, and agrees to notify any changes."}
                        </p>
                    </div>

                    <div className=' mt-6 '>
                        <h3 className="text-xl font-semibold mt-6 mb-2">{lang === "ESP" ? "Modificaciones" : "Modifications"}</h3>
                        <p>
                            {lang === "ESP" ? "Este documento puede actualizarse sin previo aviso. La versión vigente estará disponible en" : "This document may be updated without prior notice. The current version will be available at"}&nbsp;
                            <Link href="https://www.net3.es/privacy-cookies" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                                net3.es/privacy-cookies
                            </Link>
                        </p>
                    </div>
                </section>

                <section className='ml-12'>
                    <h2 className="text-2xl font-semibold mb-4">{lang === "ESP" ? "Política de Cookies" : "Cookie Policy"}</h2>

                    <h3 className="text-xl font-semibold mb-2">{lang === "ESP" ? "¿Qué son exactamente las cookies?" : "What are cookies?"}</h3>
                    <p className="mb-4">
                        {lang === "ESP"
                            ? "Las cookies son fragmentos pequeños de texto que se almacenan en el dispositivo desde el cual accedes a este sitio. Su función principal es recordar información para que la experiencia de navegación sea más fluida, rápida y adaptada a tus preferencias."
                            : "Cookies are small text snippets stored on the device you use to access this site. Their primary function is to remember information so that the browsing experience is smoother, faster, and tailored to your preferences."
                        }
                    </p>

                    <h3 className="text-xl font-semibold mb-2">{lang === "ESP" ? "Finalidad del uso de cookies en este sitio" : "Purpose of Using Cookies on This Site"}</h3>
                    <p className="mb-4">
                        {lang === "ESP"
                            ? "Desde el momento en que accedes, pueden activarse cookies tanto propias como externas. Cada una cumple un propósito distinto:"
                            : "From the moment you access the site, both first-party and third-party cookies may be activated. Each serves a different purpose:"
                        }
                    </p>
                    <ul className="space-y-2 list-disc ml-5">
                        <li><strong>{lang === "ESP" ? "Cookies internas:" : "First-party cookies:"}</strong> {lang === "ESP" ? "necesarias para que todo funcione sin errores. No recopilan información personal." : "necessary for the site to function properly. They do not collect personal information."}</li>
                        <li><strong>{lang === "ESP" ? "Cookies de terceros:" : "Third-party cookies:"}</strong> {lang === "ESP" ? "utilizadas para analizar navegación, reforzar seguridad, personalizar contenido y mejorar la experiencia." : "used to analyze browsing, enhance security, personalize content, and improve the overall experience."}</li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-6 mb-2">{lang === "ESP" ? "Configura tus preferencias" : "Set Your Preferences"}</h3>
                    <p className="mb-4">
                        {lang === "ESP"
                            ? "Puedes ajustar en cualquier momento tus elecciones accediendo al panel de ajustes de cookies en este sitio."
                            : "You can adjust your preferences at any time by accessing the cookie settings panel on this site."
                        }
                    </p>
                    <div>
                        <Link href="/" className="text-blue-600 underline">{lang === "ESP" ? "Volver al inicio" : "Back to Home"}</Link>
                    </div>
                </section>
            </div>
            <FooterSection   />
        </div>
    );
};

export default PrivacyCookies;
