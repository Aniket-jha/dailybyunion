import React from 'react'
import FullyFurnished from "../../assets/fullyfurnished.png"
import Image from 'next/image'
import Mahalaxmi from "../../assets/mahalaxmi.png"
import Juhu from "../../assets/juhu.png"
import Chembur from "../../assets/chembur.png"

const MumbaiLocations = () => {
  return (
    <div className="px-4 py-8 lg:px-16 lg:py-8 ">
        <h3 className='text-center font-[PlayfairBold] text-[1.7rem] lg:text-[2.5rem]'>Our Stays</h3>
        <div className='grid grid-cols-1 gap-4 lg:gap-12 mt-4 lg:mt-12 lg:grid-cols-3 grid-flow-row' >
            <div>
                <Image className='rounded-lg' src={Mahalaxmi} />
                <h3 className='font-[PlayfairMedium] text-[1.5rem] mt-2 lg:text-[1.8rem]'>Mahalaxmi</h3>
            </div>
            <div>
                <Image className='rounded-lg' src={Juhu} />
                <h3 className='font-[PlayfairMedium] text-[1.5rem] mt-2 lg:text-[1.8rem] '>Juhu</h3>
            </div>
            <div>
                <Image className='rounded-lg' src={Chembur} />
                <h3 className='font-[PlayfairMedium] text-[1.5rem] mt-2 lg:text-[1.8rem]'>Chembur</h3>
            </div>
        </div>
    </div>
  )
}

export default MumbaiLocations