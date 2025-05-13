"use client";
import Hero from "@/components/Auditors/hero";
import JobDescription from "@/components/Auditors/jobDescription";
import Why from "@/components/Auditors/why";
import React, { useEffect, useRef } from "react";

export default function ForAuditors() {
  const containerRef = useRef(null);
  useEffect(() => {
    // initParallax();
    // initRotateSentences();

    import("locomotive-scroll").then((locomotiveModule) => {
      const LocomotiveScroll = locomotiveModule.default;
      new LocomotiveScroll({
        el: containerRef.current,
      });
    });
  }, []);
  return (
    <main className="w-full md:pt-[0] pt-[58px]" ref={containerRef} data-scroll-container>
      <div className="flex flex-col">
        <Hero />
        <Why />
        <JobDescription />
      </div>
    </main>
  );
}
