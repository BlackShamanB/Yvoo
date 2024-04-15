import Image from "next/image";
import Link from "next/link";
import TypingEffect from "../TypingEffect";
import MagnifyOnScroll from "../MagnifyOnScroll";
import React, { useState, useEffect, useRef } from "react";
function Expensive({ handleModal }) {
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
      className="relative grid w-full bg-local bg-contain bg-bottom absolute inset-0 bg-[#131D2A] min-h-[688px] pt-[231px]"
    >
      <div
        className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto]"
        data-scroll
        data-scroll-speed="0.12"
      >
        <div className="relative grid grid-cols-1 2xl:grid-cols-2 w-full bg-no-repeat bg-bottom z-30">
          <Image
            src="/icons/squares-4.svg"
            width={71}
            height={85}
            alt="triangle"
            className="absolute 2xl:top-[-59px] top-[-111%] 3xl:left-[30%] 2xl:left-[30%] left-[82%] mouse-parallax 2xl:block md:hidden block md:max-w-[none] max-w-[45px] transform md:scale-y-[1] scale-y-[-1]"
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
            src="/icons/arch-1.png"
            width={189}
            height={174}
            alt="triangle"
            className="absolute 2xl:top-[55%] top-55%] 3xl:left-[-8%] 2xl:left-[-8%] left-[20%] mouse-parallax md:max-w-[180px] max-w-[127px] z-[1]"
            data-scroll
            data-scroll-speed="0.5"
          />
          <Image
            src="/icons/bg-FAIL.svg"
            width={293}
            height={105}
            alt="triangle"
            className="absolute z-[-1] top-[40%] left-[18%]"
          />
          <div className="flex md:flex-center flex-col gap-[80px]">
            <div className="flex items-center 2xl:gap-[11px] gap-[8px]">
              <p className="font-machina text-[#06D7F9] font-[800] 2xl:text-[50px] text-[30px] 2xl:leading-[50px] leading-[34px] md:ml-[0] ml-[19px]">
                90%
              </p>
              <p className="text-white font-[700] 2xl:text-[24px] text-[22px] leading-[30px] max-w-[372px] 2xl:mt-[0] md:mt-[3px] mt-[0px]">
                of buyers rely on outdated methods for supplier search.
              </p>
            </div>
            <div className="flex flex-col gap-[24px]">
              <div className="font-[400] text-[24px] leading-[30px]">
                No effective way to make the sourcing decision without an
                on-site supplier qualification:
              </div>
              <div className="flex flex-col gap-[20px]">
                <div className="flex gap-[9px]">
                  <Image
                    src="/icons/fail.svg"
                    width={20}
                    height={20}
                    alt="triangle"
                    className=""
                  />
                  <div className="font-[400] text-[16px] leading-[20px]">
                    AI-Powered supplier search tools and platforms
                  </div>
                </div>
                <div className="flex gap-[9px]">
                  <Image
                    src="/icons/fail.svg"
                    width={20}
                    height={20}
                    alt="triangle"
                    className=""
                  />
                  <div className="font-[400] text-[16px] leading-[20px]">
                    Supplier ratings and reviews on supplier platforms, Google,
                    etc.
                  </div>
                </div>
                <div className="flex gap-[9px]">
                  <Image
                    src="/icons/fail.svg"
                    width={20}
                    height={20}
                    alt="triangle"
                    className=""
                  />
                  <div className="font-[400] text-[16px] leading-[20px]">
                    Traditional third-party verification services offerings
                  </div>
                </div>
                <div className="flex gap-[9px]">
                  <Image
                    src="/icons/fail.svg"
                    width={20}
                    height={20}
                    alt="triangle"
                    className=""
                  />
                  <div className="font-[400] text-[16px] leading-[20px]">
                    Using personal means without having procurement hubs
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="md:px-[0] px-[41px] 3xl:pr-[0px] text-black z-30 md:mb-[120px] mb-[100px] 2xl:mb-0 md:mb-[120px] flex flex-col 2xl:gap-[20px] gap-[21px] font-[400] [&>p]:text-[22px] [&>p]:customxs:text-[24px] leading-[30px] 3xl:pl-[84px] 2xl:pl-[54px]"
            data-scroll
            data-scroll-speed="0.16"
          >
            <h2 className="font-machina uppercase text-white font-[800] text-[50px] leading-[54px] mb-[52px]">
              Expensive, Slow, Ineffective
            </h2>
            <div className="flex font-[400] [&>p]:text-[22px] [&>p]:customxs:text-[24px] leading-[30px] gap-[57px] items-center mb-[55px]">
              <div className="flex font-machina text-[#06D7F9] font-[800] text-[50px] leading-[54px] gap-[12px]">
                <Image
                  src="/icons/arrow-to-right.svg"
                  width={34}
                  height={37}
                  alt="triangle"
                  className=""
                />
                34W
              </div>
              <p className="font-[800] text-white">Per supplier onboarding</p>
            </div>
            <div className="flex font-[400] [&>p]:text-[22px] [&>p]:customxs:text-[24px] leading-[30px] gap-[53px] items-center mb-[23px]">
              <Image
                src="/icons/slow.svg"
                width={182}
                height={182}
                alt="triangle"
                className=""
              />
              <p className="font-[800] text-white">of Audits fail</p>
            </div>
            <div className="flex font-[400] [&>p]:text-[22px] [&>p]:customxs:text-[24px] leading-[30px] gap-[53px] items-center">
              <div className="relative bg-blend-screen w-[197px] h-[202px] bg-inneffectiveBg bg-[#131D2A]"></div>
              <p className="font-[800] text-white">Costs per Supplier</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expensive;
