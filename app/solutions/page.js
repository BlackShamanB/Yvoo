"use client";

import { useState } from "react";

import ModalRequest from "@/components/ModalRequest";
import Experience from "@/components/Solutions/experience";
import Hero from "@/components/Solutions/hero";
import HowItWorks from "@/components/Solutions/howItWorks";
import Info from "@/components/Solutions/info";
import Order from "@/components/Solutions/order";
import Results from "@/components/Solutions/results";
import ScanPro from "@/components/Solutions/scanPro";
import SearchPro from "@/components/Solutions/searchPro";
import SimpleSteps from "@/components/Solutions/simpleSteps";
import Stats from "@/components/Solutions/stats";

export default function Solutions() {
  const [openModalRequest, setOpenModalRequest] = useState(false);

  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };

  return (
    <main className="w-full">
      <div className="flex flex-col">
        <div className="bg-[#06D7F9] px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[36px]">
          <h1 className="uppercase text-black font-machina font-[800] text-[30px] md:text-[40px] 2xl:text-[60px] leading-[30px] md:leading-[40px] 2xl:leading-[60px]">
            Solutions
          </h1>
        </div>
        <Hero />
        <Experience />
        <Results handleModal={handleModal} />
        <Stats />
        <SearchPro />
        <Info />
        <SimpleSteps handleModal={handleModal} />
        <ScanPro />
        <HowItWorks />
        <Order handleModal={handleModal} />
      </div>
      <ModalRequest onClose={handleModal} visible={openModalRequest} />
    </main>
  );
}
