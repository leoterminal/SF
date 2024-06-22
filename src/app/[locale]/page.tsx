
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Bubble from "../components/Bubble";
import styles from "./Home.module.css";
import ServicesSection from './(homepageSections)/ServicesSection';
import OfferSection from './(homepageSections)/OfferSection';
import FaqSection from './(homepageSections)/FaqSection';
import ContactSection from './(homepageSections)/ContactSection';

const Home = () => {
    const t =useTranslations('HeroSection')
  return (
    <>

    <main className="flex min-h-screen flex-col items-center justify-start gap-5  bg-[#f7f3ff]">
      <div className={styles.bubbleContainer}>
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
      </div>
      <h1 className="lg:text-6xl text-4xl font-extrabold lg:max-w-[550px] max-w-[400px] text-center mt-24">
        <span className="text-primary_purple">{t('cta')}</span> {t('title')}
      </h1>
      <p className="text-[#708090] lg:text-2xl text-lg text-center lg:max-w-[500px] max-w-[350px] p-2">
      {t('description')}
      </p>

      <div className="flex lg:flex-row flex-col max-w-[550px] items-center gap-6 mt-[50px] z-10">
        <div className="flex items-center justify-center gap-4 bg-primary_purple rounded-[30px] shadow-xl text-xl font-semibold hover:shadow-none text-white py-3 px-24 lg:px-12 lg:w-fit w-full  cursor-pointer">
          <div className="  ">{t('send_money')}</div>
          <IoIosArrowDown />
        </div>

        <div className="flex items-center justify-center gap-4 bg-white rounded-[30px] shadow-xl hover:shadow-none text-xl font-semibold text-primary_purple   py-3 px-20 lg:px-8 lg:w-fit w-full cursor-pointer">
          <div className="">{t('receive_money')}</div>
          <IoIosArrowDown />
        </div>
      </div>
{/* 
      <div className="lg:mt-8  mt-28 text-center">
        <p className="text-primary_green lg:text-xl text-lg font-semibold ">
          PAY FOR ESSENTIAL SERVICES
        </p>
        <h2 className="font-semibold lg:text-5xl text-3xl">
          Services we render
        </h2>
      </div> 

     
     <ServicesSection /> */}
    <OfferSection />
    <FaqSection />
    <ContactSection />
    </main>

      </>
  )
}

export default Home