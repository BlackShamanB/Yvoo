"use client";
import About from "@/components/Consulting/about";
import Contact from "@/components/Consulting/contact";
import ExceptionalValue from "@/components/Consulting/exceptionalValue";
import Hero from "@/components/Consulting/hero";
import Offerings from "@/components/Consulting/offerings";
import OfferingsList from "@/components/Consulting/offeringsList";
import React, { useState, useEffect, useRef } from "react";

export default function Consulting() {
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
    <main className="w-full md:pt-[86px] pt-[58px]" ref={containerRef} data-scroll-container>
      <div className="flex flex-col">
        <Hero />
        <About />
        <Offerings />
        <OfferingsList />
        <ExceptionalValue />
        <Contact />
      </div>
    </main>
  );
}
