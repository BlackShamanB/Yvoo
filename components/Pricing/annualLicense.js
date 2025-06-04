import Image from "next/image";
import MagnifyOnScroll from "../MagnifyOnScroll";
import ServicesGridBlock from "./ServicesGridBlock";
function AnnualLicense() {
  const dataBlocks = {
    headerName: "Plan",
    headerTitles: ["Users", "Features", "Price/Year"],
    rows: [
      {
        title: "Solo",
        items: [
          "1 User",
          `Al-powered instant global supplier discovery<br/><br/>

Advanced search filters (certifications, regions, HS codes)<br/><br/>

Real-time data and insights<br/><br/>

Comprehensive supplier profiles<br/><br/>

Unlimited searches<br/><br/>

Customer support`,
        ],
        price: "12,000",
      },
      {
        title: "Team",
        items: [
          "Up to 5 Users",
          "All features included in the Solo Plan, shared across 5 user accounts.",
        ],
        price: "25,000",
      },
    ],
    type: ["text", "text", "price"],
    isCurrency: [false, false, false, true],
    bgColor: "green",
    gridCols: 4,
    gridTemplateLicense: true,
    plan: true
  };
  return (
    <div className="relative md:px-[202px] px-[41px] md:pb-[160px] pb-[60px] w-full bg-white">
      <div
        className="md:mb-[24px] mb-[16px] w-full text-blue font-inter font-[700] md:text-[50px] text-[30px] md:leading-[58px] leading-[34px] z-[1] max-w-[746px]"
        data-scroll
        data-scroll-speed="0.2"
      >
        Annual License - Matchory Supplier Discovery
      </div>
      <div className="text-black md:mb-[42px] mb-[20px] font-[700] md:text-[24px] text-[18px] md:leading-[30px] leading-[26px] max-w-[746px]">
        Matchory ofiers access to a vast global database of 14 million
        suppliers, providing advanced features to streamline your sourcing
        process
      </div>
      <div className="flex flex-col gap-[40px] mb-[2px]">
        <ServicesGridBlock {...dataBlocks} />
      </div>
    </div>
  );
}

export default AnnualLicense;
