import type { Metadata } from "next";
 import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import { UIProvider } from "./context/UIContext";
import MainNav from "./components/navs/MainNav";
import FooterSection from "./components/navs/FooterSection";
  
export const metadata: Metadata = {
  title: 'Net3',
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
      <body
       >
        <LanguageProvider>
          <UIProvider>
            <main className="min-h-screen max-w-screen bg-gray-100">
            <MainNav />
              {children}
            <FooterSection id="main-footer"/>
            </main>
          </UIProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
