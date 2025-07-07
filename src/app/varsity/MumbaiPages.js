import HomeBanner from '@/components/Home/HomeBanner'
import Footer from '@/components/Layout/Footer'
import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import AboutAmenities from '@/components/MumbaiStays/AboutAmenities'
import HotelIntro from '@/components/MumbaiStays/HotelIntro'
import LocalFavorites from '@/components/MumbaiStays/LocalFavorites'
import RoomTypes from '@/components/MumbaiStays/RoomTypes'
import React from 'react'

const MumbaiPages = () => {
  return (
    <div>
    <NavbarTwo />
    
    <HotelIntro title="Varsity By Union" location='Santacruz, Mumbai' />
    <AboutAmenities />
    <RoomTypes />
   
    <FooterSection />
  
</div>
  )
}

export default MumbaiPages