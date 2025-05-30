import Image from "next/image";
import Link from "next/link";
import TypingEffect from "../TypingEffect";
import MagnifyOnScroll from "../MagnifyOnScroll";
import React, { useState, useEffect, useRef } from "react";
import LoadOnLoad from "../LoadOnLoad";
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
    <div className="relative w-full flex flex-col justify-center bg-white">
      <LoadOnLoad>
        <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md2:max-w-[748px] mx-[auto] relative flex flex-col justify-center md2:pt-[46px] pt-[100px] md2:pb-[300px] pb-[100px]">
          <div className="text-blue md2:text-[50px] text-[30px] md2:leading-[58px] leading-[38px] font-[700] text-center md2:mb-[16px] mb-[135px]">
            Why YVOO?
          </div>
          <div className="text-center md2:mb-[33px] mb-[5px]">
            <Image
              src="/icons/Connection.svg"
              width={1183}
              height={132}
              alt="triangle"
              className="mx-[auto] 2xl:max-w-[unset] max-w-[588px] md2:block hidden"
            />
          </div>
          <div className="relative grid md2:grid-cols-4 grid-cols-1 2xl:gap-[59px] gap-[30px] md2:px-0 px-[41px]">
            <div className="z-[1] bg-white flex flex-col gap-[20px] md2:mb-[0] mb-[40px] md2:pt-[0] pt-[20px] md2:pb-[0] pb-[30px]">
              <div className="justify-items-center">
                <Image
                  src="/icons/GlobalAudit.svg"
                  width={82}
                  height={80}
                  alt="triangle"
                  className=""
                />
              </div>
              <div className="leading-[30px]">
                <div className="text-black md2:text-[24px] text-[18px] md2:leading-[30px] leading-[26px] font-[600]">
                  Instant Global Audit Access
                </div>
                <br />
                <div className="text-black md2:text-[20px] text-[16px] md2:leading-[30px] leading-[22px] font-[400]">
                  YVOO provides one-click access to certified auditors, ensuring
                  you can book audits anytime, anywhere.
                </div>
              </div>
            </div>
            <div className="z-[1] bg-white flex flex-col gap-[20px] md2:mb-[0] mb-[40px] md2:pt-[0] pt-[30px] md2:pb-[0] pb-[30px]">
              <div className="justify-items-center">
                <Image
                  src="/icons/AIDrivenObjectivity.svg"
                  width={84}
                  height={80}
                  alt="triangle"
                  className=""
                />
              </div>
              <div className="leading-[30px]">
                <div className="text-black md2:text-[24px] text-[18px] md2:leading-[30px] leading-[26px] font-[600]">
                  AI-Driven Objectivity
                </div>
                <br />
                <div className="text-black md2:text-[20px] text-[16px] md2:leading-[30px] leading-[22px] font-[400]">
                  Our AI-guided audits deliver unmatched objectivity and
                  precision in supplier assessments.
                </div>
              </div>
            </div>
            <div className="z-[1] bg-white flex flex-col gap-[20px] md2:mb-[0] mb-[40px] md2:pt-[0] pt-[30px] md2:pb-[0] pb-[30px]">
              <div className="justify-items-center">
                <Image
                  src="/icons/RealTimeAuditTracking.svg"
                  width={81}
                  height={80}
                  alt="triangle"
                  className=""
                />
              </div>
              <div className="leading-[30px]">
                <div className="text-black md2:text-[24px] text-[18px] md2:leading-[30px] leading-[26px] font-[600]">
                  Real-Time Tracking
                </div>
                <br />
                <div className="text-black md2:text-[20px] text-[16px] md2:leading-[30px] leading-[22px] font-[400]">
                  Track your audit progress live, and communicate with auditors
                  in real-time for greater transparency.
                </div>
              </div>
            </div>
            <div className="z-[1] bg-white flex flex-col gap-[20px] md2:pt-[0] pt-[30px]">
              <div className="justify-items-center">
                <Image
                  src="/icons/CostEfficientandScalable.svg"
                  width={81}
                  height={80}
                  alt="triangle"
                  className=""
                />
              </div>
              <div className="leading-[30px]">
                <div className="text-black md2:text-[24px] text-[18px] md2:leading-[30px] leading-[26px] font-[600]">
                  Cost-Efficient and Scalable
                </div>
                <br />
                <div className="text-black md2:text-[20px] text-[16px] md2:leading-[30px] leading-[22px] font-[400]">
                  Save up to 70% on audit costs while accelerating timelines by
                  80%, scaling easily to your needs.
                </div>
              </div>
            </div>
            <Image
              src="/icons/Line-expensive.svg"
              width={10}
              height={66}
              alt="line"
              className="absolute h-[100%] md2:hidden block w-[100%] -mt-[135px]"
            />
          </div>
        </div>
      </LoadOnLoad>
    </div>
  );
}

export default Expensive;
