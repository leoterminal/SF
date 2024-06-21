"use client";
import React from "react";
import Link from "next/link";
// import { signOut, useSession } from "next-auth/react";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import Image from "next/image";

const Navbar = () => {
//   const { data: session }: any = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const handleClick = useCallback(()=>)

  const navigation = [
    // { name: "Home", href: "/" },
    // { name: "Dashboard", href: "/dashboard" },
    // { name: "About", href: "/about" },
    // { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/*
    <div>
      <ul className="flex justify-between m-10 item-center">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
        </div>
        <div className="flex gap-10">
          <Link href="/dashboard">
            <li>Dashboard</li>
          </Link>
          {!session ? (
            <>
              <Link href="/login">
                <li>Login</li>
              </Link>
              <Link href="/register">
                <li>Register</li>
              </Link>
            </>
          ) : (
            <>
              {session.user?.email}
              <li>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
                >
                  Logout
                </button>
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
                */}

      <header className="bg-white ">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 lg:p-8 p-4 lg:px-8 gap-2 sticky top-0"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">SFX Logo</span>
              <Image
                src="https://res.cloudinary.com/dzwnf9mjr/image/upload/v1718713898/SFx_Brand_Identity_Design_2_rdvr5v.png"
                width={100}
                height={80}
                alt="SFX logo"
              />
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-1 items-center justify-end gap-x-6">
           
            
                <span className="ml-10 text-sm"></span>

                <button
                  onClick={() => {
                   
                  }}
                  className="hidden lg:block lg:text-sm lg:font-semibold lg:text-primary_purple  px-10 py-3 rounded-[30px] border border-primary_purple"
                >
                  Sign in
                </button>

                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center p-2.5 text-gray-700 bg-[#8c52ff] rounded-full h-[55px] w-[55px]"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <span className="sr-only">Open main menu</span>
                    <FaBars className="h-6 w-6 text-white" aria-hidden="true" />
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
                  {/* {navigation.map((item) => (
                    <Link
                      key={item.name}
                      onClick={() => setMobileMenuOpen(false)}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))} */}
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