'use client'
import { useState } from "react";
import Image from "next/image";

const ServicesSection = () => {
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
      title: 'Book your Travel Tickets',
      description: 'Imagine not having to worry about the hassle of exchanging your local currency to pay for your flight to Turkiye or back home to Africa. Through the Sfx WhatsApp OTC service, you can pay for your already booked flight by paying us in your local currency, and we will pay for your flights in USD. We can also book and pay for your flights instantly.',
      icon:'https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719503953/ri_plane-line_ioprrm.png',
    },
    {
      title: 'Make Rental Payments',
      description: "Easily make your car rental or home rental payments through Sfx OTC. You can pay in your local currency or USD (USDT and USDC), and we will process and settle the payment to your recipient.",
      icon: 'https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719503953/wpf_car-rental_omrane.png'
    },
    {
      title: 'Tuition Fee Payment',
      description: "Make your Turkish or TRNC college or university payments abroad with Sfx via our OTC service. Pay in your local currency seamlessly and instantly. Sfx can settle your university fees in Turkish Lira or USD. It's as easy as sending a text message.",
      icon:'https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719503953/zondicons_education_ksjfxg.png'
    },
    {
      title: 'Pay for Utility Bills',
      description: 'Pay for your utility bills—electricity, water, and municipality bills—in Turkiye and TRNC seamlessly through Sfx. Send us a message on WhatsApp and discover the many convenient ways to pay your bills.',
      icon:'https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719503953/ion_water_cyc51l.png',
    },
    
  ];

  return (
    <section className="bg-white min-h-[90vh] w-full relative mt-10"  data-aos="fade-up">
      <div className="flex lg:flex-row flex-col-reverse justify-center items-center max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto">
        <div className="shadow-xl shadow-black sticky top-0 mb-8 grid grid-cols-1 justify-center gap-4 lg:w-1/2 w-full">
          {services.map((faq, index) => (
            <div key={index} className="-mb-8 w-full rounded-3xl bg-white">
              {/* FAQ Question */}
              <div
                className={`flex cursor-pointer items-center justify-between p-4 border-2 text-[#708090] border-gray-300 font-bold rounded-t-xl bg-white z-20`}
                onClick={() => toggleService(index)}
              >
                <div className="text-xl py-4">{faq.title}</div>
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
                  
                  <div className="flex flex-col gap-3  w-3/4 ">
                    <p className="tracking-[0.2px] py-6font-normal sm:text-base text-sm">{faq.description}</p>
                  <div
                  
                  className={`${index ==1 ?` text-primary_green`:''} ${index ==2 ?` text-primary_brown`:''} ${index ==3 ?` text-primary_darkblue`:''} ${index ==0 ?` text-primary_purple`:''} w-[300px] rounded-[30px] bg-white   font-semibold flex items-center justify-center h-[48px] text-xl shadow-lg cursor-pointer mt-4`}
                 
                >
                 Learn More
                </div>
                </div>
                  
                  <div className="w-1/4 py-3">
                    <img src={`${faq.icon}`} alt="icon" className="" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        <div  className="lg:w-1/2 w-full">
          <img  
        data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" src="https://res.cloudinary.com/ddrsfwzlk/image/upload/v1718958498/Rectangle_39_yg5x95.png" alt="img" /> </div>
      </div>
      <img
        src="https://res.cloudinary.com/dzwnf9mjr/image/upload/v1718713898/image_44_bvaaps.png"
        alt="bg"
       
        className="absolute h-full top-0 left-0 w-full -z-10"
      />
    </section>
  );
};

export default ServicesSection;
