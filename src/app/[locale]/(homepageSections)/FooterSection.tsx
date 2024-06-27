import React from 'react';
import { AiFillTikTok } from 'react-icons/ai';
import { FaCopyright, FaFacebookSquare } from 'react-icons/fa';
import { FaLocationDot, FaSquareInstagram, FaSquarePhone, FaSquareXTwitter } from 'react-icons/fa6';

const FooterSection = () => {
  return (
    <>
      <section className="bg-white sm:py-24 py-14">
        <div className="max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto flex flex-col sm:flex-row justify-between items-start">
          <div className="lg:w-1/2 w-full mb-8 lg:mb-0 text-left">
            <img
              src="https://res.cloudinary.com/ddrsfwzlk/image/upload/v1719308408/SFx_Brand_Identity_Design_1_1_tzyqpx.png"
              alt="SFX logo"
              className="w-[150px] h-[56px] mx-auto lg:mx-0"
            />

            <div className="flex items-center justify-start gap-2 mt-4 text-[#708090]">
            <FaLocationDot className='text-2xl' />
              <span className=" font-normal max-w-[438px]">
                YENIMAHALLE MAH. 3142 SK. SHT. ASB. ÖMER HALISDEMIR APT. NO: 3 IÇ KAPI
              </span>
            </div>

            <div className="flex items-center justify-start gap-2 mt-4 text-[#708090]">
            <FaSquarePhone  className='text-2xl'  />

              <span className=" font-normal">+905338833199</span>
            </div>

            <div className="mt-8 text-[#708090]">Follow Us</div>
            <div className='flex items-center gap-4 '>
            <AiFillTikTok className='text-[#708090] sm:text-3xl text-2xl  cursor-pointer' />
            <FaSquareInstagram className='text-[#708090] sm:text-2xl text-xl cursor-pointer' />
            <FaSquareXTwitter className='text-[#708090] sm:text-2xl text-xl cursor-pointer' />
            <FaFacebookSquare className='text-[#708090] sm:text-2xl text-xl cursor-pointer' />


            </div>
          </div>

          <div className="lg:w-1/2 w-full grid grid-cols-2 lg:grid-cols-4 gap-10 text-[#708090]">
            <div className="space-y-5 ">
              <h3 className="text-black text-xl font-medium">Quick Links</h3>
              <div>Home</div>
              <div>About</div>
              <div>Contact Us</div>
              <div>Offers</div>
              <div>Services</div>
            </div>

            <div className="space-y-5">
              <h3 className="text-black text-xl font-medium">Useful Links</h3>
              <div>Blog</div>
              <div>Legal</div>
            </div>

            <div className="space-y-5">
              <h3 className="text-black text-xl font-medium">Get Started</h3>
              <div>Get Started</div>
              <div>Sign in</div>
            </div>

            <div className="space-y-5">
              <h3 className="text-black text-xl font-medium">Transactions</h3>
              <div>Send Money</div>
              <div>Trade</div>
              <div>Swap</div>
              <div>Withdraw</div>
            </div>
          </div>
        </div>

        <div className="max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto text-[#708090] text-center sm:py-10 py-5 mt-12 border-t-2">
          <h3 className="text-lg flex sm:items-center items-start justify-center gap-2"> <FaCopyright /> <span>All Rights Reserved of SFx Influencer 2024 </span></h3>
          <p className="text-sm mt-2">
            <b>Disclaimer:</b> SFx offers its products and services in partnership with licensed transmitters in their respective jurisdictions. All trademarks and brand names belong to their respective owners. Use of these trademarks and brand names do not represent endorsement by or association with Shiga Digital Incl.
          </p>
        </div>
      </section>
    </>
  );
};

export default FooterSection;
