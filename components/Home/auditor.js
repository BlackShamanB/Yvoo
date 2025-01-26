import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import TypingEffect from "../TypingEffect";
import MagnifyOnScroll from "../MagnifyOnScroll";
import ImgLeftToRight from "../ImgLeftToRight";
import LoadOnLoad from "../LoadOnLoad";
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
      <div className="relative 3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[728px] max-w-[100%] mx-[auto] relative justify-center md:pt-[200px] pt-[120px] gap-[133px] md:px-0 px-[12px]">
        <div className="flex flex-col justify-center mb-[150px] text-center">
          <div className="text-blue md:text-[50px] text-[30px] md:leading-[58px] leading-[38px] font-[700]">
            YVOO
          </div>
          <div className="text-black md:text-[40px] text-[28px] md:leading-[58px] leading-[38px] font-[400]">
            Connects seamlessly with your System
          </div>
        </div>
        <LoadOnLoad>
          <div className="relative grid md:grid-cols-2 grid-cols-1 md:gap-[80px] gap-[40px] md:mb-[150px] mb-[98px] md:px-0">
            {/* <Image
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
          /> */}
            <div className="absolute 2xl:w-[calc(100%_+_146px)] md:w-[calc(100%_+_20px)] w-[calc(100%_-_57px)] 3xl:h-[344px] md:h-[600px] h-[calc(100%_+_110px)] 2xl:top-[131px] md:top-[320px] -top-[55px] 2xl:-left-[73px] md:-left-[10px] md:ml-[unset] md:translate-x-[0] -translate-x-[50%] left-[50%]">
              <Image
                src="/icons/Connection-manufacturing.svg"
                width={1661}
                height={344}
                alt="Connection2"
                className="relative md:block hidden md:h-[344px] h-[calc(100%_+_110px)] md:ml-[unset] -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] min-w-[100%]"
              />
              <Image
              src="/icons/Connection-manufacturing-mobile.svg"
              width={1661}
              height={344}
              alt="Connection2"
              className="relative md:hidden block h-[1255px] max-h-[100%] md:ml-[unset] -translate-x-[50%] left-[50%] min-w-[100%]"
            />
            </div>
            <div className="relative flex flex-row 2xl:p-[40px_40px_70px] p-[28px_29px] rounded-[30px] bg-blue md:gap-[30px] gap-[10px]">
              <div className="flex items-center">
                <Image
                  src="/icons/1-ClickAuditRequest.svg"
                  width={103}
                  height={100}
                  alt="ClickAuditRequest"
                  className="md:min-w-[103px] md:max-w-[103px] max-w-[77px]"
                />
              </div>
              <div className="flex flex-col md:gap-[20px] gap-[12px]">
                <div className="text-white md:text-[34px] text-[24px] md:leading-[42px] leading-[32px] font-[700]">
                  1-Click Audit Request
                </div>
                <div className="text-black md:text-[20px] text-[16px] md:leading-[30px] leading-[22px] font-[400] md:mb-[0] mb-[20px]">
                  Simplify audit requests with just one click through YVOO's
                  platform or ERP integration, reducing time and effort for
                  procurement teams.
                </div>
              </div>
            </div>
            <div className="relative flex flex-row 2xl:p-[40px_40px_70px] p-[28px_29px] rounded-[30px] bg-blue md:gap-[30px] gap-[10px]">
              <div className="flex items-center">
                <Image
                  src="/icons/YVOOAPI.svg"
                  width={103}
                  height={100}
                  alt="YVOOAPI"
                  className="md:min-w-[103px] md:max-w-[103px] max-w-[78px]"
                />
              </div>
              <div className="flex flex-col md:gap-[20px] gap-[12px]">
                <div className="text-white md:text-[34px] text-[24px] md:leading-[42px] leading-[32px] font-[700]">
                  YVOO API
                </div>
                <div className="text-black md:text-[20px] text-[16px] md:leading-[30px] leading-[22px] font-[400]">
                  Easily integrate YVOO’s audit system with your existing
                  procurement platforms, like SAP Ariba, Oracle, and others.
                </div>
              </div>
            </div>
            <div className="relative flex flex-row 2xl:p-[40px_40px_70px] p-[28px_29px] rounded-[30px] bg-blue md:gap-[30px] gap-[10px]">
              <div className="flex items-center">
                <Image
                  src="/icons/RealTimeMonitoring.svg"
                  width={103}
                  height={100}
                  alt="RealTimeMonitoring"
                  className="md:min-w-[103px] md:max-w-[103px] max-w-[78px]"
                />
              </div>
              <div className="flex flex-col md:gap-[20px] gap-[12px]">
                <div className="text-white md:text-[34px] text-[24px] md:leading-[42px] leading-[32px] font-[700]">
                  Real-Time Monitoring
                </div>
                <div className="text-black md:text-[20px] text-[16px] md:leading-[30px] leading-[22px] font-[400]">
                  Stay up-to-date with audit progress and get real-time
                  notifications through YVOO's platform. Monitor every stage of
                  the audit for full transparency.
                </div>
              </div>
            </div>
            <div className="relative flex flex-row 2xl:p-[40px_40px_70px] p-[28px_29px] rounded-[30px] bg-blue md:gap-[30px] gap-[10px]">
              <div className="flex items-center">
                <Image
                  src="/icons/1-ClickAuditRequest.svg"
                  width={103}
                  height={100}
                  alt="ClickAuditRequest"
                  className="md:min-w-[103px] md:max-w-[103px] max-w-[78px]"
                />
              </div>
              <div className="flex flex-col md:gap-[20px] gap-[12px]">
                <div className="text-white md:text-[34px] text-[24px] md:leading-[42px] leading-[32px] font-[700]">
                  YVOO App
                </div>
                <div className="text-black md:text-[20px] text-[16px] md:leading-[30px] leading-[22px] font-[400]">
                  Access audit data, reports, and real-time updates from
                  anywhere using the YVOO web-based app or mobile device.
                  Empower your team with 24/7 access to audit results.
                </div>
              </div>
            </div>
          </div>
        </LoadOnLoad>
        <LoadOnLoad>
          <div className="flex flex-col md:gap-[42px] gap-[20px] rounded-[30px] md:p-[80px_154px] p-[60px_29px] bg-mint items-center justify-center mb-[80px]">
            <div className="text-white md:text-[24px] text-[18px] md:leading-[30px] leading-[26px] font-[700]">
              Trusted by Industry Leaders: YVOO Delivers Unmatched Audit Success
            </div>
            <div className="text-black md:text-[20px] text-[16px] md:leading-[30px] leading-[22px] font-[400]">
              Global industry leaders rely on YVOO to streamline supplier
              audits, reduce costs, and ensure compliance with industry
              standards. By combining the power of AI with our network of
              certified auditors, we deliver unparalleled audit
              quality—on-demand and at scale.
              <br />
              <br />
              Want to see why our clients choose YVOO for their audit needs?
              Check out our case studies and learn how we help businesses
              maintain procurement excellence.
            </div>
            <div className="text-black md:text-[16px] text-[12px] md:leading-[20px] leading-[16px] font-[500] rounded-[30px] bg-white p-[20px_64px] w-[max-content] cursor-pointer uppercase">
              See YVOO in Action
            </div>
          </div>
        </LoadOnLoad>
      </div>
    </div>
  );
}

export default Auditor;
