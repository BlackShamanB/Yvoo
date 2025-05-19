import Image from "next/image";
import Link from "next/link";
import TypingEffect from "../TypingEffect";
import MagnifyOnScroll from "../MagnifyOnScroll";
import React, { useState, useEffect, useRef } from "react";
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
      className="relative grid w-full bg-local bg-contain bg-bottom absolute inset-0 bg-black z-[1] pt-[200px] pb-[120px] px-[202px]"
    >
      <div className="font-[700] text-[40px] leading-[48px] mb-[80px]">
        Benefits of a Global Auditor
        <br /> Network and AI-Powered Supplier
        <br /> Audit Solution
      </div>
      <div className="grid grid-cols-3 gap-[60px]">
        <div className="flex flex-col gap-[24px] p-[40px_40px_96px] rounded-[30px] bg-[#131D2A]">
          <div>
            <Image
              src="/icons/Global.svg"
              width={80}
              height={80}
              alt="Global"
              className=""
            />
          </div>
          <div className="text-blue font-[700] text-[30px] leading-[38px]">
            You gain instant access to global audit capacity
          </div>
          <div className="font-[400] text-[20px] leading-[28px]">
            Your suppliers are worldwide - now your audit capability is too.
            With YVOO’s certified global auditor network, you can scale fast,
            without delay.
          </div>
        </div>
        <div className="flex flex-col gap-[24px] p-[40px_40px_96px] rounded-[30px] bg-[#131D2A]">
          <div>
            <Image
              src="/icons/Quality.svg"
              width={80}
              height={80}
              alt="Quality"
              className=""
            />
          </div>
          <div className="text-blue font-[700] text-[30px] leading-[38px]">
            You ensure consistent audit quality, every time{" "}
          </div>
          <div className="font-[400] text-[20px] leading-[28px]">
            No more relying on individual experience. Our AI guides every
            auditor step by step, ensuring consistent, high-quality results -
            wherever they are.
          </div>
        </div>
        <div className="flex flex-col gap-[24px] p-[40px_40px_96px] rounded-[30px] bg-[#131D2A]">
          <div>
            <Image
              src="/icons/RealTime.svg"
              width={80}
              height={80}
              alt="RealTime"
              className=""
            />
          </div>
          <div className="text-blue font-[700] text-[30px] leading-[38px]">
            You get real-time insight into supplier risk{" "}
          </div>
          <div className="font-[400] text-[20px] leading-[28px]">
            Stop guessing. Our dashboards show you exactly where the gaps and
            risks are - across every audit, instantly.
          </div>
        </div>
        <div className="flex flex-col gap-[24px] p-[40px_40px_96px] rounded-[30px] bg-[#131D2A]">
          <div>
            <Image
              src="/icons/Email.svg"
              width={80}
              height={80}
              alt="Email"
              className=""
            />
          </div>
          <div className="text-blue font-[700] text-[30px] leading-[38px]">
            You eliminate email chaos and version confusion{" "}
          </div>
          <div className="font-[400] text-[20px] leading-[28px]">
            All your audit data, documents, and actions live in one secure
            platform - easy to access, easy to manage.
          </div>
        </div>
        <div className="flex flex-col gap-[24px] p-[40px_40px_96px] rounded-[30px] bg-[#131D2A]">
          <div>
            <Image
              src="/icons/Control.svg"
              width={80}
              height={80}
              alt="Control"
              className=""
            />
          </div>
          <div className="text-blue font-[700] text-[30px] leading-[38px]">
            You stay in control with flexible checklists{" "}
          </div>
          <div className="font-[400] text-[20px] leading-[28px]">
            Use your own audit templates or industry standards - YVOO adapts to
            your process, not the other way around.
          </div>
        </div>
        <div className="flex flex-col gap-[24px] p-[40px_40px_96px] rounded-[30px] bg-[#131D2A]">
          <div>
            <Image
              src="/icons/Action.svg"
              width={80}
              height={80}
              alt="Action"
              className=""
            />
          </div>
          <div className="text-blue font-[700] text-[30px] leading-[38px]">
            You turn findings into action, automatically{" "}
          </div>
          <div className="font-[400] text-[20px] leading-[28px]">
            No more flagged issues with no follow-up. YVOO links findings to
            root causes and corrective actions - and tracks them to closure.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
