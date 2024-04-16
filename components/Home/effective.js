import Image from "next/image";
import MagnifyOnScroll from "../MagnifyOnScroll";
import React, { useState, useEffect, useRef } from "react";
import ImgLeftToRight from "../ImgLeftToRight";

function Effective({ handleModal }) {
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
      className="relative grid w-full overflow-x-clip bg-local bg-contain bg-bottom absolute inset-0 bg-[#fff] min-h-[688px]"
    >
    <ImgLeftToRight
      src="/icons/icon-line.svg"
      width={590}
      height={106}
      alt="line"
      classesImg="md:max-w-[590px] max-w-[217px]"
      classesContainer="absolute overflow-hidden md:max-w-[590px] 3xl:top-[42%] 2xl:top-[40%] md:top-[56.9%] top-[45%] 3xl:left-[78%] 2xl:left-[75%] md:left-[59%] left-[40%] z-[1]"
      data-scroll
      data-scroll-speed="0.13"
    />
      <div
        className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto]"
        data-scroll
        data-scroll-speed="0.12"
      >
        <div className="relative grid grid-cols-1 2xl:grid-cols-2 w-full bg-no-repeat bg-bottom z-30">
          <Image
            src="/icons/crosses-blue.svg"
            width={101}
            height={113}
            alt="triangle"
            className="absolute 2xl:top-[18%] top-[20%] 3xl:left-[-8%] 2xl:left-[-5%] left-[10%] mouse-parallax 2xl:block md:hidden block md:max-w-[none] max-w-[101px] transform"
            data-scroll
            data-scroll-speed="0.1"
          />
          <Image
            src="/icons/greenTriangle-4.svg"
            width={116}
            height={139}
            alt="triangle"
            className="absolute 2xl:top-[-40%] top-[-111%] 3xl:left-[85%] 2xl:left-[85%] left-[82%] mouse-parallax 2xl:block md:hidden block"
            data-scroll
            data-scroll-speed="0.1"
          />
          <Image
            src="/icons/squares-3.png"
            width={145}
            height={140}
            alt="triangle"
            className="md:block absolute 2xl:top-[55%] top-55%] 3xl:left-[-12%] 2xl:left-[-8%] left-[20%] 2xl:max-w-[unset] md:max-w-[110px] max-w-[70px] mouse-parallax"
            data-scroll
            data-scroll-speed="0.5"
          />
          <div className="flex md:flex-center flex-col gap-[80px] pt-[160px]">
            <div className="flex flex-col gap-[24px] md:px-[0] px-[41px]">
              <div className="font-machina text-[#06D7F9] uppercase font-[800] md:text-[50px] text-[40px] md:leading-[54px] leading-[44px]">
                an effective, fast, and cost-efficient AI-powered solution
              </div>
              <div className="flex flex-col gap-[20px] text-black">
                <div className="flex gap-[9px]">
                  <Image
                    src="/icons/check.svg"
                    width={20}
                    height={20}
                    alt="triangle"
                    className=""
                  />
                  <div className="font-[400] text-[16px] leading-[20px]">
                    Access to 6M suppliers
                  </div>
                </div>
                <div className="flex gap-[9px]">
                  <Image
                    src="/icons/check.svg"
                    width={20}
                    height={20}
                    alt="triangle"
                    className=""
                  />
                  <div className="font-[400] text-[16px] leading-[20px]">
                    Global network of auditors (on-site)
                  </div>
                </div>
                <div className="flex gap-[9px]">
                  <Image
                    src="/icons/check.svg"
                    width={20}
                    height={20}
                    alt="triangle"
                    className=""
                  />
                  <div className="font-[400] text-[16px] leading-[20px]">
                    10X Faster decision-making
                  </div>
                </div>
                <div className="flex gap-[9px]">
                  <Image
                    src="/icons/check.svg"
                    width={20}
                    height={20}
                    alt="triangle"
                    className=""
                  />
                  <div className="font-[400] text-[16px] leading-[20px]">
                    Over 85% accuracy in matching search results
                  </div>
                </div>
                <div className="flex gap-[9px]">
                  <Image
                    src="/icons/check.svg"
                    width={20}
                    height={20}
                    alt="triangle"
                    className=""
                  />
                  <div className="font-[400] text-[16px] leading-[20px]">
                    100% Audit success rate guaranteed
                  </div>
                </div>
                <div className="flex gap-[9px]">
                  <Image
                    src="/icons/check.svg"
                    width={20}
                    height={20}
                    alt="triangle"
                    className=""
                  />
                  <div className="font-[400] text-[16px] leading-[20px]">
                    70% Reduction in supplier onboarding costs
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="md:px-[0] px-[41px] 3xl:pr-[0px] text-black z-30 2xl:mt-[0] mt-[80px] md:mb-[120px] mb-[100px] 2xl:mb-0 md:mb-[120px] flex flex-col 2xl:gap-[20px] gap-[21px] font-[400] [&>p]:text-[22px] [&>p]:customxs:text-[24px] leading-[30px] 3xl:pl-[84px] 2xl:pl-[54px]"
            data-scroll
            data-scroll-speed="0.16"
          >
            <MagnifyOnScroll
              src="/images/auditor.webp"
              img-src="/images/auditor.webp"
              width={673}
              height={832}
              alt="yvoo-search"
              classes="min-w-[50px] 2xl:top-[0] md:top-[186px] top-[211px] 3xl:left-[0] 2xl:left-[-114px] md:left-[-61px] z-10 3xl:max-w-[673px] 2xl:max-w-[673px] md:max-w-[673px] max-w-[89%]"
            />
          </div>
        </div>
      </div>
      <div className="w-[100%] h-[86px] bg-labelBg 3xl:mt-[0] 2xl:mt-[50px]"></div>
    </div>
  );
}

export default Effective;
