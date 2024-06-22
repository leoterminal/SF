'use client'
import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';

// Define the TypeScript type for your content
type Content = {
  header: string;
  content: string;
};

const FaqSection = () => {

    const [currentHeader, setCurrentHeader] = useState<number | null>(null);
  const [currentHeaderOpen, setCurrentHeaderOpen] = useState<boolean>(false);

  // Define your tabs content as an array of Content objects
  const tabs: Content[] = [
    {
      header: "What is the SFX App?",
      content:
        "The SFX App is a fintech solution designed specifically for African students in Turkey, enabling users to trade their local currencies for USDT stablecoin, pay bills, and transfer money to family and friends either in USDT or their local currencies."   },
    {
      header: "Who can use the SFX App?",
      content:
        "The SFX App is a fintech solution designed specifically for African students in Turkey, enabling users to trade their local currencies for USDT stablecoin, pay bills, and transfer money to family and friends either in USDT or their local currencies.",
    },
    {
      header: "Is the SFX App secure?",
      content:
        'The SFX App is a fintech solution designed specifically for African students in Turkey, enabling users to trade their local currencies for USDT stablecoin, pay bills, and transfer money to family and friends either in USDT or their local currencies.'},
    {
      header: "How do I convert my local currency to USDT on the SFX App?",
      content:
        "The SFX App is a fintech solution designed specifically for African students in Turkey, enabling users to trade their local currencies for USDT stablecoin, pay bills, and transfer money to family and friends either in USDT or their local currencies.",
    },
    {
      header: " Are there any fees associated with currency conversion?",
      content:
        "The SFX App is a fintech solution designed specifically for African students in Turkey, enabling users to trade their local currencies for USDT stablecoin, pay bills, and transfer money to family and friends either in USDT or their local currencies.",
    },
  ];

  // Function to handle dropdown toggle
  const handleDropDown = (index: number) => {
    if (index === currentHeader) {
      setCurrentHeaderOpen(!currentHeaderOpen);
    } else {
      setCurrentHeader(index);
      setCurrentHeaderOpen(true);
    }
  };
  return (
    <>
      <section className="mt-11 overflow-hidden">
        <div className="max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto  flex flex-col items-center justify-between mb-11">
          <div className="lg:mt-8 mt-28 text-center">
            <p className="text-primary_brown lg:text-xl text-lg font-semibold">
              STAY INFORMED
            </p>
            <h2 className="font-semibold lg:text-5xl text-3xl">Frequently Asked Questions</h2>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/ddrsfwzlk/image/upload/v1718963171/Rectangle_29_whdnee.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            minHeight: "calc(100vh - 11rem)",
            width:"100vw",
            
          }}
          className="overflow-x-hidden lg:py-[92px] py-10"
        >
          <div className=" max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto flex flex-col lg:flex-row justify-center gap-6 items-center">
            <div className="lg:w-1/4 w-full gap-3 bg-white rounded-lg lg:py-8 py-4 px-4 flex lg:flex-col flew-row lg:overflow-x-hidden overflow-x-auto text-sm lg:text-base">
                <div className='border border-primary_purple text-primary_purple font-semibold h-16 w-full flex items-center justify-center rounded-lg px-4'> 
                GENERAL</div>
                <div className='border border-primary_purple text-primary_purple font-semibold h-16 min-w-fit flex items-center justify-center rounded-lg px-4'> 
                BILL PAYMENT</div>
                <div className='border border-primary_purple text-primary_purple font-semibold h-16 min-w-fit flex items-center justify-center rounded-lg px-4'> 
                MONEY TRANSFER</div>
                <div className='border border-primary_purple text-primary_purple font-semibold h-16 w-full flex items-center justify-center rounded-lg px-4'> 
                SUPPORT</div>
                <div className='border border-primary_purple text-primary_purple font-semibold h-16 w-full flex items-center justify-center rounded-lg px-4'> 
                OTC</div>


            </div>
            <div className="lg:w-3/4 w-full bg-white rounded-lg">
            <div className="flex-col flex w-full xl:gap-y-[5px] gap-y-[10px]">
      {tabs.map((item, i) => (
        <section key={i}>
          <div className="bg-inherit">
            <div
              onClick={() => handleDropDown(i)}
              className={`flex border-b  cursor-pointer text-black xl:text-xl justify-between items-center  font-medium min-h-[60px] xl:min-h-[80px] px-10 ${
                currentHeaderOpen && currentHeader === i ? 'active accordion-up' : 'accordion-down'
              }`}
            >
              <h1 className="max-w-[80%]">{item.header}</h1>
               {currentHeaderOpen && currentHeader === i ? <FiMinus />: <FiPlus />}
            </div>
            {currentHeaderOpen && currentHeader === i && (
              <div className=" text-white py-3 px-10 avenir content transition-all bg-primary_purple accordion-up">
                {item.content}
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqSection;
