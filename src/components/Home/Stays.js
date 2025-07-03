import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Image from "next/image";
import Mahalaxmi from "../../assets/stays1.png"
import Juhu from "../../assets/juhu.png"
import Chembur from "../../assets/stays6.png"
import Baner from "../../assets/stays3.png"

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Stays = () => {
  const slides = [
    {
      id: 1,
      image: Chembur, // Fixed: Remove curly braces
      title: "Mahalaxmi",
      subtitle: "SouthSide",
      
    },
    {
      id: 3,
      image: Mahalaxmi, // Fixed: Remove curly braces
      title: "Santacruz",
      subtitle: "Varsity",
     
    },
    {
      id: 4, // Fixed: Changed duplicate id
      image: Baner, // Fixed: Remove curly braces
      title: "Baner",
      subtitle: "Hamlet",
      
    }
  ];

  return (
    <div className="w-full py-8 bg-[#c3caab] relative overflow-hidden">
      {/* Header */}
      <div className="pt-12 pl-6 lg:pt-12 lg:pl-12">
        <h1 className="text-white text-4xl lg:text-6xl font-semibold font-[PlayfairBold] tracking-wide">
          What’s on now
        </h1>
      </div>

      {/* Swiper Container */}
      <div className="mt-8 lg:mt-12 relative">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={10}
          slidesPerView={1}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="whats-on-swiper"
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
            1440: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="group cursor-pointer px-4">
                <div className="relative overflow-hidden h-80 lg:h-[450px]">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-all duration-500 ease-in-out group-hover:rounded-b-[50%]"
                    priority={slide.id === 1} // Add priority for first image
                  />
                  
                  {/* Static Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                    <h2 className="text-white text-3xl lg:text-5xl font-semibold font-[ReciaSerifDisplay] mb-4 leading-tight">
                      {slide.title}
                    </h2>
                    <p className="text-white text-sm lg:text-base font-medium leading-relaxed max-w-xs">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="absolute bottom-4 right-8 flex gap-4 z-10">
          <button className="custom-prev w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white border-opacity-40 bg-transparent hover:border-opacity-70 transition-all duration-300 flex items-center justify-center group">
            <IoArrowBack className="text-white text-lg lg:text-xl group-hover:scale-110 transition-transform duration-300" />
          </button>
          
          <button className="custom-next w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-white border-opacity-40 bg-transparent hover:border-opacity-70 transition-all duration-300 flex items-center justify-center group">
            <IoArrowForward className="text-white text-lg lg:text-xl group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Custom Styles for Navigation */}
      <style jsx global>{`
        .whats-on-swiper {
          padding: 0 20px 100px 20px;
        }
        
        .whats-on-swiper .swiper-slide {
          height: auto;
        }
        
        .whats-on-swiper .swiper-button-next,
        .whats-on-swiper .swiper-button-prev {
          display: none;
        }
        
        @media (min-width: 1024px) {
          .whats-on-swiper {
            padding: 0 40px 100px 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Stays;