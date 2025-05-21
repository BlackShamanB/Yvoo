import Image from "next/image";
import MagnifyOnScroll from "../MagnifyOnScroll";
import React, { useState, useEffect, useRef } from "react";
import ImgLeftToRight from "../ImgLeftToRight";
import LoadOnLoad from "../LoadOnLoad";
import { useRive } from "@rive-app/react-canvas";

function Effective({ handleModal }) {
  const elementRef = useRef(null);
  const [elementVisible, setelementVisible] = useState(false);

  const { RiveComponent } = useRive({
    src: "/animation/23.riv", // Путь от public/
    stateMachines: ["State Machine 1"], // Если используется
    autoplay: true,
  });


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
        classesImg="ImgLeftToRight 3xl:max-w-[584px] 2xl:max-w-[458px] md2:max-w-[320px] max-w-[142px] w-[100%]"
        classesContainer="absolute overflow-hidden 3xl:max-w-[584px] 2xl:max-w-[458px] md2:max-w-[320px] max-w-[142px] 3xl:top-[70px] top-[60px] right-[0px] z-[1] min-h-[152px]"
        data-scroll
        data-scroll-speed="0.5"
      />
      <LoadOnLoad>
        <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md2:max-w-[1000px] mx-[auto] relative flex flex-col items-center w-full md2:pt-[241px] pt-[120px]">
          <div className="flex flex-col max-w-[900px] text-center md2:mb-[216px] mb-[80px] md2:px-0 px-[41px]">
            <div className="md2:text-[50px] text-[30px] md2:leading-[58px] leading-[38px] font-[700] text-blue md2:mb-[42px] mb-[32px]">
              About Us
            </div>
            <div className="md2:text-[40px] text-[28px] leading-[46px] font-[700] text-white">
              We’re
            </div>
            <div className="md2:text-[30px] text-[20px] md2:leading-[38px] leading-[28px] font-[700] text-white mb-[38px]">
              Redefining Supplier Audits Globally
            </div>
            <div className="md2:text-[30px] text-[20px] md2:leading-[38px] leading-[28px] font-[300] text-white">
              YVOO introduces a groundbreaking approach to audits, seamlessly
              connecting businesses with certified auditors for faster, smarter
              results.
            </div>
          </div>
          <div className="grid md2:grid-cols-3 grid-cols-1 flex-nowrap 2xl:gap-[116px] gap-[40px] md2:mb-[76px] mb-[80px] md2:px-[0] px-[41px]">
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
                <div className="md2:text-[30px] text-[20px] md2:leading-[38px] leading-[28px] font-[700] text-white">
                  Cost-Efficient and Scalable
                </div>
                <br />
                <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[300] text-white">
                  Save up to <span className="text-blue font-[700]">70%</span>{" "}
                  on audit costs while accelerating timelines by{" "}
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
                <div className="md2:text-[30px] text-[20px] md2:leading-[38px] leading-[28px] font-[700] text-white">
                  Instant Global Audit
                </div>
                <br />
                <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[300] text-white">
                  YVOO provides{" "}
                  <span className="text-blue font-[700]">1-click</span> access
                  to certified auditors, ensuring you can book audits anytime,
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
                <div className="md2:text-[30px] text-[20px] md2:leading-[38px] leading-[28px] font-[700] text-white">
                  AI-Driven compliance
                </div>
                <br />
                <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[300] text-white">
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
          <div className="md2:text-[34px] text-[24px] md2:leading-[42px] leading-[32px] font-[700] text-blue md:mb-[276px] mb-[140px] text-center md2:px-[0] px-[41px]">
            YVOO ScanPro+ eliminates traditional audit roadblocks, improvement
            in all metrics
          </div>
          <div className="md2:text-[50px] text-[30px] md2:leading-[58px] leading-[38px] font-[700] text-white md:mb-[120px] mb-[94px] text-center md2:px-[0] px-[41px]">
            Tap into Our Global Network of
            <br /> Certified Auditors –{" "}
            <span className="text-blue">On-Demand</span> &{" "}
            <span className="text-blue">AI-Powered</span>
          </div>
          <div className="flex flex-row gap-[60px] mb-[130px]">
            <div className="flex flex-col gap-[4px]">
              <div className="font-[500] text-[16px] leading-[20px] text-blue">
                Certified Auditors
              </div>
              <div className="font-[700] text-[80px] leading-[88px]">
                2.000+
              </div>
            </div>
            <div className="flex flex-col gap-[4px]">
              <div className="font-[500] text-[16px] leading-[20px] text-blue">
                Coverage{" "}
              </div>
              <div className="font-[700] text-[80px] leading-[88px]">
                90+ countries{" "}
              </div>
            </div>
          </div>
          <div className="mb-[164px] whitespace-nowrap rounded-[30px] filled_btn_primary btn_animated_blue hover:!text-black !text-[#06D7F9] 2xl:!text-[16px] !text-[12px] 2xl:!leading-[20px] !leading-[16px] md:!p-[18px_32px] !p-[14px_32px] !w-[max-content] !max-w-[max-content]">
            Find Your Auditor Now
          </div>
          <div className="relative grid md2:grid-cols-3 grid-cols-1 3xl:gap-[83px] md2:gap-[50px] gap-[0px] md2:px-[0] px-[41px]">
            <div className="md2:hidden z-[1] bg-black flex flex-col justify-center text-center items-center md2:mb-[3px] mb-[64px]">
              <Image
                src="/icons/CentralAIHub.svg"
                width={106}
                height={106}
                alt="triangle"
              />
            </div>
            <div className="flex z-[1] bg-black flex-row md2:gap-[23px] gap-[8px] border-blue border-[2px] rounded-[30px] 2xl:p-[40px_28px] p-[30px_20px_30px_17px] 3xl:mt-[92px] md2:mt-[72px] h-[max-content] md2:mb-[7px] mb-[72px]">
              <div>
                <Image
                  src="/icons/AIGeneratedAuditFramework.svg"
                  width={92}
                  height={105}
                  alt="triangle"
                  className="md:min-w-[92px] mb-[26px] justify-self-center min-w-[61px]"
                />
              </div>
              <div>
                <div className="3xl:text-[30px] md2:text-[28px] text-[18px] 3xl:leading-[38px] md2:leading-[36px] leading-[26px] font-[700] text-blue md2:mb-[24px] mb-[12px]">
                  AI-Generated <br /> Audit Framework{" "}
                  <br className="md2:block hidden" />& Auditor{" "}
                  <br className="md2:block hidden" />
                  Guidance
                </div>
                <div className="md2:text-[20px] text-[                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      6px] md2:leading-[28px] leading-[22px] font-[300] text-white">
                  AI builds a customized audit framework and guidance, covering
                  every necessary aspect objectively
                </div>
              </div>
            </div>
            <div className="flex z-[1] bg-black flex-row md2:gap-[23px] gap-[8px] border-blue border-[2px] rounded-[30px] 2xl:p-[40px_28px] p-[30px_20px_30px_30px] h-[max-content] md2:order-[0] md2:mb-[0] mb-[72px] -order-1">
              <div>
                <Image
                  src="/icons/ClickAuditRequest.svg"
                  width={76}
                  height={127}
                  alt="triangle"
                  className="md:min-w-[76px] mb-[26px] justify-self-center min-w-[48px]"
                />
              </div>
              <div>
                <div className="3xl:text-[30px] md2:text-[28px] text-[18px] 3xl:leading-[38px] md2:leading-[36px] leading-[26px] font-[700] text-blue md2:mb-[24px] mb-[12px]">
                  1-Click
                  <br /> Audit Request
                </div>
                <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[300] text-white">
                  Instant audit request tailored to your compliance needs
                </div>
              </div>
            </div>
            <div className="flex flex-row z-[1] bg-black md2:gap-[23px] gap-[8px] border-blue border-[2px] rounded-[30px] 2xl:p-[40px_28px] p-[30px_20px_30px_17px] 3xl:mt-[197px] md2:mt-[138px] h-[max-content] md2:mb-[0] mb-[72px]">
              <div>
                <Image
                  src="/icons/AuditorAssignment.svg"
                  width={92}
                  height={121}
                  alt="triangle"
                  className="md:min-w-[92px] mb-[26px] justify-self-center min-w-[61px]"
                />
              </div>
              <div>
                <div className="3xl:text-[30px] md2:text-[28px] text-[18px] 3xl:leading-[38px] md2:leading-[36px] leading-[26px] font-[700] text-blue md2:mb-[24px] mb-[12px]">
                  Auditor <br />
                  Assignment
                </div>
                <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[300] text-white">
                  Global network of auditors assigned based on location and
                  expertise
                </div>
              </div>
            </div>
            <object
              type="image/svg+xml"
              data="/icons/bg-line-effective-mobile.svg"
              width={10}
              className="absolute h-[100%] md2:hidden block w-[100%]"
              height={105}
            >
              Ваш браузер не поддерживает SVG
            </object>
          </div>
          <div className="relative w-full -mt-[218px]">
            <div className="relative">
              <div
                style={{ width: "100%", height: "2020px" }}
                className="left-[0] -top-[244px]"
              >
                <RiveComponent />
              </div>
            </div>
          </div>
          <div className="max-h-[232px] overflow-hidden md2:hidden block md2:-mt-[269px] -mt-[112px] ">
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
