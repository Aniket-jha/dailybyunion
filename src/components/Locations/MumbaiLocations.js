import React from 'react';
import Image from 'next/image';
import Mahalaxmi from "../../assets/stays1.png";
import Link from 'next/link';

const MumbaiLocations = () => {
  return (
    <div className="w-full flex flex-col gap-16 px-4 lg:px-16 py-10">

      {/* First Location Block */}
      <div className="flex flex-col lg:flex-row">
        
        {/* Left Side - Property Card */}
        <div className="lg:w-1/2 w-full flex flex-col justify-Start">
          <h2 className="text-2xl lg:text-3xl font-semibold mb-6">Our Locations in Mumbai</h2>
      

          <div className="flex flex-col md:flex-row items-start bg-[#f9f9f9] hover:border-black  hover: border-[1px]  rounded-lg shadow-lg">
            
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <Image 
                src={Mahalaxmi}  // Replace with your actual image path
                alt="Mumbai Stay"
                width={500}
                height={300}
                className="rounded-l-lg w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 w-full flex items-start justify-center flex-col mt-4 py-8 md:mt-0 md:pl-6">
              <h3 className="text-xl font-semibold mb-2">Southside By Union</h3>
              <p className="text-sm mb-2">Mahalaxmi</p>
              <p className='mb-8 text-[0.8rem] text-gray-600'>Studio | One Bedroom | Two Bedroom</p>
             
              <Link href="/southside" className="bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-800 transition">DISCOVER MORE</Link>
            </div>

          </div>
        </div>

        {/* Right Side - Google Map */}
        <div className="lg:w-1/2 w-full mt-10 lg:mt-0 lg:pl-10 h-[400px] lg:h-[700px]">
          <div className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0072062977677!2d72.82714597467614!3d19.088860852160105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c92c701b74f7%3A0xf729bbd4f2c3b91c!2sBandra%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1713875156489!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Second Location Block - DUPLICATE */}
      <div className="flex flex-col lg:flex-row">
        
        {/* Left Side - Property Card */}
        <div className="lg:w-1/2 w-full flex flex-col justify-start">
         

        <div className="flex flex-col md:flex-row items-start bg-[#f9f9f9] hover:border-black  hover: border-[1px]  rounded-lg shadow-lg">
            
            {/* Image */}
            <div className="md:w-1/2 w-full">
              <Image 
                src={Mahalaxmi}  // Replace with your actual image path
                alt="Mumbai Stay"
                width={500}
                height={300}
                className="rounded-l-lg w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="md:w-1/2 w-full flex items-start justify-center flex-col mt-4 py-8 md:mt-0 md:pl-6">
              <h3 className="text-xl font-semibold mb-2">Varsity By Union</h3>
              <p className="text-sm mb-2">Santracruz</p>
              <p className='mb-8 text-[0.8rem] text-gray-600'>Studio | One Bedroom | Two Bedroom</p>
             
              <Link href="/varsity" className="bg-black text-white px-4 py-2 text-sm rounded hover:bg-gray-800 transition">DISCOVER MORE</Link>
            </div>

          </div>
        </div>

        {/* Right Side - Google Map */}
        <div className="lg:w-1/2 w-full mt-10 lg:mt-0 lg:pl-10 h-[400px] lg:h-[700px]">
          <div className="w-full h-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.0072062977677!2d72.82714597467614!3d19.088860852160105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c92c701b74f7%3A0xf729bbd4f2c3b91c!2sBandra%20West%2C%20Mumbai!5e0!3m2!1sen!2sin!4v1713875156489!5m2!1sen!2sin"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>
        </div>
      </div>

    </div>

    
  );
};

export default MumbaiLocations;
