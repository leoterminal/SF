'use client'
import { useEffect, useState } from 'react';

interface Offer {
  image: string;
  title: string;
  subtitle: string;
  text: string;
  bgColor: string;
  dotColor: string;
}

const OfferSection = () => {
  // Define your array of offer details
  const offers: Offer[] = [
    {
      image: "https://res.cloudinary.com/ddrsfwzlk/image/upload/v1718958497/image_43_vwcl47.png",
      title: "SIMPLIFIED TRADING",
      subtitle: "Over-the-Counter (OTC)",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet malesuada est. Morbi eu velit ex. Maecenas eget accumsan nibh, sed ultricies lacus. Sed luctus quam eu aliquam lacinia.",
      bgColor: "primary_brown",
      dotColor: "#b92d6c",
    },
    {
      image: "https://res.cloudinary.com/ddrsfwzlk/image/upload/v1718958497/image_46_fcwmak.png",
      title: "SIMPLIFIED TRADING",
      subtitle: "Over-the-Counter (OTC)",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet malesuada est. Morbi eu velit ex. Maecenas eget accumsan nibh, sed ultricies lacus. Sed luctus quam eu aliquam lacinia.",
      bgColor: "primary_green",
      dotColor: "#32cd32",
    },
    {
      image: "https://res.cloudinary.com/ddrsfwzlk/image/upload/v1718958498/image_47_fov33t.png",
      title: "SIMPLIFIED TRADING",
      subtitle: "Over-the-Counter (OTC)",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet malesuada est. Morbi eu velit ex. Maecenas eget accumsan nibh, sed ultricies lacus. Sed luctus quam eu aliquam lacinia.",
      bgColor: "primary_purple",
      dotColor: "#8c52ff",
    },
  ];

  // State to track currently selected offer index
  const [selectedOfferIndex, setSelectedOfferIndex] = useState<number>(0);
   // State to manage whether animation is paused
   const [isPaused, setIsPaused] = useState<boolean>(false);

   useEffect(() => {
     const interval = setInterval(() => {
       if (!isPaused) {
         setSelectedOfferIndex((prevIndex) =>
           prevIndex === offers.length - 1 ? 0 : prevIndex + 1
         );
       }
     }, 6000);
 
     return () => clearInterval(interval);
   }, [isPaused, offers.length]);

  // Function to handle click on dot
  const handleDotClick = (index: number) => {
    setSelectedOfferIndex(index);
  };

  return (
    <section className="bg-[#f7f3ff]">
      <div className="max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto flex flex-col items-center justify-between">
        <div className="lg:mt-8 mt-28 text-center">
          <p className="text-primary_brown lg:text-xl text-lg font-semibold">
            FEATURES WE OFFER
          </p>
          <h2 className="font-semibold lg:text-5xl text-3xl">Our Offers</h2>
        </div>

        <div className="lg:ml-[180px] xl:relative mt-[100px] max-w-[1097px] bg-white min-h-[520px] rounded-[20px] flex lg:flex-row flex-col gap-8 justify-end items-center space-x-10 px-9 py-[50px]">
          {/* Card with image */}
          <div
            style={{ backgroundColor: offers[selectedOfferIndex].dotColor }}
            className={`bg-${
              offers[selectedOfferIndex].bgColor
            } h-[338px] flex justify-center items-center lg:w-1/2 w-full xl:absolute xl:-left-40 rounded-[20px] sm:relative sm:-mt-10 transition-transform duration-500 transform translate-x-${
              selectedOfferIndex === 0
                ? "0"
                : selectedOfferIndex === 1
                ? "full"
                : "full"
            } lg:translate-x-0`}
          >
            <img
              src={offers[selectedOfferIndex].image}
              alt={`Offer ${selectedOfferIndex}`}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            />
          </div>

          {/* Text content */}
          <div className="flex lg:flex-row flex-col-reverse justify-between items-start lg:w-1/2 w-full gap-6">
            {offers.map((offer, index) => (
              <div
                key={index}
                className={`${
                  selectedOfferIndex === index ? "block" : "hidden"
                }`}
              >
                <h3 className="mb-6 font-semibold">
                  <div className={`text-sm text-${offer.bgColor}`}>
                    {offer.title}
                  </div>
                  <div className="text-2xl">{offer.subtitle}</div>
                </h3>
                <div className="w-2/3 text-lg font-normal text-[#708090] mb-6">
                  {offer.text}
                </div>

                <div
                  style={{ backgroundColor: offer.dotColor }}
                  className="w-[300px] rounded-[30px] text-white font-semibold flex items-center justify-center h-[57px] text-xl shadow-lg cursor-pointer"
                  onClick={() => handleDotClick(index)}
                >
                  Learn More
                </div>
              </div>
            ))}

            {/* Small boxes (dots) */}
            <div className="flex lg:flex-col flex-row justify-center items-start gap-8 ">
              {offers.map((offer, index) => (
                <div
                  key={index}
                  className={` rounded-md cursor-pointer ${
                    index === selectedOfferIndex
                      ? `
                  lg:w-5 w-14 lg:h-14 h-5 bg-${offers[selectedOfferIndex].bgColor}`
                      : `bg-gray-400 w-5 h-5`
                  }`}
                  //  style={{ backgroundColor: offers[selectedOfferIndex].dotColor }}
                  onClick={() => handleDotClick(index)}
                  onMouseEnter={() => setIsPaused(true)}
                  onMouseLeave={() => setIsPaused(false)}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;