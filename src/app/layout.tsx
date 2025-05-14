import { LanguageProvider } from './context/LanguageContext';
import { UIProvider } from './context/UIContext'; // 👈 importa el nuevo contexto
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Net3 - Technical Content Agency',
  description: 'Agencia de contenidos para medios técnicos y redes',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <LanguageProvider>
          <UIProvider>  
            {children}
          </UIProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
