import HomeBanner from '@/components/Home/HomeBanner'
import Footer from '@/components/Layout/Footer'
import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import AboutAmenities from '@/components/MumbaiStays/AboutAmenities'
import HotelIntro from '@/components/MumbaiStays/HotelIntro'
import LocalFavorites from '@/components/MumbaiStays/LocalFavorites'
import RoomTypes from '@/components/MumbaiStays/RoomTypes'
import React from 'react'
import img1 from "../../assets/varsity1.webp";
import img2 from "../../assets/varsity2.webp";
import img3 from "../../assets/varsity3.webp";

import VarsityBannerOne from "../../assets/varsitybanner/1.webp"
import VarsityBannerTwo from "../../assets/varsitybanner/2.webp"
import VarsityBannerThree from "../../assets/varsitybanner/3.webp"

const MumbaiPages = () => {
  const rooms = [
        {
          title: '3BHK',
          guests: 'Up to 2 Guests',
          bedroom: '1 Bedroom',
          bathroom: '1 Bathroom',
          images: [img1, img2, img3],
        },
        
      ];
      const bannerImages=[VarsityBannerOne, VarsityBannerTwo, VarsityBannerThree]
  return (
    <div>
    <NavbarTwo />
    
    <HotelIntro link="https://live.ipms247.com/booking/book-rooms-varsitybyunionliving" title="Varsity" bannerImages={bannerImages} location='Santacruz, Mumbai' desc="Varsity by Union Living is a modern residential concept crafted for students and young professionals who value flexibility, design, and a sense of belonging. Offering fully furnished, move-in-ready spaces with flexible stay options, Varsity blends the comforts of private living with the energy of a vibrant community. Thoughtfully designed rooms, curated common areas, and seamless services create an elevated living experience—whether you’re staying for a semester, a few months, or longer. At Varsity, you’re not just renting a space—you’re joining a lifestyle" />
    <AboutAmenities />
    <RoomTypes  rooms={rooms}/>
   
    <FooterSection />
  
</div>
  )
}

export default MumbaiPages