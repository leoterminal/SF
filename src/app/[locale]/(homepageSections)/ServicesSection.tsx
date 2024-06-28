'use client'
import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ServicesSection = () => {
  const t =useTranslations('Services')
  const [openService, setOpenService] = useState<number | null>(null);

  // Function to toggle FAQ dropdown
  const toggleService = (index: number) => {
    if (openService === index) {
      setOpenService(null); // Close if already open
    } else {
      setOpenService(index); // Open the selected FAQ
    }
  };

  const services = [
    {
      title: t('service1.title'),
      description:  t('service1.desc'),
      icon:'https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719503953/ri_plane-line_ioprrm.png',
    },
    {
      title:  t('service2.title'),
      description:  t('service2.desc'),
      icon: 'https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719503953/wpf_car-rental_omrane.png'
    },
    {
      title:  t('service3.title'),
      description: t('service3.desc'),
      icon:'https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719503953/zondicons_education_ksjfxg.png'
    },
    {
      title:  t('service4.title'),
      description:  t('service4.desc'),
      icon:'https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719503953/ion_water_cyc51l.png',
    },
    
  ];

  return (
    <>
    <div className="lg:mt-8 mt-20 text-center"  data-aos="fade-up">
          <p className="text-primary_green lg:text-xl text-lg font-semibold">{t('cta')}</p>
          <h2 className="font-semibold lg:text-5xl text-3xl">{t('title')}</h2>
        </div>
    <section className="bg-white min-h-[90vh] w-full relative mt-10"  data-aos="fade-up">
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto">
        <div className="shadow-lg shadow-purple-400 mb-8 grid grid-cols-1 justify-center gap-4 lg:w-1/2 w-full lg:mr-16 mr-2">
          {services.map((faq, index) => (
            <div key={index} className="-mb-8 w-full rounded-3xl bg-white">
              {/* FAQ Question */}
              <div
                className={`flex cursor-pointer items-center justify-between p-4 border-2 text-[#708090] border-gray-300 font-bold rounded-t-xl bg-white z-20`}
                onClick={() => toggleService(index)}
              >
                <div className="text-xl py-4 pl-4">{faq.title}</div>
                <div className={`relative ml-2 flex w-5 items-center justify-center transform duration-300 `}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-6 ${openService === index ? 'transform rotate-270' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={openService === index ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                      />
                  </svg>
                </div>
              </div>
              {/* FAQ description */}
              {openService === index && (
                <div className={`p-4 ${index ==1 ?` bg-primary_green`:''} ${index ==2 ?` bg-primary_brown`:''} ${index ==3 ?` bg-primary_darkblue`:''} ${index ==0 ?` bg-primary_purple`:''} text-white flex justify-between items-start gap-6 pb-6 `}>
                  
                  <div className="flex flex-col gap-3  w-3/4 pl-4">
                    <p className="tracking-[0.2px] py-6font-normal sm:text-base text-sm">{faq.description}</p>
                  <div
                  
                  className={`${index ==1 ?` text-primary_green`:''} ${index ==2 ?` text-primary_brown`:''} ${index ==3 ?` text-primary_darkblue`:''} ${index ==0 ?` text-primary_purple`:''} w-[300px] rounded-[30px] bg-white   font-semibold flex items-center justify-center h-[48px] text-xl shadow-lg cursor-pointer mt-4`}
                 
                >
                {t('learn_more')}
                </div>
                </div>
                  
                  <div className="w-1/4 py-3">
                    <img src={`${faq.icon}`} alt="icon" loading="lazy" className="" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div  className="lg:ml-6 ml-0 lg:w-1/2 w-full">
          <img  
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" src="https://res.cloudinary.com/ddrsfwzlk/image/upload/v1718803443/SFx_Multiscreen_Phone_Mockup_uctfun.svg" alt="img" /> </div>
      </div>
      <img
        src="https://res.cloudinary.com/dzwnf9mjr/image/upload/v1718713898/image_44_bvaaps.png"
        alt="bg"
        
        className="absolute h-full top-0 left-0 w-full -z-10"
        />
    </section>
        </>
  );
};

export default ServicesSection;
