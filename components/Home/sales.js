import Image from "next/image";
import Link from "next/link";
import TypingEffect from "../TypingEffect";
import MagnifyOnScroll from "../MagnifyOnScroll";
import React, { useRef, useState, useEffect } from "react";
import ImgLeftToRight from "../ImgLeftToRight"

function Sales({ handleModal }) {
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
      id="sales"
      className="relative grid w-full w-full bg-white bg-local bg-contain bg-no-repeat bg-bottom z-29"
    >
      <div
        className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto]"
        data-scroll
        data-scroll-speed="0.3"
        
      >
        <div className="relative grid grid-cols-1 2xl:grid-cols-2 bg-white md:py-0 md:flex-center flex-col h-fit 3xl:h-[1187px] 2xl:h-[1125px] md:h-[1422px] md:px-[0] px-[41px] md:overflow-visible overflow-hidden">
          <div className="flex flex-wrap md:flex-nowrap items-center md:items-start md:flex-col 3xl:gap-[20px] 2xl:gap-[24px] md:gap-[16px] gap-[12px] 2xl:mt-[172px] md:mt-[160px] mt-[139px] 3xl:mb-[568px] 2xl:mb-[356px]">
            <Image
              src="/icons/squares-2.png"
              width={96}
              height={106}
              alt="triangle"
              className="absolute 2xl:top-[82px] top-[83px] 3xl:left-[42%] 2xl:left-[39.4%] md:left-[65.6%] mouse-parallax md:block hidden"
              data-scroll
              data-scroll-speed="0.15"
            />
            <ImgLeftToRight
              src="/icons/icon-line.svg"
              width={584}
              height={106}
              alt="line"
              classesImg="md:max-w-[584px] max-w-[360px] md:min-h-[206px] min-h-[127px]"
              classesContainer="absolute overflow-hidden 2xl:top-[57%] 2xl:top-[53%] md:top-[39.5%] top-[23.9%] 3xl:left-[-22%] 2xl:left-[-46%] md:left-[-78%] left-[57%] z-[1]"
              data-scroll
              data-scroll-speed="0.25"
            />
            <h1
              className="relative uppercase 3xl:ml-[154px] 2xl:ml-[0] font-machina font-[800] text-[#00D1EF] 2xl:text-[50px] md:text-[40px] text-[30px] 2xl:leading-[54px] md:leading-[44px] leading-[34px] max-w-[318px] 2xl:max-w-[472px]"
              ref={elementRef}
              style={{
                visibility: elementVisible ? "visible" : "hidden",
                top: elementVisible ? "0" : "50px",
                opacity: elementVisible ? "1" : "0",
                transition: "linear 0.5s",
              }}
            >
              {/* <TypingEffect text="YVOO Sales" speed={100} delay={0} /> */}
              {/* <b className="text-black">
                <TypingEffect text="Pro+" speed={100} delay={1} />
              </b> */}
              YVOO Sales<b className="text-black">Pro+</b>
            </h1>
            <div className="flex flex-col md:gap-[18px] gap-[25px] 3xl:ml-[154px] 2xl:ml-[0]">
              <p className="font-[700] 2xl:text-[24px] md:text-[20px] text-[16px] text-black 2xl:leading-[30px] md:leading-[26px] leading-[20px] max-w-[327px] 2xl:max-w-[327px]">
                Unlock Your Supplier Potential and Maximize Your Business Growth{" "}
              </p>
              <button
                className="filled_btn 2xl:mt-[24px] md:mt-[10px] btn_animated_black"
                onClick={handleModal}
              >
                Request demo
              </button>
            </div>
            <MagnifyOnScroll
              src="/images/buisness-growth.webp"
              width={748}
              height={523}
              alt="yvoo-sales"
              classes="2xl:absolute relative 2xl:left-[-92px] 2xl:bottom-[120px] 3xl:ml-[90px] 2xl:ml-[-22px] md:ml-[-62px] ml-[-41px] 2xl:mt-[24px] md:mt-[18px] mt-[24px] 3xl:min-w-[748px] 2xl:min-w-[660px] md:min-w-[538px] 2xl:max-w-[660px] md:max-w-[538px] max-w-[262px]"
            />
          </div>
          <div
            style={{
              position: "relative",
              transform: "translateZ(-10px)",
              transformStyle: "preserve-3d",
            }}
            className="bg-white md:py-0 md:flex-center flex-col h-auto md:h-[918px] 2xl:h-[1187px] 3xl:pl-[84px] 2xl:pl-[54px]"
          >
            <Image
              style={{ zIndex: 0, transform: "translateZ(10px)" }}
              src="/icons/brain-3.svg"
              width={111}
              height={120}
              alt="yvoo-search"
              className="z-10 3xl:ml-[-15px] 2xl:ml-[-20px] md:ml-[-31px] md:max-w-[111px] max-w-[74px] 2xl:mt-[152px] md:mt-[-72px] mt-[-51px] 2xl:mb-[37px] mb-[32px]"
              data-scroll
              data-scroll-speed="0.2"
            />
            <div
              style={{
                position: "relative",
                transform: "translateZ(10px)",
              }}
              className="text-black md:mb-0 mb-[100px] 2xl:mt-[0] max-w-[674px] flex flex-col 3xl:gap-4 2xl:gap-[17px] md:gap-[20px] gap-[19px] font-[400] leading-[20px] [&>p]:text-[14px] [&>p]:md:text-[16px]"
              data-scroll
              data-scroll-speed="0.4"
            >
              <p>
                At YVOO, we understand the challenges suppliers face in finding
                new opportunities, expanding their network, and increasing their
                visibility in the market. That's why we've built YVOO SalesPro+,
                a platform specifically designed to revolutionize supplier
                search and audits, empowering you to thrive in the ever-evolving
                business landscape.
              </p>
              <h2 className="2xl:text-[24px] md:text-[20px] text-[16px] font-[500] leading-[20px]">
                Benefits for Suppliers:
              </h2>
              <ul className="md:pl-[25px] pl-[22px] 3xl:mt-[10px] 2xl:mt-[6px] 3xl:mb-[0px] 2xl:mb-[3px] list-disc list-outside md:text-[16px] text-[14px] leading-[20px]">
                <li>
                  Reach a global audience of potential buyers and clients.{" "}
                </li>
                <li>
                  Expand your business network and connect with reliable
                  partners.
                </li>
                <li>
                  Increase visibility and exposure to new business
                  opportunities.
                </li>
                <li>
                  Access real-time market data and insights to make informed
                  decisions.
                </li>
                <li>
                  Streamline your sales process and save time and resources.
                </li>
              </ul>
              <p>
                Don't miss out on the chance to supercharge your sales efforts.
                Join YVOO SalesPro+ and experience a safe and secure platform
                that prioritizes your data security. Connect with potential
                customers with confidence, knowing that your information is
                protected. <br></br>
                <Link className="cursor-pointer underline" href={"/supplier"}>
                  Register now to get started.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sales;
