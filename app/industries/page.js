"use client";
import Image from "next/image";
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
        <div className="bg-no-repeat md:bg-right-bottom bg-left bg-contain 3xl:bg-industriesBg3xl md:bg-industriesBg2xl bg-industriesBg px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] pt-[156px] pb-[560px]">      <Image
        src="/icons/greenTriangle-1.png"
        width={116}
        height={139}
        alt="triangle"
        className="absolute 2xl:top-[269px] md:top-[22%] top-[34%] 3xl:left-[15%] 2xl:left-[7%] md:left-[16%] left-[11%] mouse-parallax 2xl:max-w-[116px] max-w-[63px] z-[200]"
        priority
        data-scroll data-scroll-speed="0.3"
      />
          <h1 className="uppercase font-machina font-[800] text-[40px] md:text-[50px] 2xl:text-[60px] leading-[34px] md:leading-[54px] 2xl:leading-[64px]">
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
