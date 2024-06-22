
"use client"
import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

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

  const tabs: Content[] = [
    {
      header: "What is the SFX App?",
      content:
        "The SFX App is a fintech solution designed specifically for African students in Turkey, enabling users to trade their local currencies for USDT stablecoin, pay bills, and transfer money to family and friends either in USDT or their local currencies.",
      category: "Support",
    },
    {
      header: "Who can use the SFX App?",
      content:
        "The SFX App is a fintech solution designed specifically for African students in Turkey, enabling users to trade their local currencies for USDT stablecoin, pay bills, and transfer money to family and friends either in USDT or their local currencies.",
      category: "Support",
    },
    {
      header: "Is the SFX App secure?",
      content:
        "The SFX App is a fintech solution designed specifically for African students in Turkey, enabling users to trade their local currencies for USDT stablecoin, pay bills, and transfer money to family and friends either in USDT or their local currencies.",
      category: "General",
    },
    {
      header: "How do I convert my local currency to USDT on the SFX App?",
      content:
        "The SFX App is a fintech solution designed specifically for African students in Turkey, enabling users to trade their local currencies for USDT stablecoin, pay bills, and transfer money to family and friends either in USDT or their local currencies.",
      category: "General",
    },
    {
      header: "Are there any fees associated with currency conversion?",
      content:
        "The SFX App is a fintech solution designed specifically for African students in Turkey, enabling users to trade their local currencies for USDT stablecoin, pay bills, and transfer money to family and friends either in USDT or their local currencies.",
      category: "Bill Payment",
    },
    {
      header: "How can I pay bills using the SFX App?",
      content:
        "The SFX App provides a simple bill payment interface where you can select the biller, enter the amount, and proceed with the payment using your local currency or USDT stablecoin.",
      category: "Bill Payment",
    },
    {
      header: "Can I transfer money to other SFX App users?",
      content:
        "Yes, you can transfer money to other SFX App users by entering their registered phone number or email address and specifying the amount you wish to transfer. The recipient will receive the funds instantly in their SFX App account.",
      category: "Money Transfer",
    },
    {
      header: "Is customer support available?",
      content:
        "Yes, the SFX App provides customer support services through various channels, including email, phone, and in-app chat. You can reach out to our support team for assistance with any issues or queries you may have.",
      category: "Support",
    },
    {
      header: "What is Over-the-Counter (OTC) trading?",
      content:
        "Over-the-Counter (OTC) trading refers to the process of buying and selling cryptocurrencies directly between parties, without the need for a centralized exchange. OTC trading offers advantages such as increased privacy, lower fees, and the ability to execute large trades without affecting market prices.",
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
      <section className="mt-11 overflow-hidden">
        <div className="max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto flex flex-col items-center justify-between mb-11">
          <div className="lg:mt-8 mt-28 text-center">
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
            minHeight: "calc(100vh - 11rem)",
            width: "100vw",
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
                      : "border-primary_purple text-primary_purple"
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
                      tab.category === selectedCategory ||
                      selectedCategory === "General"
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
                          <h1 className="max-w-[80%]">{item.header}</h1>
                          {currentHeaderOpen && currentHeader === i ? (
                            <FiMinus />
                          ) : (
                            <FiPlus />
                          )}
                        </div>
                        {currentHeaderOpen && currentHeader === i && (
                          <div className="text-white py-3 px-10 transition-all bg-primary_purple accordion-up">
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
