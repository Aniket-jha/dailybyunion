import HomeBanner from '@/components/Home/HomeBanner'
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import AboutAmenities from '@/components/MumbaiStays/AboutAmenities'
import HotelIntro from '@/components/MumbaiStays/HotelIntro'
import LocalFavorites from '@/components/MumbaiStays/LocalFavorites'
import RoomTypes from '@/components/MumbaiStays/RoomTypes'
import React from 'react'

const MumbaiPage = () => {
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

export default MumbaiPage