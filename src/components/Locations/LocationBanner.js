import React from 'react'

import Image from 'next/image'

const LocationBanner = ({image, location}) => {
  return (
    <div className='lg:py-6 py-2'>
    <div className='py-2 lg:pt-16 lg:pb-6 px-4 lg:px-8  ' >
        <h3 className='text-[1.5rem] lg:text-[2.5rem]  font-[PlayfairBold] text-[#000000]'>Stays in <i> {location}</i></h3>
        <div className='h-[5px] mb-4 w-[90px] lg:w-[150px] bg-[#f47133]'></div>
       
    </div>
    <Image src={image} />
    </div>
  )
}

export default LocationBanner