import Image from "next/image";
import MagnifyOnScroll from "../MagnifyOnScroll";
import React, { useState, useEffect, useRef } from "react";
import ImgLeftToRight from "../ImgLeftToRight";

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
      setAnimationPhase((prevPhase) => (prevPhase === "fade-in" ? "fade-out" : "fade-in"));
      setCurrentCard((prevCard) => (prevCard === 0 ? 1 : 0));
    }, 3000); // Интервал между анимациями

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="relative w-full flex justify-center bg-black">
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] relative flex flex-col items-center w-full pt-[240px]">
        <div className="flex flex-col max-w-[900px] text-center mb-[216px]">
          <div className="text-[50px] leading-[58px] font-[700] text-blue mb-[42px]">
            About Us
          </div>
          <div className="text-[40px] leading-[46px] font-[700] text-white">
            We’re
          </div>
          <div className="text-[30px] leading-[38px] font-[700] text-white">
            Redefining Supplier Audits Globally
          </div>{" "}
          <br />
          <br />
          <div className="text-[30px] leading-[38px] font-[300] text-white">
            YVOO introduces a groundbreaking approach to audits, seamlessly
            connecting businesses with certified auditors for faster, smarter
            results.
          </div>
        </div>
        <div className="grid grid-cols-3 flex-nowrap gap-[116px] mb-[76px]">
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
              <div className="text-[30px] leading-[38px] font-[700] text-white">
                Cost-Efficient and Scalable
              </div>
              <br />
              <div className="text-[20px] leading-[28px] font-[300] text-white">
                Save up to 70% on audit costs while accelerating timelines by
                80%, scaling easily to your needs.
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
              <div className="text-[30px] leading-[38px] font-[700] text-white">
                Instant Global Audit
              </div>
              <br />
              <div className="text-[20px] leading-[28px] font-[300] text-white">
                YVOO provides 1-click access to certified auditors, ensuring you
                can book audits anytime, anywhere.
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
              <div className="text-[30px] leading-[38px] font-[700] text-white">
                AI-Driven compliance
              </div>
              <br />
              <div className="text-[20px] leading-[28px] font-[300] text-white">
                AI-Generated Audit framework & guidance adhering to ISO 9001,
                IATF 16949, and regional standards, ensuring comprehensive
                regulatory compliance across all locations.
              </div>
            </div>
          </div>
        </div>
        <div className="text-[34px] leading-[42px] font-[700] text-blue mb-[220px]">
          YVOO ScanPro+ eliminates traditional audit roadblocks, improvement in
          all metrics
        </div>
        <div className="text-[50px] leading-[58px] font-[700] text-blue">
          AI-Guided
        </div>
        <div className="text-[40px] leading-[58px] font-[400] text-white mb-[154px]">
          Audits with Global Reach
        </div>
        <div className="grid grid-cols-3 3xl:gap-[83px] gap-[50px] 3xl:mb-[25px] mb-[6px]">
          <div className="flex flex-row gap-[25px] border-blue border-[2px] rounded-[30px] p-[42px_30px] 3xl:mt-[206px] mt-[72px] h-[max-content]">
            <div>
              <Image
                src="/icons/AIGeneratedAuditFramework.svg"
                width={92}
                height={105}
                alt="triangle"
                className="mb-[26px] justify-self-center	"
              />
            </div>
            <div>
              <div className="3xl:text-[30px] text-[28px] 3xl:leading-[38px] leading-[36px] font-[700] text-blue mb-[24px]">
                AI-Generated <br /> Audit Framework <br />& Auditor <br />
                Guidance
              </div>
              <div className="text-[20px] leading-[28px] font-[300] text-white">
                AI builds a customized audit framework and guidance, covering
                every necessary aspect objectively
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[25px] border-blue border-[2px] rounded-[30px] p-[42px_30px] h-[max-content]">
            <div>
              <Image
                src="/icons/ClickAuditRequest.svg"
                width={76}
                height={127}
                alt="triangle"
                className="mb-[26px] justify-self-center	"
              />
            </div>
            <div>
              <div className="3xl:text-[30px] text-[28px] 3xl:leading-[38px] leading-[36px] font-[700] text-blue mb-[24px]">
                1-Click Audit Request
              </div>
              <div className="text-[20px] leading-[28px] font-[300] text-white">
                Instant audit request tailored to your compliance needs
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[25px] border-blue border-[2px] rounded-[30px] p-[42px_30px] 3xl:mt-[206px] mt-[138px] h-[max-content]">
            <div>
              <Image
                src="/icons/AuditorAssignment.svg"
                width={92}
                height={121}
                alt="triangle"
                className="mb-[26px] justify-self-center	"
              />
            </div>
            <div>
              <div className="3xl:text-[30px] text-[28px] 3xl:leading-[38px] leading-[36px] font-[700] text-blue mb-[24px]">
                Auditor <br />
                Assignment
              </div>
              <div className="text-[20px] leading-[28px] font-[300] text-white">
                Global network of auditors assigned based on location and
                expertise
              </div>
            </div>
          </div>
        </div>
        <div className="text-center relative w-full flex items-center justify-center">
          <Image
            src="/icons/AIGuidedLines.svg"
            width={1087}
            height={761}
            alt="triangle"
            className="absolute 3xl:mt-[-124px] mt-[-90px] 3xl:max-w-[100%] 2xl:max-w-[800px]"
          />
          <Image
            src="/icons/CentralAIHub.svg"
            width={174}
            height={174}
            alt="triangle"
            className=""
          />
        </div>
        <div className="flex flex-col">
          <div className="self-center">
            <Image
              src="/icons/Line_9.svg"
              width={2}
              height={345}
              alt="triangle"
              className="opacity-0 3xl:max-h-[unset] max-h-[145px]"
            />
          </div>
          <div className="relative self-center text-center">
            <div className="absolute top-[370px] left-[153px] z-[3]">
              <div
                className={`relative bg-white rounded-[30px] p-[36px_30px_26px] custom-shadow mb-[20px] card`}
              >
                <div className="text-[12px] leading-[16px] font-[400] text-[#898989] mb-[8px]">
                  2024.24.10
                </div>
                <div className="text-[16px] leading-[20px] font-[400] text-black mb-[33px]">
                  What type of product or service
                  <br /> are you looking for?
                </div>
                <div className="flex flex-row justify-between">
                  <div className="text-[12px] leading-[16px] font-[400] text-blue uppercase">
                    more info
                  </div>
                  <div className="text-[12px] leading-[16px] font-[400] text-[#898989]">
                    Today 12:30
                  </div>
                </div>
                <Image
                  src="/icons/Notification.svg"
                  width={34}
                  height={34}
                  alt="Notification"
                  className="absolute top-[15px] right-[15px]"
                />
              </div>
              <div
                className={`relative bg-white rounded-[30px] p-[36px_30px_26px] custom-shadow card card-2`}
                // style={{ animationDelay: "0.5s" }}
              >
                <div className="text-[12px] leading-[16px] font-[400] text-[#898989] mb-[8px]">
                  2024.24.10
                </div>
                <div className="text-[16px] leading-[20px] font-[400] text-black mb-[33px]">
                  What type of product or service
                  <br /> are you looking for?
                </div>
                <div className="flex flex-row justify-between">
                  <div className="text-[12px] leading-[16px] font-[400] text-blue uppercase">
                    more info
                  </div>
                  <div className="text-[12px] leading-[16px] font-[400] text-[#898989]">
                    Today 12:30
                  </div>
                </div>
                <Image
                  src="/icons/Notification.svg"
                  width={34}
                  height={34}
                  alt="Notification"
                  className="absolute top-[15px] right-[15px]"
                />
              </div>
            </div>
            <Image
              src="/icons/IPad_1.svg"
              width={771}
              height={1014}
              alt="triangle"
              className="relative justify-self-center z-[2]"
            />
            <Image
              src="/icons/Map.svg"
              width={1516}
              height={722}
              alt="triangle"
              className="relative -mt-[269px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Effective;
