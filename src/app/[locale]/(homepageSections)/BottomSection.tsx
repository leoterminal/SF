import { FaApple, FaGooglePlay } from "react-icons/fa"

const BottomSection = () => {
  return (
    <>
    <section className="flex lg:flex-row flex-col-reverse lg:gap-4 gap-10 items-center justify-center bg-white max-w-[95vw] sm:max-w-[754px] xl:max-w-[1220px] w-full mx-auto min-h-[90vh] overflow-x-hidden">
    <div className="mx-auto">
        <div  data-aos="zoom-in" className="lg:w-[348px] w-full flex items-center justify-center text-xl sm:mb-[94px] mb-12 rounded-[30px] bg-primary_green font-bold h-12 cursor-pointer">Coming Soon</div>
        <div className="text-[#9F9D9D] sm:text-xl text-sm font-semibold mb-2">OUR MOBILE APPLICATION - V2</div>
        <div className="sm:text-5xl text-3xl font-semibold w-[340px] text-wrap">Download our App</div>

        <p className="my-5 max-w-[450px] text-wrap">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet malesuada est. Morbi eu velit ex.</p>
        <div className="flex items-center gap-4 mb-4">
          <div className="sm:w-20 sm:h-[51px] w-full h-10  flex items-center justify-center bg-black rounded-md cursor-pointer"><FaApple className="text-white sm:text-3xl text-2xl" /></div>
          <div className="sm:w-20 sm:h-[51px] w-full h-10 flex items-center justify-center bg-black rounded-md cursor-pointer"><FaGooglePlay className="text-white sm:text-2xl text-xl" /></div>
        </div>
    </div>

    <div  data-aos="zoom-in">
        <img src="https://res.cloudinary.com/ddrsfwzlk/image/upload/v1718958498/screen-view_mkigrt.png"
        alt="SFX Mobile"
        />
    </div>

    </section>
    <section className="bg-gradient-to-br from-purple-700 via-purple-800 to-purple-900 py-8">
        <div className="max-w-screen-md mx-auto text-white px-4">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center">Stay Informed</h2>
          <p className="text-lg lg:text-xl font-light text-center mb-4">Subscribe to our newsletter and get exclusive information about SFx</p>

          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
            <input type="email" className="w-full px-9 py-3.5 mb-4 sm:mb-0 sm:rounded-l-lg  bg-white text-black focus:outline-none" placeholder="Enter your email address" />
            <button className=" z-30 px-8 py-3 sm:rounded-r-lg bg-primary_purple sm:text-xl text-lg font-semibold  shadow-md hover:bg-purple-800 focus:outline-none">Subscribe</button>
          </div>
        </div>
      </section>

    </>
  )
}

export default BottomSection