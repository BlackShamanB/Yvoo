import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import TypingEffect from "../TypingEffect";
import MagnifyOnScroll from "../MagnifyOnScroll";
import ImgLeftToRight from "../ImgLeftToRight";
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
    <div
      id="auditor"
      className="relative w-full flex flex-col justify-center bg-white overflow-hidden"
    >
      {" "}
      <ImgLeftToRight
        src="/icons/line-blue.svg"
        width={584}
        height={106}
        alt="line"
        classesImg="3xl:max-w-[584px] 2xl:max-w-[458px] md:max-w-[320px] max-w-[142px]"
        classesContainer="absolute overflow-hidden 3xl:max-w-[584px] 2xl:max-w-[458px] md:max-w-[320px] max-w-[142px] 3xl:top-[236px] 2xl:top-[236px] md:top-[-1.5%] top-[-1%] right-[-105px] z-[1]"
        data-scroll
        data-scroll-speed="0.5"
      />
      <div className="absolute w-full bg-black h-[403px] bottom-0"></div>
      <div className="relative 3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] relative justify-center pt-[200px] gap-[133px]">
        <div className="flex flex-col justify-center mb-[150px] text-center">
          <div className="text-blue text-[50px] leading-[58px] font-[700]">
            YVOO
          </div>
          <div className="text-black text-[40px] leading-[58px] font-[400]">
            Connects seamlessly with your System
          </div>
        </div>
        <div className="relative grid grid-cols-2 gap-[80px] mb-[150px]">
          <Image
            src="/icons/Connection1.svg"
            width={65}
            height={344}
            alt="Connection1"
            className="absolute top-[50%] left-[-65px] transform -translate-y-[50%]"
          />
          <Image
            src="/icons/Connection2.svg"
            width={871}
            height={342}
            alt="Connection2"
            className="absolute top-[50%] right-[-73px] transform -translate-y-[50%]"
          />
          <div className="relative flex flex-row p-[40px_40px_70px] rounded-[30px] bg-blue gap-[30px]">
            <div>
              <Image
                src="/icons/1-ClickAuditRequest.svg"
                width={103}
                height={100}
                alt="ClickAuditRequest"
                className="min-w-[103px]"
              />
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="text-white text-[34px] leading-[42px] font-[700]">
                1-Click Audit Request
              </div>
              <div className="text-black text-[20px] leading-[30px] font-[400]">
                Simplify audit requests with just one click through YVOO's
                platform or ERP integration, reducing time and effort for
                procurement teams.
              </div>
            </div>
          </div>
          <div className="relative flex flex-row p-[40px_40px_70px] rounded-[30px] bg-blue gap-[30px]">
            <div>
              <Image
                src="/icons/YVOOAPI.svg"
                width={103}
                height={100}
                alt="YVOOAPI"
                className="min-w-[103px]"
              />
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="text-white text-[34px] leading-[42px] font-[700]">
                YVOO API
              </div>
              <div className="text-black text-[20px] leading-[30px] font-[400]">
                Easily integrate YVOO’s audit system with your existing
                procurement platforms, like SAP Ariba, Oracle, and others.
              </div>
            </div>
          </div>
          <div className="relative flex flex-row p-[40px_40px_70px] rounded-[30px] bg-blue gap-[30px]">
            <div>
              <Image
                src="/icons/RealTimeMonitoring.svg"
                width={103}
                height={100}
                alt="RealTimeMonitoring"
                className="min-w-[103px]"
              />
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="text-white text-[34px] leading-[42px] font-[700]">
                Real-Time Monitoring
              </div>
              <div className="text-black text-[20px] leading-[30px] font-[400]">
                Stay up-to-date with audit progress and get real-time
                notifications through YVOO's platform. Monitor every stage of
                the audit for full transparency.
              </div>
            </div>
          </div>
          <div className="relative flex flex-row p-[40px_40px_70px] rounded-[30px] bg-blue gap-[30px]">
            <div>
              <Image
                src="/icons/1-ClickAuditRequest.svg"
                width={103}
                height={100}
                alt="ClickAuditRequest"
                className="min-w-[103px]"
              />
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="text-white text-[34px] leading-[42px] font-[700]">
                YVOO App
              </div>
              <div className="text-black text-[20px] leading-[30px] font-[400]">
                Access audit data, reports, and real-time updates from anywhere
                using the YVOO web-based app or mobile device. Empower your team
                with 24/7 access to audit results.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[42px] rounded-[30px] p-[80px_154px] bg-mint items-center justify-center mb-[80px]">
          <div className="text-white text-[24px] leading-[30px] font-[700]">
            Trusted by Industry Leaders: YVOO Delivers Unmatched Audit Success
          </div>
          <div className="text-black text-[20px] leading-[30px] font-[400]">
            Global industry leaders rely on YVOO to streamline supplier audits,
            reduce costs, and ensure compliance with industry standards. By
            combining the power of AI with our network of certified auditors, we
            deliver unparalleled audit quality—on-demand and at scale.
            <br />
            <br />
            Want to see why our clients choose YVOO for their audit needs? Check
            out our case studies and learn how we help businesses maintain
            procurement excellence.
          </div>
          <div className="text-black text-[16px] leading-[20px] font-[500] rounded-[30px] bg-white p-[20px_64px] w-[max-content] cursor-pointer	uppercase">
            See YVOO in Action
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auditor;
