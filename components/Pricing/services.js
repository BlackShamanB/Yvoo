import Image from "next/image";
import MagnifyOnScroll from "../MagnifyOnScroll";
import ServicesGridBlock from "./ServicesGridBlock";
function Services() {
  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };
  const dataBlocksOne = {
    rows: [
      {
        title: "Visual Inspection",
        items: [
          "On-site review of product appearance, cleanliness, and labeling",
          "Detects surface defects, handling issues, and basic visual non-conformities early",
          "All products during or after production",
        ],
        price: "500",
      },
      {
        title: "Dimensional Inspection",
        items: [
          "Measure parts using calipers or gauges and compare to technical drawings",
          "Verifies physical specs and tolerances are met",
          "Precision parts, machined components, or assemblies",
        ],
        price: "800",
      },
      {
        title: "Witness of Functional Test",
        items: [
          "Observe and document factory acceptance tests (FAT) or operational tests",
          "Ensures product performs to contract/spec before acceptance",
          "Equipment, systems, and instruments requiring testing",
        ],
        price: "1,000",
      },
    ],
    type: ["text", "text", "text", "price"],
    isCurrency: [false, false, false, false, true],
  };
  const dataBlocksTwo = {
    rows: [
      {
        title: "Packing & Marking Check",
        items: [
          "Check packaging, shipping labels, export markings, and PO label compliance",
          "Prevents transit damage, misrouting, and customs delays",
          "All exports, fragile or labeled goods",
        ],
        price: "400",
      },
      {
        title: "Final Pre- Shipment Inspection",
        items: [
          "End-of-line check for completeness, quality, packing, and shipment readiness",
          "Last opportunity to catch issues before goods leave supplier",
          "Critical deliveries, high-value goods, or urgent orders",
        ],
        price: "1,200",
      },
    ],
    type: ["text", "text", "text", "price"],
    isCurrency: [false, false, false, false, true],
  };
  const dataBlocksThree = {
    rows: [
      {
        title: "Document Review",
        items: [
          "Review of test reports, CoCs, MTCs, and compliance documents",
          "Confirms thet materials and processes meet clients or legal requirements",
          "Regulated industries, or internal documentation protocols",
        ],
        price: "600",
      },
    ],
    type: ["text", "text", "text", "price"],
    isCurrency: [false, false, false, false, true],
  };
  return (
    <div className="relative md:px-[202px] md:pb-[120px] w-full bg-white">
      <h1
        className="mb-[42px] w-full text-black font-inter font-[700] md:text-[40px] text-[30px] md:leading-[48px] leading-[34px] z-[1]"
        data-scroll
        data-scroll-speed="0.2"
      >
        YVOO Inspection Services Tables
      </h1>
      <div className="text-black font-[700] text-[30px] leading-[38px] mb-[42px]">
        1. {"  "}During Production
      </div>
      <div className="flex flex-col gap-[40px] mb-[2px]">
        <ServicesGridBlock {...dataBlocksOne} />
      </div>
      <div className="text-black font-[700] text-[30px] leading-[38px] mb-[42px]">
        2. {"  "}Before Shipment
      </div>
      <div className="flex flex-col gap-[40px] mb-[2px]">
        <ServicesGridBlock {...dataBlocksTwo} />
      </div>
      <div className="text-black font-[700] text-[30px] leading-[38px] mb-[42px]">
        3. {"  "}Documentation & Compliance
      </div>
      <div className="flex flex-col gap-[40px] mb-[2px]">
        <ServicesGridBlock {...dataBlocksThree} />
      </div>
    </div>
  );
}

export default Services;
