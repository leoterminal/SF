"use client"
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { useEffect, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { RiWhatsappFill } from 'react-icons/ri';
import AOS from 'aos';


const ContactSection = () => {
    const [value, setValue] = useState('');

    useEffect(()=>{
        AOS.init({
          duration: 1200,
          delay:50,
        })
      },[])

    return (
        <section className="bg-[#f7f3ff] lg:mb-8 mb-16 overflow-x-hidden" data-aos="fade-up">
            <div className="max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto">
                <div className="lg:mt-8 mt-16 text-center">
                    <p className="text-primary_green lg:text-xl text-lg font-semibold">CONTACT US</p>
                    <h2 className="font-semibold lg:text-5xl text-3xl">Still have a Question?</h2>
                </div>

               
        <div className="lg:mt-28 mt-12 max-w-[1097px] bg-gradient-to-b from-green-600 via-green-800 to-green-900  min-h-[520px] w-full rounded-[20px] flex lg:flex-row flex-col gap-8 justify-end items-center lg:px-9 lg:py-[50px] px-4 py-8">
                    {/* Left Side */}

                    <div className="lg:w-1/2 w-full bg-gradient-to-b from-green-600 via-green-800 to-green-900 rounded-[20px] shadow-lg shadow-green-800 text-white">
                        <div className="p-10 pb-40 rounded-lg backdrop-blur-xl shadow-green-800">
                            <h2 className="lg:text-2xl text-lg font-semibold">Contact Us</h2>
                            <p className="mt-4 lg:text-lg text-base">INFLUENCER SFX KITAP YAYINCILIGI TICARET LIMITED SIRKETI</p>
                            <p className="mt-24 lg:text-lg text-base flex items-center gap-2">
                                <FaLocationDot className="text-3xl" />
                                <span> YENIMAHALLE MAH. 3142 SK. SHT. ASB. ÖMER HALISDEMIR APT. NO: 3 IÇ KAPI</span>
                            </p>
                            <p className="mt-4 lg:text-lg text-base flex items-center gap-2">
                                <RiWhatsappFill className="text-2xl" />
                                <span>+905338833199</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="lg:w-1/2 w-full bg-gradient-to-b from-green-600 via-green-800 to-green-900 rounded-lg shadow-lg backdrop-blur-xl text-white">
                        <div className="py-10 px-6 lg:px-10">
                            <h2 className="lg:text-2xl text-lg font-semibold">Send us a message</h2>

                            <form className="mt-8 space-y-4">
                                <div className="flex flex-col">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" className="border-b border-green-600 py-2 focus:border-none focus:border-transparent bg-transparent focus:outline-none" placeholder="e.g Kolawole Michael" />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="border-b border-green-600 py-2 focus:border-none focus:border-transparent bg-transparent focus:outline-none" placeholder="e.g michael_ei@gmail.com" />
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" className="border-b border-green-600 py-2 focus:border-none focus:border-transparent bg-transparent focus:outline-none" placeholder="e.g +90 40000000" />
                                    
                                </div>

                                <div className="flex flex-col">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="border-b border-green-600 py-2 focus:border-none focus:border-transparent bg-transparent focus:ring-2 focus:ring-green-600 h-14 resize-none"></textarea>
                                </div>

                                <button className="bg-white text-black font-semibold  py-2 px-16 rounded-[30px] transition-colors duration-300">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
