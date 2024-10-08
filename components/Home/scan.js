import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import TypingEffect from "../TypingEffect";
import MagnifyOnScroll from "../MagnifyOnScroll";
function Scan({ handleModal }) {
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
      id="scan"
      className="relative grid w-full w-full bg-mint 3xl:mt-[-4px] 2xl:mt-[-12px] md:mt-[-5px] mt-[-2px] bg-local bg-contain 3xl:bg-[length:100%_975px] 2xl:bg-[length:100%_858px] bg-no-repeat bg-bottom"
    >
      <div
        className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto]"
        data-scroll
        data-scroll-speed="0.13"
      >
        <div className="relative grid grid-cols-1 2xl:grid-cols-2 md:grid-cols-1">
          <div
            style={{
              position: "relative",
              transform: "translateZ(-10px)",
              transformStyle: "preserve-3d",
            }}
            className="text-black md:pt-[0] md:pb-[0] pt-[97px] pb-[59px] md:flex-center flex-col h-auto 3xl:h-[975px] 2xl:h-[858px] md:h-[1234px]"
          >
            <div
              style={{
                position: "relative",
                transform: "translateZ(10px)",
              }}
              className="flex flex-wrap md:items-start flex-col 2xl:gap-[24px] md:gap-[16px] 2xl:mt-[136px] md:mt-[120px] 2xl:mb-[420px] md:mb-[20px] md:px-[0] px-[41px] 2xl:hidden block"
            >
              <h1 className="uppercase font-machina font-[800] text-white 2xl:text-[50px] md:text-[40px] text-[30px] md:leading-[44px] leading-[34px] 2xl:leading-[50px] max-w-[318px] 2xl:max-w-[340px] 2xl:mb-[3px] md:mb-[0] mb-[15px]"
                ref={elementRef}
                style={{
                  visibility: elementVisible ? "visible" : "hidden",
                  top: elementVisible ? "0" : "50px",
                  opacity: elementVisible ? "1" : "0",
                  transition: "linear 0.5s",
                }}>
                YVOO
                <br></br>
                Scan
                <b className="text-black">Pro+</b>
              </h1>
              <div className="flex flex-col 2xl:gap-[48px] md:gap-[28px] gap-[24px] md:items-start mb-[60px]">
                <p className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] text-black 2xl:leading-[26px] md:leading-[26px] leading-[20px] md:max-w-[327px] 2xl:max-w-[340px] md:max-w-[222px] 2xl:mb-[24px]">
                  Unleash Supplier Readiness for Unprecedented Audit Success{" "}
                </p>
                <button className="filled_btn" onClick={handleModal}>
                  Request demo
                </button>
              </div>
            </div>
            <div
              style={{
                position: "relative",
                transform: "translateZ(10px)",
              }}
              className="mb-[140px] md:mb-0 3xl:ml-[154px] 2xl:mt-[138px] md:mt-[0] max-w-[674px] flex flex-col 2xl:gap-[19px] gap-[20px] font-[400] leading-[20px] [&>p]:text-[14px] [&>p]:customxs:text-[16px] md:px-[0] px-[41px]"
              data-scroll
              data-scroll-speed="0.15"
            >
              <Image
                style={{ zIndex: 0, transform: "translateZ(10px)" }}
                src="/icons/brain-2.svg"
                width={115}
                height={108}
                alt="yvoo-search"
                className="md:max-w-[115px] max-w-[85px] z-10 3xl:ml-[-32px] 2xl:ml-[-33px] 3xl:mb-[22px] 2xl:mb-[4px] 2xl:relative absolute md:right-[0] right-[37px] 2xl:top-[0] md:top-[-62px] top-[-29px]"
              />
              <h2 className="text-black font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] 3xl:mb-[21px] 2xl:mb-[22px] md:mb-[8px] mb-[-4px]">
                Unlock Seamless, Precision Audits with ScanPro+
              </h2>
              <p>
                Our <span className="font-[600]">Comprehensive Supplier Assessment</span> goes beyond the basics, combining data analysis with on-site evaluations to provide precise insights into supplier potential.
              </p>
              <div className="font-[700] 2xl:text-[30px] md:text-[26px] text-[22px] 2xl:leading-[38px] md:leading-[32px] leading-[28px] text-[#000] 2xl:mb-[18px] md:mb-[12px] mb-[8px]">The Strengh of YVOO's ScanPro+</div>

              <div className="flex flex-col gap-[20px] text-black">
                <div className="flex gap-[9px] items-start	">
                  <Image
                    src="/icons/checkWhite.svg"
                    width={20}
                    height={20}
                    alt="triangle"
                    className=""
                  />
                  <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
                    <p className="font-[600]">Accurate Assessments:</p> Rely on comprehensive evaluations to work confidently with suppliers who meet stringent standards
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
                    <p className="font-[600]">Minimize Risks:</p> Ensure only suppliers that meet your quality and compliance standards are approved
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
                    <p className="font-[600]">Full Visibility:</p> Gain real-time, data-driven insights to make informed procurement decisions
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              position: "relative",
              // transform: "translateZ(-1px)",
              transformStyle: "preserve-3d",
            }}
            className="3xl:pl-[84px] 2xl:pl-[54px] md:flex-center flex-col h-fit"
            data-scroll
            data-scroll-speed="0.13"
          >
            <div
              style={{
                position: "relative",
                transform: "translateZ(10px)",
              }}
              className="flex flex-wrap items-center md:items-start md:flex-nowrap md:flex-col gap-[24px] md:mt-[135px] 3xl:mb-[420px] 2xl:mb-[398px] 2xl:block hidden"
              data-scroll
              data-scroll-speed="0.1"
            >
              <h1
                className="uppercase font-machina font-[800] text-[40px] text-white 2xl:text-[50px] leading-[30px] md:leading-[40px] 2xl:leading-[54px] max-w-[318px] 2xl:max-w-[340px] mb-[24px]"
                ref={elementRef}
                style={{
                  visibility: elementVisible ? "visible" : "hidden",
                  top: elementVisible ? "0" : "50px",
                  opacity: elementVisible ? "1" : "0",
                  transition: "linear 0.5s",
                }}
              >
                {/* <TypingEffect text="YVOO Scan" speed={100} delay={0} />
                <b className="text-black">
                  <TypingEffect text="Pro+" speed={100} delay={1.1} />
                </b> */}
                YVOO Scan<b className="text-black">Pro+</b>
              </h1>
              <div className="flex flex-col gap-[24px] md:items-start">
                <p className="font-[700] text-[18px] text-black 2xl:text-[24px] leading-[22px] 2xl:leading-[30px] max-w-[222px] md:max-w-[327px] 2xl:max-w-[340px]">
                  Ready to get started?{" "}
                </p>
                <p className="font-[400] text-black text-[16px] leading-[20px] mb-[18px]">Experience the speed and precision of on-demand audits</p>
                <button
                  className="filled_btn btn_animated_black"
                  onClick={handleModal}
                >
                  Request demo
                </button>
              </div>
            </div>
            <MagnifyOnScroll
              style={{ zIndex: 0, transform: "translateZ(10px)" }}
              src="/images/auditSuccess.webp"
              width={875}
              height={493}
              alt="yvoo-search"
              classes="absolute 3xl:bottom-[-155px] 2xl:bottom-[-59px] bottom-[-40px] z-10 3xl:max-w-[875px] 2xl:max-w-[666px] md:max-w-[622px] max-w-[319px] 3xl:w-[875px] 2xl:w-[666px] md:w-[622px] 2xl:right-[unset] md:right-[-85px] right-[0]"
            />
            <Image
              src="/icons/greenTriangle-2.png"
              width={116}
              height={139}
              alt="triangle"
              className="absolute 2xl:top-[38%] md:top-[-1290px] top-[-1141px] 2xl:right-[-15%] md:right-[-7%] right-[12%] mouse-parallax 3xl:block 2xl:hidden block md:max-w-[116px] max-w-[63px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scan;
