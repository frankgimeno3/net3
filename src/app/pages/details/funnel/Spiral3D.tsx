import React from "react";

const Spiral3D: React.FC = () => {
  // Dimensiones del SVG (viewBox)
  const viewBoxX = 500000;
  const viewBoxY = 80000;
  const viewBoxWidth = 250000;
  const viewBoxHeight = 160000;

  // Tamaño en px del contenedor
  const containerWidth = 800; // puedes ajustar
  const containerHeight = 500; // puedes ajustar

  // Función para convertir coordenadas SVG → pixeles CSS
  const svgToPx = (svgX: number, svgY: number) => {
    const left = ((svgX - viewBoxX) / viewBoxWidth) * containerWidth;
    const top = ((svgY - viewBoxY) / viewBoxHeight) * containerHeight;
    return { left, top };
  };

  // Coordenadas aproximadas para los textos (centrados sobre las barras)
  const tofuPos = svgToPx(548000, 115500);
  const mofuPos = svgToPx(544000, 152000);
  const bofuPos = svgToPx(547000, 183000);

  return (
    <div className="relative w-[800px] h-[500px]  ">
      <svg
        viewBox="500000 80000 250000 160000"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Barra 1 fondo */}
        <rect
          x="510000"
          y="60000"
          width="152000"
          height="27000"
          fill="#720c1aff"
          transform="rotate(160 600000 105000)"
        />
        <rect
          x="529000"
          y="118000"
          width="118000"
          height="24000"
          fill="#720c1aff"
          transform="rotate(160 599900 160100)"
        />

        {/* Barras horizontales rojas */}
        <path
          fill="#DA0C29"
          d="M 513890.5 90274.62328 C 513890.5 86870.27199637903 516650.271996379 84110.5 520054.62328 84110.5 L 699726.3767200001 84110.5 C 701361.2038592598 84110.5 702929.0727351195 84759.93255240371 704085.0700913579 85915.92990864214 705241.0674475963 87071.92726488055 705890.5 88639.79614074019 705890.5 90274.62328 L 705890.5 114930.37672 C 705890.5 118334.72800362096 703130.728003621 121094.5 699726.3767200001 121094.5 L 520054.62328 121094.5 C 516650.271996379 121094.5 513890.5 118334.72800362096 513890.5 114930.37672 Z"
        />
        <path
          fill="#DA0C29"
          d="M 534074.5 148693.61056 C 534074.5 145640.51940233342 536549.5194023334 143165.5 539602.61056 143165.5 L 680178.38944 143165.5 C 681644.5355181681 143165.5 683050.6320700422 143747.9242617923 684087.353904125 144784.64609587504 685124.0757382077 145821.36792995778 685706.5 147227.46448183188 685706.5 148693.61056 L 685706.5 170805.38944 C 685706.5 173858.48059766658 683231.4805976666 176333.5 680178.38944 176333.5 L 539602.61056 176333.5 C 536549.5194023334 176333.5 534074.5 173858.48059766658 534074.5 170805.38944 Z"
        />
        <path
          fill="#DA0C29"
          d="M 556520.5 198627.61056 C 556520.5 195574.51940233342 558995.5194023334 193099.5 562048.61056 193099.5 L 657732.3894399999 193099.5 C 659198.5355181681 193099.5 660604.6320700422 193681.9242617923 661641.3539041249 194718.64609587504 662678.0757382077 195755.36792995778 663260.5 197161.46448183188 663260.5 198627.61056 L 663260.5 220739.38944 C 663260.5 223792.48059766655 660785.4805976666 226267.5 657732.3894399999 226267.5 L 562048.61056 226267.5 C 558995.5194023334 226267.5 556520.5 223792.48059766655 556520.5 220739.38944 Z"
        />
      </svg>

      {/* Textos posicionados sobre las barras */}
      <div
        className="absolute font-bold text-white text-5xl"
        style={{ left: tofuPos.left, top: tofuPos.top }}
      >
        <p>TOFU</p>
      </div>
      <div
        className="absolute font-bold text-white text-5xl"
        style={{ left: mofuPos.left, top: mofuPos.top }}
      >
        <p>MOFU</p>
      </div>
      <div
        className="absolute font-bold text-white text-5xl"
        style={{ left: bofuPos.left, top: bofuPos.top }}
      >
        <p>BOFU</p>
      </div>
    </div>
  );
};

export default Spiral3D;
