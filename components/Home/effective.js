import Image from "next/image";
import MagnifyOnScroll from "../MagnifyOnScroll";
import React, { useState, useEffect, useRef } from "react";
import ImgLeftToRight from "../ImgLeftToRight";
import LoadOnLoad from "../LoadOnLoad";

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

  const [currentCard, setCurrentCard] = useState(0);
  const [animationPhase, setAnimationPhase] = useState("fade-in");

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prevPhase) =>
        prevPhase === "fade-in" ? "fade-out" : "fade-in"
      );
      setCurrentCard((prevCard) => (prevCard === 0 ? 1 : 0));
    }, 3000); // Интервал между анимациями

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex justify-center bg-black">
      <ImgLeftToRight
        src="/icons/line-blue.svg"
        width={584}
        height={106}
        alt="line"
        classesImg="ImgLeftToRight 3xl:max-w-[584px] 2xl:max-w-[458px] md:max-w-[320px] max-w-[142px] w-[100%]"
        classesContainer="absolute overflow-hidden 3xl:max-w-[584px] 2xl:max-w-[458px] md:max-w-[320px] max-w-[142px] 3xl:top-[70px] top-[60px] right-[0px] z-[1] min-h-[152px]"
        data-scroll
        data-scroll-speed="0.5"
      />
      <LoadOnLoad>
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[1000px] mx-[auto] relative flex flex-col items-center w-full md:pt-[240px] pt-[120px]">
        <div className="flex flex-col max-w-[900px] text-center md:mb-[216px] mb-[80px] md:px-0 px-[41px]">
          <div className="md:text-[50px] text-[30px] md:leading-[58px] leading-[38px] font-[700] text-blue md:mb-[42px] mb-[32px]">
            About Us
          </div>
          <div className="md:text-[40px] text-[28px] leading-[46px] font-[700] text-white">
            We’re
          </div>
          <div className="md:text-[30px] text-[20px] md:leading-[38px] leading-[28px] font-[700] text-white">
            Redefining Supplier Audits Globally
          </div>{" "}
          <br />
          <br />
          <div className="md:text-[30px] text-[20px] md:leading-[38px] leading-[28px] font-[300] text-white">
            YVOO introduces a groundbreaking approach to audits, seamlessly
            connecting businesses with certified auditors for faster, smarter
            results.
          </div>
        </div>
        <div className="grid md:grid-cols-3 grid-cols-1 flex-nowrap 2xl:gap-[116px] gap-[40px] md:mb-[76px] mb-[80px] md:px-[0] px-[41px]">
          <div className="flex flex-col">
            <div>
              <Image
                src="/icons/CostEfficientAndScalable.svg"
                width={130}
                height={128}
                alt="triangle"
                className="mb-[20px] justify-self-center	"
              />
            </div>
            <div className="border-l-[1px] border-blue pl-[26px] h-[100%]">
              <div className="md:text-[30px] text-[20px] md:leading-[38px] leading-[28px] font-[700] text-white">
                Cost-Efficient and Scalable
              </div>
              <br />
              <div className="md:text-[20px] text-[16px] md:leading-[28px] leading-[22px] font-[300] text-white">
                Save up to <span className="text-blue font-[700]">70%</span> on
                audit costs while accelerating timelines by{" "}
                <span className="text-blue font-[700]">80%</span>, scaling
                easily to your needs.
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <Image
                src="/icons/InstantGlobalAudit.svg"
                width={117}
                height={128}
                alt="triangle"
                className="mb-[20px] justify-self-center	"
              />
            </div>
            <div className="border-l-[1px] border-blue pl-[26px] h-[100%]">
              <div className="md:text-[30px] text-[20px] md:leading-[38px] leading-[28px] font-[700] text-white">
                Instant Global Audit
              </div>
              <br />
              <div className="md:text-[20px] text-[16px] md:leading-[28px] leading-[22px] font-[300] text-white">
                YVOO provides{" "}
                <span className="text-blue font-[700]">1-click</span> access to
                certified auditors, ensuring you can book audits anytime,
                anywhere.
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              <Image
                src="/icons/AIDrivenCompliance.svg"
                width={158}
                height={122}
                alt="triangle"
                className="mb-[26px] justify-self-center	"
              />
            </div>
            <div className="border-l-[1px] border-blue pl-[26px] h-[100%]">
              <div className="md:text-[30px] text-[20px] md:leading-[38px] leading-[28px] font-[700] text-white">
                AI-Driven compliance
              </div>
              <br />
              <div className="md:text-[20px] text-[16px] md:leading-[28px] leading-[22px] font-[300] text-white">
                <span className="text-blue font-[700]">
                  AI-Generated Audit framework & guidance
                </span>{" "}
                adhering to ISO 9001, IATF 16949, and regional standards,
                ensuring comprehensive regulatory compliance across all
                locations.
              </div>
            </div>
          </div>
        </div>
        <div className="md:text-[34px] text-[24px] md:leading-[42px] leading-[32px] font-[700] text-blue md:mb-[220px] mb-[140px] text-center md:px-[0] px-[41px]">
          YVOO ScanPro+ eliminates traditional audit roadblocks, improvement in
          all metrics
        </div>
        <div className="md:text-[50px] text-[30px] md:leading-[58px] leading-[38px] font-[700] text-white md:mb-[160px] mb-[94px] text-center md:px-[0] px-[41px]">
          AI-guided audits with global reach
        </div>
        {/* <div className="text-[40px] leading-[58px] font-[400] text-white mb-[154px]">
          Audits with Global Reach
        </div> */}
        <div className="grid md:grid-cols-3 grid-cols-1 3xl:gap-[83px] md:gap-[50px] gap-[0px] 3xl:mb-[25px] mb-[0] md:px-[0] px-[41px]">
          <div className="md:hidden flex flex-col justify-center text-center items-center mb-[3px]">
            <Image
              src="/icons/line-effective-1.svg"
              width={2}
              height={58}
              alt="triangle"
              className="mx-auto"
            />
            <Image
              src="/icons/CentralAIHub.svg"
              width={106}
              height={106}
              alt="triangle"
            />
            <Image
              src="/icons/line-effective-1.svg"
              width={2}
              height={58}
              alt="triangle"
              className="mx-auto"
            />
          </div>
          <div className="flex flex-row md:gap-[25px] gap-[8px] border-blue border-[2px] rounded-[30px] 2xl:p-[42px_30px] p-[30px_20px_30px_17px] 3xl:mt-[206px] md:mt-[72px] h-[max-content] mb-[7px]">
            <div>
              <Image
                src="/icons/AIGeneratedAuditFramework.svg"
                width={92}
                height={105}
                alt="triangle"
                className="mb-[26px] justify-self-center min-w-[61px]"
              />
            </div>
            <div>
              <div className="3xl:text-[30px] md:text-[28px] text-[18px] 3xl:leading-[38px] md:leading-[36px] leading-[26px] font-[700] text-blue md:mb-[24px] mb-[12px]">
                AI-Generated <br /> Audit Framework{" "}
                <br className="md:block hidden" />& Auditor{" "}
                <br className="md:block hidden" />
                Guidance
              </div>
              <div className="md:text-[20px] text-[16px] md:leading-[28px] leading-[22px] font-[300] text-white">
                AI builds a customized audit framework and guidance, covering
                every necessary aspect objectively
              </div>
            </div>
          </div>
          <div className="md:hidden flex flex-col justify-center text-center items-center mb-[7px]">
            <Image
              src="/icons/line-effective-1.svg"
              width={2}
              height={58}
              alt="triangle"
              className="mx-auto"
            />
          </div>
          <div className="flex flex-row md:gap-[25px] gap-[8px] border-blue border-[2px] rounded-[30px] 2xl:p-[42px_30px] p-[30px_20px_30px_30px] h-[max-content] md:order-[0] md:mb-[0] mb-[8px] -order-1">
            <div>
              <Image
                src="/icons/ClickAuditRequest.svg"
                width={76}
                height={127}
                alt="triangle"
                className="mb-[26px] justify-self-center min-w-[48px]"
              />
            </div>
            <div>
              <div className="3xl:text-[30px] md:text-[28px] text-[18px] 3xl:leading-[38px] md:leading-[36px] leading-[26px] font-[700] text-blue md:mb-[24px] mb-[12px]">
                1-Click Audit Request
              </div>
              <div className="md:text-[20px] text-[16px] md:leading-[28px] leading-[22px] font-[300] text-white">
                Instant audit request tailored to your compliance needs
              </div>
            </div>
          </div>
          <div className="flex flex-row md:gap-[25px] gap-[8px] border-blue border-[2px] rounded-[30px] 2xl:p-[42px_30px] p-[30px_20px_30px_17px] 3xl:mt-[206px] md:mt-[138px] h-[max-content] md:mb-[0] mb-[5px]">
            <div>
              <Image
                src="/icons/AuditorAssignment.svg"
                width={92}
                height={121}
                alt="triangle"
                className="mb-[26px] justify-self-center min-w-[61px]"
              />
            </div>
            <div>
              <div className="3xl:text-[30px] md:text-[28px] text-[18px] 3xl:leading-[38px] md:leading-[36px] leading-[26px] font-[700] text-blue md:mb-[24px] mb-[12px]">
                Auditor <br />
                Assignment
              </div>
              <div className="md:text-[20px] text-[16px] md:leading-[28px] leading-[22px] font-[300] text-white">
                Global network of auditors assigned based on location and
                expertise
              </div>
            </div>
          </div>
          <div className="md:hidden flex flex-col justify-center text-center items-center mb-[3px]">
            <Image
              src="/icons/line-effective-2.svg"
              width={2}
              height={58}
              alt="triangle"
              className="mx-auto"
            />
          </div>
        </div>
        <div className="text-center relative w-full flex items-center justify-center md:flex hidden">
          <Image
            src="/icons/AIGuidedLines.svg"
            width={1087}
            height={761}
            alt="triangle"
            className="absolute 3xl:mt-[-124px] mt-[-90px] 3xl:max-w-[100%] 2xl:max-w-[800px] max-w-[708px] md:block hidden"
          />
          <Image
            src="/icons/CentralAIHub.svg"
            width={174}
            height={174}
            alt="triangle"
            className=""
          />
        </div>
        <div className="flex flex-col md:px-[0] px-[19px] z-[1]">
          <div className="self-center md:block hidden">
            <Image
              src="/icons/Line_9.svg"
              width={2}
              height={345}
              alt="triangle"
              className="opacity-0 3xl:max-h-[unset] max-h-[145px]"
            />
          </div>
          <div className="relative self-center text-center">
            <div className="absolute md:top-[370px] top-[157px] md:left-[153px] md:right-[unset] right-[-14px] z-[3]">
              <div
                className={`relative bg-white md:rounded-[30px] rounded-[12px] md:p-[36px_30px_26px] p-[16px_6px_12px_12px] custom-shadow mb-[20px] card text-left md:max-w-[unset] max-w-[134px]`}
              >
                <div className="md:text-[12px] text-[8px] md:leading-[16px] leading-[12px] font-[400] text-[#898989] mb-[8px]">
                  2024.24.10
                </div>
                <div className="md:text-[16px] text-[8px] md:leading-[20px] leading-[12px] font-[400] text-black md:mb-[33px] mb-[16px]">
                  Your supplier audit is scheduled on the..
                </div>
                <div className="flex flex-row justify-between">
                  <div className="md:text-[12px] text-[8px] md:leading-[16px] leading-[12px] font-[400] text-blue uppercase">
                    more info
                  </div>
                  <div className="md:text-[12px] text-[8px] md:leading-[16px] leading-[12px] font-[400] text-[#898989]">
                    Today 12:30
                  </div>
                </div>
                <Image
                  src="/icons/Notification.svg"
                  width={34}
                  height={34}
                  alt="Notification"
                  className="absolute top-[15px] right-[15px] md:max-w-[34] max-w-[14px]"
                />
              </div>
              <div
                className={`relative bg-white md:rounded-[30px] rounded-[12px] md:p-[36px_30px_26px] p-[16px_6px_12px_12px] custom-shadow card card-2 text-left md:max-w-[unset] max-w-[134px]`}
                // style={{ animationDelay: "0.5s" }}
              >
                <div className="md:text-[12px] text-[8px] md:leading-[16px] leading-[12px] font-[400] text-[#898989] mb-[8px]">
                  2024.24.10
                </div>
                <div className="md:text-[16px] text-[8px] md:leading-[20px] leading-[12px] font-[400] text-black md:mb-[33px] mb-[16px]">
                  The audit report is released.
                </div>
                <div className="flex flex-row justify-between">
                  <div className="md:text-[12px] text-[8px] md:leading-[16px] leading-[12px] font-[400] text-blue uppercase">
                    more info
                  </div>
                  <div className="md:text-[12px] text-[8px] md:leading-[16px] leading-[12px] font-[400] text-[#898989]">
                    Today 12:30
                  </div>
                </div>
                <Image
                  src="/icons/Notification.svg"
                  width={34}
                  height={34}
                  alt="Notification"
                  className="absolute top-[15px] right-[15px] md:max-w-[34] max-w-[14px]"
                />
              </div>
            </div>
            <Image
              src="/icons/IPad_1.svg"
              width={771}
              height={1014}
              alt="triangle"
              className="relative justify-self-center z-[2] md:block hidden"
            />
            <div className="absolute z-[10] top-[14px] right-[28px] md:hidden md:text-[12px] text-[8px] md:leading-[16px] leading-[12px] block p-[8px_12px] bg-blue text-black rounded-[16px] max-w-[max-content]">
              book a demo
            </div>
            <Image
              src="/icons/IPad_1-mobile.svg"
              width={322}
              height={422}
              alt="triangle"
              className="relative justify-self-center md:hidden block"
            />
            <Image
              src="/icons/Map.svg"
              width={1516}
              height={722}
              alt="triangle"
              className="relative md:block hidden md:-mt-[269px]"
            />
          </div>
        </div>
        <div className="max-h-[232px] overflow-hidden md:hidden block md:-mt-[269px] -mt-[112px] ">
            <Image
              src="/icons/Map-mobile.svg"
              width={360}
              height={232}
              alt="triangle"
              className="relative"
            />
        </div>
      </div>
      </LoadOnLoad>
    </div>
  );
}

export default Effective;
