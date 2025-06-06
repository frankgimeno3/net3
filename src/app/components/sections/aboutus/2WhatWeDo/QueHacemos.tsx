import React, { FC } from "react";
import content2 from "./content-2.json";
import { useLanguage } from "@/app/context/LanguageContext";
import { useRouter } from "next/navigation";
import ActionButton from "../../ActionButton";



const QueHacemos: FC = () => {
  const { lang } = useLanguage();
  const content = content2[lang];
  const router = useRouter();

  if (!content) {
    return <div>Error: contenido no disponible para el idioma seleccionado.</div>;
  }

  const handleContactRedirection = () => {
    router.push("/contact");
  };

  const sectionData = [
    {
      title: content.Planes.titular,
      items: [
        { text: content.Planes.content1 },
        { text: content.Planes.content2 },
        { text: content.Planes.content3 },
      ],
      button: lang === "ESP" ? "Crea tu plan comunicativo" : "Create your communication plan",
    },
    {
      title: content.Promocion.titular,
      items: [
        { text: content.Promocion.content1 },
        { text: content.Promocion.content2 },
        { text: content.Promocion.content3 },
      ],
      button: lang === "ESP" ? "Aparece el primero con anuncios en Google" : "Appears first with Google Ads",
    },
    {
      title: content.Contenidos.titular,
      items: [
        { text: content.Contenidos.content1 },
        { text: content.Contenidos.content2 },
        { text: content.Contenidos.content3 },
        { text: content.Contenidos.content4 },
      ],
      button: lang === "ESP" ? "Prueba con un artículo gratis!" : "Try with a free article!",
    },
  ];

  return (
    <section
      className="bg-gray-100 text-gray-600 py-36   "
      style={{
        position: "relative",
        zIndex: 10,
        borderTopLeftRadius: "50% 100px",
        borderTopRightRadius: "50% 100px",
        borderBottomLeftRadius: "50% 100px",
        borderBottomRightRadius: "50% 100px",
      }}
    >
      <div className="flex flex-col md:max-w-5xl  py-8 md:py-36 px-6 mx-6 md:mx-auto  ">
        <h2 className="text-left text-5xl md:text-7xl font-bold mb-12 w-full  ">
          {lang === "ESP" ? "¿Qué hacemos?" : "What we do"}
        </h2>
        {sectionData.map((section, i) => (
          <div key={i} className="my-5 flex flex-row w-full justify-between">
            <div className="flex flex-col ">
              <h3 className="text-left text-3xl font-bold mb-2 md:mb-8  md:max-w-lg">{section.title}</h3>
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-col md:max-w-xl  mr-12   md:gap-3">
                  {section.items.map((item, j) => (
                    <p key={j} className="leading-relaxed text-md md:text-lg">
                      {item.text}
                    </p>
                  ))}
                  <ActionButton label={section.button} onClick={handleContactRedirection} align={"left"}/>
                </div>
              </div>
            </div>
            <div className="w-96 h-96 bg-gray-300 hover:bg-opacity-90 rounded-xl hidden md:block"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QueHacemos;
