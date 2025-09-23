import React, { FC } from "react";
import content2 from "./content-2.json";
import { useLanguage } from "@/app/context/LanguageContext";
import { useRouter } from "next/navigation";
import ActionButton from "../../ActionButton";
import Image from "next/image";

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
      resumen: lang === "ESP" ? (content.Contenidos as any).resumen : (content.Contenidos as any).summary,
      path: "/pages/details/contents",
    },
    {
      title: content.Publicidad.titular,
      resumen: lang === "ESP" ? (content.Publicidad as any).resumen : (content.Publicidad as any).summary,
      path: "/pages/details/adv",
    },
    {
      title: content.Funnel.titular,
      resumen: lang === "ESP" ? (content.Funnel as any).resumen : (content.Funnel as any).summary,
      path: "/pages/details/funnel",
    },
  ];

  return (
    <section
      className="bg-gray-100 text-gray-600 py-36"
      style={{
        position: "relative",
        zIndex: 10,
        borderTopLeftRadius: "50% 100px",
        borderTopRightRadius: "50% 100px",
        borderBottomLeftRadius: "50% 100px",
        borderBottomRightRadius: "50% 100px",
      }}
    >
      <div className="flex flex-col md:max-w-5xl py-8 md:py-12 px-6 mx-6 md:mx-auto">
        <h1 className="text-center text-5xl md:text-7xl font-bold mb-24 w-full text-gray-500">
          {lang === "ESP" ? "¿Qué hacemos?" : "What we do"}
        </h1>
        {sectionData.map((section, i) => (
          <div key={i} className="my-5 flex flex-row w-full justify-between items-start">
            <div className="flex flex-col w-1/2 items-top">
              <h2 className="text-left font-bold mb-2 md:mb-8 md:max-w-lg">{section.title}</h2>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col md:max-w-xl mr-12 md:gap-3">
                  <p className="leading-relaxed text-md md:text-lg">{section.resumen}</p>
                  <ActionButton
                    label={lang === "ESP" ? "Quieres saber más?" : "Want to know more?"}
                    onClick={() => router.push(section.path)}
                    align="left"
                  />
                </div>
              </div>
            </div>
            <div className="hidden md:block relative shadow-xl mt-2 rounded-xl " style={{ width: "450px", height: "450px" }}>
              <Image
                src={imagePaths[i]}
                fill
                alt={`quehacemos-img-${i}`}
                className="overflow-crop rounded-xl cursor-pointer hover:opacity-90 hover:scale-95 transition-transform duration-300"
                onClick={() => router.push(section.path)}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QueHacemos;
