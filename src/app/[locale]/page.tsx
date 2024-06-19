import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import Bubble from "../components/Bubble";
import styles from "./Home.module.css";

const Home = () => {
    const t =useTranslations('Hero')
  return (
    // <div className='min-h-screen flex items-center justify-center text-5xl'>{t('title')}</div>

    <main className="flex min-h-screen flex-col items-center justify-start gap-5  bg-[#f7f3ff]">
      <div className={styles.bubbleContainer}>
        <Bubble />
        <Bubble />
        <Bubble />
        <Bubble />
      </div>
      <h1 className="lg:text-6xl text-4xl font-extrabold lg:max-w-[550px] max-w-[400px] text-center mt-24">
        <span className="text-primary_purple">{t('CTA')}</span> a New Money
        Experience
      </h1>
      <p className="text-[#708090] lg:text-2xl text-lg text-center lg:max-w-[500px] max-w-[350px] p-2">
        Supporting Africa's diaspora in Turkiye in making and receiving payments
        from Africa seamlessly and securely
      </p>

      <div className="flex lg:flex-row flex-col max-w-[550px] items-center gap-6 mt-[50px] ">
        <div className="flex items-center gap-4 bg-primary_purple rounded-[30px] shadow-xl text-xl font-semibold hover:shadow-none text-white py-3 px-24 lg:px-12 lg:w-fit w-full  cursor-pointer">
          <div className="  ">Send Money</div>
          <IoIosArrowDown />
        </div>

        <div className="flex items-center gap-4 bg-white rounded-[30px] shadow-xl hover:shadow-none text-xl font-semibold text-primary_purple   py-3 px-20 lg:px-8 lg:w-fit w-full cursor-pointer">
          <div className="">Receive Money</div>
          <IoIosArrowDown />
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-primary_green lg:text-xl text-lg font-semibold ">
          PAY FOR ESSENTIAL SERVICES
        </p>
        <h2 className="font-semibold lg:text-5xl text-3xl">
          Services we render
        </h2>
      </div>

      <section className="bg-white min-h-[90vh] w-full relative">
        <Image
          src=" https://res.cloudinary.com/dzwnf9mjr/image/upload/v1718713898/image_44_bvaaps.png"
          alt="bg"
          width={100}
          height={100}
          className="absolute h-full top-0 left-0 w-full"
        />
      </section>
    </main>
  )
}

export default Home