'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import img1 from "../../assets/stays1.png";
import img2 from "../../assets/stays3.png";

const rooms = [
  {
    title: 'Classic Queen',
    guests: 'Up to 2 Guests',
    bedroom: '1 Bedroom',
    bathroom: '1 Bathroom',
    images: [img1, img2],
  },
  {
    title: 'Studio Apartment',
    guests: 'Up to 2 Guests',
    bedroom: '1 Bedroom',
    bathroom: '1 Bathroom',
    images: [img1, img2],
  },
  {
    title: 'Studio Plus Apartment',
    guests: 'Up to 2 Guests',
    bedroom: '1 Bedroom',
    bathroom: '1 Bathroom',
    images: [img1, img2],
  },
  {
    title: 'Studio Deluxe Apartment',
    guests: 'Up to 4 Guests',
    bedroom: '1 Bedroom',
    bathroom: '1 Bathroom',
    images: [img1, img2],
  },
];

export default function RoomTypes() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-[PlayfairBold] mb-6">Room Types</h2>
      <h3 className="text-xl font-[PlayfairMedium] mb-8">Studio Apartments</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {rooms.map((room, idx) => {
          const prevRef = useRef(null);
          const nextRef = useRef(null);

          return (
            <div
              key={idx}
              className="bg-white rounded-lg overflow-hidden shadow-md flex flex-col md:flex-row"
            >
              {/* Image Slider */}
              <div className="relative w-full md:w-1/2">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  autoplay={{
                    delay: 3000,  // 3 seconds delay
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }}
                  loop
                  speed={800}  // Transition speed in ms
                  onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                  }}
                >
                  {room.images.map((src, index) => (
                    <SwiperSlide key={index}>
                      <Image
                        src={src}
                        alt={room.title}
                        width={400}
                        height={300}
                        className="object-cover w-full h-full"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Custom Navigation */}
                <div className="absolute inset-0 flex items-center justify-between px-2">
                  <button
                    ref={prevRef}
                    className="bg-black/50 text-white p-2 rounded hover:bg-black"
                  >
                    &lt;
                  </button>
                  <button
                    ref={nextRef}
                    className="bg-black/50 text-white p-2 rounded hover:bg-black"
                  >
                    &gt;
                  </button>
                </div>
              </div>

              {/* Details */}
              <div className="p-6 flex flex-col justify-center md:w-1/2">
                <h4 className="text-xl font-[PlayfairMedium] mb-2">{room.title}</h4>
                <p className="mb-1">{room.guests}</p>
                <p className="mb-1">{room.bedroom}</p>
                <p className="mb-4">{room.bathroom}</p>
                <button className="bg-[#002d1d] text-white py-2 px-4 rounded hover:opacity-90 text-sm tracking-wider uppercase">
                  Check Availability
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
