import { useState, useRef, useEffect } from "react";

import Image from "next/image";
import MagnifyOnScroll from "../MagnifyOnScroll";
import ImgLeftToRight from "../ImgLeftToRight";

function Results({ handleModal }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const contentRefs = useRef([]); // Данные для аккордеона
  const items = [
    {
      title: `Operational Excellence & Production${'\n'}  Readiness`,
      content: [
        {
          title: "5S Implementation",
          desc: "Sort, Set in Order, Shine, Standardize, Sustain",
        },
        {
          title: "Visual Management",
          desc: "Clear status display, marked stock locations",
        },
        {
          title: "Standardized Workflows",
          desc: "Operators following defined instructions",
        },
        {
          title: "Inventory & Stock Management",
          desc: "FIFO, Min/Max levels clearly defined",
        },
        {
          title: "Total Productive Maintenance (TPM)",
          desc: "Machine upkeep, OEE monitoring",
        },
        {
          title: "Line Design & Factory Layout",
          desc: "Process flow, production optimization",
        },
        {
          title: "Cycle Time & Synchronized Processes",
          desc: "Lean workflow structure",
        },
      ],
    },
    {
      title: "Compliance & Risk Management",
      content: [
        {
          title: "ISO, VDA, ESG, and Safety Standards",
          desc: "Audit-based verification",
        },
        {
          title: "System Audit & Quality Control",
          desc: "Ongoing QS measures, process records",
        },
        {
          title: "Supplier Risk Assessment",
          desc: "Infrastructure, power supply, logistics",
        },
        {
          title: "Long-Term Capacity Planning",
          desc: "Material flow, production forecast stability",
        },
        {
          title: "Poka-Yoke & Defect Prevention",
          desc: "Error-proofing, deviation recognition",
        },
      ],
    },
    {
      title: "Manufacturing & Process Efficiency",
      content: [
        {
          title: "Process Development Competence",
          desc: "Ability to optimize production methods",
        },
        {
          title: "Pre-Material & Product Knowledge",
          desc: "Material selection & sourcing expertise",
        },
        {
          title: "Machine & Automation Technology",
          desc: "Level of technical advancement",
        },
        {
          title: "Cost Structure & Location Costs",
          desc: "Operational efficiency assessment",
        },
      ],
    },
    {
      title: "Strategic & Organizational Strength",
      content: [
        {
          title: "Leadership & Workforce Organization",
          desc: "Decision-making, staff motivation",
        },
        {
          title: "Financial Stability & Economic Viability",
          desc: "Cost calculation & forecasting",
        },
        {
          title: "Client References & Market Positioning",
          desc: "Past performance credibility",
        },
        {
          title: "Production Capacity & Expansion Potential",
          desc: "Scalability assessment",
        },
      ],
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Анимация высоты
  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (!ref) return;

      if (activeIndex === index) {
        ref.style.height = `max-content`;
        ref.style.opacity = "1";
        ref.style.paddingTop = "";
        ref.style.paddingBottom = "";
        ref.classList.add("padding-akkordeon");
      } else {
        ref.style.height = "0";
        ref.style.opacity = "0";
        ref.style.paddingTop = "0";
        ref.style.paddingBottom = "0";
      }
    });
  }, [activeIndex]);
  return (
    <div className="relative grid w-full bg-white text-black inset-0 md:px-[0] px-[41px] 3xl:pt-[240px] pt-[80px] md:pb-[351px] pb-[200px] min-h-[1679px] bg-evaluationReportBreakdownBG bg-no-repeat md:bg-size-[1018px_1099px] bg-contain md:bg-[bottom_right] bg-[0_140px]">
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] is-inview grid grid-cols-1 2xl:grid-cols-2 w-full">
        <div className="flex flex-col md:gap-[42px] gap-[32px]">
          <div className="text-blue font-[700] md:text-[50px] text-[30px] md:leading-[58px] leading-[38px]">
            Evaluation Report Breakdown
          </div>
          <div className="font-[400] md:text-[20px] text-[16px] md:leading-[28px] leading-[22px]">
            How <span className="font-[700]">YVOO ScanPro+</span> evaluates
            suppliers using a structured,
            <br /> AI-powered audit.
          </div>
          <div className="font-[700] md:text-[24px] text-[18px] md:leading-[30px] leading-[26px]">
            Key Performance Categories 
          </div>
          <div className="flex flex-col gap-[12px] md:min-h-[872px]">
            {items.map((item, index) => (
              <div key={index} className="rounded-[30px] overflow-hidden max-w-[673px]">
                <div
                  className={`flex flex-col md:pl-[40px] pl-[17px] md:pt-[30px] pt-[20px] cursor-pointer nowrap ${
                    activeIndex === index ? "bg-[#86F6FC]" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className={`flex items-start ${ activeIndex === index ? 'items-start' : ''}`}>
                    <Image
                      src={
                        activeIndex === index
                          ? "/icons/minusBlack.svg"
                          : "/icons/plusBlue.svg"
                      }
                      width={19}
                      height={19}
                      alt={activeIndex === index ? "minus" : "plus"}
                      className={`relative  mr-[15px]
                        ${activeIndex === index
                          ? "top-[18px]"
                          : "top-[7px]"
                        }
                          `}
                    />
                    <div
                      className={`font-[${
                        activeIndex === index ? "700" : "500"
                      }] md:text-[30px] text-[20px] md:leading-[38px] leading-[28px] md:pr-[0] pr-[17px] whitespace-pre-line`}
                    >
                      {item.title}
                    </div>
                  </div>

                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className={`overflow-hidden transition-all duration-300 ease-in-out padding-akkordeon`}
                    style={{
                      height: activeIndex === index ? "auto" : "0",
                      opacity: activeIndex === index ? "1" : "0",
                    }}
                  >
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex flex-col md:gap-[20px] gap-[12px]">
                        {item.content.map((contentItem, contentIndex) => (
                          <div
                            key={contentIndex}
                            className="flex flex-row items-start"
                          >
                            <Image
                              src="/icons/checkTiffany.svg"
                              width={20}
                              height={20}
                              alt="check"
                              className="mr-[10px]"
                            />
                            <div className="flex flex-col">
                              <div className="font-[600] md:text-[16px] text-[14px] leading-[20px]">
                                {contentItem.title}
                              </div>
                              <div className="font-[400] md:text-[16px] text-[14px] leading-[20px]">
                                {contentItem.desc}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:order-1 -order-1 md:mb-[0] mb-[110px]">
          <Image
            src="/icons/G2.svg"
            width={438}
            height={438}
            alt="triangle"
            className="md:max-w-[unset] max-w-[167px] ml-[auto]"
          />
          <Image
            src="/icons/G1.svg"
            width={552}
            height={386}
            alt="triangle"
            className="md:max-w-[unset] max-w-[211px] mr-[10px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Results;
