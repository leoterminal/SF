
"use client"
import { useEffect, useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import AOS from 'aos';


// Define the TypeScript type for your content
type Content = {
  header: string;
  content: string;
  category: string;
};

const FaqSection = () => {
  const [currentHeader, setCurrentHeader] = useState<number | null>(null);
  const [currentHeaderOpen, setCurrentHeaderOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("General");

  useEffect(()=>{
    AOS.init({
      duration: 1300,
    })
  },[])

  const tabs: Content[] = [
    {
      header: "What is the SFX App?",
      content:
        "The SFX App is a fintech solution designed specifically for African students in Turkey, enabling users to trade their local currencies for USDT stablecoin, pay bills, and transfer money to family and friends either in USDT or their local currencies.",
      category: "General",
    },
    {
      header: "Who can use the SFX App?",
      content:
        "The app is primarily aimed at African students residing in Turkey but can be used by any individual who meets the registration criteria, including possessing valid identification and being of legal age as defined by Turkish regulations.",
      category: "General",
    },
    {
      header: "What African currencies are currently eligible to transact using the app?",
      content:
        "Nigeria, Ghana, Uganda, Kenya, Zambia, South Africa, Rwanda,Tanzania.",
      category: "General",
    },
    {
      header: "Is the SFX App secure?",
      content:
        "Yes, the SFX App uses advanced security protocols to ensure all transactions and personal data are protected. This includes encryption, secure login processes, and continuous monitoring for potential security threats. You can check out our very detailed SFX policy at https://policy.sfxchange.co/",
      category: "General",
    },
    {
      header: "How do I convert my local currency to USDT on the SFX App?",
      content:
        "To convert your local currency to USDT, simply log into your account, navigate to the Fund/Withdraw section, enter the amount you wish to convert, and confirm your transaction. The conversion rates are updated in real-time based on current market rates.",
      category: "Money Transfer",
    },
    {
      header: "Are there any fees associated with currency conversion?",
      content:
        "The SFX App is a fintech solution designed specifically for African students in Turkey, enabling users to trade their local currencies for USDT stablecoin, pay bills, and transfer money to family and friends either in USDT or their local currencies.",
      category: "General",
    },
    {
      header: "How can I pay bills using the SFX App?",
      content:
        "The SFX App provides a simple bill payment interface where you can select the biller, enter the amount, and proceed with the payment using your local currency or USDT stablecoin.",
      category: "Bill Payment",
    },
    {
      header: "What types of bills can I pay with the SFX App?",
      content:
        "You can pay various types of bills through the SFX App, including utilities, mobile phone, internet, and tuition fees directly through the app.",
      category: "Bill Payment",
    },
    {
      header: "How do I pay a bill using the SFX App?",
      content:
        "To pay a bill, select the Send USD option in the app, choose the type of bill, enter the payment details (such as account number and amount), and confirm your payment.",
      category: "Bill Payment",
    },
    {
      header: " Is there a limit to how much money I can send?",
      content:
        "Yes, there are transfer limits which depend on your user verification level. Enhanced verification allows for higher transaction limits.",
      category: "Money Transfer",
    },
    {
      header: " Can I receive money from others directly into my SFX App account?",
      content:
        " Yes, you can receive money directly into your SFX account. The sender needs your wallet address wrath account details provided on the app",
      category: "Money Transfer",
    },
    {
      header: " What should I do if I encounter a problem with the app?",
      content:
        "If you experience any technical difficulties, please contact our support team via the app's 'Help' section or email us directly at support@sfx.com or +90 533 883 31 99 on WhatsApp. Our team is available 24/7 to assist you.",
      category: "Support",
    },
    {
      header: " How can I update my personal information in the app?",
      content:" You can update your personal information through the 'Settings' menu in the app. It's important to keep your information up to date to ensure uninterrupted service.By addressing these frequently asked questions, the SFX App aims to enhance user experience and provide vital information to its users, ensuring they can make the most out of the app’s features with ease and confidence.",
      category: "Support",
    },
    {
      header: "Are there any fees associated with currency conversion?",
      content:"Yes, there is a minimal fee for currency conversion on the app. This fee is transparently displayed during the transaction process.",
      category: "OTC",
    },
    {
      header: "How do I convert my local currency to USDT on the SFX App?",
      content:"To convert your local currency to USDT, simply log into your account, navigate to the Fund Withdraw section, enter the amount you wish to convert, and confirm your transaction. The conversion rates are updated in real-time based on current market rates.",
      category: "OTC",
    },
   
  ];

  const categories = ["General", "Bill Payment", "Money Transfer", "Support", "OTC"];

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
      <section className="mt-11 overflow-hidden"   data-aos="fade-up">
        <div className="max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto flex flex-col items-center justify-between mb-11">
          <div className=" text-center">
            <p className="text-primary_brown lg:text-xl text-lg font-semibold">
              STAY INFORMED
            </p>
            <h2 className="font-semibold lg:text-5xl text-3xl">
              Frequently Asked Questions
            </h2>
          </div>
        </div>

        <div
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/ddrsfwzlk/image/upload/v1718963171/Rectangle_29_whdnee.png')`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            minHeight: "calc(100vh - 50rem)",
            width: "98vw",
          }}
          className="overflow-x-hidden lg:py-[92px] py-6"
        >
          <div className="max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto flex flex-col lg:flex-row justify-center gap-6 items-start">
            <div className="lg:w-1/4 w-full gap-3 bg-white lg:rounded-lg lg:py-8 py-3 px-4 flex lg:flex-col flex-row lg:overflow-x-hidden overflow-x-auto text-sm lg:text-base lg:sticky lg:top-0">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className={`border ${
                    selectedCategory === category
                      ? "bg-primary_purple text-white font-semibold"
                      : "border-primary_purple text-primary_purple font-semibold"
                  } h-16 lg:w-full w-fit flex items-center justify-center text-nowrap rounded-lg px-6 cursor-pointer`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category.toUpperCase()}
                </div>
              ))}
            </div>

            <div className="lg:w-3/4 w-full bg-white rounded-lg">
              <div className="flex-col flex w-full xl:gap-y-[5px] gap-y-[10px]">
                {tabs
                  .filter(
                    (tab) =>
                      tab.category === selectedCategory 
                  )
                  .map((item, i) => (
                    <section key={i}>
                      <div className="bg-inherit">
                        <div
                          onClick={() => handleDropDown(i)}
                          className={`flex border-b cursor-pointer text-black xl:text-xl justify-between items-center font-medium min-h-[60px] xl:min-h-[80px] px-10 ${
                            currentHeaderOpen && currentHeader === i
                              ? "active accordion-up"
                              : "accordion-down"
                          }`}
                        >
                          <h1 className="max-w-[80%] font-semibold">{item.header}</h1>
                          {currentHeaderOpen && currentHeader === i ? (
                            <FiMinus />
                          ) : (
                            <FiPlus />
                          )}
                        </div>
                        {currentHeaderOpen && currentHeader === i && (
                          <div className="text-white py-3 px-10 transition-all font-normal bg-primary_purple accordion-up">
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
