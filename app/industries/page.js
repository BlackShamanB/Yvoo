"use client";

import { useState } from "react";

import BuyerSupplier from "@/components/Industries/buyerSupplier";
import OtherIndustries from "@/components/Industries/otherIndustries";
import Sales from "@/components/Industries/sales";
import Scan from "@/components/Industries/scan";
import Search from "@/components/Industries/search";
import ModalRequest from "@/components/ModalRequest";

export default function Home() {
  const [openModalRequest, setOpenModalRequest] = useState(false);

  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };

  return (
    <main className="w-full">
      <div className="flex flex-col">
        <div className="bg-[#414141] px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[36px]">
          <h1 className="uppercase font-machina font-[800] text-[30px] md:text-[40px] 2xl:text-[60px] leading-[30px] md:leading-[40px] 2xl:leading-[60px]">
            Industries
          </h1>
        </div>
        <Search handleModal={handleModal} />
        <Scan handleModal={handleModal} />
        <Sales handleModal={handleModal} />
        <OtherIndustries />
        <BuyerSupplier handleModal={handleModal} />
      </div>
      <ModalRequest onClose={handleModal} visible={openModalRequest} />
    </main>
  );
}
