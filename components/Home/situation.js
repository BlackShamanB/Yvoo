import Image from "next/image";
import Link from "next/link";
import TypingEffect from "../TypingEffect";
import MagnifyOnScroll from "../MagnifyOnScroll";
import React, { useState, useEffect, useRef } from "react";
import ImgLeftToRight from "../ImgLeftToRight";
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
      className="relative grid w-full bg-local bg-contain bg-bottom absolute inset-0 bg-[#06D7F9] 3xl:min-h-[688px] 2xl:min-h-[680px]"
    >
      <MagnifyOnScroll
        style={{ zIndex: 0 }}
        src="/images/situation.webp"
        img-src="/images/situation.webp"
        width={875}
        height={551}
        alt="yvoo-search"
        classes="absolute z-[0] min-w-[50px] 3xl:top-[-110px] 2xl:top-[-179px] md:top-[-110px] top-[-60px] 3xl:left-[0] 2xl:left-[-108px] md:left-[0px] z-10 3xl:max-w-[900px] 2xl:max-w-[774px] md:max-w-[561px] max-w-[291px]"
      />
      <div
        className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] w-[100%] mx-[auto]"
        data-scroll
        data-scroll-speed="0.12"
      >
        <div className="relative grid grid-cols-1 2xl:grid-cols-2 w-full bg-no-repeat bg-bottom z-30">
          <Image
            src="/icons/squares-1.png"
            width={80}
            height={90}
            alt="triangle"
            className="absolute 2xl:top-[-152px] top-[-71%] top-[-111%] 3xl:left-[24%] 2xl:left-[22.5%] left-[82%] mouse-parallax 2xl:block md:hidden block md:max-w-[none] max-w-[45px] transform md:scale-y-[1] scale-y-[-1] 2xl:block md:hidden block md:rotate-[0] rotate-[180deg]"
            data-scroll
            data-scroll-speed="0.1"
          />

          <Image
            src="/icons/crosses-2.svg"
            width={101}
            height={113}
            alt="triangle"
            className="absolute 3xl:top-[67%] 2xl:top-[43%] md:top-[35.6%] top-[41%] 3xl:left-[35%] 2xl:left-[33%] md:left-[13%] left-[6%] mouse-parallax md:max-w-[101px] max-w-[63px] 2xl:block hidden"
            data-scroll
            data-scroll-speed="0.2"
          />
          <ImgLeftToRight
            src="/icons/line-white.svg"
            width={590}
            height={106}
            alt="line"
            classesImg="md:max-w-[519px] md:w-[519px] max-w-[217px]"
            classesContainer="absolute overflow-hidden md:max-w-[519px] md:w-[519px] 3xl:top-[44%] 3xl:left-[-18%] z-[30] 3xl:block hidden"
            data-scroll
            data-scroll-speed="0.13"
          />
          <div
            style={{
              position: "relative",
              transform: "translateZ(-1px)",
              transformStyle: "preserve-3d",
            }}
            className="md:flex-center flex-col"
          ></div>
          <div
            className="md:px-[0] px-[41px] 3xl:pr-[0px] text-black z-30 2xl:mb-[120px] md:mb-[160px] mb-[100px] 2xl:mb-0 md:mb-[120px] 2xl:mt-[104px] md:mt-[324px] mt-[184px] flex flex-col 3xl:gap-[42px] 2xl:gap-[0] md:gap-[24px] gap-[20px] font-[400] [&>p]:text-[20px] [&>p]:md:text-[24px] md:leading-[30px] leading-[26px] 3xl:pl-[84px] 2xl:pl-[54px]"
            data-scroll
            data-scroll-speed="0.16"
          >
            <Image
              style={{ zIndex: 0, transform: "translateZ(10px)" }}
              src="/icons/situation.svg"
              width={76}
              height={80}
              alt="yvoo-search"
              className="z-10 max-w-[76px] 3xl:mb-[0] 2xl:mb-[42px] md:mb-[18px] mb-[22px]"
            />
            <h2 className="font-machina uppercase font-[800] 2xl:text-[50px] md:text-[40px] text-[30px] 2xl:leading-[54px] md:leading-[44px] leading-[34px] 3xl:mb-[0] 2xl:mb-[42px] mb-[4px]">
              The Roadblock
            </h2>
            <p className="!font-[700] !2xl:text-[30px] !md:text-[26px] !text-[30px] !2xl:leading-[22px] !md:leading-[32px] !leading-[28px]">Traditional on-site supplier audits are more than just slow and costly:</p>
            <p className="3xl:mb-[18px] 2xl:mb-[30px] 2xl:pr-[0] md:pr-[100px]">
            <div className="flex flex-col gap-[20px] text-black">
                <div className="flex gap-[9px] items-start	">
                  <Image
                    src="/icons/checkWhite.svg"
                    width={20}
                    height={20}
                    alt="triangle"
                    className=""
                  />
                  <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[14px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
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
                  <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] md:pr-[0] pr-[30px]">
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
                  <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
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
                  <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
                    Creates operational inefficiencies
                  </div>
                </div>
              </div>
            </p>
            <p className="font-[700] text-white">We're here to change that!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Situation;
