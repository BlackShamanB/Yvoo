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
      <div className="flex flex-col overflow-hidden text-black">
        <div className="md2:text-[50px] text-[30px] md2:leading-[58px] leading-[38px] font-[700] text-blue md2:mb-[60px] mb-[40px]">
          Privacy policy
        </div>
        <div className="md2:px-[154px]">
          <div className="md2:text-[24px] text-[20px] md2:leading-[30px] leading-[28px] font-[700] mb-[28px]">
            1. RECITALS
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[700]">
            Scope of Application
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            1.1.     This Policy refers only and exclusively to personal data
            collected and processed via this web page according to GDPR (as
            defined hereinafter) and other legal act regulating data protection
            rights and obligations, including the data protection in electronic
            communications services.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            1.2.     Personal data is any information relating to an identified
            or identifiable natural person. Therefore, if the YVOO’s User (as
            defined hereinafter) is a legal person, this Policy will be
            applicable only to contact data (email and phone) of the User’s
            contact person. On the other side, would the YVOO’s User be a
            natural person - e.g. a buyer who is consumer - this Policy will be
            applicable to all User’s data collected via this web page.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            1.3.     Any other data which is not personal data, including data
            related to legal persons are not subject to this Policy.
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[700]">
            Definitions
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            “GDPR”                                            means Regulation
            (EU) 2016/679 of the European Parliament and of the Council (General
            Data Protection Regulation)
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            “Policy”                                             means this
            privacy policy regulating the data protection matters on this
            webpage according to GDPR and other applicable legal acts regulating
            data protection matters
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            “YVOO” or “Controller”                   means the company defined
            hereinafter in Art 2 who defines the purposes and means of
            processing the personal data on this web page
          </div>

          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            “Processor”                                       means YVOO’s
            business partner who processes personal data on behalf of YVOO,
            including those to whom the data collected via YVOO’s web page is
            made available (e.g. hosting provider/ IT service etc.)
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            “User”                                               means all
            registered users i.e. buyers and suppliers having the registered
            profile at YVOO’s web page
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            “Supervisory authority”                    means the state body
            authorized to monitor the behaviors of data controllers in the
            country and to undertake investigative, corrective and advisor
            measures for any breach of GDPR and any other relevant data
            protection law
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            “Recipient”                                        means any person
            other than YVOO to whom the YVOO will forward and/or make available
            the personal data collected on YVOO’s web page{" "}
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400] mb-[60px]">
            “Cross-border transaction”              means any transaction of
            personal data to the country and/or international organization being
            established outside the country of the establishment of YVOO
          </div>

          <div className="md2:text-[24px] text-[20px] md2:leading-[30px] leading-[28px] font-[700] mb-[28px]">
            2. WHO ARE WE?
          </div>
          <div className="flex-row md2:gap-[87px] md2:flex hidden mb-[60px]">
            <div className="flex md2:flex-col flex-row">
              <div className="font-[700] md2:text-[20px] text-[16px] leading-[40px]">
                Company:
              </div>
              <div className="font-[700] md2:text-[20px] text-[16px] leading-[40px]">
                Address:
              </div>
              <div className="font-[700] md2:text-[20px] text-[16px] leading-[40px]">
                Contact:
              </div>
              <div className="font-[700] md2:text-[20px] text-[16px] leading-[40px]">
                Supervisory authority:
              </div>
            </div>
            <div className="flex md2:flex-col flex-col">
              <div className="font-[400] md2:text-[20px] text-[16px] leading-[40px]">
                YVOO Technologies d.o.o.
              </div>
              <div className="font-[400] md2:text-[20px] text-[16px] leading-[40px]">
                Zagreb, Ulica Vjekoslava Novotnija 12
              </div>
              <div className="font-[400] md2:text-[20px] text-[16px] leading-[40px]">
                contact@yvoo.io
              </div>
              <div className="font-[400] md2:text-[20px] text-[16px] leading-[40px]">
                Croatian Personal Data Agency
              </div>
            </div>
          </div>
          <div className="flex flex-col md2:hidden block">
            <div className="flex md2:flex-row flex-col">
              <div className="font-[700] md2:text-[20px] text-[16px] leading-[40px]">
                Company:
              </div>
              <div className="font-[400] md2:text-[20px] text-[16px] leading-[40px]">
                YVOO Technologies d.o.o.
              </div>
            </div>
            <div className="flex md2:flex flex-col">
              <div className="font-[700] md2:text-[20px] text-[16px] leading-[40px]">
                Address:
              </div>
              <div className="font-[400] md2:text-[20px] text-[16px] leading-[40px]">
                Zagreb, Ulica Vjekoslava Novotnija 12
              </div>
            </div>
            <div className="flex md2:flex flex-col">
              <div className="font-[700] md2:text-[20px] text-[16px] leading-[40px]">
                Contact:
              </div>
              <div className="font-[400] md2:text-[20px] text-[16px] leading-[40px]">
                contact@yvoo.io
              </div>
            </div>
            <div className="flex md2:flex flex-col">
              <div className="font-[700] md2:text-[20px] text-[16px] leading-[40px]">
                Supervisory authority:
              </div>
              <div className="font-[400] md2:text-[20px] text-[16px] leading-[40px]">
                Croatian Personal Data Agency
              </div>
            </div>
          </div>

          <div className="md2:text-[24px] text-[20px] md2:leading-[30px] leading-[28px] font-[700] mb-[28px]">
            3. WHAT TYPE OF PERSONAL DATA DO WE PROCESS?
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            YVOO processes the data given by the Users themselves, either via
            Users' profiles and activities within the profile, or via
            verification proceedings.
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400] mb-[60px]">
            YVOO processes certain data related to internal messaging between
            the Users. YVOO will not have the access to the content of the
            correspondence. However, YVOO will have the access to the metadata –
            e.g. time and duration of messaging.
          </div>

          <div className="md2:text-[24px] text-[20px] md2:leading-[30px] leading-[28px] font-[700] mb-[28px]">
            4. WHY DOES YVOO PROCESS USER’S DATA?
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[700]">
            Contacting for the purposes of service provision
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            All of the Users registered on YVOO web page agreed on Terms of Use
            defining the terms and conditions under which YVOO will provide the
            service to the User. While having the registered account on YVOO web
            page, User is in contractual relationship with YVOO. YVOO will
            process the User’s data only on contractual basis i.e. only for
            purposes necessary to perform the contract.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            YVOO will be profiling i.e. will offer the specific services to the
            Users based on their preferences in case where the User will accept
            such option
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            YVOO will erase the User’s data upon User deactivates the account or
            loses the User’s right for any reason.
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[700]">
            Contacting for the purposes of service provision
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400] mb-[60px]">
            YVOO will send the newsletter to Users/visitors on basis of
            User’s/visitor’s consent (opt-in). Users/visitors can opt-out from
            the consent to receive the newsletter at any time. Opt-out does not
            affect the validity of processing which had occurred before the
            consent was revoked.
          </div>

          <div className="md2:text-[24px] text-[20px] md2:leading-[30px] leading-[28px] font-[700] mb-[28px]">
            5. THIRD PARTIES
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[700]">
            Recipients of personal data
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            All registered Users can see all personal data published in User’s
            profile. Other visitors of YVOO who are not the Users can see the
            following data published on other Users’ company profile: company
            name, contact data (email, phone), company address YVOO uses only
            reliable business partners for Processors who satisfy high privacy
            standards. Categories of YVOO’s Processors are:
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         hosting service
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         newsletter service
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         IT support
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         YVOO service partners - business partners of YVOO who will
            perform certain YVOO’s services on spot{" "}
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[700]">
            Recipients of personal data
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            Since YVOO is a global service platform, data collected via YVOO’s
            web page will inevitably be transferred outside EEA countries. Where
            applicable, YVOO will adopt appropriate safeguards (e.g. standard
            contractual clauses issues by European Commission). Where general
            appropriate safeguard as defined in GDPR are not applicable, YVOO
            will transfer the data only in order to fulfill the contractual
            obligation to registered user (to perform the service ordered by the
            user via YVOO web page)
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[700]">
            Links to other web pages and social media
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            YVOO can publish link to other web pages. It can happen e.g. when
            YVOO publishes informative articles/news including the links to
            other pages. It can also happen when other Users publish the
            company’s link on its User’s profile. YVOO can not warrant for
            appropriate protection of data protection right on those pages.
            Therefore, the User should and is encouraged to get familiar with
            the privacy terms and conditions on respective web pages. YVOO will
            not be held liable for any unlawfulness, including unlawfulness
            connected to data privacy rights, found of the web page of third
            party.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400] mb-[60px]">
            YVOO can put on its web page the links to social media i.e. to
            YVOO’s profile on Facebook, Linkedin, Instagram, Twitter. By
            clicking on social media icons on YVOO’s official web page, the data
            collected on YVOO can be transferred to related social media
            provider. Please note that YVOO is not liable for the purpose/manner
            and any other features of data processing by social media.
            Therefore, Users should get familiar with privacy terms of social
            media to which they approached through YVOO web site.{" "}
          </div>
          <div className="md2:text-[24px] text-[20px] md2:leading-[30px] leading-[28px] font-[700] mb-[28px]">
            6. USER’S RIGHTS
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            In any case, you have a right to access, rectification, restriction
            of processing your data. Depending on legal basis and manner of
            processing, you can have right on data portability, objection to
            processing and to revoke the consent.
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400] mb-[60px]">
            You can send your inquiries on info@yvoo.io. Besides, you can send
            the objections to Croatian Personal Data Protection Agency (Croatian
            Supervisory authority) on 
            <a className="underline" href="mailto:azop@azop.hr">
              azop@azop.hr
            </a>
            , or to Supervisory authority established in User’s country.{" "}
          </div>

          <div className="md2:text-[24px] text-[20px] md2:leading-[30px] leading-[28px] font-[700] mb-[28px]">
            7. MISCELLANEOUS
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            YVOO reserves right to update this Policy. All updates will be
            created and published in the same manner as this Policy. All Users
            will be specifically informed of any amendment of the Policy either
            in first next occasion when they visit YVOO, or via email.
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            Each amendment of this Policy will designate the date as of which
            the amendments will be applicable.
          </div>
          <br />
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            Last time updated on 23.08.2021
          </div>
        </div>
      </div>
      <ModalRequest onClose={handleModal} visible={openModalRequest} />
    </main>
  );
}
