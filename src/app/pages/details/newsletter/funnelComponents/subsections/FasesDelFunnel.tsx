import React, { FC } from 'react';
import Spiral3D from '../../Spiral3D';

interface FasesDelFunnelProps {

}

const FasesDelFunnel: FC<FasesDelFunnelProps> = ({ }) => {
    return (
        <div className='flex flex-col pb-12'>
            <div className='flex flex-row w-1/2 text-center mx-auto   '>
                    <Spiral3D />

                </div>
            <p className='italic  text-lg w-2/3 mx-auto '>
                El <span className='font-bold text-red-500'>funnel de ventas</span> ha reemplazado los sistemas antiguos de venta fría o pago por tráfico masivo,
                que solo agotaban las bases de datos y dependían de la suerte. Hoy, gracias a las redes sociales y al marketing digital,
                las empresas pueden construir <span className='font-bold'>relaciones reales con sus clientes</span> en lugar de presionarlos con mensajes directos.
            </p>
            <p className='pt-12 pb-6 text-xl'> El sistema de funnel organiza a los contactos  en <span className='bg-red-600 font-bold text-white rounded-xl shadow p-1 px-2 mr-1'>3 fases principales</span>,  de modo
                que cada una refleja el nivel de cercanía del cliente hacia la compra, permitiendo diseñar estrategias distintas
                y mucho más efectivas en cada etapa</p>


            <div className='flex flex-row gap-5 '>
                <div className='flex flex-col bg-red-700 text-gray-200 p-8 rounded-xl shadow gap-3 w-1/3'>
                    <p className='text-2xl text-white mb-5'>Fase <span className='font-bold text-white'>TOFU</span></p>
                    <p>En la <span className='font-bold text-white'>fase de consciencia</span>, el objetivo es captar la atención.</p>
                    <p>Aquí predominan las campañas de <span className='font-bold text-white'>impacto</span>: anuncios, banners, contenidos virales o publicaciones en redes que generan interés inicial
                        y, en el mejor de los casos, llevan a una suscripción básica como seguir una cuenta o unirse a un newsletter.</p>
                    <p>Ya no se espera una venta inmediata, sino <span className='font-bold text-white'>abrir la puerta a una relación</span> con el cliente.</p>
                </div>
                <div className='flex flex-col bg-red-700 text-gray-200 p-8 rounded-xl shadow gap-3 w-1/3'>
                    <p className='text-2xl text-white mb-5'>Fase <span className='font-bold text-white'>MOFU</span></p>

                    <p> La <span className='font-bold text-white'>fase de consideración</span>  es donde ocurre la mayor parte del proceso.</p>
                        <p> El cliente, que ya mostró interés, empieza a consumir contenido de valor: newsletters, posts en redes o artículos en blogs.Aquí se <span className='font-bold text-white'>construye la confianza</span> mediante información útil, casos de éxito, comparativas o invitaciones a eventos digitales.
                        </p>
                        <p>Poco a poco, el cliente entiende cómo el producto o servicio se alinea con sus necesidades.</p>
                </div>
                <div className='flex flex-col bg-red-700 text-gray-200 p-8 rounded-xl shadow gap-3 w-1/3'>
                    <p className='text-2xl text-white mb-5'>Fase <span className='font-bold text-white'>BOFU</span></p>

                    <p> Finalmente, en la <span className='font-bold text-white'>fase de decisión</span>   el enfoque puede ser más comercial.</p>
                         <p>El cliente ya <span className='font-bold text-white'>está preparado</span> para recibir llamadas a la acción más directas, como solicitar una demo,
                        registrarse para una oferta exclusiva o concretar una reunión con un asesor.</p>
                         <p>En este punto, lejos de incomodarle, valora la orientación y claridad para dar el último paso hacia la compra.</p>
                </div>
            </div>
            <div className='flex flex-row pb-24 items-center text-lg mt-12'>
                     <p>
                        Este modelo <span className='font-bold text-red-500'> es actualmente el estándar</span> porque respeta los hábitos digitales de los usuarios,
                        optimiza recursos y permite medir la efectividad de cada acción.
                        En la práctica, también ayuda a distribuir mejor el presupuesto de marketing,
                        asegurando que cada euro invertido trabaje en el momento adecuado del recorrido del cliente.
                    </p>
             </div>
                
        </div>
    );
};

export default FasesDelFunnel;