'use client';
import { useState } from "react";
import MainNav from "./components/Nav/page"

export default function Home() {
  const [section, setSection] = useState("quienessomos")

  return (
     <div>
      <MainNav section={section} setSection={setSection}/>
      <p>Quiénes somos?</p>
      <p>Qué hacemos?</p>
      <p>Sobre el plan de contenidos</p>
      <p>Nuestros 7 pasos</p>
      <p>Hablemos</p>
      <footer>
        <p>Contenido</p>
      </footer>
    </div>
  );
}
