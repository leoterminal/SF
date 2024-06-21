import Image from "next/image"

const ServicesSection = () => {
  return (
    <>
     <section className="bg-white min-h-[90vh] w-full relative">
        
      <div className='flex justify-center items-center'>
       
        <div></div>
      </div>

        <Image
          src=" https://res.cloudinary.com/dzwnf9mjr/image/upload/v1718713898/image_44_bvaaps.png"
          alt="bg"
          width={100}
          height={100}
          className="absolute h-full top-0 left-0 w-full"
        />
      </section>
    </>
  )
}

export default ServicesSection