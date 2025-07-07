import HomeBanner from '@/components/Home/HomeBanner'
import Footer from '@/components/Layout/Footer'
import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import HotelIntro from '@/components/MumbaiStays/HotelIntro'
import AboutAmenities from '@/components/PuneStays/AboutAmenities'
import LocalFavorites from '@/components/PuneStays/LocalFavorites'
import RoomTypes from '@/components/PuneStays/RoomTypes'
import React from 'react'

const PunePage = () => {
  return (
    <div>
    <NavbarTwo />

    <HotelIntro title="Hamlet By Union" location='Baner, Pune'  />
    <AboutAmenities />
    <RoomTypes />

    <FooterSection />
  
</div>
  )
}

export default PunePage