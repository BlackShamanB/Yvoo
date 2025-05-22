"use client";
import Header from "@/components/Header";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CookieBanner from "@/components/CookieBanner";
// import LocomotiveScroll from "../node_modules/locomotive-scroll";
// import LocomotiveScroll from "locomotive-scroll";
import { DataProvider } from '@/components/DataContext';
import { usePathname } from 'next/navigation'
import RunningText from "@/components/RunningText";
export const viewport = {
  themeColor: "#06D6F8",
};

// export async function generateMetadata({ params }) {
//   const siteURL = "https://yvoo.io";

//   return {
//     title: `Yvoo Technologies`,
//     description: `Ultimate Industrial B2B Supplier Platform`,
//     alternates: {
//       canonical: `${siteURL}`,
//     },
//     openGraph: {
//       title: `Yvoo Technologies`,
//       description: `Ultimate Industrial B2B Supplier Platform`,
//       url: siteURL,
//       siteName: "Yvoo Technologies",
//       locale: "en_US",
//       type: "website",
//     },
//     themeColor: "#06D6F8",
//   };
// }

// export const metadata = {
//   title: "Yvoo Technologies",
//   description: "Ultimate Industrial B2B Supplier Platform",
// };

const neueMachina = localFont({
  src: [
    {
      path: "../public/fonts/NeueMachinaLight.otf",
      weight: "300",
    },
    {
      path: "../public/fonts/NeueMachinaRegular.otf",
      weight: "400",
    },
    {
      path: "../public/fonts/NeueMachinaUltrabold.otf",
      weight: "700",
    },
  ],
  variable: "--font-neueMachina",
});

const helveticaNeue = localFont({
  src: [
    {
      path: "../public/fonts/HelveticaNeueThin.ttf",
      weight: "200",
    },
    {
      path: "../public/fonts/HelveticaNeueLight.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/HelveticaNeueRegular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/HelveticaNeueMedium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/HelveticaNeueBold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/HelveticaNeueHeavy.ttf",
      weight: "900",
    },
  ],
  variable: "--font-helveticaNeue",
});

const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../public/fonts/Inter-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/Inter-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Inter-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Inter-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Inter-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-inter",
});


export default function RootLayout({ children }) {
  const pathname = usePathname(); // ← Используйте usePathname вместо useLocation
  const isHomePage = pathname === '/';
  // useEffect(() => {
  //   // const locomotiveScroll = new LocomotiveScroll();
  //   // locomotiveScroll.start();
  //   // const scroll = new LocomotiveScroll({
  //   //   el: document.querySelector("[data-scroll-container]"),
  //   //   lerp: 1,
  //   // });
  //   // initParallax();
  // }, []);
  return (
    <html
      lang="en"
      className={`font-inter ${neueMachina.variable} ${helveticaNeue.variable} ${inter.variable} `}
      suppressHydrationWarning
    >
      <GoogleAnalytics GA_MEASUREMENT_ID="G-BSDEV77RFE" />
      <body data-scroll-container>
        <DataProvider>  
          {isHomePage && <RunningText textRef="YVOO announces EUR 6 million financing round: The round is led by Capmont, while existing investors such as Earlybird-X participating again. *"/>}
          <Header classes={isHomePage ? 'md:top-[60px] top-[42px]': ''} />
          {children}
          <CookieBanner />
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}
