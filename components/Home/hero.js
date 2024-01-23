"use client";

import Image from "next/image";
import React, { useState } from "react";
import { Link as ReactScrollLink } from "react-scroll";
import Link from "next/link";
import EmbedVideo from "../EmbedVideo";

function Hero() {
  const [openModalRequest, setOpenModalRequest] = useState(false);

  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };

  return (
    <div className="relative w-full px-[20px] customsm:px-[50px] md:h-[820px] h-[547px] bg-[#414141] flex justify-center pt-[38px] md:pt-[68px] xl:pt-[188px] xl:pb-0 md:max-h-[1008px] max-h-[547px]" >
      <div className="absolute top-0 w-full customsm:px-[50px] h-[547px] md:h-[820px]"
          >
        <Image
          src={"/images/homeBg.webp"}
          alt="hero"
          layout="fill"
          objectFit="cover"
          loading="eager"
          priority
        />
      </div>

      <div className="z-10 w-full 2xl:max-w-[1516px] flex flex-col" priority data-scroll data-scroll-speed="0.1">
        <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] 3xl:w-[1516px] 2xl:w-[1116px] mx-[auto]">
          <h1 className="uppercase font-machina 2xl:text-[50px] md:text-[40px] text-[30px] font-[800] 2xl:leading-[54px] md:leading-[44px] leading-[34px] max-w-[880px] sentence words">
            <div className="word">Welcome</div> <div className="word">to</div> <div className="word">YVOO</div> <div className="word">the</div> <div className="word">Sourcer</div> <b className="text-primary word">Pro+</b> <div className="word">Your</div>
            <div className="word">Ultimate</div> <div className="word">Industrial</div> <div className="word">B2B</div> <div className="word">Supplier</div> <div className="word">Platform</div>
          </h1>
        </div>
        <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] 3xl:w-[1516px] 2xl:w-[1116px] md:w-[598px] mx-[auto] 2xl:mt-[38px] mt-[40px] flex items-center gap-[32px]">
          {/* <div
            className="flex-center bg-primary rounded-full p-[17px] cursor-pointer hover:scale-[1.02]"
            onClick={handleModal}
          > */}
            <Image
              src="/icons/icon-play-btn.svg"
              width={68}
              height={68}
              alt="play"
              className="cursor-pointer hover:scale-[1.04] md:max-w-[68px] max-w-[48px] cursor-pointer hover:scale-[1.02]"
              onClick={handleModal}
            />
          {/* </div> */}
          <h2 className="font-[400] text-[18px] leading-[18px]">
            Have a sneak peek at what we do
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg2:grid-cols-4 gap-[20px] 2lg:gap-[36px] mt-[60px] md:mt-auto">
          <ReactScrollLink
            className="relative lg2:top-[40px] md:top-[260px] top-[40px]"
            activeClass="active"
            to="search"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="h-full 2xl:max-h-[179px] md:max-h-[200px] max-h-[172px] 2xl:h-[179px] md:h-[200px] h-[172px] flex-1 3xl:px-[40px] px-[30px] 3xl:pt-[40px] pt-[30px] pb-[18px] bg-[#53D3AA] basis-[300px] hover:scale-[1.02] cursor-pointer">
              <h2 className="mb-[4px] uppercase font-machina text-[24px] leading-6 font-[800] max-w-[172px]">
                YVOO Search<b className="text-black">Pro+</b>
              </h2>
              <p className="text-black font-[700] text-[16px]  leading-5 max-w-[228px]">
                Discover Quality Suppliers Effortlessly
              </p>
            </div>
          </ReactScrollLink>
          <ReactScrollLink
            className="relative lg2:top-[40px] md:top-[260px] top-[40px]"
            activeClass="active"
            to="scan"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="h-full 2xl:max-h-[179px] md:max-h-[200px] max-h-[172px] 2xl:h-[179px] md:h-[200px] h-[172px] flex-1 3xl:px-[40px] px-[30px] 3xl:pt-[40px] pt-[30px] pb-[18px] bg-[#06D7F9] basis-[300px] hover:scale-[1.02] cursor-pointer">
              <h2 className="mb-[4px] uppercase font-machina text-[24px] leading-6 font-[800] max-w-[172px]">
                YVOO Scan<b className="text-black">Pro+</b>
              </h2>
              <p className="text-black font-[700] text-[16px] leading-5 max-w-[228px]">
                Unleash Supplier Readiness for Unprecedented Audit Success
              </p>
            </div>
          </ReactScrollLink>
          <ReactScrollLink
            className="relative lg2:top-[40px] md:top-[260px] top-[40px]"
            activeClass="active"
            to="sales"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="h-full 2xl:max-h-[179px] md:max-h-[200px] max-h-[172px] 2xl:h-[179px] md:h-[200px] h-[172px] flex-1 3xl:px-[40px] px-[30px] 3xl:pt-[40px] pt-[30px] pb-[18px] bg-[#FFFFFF] basis-[300px] hover:scale-[1.02] cursor-pointer">
              <h2 className="mb-[4px] uppercase font-machina text-[24px] leading-6 font-[800] max-w-[172px] text-[#06D7F9]">
                YVOO Sales<b className="text-black">Pro+</b>
              </h2>
              <p className="text-black font-[700] text-[16px] leading-5 max-w-[228px]">
                Unlock Your Supplier Potential and Maximize Your Business Growth
              </p>
            </div>
          </ReactScrollLink>
          <Link href={"/auditors"}
            className="relative lg2:top-[40px] md:top-[260px] top-[40px]">
            <div
              className="h-full min-h-[163px] 2xl:max-h-[179px] md:max-h-[200px] max-h-[172px] 2xl:h-[179px] md:h-[200px] h-[172px] flex-1 3xl:px-[40px] px-[30px] 3xl:pt-[40px] pt-[30px] pb-[18px] bg-[#131D2A] basis-[300px] hover:scale-[1.02] cursor-pointer"
              onClick={() => {
                window.open("https://scanpro.yvoo.io/register", "_blank");
              }}
            >
              <h2 className="text-primary uppercase font-machina text-[24px] leading-6 font-[800]">
                Join the Team of YVOO auditors
              </h2>
            </div>
          </Link>
        </div>
      </div>
      <EmbedVideo onClose={handleModal} visible={openModalRequest} />
    </div>
  );
}

export default Hero;
