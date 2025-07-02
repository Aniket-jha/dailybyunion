"use client"
import MumbaiBanner from "../../assets/mumbai.webp"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import LocationBanner from '@/components/Locations/LocationBanner'
import MumbaiLocations from '@/components/Locations/MumbaiLocations'
import React from 'react'

const MumbaiMainPage = () => {
  return (
    <div>
    <NavbarTwo />
    <div className='mt-[100px] lg:mt-[120px]'>
    <LocationBanner location="Mumbai" image={MumbaiBanner} />
    <MumbaiLocations  />
    <Footer />
    </div>
</div>
  )
}

export default MumbaiMainPage