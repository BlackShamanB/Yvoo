import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import TypingEffect from "../TypingEffect";
import MagnifyOnScroll from "../MagnifyOnScroll";
import SafetyStandards from "../SafetyStandards";
import DOMPurify from 'dompurify';
function Scan({ handleModal }) {
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
  const data = [
    {
      image: "/icons/ManufacturingStandards.svg",
      check: "icons/check.svg",
      color: "blue",
      title: "Safety Standards",
      content: "Maintaining the safety and well-being of workers and products",
      items: [
        { title: "ISO 9001", description: "Quality Management Systems" },
        {
          title: "IATF 16949",
          description: "Automotive Quality Management System",
        },
        {
          title: "VDA 6.3",
          description: "Process Audits for Automotive Industry",
        },
      ],
    },
    {
      image: "/icons/SustainabilityStandards.svg",
      check: "icons/checkMint.svg",
      color: "mint",
      title: "Environmental Standards",
      content: "Ensuring environmental sustainability and compliance",
      items: [
        { title: "ISO 14001", description: "Environmental Management Systems" },
        { title: "EU Deforestation Regulation (EUDR)", description: "" },
        {
          title: "Corporate Sustainability Due Diligence Directive (CSDDD)",
          description: "",
        },
        {
          title: "REACH",
          description:
            "Registration, Evaluation, Authorization, and Restriction of Chemicals",
        },
      ],
    },
    {
      image: "/icons/SafetyStandards.svg",
      check: "/icons/checkYellow.svg",
      color: "[#FFC527]",
      title: "Safety Standards",
      content: "Maintaining the safety and well-being of workers and products",
      items: [
        { title: "ISO 45001", description: "Occupational Health and Safety" },
        { title: "EN 13445", description: "Unfired Pressure Vessels" },
        {
          title: "VGB-R 170C",
          description: "Quality Standards for Power Plant Equipment",
        },
        { title: "", description: "And many others" },
      ],
    },
    {
      image: "/icons/ComplianceStandards.svg",
      check: "/icons/checkGrey.svg",
      color: "[#949CAF]",
      title: "Compliance Standards",
      content: DOMPurify.sanitize("Ensuring ethical sourcing and regulatory compliance"),
      items: [
        { title: "RoHS", description: "Restriction of Hazardous Substances" },
        {
          title: "German Supply Chain Due Diligence Act (LkSG)",
          description: "",
        },
        {
          title: "Conflict Minerals Rule (Dodd-Frank Act Section 1502)",
          description: "",
        },
        { title: "California Supply Chain Transparency Act", description: "" },
        {
          title: "EN 10204",
          description: "Inspection Documents for Metallic Products",
        },
      ],
    },
  ];

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="relative w-full flex flex-col justify-center bg-white">
      <div className="3xl:max-w-[1516px] 2xl:max-w-[1116px] md:max-w-[598px] mx-[auto] relative grid md:grid-cols-2 grid-cols-1 gap-x-[60px] gap-y-[120px] w-full pt-[200px] mb-[180px]">
        {data.map((item, index) => (
          <SafetyStandards
            image={item.image}
            check={item.check}
            key={index}
            color={item.color}
            title={item.title}
            content={item.content}
            items={item.items}
          />
        ))}
      </div>
      <div className="flex justify-center mb-[200px]">
        <div className="text-black bg-blue rounded-[30px] p-[20px_34px] text-[16px] leading-[20px] font-[500] uppercase">
          Need Compliance? Book a Consultation Now
        </div>
      </div>
    </div>
  );
}

export default Scan;
