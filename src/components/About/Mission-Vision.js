import React from 'react'

const MissionVision = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:py-12 py-4 px-4 lg:px-24 grid-flow-row' >
        <div className='bg-gray-200 px-8 py-8 rounded-lg'>
            <h3 className='lg:text-[2.5rem] font-[HelveticaWorldRegular] tracking-wider'>Mission</h3>
            <p className='font-[GaretRegular]'>To offer fully serviced, thoughtfully designed homes that blend the ease of a hotel with the comfort of home, creating calm, intuitive spaces for modern travelers and residents alike.</p>
        </div>
        <div className='bg-gray-200 px-8 py-8 rounded-lg'>
        <h3 className='lg:text-[2.5rem] font-[HelveticaWorldRegular] tracking-wider'>Vision        </h3>
        <p className='font-[GaretRegular]'>To make flexible, beautifully simple living accessible across cities and seasons, allowing people to feel at home wherever life takes them, for as long as they need.</p>
        </div>
    </div>
  )
}

export default MissionVision