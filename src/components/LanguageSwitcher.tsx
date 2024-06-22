
'use client';

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';

const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  const changeLanguage = (locale: string) => {
    router.push(`/${locale}${pathname}`);
  };

  return (
    <div>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('tr')}>Türkçe</button>
    </div>
  );
};

export default LanguageSwitcher;
