"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { Link as ReactScrollLink } from "react-scroll";
import Link from "next/link";
import EmbedVideo from "../EmbedVideo";
import TypingEffect from "../TypingEffect";
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
    <div className="relative w-full px-[20px] customsm:px-[50px] md:h-[820px] h-[547px] bg-[#414141] flex justify-center 3xl:pt-[163px] 2xl:pt-[162px] md:pt-[162px] pt-[80px] xl:pb-0 md:max-h-[1008px] max-h-[547px]">
      <div className="absolute top-0 w-full customsm:px-[50px] h-[547px] md:h-[1826px] bg-black">
        <Image
          src={"/images/HomeBg.webp"}
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
        className="absolute 2xl:top-[33%] md:top-[35.6%] top-[62%] 2xl:left-[68%] md:left-[13%] left-[6%] mouse-parallax md:max-w-[101px] max-w-[63px] rotate-[180deg]"
        
        data-scroll data-scroll-speed="0.2"
      />

      <Image
        src="/icons/greenTriangle-4.svg"
        width={159}
        height={190}
        alt="triangle"
        className="absolute 2xl:block hidden 2xl:top-[321px] md:top-[22%] top-[34%] 3xl:left-[50.5%] 2xl:left-[53%] md:left-[16%] left-[11%] mouse-parallax 2xl:max-w-[159px] max-w-[63px]"
        
        data-scroll data-scroll-speed="0.3"
      />
      <div
        className="z-10 w-full 2xl:max-w-[1516px] flex flex-col md:px-[0] px-"
        data-scroll
        data-scroll-speed="0.3"
      >
        <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] 3xl:w-[1516px] 2xl:w-[1116px] mx-[auto] md:pl-[0] pl-[20px] md:pr-[0] pr-[20px]">
          <h1
            className="relative uppercase font-machina 2xl:text-[60px] md:text-[50px] text-[30px] font-[800] 2xl:leading-[64px] md:leading-[54px] leading-[34px] max-w-[830px]"
            ref={elementRef}
            style={{
              visibility: elementVisible ? "visible" : "hidden",
              top: elementVisible ? "0" : "50px",
              opacity: elementVisible ? "1" : "0",
              transition: "linear 0.5s",
            }}
          >
            The Most Advanced Supplier On-Site Audit Solution
          </h1>
        </div>
        {/* <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] 3xl:w-[1516px] 2xl:w-[1116px] md:w-[598px] md:mx-[auto] mx-[22px] 2xl:mt-[71px] md:mt-[40px] mt-[30px] flex items-center md:gap-[33px] gap-[15px]">
          <Image
            src="/icons/icon-play-btn.svg"
            width={68}
            height={68}
            alt="play"
            className="cursor-pointer hover:scale-[1.04] md:max-w-[68px] max-w-[48px] cursor-pointer hover:scale-[1.02]"
            onClick={handleModal}
          />
          <h2 className="font-[400] md:text-[18px] text-[16px] md:leading-[22px] leading-[20px]">
            Have a sneak peek<br></br>at what we do
          </h2>
        </div> */}
        <div className="grid sm:grid-cols-2 lg2:grid-cols-4 2xl:h-[200px] 2xl:gap-[40px] gap-[20px] 2xl:mt-auto 2xl:mt-[-58px] md:mt-[22px] mt-[140px] 2xl:px-[0] md:px-[35px] px-[20px] font-inter">
          <ReactScrollLink
            className="relative 3xl:top-[64px] 2xl:top-[61px] md:top-[260px] top-[40px]"
            activeClass="active"
            to="scan"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="2xl:max-h-[179px] md:max-h-[200px] max-h-[172px] 2xl:h-[179px] md:h-[200px] h-[172px] flex-1 3xl:px-[30px] px-[30px] 3xl:pt-[30px] pt-[30px] pb-[18px] border-t-[5px] border-mint basis-[300px] cursor-pointer hoverLink">
              <h2 className="mb-[4px] uppercase font-machina md:text-[24px] text-[20px] md:leading-[26px] leading-[24px] font-[800] max-w-[172px]">
                YVOO Scan<b className="text-mint">Pro+</b>
              </h2>
              <p className="text-[#E5E5E5] font-[700] md:text-[17px] text-[16px] max-w-[240px] md:leading-[21px] leading-[20px]">
                Unleash Supplier Readiness for Unprecedented Audit Success
              </p>
            </div>
          </ReactScrollLink>
          <ReactScrollLink
            className="relative 3xl:top-[64px] 2xl:top-[61px] md:top-[260px] top-[40px]"
            activeClass="active"
            to="search"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="2xl:max-h-[179px] md:max-h-[200px] max-h-[172px] 2xl:h-[179px] md:h-[200px] h-[172px] flex-1 3xl:px-[30px] px-[30px] 3xl:pt-[30px] pt-[30px] pb-[18px] border-t-[5px] border-[#06D7F9] basis-[300px] cursor-pointer hoverLink">
              <h2 className="mb-[4px] uppercase font-machina md:text-[24px] text-[20px] md:leading-[26px] leading-[24px] font-[800] max-w-[172px]">
                YVOO Search<b className="text-blue">Pro+</b>
              </h2>
              <p className="text-[#E5E5E5] font-[700] md:text-[17px] text-[16px] max-w-[240px] md:leading-[21px] leading-[20px]">
                Database of qualified suppliers
              </p>
            </div>
          </ReactScrollLink>
          <ReactScrollLink
            className="relative 3xl:top-[64px] 2xl:top-[61px] md:top-[260px] top-[40px]"
            activeClass="active"
            to="sales"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="2xl:max-h-[179px] md:max-h-[200px] max-h-[172px] 2xl:h-[179px] md:h-[200px] h-[172px] flex-1 3xl:px-[30px] px-[30px] 3xl:pt-[30px] pt-[30px] pb-[18px] basis-[300px] border-t-[5px] border-[#FFFFFF] cursor-pointer hoverLink">
              <h2 className="mb-[4px] uppercase font-machina md:text-[24px] text-[20px] md:leading-[26px] leading-[24px] font-[800] max-w-[172px] text-[#06D7F9]">
                YVOO Sales<b className="text-[#E5E5E5]">Pro+</b>
              </h2>
              <p className="text-[#E5E5E5] font-[700] md:text-[17px] text-[16px] max-w-[240px] md:leading-[21px] leading-[20px]">
                Unlock Your Supplier Potential and Maximize <br></br>Your
                Business Growth
              </p>
              {/* <div className="absolute w-[100%] h-[5px] bg-[#FFFFFF] top-[0] left-[0] hoverLinkBg"></div> */}
            </div>
          </ReactScrollLink>
          <Link
            href={"/auditors"}
            className="relative 3xl:top-[64px] 2xl:top-[61px] md:top-[260px] top-[40px]"
          >
            <div
              className="min-h-[163px] 2xl:max-h-[179px] md:max-h-[200px] max-h-[172px] 2xl:h-[179px] md:h-[200px] h-[172px] flex-1 3xl:px-[30px] px-[30px] 3xl:pt-[30px] pt-[30px] pb-[18px] border-t-[5px] border-[#29394F] basis-[300px] cursor-pointer hoverLink"
              onClick={() => {
                window.open("https://scanpro.yvoo.io/register", "_blank");
              }}
            >
              <h2 className="text-primary uppercase font-machina text-[24px] leading-[26px] font-[800]">
                Join the Team<br></br>of YVOO auditors
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
