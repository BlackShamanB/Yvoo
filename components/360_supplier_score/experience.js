import Image from "next/image";

function Experience() {
  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };
  return (
    <div className="relative w-full flex-center 3xl:px-[202px] 2xl:px-[162px] md:px-[85px] px-[42px] pt-[100px] md:pt-[120px] 2xl:pt-[183px] pb-[100px] md:pb-[120px] 2xl:pb-[240px] bg-black">
      <div className="w-full" data-scroll data-scroll-speed="0.1">
        <div className="font-[400] text-[14px] md:text-[16px] leading-[20px] [&>p]:2xl:max-w-[306px] [&>p]:2xl:max-w-[400px] gap-[30px] 2xl:gap-[38px] 3xl:gap-[97px] grid 2xl:grid-cols-2 grid-cols-1">
          <div className="flex flex-col">
            <div className="font-[700] text-[24px] leading-[30px] text-center mb-[42px]">
              360° Risk Score Gauge
            </div>
            <div>
              <Image
                src="/icons/Risk_Score_Gauge.svg"
                width={468}
                height={500}
                alt="menu"
                className="mx-[auto]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[42px] pl-[37px]">
            <div className="text-blue font-[700] text-[40px] leading-[48px]">
              A structured, AI-driven supplier profile to ensure full
              transparency and risk assessment.
            </div>
            <div className="text-white font-[400] text-[20px] leading-[28px]">
              The YVOO ScanPro+ 360° Supplier Profile provides a comprehensive
              supplier overview, combining on-site audit data, AI-driven
              performance analysis, and compliance verification.
            </div>
            <div className="font-[700] text-[24px] leading-[30px]">
              Key Insights Included:
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-row align-center">
                <Image
                  src="/icons/checkWhite.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className="mr-[10px]"
                />
                <div className="text-blue font-[600] text-[24px] leading-[30px]">
                  Supplier Name & Sector
                </div>
                &nbsp;&nbsp;
                <div className="font-[400] 2xl:text-[18px] md:text-[20px] text-[18px] 2xl:leading-[30px] md:leading-[26px] leading-[26px]">
                  Identify industry positioning
                </div>
              </div>
              <div className="flex flex-row align-center">
                <Image
                  src="/icons/checkWhite.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className="mr-[10px]"
                />
                <div className="text-blue font-[600] text-[24px] leading-[30px]">
                  Approval Rating
                </div>
                &nbsp;&nbsp;
                <div className="font-[400] 2xl:text-[18px] md:text-[20px] text-[18px] 2xl:leading-[30px] md:leading-[26px] leading-[26px]">
                  Verified compliance & risk assessment
                </div>
              </div>
              <div className="flex flex-row align-center">
                <Image
                  src="/icons/checkWhite.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className="mr-[10px]"
                />
                <div className="text-blue font-[600] text-[24px] leading-[30px]">
                  Manufacturing Capabilities
                </div>
                &nbsp;&nbsp;
                <div className="font-[400] 2xl:text-[18px] md:text-[20px] text-[18px] 2xl:leading-[30px] md:leading-[26px] leading-[26px]">
                  Key production insights
                </div>
              </div>
              <div className="flex flex-row align-center">
                <Image
                  src="/icons/checkWhite.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className="mr-[10px]"
                />
                <div className="text-blue font-[600] text-[24px] leading-[30px]">
                  Client References
                </div>
                &nbsp;&nbsp;
                <div className="font-[400] 2xl:text-[18px] md:text-[20px] text-[18px] 2xl:leading-[30px] md:leading-[26px] leading-[26px]">
                  Past projects and credibility check
                </div>
              </div>
              <div className="flex flex-row align-center">
                <Image
                  src="/icons/checkWhite.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className="mr-[10px]"
                />
                <div className="text-blue font-[600] text-[24px] leading-[30px]">
                  Factory Images & Videos
                </div>
                &nbsp;&nbsp;
                <div className="font-[400] 2xl:text-[18px] md:text-[20px] text-[18px] 2xl:leading-[30px] md:leading-[26px] leading-[26px]">
                  Real on-site verification evidence
                </div>
              </div>
              <div className="flex flex-row align-center">
                <Image
                  src="/icons/checkWhite.svg"
                  width={20}
                  height={20}
                  alt="triangle"
                  className="mr-[10px]"
                />
                <div className="text-blue font-[600] text-[24px] leading-[30px]">
                  Direct Actions
                </div>
                &nbsp;&nbsp;
                <div className="font-[400] 2xl:text-[18px] md:text-[20px] text-[18px] 2xl:leading-[30px] md:leading-[26px] leading-[26px]">
                  Send RFQ & Order Audit Instantly
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[30px]">
              <div
                className="text-black text-[16px] leading-[20px] font-[500] w-[max-content] p-[20px_64px] bg-blue rounded-[30px] uppercase"
                onClick={handleModal}
              >
                Book a demo
              </div>
              <div className="flex flex-row items-center gap-[8px]">
                <Image
                  src="/icons/blue_arrow.svg"
                  width={16}
                  height={16}></Image>
                  <div>Schedule On-Site Evaluation</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
