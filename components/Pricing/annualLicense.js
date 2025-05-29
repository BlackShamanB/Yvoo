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
    gridTemplateLicense: true
  };
  return (
    <div className="relative px-[202px] md:pb-[160px] w-full bg-white">
      <div
        className="mb-[24px] w-full text-blue font-inter font-[700] md:text-[50px] text-[30px] md:leading-[58px] leading-[34px] z-[1] max-w-[746px]"
        data-scroll
        data-scroll-speed="0.2"
      >
        Annual License - Matchory Supplier Discovery
      </div>
      <div className="text-black mb-[42px] font-[700] text-[24px] leading-[30px] max-w-[746px]">
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
