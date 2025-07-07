'use client';

import React from 'react';

export default function AboutAmenities() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16">

      {/* About the Location */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
        <h2 className="text-2xl md:text-3xl font-[PlayfairBold] mb-4">About the Location</h2>
        <div className=" text-gray-700">
          <p>
            There is no better backdrop for your New York stories than the 1932-built, 67-story Art Deco skyscraper, 70 Pine, 
            which, at times, has been the tallest building in Lower Manhattan. Staying just a stone’s throw from the New York 
            Stock Exchange and Wall Street, and an easy walk to the Seaport, Tribeca, Chinatown and the Two Bridges Historic 
            District, you will be at the intersection of
          </p>
          <div /> {/* Empty third column to visually match your screenshot */}
          
        </div>

        <div className=" text-gray-700">
          <p>
            Manhattan’s past, present and future. Take your pick of nearby flagship museums: from the edgy New Museum on the Bowery, and family-friendly Tenement Museum, both a scenic 30-minute walk away, to the very nearby National September 11th Memorial and Museum, which will imbue your stay in this neighborhood with unforgettable poignance.
          </p>
          <div /> {/* Empty third column to visually match your screenshot */}
          
        </div>
      </div>

      {/* Standard Amenities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-gray-50 py-8 px-4 md:px-8 rounded-md">
        <h3 className="text-xl md:text-2xl font-[PlayfairBold] mb-6">Previlages</h3>
        <div className="  text-gray-700">
          <ul className="space-y-2">
            <li>Contactless Check-In</li>
            <li>24/7 Customer Support</li>
            <li>Professionally Cleaned</li>
          </ul>
          
        </div>
        <div className="  text-gray-700">
          <ul className="space-y-2">
            <li>Free WiFi</li>
            <li>24-Hour Security</li>
            <li>Non-Smoking Rooms</li>
          </ul>
        </div>
      </div>

      {/* Special Amenities */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-green-50 py-8 px-4 md:px-8 rounded-md">
        <h3 className="text-xl md:text-2xl font-[PlayfairBold] mb-6">Neighbourhood</h3>
        <div className=" text-gray-700">

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">24/7 Onsite Concierge</h4>
            </div>
            <div>
              <h4 className="font-semibold">Housekeeping Services</h4>
              <p className="text-sm">Additional cleaning available upon request.</p>
            </div>
            <div>
              <h4 className="font-semibold">Full Kitchen/Kitchenette</h4>
              <p className="text-sm">
                Fully-equipped with cookware, glassware, dishware and utensils.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Laundry & Dry Cleaning</h4>
            </div>
          </div>
          <div />
           {/* Empty column for spacing */}
        </div>
        <div className=" text-gray-700">

          <div className="space-y-4">
            <div>
              <h4 className="font-semibold">Stock Your Stay</h4>
              <p className="text-sm">
                Grocery pre-stocking service that allows guests to seamlessly pre-order groceries 
                to their Mint House room ahead of arrival.
              </p>
            </div>
            <div>
              <h4 className="font-semibold">Shop Your Stay</h4>
              <p className="text-sm">
                We’ve transformed our rooms into native retail environments, so guests can shop carefully 
                curated amenities, goods and decor straight from their phone, and ship directly home.
              </p>
              <a href="#" className="text-xs underline mt-1 inline-block">LEARN MORE</a>
            </div>
          </div>
          <div />

          
           {/* Empty column for spacing */}
        </div>
      </div>
      
    </div>
  );
}
