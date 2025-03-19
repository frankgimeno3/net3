import { LanguageProvider } from './context/LanguageContext';  // Asegúrate de importar el contexto
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Net3 - Technical Content Agency',
  description: 'Agencia de contenidos para medios técnicos y redes',
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
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
