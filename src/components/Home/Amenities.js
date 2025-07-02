import React from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCoverflow
} from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import FullyFurnished from "../../assets/fullyfurnished.png"
import Parking from "../../assets/parking.png"
import Housekeeping from "../../assets/housekeeping.png"
import Laundry from "../../assets/laundry.png"
import Wifi from "../../assets/wifi.png"
import Breakfast from "../../assets/Breakfast.png"
import Image from "next/image";
import AmenitiesCard from "./AmenitiesCard";
const Amenities = ({homeContent}) => {
  return (
    <div className=" py-8 lg:py-16 lg:px-2 bg-[#ebebeb]">
        <h3 className="text-[1.5rem] font-[PlayfairBold]  text-[#75665f] ml-8  lg:text-[2.3rem]">Amenities</h3>
    <div className="flex  gap-12 mt-0 lg:mt-4 lg:gap-0  font-[Neue Haas Grotesk Display Pro]  rounded-xl items-start justify-center flex-wrap ">
    <Swiper
          spaceBetween={0}
          className="mt-6"
          draggable={true}
          breakpoints={{
            350: {
          width: 450,
          slidesPerView: 1.5,
        },
            450: {
          width: 450,
          slidesPerView: 1.5,
        },
        576: {
          width: 576,
          slidesPerView: 2,
        },
        780: {
          width: 780,
          slidesPerView: 3,
        },
         1200: {
          width: 1200,
          slidesPerView: 3.5,
        },
       
         1440:{
          width:1440,
          slidesPerView:4.5
        }
      }}
          autoplay={{
            delay: 2000,
            disableOnInteraction:true,
          }}
          loop={true}
          modules={[Autoplay]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
         
              <SwiperSlide >
           <AmenitiesCard image={FullyFurnished} title="Fully Furnished" description="Thoughtfully designed, move-in ready apartments equipped with modern furniture, functional workspaces, fully equipped kitchens, and all the comforts you need to feel at home from day one." />
              </SwiperSlide>
              <SwiperSlide >
           <AmenitiesCard image={Parking} title="Parking" description="Dedicated and secure parking spaces to ensure easy access and safety for your personal or company vehicles, no matter the duration of your stay." />
              </SwiperSlide>
              <SwiperSlide >
           <AmenitiesCard image={Housekeeping} title="Professional Housekeeping" description="Scheduled housekeeping services to maintain a clean, fresh, and organized living space, allowing you to focus on work while we take care of the rest." />
              </SwiperSlide>
              <SwiperSlide >
           <AmenitiesCard image={Wifi} title="High-Speed WiFi" description="Reliable, high-speed internet connectivity to support seamless remote work, video calls, and entertainment - keeping you connected around the clock." />
              </SwiperSlide>
              <SwiperSlide >
           <AmenitiesCard image={Breakfast} title="Breakfast and Dinner" description="Nutritious, freshly prepared meals served daily to ensure you have one less thing to worry about after a long day of work or travel." />
              </SwiperSlide>
              <SwiperSlide >
           <AmenitiesCard image={Laundry} title="Laundry Services" description="Convenient and efficient laundry services, including washing, ironing, and timely delivery, so you always have clean, ready-to-wear clothes without the hassle.s" />
              </SwiperSlide>
        </Swiper>
    </div>
    </div>
  );
};

export default Amenities;
