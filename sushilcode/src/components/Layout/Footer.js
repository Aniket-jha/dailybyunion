"use client"
import React from 'react'
import Logo from "../../assets/mainLogo.png"
import { IoMdArrowRoundUp } from 'react-icons/io'
import { PiLinkedinLogo } from "react-icons/pi";
import { PiInstagramLogo } from "react-icons/pi";
import { PiYoutubeLogo } from "react-icons/pi";
import Link from "next/link"
import Image from 'next/image';
const Footer = () => {
  return (
    <div className='md:px-12 mx-4 lg:mx-12 my-3 rounded-lg px-4 py-12 shadow-lg bg-[#ebe3d654]' >
    <div className='md:grid grid-col-7 grid-flow-col' >
        <div className='col-span-1' >
            <Image className='w-[130px]' src={Logo} />
            <p className='font-[NeueRegular] text-[1rem] text-[#272727]' >Live Easy, Live United</p>
            <Link href='/form'> <button className="uppercase flex items-center justify-center gap-3 rounded-lg shadow-md  font-[NeueMedium] ease-in duration-300  text-[12px] md:text-[16px]  hover:shadow-none hover:bg-[#272727] tracking-wider py-[8px] px-[24px] mt-3 md:py-[12px] md:px-[24px] text-[#FFFEFC] bg-[#D64C27]" >Book Now  </button></Link>
        </div>
        <div className='col-span-5 flex lg:items-start justify-around pb-4 lg:flex-row flex-col gap-6    mt-3 md:mt-4' >
                <div>
                    <h3 className='font-[HelveticaWorldRegular] tracking-wider text-[1.5rem] text-[#272727]'>Sitemap</h3>
                    <div>
                        <Link href="/"><p> Home</p></Link>
                        <Link href="/properties"><p>City</p></Link>
                        <Link href="/community"><p> About</p></Link>
                        <Link href="/ourstory"><p> Contact</p></Link>
                     
                    </div>
                </div>
                <div>
                    <h3 className='font-[HelveticaWorldRegular] tracking-wider text-[1.5rem] text-[#272727]'>Important Links</h3>
                    <div>
                        <Link href="/onboardingpolicy"><p> Rules and Regulations</p></Link>
                        <Link href="/termsandcondition"><p> Terms and Condition</p></Link>
                        <Link href="/privacy-policy"><p> Privacy Policy</p></Link>
                    </div>
                </div>
        </div>
        <div className='col-span-1 mt-3 md:mt-6' >
            <p className='font-[NeueRegular]'>
         <strong className='font-[HelveticaWorldRegular] tracking-wider' >  Customer Service </strong> 
         <br />
       <a className='' href='mailto:csteam.unionliving@gmail.com' > thedailytays@gmail.com</a>
        <br /> 
       
            </p>
           <h3 className='font-[NeueRegular] py-2'>+91 7021654226</h3>
           
        </div>
    </div>
    <div className='md:grid grid-cols-7 mt-6  grid-flow-col'>
        <div className='col-span-1' ></div>
        <div className='col-span-5 flex items-center justify-center' >
            <h3 className='font-[NeueRegular]' >2025 Daily Stays by Union Living. All right reserved</h3>
        </div>
        <div className='col-span-1 flex items-center md:ml-[-25px] justify-center md:justify-start gap-3' >
           <a target='_blank' rel='noreferrer' href='https://www.instagram.com/union_living/?hl=en'> <PiInstagramLogo className='text-[25px]' /></a>
            
            <a target='_blank' rel='noreferrer' href='https://www.youtube.com/@unioncoliving'>  <PiYoutubeLogo className='text-[25px]' /> </a>
        </div>
    </div>
</div>
  )
}

export default Footer