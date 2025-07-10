// components/BookingForm.jsx
"use client";
import Script from 'next/script';

export default function BookingForm() {
  return (
    <div>
      <form>{/* ... */}</form>

      <Script 
        src="https://live.ipms247.com/themes/reservation/js/bookingbtn/jquery-a.l.d.js" 
        strategy="afterInteractive" 
      />
      <Script 
        src="https://live.ipms247.com/themes/reservation/js/bookingbtn/jquery-ui.js" 
        strategy="afterInteractive" 
      />
      <Script 
        src="https://live.ipms247.com/themes/reservation/js/bookingbtn/common.js" 
        strategy="afterInteractive" 
      />
      <Script 
        src="https://live.ipms247.com/themes/reservation/js/bookingbtn/resui_resbookingbox.js" 
        strategy="afterInteractive" 
        onLoad={() => {
          window.jQuery("#bb_resBookingBox").bb_resBookingBox({/* config */});
        }}
      />
    </div>
  );
}