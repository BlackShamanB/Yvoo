"use client";

import Auditor from "@/components/Home/auditor";
import Discover from "@/components/Home/discover";
import Hero from "@/components/Home/hero";
import Sales from "@/components/Home/sales";
import Scan from "@/components/Home/scan";
import Search from "@/components/Home/search";
import Situation from "@/components/Home/situation";
import Expensive from "@/components/Home/expensive";
import Effective from "@/components/Home/effective";
import ModalRequest from "@/components/ModalRequest";
import React, { useState, useEffect, useRef } from "react";

export default function Home() {
  const [openModalRequest, setOpenModalRequest] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    
    import('locomotive-scroll').then((locomotiveModule) => {
      const LocomotiveScroll = locomotiveModule.default;
      new LocomotiveScroll({
        el: containerRef.current,
      });
    });

  }, []);
  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };

  return (
    <main className="w-full" ref={containerRef} data-scroll-container>
      <Hero />
      <Discover />
      <Situation></Situation>
      <Expensive></Expensive>
      <Effective></Effective>
      <Search handleModal={handleModal} />
      <Scan handleModal={handleModal} />
      <Sales handleModal={handleModal} />
      <Auditor />
      <ModalRequest onClose={handleModal} visible={openModalRequest} />
    </main>
  );
}
