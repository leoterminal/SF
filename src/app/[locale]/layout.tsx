import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./global.css";
import Navbar from "../components/Navbar";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { NextIntlClientProvider, useMessages } from "next-intl";


const poppins = Poppins({
  subsets:['latin'],
  display: 'swap',
  weight:['300','600']
});

export const metadata: Metadata = {
  title: "SFX Change",
  description: "Best Money App",
};

interface RootLayoutProps{
    children:React.ReactNode;
    params:{locale:string}
}

export default function RootLayout({children, params:{locale},}: Readonly<RootLayoutProps>) {
  const messages = useMessages();
  
  return (
    <html lang={locale}>
      <NextIntlClientProvider messages={messages}>
      <body className={poppins.className}>
        {/* <LanguageSwitcher /> */}
      <Navbar />
        {children}
        </body>
        </NextIntlClientProvider >
    </html>
  );
}
