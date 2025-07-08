"use client"
import React from 'react'
import LocationBanner from '@/components/Locations/LocationBanner'
import PuneLocations from '@/components/Locations/PuneLocation'
import PuneBanner from "../../assets/pune.webp"
import NavbarTwo from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'
import HomeBanner from '@/components/Home/HomeBanner'
import FooterSection from '@/components/Layout/FooterSection'
import BookingFloatingSearchBar from '@/components/Home/BookingFloatingSearchBar'

const PuneMainPage = () => {
  return (
    <div>
    <NavbarTwo />
    <BookingFloatingSearchBar />
  <HomeBanner />
  <LocationBanner location="Pune" sublocation={" - Maharashtra "} desc="Pune — where tradition meets innovation — is a thriving city that blends rich history with modern living. From historic forts and cultural landmarks to vibrant cafés and IT hubs, Pune offers something for everyone. Whether you're visiting for work, education, or a relaxed getaway, The Daily Stays ensures your experience is effortless with comfortable, stylish, and conveniently located properties across the city." image={PuneBanner} />
  <PuneLocations />
    <FooterSection/>
   
</div>
  )
}

export default PuneMainPage