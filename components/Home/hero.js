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
    <div className="relative w-full px-[20px] customsm:px-[50px] md:h-[820px] h-[547px] bg-[#414141] flex justify-center 3xl:pt-[163px] 2xl:pt-[156px] md:pt-[162px] pt-[38px] xl:pb-0 md:max-h-[1008px] max-h-[547px]">
      <div className="absolute top-0 w-full customsm:px-[50px] h-[547px] md:h-[820px]">
        <Image
          src={"/images/homeBg.webp"}
          alt="hero"
          layout="fill"
          objectFit="cover"
          loading="eager"
          priority
        />
      </div>

      <div
        className="z-10 w-full 2xl:max-w-[1516px] flex flex-col md:px-[0] px-"
        priority
        data-scroll
        data-scroll-speed="0.3"
      >
        <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] 3xl:w-[1516px] 2xl:w-[1116px] mx-[auto] md:pl-[0] pl-[20px] md:pr-[0] pr-[20px] md:pt-[0] pt-[39px]">
          {/* <h1 className="uppercase font-machina 2xl:text-[50px] md:text-[40px] text-[30px] font-[800] 2xl:leading-[54px] md:leading-44px] leading-[34px] max-w-[880px] md:block hidden">
            <TypingEffect text="Welcome to YVOO the" speed={100} delay = {0}/>{" "}<br/>
            <TypingEffect text="Sourcer" speed={100} delay = {0}/>
            <b className="text-primary">
              <TypingEffect text="Pro+" speed={100} delay = {0.7}/>
            </b>{" "}
            <TypingEffect text="Your Ultimate" speed={100}  delay = {1.1}/>{" "}<br/>
            <TypingEffect text="Industrial B2B Supplier" speed={100} delay = {0} />{" "}<br/>
            <TypingEffect text="Platform" speed={100} delay = {0} />
          </h1>
          <h1 className="uppercase font-machina 2xl:text-[50px] md:text-[40px] text-[30px] font-[800] 2xl:leading-[54px] md:leading-44px] leading-[34px] max-w-[880px] md:hidden block">
            <TypingEffect text="Welcome to" speed={100} delay = {0}/>{" "}<br/>
            <TypingEffect text="YVOO the" speed={100} delay = {0}/><br/>
            <b className="text-primary">
              <TypingEffect text="Sourcer Pro+" speed={100} delay = {0}/>
            </b>{" "}
            <TypingEffect text="Your Ultimate" speed={100}  delay = {1.1}/>{" "}<br/>
            <TypingEffect text="Industrial B2B" speed={100} delay = {0} />{" "}<br/>
            <TypingEffect text="Supplier" speed={100} delay = {0} />
            <TypingEffect text="Platform" speed={100} delay = {0} />
          </h1> */}
          <h1
            className="relative uppercase font-machina 2xl:text-[50px] md:text-[40px] text-[30px] font-[800] 2xl:leading-[54px] md:leading-44px] leading-[34px] max-w-[880px]"
            ref={elementRef}
            style={{
              visibility: elementVisible ? "visible" : "hidden",
              top: elementVisible ? "0" : "50px",
              opacity: elementVisible ? "1" : "0",
              transition: "linear 0.5s",
            }}
          >
            Welcome to YVOO the Sourcer<b className="text-primary">Pro+</b> Your
            Ultimate Industrial B2B Supplier Platform"
          </h1>
        </div>
        <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] 3xl:w-[1516px] 2xl:w-[1116px] md:w-[598px] md:mx-[auto] mx-[22px] 3xl:mt-[77px] 2xl:mt-[82px] md:mt-[52px] mt-[43px] flex items-center md:gap-[32px] gap-[15px]">
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
        </div>
        <div className="grid sm:grid-cols-2 lg2:grid-cols-4 2xl:gap-[40px] gap-[20px] 2xl:mt-auto md:mt-[-58px] mt-[20px] 2xl:px-[0] md:px-[35px] px-[20px] font-inter">
          <ReactScrollLink
            className="relative 2xl:top-[40px] md:top-[260px] top-[40px]"
            activeClass="active"
            to="search"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="2xl:max-h-[179px] md:max-h-[200px] max-h-[172px] 2xl:h-[179px] md:h-[200px] h-[172px] flex-1 3xl:px-[30px] px-[30px] 3xl:pt-[30px] pt-[30px] pb-[18px] bg-[#53D3AA] basis-[300px] cursor-pointer hoverLink">
              <h2 className="mb-[4px] uppercase font-machina md:text-[24px] text-[20px] md:leading-[26px] leading-[24px] font-[800] max-w-[172px]">
                YVOO Search<b className="text-black">Pro+</b>
              </h2>
              <p className="text-black font-[700] md:text-[17px] text-[16px] max-w-[240px] md:leading-[21px] leading-[20px]">
                Discover Quality <br></br>Suppliers Effortlessly
              </p>
            </div>
          </ReactScrollLink>
          <ReactScrollLink
            className="relative 2xl:top-[40px] md:top-[260px] top-[40px]"
            activeClass="active"
            to="scan"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="2xl:max-h-[179px] md:max-h-[200px] max-h-[172px] 2xl:h-[179px] md:h-[200px] h-[172px] flex-1 3xl:px-[30px] px-[30px] 3xl:pt-[30px] pt-[30px] pb-[18px] bg-[#06D7F9] basis-[300px] cursor-pointer hoverLink">
              <h2 className="mb-[4px] uppercase font-machina md:text-[24px] text-[20px] md:leading-[26px] leading-[24px] font-[800] max-w-[172px]">
                YVOO Scan<b className="text-black">Pro+</b>
              </h2>
              <p className="text-black font-[700] md:text-[17px] text-[16px] max-w-[240px] md:leading-[21px] leading-[20px]">
                Unleash Supplier Readiness for Unprecedented Audit Success
              </p>
            </div>
          </ReactScrollLink>
          <ReactScrollLink
            className="relative 2xl:top-[40px] md:top-[260px] top-[40px]"
            activeClass="active"
            to="sales"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="2xl:max-h-[179px] md:max-h-[200px] max-h-[172px] 2xl:h-[179px] md:h-[200px] h-[172px] flex-1 3xl:px-[30px] px-[30px] 3xl:pt-[30px] pt-[30px] pb-[18px] bg-[#FFFFFF] basis-[300px] cursor-pointer hoverLink">
              <h2 className="mb-[4px] uppercase font-machina md:text-[24px] text-[20px] md:leading-[26px] leading-[24px] font-[800] max-w-[172px] text-[#06D7F9]">
                YVOO Sales<b className="text-black">Pro+</b>
              </h2>
              <p className="text-black font-[700] md:text-[17px] text-[16px] max-w-[240px] md:leading-[21px] leading-[20px]">
                Unlock Your Supplier Potential and Maximize <br></br>Your
                Business Growth
              </p>
            </div>
          </ReactScrollLink>
          <Link
            href={"/auditors"}
            className="relative 2xl:top-[40px] md:top-[260px] top-[40px]"
          >
            <div
              className="min-h-[163px] 2xl:max-h-[179px] md:max-h-[200px] max-h-[172px] 2xl:h-[179px] md:h-[200px] h-[172px] flex-1 3xl:px-[30px] px-[30px] 3xl:pt-[30px] pt-[30px] pb-[18px] bg-[#131D2A] basis-[300px] cursor-pointer hoverLink"
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
