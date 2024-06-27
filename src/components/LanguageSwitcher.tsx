'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set isClient to true when component mounts on the client
  }, []);

    const changeLanguage = (locale: string) => {
      const regex = /^\/(tr|en)/;
      const pathRefine= window.location.pathname.replace(regex, '');
      const newPath = `/${locale}${pathRefine}`;
      router.push(newPath);
  };
  if (!isClient) return null; // Render nothing during SSR

  return (
    <div className="flex items-center">
      <div className="font-semibold text-primary_purple text-lg cursor-pointer" onClick={() => changeLanguage(window.location.pathname.includes('/tr') ? 'en' : 'tr')}>
      {window.location.pathname.includes('/tr') ? 'EN' : 'TR'}
    </div>
    </div>
  );
};

export default LanguageSwitcher;
