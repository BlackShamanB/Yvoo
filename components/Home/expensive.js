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
    <div className="relative w-full flex flex-col justify-center bg-white">
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[748px] mx-[auto] relative flex flex-col justify-center pt-[140px] pb-[86px]">
        <div className="text-blue text-[50px] leading-[58px] font-[700] text-center mb-[16px]">
          Why YVOO?
        </div>
        <div className="text-center mb-[40px]">
          <Image
            src="/icons/Connection.svg"
            width={1183}
            height={132}
            alt="triangle"
            className="mx-[auto] 2xl:max-w-[unset] max-w-[588px] md:block hidden"
          />
        </div>
        <div className="grid md:grid-cols-4 grid-cols-1 2xl:gap-[59px] gap-[20px] md:px-0 px-[41px]">
          <div className="flex flex-col gap-[20px]">
            <div className="justify-items-center">
              <Image
                src="/icons/GlobalAudit.svg"
                width={82}
                height={80}
                alt="triangle"
                className=""
              />
            </div>
            <div>
              <div className="text-black text-[24px] leading-[30px] font-[600]">
                Instant Global Audit Access
              </div>
              <br />
              <div className="text-black text-[24px] leading-[30px] font-[400]">
                YVOO provides one-click access to certified auditors, ensuring
                you can book audits anytime, anywhere.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="justify-items-center">
              <Image
                src="/icons/AIDrivenObjectivity.svg"
                width={84}
                height={80}
                alt="triangle"
                className=""
              />
            </div>
            <div>
              <div className="text-black text-[24px] leading-[30px] font-[600]">
                AI-Driven Objectivity
              </div>
              <br />
              <div className="text-black text-[24px] leading-[30px] font-[400]">
                Our AI-guided audits deliver unmatched objectivity and precision
                in supplier assessments.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="justify-items-center">
              <Image
                src="/icons/RealTimeAuditTracking.svg"
                width={81}
                height={80}
                alt="triangle"
                className=""
              />
            </div>
            <div>
              <div className="text-black text-[24px] leading-[30px] font-[600]">
                Real-Time Audit Tracking
              </div>
              <br />
              <div className="text-black text-[24px] leading-[30px] font-[400]">
                Track your audit progress live, and communicate with auditors in
                real-time for greater transparency.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[20px]">
            <div className="justify-items-center">
              <Image
                src="/icons/CostEfficientandScalable.svg"
                width={81}
                height={80}
                alt="triangle"
                className=""
              />
            </div>
            <div>
              <div className="text-black text-[24px] leading-[30px] font-[600]">
                Cost-Efficient and Scalable
              </div>
              <br />
              <div className="text-black text-[24px] leading-[30px] font-[400]">
                Save up to 70% on audit costs while accelerating timelines by
                80%, scaling easily to your needs.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expensive;
