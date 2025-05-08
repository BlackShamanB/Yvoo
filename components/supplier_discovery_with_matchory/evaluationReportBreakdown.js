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
        console.log(ref.getBoundingClientRect());
        ref.style.height = `max-content`;
        ref.style.opacity = "1";
        ref.style.padding = "30px 41px 42px 34px";
      } else {
        ref.style.height = "0";
        ref.style.opacity = "0";
        // ref.style.padding = "0";
      }
    });
  }, [activeIndex]);
  return (
    <div className="relative grid w-full bg-white text-black inset-0 3xl:pt-[240px] pb-[351px] min-h-[1679px] bg-evaluationReportBreakdownBG bg-no-repeat bg-size-[1018px_1099px] bg-[bottom_right]">
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] is-inview grid grid-cols-1 2xl:grid-cols-2 w-full">
        <div className="flex flex-col gap-[42px]">
          <div className="text-blue font-[700] text-[50px] leading-[58px]">
            Evaluation Report Breakdown
          </div>
          <div className="font-[400] text-[20px] leading-[28px]">
            How <span className="font-[700]">YVOO ScanPro+</span> evaluates
            suppliers using a structured,
            <br /> AI-powered audit.
          </div>
          <div className="font-[700] text-[24px] leading-[30px]">
            Key Performance Categories 
          </div>
          <div className="flex flex-col gap-[12px] min-h-[872px]">
            {items.map((item, index) => (
              <div key={index} className="rounded-[30px] overflow-hidden max-w-[673px]">
                {/* Заголовок аккордеона */}
                <div
                  className={`flex flex-col pl-[40px] pt-[30px] cursor-pointer nowrap ${
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
                      }] text-[30px] leading-[38px] whitespace-pre-line`}
                    >
                      {item.title}
                    </div>
                  </div>

                  {/* Контент аккордеона */}
                  <div
                    ref={(el) => (contentRefs.current[index] = el)}
                    className="overflow-hidden transition-all duration-300 ease-in-out"
                    style={{
                      height: activeIndex === index ? "auto" : "0",
                      opacity: activeIndex === index ? "1" : "0",
                      padding:
                        activeIndex === index
                          ? "30px 41px 42px 34px"
                          : "0 41px 0 34px",
                    }}
                  >
                    <div className="flex flex-col gap-[30px]">
                      <div className="flex flex-col gap-[20px]">
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
                              <div className="font-[600] text-[16px] leading-[20px]">
                                {contentItem.title}
                              </div>
                              <div className="font-[400] 2xl:text-[16px] md:text-[20px] text-[18px] 2xl:leading-[20px] md:leading-[26px] leading-[26px]">
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
        <div>
          <Image
            src="/icons/G2.svg"
            width={438}
            height={438}
            alt="triangle"
            className="ml-[auto]"
          />
          <Image
            src="/icons/G1.svg"
            width={552}
            height={386}
            alt="triangle"
            className="mr-[10px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Results;
