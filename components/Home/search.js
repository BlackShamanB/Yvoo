import Image from "next/image";
import Link from "next/link";
import TypingEffect from "../TypingEffect";
import MagnifyOnScroll from "../MagnifyOnScroll";
import React, { useState, useEffect, useRef } from "react";
function Search({ handleModal }) {
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
      id="search"
      className="relative grid w-full bg-local bg-contain bg-bottom absolute inset-0 bg-[#06D7F9] z-[1]"
    >
      <MagnifyOnScroll
        style={{ zIndex: 0 }}
        src="/images/discover.webp"
        img-src="/images/discover.webp"
        width={1004}
        height={553}
        alt="yvoo-search"
        classes="absolute min-w-[50px] 2xl:bottom-[0px] md:bottom-[unset] 2xl:top-[unset] md:top-[423px] top-[337px] 3xl:left-[0] 2xl:left-[-114px] md:left-[0] 3xl:max-w-[1004px] 2xl:max-w-[774px] md:max-w-[683px] max-w-[89%]"
      // data-scroll
      // data-scroll-speed="0.01"
      />
      <MagnifyOnScroll
        style={{ zIndex: 0 }}
        src="/images/phone_main_page.webp"
        img-src="/images/phone_main_page.webp"
        width={244}
        height={499}
        alt="yvoo-search"
        classes="absolute min-w-[50px] 3xl:bottom-[172px] 2xl:bottom-[200px] md:bottom-[unset] 2xl:top-[unset] md:top-[159px] top-[211px] 3xl:left-[761px] 2xl:left-[36%] md:left-[67%] left-[64%] z-10 3xl:max-w-[1004px] 2xl:max-w-[774px] md:max-w-[232px] max-w-[117px]"
      // data-scroll
      // data-scroll-speed="0.01"
      />
      <div
        className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[585px] mx-[auto]"
        data-scroll
        data-scroll-speed="0.12"
      >
        <div className="relative grid grid-cols-1 2xl:grid-cols-2 w-full bg-no-repeat bg-bottom z-30">

          <div
            style={{
              position: "relative",
              transform: "translateZ(-1px)",
              transformStyle: "preserve-3d",
            }}
            className="md:flex-center flex-col"
          >
            <div
              className="md:relative z-30 flex flex-wrap flex-col items-start 2xl:gap-[24px] md:gap-[16px] gap-[12px] 2xl:mt-[100px] md:mt-[120px] mt-[100px] 3xl:mb-[455px] 2xl:mb-[454px] 2xl:leading-[50px] md:px-[0] px-[41px]"
              data-scroll
              data-scroll-speed="0.2"
            >
              <h1
                className="uppercase font-machina font-[800] 2xl:text-[50px] md:text-[40px] text-[30px] 2xl:leading-[54px] md:leading-[44px] leading-[34px] max-w-[318px] 2xl:max-w-[438px] 3xl:ml-[153px] 2xl:ml-[0]"
                ref={elementRef}
                style={{
                  visibility: elementVisible ? "visible" : "hidden",
                  top: elementVisible ? "0" : "50px",
                  opacity: elementVisible ? "1" : "0",
                  transition: "linear 0.5s",
                }}
              >
                {/* <TypingEffect text="YVOO Search" speed={100} delay={0} />{" "}
                <b className="text-black">
                  <TypingEffect text="Pro+" speed={100} delay={1.1} />
                </b> */}
                YVOO Search<b className="text-black">Pro+</b>
              </h1>
              <div className="flex flex-col 2xl:gap-[42px] md:gap-[28px] gap-[24px] 3xl:ml-[153px] 2xl:ml-[0]">
                <p className="font-[700] text-black 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] 2xl:max-w-[345px] max-w-[293px]">
                  Discover how SearchPro+ works hand-in-hand with ScanPro+ to streamline your supplier search
                </p>

                <button
                  className="filled_btn btn_animated_black !max-w-[unset]"
                  onClick={handleModal}
                >
                  Learn More About SearchPro+
                </button>
              </div>
            </div>
          </div>
          <div
            className="text-black z-30 2xl:mb-[120px] md:mb-[116px] mb-[100px] 2xl:mt-[232px] md:mt-[513px] mt-[300px] flex flex-col 2xl:gap-[20px] gap-[21px] font-[400] [&>p]:text-[14px] [&>p]:customxs:text-[16px] leading-[20px] 3xl:px-[86px] 2xl:pl-[54px] md:pl-[0] pl-[41px] 2xl:pr-[0] md:pr-[77px] pr-[41px]"
            data-scroll
            data-scroll-speed="0.16"
          >
            <Image
              style={{ zIndex: 0, transform: "translateZ(10px)" }}
              src="/icons/brain-1.svg"
              width={97}
              height={112}
              alt="yvoo-search"
              className="z-10 2lg:max-w-[96px] md:max-w-[97px] max-w-[69px] 2xl:mb-[150px] mb-[12px]"
            />
            <div className="font-[700] text-[18px] text-black 2xl:text-[24px] leading-[22px] 2xl:leading-[30px] mb-[4px]">
              Enhance Your Audit Process with Seamless Supplier Discovery through SearchPro+ Database
            </div>
            <p>
            Complementing ScanPro+, YVOO’s SearchPro+ allows you to effortlessly discover new suppliers and manage your supplier (SRM). 
            </p>
            <p>
            With access to a database of <b>ISO 9001 or IATF 16949</b> audited suppliers, advanced search filters, and real-time AI assistance, sourcing the right suppliers has never been easier.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
