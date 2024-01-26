"use client";

import { useState } from "react";

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

export default function Solutions() {
  const [openModalRequest, setOpenModalRequest] = useState(false);

  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };

  return (
    <main className="w-full">
      <div className="flex flex-col">
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
        <BuyerSupplier/>
      </div>
      <ModalRequest onClose={handleModal} visible={openModalRequest} />
    </main>
  );
}
