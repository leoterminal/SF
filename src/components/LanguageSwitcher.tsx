"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";

const LanguageSwitcher = () => {
  const router = useRouter();
  const [isClient, setIsClient] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set isClient to true when component mounts on the client
  }, []);

  const changeLanguage = (locale: string) => {
    const regex = /^\/(tr|en)/;
    const pathRefine = window.location.pathname.replace(regex, "");
    const newPath = `/${locale}${pathRefine}`;
    router.push(newPath);
  };
  if (!isClient) return null; // Render nothing during SSR

  return (
    <>
      {/* <div className="relative font-semibold text-black text-lg cursor-pointer" onClick={() => changeLanguage(window.location.pathname.includes('/tr') ? 'en' : 'tr')}>
      {window.location.pathname.includes('/tr')?
      <img src="https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719564777/united-kingdom-flag-icon_mqnelr.png"  className="relative w-8 h-5" alt="English" /> :
      <img src="https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719564777/turkey-flag-icon_jg7yxy.png" alt="Turkish" className="relative w-8 h-5" />}
 */}
      <div
        onClick={() => {
          setIsDropDownOpen(!isDropDownOpen);
        }}
        className="relative cursor-pointer mr-4"
      >
        <SlGlobe className=" sm:text-4xl text-3xl text-primary_purple" />
        {isDropDownOpen ? (
          <MdKeyboardArrowUp className="absolute bottom-2 -right-4 text-primary_purple" />
        ) : (
          <MdKeyboardArrowDown className="absolute bottom-2 -right-4 text-primary_purple" />
        )}
        {isDropDownOpen && (
          <div className="absolute top-10 -right-3  w-28 flex flex-col items-start bg-white border border-gray-300 rounded-md shadow-md">
            <button
              className="w-full  px-3 py-2 text-center text-gray-700 hover:bg-gray-200"
              onClick={() => changeLanguage("en")}
            >
              English
            </button>
            <button
              className="w-full  px-3 py-2 text-center text-gray-700 hover:bg-gray-200"
              onClick={() => changeLanguage("tr")}
            >
              Türkçe
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageSwitcher;
