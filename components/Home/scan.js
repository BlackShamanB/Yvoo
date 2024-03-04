import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import TypingEffect from "../TypingEffect";
import MagnifyOnScroll from "../MagnifyOnScroll";
function Scan({ handleModal }) {

  return (
    <div
      id="scan"
      className="relative grid w-full w-full bg-[#06D7F9] bg-local bg-contain 3xl:bg-[length:100%_975px] 2xl:bg-[length:100%_858px] bg-no-repeat bg-bottom z-30"
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
              className="flex flex-wrap md:items-start flex-col 2xl:gap-[24px] md:gap-[16px] 2xl:mt-[136px] md:mt-[115px] 2xl:mb-[420px] md:mb-[20px] md:px-[0] px-[41px] 2xl:hidden block"
            >
              <h1 className="uppercase font-machina font-[800] text-white 2xl:text-[50px] md:text-[40px] text-[30px] md:leading-[44px] leading-[34px] 2xl:leading-[50px] max-w-[318px] 2xl:max-w-[340px] md:mb-[3px] mb-[15px]">
                <span className="words">
                  <div className="word">YVOO</div>
                  <br></br>
                  <div className="word">Scan</div>
                  <b className="text-black word">Pro+</b>
                </span>
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
                className="md:max-w-[115px] max-w-[85px] z-10 3xl:ml-[-32px] 2xl:ml-[-33px] 3xl:mb-[7px] 2xl:mb-[4px] 2xl:relative absolute md:right-[0] right-[37px] 2xl:top-[0] md:top-[-62px] top-[-29px]"
              />
              <h2 className="text-black font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] 3xl:mb-[21px] 2xl:mb-[22px] md:mb-[8px] mb-[-4px] md:pr-[150px] pr-[85px]">
                Unlock Your Supplier Potential, Maximize Audit Success!
              </h2>
              <p>
                Predictive Readiness Assessment: Our Supplier Readiness Checks
                go beyond surface-level information. We assess suppliers based
                on comprehensive data analysis and on-site evaluations conducted
                by our YVOO agents. This holistic approach enables us to predict
                their audit success rate with remarkable accuracy.
              </p>
              <p>
                Unmatched Audit Success: With YVOO's supplier assessments, you
                can confidently move forward with suppliers who have undergone
                thorough on-site evaluations. Achieve an exceptional audit
                success rate and minimize risks in your supply chain.
                (‘ScanPro+” page”)
              </p>
              <p>
                Bottom Slogan: Experience the Efficiency of our Supplier Search,
                the Precision of our Predictive Assessments, and the Confidence
                of{" "}
                <span
                  className="underline cursor-pointer"
                  onClick={() => {
                    window.open("https://scanpro.yvoo.io", "_blank");
                  }}
                >
                  Unmatched Audit Success
                </span>
                .
              </p>
              <p>
                Join YVOO Today and Revolutionize{" "}
                <span
                  className="cursor-pointer underline"
                  onClick={() => {
                    window.open("https://searchpro.yvoo.io/login", "_blank");
                  }}
                >
                  Your Procurement Process
                </span>
                .
              </p>
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
              className="flex flex-wrap items-center md:items-start md:flex-nowrap md:flex-col gap-[24px] md:mt-[132px] 3xl:mb-[420px] 2xl:mb-[398px] 2xl:block hidden"
              data-scroll
              data-scroll-speed="0.1"
            >
              <h1 className="uppercase font-machina font-[800] text-[40px] text-white 2xl:text-[50px] leading-[30px] md:leading-[40px] 2xl:leading-[52px] max-w-[318px] 2xl:max-w-[340px] mb-[32px]">
                <TypingEffect text="YVOO Scan" speed={100} delay={0} />
                <b className="text-black">
                  <TypingEffect text="Pro+" speed={100} delay={1.1} />
                </b>
              </h1>
              <div className="flex flex-col gap-[42px] md:items-start">
                <p className="font-[700] text-[18px] text-black 2xl:text-[24px] leading-[22px] 2xl:leading-[30px] max-w-[222px] md:max-w-[327px] 2xl:max-w-[340px]">
                  Unleash Supplier Readiness for Unprecedented Audit Success{" "}
                </p>
                <button className="filled_btn btn_animated_white" onClick={handleModal}>
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
