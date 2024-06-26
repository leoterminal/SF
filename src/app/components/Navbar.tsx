"use client";
import React, { useEffect } from "react";
import Link from "next/link";
// import { signOut, useSession } from "next-auth/react";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Image from "next/image";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

const Navbar = () => {
  const t =useTranslations('NavBar')
//   const { data: session }: any = useSession();
  // const handleClick = useCallback(()=>)

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Effect to handle scroll event
  useEffect(() => {
    const onScroll = (e:Event) => {
      const target = e.target as HTMLDocument;
      setScrollTop(target.documentElement.scrollTop);
      setScrolling(target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const navbarStyles = {
    backgroundColor: scrolling || mobileMenuOpen ? "white" : "#f7f3ff",
    transition: "background-color 0.3s ease",
    zIndex: 50,
  };


  const navigation = [
    // { name: "Home", href: "/" },
    // { name: "Dashboard", href: "/dashboard" },
    // { name: "About", href: "/about" },
    // { name: "Contact", href: "/contact" },
  ];

  return (
    <>

      <header className="sticky top-0" style={navbarStyles}>
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 lg:p-8 p-4 lg:px-8 gap-2"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">SFX Logo</span>
              <Image
                src="https://res.cloudinary.com/dzwnf9mjr/image/upload/v1718713898/SFx_Brand_Identity_Design_2_rdvr5v.png"
                width={100}
                height={100}
                alt="SFX logo"
              />
            </Link>
          </div>

          
          <div className="flex flex-1 items-center justify-end gap-x-6">
           
            
                <span className="ml-10 text-sm"></span>
                <LanguageSwitcher />
                  <button
                  onClick={() => {
                   
                  }}
                  className="hidden lg:block lg:text-sm lg:font-semibold lg:text-primary_purple  px-10 py-3 rounded-[30px] border border-primary_purple"
                >
                  {t('sign_in')}
                </button> 



                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-700 bg-primary_purple rounded-full sm:h-[55px] sm:w-[55px] w-10 h-10"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <span className="sr-only">Open main menu</span>
                   {mobileMenuOpen ? <FaTimes className="h-6 w-6 text-white" aria-hidden="true" /> :<FaBars className="h-6 w-6 text-white" aria-hidden="true" />} 

                  </button>
                </div>
            
        
          </div>
          {/* <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-700 bg-[#8c52ff] rounded-full h-[70px] w-[70px]"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <FaBars className="h-6 w-6" aria-hidden="true" />
            </button>
          </div> */}
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center gap-x-6">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">SFX Logo</span>
                <Image
                  width={80}
                  height={80}
                  src="https://res.cloudinary.com/dzwnf9mjr/image/upload/v1718713898/SFx_Brand_Identity_Design_2_rdvr5v.png"
                  alt="SFX logo"
                />
              </Link>
              
                <Link
                  href="/login"
                  className="ml-auto rounded-md border border-1 border-primary-purple px-3 py-2 text-sm font-semibold text-primary-purple shadow-sm hover:bg-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </Link>
            

              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <FaXmark className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                 
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </>
  );
};

export default Navbar;