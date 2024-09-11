import Image from "next/image";
import Link from "next/link";
import TypingEffect from "../TypingEffect";
import MagnifyOnScroll from "../MagnifyOnScroll";
import React, { useState, useEffect, useRef } from "react";
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
        classes="absolute z-[0] min-w-[50px] 3xl:top-[-110px] 2xl:top-[-179px] md:top-[-110px] top-[211px] 3xl:left-[0] 2xl:left-[-108px] md:left-[0px] z-10 3xl:max-w-[900px] 2xl:max-w-[774px] md:max-w-[561px] max-w-[89%]"
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
            className="absolute 2xl:top-[-152px] top-[-111%] 3xl:left-[20%] 2xl:left-[22.5%] left-[82%] mouse-parallax 2xl:block md:hidden block md:max-w-[none] max-w-[45px] transform md:scale-y-[1] scale-y-[-1]"
            data-scroll
            data-scroll-speed="0.1"
          />

          <Image
            src="/icons/crosses-2.svg"
            width={101}
            height={113}
            alt="triangle"
            className="absolute 2xl:top-[87%] md:top-[35.6%] top-[41%] 2xl:left-[35%] md:left-[13%] left-[6%] mouse-parallax md:max-w-[101px] max-w-[63px] 2xl:block hidden"
            data-scroll
            data-scroll-speed="0.2"
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
            className="md:px-[0] px-[41px] 3xl:pr-[0px] text-black z-30 2xl:mb-[120px] md:mb-[160px] mb-[100px] 2xl:mb-0 md:mb-[120px] 2xl:mt-[104px] md:mt-[324px] mt-[113px] flex flex-col 3xl:gap-[42px] 2xl:gap-[0] gap-[24px] font-[400] [&>p]:text-[22px] [&>p]:customxs:text-[24px] leading-[30px] 3xl:pl-[84px] 2xl:pl-[54px]"
            data-scroll
            data-scroll-speed="0.16"
          >
            <Image
              style={{ zIndex: 0, transform: "translateZ(10px)" }}
              src="/icons/situation.svg"
              width={76}
              height={80}
              alt="yvoo-search"
              className="z-10 max-w-[76px] 3xl:mb-[0] 2xl:mb-[42px] md:mb-[18px]"
            />
            <h2 className="font-machina uppercase font-[800] 2xl:text-[50px] text-[40px] 2xl:leading-[54px] leading-[44px] 3xl:mb-[0] 2xl:mb-[42px] md:mb-[4px]">
              The Situation
            </h2>
            <p className="3xl:mb-[18px] 2xl:mb-[30px] 2xl:pr-[0] pr-[100px]">
              Traditional Supplier Search <br /> Methods: A Hindrance to Growth, Competitiveness,<br /> and Innovation.
            </p>
            <p className="font-[700] text-white">We're here to change that!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Situation;
