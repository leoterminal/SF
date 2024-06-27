'use client'
import React, { useState } from 'react'


const ServiceSection = () => {

    const [openFaq, setOpenFaq] = useState<number | null>(null);

    // Function to toggle FAQ dropdown
    const toggleFaq = (index: number) => {
      if (openFaq === index) {
        setOpenFaq(null); // Close if already open
      } else {
        setOpenFaq(index); // Open the selected FAQ
      }
    };
  
    const faqs = [
      {
        question: 'How this theme is different from others in the market?',
        answer: 'Lorem ipsum dolor sit amet consectetur adipiscing elit...',
      },
      {
        question: 'What is your policy on distribution?',
        answer: 'Pellentesque in nisi aliquet, pellentesque purus eget...',
      },
      {
        question: 'How can I contribute to Flowspark?',
        answer: 'Pellentesque in nisi aliquet, pellentesque purus eget...',
      },
      // Add more FAQ items as needed
    ];
  return (
    <>
     <section className="bg-[#f7f3ff] lg:mb-8 mb-16 overflow-x-hidden relative" data-aos="fade-up">
            <div className="max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto">
                <div className="lg:mt-8 mt-16 text-center">
                    <p className="text-primary_green lg:text-xl text-lg font-semibold">PAY FOR ESSENTIAL SERVICES</p>
                    <h2 className="font-semibold lg:text-5xl text-3xl">Services we render</h2>
                </div>

                <div className="flex justify-center items-center max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto">
        <div className="mb-8 grid grid-cols-1 justify-center gap-4">
          {faqs.map((faq, index) => (
            <div key={index} className="-mb-8 w-full rounded-xl bg-blue-900">
              {/* FAQ Question */}
              <div
                className="flex cursor-pointer items-start justify-between p-4 border text-[#708090] border-gray-300 font-bold rounded-t-xl bg-white z-20"
                onClick={() => toggleFaq(index)}
              >
                <div className="text-xl">{faq.question}</div>
                <div className="relative ml-2 flex h-20 w-5 items-center justify-center transform duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 ${openFaq === index ? 'transform rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={openFaq === index ? 'M5 15l7-7 7 7' : 'M19 9l-7 7-7-7'}
                    />
                  </svg>
                </div>
              </div>
              {/* FAQ Answer */}
              {openFaq === index && (
                <div className="p-4 bg-green-500">
                  <p className="tracking-[0.2px]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div><img src="https://res.cloudinary.com/ddrsfwzlk/image/upload/v1718958498/Rectangle_39_yg5x95.png" alt="" /> </div>
      </div>
      <img
        src="https://res.cloudinary.com/dzwnf9mjr/image/upload/v1718713898/image_44_bvaaps.png"
        alt="bg"
       
        className="absolute h-full top-0 left-0 w-full -z-10"
      />



            </div>
        </section>
    </>
  )
}

export default ServiceSection