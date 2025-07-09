import HomeBanner from '@/components/Home/HomeBanner'
import Footer from '@/components/Layout/Footer'
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
    {/* <HomeBanner/> */}
    <HotelIntro />
    <AboutAmenities />
    <RoomTypes />
    <LocalFavorites  />
    <Footer />
  
</div>
  )
}

export default PunePage