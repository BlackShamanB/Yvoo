import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import TypingEffect from "../TypingEffect";
import MagnifyOnScroll from "../MagnifyOnScroll";
function Auditor() {
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
    <div className="relative grid w-full w-full bg-[transparent]">
      <Image
        src="/icons/arch-2.png"
        width={316}
        height={275}
        alt="triangle"
        className="md:block absolute 3xl:top-[-193px] 2xl:top-[-139px] md:top-[-11.5%] top-[-9%] 3xl:right-[8.5%] 2xl:right-[131px] md:right-[7%] right-[6%] mouse-parallax 3xl:max-w-[316px] 2xl:max-w-[230px] md:max-w-[230px] max-w-[162px]"

        data-scroll
        data-scroll-speed="0.2"
      />
      <Image
        src="/icons/squares-3.png"
        width={145}
        height={140}
        alt="triangle"
        className="md:block absolute 2xl:top-[151px] md:top-[27.3%] top-[20.9%] 2xl:right-[0%] md:right-[3.7%] right-[2%] 2xl:max-w-[unset] md:max-w-[110px] max-w-[70px] mouse-parallax"

        data-scroll
        data-scroll-speed="0.4"
      />
      <Image
        src="/icons/message-icon.png"
        width={280}
        height={204}
        alt="triangle"
        className="md:block absolute 3xl:top-[643px] 2xl:top-[85.7%] md:top-[91%] top-[95.4%] 3xl:right-[17.5%] 2xl:right-[9.3%] md:right-[6%] right-[0%] 2xl:max-w-[unset] md:max-w-[220px] max-w-[147px] mouse-parallax"

        data-scroll
        data-scroll-speed="0.1"
      />
      <div
        className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] md:px-[0] px-[41px]"

        data-scroll
        data-scroll-speed="0.3"
      >
        <div className="relative grid grid-cols-1 2xl:grid-cols-2 w-full h-auto md:pt-[0] pt-[101px]">
          <div className="w-full bg-right bg-no-repeat">
            <MagnifyOnScroll
              src="/images/auditorPhoto3xl.webp"
              width={900}
              height={579}
              alt="yvoo-sales"
              imgClasses="3xl:w-[900px] 2xl:w-[900px] md:w-[476px] w-[221px]"
              classes="3xl:block hidden relative md:ml-[0] ml-[0] 2xl:mt-[100px] md:mt-[120px] 3xl:w-[900px] 3xl:min-w-[900px] 2xl:w-[900px] md:w-[476px] w-[221px] 3xl:left-[-153px]"
            />
            <MagnifyOnScroll
              src="/images/auditorPhoto2xl.webp"
              width={546}
              height={364}
              alt="yvoo-sales"
              classes="block 3xl:hidden 2xl:block relative 3xl:ml-[154px] md:ml-[0] ml-[0] 2xl:mt-[100px] md:mt-[120px] 3xl:w-[592px] 2xl:w-[546px] md:w-[476px] w-[221px] 3xl:max-w-[592px] 2xl:max-w-[546px] md:max-w-[476px] max-w-[221px]"
            />
            <Image
              src="/icons/greenTriangle-3.png"
              width={116}
              height={139}
              alt="triangle"
              className="3xl:block 2xl:hidden block absolute 2xl:top-[454px] md:top-[50px] top-[63px] 2xl:left-[40%] md:left-[7%] left-[9%] mouse-parallax 2xl:max-w-[116px] md:max-w-[102px] max-w-[42px]"
              data-scroll
              data-scroll-speed="0.2"
            />
            {/* <div className="customxs:hidden absolute inset-0 bg-black opacity-40"></div> */}
          </div>
          <div
            className="3xl:pl-[84px] 2xl:pl-[54px] w-full flex flex-col 2xl:pt-[126px] md:pt-[91px] pt-[47px] 2xl:pb-[59px] md:pb-[60px] pb-[40px]"
            data-scroll
            data-scroll-speed="0.1"
          >
            <h1
              className=" relative uppercase 2xl:mb-[42px] mb-[24px] text-[#06D7F9] font-machina font-[800] 2xl:text-[50px] md:text-[40px] text-[30px] 2xl:leading-[54px] md:leading-[44px] leading-[34px] 2xl:max-w-[525px] md:max-w-[504px] max-w-[unset]"
              ref={elementRef}
              style={{
                visibility: elementVisible ? "visible" : "hidden",
                top: elementVisible ? "0" : "50px",
                opacity: elementVisible ? "1" : "0",
                transition: "linear 0.5s",
              }}
            >
              {/* <TypingEffect text="Join the Team of" speed={100} delay={0} />
            <TypingEffect text="YVOO auditors" speed={100} delay={1.6} /> */}
              Join the Team of YVOO auditors
            </h1>
            <div className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] mb-[24px]">Join YVOO’s Global Auditor Network</div>
            <div className="font-[400] 2xl:text-[16px] md:text-[20px] text-[16px] 2xl:leading-[20px] md:leading-[26px] leading-[20px] mb-[42px]">Become part of a trusted group of skilled auditors, working on high-impact projects for leading companies worldwide</div>
            <div className="max-w-[683px] flex flex-col gap-[20px] font-[400] md:text-[16px] text-[14px] leading-[20px]">
              <div className="font-[700] 2xl:text-[30px] md:text-[26px] text-[22px] 2xl:leading-[38px] md:leading-[32px] leading-[28px] mb-[24px]">Professional Independence with a Strong Framework</div>
              <div className="flex gap-[9px] items-start	">
                <Image
                  src="/icons/checkWhite.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className=""
                />
                <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
                  Work with flexibility while following standardized procedures to ensure global consistency and quality
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
                <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] mb-[22px]">
                  Contribute your expertise to projects that make a real difference in supply chain integrity
                </div>
              </div>
              <div className="font-[700] 2xl:text-[30px] md:text-[26px] text-[22px] 2xl:leading-[38px] md:leading-[32px] leading-[28px] mb-[22px]">Why YVOO is Right for You</div>

              <div className="flex gap-[9px] items-start	">
                <Image
                  src="/icons/checkWhite.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className=""
                />
                <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px]">
                  Collaborate on high-impact projects with world-leading companies
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
                  Stay at the forefront of the industry with ongoing training and access to cutting-edge technology
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
                <div className="font-[400] 2xl:text-[24px] md:text-[20px] text-[16px] 2xl:leading-[30px] md:leading-[26px] leading-[20px] mb-[22px]">
                  Join a respected global network of professionals who deliver excellence in every audit
                </div>
              </div>
            </div>
            <div className="text-[#06D7F9] font-[700] 2xl:text-[30px] md:text-[26px] text-[22px] 2xl:leading-[38px] md:leading-[32px] leading-[28px]">Ready to advance your career? Join YVOO today</div>

            <Link href={"/auditors"}>
              <button className="filled_btn_blue hover:text-[#fff] 2xl:mt-[48px] md:mt-[36px] mt-[24px] md:max-w-[223px] max-w-[136px] btn_animated_blue">
                Apply now
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Image
        src="/images/bg-footer2xl-1.png"
        width={905}
        height={905}
        alt="yvoo-sales"
        style={{ mixBlendMode: "screen" }}
        className="hidden 2xl:block 2xl:object-contain absolute 3xl:ml-[-109px] 2xl:ml-[-109px] 2xl:mt-[203px] h-[812px]"

      />
      <Image
        src="/images/bg-footermd-1.png"
        width={905}
        height={905}
        alt="yvoo-sales"
        style={{ mixBlendMode: "screen" }}
        className="2xl:hidden md:block hidden  absolute mt-[58px] h-[649px] w-[378px]"

      />
      <Image
        src="/images/bg-footer-1.png"
        width={905}
        height={905}
        alt="yvoo-sales"
        style={{ mixBlendMode: "screen" }}
        className="md:hidden block 2xl:object-contain md:block absolute 3xl:ml-[-109px] 2xl:ml-[-109px] 2xl:mt-[203px] h-[328px] w-[176px] mt-[65px]"

      />
    </div>
  );
}

export default Auditor;
