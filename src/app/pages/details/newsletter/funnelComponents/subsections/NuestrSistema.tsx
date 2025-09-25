import React, { FC } from 'react'; 
 import FasesDelFunnel from './FasesDelFunnel';
import ImportanciaNewsletter from './ImportanciaNewsletter';

interface NuestroSistemaProps {
    lang: 'ENG' | 'ESP';
}
 

const NuestroSistema: FC<NuestroSistemaProps> = ({lang}) => {
 
   return (
    <div>
{lang == "ESP" ? 
  <h2 className="text-5xl font-bold text-center">Así debería funcionar tu sistema de ventas en 2025</h2>
  :
  <h2 className="text-5xl font-bold text-center">This is how your sales system should work in 2025</h2>
}       <FasesDelFunnel lang={lang}/>
      <ImportanciaNewsletter lang={lang}/>
    </div>
  );
};

export default NuestroSistema;