import React, { FC } from "react";
import content2 from "./content-2.json";
import { useLanguage } from "@/app/context/LanguageContext";
import { useRouter } from "next/navigation";
import ActionButton from "../../ActionButton";
import Image from "next/image";

// Importamos los SVGs
import PR from "./svg/PR";
import Video from "./svg/Video";
import Banners from "./svg/Banners";
import RRSS from "./svg/RRSS";
import Mailing from "./svg/Mailing";
import Funnel from "./svg/Funnel";
import Money from "./svg/Money";
import Up from "./svg/Up";
import Magazine from "./svg/Magazine";

const QueHacemos: FC = () => {
  const { lang } = useLanguage();
  const content = content2[lang];
  const router = useRouter();

  if (!content) {
    return <div>Error: contenido no disponible para el idioma seleccionado.</div>;
  }

  const imagePaths = [
    "/contentImages/4consulting.png",
    "/contentImages/2seosem.png",
    "/contentImages/9em.png",
  ];

  const sectionData = [
    {
      title: content.Contenidos.titular,
      resumen:
        lang === "ESP"
          ? (content.Contenidos as any).resumen
          : (content.Contenidos as any).summary,
      path: "/pages/details/contents",
    },
    {
      title: content.Publicidad.titular,
      resumen:
        lang === "ESP"
          ? (content.Publicidad as any).resumen
          : (content.Publicidad as any).summary,
      path: "/pages/details/adv",
    },
    {
      title: content.Funnel.titular,
      resumen:
        lang === "ESP"
          ? (content.Funnel as any).resumen
          : (content.Funnel as any).summary,
      path: "/pages/details/newsletter",
    },
  ];

  // Arrays de íconos por fila
  const iconsByRow = [
    [PR, Video, RRSS], // primera iteración
    [Banners, Magazine, Up], // segunda
    [Mailing, Funnel, Money], // tercera
  ];

  return (
    <section
      className="bg-white/90 text-gray-600 py-24"
      style={{
        position: "relative",
        zIndex: 10,
        borderTopLeftRadius: "50% 100px",
        borderTopRightRadius: "50% 100px",
        borderBottomLeftRadius: "50% 100px",
        borderBottomRightRadius: "50% 100px",
      }}
    >
      <div className="flex flex-col md:max-w-7xl py-8 lg:py-12 md:px-6 md:mx-6 md:mx-auto ">
        <h1 className="text-left lg:text-center text-5xl md:text-7xl font-bold md:mb-6 w-full text-gray-500 pl-12 sm:pl-44 lg:pl-0">
          {lang === "ESP" ? "¿Qué hacemos?" : "What we do"}
        </h1>
        {sectionData.map((section, i) => (
          <div
            key={i}
            className="lg:my-36 my-12 flex flex-row w-full  items-center   pr-3"
          >
            <div
              className="hidden lg:block relative shadow-xl rounded-xl"
              style={{ width: "600px", height: "600px" }}
            >
              <Image
                src={imagePaths[i]}
                fill
                alt={`quehacemos-img-${i}`}
                className="overflow-crop rounded-xl cursor-pointer hover:opacity-90 hover:scale-95 transition-transform duration-300"
                onClick={() => router.push(section.path)}
              />
            </div>
            <div className="flex flex-col lg:w-1/2 items-top sm:pl-36 md:pl-36 lg:pl-0 ">
              <h2 className="text-left font-bold mb-2 md:mb-8 md:max-w-lg cursor-pointer hover:text-gray-700 pl-12"
                onClick={() => router.push(section.path)}>
                {section.title}
              </h2>
              <div className="flex flex-row items-center justify-between ">
                <div className="flex flex-col md:max-w-xl mr-12 md:gap-3">
                  <p className="leading-relaxed text-md md:text-lg pl-12">
                    {section.resumen}
                  </p>
                  <div className="flex flex-row gap-4 flex-wrap pl-12">
                    {iconsByRow[i].map((Icon, idx) => (
                      <div
                        key={idx}
                        className="flex bg-gray-400 w-16 h-16 items-center justify-center rounded-lg shadow mt-4"
                      >
                        <Icon />
                      </div>
                    ))}
                  </div>
                  <ActionButton
                    label={
                      lang === "ESP"
                        ? "Quieres saber más?"
                        : "Want to know more?"
                    }
                    onClick={() => router.push(section.path)}
                    align="left"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QueHacemos;
