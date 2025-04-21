"use client";

// import { useState } from "react";

import ModalRequest from "@/components/ModalRequest";
import Experience from "@/components/360_supplier_score/experience";
import Hero from "@/components/360_supplier_score/hero";
import Results from "@/components/360_supplier_score/evaluationReportBreakdown";
import SearchPro from "@/components/360_supplier_score/findSuppliers";
import Stats from "@/components/360_supplier_score/visualEvidence ";
import React, { useState, useEffect, useRef } from "react";

export default function supplier_score() {
  const [openModalRequest, setOpenModalRequest] = useState(false);
  const containerRef = useRef(null);

  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };
  useEffect(() => {
    // initParallax();
    // initRotateSentences();
    
    // import('locomotive-scroll').then((locomotiveModule) => {
    //   const LocomotiveScroll = locomotiveModule.default;
    //   new LocomotiveScroll({
    //     el: containerRef.current,
    //   });
    // });

  }, []);

  return (
    <main className="w-full" ref={containerRef} data-scroll-container>
      <div className="flex flex-col overflow-hidden">
        <Hero />
        <Experience />
        <Results handleModal={handleModal} />
        <Stats />
        <SearchPro />
      </div>
      <ModalRequest onClose={handleModal} visible={openModalRequest} />
    </main>
  );
}
