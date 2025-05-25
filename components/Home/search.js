import Image from "next/image";
import Link from "next/link";
import TypingEffect from "../TypingEffect";
import MagnifyOnScroll from "../MagnifyOnScroll";
import React, { useState, useEffect, useRef } from "react";
import LoadOnLoad from "../LoadOnLoad";
function Search({ handleModal }) {
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
    <div
      id="search"
      className="relative grid w-full bg-local bg-contain bg-bottom absolute inset-0 bg-black z-[1] md:pt-[200px] pt-[100px] md:pb-[120px] pb-[80px] md:px-[202px] px-[41px]"
    >
      <div className="font-[700] md:text-[40px] text-[26px] md:leading-[48px] leading-[34px] md:mb-[80px] mb-[40px]">
        Benefits of a Global Auditor
        <br className="md:block hidden" /> Network and AI-Powered Supplier
        <br /> Audit Solution
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 md:gap-[60px] gap-[30px]">
        <div className="flex flex-col md:gap-[24px] gap-[16px] md:p-[40px_40px_96px] p-[28px]  rounded-[30px] bg-[#131D2A]">
          <div>
            <Image
              src="/icons/Global.svg"
              width={80}
              height={80}
              alt="Global"
              className="md:max-w-[unset] max-w-[60px]"
            />
          </div>
        <LoadOnLoad>
          <div className="text-blue font-[700] md:text-[30px] text-[20px] md:leading-[38px] leading-[28px]">
            You gain instant access to global audit capacity
          </div>
          <div className="font-[400] md:text-[20px] text-[16px] md:leading-[28px] leading-[22px]">
            Your suppliers are worldwide - now your audit capability is too.
            With YVOO’s certified global auditor network, you can scale fast,
            without delay.
          </div>
          </LoadOnLoad>
        </div>
        <div className="flex flex-col md:gap-[24px] gap-[16px] md:p-[40px_40px_96px] p-[28px]  rounded-[30px] bg-[#131D2A]">
          <div>
            <Image
              src="/icons/Quality.svg"
              width={80}
              height={80}
              alt="Quality"
              className="md:max-w-[unset] max-w-[60px]"
            />
          </div>
        <LoadOnLoad>
          <div className="text-blue font-[700] md:text-[30px] text-[20px] md:leading-[38px] leading-[28px]">
            You ensure consistent audit quality, every time{" "}
          </div>
          <div className="font-[400] md:text-[20px] text-[16px] md:leading-[28px] leading-[22px]">
            No more relying on individual experience. Our AI guides every
            auditor step by step, ensuring consistent, high-quality results -
            wherever they are.
          </div>
          </LoadOnLoad>
        </div>
        <div className="flex flex-col md:gap-[24px] gap-[16px] md:p-[40px_40px_96px] p-[28px]  rounded-[30px] bg-[#131D2A]">
          <div>
            <Image
              src="/icons/RealTime.svg"
              width={80}
              height={80}
              alt="RealTime"
              className="md:max-w-[unset] max-w-[60px]"
            />
          </div>
        <LoadOnLoad>
          <div className="text-blue font-[700] md:text-[30px] text-[20px] md:leading-[38px] leading-[28px]">
            You get real-time insight into supplier risk{" "}
          </div>
          <div className="font-[400] md:text-[20px] text-[16px] md:leading-[28px] leading-[22px]">
            Stop guessing. Our dashboards show you exactly where the gaps and
            risks are - across every audit, instantly.
          </div>
          </LoadOnLoad>
        </div>
        <div className="flex flex-col md:gap-[24px] gap-[16px] md:p-[40px_40px_96px] p-[28px]  rounded-[30px] bg-[#131D2A]">
          <div>
            <Image
              src="/icons/Email.svg"
              width={80}
              height={80}
              alt="Email"
              className="md:max-w-[unset] max-w-[60px]"
            />
          </div>
        <LoadOnLoad>
          <div className="text-blue font-[700] md:text-[30px] text-[20px] md:leading-[38px] leading-[28px]">
            You eliminate email chaos and version confusion{" "}
          </div>
          <div className="font-[400] md:text-[20px] text-[16px] md:leading-[28px] leading-[22px]">
            All your audit data, documents, and actions live in one secure
            platform - easy to access, easy to manage.
          </div>
          </LoadOnLoad>
        </div>
        <div className="flex flex-col md:gap-[24px] gap-[16px] md:p-[40px_40px_96px] p-[28px]  rounded-[30px] bg-[#131D2A]">
          <div>
            <Image
              src="/icons/Control.svg"
              width={80}
              height={80}
              alt="Control"
              className="md:max-w-[unset] max-w-[60px]"
            />
          </div>
        <LoadOnLoad>
          <div className="text-blue font-[700] md:text-[30px] text-[20px] md:leading-[38px] leading-[28px]">
            You stay in control with flexible checklists{" "}
          </div>
          <div className="font-[400] md:text-[20px] text-[16px] md:leading-[28px] leading-[22px]">
            Use your own audit templates or industry standards - YVOO adapts to
            your process, not the other way around.
          </div>
          </LoadOnLoad>
        </div>
        <div className="flex flex-col md:gap-[24px] gap-[16px] md:p-[40px_40px_96px] p-[28px]  rounded-[30px] bg-[#131D2A]">
          <div>
            <Image
              src="/icons/Action.svg"
              width={80}
              height={80}
              alt="Action"
              className="md:max-w-[unset] max-w-[60px]"
            />
          </div>
        <LoadOnLoad>
          <div className="text-blue font-[700] md:text-[30px] text-[20px] md:leading-[38px] leading-[28px]">
            You turn findings into action, automatically{" "}
          </div>
          <div className="font-[400] md:text-[20px] text-[16px] md:leading-[28px] leading-[22px]">
            No more flagged issues with no follow-up. YVOO links findings to
            root causes and corrective actions - and tracks them to closure.
          </div>
          </LoadOnLoad>
        </div>
      </div>
    </div>
  );
}

export default Search;
