"use client"
import HomeBanner from "@/components/Home/HomeBanner"
import MumbaiBanner from "../../assets/mumbai.webp"
import Footer from '@/components/Layout/Footer'
import NavbarTwo from '@/components/Layout/Navbar'
import LocationBanner from '@/components/Locations/LocationBanner'
import MumbaiLocations from '@/components/Locations/MumbaiLocations'
import React from 'react'
import FooterSection from "@/components/Layout/FooterSection"

const MumbaiMainPage = () => {
  return (
    <div>
    <NavbarTwo />
    <HomeBanner/>
    <LocationBanner location="Mumbai" sublocation={""} desc="No matter how much time you spend in Mumbai — whether for business or a well-deserved getaway — the city never stops inspiring. Stroll along Marine Drive as the sun sets over the Arabian Sea or explore the historic lanes of South Mumbai, home to the iconic Gateway of India and heritage architecture. Discover world-class art galleries, vibrant markets, and the buzzing street food culture that defines the city. From the luxury boutiques of Bandra to the beaches of Juhu, Mumbai blends tradition, modernity, and endless energy — making every stay with The Daily Stays an experience to remember." image={MumbaiBanner} />
    <MumbaiLocations  />
    <FooterSection />
  
</div>
  )
}

export default MumbaiMainPage