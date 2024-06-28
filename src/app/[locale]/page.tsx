'use client'
import { useTranslations } from 'next-intl';
import React, { useRef, useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp, IoLogoWhatsapp } from 'react-icons/io';
import { BsPhoneFill } from 'react-icons/bs';
import Bubble from '../components/Bubble';
import styles from './Home.module.css';
import ServicesSection from './(homepageSections)/ServicesSection';
import OfferSection from './(homepageSections)/OfferSection';
import FaqSection from './(homepageSections)/FaqSection';
import ContactSection from './(homepageSections)/ContactSection';
import BottomSection from './(homepageSections)/BottomSection';
import FooterSection from './(homepageSections)/FooterSection';

const Home = () => {
  const t = useTranslations('HeroSection');


  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isReceiveDropdownOpen, setIsReceiveDropdownOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const receiveDropdownRef = useRef<HTMLDivElement>(null);

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsReceiveDropdownOpen(false);
  };

  const handleReceiveDropdownToggle = () => {
    setIsReceiveDropdownOpen(!isReceiveDropdownOpen);
    setIsDropdownOpen(false);
  };

  const calculateDropdownPosition = () => {
    if (dropdownRef.current) {
      const buttonRect = dropdownRef.current.getBoundingClientRect();
      const topPosition = buttonRect.bottom + window.scrollY + 20;
      const leftPosition = buttonRect.left + window.scrollX;
      return { top: topPosition, left: leftPosition };
    }
    return { top: 10, left: 0 };
  };

  const calculateReceiveDropdownPosition = () => {
    if (receiveDropdownRef.current) {
      const buttonRect = receiveDropdownRef.current.getBoundingClientRect();
      const topPosition = buttonRect.bottom + window.scrollY + 20;
      const leftPosition = buttonRect.left + window.scrollX;
      return { top: topPosition, left: leftPosition };
    }
    return { top: 10, left: 0 };
  };

  const dropdownPosition = calculateDropdownPosition();
  const receiveDropdownPosition = calculateReceiveDropdownPosition();

  const flagStyles = [
    { src: 'https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719412758/image_37_imv7oi.png'},
    { src: 'https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719412758/image_29_kmdjhm.png'},
    { src: 'https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719412758/image_30_dqlseh.png' },
    { src: 'https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719412758/image_32_s32lbk.png' },
    { src: 'https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719412758/image_38_anghil.png' },
    { src: 'https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719412758/image_36_ieqks2.png' },
    { src: 'https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719575234/kenya-flag-circle-icon_zkb6fr.png' },
    { src: 'https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719575115/nigeria-flag-round-circle-icon_fsomcp.png' },
    { src: 'https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719578676/ghana-flag-round-circle-icon_y4ocfh.png' },
    { src: 'https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719578955/south-africa-flag-round-circle-icon_fabzbm.png' },
  ];



  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-start gap-5 bg-[#f7f3ff]">

        <div className={styles.bubbleContainer}>
          {[...Array(5)].map((_, index) => (
            <Bubble key={index} />
          ))}
        </div>
        <h1 className="lg:text-6xl text-4xl font-extrabold lg:max-w-[550px] max-w-[400px] text-center mt-16">
          <span className="text-primary_purple  z-10">{t('cta')}</span> {t('title')}
        </h1>
        <p className="text-[#708090] lg:text-2xl text-lg text-center lg:max-w-[500px] max-w-[350px] p-2  z-10">
          {t('description')}
        </p>

        <div className="flex lg:flex-row flex-col max-w-[550px] items-center gap-6 mt-[50px] z-10">
          <div
            onClick={handleDropdownToggle}
            ref={dropdownRef}
            className="flex items-center justify-center gap-4 bg-primary_purple rounded-[30px] text-xl font-semibold text-white py-3 px-24 lg:px-12 lg:w-fit w-full cursor-pointer shadow-md shadow-gray-600 hover:shadow-none relative"
          >
            <div>{t('send_money')}</div>
            {isDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>

          <div
            onClick={handleReceiveDropdownToggle}
            ref={receiveDropdownRef}
            className="flex items-center justify-center gap-4 bg-white rounded-[30px] text-xl font-semibold text-primary_purple py-3 px-20 lg:px-8 lg:w-fit w-full cursor-pointer shadow-md shadow-gray-600 hover:shadow-none relative"
          >
            <div>{t('receive_money')}</div>
            {isReceiveDropdownOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </div>
        </div>

        {/* Dropdown items for Send Money */}
        {isDropdownOpen && (
          <div
            className="absolute bg-white text-[#535355] w-fit cursor-pointer z-30 shadow-lg rounded-md"
            style={{ top: dropdownPosition.top, left: dropdownPosition.left }}
          >
            <a
              href="https://wa.me/message/TJ6SGN6IUGTCP1"
              target="_blank"
              className="flex items-center gap-3 py-4 px-12 lg:px-4 hover:bg-slate-100"
            >
            
              <div>
                {' '}
                <IoLogoWhatsapp className="text-green-500 text-4xl" />
              </div>
              <div>
                <div className="font-semibold">WhatsApp</div>
                <div className="text-sm sm:w-[178px] w-full">Send Money via Whatsap</div>
              </div>
            </a>

            <div className="flex items-center gap-3 py-4 px-12 lg:px-4 hover:bg-slate-100 cursor-not-allowed">
              <div>
                {' '}
                <BsPhoneFill className="text-gray-500 text-4xl" />
              </div>
              <div>
                <div className="font-semibold">SFX Version 2</div>
                <div className="text-sm sm:w-[178px] w-full">Coming Soon ...</div>
              </div>
            </div>
          </div>
        )}

        {/* Dropdown items for Receive Money */}
        {isReceiveDropdownOpen && (
          <div
            className="absolute bg-white text-[#535355] w-fit cursor-pointer z-30 shadow-lg rounded-md"
            style={{ top: receiveDropdownPosition.top, left: receiveDropdownPosition.left }}
          >
            <a
              href="https://wa.me/message/TJ6SGN6IUGTCP1"
              target="_blank"
              className="flex items-center gap-3 py-4 px-12 lg:px-4 hover:bg-slate-100"
            >
              <div>
                {' '}
                <IoLogoWhatsapp className="text-green-500 text-4xl" />
              </div>
              <div>
                <div className="font-semibold">WhatsApp </div>
                <div className="text-sm sm:w-[178px] w-full">Receive Money via Whatsap</div>
              </div>
            </a>

            <div className="flex items-center gap-3 py-4 px-12 lg:px-4 hover:bg-slate-100 cursor-not-allowed">
              <div>
                {' '}
                <BsPhoneFill className="text-gray-500 text-4xl" />
              </div>
              <div>
                <div className="font-semibold">SFX Version 2</div>
                <div className="text-sm  sm:w-[178px] w-full">Coming Soon ...</div>
              </div>
            </div>
          </div>
        )}
        {/* Flags */}
       <marquee>
        <div className='flex items-center gap-28 mt-6'>
       {flagStyles.map((flag, index) => (
          <img
            key={index}
            src={flag.src}
            className=" w-12 h-12 z-30 "
            alt={`Flag ${index}`}
          />
        ))}
        </div>
        </marquee>

        

        <ServicesSection />
        <OfferSection />
        <FaqSection />
        <ContactSection />

           {/* Tailwind CSS for animation */}
        <style jsx>{`
          @keyframes flagMovement {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(0, 0);
            }
            25% {
              transform: translate(50%, 50%);
            }
            50% {
              transform: translate(50%, -50%);
            }
            75% {
              transform: translate(-50%, 50%);
            }
          }

          .animate-flag {
            animation: flagMovement 2s linear infinite;
          }
        `}</style>
      </main>
      <BottomSection />
      <FooterSection />
    </>
  );
};

export default Home;
