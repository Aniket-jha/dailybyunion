import HomeBanner from '@/components/Home/HomeBanner'
import Footer from '@/components/Layout/Footer'
import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import AboutAmenities from '@/components/MumbaiStays/AboutAmenities'
import HotelIntro from '@/components/MumbaiStays/HotelIntro'
import LocalFavorites from '@/components/MumbaiStays/LocalFavorites'
import RoomTypes from '@/components/MumbaiStays/RoomTypes'
import React from 'react'


import img1 from "../../assets/southside1.webp";
import img2 from "../../assets/southside2.webp";
import img3 from "../../assets/southside3.webp";
import img4 from "../../assets/southside4.webp";

import VarsityBannerOne from "../../assets/southsidebanner/1.webp"
import VarsityBannerTwo from "../../assets/southsidebanner/2.webp"
import VarsityBannerThree from "../../assets/southsidebanner/3.webp"

const MumbaiPages = () => {
  const rooms = [
      {
        title: '1BHK',
        guests: 'Up to 2 Guests',
        bedroom: '1 Bedroom',
        bathroom: '1 Bathroom',
        images: [ img1],
      },
      {
        title: '1BHK Cozy',
        guests: 'Up to 2 Guests',
        bedroom: '1 Bedroom',
        bathroom: '1 Bathroom',
        images: [img2],
      },
      
      {
        title: '2.5BHK',
        guests: 'Up to 2 Guests',
        bedroom: '1 Bedroom',
        bathroom: '1 Bathroom',
        images: [img3],
      },
      
      {
        title: '3BHK',
        guests: 'Up to 2 Guests',
        bedroom: '1 Bedroom',
        bathroom: '1 Bathroom',
        images: [img4],
      },
      
      
    ];
    const bannerImages = [
      VarsityBannerOne, VarsityBannerTwo, VarsityBannerThree
    ]
  return (
    <div>
    <NavbarTwo />
    
    <HotelIntro link="https://live.ipms247.com/booking/book-rooms-southsidebyunionliving" title="Southside" location='Mahalaxmi, Mumbai'  bannerImages={bannerImages} desc="Southside by Union Living is an elevated living experience designed for modern professionals who seek both style and substance in the heart of the city. Offering fully furnished, thoughtfully designed residences with flexible leasing options, Southside combines the ease of serviced living with the warmth of a well-curated home. From minimalist interiors and functional layouts to curated communal spaces and seamless support, every detail is crafted for comfort, connection, and quiet sophistication. Whether for a season or something more permanent, Southside offers a place to live on your terms—without compromise" />
    <AboutAmenities />
    <RoomTypes rooms={rooms} />
   
    <FooterSection />
  
</div>
  )
}

export default MumbaiPages