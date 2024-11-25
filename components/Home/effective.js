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
        <div className="grid grid-cols-3 gap-[83px] mb-[25px]">
          <div className="flex flex-row gap-[25px] border-blue border-[2px] rounded-[30px] p-[42px_30px] mt-[206px] h-[max-content]">
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
              <div className="text-[30px] leading-[38px] font-[700] text-blue mb-[24px]">
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
              <div className="text-[30px] leading-[38px] font-[700] text-blue mb-[24px]">
                1-Click Audit Request
              </div>
              <div className="text-[20px] leading-[28px] font-[300] text-white">
                Instant audit request tailored to your compliance needs
              </div>
            </div>
          </div>
          <div className="flex flex-row gap-[25px] border-blue border-[2px] rounded-[30px] p-[42px_30px] mt-[206px] h-[max-content]">
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
              <div className="text-[30px] leading-[38px] font-[700] text-blue mb-[24px]">
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
            src="/icons/Line_1.svg"
            width={449}
            height={104}
            alt="triangle"
            className="absolute right-[calc(50%_+_87px)] -top-[25px]"
          />
          <Image
            src="/icons/CentralAIHub.svg"
            width={174}
            height={174}
            alt="triangle"
            className=""
          />
          <Image
            src="/icons/Line_7.svg"
            width={14}
            height={345}
            alt="triangle"
            className="absolute bottom-[180px]"
          />
          <Image
            src="/icons/Line_8.svg"
            width={448}
            height={208}
            alt="triangle"
            className="absolute left-[calc(50%_+_87px)] -top-[126px]"
          />
        </div>
        <div className="flex flex-col">
          <div className="self-center">
            <Image
              src="/icons/Line_9.svg"
              width={2}
              height={345}
              alt="triangle"
              className=""
            />
          </div>
          <div className="relative self-center text-center">
            <div className="absolute top-[370px] left-[153px] z-[3]">
              <div className="relative bg-white rounded-[30px] p-[36px_30px_26px] custom-shadow mb-[20px]">
                <div className="text-[12px] leading-[16px] font-[400] text-[#898989] mb-[8px]">2024.24.10</div>
                <div className="text-[16px] leading-[20px] font-[400] text-black mb-[33px]">What type of product or service<br/> are you looking for?</div>
                <div className="flex flex-row justify-between">
                  <div className="text-[12px] leading-[16px] font-[400] text-blue uppercase">more info</div>
                  <div className="text-[12px] leading-[16px] font-[400] text-[#898989]">Today 12:30</div>
                </div>
                <Image
                  src="/icons/Notification.svg"
                  width={34}
                  height={34}
                  alt="Notification"
                  className="absolute top-[15px] right-[15px]"
                />
              </div>
              <div className="relative bg-white rounded-[30px] p-[36px_30px_26px] custom-shadow">
                <div className="text-[12px] leading-[16px] font-[400] text-[#898989] mb-[8px]">2024.24.10</div>
                <div className="text-[16px] leading-[20px] font-[400] text-black mb-[33px]">What type of product or service<br/> are you looking for?</div>
                <div className="flex flex-row justify-between">
                  <div className="text-[12px] leading-[16px] font-[400] text-blue uppercase">more info</div>
                  <div className="text-[12px] leading-[16px] font-[400] text-[#898989]">Today 12:30</div>
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
