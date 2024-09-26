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
      <div
        className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] 3xl:mb-[144px] 2xl:mb-[203px]"
        data-scroll
        data-scroll-speed="0.12"
      >
        <div className="relative grid grid-cols-1 2xl:grid-cols-2 w-full bg-no-repeat bg-bottom z-30">
          <Image
            src="/icons/crosses-blue.svg"
            width={101}
            height={113}
            alt="triangle"
            className="absolute 3xl:top-[10%] 2xl:top-[11%] md:top-[55%] top-[37%] 3xl:left-[2%] 2xl:left-[-11%] md:left-[10%] left-[19%] mouse-parallax md:block block md:max-w-[none] max-w-[57px] transform"
            data-scroll
            data-scroll-speed="0.1"
          />
          <Image
            src="/icons/squares-3.png"
            width={145}
            height={140}
            alt="triangle"
            className="2xl:block hidden absolute 3xl:top-[84%] 2xl:top-[102%] top-[55%] 3xl:left-[-5%] 2xl:left-[-14%] left-[20%] 2xl:max-w-[unset] md:max-w-[110px] max-w-[70px] mouse-parallax"
            data-scroll
            data-scroll-speed="0.5"
          />
          <div className="flex md:flex-center flex-col gap-[80px] 2xl:pt-[210px] md:pt-[44px] 3xl:pl-[155px] 3xl:pr-[0] md:pr-[10px]">
            <div className="flex flex-col 2xl:gap-[24px] md:gap-[16px] gap-[12px] md:px-[0] px-[41px]">
              <div className="font-machina text-[#06D7F9] uppercase font-[800] 2xl:text-[50px] md:text-[40px] text-[30px] 2xl:leading-[54px] md:leading-[44px] leading-[34px] 2xl:mb-[18px] md:mb-[12px] mb-[8px]">
                YVOO: The Future <br />
                of Supplier Audits
              </div>
              <div className="font-[700] 2xl:text-[30px] md:text-[26px] text-[22px] 2xl:leading-[38px] md:leading-[32px] leading-[28px] text-[#000] 2xl:mb-[18px] md:mb-[12px] mb-[8px]">Transform your supplier audits
                with AI-driven efficiency, speed,
                and cost savings</div>

              <div className="flex flex-col gap-[20px] text-black">
                <div className="flex gap-[9px] items-start	">
                  <Image
                    src="/icons/check.svg"
                    width={20}
                    height={20}
                    alt="triangle"
                    className=""
                  />
                  <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[14px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
                    <p className="font-[600]">1-Click Audits:</p> Instantly schedule and track audits with certified auditors available on demand worldwide
                  </div>
                </div>
                <div className="flex gap-[9px] items-start	">
                  <Image
                    src="/icons/check.svg"
                    width={20}
                    height={20}
                    alt="triangle"
                    className=""
                  />
                  <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] md:pr-[0] pr-[30px]">
                    <p className="font-[600]">80% Faster Audits:</p> Complete supplier audits in days, not months
                  </div>
                </div>
                <div className="flex gap-[9px] items-start	">
                  <Image
                    src="/icons/check.svg"
                    width={20}
                    height={20}
                    alt="triangle"
                    className=""
                  />
                  <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] 2xl:mb-[22px] md:mb-[12px]">
                    <p className="font-[600]">Cost Efficiency:</p> Reduce audit costs by up to 70%
                  </div>
                </div>
                <div className="font-[700] text-[30px] leading-[38px] 2xl:mb-[22px] md:mb-[12px]">Key Features</div>
                <div className="flex gap-[9px] items-start	">
                  <Image
                    src="/icons/check.svg"
                    width={20}
                    height={20}
                    alt="triangle"
                    className=""
                  />
                  <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
                    <p className="font-[600]">Instant, Real-Time Results:</p>
                    Get immediate updates throughout the audit process
                  </div>
                </div>
                <div className="flex gap-[9px] items-start	">
                  <Image
                    src="/icons/check.svg"
                    width={20}
                    height={20}
                    alt="triangle"
                    className=""
                  />
                  <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
                    <p className="font-[600]">AI-Powered Accuracy:</p> Ensure compliance with the highest industry standards
                  </div>
                </div>
                <div className="flex gap-[9px] items-start	">
                  <Image
                    src="/icons/check.svg"
                    width={20}
                    height={20}
                    alt="triangle"
                    className=""
                  />
                  <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
                    <p className="font-[600]">Seamless Integration:</p> Easily connect with your existing ERP systems for a smooth workflow
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="md:px-[0] px-[41px] 3xl:pr-[0px] text-black z-30 2xl:mt-[0] md:mt-[-3px] mt-[-2px] md:mb-[120px] mb-[80px] 2xl:mb-0 md:mb-[120px] flex flex-col 2xl:gap-[20px] gap-[21px] font-[400] [&>p]:text-[22px] [&>p]:customxs:text-[24px] leading-[30px] 3xl:pl-[84px] 2xl:pl-[54px] 2xl:order-[1] order-[-1]"
            data-scroll
            data-scroll-speed="0.16"
          >
            <MagnifyOnScroll
              src="/images/auditor.webp"
              img-src="/images/auditor.webp"
              width={673}
              height={832}
              alt="yvoo-search"
              imgClasses="3xl:w-[100%]"
              classes="min-w-[50px] 2xl:top-[0] md:top-[186px] top-[211px] 3xl:left-[0] 2xl:left-[-114px] md:left-[-61px] z-10 3xl:max-w-[827px] 3xl:min-w-[827px] 2xl:max-w-[673px] md:max-w-[673px] max-w-[278px] md:mx-[0] mx-[auto]"
            />
          </div>
        </div>
      </div>
      <ImgLeftToRight
        src="/icons/icon-line.svg"
        width={590}
        height={106}
        alt="line"
        classesImg="md:max-w-[519px] md:w-[519px] max-w-[217px]"
        classesContainer="absolute overflow-hidden md:max-w-[519px] md:w-[519px] 3xl:top-[33%] 2xl:top-[40%] md:top-[27%] top-[45%] 3xl:left-[73%] 2xl:left-[75%] md:left-[59%] left-[40%] z-[30] md:block hidden"
        data-scroll
        data-scroll-speed="0.13"
      />
      <div className="w-[100%] 2xl:h-[86px] md:h-[46px] h-[34px] bg-labelBg 3xl:mt-[0] 2xl:mt-[50px] md:mt-[160px] mt-[92px] running-image 2xl:bg-auto bg-[size:auto_100%]"></div>
    </div>
  );
}

export default Effective;
