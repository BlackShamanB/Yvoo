"use client";

// import { useState } from "react";

import ModalRequest from "@/components/ModalRequest";
import Experience from "@/components/Solutions/experience";
import BuyerSupplier from "@/components/Solutions/buyerSupplier";
import Hero from "@/components/Solutions/hero";
import HowItWorks from "@/components/Solutions/howItWorks";
import Info from "@/components/Solutions/info";
import Order from "@/components/Solutions/order";
import Results from "@/components/Solutions/results";
import ScanPro from "@/components/Solutions/scanPro";
import SearchPro from "@/components/Solutions/searchPro";
import SimpleSteps from "@/components/Solutions/simpleSteps";
import Stats from "@/components/Solutions/stats";
import React, { useState, useEffect, useRef } from "react";

export default function Solutions() {
  const [openModalRequest, setOpenModalRequest] = useState(false);
  const containerRef = useRef(null);

  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };
  useEffect(() => {
    // initParallax();
    // initRotateSentences();

    import("locomotive-scroll").then((locomotiveModule) => {
      const LocomotiveScroll = locomotiveModule.default;
      new LocomotiveScroll({
        el: containerRef.current,
      });
    });
  }, []);

  return (
    <main
      className="w-full md2:px-[202px] px-[41px] md2:py-[162px] py-[120px] bg-white"
      ref={containerRef}
      data-scroll-container
    >
      <div className="flex flex-col overflow-hidden text-black md2:text-center">
        <div className="md2:text-[50px] text-[30px] md2:leading-[58px] leading-[38px] font-[700] text-blue mb-[20px]">
          Imprint
        </div>
        <div className="md2:text-[30px] text-[20px] md2:leading-[38px] leading-[28px] font-[400] mb-[60px]">
          (Legal Disclosure)
        </div>
        <div className="md2:text-[20px] text-[16px] md2:leading-[40px] leading-[28px] font-[400] mb-[60px]">
          YVOO Technologies d.o.o.
          <br />
          Ulica Vjekoslava Novotnija 12, 10000 Zagreb, Croatia
          <br />
          <br />
          Company register number: 081403239
          <br />
          Company register: Commercial Court in Zagreb
          <br />
          Court registration number: Tt-21/46365-2
          <br />
          <br />
          Business Purpose: Information technology service activities
          <br />
          <br />
          VAT number: HR11406548089
          <br />
          <br />
          IBAN: [Insert IBAN]
          <br />
          BIC: [Insert BIC]
          <br />
          <br />
          Supervisory authority: City of Zagreb Office for Economy, Labor and
          Entrepreneurship
          <br />
          Chamber affiliation: Croatian Chamber of Economy
          <br />
          The Trade Act 2008 is applicable to our activities and can be found at{" "}
          <a href="https://narodne-novine.nn.hr/" className="text-blue">
            https://narodne-novine.nn.hr/
          </a>
          .
        </div>
        <div className="md2:text-[30px] text-[20px] md2:leading-[38px] leading-[28px] font-[700] mb-[20px]">Contact</div>
        <div className="md2:text-[20px] text-[16px] md2:leading-[40px] leading-[28px] font-[400]">
          For all inquiries regarding Information Security, please contact our
          Information Security
          <br />
          Team:{" "}
          <a href="mailto:contact@yvoo.io" className="text-blue">
            contact@yvoo.io
          </a>
          <br />
          <br />
          Take a look at our{" "}
          <a href="/privacy-policy" className="text-blue">
            Privacy Policy
          </a>
          .
          <br />
          <br />
          © Copyright YVOO Technologies d.o.o.
          <br />
          <br />
          <div class="md2:leading-[28px]">
            The content of this website may not be copied, distributed, modified,
            or made available to third parties for commercial purposes without our
            explicit written permission. It is forbidden to integrate, link, or
            display this website or its content via a hyperlink in a partial
            window (frame). It is forbidden to change or remove copyright notices,
            brand names, or other content information.
          </div>
        </div>
      </div>
      <ModalRequest onClose={handleModal} visible={openModalRequest} />
    </main>
  );
}
