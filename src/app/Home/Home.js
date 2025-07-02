"use client"
import About from '@/components/Home/About'
import Amenities from '@/components/Home/Amenities'
import ContactUs from '@/components/Home/ContactUs'
import Corporate from '@/components/Home/Corporate'
import CorporateStays from '@/components/Home/CorporateStays'
import FAQSection from '@/components/Home/FaqSection'
import FeaturesSection from '@/components/Home/Feature'
import HomeBanner from '@/components/Home/HomeBanner'
import Partner from '@/components/Home/Partner'
import Stays from '@/components/Home/Stays'
import TestimonialsSection from '@/components/Home/Testimonial'
import Whyus from '@/components/Home/Whyus'
import Footer from '@/components/Layout/Footer'
import FooterSection from '@/components/Layout/FooterSection'
import NavbarTwo from '@/components/Layout/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div>
        <NavbarTwo />
        <div className=''>
        <HomeBanner />
        <FeaturesSection /> 
        <About />
        <Corporate/>
        <Stays />
        {/* <CorporateStays /> */}
        <Amenities />
        <TestimonialsSection />
        <FAQSection />
        {/* <Whyus /> */}
        {/* <ContactUs /> */}
        {/* <Partner /> */}
        <FooterSection />
        {/* <Footer /> */}
        </div>
    </div>
  )
}

export default Home