
import LeadSquaredTracker from "@/components/Layout/LeadSquareTracker";
import Logo from "../assets/mainLogo.png"
import Hotjar from "@hotjar/browser";
import { GoogleAnalytics } from '@next/third-parties/google'
import Script from "next/script";
import Home from "./Home/Home";
export const metadata = {
  title: "Daily By Union",
  description: "Experience the best coliving spaces in Mumbai, Pune and Navi Mumbai. Fully furnished PG rooms with top-notch amenities for boys, girls and couples (students and professionals).",
  keywords: ['Union Living','Union Living Mumbai','Community Living in Mumbai', 'Community Living in Pune', 'Community Living in Thane','Community Living in Navi Mumbai', "Premium Co-living",'Best Community'],
  verification: {
    google: 'd2t3dmGtRE5YMyQqUbiHFM-lWvnz9mpRbS7Wwmb8uS0',
  },
  openGraph: {
    title: 'Daily By Union',
    description: 'Experience the best coliving spaces in Mumbai, Pune and Navi Mumbai. Fully furnished PG rooms with top-notch amenities for boys, girls and couples (students and professionals).',
    url: 'https://daily.unionliving.in',
    siteName: 'Union Living',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff', // Must be an absolute URL
        width: 800,
        height: 600,
      },
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Daily By Union',
      },
    ],
  
  },
  alternates: {
    canonical: 'https://daily.unionliving.in/',
  },
 
  icons: {
    icon: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff',
    shortcut: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff',
    apple: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: 'https://firebasestorage.googleapis.com/v0/b/union-living.appspot.com/o/files%2Ffavicon.png?alt=media&token=63384a08-8830-4c2b-82b0-0355cf50bbff',
    },
  },
}
export default function Main() {


     
  
  return (
    <main className="">
       
     <GoogleAnalytics gaId="G-RZN1HJ2RWE" />
    <Home />
   
    </main>
  );
}
