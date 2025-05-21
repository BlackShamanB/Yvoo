"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Link as ReactScrollLink } from "react-scroll";
import Link from "next/link";
import EmbedVideo from "../EmbedVideo";
import TypingEffect from "../TypingEffect";
import ModalRequest from "@/components/ModalRequest";
import LoadOnLoad from "@/components/LoadOnLoad";
function Hero() {
  const [openModalRequest, setOpenModalRequest] = useState(false);

  const elementRef = useRef(null);
  const [elementVisible, setelementVisible] = useState(false);

  const handleScroll = () => {
    if (elementRef.current) {
      const { top, bottom } = elementRef.current.getBoundingClientRect();
      if (!elementVisible) {
        setelementVisible(
          top < window.innerHeight && bottom >= 0 && !elementVisible
        );
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };

  return (
    <div className="relative w-full md:px-[20px] px-[41px] customsm:px-[50px] bg-[#414141] flex justify-center md:pt-[162px] pt-[120px] xl:pb-0">
      <div className="absolute top-0 w-full h-[100%] bg-black">
        <Image
          src={"/images/HomeBackground.webp"}
          alt="hero"
          layout="fill"
          objectFit="cover"
          loading="eager"
          className="2xl:block hidden"
        />
        <Image
          src={"/images/HomeBgMd.webp"}
          alt="hero"
          layout="fill"
          objectFit="cover"
          loading="eager"
          className="2xl:hidden md:block hidden"
        />
        <Image
          src={"/images/HomeBgXs.webp"}
          alt="hero"
          layout="fill"
          objectFit="cover"
          loading="eager"
          className="md:hidden block !h-auto"
        />
      </div>
      <Image
        src="/icons/crosses-1.svg"
        width={101}
        height={113}
        alt="triangle"
        className="absolute md:block hidden 2xl:top-[424px] md:top-[35.6%] top-[62%] 2xl:left-[1192px] md:left-[13%] left-[6%] mouse-parallax md:max-w-[101px] max-w-[63px]"
        data-scroll
        data-scroll-speed="0.2"
      />
      <div
        className="z-10 w-full 2xl:max-w-[1516px] flex flex-col"
        data-scroll
        data-scroll-speed="0.3"
      >
        <LoadOnLoad>
          <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] 3xl:w-[1516px] 2xl:w-[1116px] mx-[auto] md:pl-[0] md:pb-[236px] pb-[142px]">
            <h1
              className="relative font-inter 2xl:text-[60px] md:text-[50px] text-[30px] font-[700] 2xl:leading-[68px] md:leading-[54px] leading-[34px] max-w-[830px] md:mb-[42px] mb-[24px]"
              ref={elementRef}
            >
              <span className="text-green">Ground Truth:</span> Supplier Superintelligence{" "}
            </h1>
            <div className="md:text-[24px] text-[18px] md:leading-[30px] leading-[26px] font-[700] md:mb-[60px] mb-[24px] max-w-[746px]">
              Industry-first on-demand booking of on-site supplier evaluations -
              delivered by qualified local experts, structured and enhanced
              through AI-powered guidance and intelligent analysis.<br/>AI
              standardizes evaluations, detects patterns, verifies supplier
              data, and reveals hidden risks - turning reactive checks into
              strategic intelligence.
            </div>
            <div
              className="text-black md:text-[16px] text-[12px] md:leading-[20px] leading-[16px] font-[500] w-[max-content] md:p-[20px_64px] p-[16px_20px] bg-blue rounded-[30px] md:mb-[20px] mb-[12px] uppercase"
              onClick={handleModal}
            >
              Exclusive Opportunity for New Clients!
            </div>
            <div className="font-[400] md:text-[20px] text-[16px] md:leading-[28px] leading-[22px] md:mb-[60px] mb-[24px] max-w-[746px]">
              Benefit from a 50% introductory discount on your first YVOO supplier evaluation
            </div>
            <div className="flex items-center md:mb-[8px] mb-[10px]">
              <div className="bg-green w-[12px] h-[12px] rounded-[50%] mr-[8px]"></div>
              <div className="text-white md:text-[16px] text-[14px] md:leading-[20px] leading-[18px] font-[500]">
                Supplier audited by YVOO
              </div>
            </div>
            <div className="text-green text-[24px] leading-[30px] font-[400] ml-[20px]">
              1.471
            </div>
          </div>
        </LoadOnLoad>
      </div>
      <ModalRequest onClose={handleModal} visible={openModalRequest} />
    </div>
  );
}

export default Hero;
