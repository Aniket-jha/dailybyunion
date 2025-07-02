"use client"

import Image from "next/image"

const Corporate = () => {
  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-16 !pr-0 bg-white">
      <div className="max-w-8xl ml-auto mr-0 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* Left Content Section */}
          <div className="space-y-6">
            <div>
              <h2 className="text-[1.2rem] font-[PlayfairBold] lg:text-[2.5rem]  text-gray-900 leading-tight mb-6">
                Corporate Stays 
              </h2>

              {/* Purple accent line */}
              <div className="w-24 h-1 bg-purple-600 mb-8"></div>
            </div>

            <div className="space-y-4">
              <p className="text-[0.8rem] font-[NeueRegular] lg:text-[1.1rem] text-gray-700 leading-relaxed">
                Whether you're packing for a day, a week, or a fortnight, Housr Corporate Stays adapts to your rhythm.
                Designed for today's busy professionals, we offer—fully serviced spaces, professional housekeeping,
                laundry on demand, complimentary personal care and shower essentials, and more.
              </p>

              <p className="font-[PlayfairBold] italic text-[1rem] text-[#75665f] lg:text-[1.5rem] uppercase">
                This is Corporate Stays, elevated!
              </p>
            </div>
          </div>

          {/* Right Images Section */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Left Column - Two smaller images */}
              <div className="flex flex-col gap-4">
                {/* Top small image */}
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <Image
                    src="/placeholder.svg?height=200&width=250"
                    alt="Modern kitchen and living area"
                    width={200}
                    height={200}
                    className="w-full h-32 sm:h-40 lg:h-48 xl:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>

                {/* Bottom small image */}
                <div className="relative overflow-hidden rounded-lg shadow-lg group">
                  <Image
                    src="/placeholder.svg?height=200&width=250"
                    alt="Bedroom with modern amenities and TV"
                    width={250}
                    height={200}
                    className="w-full h-32 sm:h-40 lg:h-48 xl:h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Column - Large image */}
              <div className="relative overflow-hidden rounded-lg shadow-lg group">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Luxury hotel bedroom with elegant curtains and comfortable bed"
                  width={300}
                  height={400}
                  className="w-full h-full min-h-[280px] sm:min-h-[340px] lg:min-h-[420px] xl:min-h-[480px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Corporate
