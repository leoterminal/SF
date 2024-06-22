import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./global.css";
import Navbar from "../components/Navbar";
import LanguageSwitcher from "@/components/LanguageSwitcher";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SFX Change",
  description: "Best Money App",
};

interface RootLayoutProps{
    children:React.ReactNode;
    params:{locale:string}
}

export default function RootLayout({
  children,
  params:{locale},
}: Readonly<RootLayoutProps>) {
  return (
    <html lang={locale}>

      <body className={inter.className}>
        <LanguageSwitcher />
      <Navbar />
        {children}
        </body>
    </html>
  );
}
