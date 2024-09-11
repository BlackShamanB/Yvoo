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
      className="relative grid w-full bg-local bg-contain bg-bottom absolute inset-0 bg-[#131D2A] min-h-[688px] pt-[180px] 2xl:pb-[242px] pb-[30px]"
    >
      <div
        className=""
        data-scroll
        data-scroll-speed="0.12"
      ><h2 className="3xl:max-w-[1208px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] font-machina uppercase text-white font-[800] 2xl:text-[50px] md:text-[40px] text-[24px] 2xl:leading-[54px] md:leading-[44px] leading-[30px] 3xl:mb-[90px] mb-[60px]">
      Its Expensive , Slow an Ineffective
    </h2>
        <div className="3xl:max-w-[1293px] 2xl:max-w-[1116px] md:max-w-[720px] mx-[auto] relative grid grid-cols-1 2xl:grid-cols-2 w-full bg-no-repeat bg-bottom z-30">
          <Image
            src="/icons/squares-4.svg"
            width={71}
            height={85}
            alt="triangle"
            className="absolute 2xl:top-[-35px] top-[-5%] 2xl:left-[45%] 2xl:left-[82%] left-[81%] mouse-parallax 2xl:block block md:max-w-[none] max-w-[45px] transform md:scale-y-[1] scale-y-[-1]"
            data-scroll
            data-scroll-speed="0.1"
          />
          <Image
            src="/icons/greenTriangle-4.svg"
            width={116}
            height={139}
            alt="triangle"
            className="absolute 2xl:top-[-71%] top-[-44%] 3xl:left-[90%] 2xl:left-[85%] left-[61%] mouse-parallax 2xl:block block md:max-w-[116px] max-w-[63px]"
            data-scroll
            data-scroll-speed="0.1"
          />
          <Image
            src="/icons/arch-1.png"
            width={189}
            height={174}
            alt="triangle"
            className="absolute 3xl:top-[74%] 2xl:top-[84%] top-[89%] 3xl:left-[-8%] 2xl:left-[-10%] left-[16%] mouse-parallax md:max-w-[180px] max-w-[127px] z-[1] md:block hidden"
            data-scroll
            data-scroll-speed="0.5"
          />
          <Image
            src="/icons/bg-FAIL.svg"
            width={293}
            height={105}
            alt="triangle"
            className="absolute z-[-1] 3xl:top-[53%] 2xl:top-[58%] top-[33%] 3xl:left-[25%] 2xl:left-[21%] left-[41%]"
          />
          <div className="flex md:flex-center flex-col 2xl:gap-[80px] gap-[58px] 3xl:pl-[43px] 2xl:pl-[0] pl-[64px]">
            <div className="flex items-center 2xl:gap-[11px] gap-[20px]">
              <p className="font-machina text-[#06D7F9] font-[800] 2xl:text-[50px] text-[40px] 2xl:leading-[50px] leading-[44px] md:ml-[0] ml-[19px]">
                90%
              </p>
              <p className="text-white font-[700] 2xl:text-[24px] md:text-[20px] text-[22px] 2xl:leading-[30px] leading-[26px] max-w-[372px] 2xl:mt-[0] md:mt-[0] mt-[0px]">
                of buyers rely on outdated methods for supplier search.
              </p>
            </div>
            <div className="flex flex-col gap-[24px] md:px-[0] px-[41px]">
              <div className="font-[400] 2xl:text-[24px] text-[20px] 2xl:leading-[30px] leading-[26px] 3xl:pr-[0] pr-[100px]">
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
            className="md:px-[0] px-[41px] 3xl:pr-[0px] text-black z-30 3xl:mt-[0] 2xl:mt-[-10px] mt-[80px] md:mb-[120px] mb-[100px] 2xl:mb-0 md:mb-[120px] flex 2xl:flex-col flex-row 2xl:gap-[43px] gap-[36px] font-[400] [&>p]:text-[22px] [&>p]:customxs:text-[24px] leading-[30px] 3xl:pl-[88px] 2xl:pl-[54px]"
            data-scroll
            data-scroll-speed="0.16"
          >
            
            <div className="flex 2xl:flex-row flex-col	font-[400] [&>p]:text-[20px] [&>p]:2xl:text-[24px] [&>p]:2xl:leading-[30px] [&>p]:leading-[26px] 2xl:gap-[57px] gap-[100px] items-center mb-[32px] 2xl:mt-[0] mt-[127px] 2xl:ml-[0]">
              <div className="flex font-machina text-[#06D7F9] font-[800] 2xl:text-[50px] text-[40px] 2xl:leading-[54px] leading-[44px] gap-[12px]">
                <Image
                  src="/icons/arrow-to-right.svg"
                  width={34}
                  height={37}
                  alt="triangle"
                  className=""
                />
                34W
              </div>
              <p className="font-[700] text-white 2xl:text-left text-center 2xl:pr-[0] pr-[15px] 2xl:max-w-[unset] max-w-[247px]">Per supplier onboarding</p>
            </div>
            <div className="flex 2xl:flex-row flex-col 2xl:mt-[0] mt-[59px] font-[400] [&>p]:text-[20px] [&>p]:2xl:text-[24px] [&>p]:2xl:leading-[30px] [&>p]:leading-[26px] 2xl:gap-[53px] gap-[30px] items-center">
              <Image
                src="/icons/slow.svg"
                width={182}
                height={182}
                alt="triangle"
                className=""
              />
              <p className="font-[700] text-white">of Audits fail</p>
            </div>
            <div className="flex 2xl:flex-row flex-col font-[400] [&>p]:text-[20px] [&>p]:2xl:text-[24px] [&>p]:2xl:leading-[30px] [&>p]:leading-[26px] 2xl:gap-[41px] gap-[24px] items-center 2xl:mt-[0] mt-[44px]">
              <div className="relative bg-blend-screen w-[197px] h-[202px] bg-inneffectiveBg bg-[#131D2A]"></div>
              <p className="font-[700] text-white">Costs per Supplier</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expensive;
