"use client";
import Support from "@/components/Supplier/support";
import Hero from "@/components/Supplier/hero";
import Potential from "@/components/Supplier/potential";
import Security from "@/components/Supplier/security";
import Join from "@/components/Supplier/join";
import React, { useState, useEffect, useRef } from "react";

export default function Supplier() {
  const [openModalRequest, setOpenModalRequest] = useState(false);
  const containerRef = useRef(null);
  
  useEffect(() => {
    // initParallax();
    // initRotateSentences();
    
    import('locomotive-scroll').then((locomotiveModule) => {
      const LocomotiveScroll = locomotiveModule.default;
      new LocomotiveScroll({
        el: containerRef.current,
      });
    });

  }, []);
  return (
    <main className="w-full" ref={containerRef} data-scroll-container>
      <div className="flex flex-col bg-[#131D2A]">
        <Hero />
        <Potential />
        <Security />
        <Support />
        <Join />
      </div>
    </main>
  );
}
