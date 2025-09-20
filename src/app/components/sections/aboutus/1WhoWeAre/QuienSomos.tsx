'use client';

import React, { FC, useState } from 'react';
import content1 from './content-1.json';
import 'flag-icons/css/flag-icons.min.css';
import { useLanguage } from '@/app/context/LanguageContext';

const QuienSomos: FC = () => {
  const { lang } = useLanguage();
  const content = content1[lang];

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    const data = {
      subject: 'SOLICITUD DE CONSULTORIA',
      message: `EL USUARIO ${email} HA RELLENADO UN FORMULARIO SOLICITANDO CONTACTO PARA UNA CONSULTORIA`,
      email, // opcional, por si quieres incluirlo en el backend
    };

    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Error en la petición');

      setStatus('sent');
      setShowConfirmation(true);
    } catch (error) {
      console.error('Error enviando el correo:', error);
      setStatus('error');
      setShowConfirmation(true);
    }
  };

  return (
    <div
      id="quien-somos-component"
      className="w-full pt-24 md:p-8 px-12 md:flex flex-col mx-auto min-h-screen h-full 
      justify-center md:max-w-5xl text-center md:text-left"
    >
      <h1 className="mt-12 text-4xl md:text-7xl font-bold">{content.titular}</h1>
      <h2 className="text-lg md:text-2xl py-8">{content.subtitulo}</h2>

      <p className="font-bold pb-2 hidden md:block">{content.labelText}</p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row w-full"
      >
        <input
          type="email"
          placeholder={content.placeholderText}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="rounded bg-white bg-opacity-10 border border-gray-100 px-4 w-56 md:w-96 md:mr-4 mx-auto md:mx-0
          min-h-12 hidden md:block"
        />
        <button
          type="submit"
          className="p-2 md:p-3 px-5 bg-gray-200 rounded hover:bg-white hover:text-black transition-colors w-max text-gray-700
          mt-2 md:mt-0 mx-auto md:mx-0 min-h-12"
          style={{ width: '225px' }}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? content.sending : content.buttonContent}
        </button>
      </form>

      {showConfirmation && status === 'sent' && (
        <p className="text-white mt-4">
          {lang === 'ESP'
            ? 'Su mensaje ha sido enviado correctamente.'
            : 'Your message has been successfully sent.'}
        </p>
      )}
      {showConfirmation && status === 'error' && (
        <p className="text-red-500 mt-4">
          {lang === 'ESP'
            ? 'Hubo un error al enviar el mensaje. Intente nuevamente.'
            : 'There was an error sending the message. Please try again.'}
        </p>
      )}
    </div>
  );
};

export default QuienSomos;
