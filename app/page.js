"use client";

import Auditor from "@/components/Home/auditor";
import Discover from "@/components/Home/discover";
import Hero from "@/components/Home/hero";
import Sales from "@/components/Home/sales";
import Scan from "@/components/Home/scan";
import Search from "@/components/Home/search";
import ModalRequest from "@/components/ModalRequest";
import { useState, useEffect } from "react";
import initParallax from "@/components/lib/parallax"
import initRotateText from "@/components/lib/rotateText"
import LocomotiveScroll from "locomotive-scroll";

export default function Home() {
  const [openModalRequest, setOpenModalRequest] = useState(false);
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    initParallax();
    initRotateText();
  }, []);
  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };

  return (
    <main className="w-full" data-scroll-container>
      <Hero />
      <Discover />
      <Search handleModal={handleModal} />
      <Scan handleModal={handleModal} />
      <Sales handleModal={handleModal} />
      <Auditor />
      <ModalRequest onClose={handleModal} visible={openModalRequest} />
    </main>
  );
}
