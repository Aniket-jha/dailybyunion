"use client"
import React from 'react'
import LocationBanner from '@/components/Locations/LocationBanner'
import PuneLocations from '@/components/Locations/PuneLocation'
import PuneBanner from "../../assets/pune.webp"
import NavbarTwo from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'

const PuneMainPage = () => {
  return (
    <div>
    <NavbarTwo />
    <div className='mt-[100px] lg:mt-[120px]'>
    <LocationBanner location="Pune" image={PuneBanner} />
  <PuneLocations />
    <Footer  />
    </div>
</div>
  )
}

export default PuneMainPage