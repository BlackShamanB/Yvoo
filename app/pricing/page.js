"use client";
import Hero from "@/components/Pricing/hero";
import JobDescription from "@/components/Pricing/jobDescription";
import Pricing from "@/components/Pricing/priceing";
import Services from "@/components/Pricing/services";
import React, { useEffect, useRef } from "react";

export default function ForPricing() {
  const containerRef = useRef(null);
  useEffect(() => {
    // initParallax();
    // initRotateSentences();

    // import("locomotive-scroll").then((locomotiveModule) => {
    //   const LocomotiveScroll = locomotiveModule.default;
    //   new LocomotiveScroll({
    //     el: containerRef.current,
    //   });
    // });
  }, []);
  return (
    <main className="w-full" ref={containerRef} data-scroll-container>
      <div className="flex flex-col">
        <Hero />
        <Pricing />
        <Services />
        <JobDescription />
      </div>
    </main>
  );
}
