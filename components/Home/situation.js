import Image from "next/image";
import Link from "next/link";
import TypingEffect from "../TypingEffect";
import MagnifyOnScroll from "../MagnifyOnScroll";
import React, { useState, useEffect, useRef } from "react";
import ImgLeftToRight from "../ImgLeftToRight";
import LoadOnLoad from "../LoadOnLoad";
function Situation({ handleModal }) {
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
  return (
    <div
      id="situation"
      className="relative max-w-[1920px] w-full grid md:grid-cols-[1fr_1fr] grid-cols-1 2xl:gap-[170px] gap-[44px] justify-center bg-local bg-contain bg-bottom inset-0 bg-[#06D7F9] md:py-[160px] py-[60px]"
    >
      <MagnifyOnScroll
        style={{ zIndex: 0 }}
        src="/images/situation-image.webp"
        img-src="/images/situation-image.webp"
        width={875}
        height={593}
        alt="yvoo-search"
        classes="z-[0] min-w-[50px] 3xl:left-[0] 2xl:left-[-108px] md:left-[0px] z-10 3xl:max-w-[900px] 2xl:max-w-[774px] md:max-w-[561px] max-w-[291px]"
      />
      <Image
        src="/icons/crosses-1.svg"
        width={101}
        height={113}
        alt="triangle"
        className="absolute md:hidden block top-[237px] right-[69px] mouse-parallax md:max-w-[101px] max-w-[63px]"
        data-scroll
        data-scroll-speed="0.2"
      />
      <div
        className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] w-[100%] mx-[auto]"
        data-scroll
        data-scroll-speed="0.12"
      >
        <Image
          src="/icons/crosses-2.svg"
          width={101}
          height={113}
          alt="triangle"
          className="absolute 3xl:top-[67%] 2xl:top-[43%] md:top-[35.6%] top-[41%] 3xl:left-[35%] 2xl:left-[33%] md:left-[13%] left-[6%] mouse-parallax md:max-w-[101px] max-w-[63px] 2xl:block hidden"
          data-scroll
          data-scroll-speed="0.2"
        />
      <LoadOnLoad>
        <div
          className="md:px-[0] px-[41px] 3xl:pr-[0px] text-black z-30 flex flex-col 3xl:gap-[38px] 2xl:gap-[0] md:gap-[24px] gap-[20px] font-[400] [&>p]:text-[20px] [&>p]:md:text-[24px] md:leading-[30px] leading-[28px] max-w-[673px]"
          data-scroll
          data-scroll-speed="0.16"
        >
          <Image
            style={{ zIndex: 0, transform: "translateZ(10px)" }}
            src="/icons/situation.svg"
            width={76}
            height={80}
            alt="yvoo-search"
            className="z-10 max-w-[76px] 3xl:mb-[0] 2xl:mb-[42px] md:mb-[18px] mb-[10px]"
          />
          <h2 className="font-inter font-[800] 2xl:text-[50px] md:text-[40px] text-[30px] 2xl:leading-[58px] md:leading-[44px] leading-[38px] 3xl:mb-[6px] 2xl:mb-[42px] mb-[12px]">
            The Roadblock
          </h2>
          <p className="!font-[700] !2xl:text-[30px] !md:text-[26px] !text-[20px] !2xl:leading-[38px] !md:leading-[32px] !leading-[28px] mb-[12px]">
            Traditional on-site supplier audits are more than just slow and
            costly:
          </p>
          <p className="3xl:mb-[6px] 2xl:mb-[30px] 2xl:pr-[0] md:pr-[100px]">
            <div className="flex flex-col gap-[20px] text-black">
              <div className="flex gap-[9px] items-start	">
                <Image
                  src="/icons/checkWhite.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className=""
                />
                <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[18px] 2xl:leading-[30px] md:leading-[26px] leading-[26px]">
                  The limit your ability to scale
                </div>
              </div>
              <div className="flex gap-[9px] items-start	">
                <Image
                  src="/icons/checkWhite.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className=""
                />
                <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[18px] 2xl:leading-[30px] md:leading-[26px] leading-[26px] md:pr-[0] pr-[30px]">
                  Delays your response to disruptions
                </div>
              </div>
              <div className="flex gap-[9px] items-start	">
                <Image
                  src="/icons/checkWhite.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className=""
                />
                <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[18px] 2xl:leading-[30px] md:leading-[26px] leading-[26px]">
                  Weakens your competitive position
                </div>
              </div>
              <div className="flex gap-[9px] items-start	">
                <Image
                  src="/icons/checkWhite.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className=""
                />
                <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[18px] 2xl:leading-[30px] md:leading-[26px] leading-[26px]">
                  Creates operational inefficiencies
                </div>
              </div>
            </div>
          </p>
          <p className="font-[700] text-white uppercase">
            We're here to change that!
          </p>
        </div>
        </LoadOnLoad>
      </div>
    </div>
  );
}

export default Situation;
