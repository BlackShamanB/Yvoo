import Image from "next/image";
import MagnifyOnScroll from "../MagnifyOnScroll";
import GridBlock from "./GridBlock";
function Pricing() {
  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };
  const dataBlocks = [
    {
      title: "Price",
      items: ["1,500", "3,000", "6,000"],
      isCurrency: true,
    },
    {
      title: "Summary",
      items: [
        "Quick, cost-effective evaluation of new or existing suppliers",
        "Audits tailored to your industry standards or internal requirements",
        "Comprehensive multi-site audits including sub- suppliers and ESG insights",
      ],
    },
    {
      title: "Best suitedfor",
      items: [
        "Routine onboarding and low-risk supplier qualification",
        "Strategic suppliers, ISO/IATF/VDA audits, or client-specific compliance checks",
        "High-risk suppliers, ESG- critical categories, or complex supply chains",
      ],
    },
    {
      title: "On-site audit by certified local auditor",
      items: ["/icons/CheckOk.svg", "/icons/CheckOk.svg", "/icons/CheckOk.svg"],
      type: "image",
    },
    {
      title: "Al-guided audit framework",
      items: ["/icons/CheckOk.svg", "/icons/CheckOk.svg", "/icons/CheckOk.svg"],
      type: "image",
    },
    {
      title: "Photo and video documentation",
      items: ["/icons/CheckOk.svg", "/icons/CheckOk.svg", "/icons/CheckOk.svg"],
      type: "image",
    },
    {
      title: "Customized audit scope",
      items: [
        "YVOO Standard based on ISO 9001 & Automotive core requirements",
        "Tailored to your specific standards (e.g. ISO 9001, IATF 16949, VDA 6.3, or internal requirements)",
        "Includes main supplier and sub- suppliers with full customization per your compliance or ESG needs",
      ],
    },
    {
      title: "Pre-audit consultation",
      items: ["Available as add- on ($ 500)", "Included", "Included"],
    },
    {
      title: "AI risk & compliance insights",
      items: ["Basic", "Advanced", "Advanced + Benchmarking"],
    },
    {
      title: "ESG compliance module",
      items: [
        "Available as add-on ($ 750)",
        "Available as add-on (€ 750)",
        "Included",
      ],
    },
    {
      title: "Multi-site coordination",
      items: [
        "Not included",
        "Not included",
        "Included (main + up to 2 sub-suppliers)",
      ],
    },
    {
      title: "Follow-up audit",
      items: [
        "Available as add-on ($ 1,200)",
        "Available as add-on (€ 1,200)",
        "Included on request",
      ],
    },
    {
      title: "Follow-up on improvement of findings with supplier",
      items: [
        "Available as add-on ($ 1,000)",
        "Available as add-on (€ 1,000)",
        "Included on request",
      ],
    },
    {
      title: "Dedicated project coordinator",
      items: ["Not included", "Available as add-on ($ 500)", "Included"],
      containerClassName: "p-[0_20px_0px]",
    },
  ];
  return (
    <div className="relative md:px-[202px] md:pb-[220px] md:pt-[160px] pt-[100px] w-full bg-white">
      <h1
        className="mb-[42px] w-full text-black font-inter font-[700] md:text-[40px] text-[30px] md:leading-[48px] leading-[34px] z-[1]"
        data-scroll
        data-scroll-speed="0.2"
      >
        YVOO Audit Pricing
      </h1>
      <div className="flex flex-col gap-[40px] mb-[42px]">
        <div className="grid md:grid-cols-4 grid-cols-1 gap-[40px] bg-[#F6F8F9] rounded-[10px] items-center p-[40px_20px]">
          <div className="text-black font-[700] text-[24px] leading-[30px]">
            Feature
          </div>
          <div className="flex flex-row gap-[20px] items-center font-[700] text-[24px] leading-[30px]">
            <Image
              src={"/icons/Standart.svg"}
              alt="Standart"
              width="60"
              height="60"
            ></Image>
            <div className="text-black">
              <div className="text-blue">Standard</div> Supplier Audit
            </div>
          </div>
          <div className="flex flex-row gap-[20px] items-center font-[700] text-[24px] leading-[30px]">
            <Image
              src={"/icons/Castom.svg"}
              alt="Castom"
              width="60"
              height="60"
            ></Image>
            <div className="text-black">
              <div className="text-blue">Customized</div> Compliance Audit
            </div>
          </div>
          <div className="flex flex-row gap-[20px] items-center font-[700] text-[24px] leading-[30px]">
            <Image
              src={"/icons/Full.svg"}
              alt="Full"
              width="60"
              height="60"
            ></Image>
            <div className="text-black">
              <div className="text-blue">Full</div> Supply Chain Audit
            </div>
          </div>
        </div>
        {dataBlocks.map((block, index) => (
          <GridBlock key={index} {...block} />
        ))}
      </div>

      <div className={`grid md:grid-cols-4 grid-cols-1 gap-[40px]`}>
        <div></div>
        <div>
          <div
            className="text-center w-full text-black md:text-[16px] text-[12px] md:leading-[20px] leading-[16px] font-[500] w-[max-content] md:p-[20px] p-[16px_34px] bg-blue rounded-[30px] uppercase whitespace-nowrap content-center"
            onClick={handleModal}
          >
            Order
          </div>
        </div>
        <div>
          <div
            className="text-center w-full text-black md:text-[16px] text-[12px] md:leading-[20px] leading-[16px] font-[500] w-[max-content] md:p-[20px] p-[16px_34px] bg-blue rounded-[30px] uppercase whitespace-nowrap content-center"
            onClick={handleModal}
          >
            Order
          </div>
        </div>
        <div>
          <div
            className="text-center w-full text-black md:text-[16px] text-[12px] md:leading-[20px] leading-[16px] font-[500] w-[max-content] md:p-[20px] p-[16px_34px] bg-blue rounded-[30px] uppercase whitespace-nowrap content-center"
            onClick={handleModal}
          >
            Order
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
