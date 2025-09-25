import React, { FC } from 'react';

interface ImportanciaNewsletterProps {}

const ImportanciaNewsletter: FC<ImportanciaNewsletterProps> = () => {
  return (
    <div>
      <h1 className=" ">La importancia de un newsletter</h1>
      <div className="flex flex-col text-xl text-justify gap-4 py-12">
        <p>
          El newsletter es una de las herramientas más poderosas para destacar
          frente a la competencia y posicionarte en la mente de tus clientes. Es
          el corazón de la fase MOFU el espacio ideal para generar confianza,
          aportar valor y guiar al usuario de forma natural hacia la venta.
        </p>
        <p>
          A diferencia de las redes sociales, donde dependes del algoritmo y la
          atención está muy fragmentada, con un newsletter tu mensaje llega
          directamente al correo de tu cliente, en un entorno mucho menos
          saturado.
         
          Día a día, tus suscriptores recibirán información sobre tus productos,
          conocerán mejor tu propuesta de valor y asociarán tu marca como la
          solución más confiable a sus necesidades.
        </p>
      </div>

      <p
        className="font-bold bg-red-600 text-white p-4 rounded-xl shadow mx-auto my-8 text-center"
        style={{ width: '620px' }}
      >
        Acciones específicas que podrás realizar con tus suscriptores de
        newsletter
      </p>

      <div className="flex flex-row gap-5">
        <div className="flex flex-col border border-gray-100 bg-gray-100/10 w-1/3 rounded-xl shadow p-8 gap-4">
          <p className="font-bold text-2xl">
            Campañas de ofertas sin resultar invasivas
          </p>
          <p>
            Segmentadas y enviadas a quienes ya hayan mostrado interés en tus
            productos.
          </p>
        </div>

        <div className="flex flex-col border border-gray-100 bg-gray-100/10 w-1/3 rounded-xl shadow p-8 gap-4">
          <p className="font-bold text-2xl">Asesoramiento personalizado</p>
          <p>
            Ofrece guías o asesorías mediante botones de “quiero saber más”,
            junto a la información del producto.
          </p>
        </div>

        <div className="flex flex-col border border-gray-100 bg-gray-100/10 w-1/3 rounded-xl shadow p-8 gap-4">
          <p className="font-bold text-2xl">Eventos gratuitos y formativos</p>
          <p>
            Masterclasses y formaciones diseñadas para resolver problemas
            concretos, orientando al usuario hacia tu solución.
          </p>
        </div>
      </div>

      <div className="flex flex-row gap-5 mt-5">
        <div className="flex flex-col border border-gray-100 bg-gray-100/10 w-1/3 rounded-xl shadow p-8 gap-4">
          <p className="font-bold text-2xl">
            Encuestas de satisfacción o conocimiento
          </p>
          <p>
            Recoge información directa de tus clientes para mejorar tu oferta y
            fortalecer la relación.
          </p>
        </div>

        <div className="flex flex-col border border-gray-100 bg-gray-100/10 w-1/3 rounded-xl shadow p-8 gap-4">
          <p className="font-bold text-2xl">
            Publicidad segmentada y de impacto
          </p>
          <p>
            Promociona tus productos con la misma fuerza que en Google Ads, pero
            de forma directa, evitando clics irrelevantes o tráfico fantasma.
          </p>
        </div>

        <div className="flex flex-col border border-gray-100 bg-gray-100/10 w-1/3 rounded-xl shadow p-8 gap-4">
          <p className="font-bold text-2xl">Campañas de branding</p>
          <p>
            Acciones enfocadas en mejorar la percepción de tu marca, no solo
            entre clientes y prospectos, sino también dentro de tu equipo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImportanciaNewsletter;
