'use client';

import { useState, useEffect, useRef } from 'react';
import { FiMinus, FiPlus, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import banner1 from '../../assets/stays1.png';
import banner2 from '../../assets/stays3.png';
import banner3 from '../../assets/stays4.png';

export default function HotelIntro({title, location, locationLink}) {
  const [guests, setGuests] = useState(1);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const images = [banner1, banner2, banner3];

  const incrementGuests = () => setGuests(guests + 1);
  const decrementGuests = () => setGuests(guests > 1 ? guests - 1 : 1);

  return (
    <div className="relative">

      {/* Banner Slider */}
      <div className="relative h-[300px] md:h-[650px] overflow-hidden z-0">
        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop
          className="h-full"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <Image
                src={img}
                alt="Banner"
                fill
                className="object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons at Bottom Left */}
        <div className="absolute bottom-4 left-4 flex space-x-2 z-20">
          <button ref={prevRef} className="bg-black bg-opacity-60 p-2 rounded hover:bg-opacity-80">
            <FiChevronLeft className="text-white" size={20} />
          </button>
          <button ref={nextRef} className="bg-black bg-opacity-60 p-2 rounded hover:bg-opacity-80">
            <FiChevronRight className="text-white" size={20} />
          </button>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">

        {/* Left Content */}
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-[PlayfairBold]">{title}</h1>
          <p className="text-lg text-gray-700">{location}</p>
          <button className="text-sm underline text-black">VIEW ON MAP</button>

          <h2 className="font-semibold mt-4">Hotel in NYC’s Financial District</h2>
          <p className="text-gray-700 mt-2">
            As a guest of Mint House at 70 Pine – NYC, you will live your best New York life in a historic Art Deco building 
            in the heart of Lower Manhattan. Ranging from Studios to Two Bedroom suites with up to three times the space of 
            traditional short-term rentals, a full kitchen, free WiFi, comfortable beds and spacious living areas, each space 
            is perfect for relaxing, entertaining, and remote working.
          </p>
        </div>

        {/* Right Booking Box */}
        <div className="relative md:top-[-80px] z-10">
          <div className="w-full max-w-[400px] bg-white shadow-md rounded-xl overflow-hidden border border-gray-200">
            <div className="divide-y divide-gray-200">
              
              <div className="p-6">
                <label className="block text-xs font-semibold mb-1">CHECK IN</label>
                <select className="w-full text-sm rounded">
                  <option>Select date</option>
                </select>
              </div>

              <div className="p-6">
                <label className="block text-xs font-semibold mb-1">CHECK OUT</label>
                <select className="w-full text-sm rounded">
                  <option>Select date</option>
                </select>
              </div>

              <div className="p-6 flex items-center justify-between">
                <span className="text-xs font-semibold">GUESTS</span>
                <div className="flex items-center space-x-4">
                  <button onClick={decrementGuests} className="p-1 border border-gray-300 rounded">
                    <FiMinus size={14} />
                  </button>
                  <span>{guests}</span>
                  <button onClick={incrementGuests} className="p-1 border border-gray-300 rounded">
                    <FiPlus size={14} />
                  </button>
                </div>
              </div>
            </div>

            <button className="w-full bg-[#000000] text-white py-6 text-sm tracking-wider uppercase hover:opacity-90">
              SEARCH
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
