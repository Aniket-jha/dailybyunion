import React from 'react'
import AboutInfoImage from "../../assets/fully_furnished2.png"
import Image from 'next/image'

const AboutInfo = () => {
  return (
    <div className='lg:px-[4rem] bg-[#f5f1eb] text-[#66694A]  grid grid-cols-1 items-center gap-12 grid-flow-row  lg:grid-cols-1  lg:py-12 py-4 px-4' >
        <div className='grid lg:grid-cols-3 gap-24 grid-cols-1 items-center justify-center '>
          <div className='flex items-center justify-end'>
            <h3 className='lg:text-[2.5rem] uppercase col-span-1 text-center text-[1.5rem] mb-2 font-[HelveticaWorldRegular] tracking-wider'>About Us</h3>
            </div>
            <Image className='w-[100%] col-span-1' src={AboutInfoImage} />
            <p className='text-[0.7rem] w-[80%] col-span-1 text-justify font-[GaretRegular] lg:text-[0.8rem]'>
            In a world where mobility is the norm and lifestyles are ever-evolving, Daily Stay offers a smarter, more flexible way to live. We provide fully furnished, ready-to-move-in apartments for both short and long-term stays, blending the comfort of home with the reliability of hospitality.
           


            </p>
        </div>
       
    </div>
  )
}

export default AboutInfo