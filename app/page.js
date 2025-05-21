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
import RunningText from "@/components/RunningText";
export default function Home() {
  const [openModalRequest, setOpenModalRequest] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://interfaces.zapier.com/assets/web-components/zapier-interfaces/zapier-interfaces.esm.js';
    script.async = true;
    script.type = 'module';
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    
    // import('locomotive-scroll').then((locomotiveModule) => {
    //   const LocomotiveScroll = locomotiveModule.default;
    //   new LocomotiveScroll({
    //     el: containerRef.current,
    //   });
    // });

  }, []);
  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };

  return (
    <main className="relative w-full" ref={containerRef}>
      <RunningText textRef="YVOO announces EUR 6 million financing round: The round is led by Capmont, while existing investors such as Earlybird-X participating again. *"/>
      <Hero handleModal={handleModal}/>
      {/* <Discover /> */}
      <Situation></Situation>
      <Search handleModal={handleModal} />
      <Effective></Effective>
      <Scan handleModal={handleModal} />
      <Expensive></Expensive>
      <Sales/>
      <Auditor />
      {/* <ModalRequest onClose={handleModal} visible={openModalRequest} /> */}
      <div
        dangerouslySetInnerHTML={{
          __html: `<zapier-interfaces-chatbot-embed is-popup='true' chatbot-id='cm71oln5c0015bl9p6hf3z30g'></zapier-interfaces-chatbot-embed>`,
        }}
      />
    </main>
  );
}
