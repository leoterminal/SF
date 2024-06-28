import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./global.css";
import Navbar from "../components/Navbar";
import { NextIntlClientProvider, useMessages } from "next-intl";
import 'aos/dist/aos.css'; 


const poppins = Poppins({
  subsets:['latin'],
  display: 'swap',
  weight:['300','600']
});

export const metadata: Metadata = {
  title: "SFX Change",
  description: "A Blockchain payment app built to optimize and offer, financial services to African diaspora in Turkiye.",
  icons:{
    icon:['/favicon.ico?v=4']
  }
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
