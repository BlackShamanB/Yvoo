"use client";

// import { useState } from "react";

import ModalRequest from "@/components/ModalRequest";
import Experience from "@/components/Solutions/experience";
import BuyerSupplier from "@/components/Solutions/buyerSupplier";
import Hero from "@/components/Solutions/hero";
import HowItWorks from "@/components/Solutions/howItWorks";
import Info from "@/components/Solutions/info";
import Order from "@/components/Solutions/order";
import Results from "@/components/Solutions/results";
import ScanPro from "@/components/Solutions/scanPro";
import SearchPro from "@/components/Solutions/searchPro";
import SimpleSteps from "@/components/Solutions/simpleSteps";
import Stats from "@/components/Solutions/stats";
import React, { useState, useEffect, useRef } from "react";

export default function Solutions() {
  const [openModalRequest, setOpenModalRequest] = useState(false);
  const containerRef = useRef(null);

  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };
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
      <div className="flex flex-col overflow-hidden">
        <Hero />
        <Experience />
        <Results handleModal={handleModal} />
        <Stats />
        <SearchPro />
        <Info />
        <SimpleSteps handleModal={handleModal} />
        {/* <ScanPro /> */}
        {/* <HowItWorks /> */}
        <Order handleModal={handleModal} />
        <BuyerSupplier/>
      </div>
      <ModalRequest onClose={handleModal} visible={openModalRequest} />
    </main>
  );
}
