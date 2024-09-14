"use client";
import GeneralInfo from "@/components/About/generalInfo";
import Hero from "@/components/About/hero";
import Team from "@/components/About/team";
import React, { useEffect, useRef } from "react";
// import TeamMembers from "@/components/About/teamMembers";

export default function Solutions() {
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
    <main className="w-full md:pt-[86px] pt-[58px]" ref={containerRef} data-scroll-container>
      <div className="flex flex-col">
        <Hero />
        <GeneralInfo />
        <Team />
        {/* <TeamMembers /> */}
      </div>
    </main>
  );
}