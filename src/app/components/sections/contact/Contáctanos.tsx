'use client';

import React, { useState, FormEvent } from 'react';
import { useLanguage } from '@/app/context/LanguageContext';

const Contáctanos = () => {
  const { lang } = useLanguage();
  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const translations = {
    ESP: {
      title: 'Contáctanos',
      name: 'Tu nombre aquí',
      company: 'Empresa',
      position: 'Cargo',
      email: 'Correo electrónico',
      message: 'Mensaje',
      submit: 'Enviar',
      sending: 'Enviando...',
      sent: 'Su mensaje ha sido enviado correctamente.',
      error: 'Hubo un problema al enviar el mensaje. Intente nuevamente.',
    },
    ENG: {
      title: 'Contact us',
      name: 'Your name here',
      company: 'Company',
      position: 'Position',
      email: 'Email',
      message: 'Message',
      submit: 'Send',
      sending: 'Sending...',
      sent: 'Your message has been successfully sent.',
      error: 'There was a problem sending the message. Please try again.',
    },
  };

  const t = translations[lang] || translations['ESP'];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      empresa: formData.get('empresa'),
      cargo: formData.get('cargo'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Error en la petición');
      }

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
      className="flex flex-col min-h-screen bg-white text-gray-500"
      style={{
        borderTopLeftRadius: '50% 100px',
        borderTopRightRadius: '50% 100px',
      }}
    >
      <div className="w-full max-w-6xl mx-auto flex flex-col text-center my-auto">
        <div className="flex flex-row text-4xl md:text-7xl mx-auto">
          <p>{t.title}</p>
        </div>

        <div className="px-12 md:px-36 pt-12">
          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder={t.name}
              required
              className="px-4 py-2 text-gray-500 bg-transparent placeholder-gray-400 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="text"
              name="empresa"
              placeholder={t.company}
              required
              className="px-4 py-2 text-gray-500 bg-transparent placeholder-gray-400 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="text"
              name="cargo"
              placeholder={t.position}
              required
              className="px-4 py-2 text-gray-500 bg-transparent placeholder-gray-400 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="email"
              name="email"
              placeholder={t.email}
              required
              className="px-4 py-2 text-gray-500 bg-transparent placeholder-gray-400 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <textarea
              name="message"
              placeholder={t.message}
              rows={4}
              required
              className="px-4 py-2 text-gray-500 bg-transparent placeholder-gray-400 border border-gray-200 rounded-sm focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button
              type="submit"
              className="mt-6 text-md text-white px-8 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-400 transition duration-300 hover:shadow-md disabled:opacity-50"
              disabled={status === 'loading'}
            >
              {status === 'loading' ? t.sending : t.submit}
            </button>

            {showConfirmation && status === 'sent' && (
              <p className="text-green-600 mt-4">{t.sent}</p>
            )}
            {showConfirmation && status === 'error' && (
              <p className="text-red-600 mt-4">{t.error}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contáctanos;
