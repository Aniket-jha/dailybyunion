import React from 'react'
import './LocationBanner.css'  // Parallax CSS

const LocationBanner = ({ image, location, sublocation, desc }) => {
  return (
    <div className="relative bg-black h-auto py-12 lg:py-24 parallax-bg">
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-[#66694A] opacity-100"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 px-6 lg:px-20 text-white">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Side */}
          <div>
            <h3 className="text-[1.5rem] w-[70%] border-b-[2px] border-[#343434]  lg:text-[2.1rem] font-[GaretRegular] tracking-wider mb-[-5px]">

        {location}{sublocation}
            </h3>
            <div className="h-[2px] mb-6  "></div>

           
          </div>

          {/* Right Side */}
          <div>
            <h3 className="font-[GaretRegular] tracking-wider text-[1.2rem] lg:text-[1.3rem] mr-[120px] text-justify leading-relaxed">
           {desc}
            </h3>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LocationBanner

