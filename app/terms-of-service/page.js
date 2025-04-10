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
        Terms of Service
        </div>
        <div className="lg2:px-[154px]">
          <div className="md2:text-[24px] text-[20px] md2:leading-[30px] leading-[28px] font-[700] mb-[28px]">
            TERMS OF USE
            <br/>
            <br/>
            1. RECITALS
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            These Terms of Use contain right and duties which you undertake by
            registering your user’s profile. Registration of your profile
            implies that you have read and understood them.
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[700]">
            Scope of Application
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            1.1. These Terms of Use apply to all registered legal or natural
            person registered as buyer or supplier (according to the definition
            of the “buyer” and “supplier” provided hereinafter) at YVOO
            platform. These Terms of Use apply to all YVOO’s registered buyers
            and suppliers notwithstanding the intensity of their activities
            during the registration term.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            1.2. In a cases where one user with registered account is active as
            both, Buyer and Supplier, both Terms of Use for Buyers and Terms of
            Use for the Suppliers are applied to the relationship between YVOO
            and such user, depending on the role which user takes in each
            specific situation.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            1.3. These Terms of Use do not apply to unregistered visitors of
            YVOO, except Art 7 (Intellectual Property rights which is applicable
            to all visitors of YVOO’s web page)
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[700]">
            Definitions
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            1.3. For the purposes of interpretation of these terms of use, the
            following definitions will have the following meaning:
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            “YVOO”                     means platform/search engine on web
            domain yvoo.io{" "}
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            “Terms of Use”                        means this legal act
            representing the obligatory contractual agreement between YVOO and
            Supplier. {" "}
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            “Supplier”                                means user having the
            registered profile at YVOO as a supplier with the purpose of
            upleveling its visibility on the market and presenting itself to the
            potential buyers according to these Terms and Conditions{" "}
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            “Buyer”                                    means user having the
            registered profile at YVOO as a buyer with the purpose of searching
            potential providers/sellers of goods or/and services (Suppliers)
            with possibilities to check the features and quality of Suppliers’
            goods and/or services via YVOO according to these Terms of Use and
            Terms of Use for the Buyers{" "}
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            “YVOO Service{" "}
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            Partner”                       means the person trained by YVOO and
            acting on behalf of YVOO who will make necessary checks at
            Supplier’s business activity in order to make a proper verification
            of Supplier’s goods and services which will be visible to interested
            Buyer{" "}
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            “Service”                                 means service provided by
            YVOO to Supplier according to the specifications defined here
            app.yvoo.io, representing the integral part of these Terms of Use,
            among which the Supplier freely chooses which of offered services
            will be contracted for and consumed{" "}
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400] mb-[60px]">
            “Compensation”          means compensation for each Service defined
            here app.yvoo.io, representing the integral part of these Terms of
            Use, payable according to the terms and conditions of these Terms of
            Use{" "}
          </div>
          <div className="md2:text-[24px] text-[20px] md2:leading-[30px] leading-[28px] font-[700] mb-[28px]">
            2. SERVICES AND COMPENSATION
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            2.1. All Services and related Compensations offered by YVOO to the
            Suppliers are available here app.yvoo.io.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            2.2. YVOO will inform the Supplier on possibility to extend the
            registration term at least 1 month before the expiry of pending
            registration term with the offer of extension. In case that the
            Supplier does not make payment for the extension of registration
            term, the Supplier’s profile at YVOO will be revoked upon the expiry
            of pending registration term.{" "}
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400] mb-[60px]">
            2.3. The Supplier whose profile is revoked according to previous
            clause can reactivate the profile at any time by accepting these
            Terms of Use and making the new Compensation payment.
          </div>
          <div className="md2:text-[24px] text-[20px] md2:leading-[30px] leading-[28px] font-[700] mb-[28px]">
            3. ACTIVATION OF THE ACCOUNT
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            3.1. YVOO will provide the Service only to the Supplier’s with
            validly registered account.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            3.2. In order to register, the Supplier will issue a user name and
            password whereas the password will be known only to the Supplier.
            The registration is completed by a proof of the existence of the
            Supplier which is usually done by email confirmation.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            3.3. Non-registered Suppliers will have limited approach to the
            YVOO’s content to the extent necessary to get the general impression
            on content and features of the Service.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            3.4. Registered Supplier has a right to create the company profile
            which will be visible to all other registered users of YVOO. The
            company profile can contain hyperlink to Supplier’s web page and
            other details connected to the Supplier’s business.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            3.5. Supplier undertakes the full liability for accuracy and
            lawfulness of all data published on Supplier’s profile at YVOO. YVOO
            has developed and implemented the Privacy Policy which the
            registered users need to read and accept before the registration and
            which are available here app.yvoo.io. Privacy Policy defines in more
            details the rights and obligations of the users' data contained in
            users' profile.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            3.6. The Supplier has a right to deactivate the profile at any
            moment. In case the Supplier deactivates the profile before the
            expiry of the subscription, it does not give the right to the
            Supplier to any refund of any part of the Compensation.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400] mb-[60px]">
            3.7. In case where, upon the expiry, the subscription is not
            prolonged by the Supplier, the account will remain active as long as
            the Supplier performs activities/ logs in. In case where the
            Supplier would not perform activities/ log in the account for the
            period longer than 1 year, YVOO will send reminder via email,
            leaving one month for refreshing the account. In case where the
            Supplier would remain passive, YVOO will erase the Supplier's
            account.
          </div>
          <div className="md2:text-[24px] text-[20px] md2:leading-[30px] leading-[28px] font-[700] mb-[28px]">
            4. LIABILITY; COMPENSATION OF DAMAGES
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            4.1. YVOO is liable for:
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         permanently training and educating the employees and YVOO
            Service Partners for providing high-level Service in accordance to
            these Terms of Use and professional standards
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         providing the Service according to the specification of
            Service and within defined deadlines
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         equally treating all visitors and/or registered users
            (Buyers and Suppliers) within the same category
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            4.2. YVOO is liable only for those misconducts among those listed
            hereinabove if they are committed by intent or by gross
            negligence. YVOO will not be held liable for misconducts resulting
            from ordinary negligence.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            4.3. YVOO is not liable for:
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         finding the matching Buyer for the Supplier
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         any inaccurate data published on Supplier’s and/or Buyer’s
            company profile
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         any potential obligation to make the profit via YVOO
            platform neither for the Buyer, nor for the Supplier and/or to make
            any potential business advantages and/or saving the potential costs
            as a consequence of using YVOO’s Service
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         legal representation of the Buyers and/or Suppliers in
            course of legal transaction and/or any other legal relation which
            might result between them as a consequence of the activities
            undertaken and/or Service consumed on YVOO platform
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         invalid and unlawful performance of obligations that might
            be result between the Buyer and/or Supplier as a consequence of the
            activities undertaken and/or Service consumed on YVOO platform, such
            as payment obligation and/or delivery of conforming services and/of
            goods
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         any kind of unethical and/or unprofessional behavior of
            the Buyer and/or Supplier connected with YVOO platform in any manner
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         Supplier’s and/or Buyer’s misrepresentation of the facts
            and/or circumstances that might lead to inaccurate verification
            results for which YVOO did not have a prior knowledge
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         Supplier’s and/or Buyer’s non-compliance with any kind of
            regulatory requirements
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         temporary unavailability of the Service due to technical
            maintenance, installation(s)/modification work on YVOO platform as
            well as continuous operation of technical equipment (e.g. for the
            Supplier's Internet access) or third-party applications (e.g. the
            availability of a third-party App Store)
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            4.4. The Supplier in any case undertake full liability for entering
            into any kind of contractual or other legal relation with other
            Suppliers and/or Buyers and/or performing any of the rights and/or
            obligations motivated by activities on YVOO platform. Under no
            circumstances does YVOO undertake any liability for the behavior
            and/or performance of rights and obligations in contractual
            relations and/or negotiations between the registered users.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            4.5. Notwithstanding the fact that the Buyer and the Supplier will
            be exclusively held liable for their own activities connected anyhow
            with the YVOO, all other users are encouraged to report to YVOO any
            bad experience with any of the Buyers and/or Suppliers and/or
            suspicion on any irregular and/or unethical activity and on any
            activity that might be contrary to the commonly accepted standards
            of prudent businessmen. YVOO reserves the right to further examine
            such reports and to bring independent decision whether to suspend
            the account of the reported Buyer and/or Supplier, taking into
            account how reported occasions might affect the quality of the
            Service and/or reputation of YVOO.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400] mb-[60px]">
            4.6. Would any third party, including but not limiting to regulatory
            bodies, find YVOO liable for any circumstances listed in this
            Article as falling out of scope of YVOO’s liability under these
            Terms of Use, the Seller or the Buyer in matter will, upon first
            YVOO’s call, undertake the liability for all monetary and
            non-monetary claims that any third party had directed toward YVOO.
            In case where YVOO would be obliged, for any reason, to make any
            payments/compensations in kind or any other kind of remuneration for
            the circumstances falling out of the scope of YVOO’s liability, the
            Buyer or Supplier in matter will remunerate YVOO for the paid amount
            increased for interest rate starting as of the day of the payment by
            YVOO.
          </div>
          <div className="md2:text-[24px] text-[20px] md2:leading-[30px] leading-[28px] font-[700] mb-[28px]">
            5. SUSPENSION OF THE ACCOUNT
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            5.1. YVOO has a right to unilaterally suspend the Supplier’s account
            with the immediate effect in following cases:
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         the Supplier fake, misrepresent or hide the fact that are
            relevant or might be relevant for the results of the verification
            procedures within the Service
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         the Supplier has provided the false information for
            registration or false information in course of verification
            procedures
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         the Supplier has repeatedly or seriously violated these
            Terms of Use
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         the Supplier breaches applicable laws using YVOO (eg.
            consumers’ rights, competition rules etc.)
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         the Supplier and/or it’s employees are convicted for
            crime/misdemeanor
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         the Supplier uses YVOO’s intellectual property rights
            contrary to these Terms of Use
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         the Supplier commit any other misconduct that affected or
            might affect the reputation of YVOO and/or credibility of the
            Service
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            5.2. YVOO has a right, but is not obliged, to suspend the Supplier’s
            account without sending the prior warning to the Supplier ordering
            the compliance with the terms and conditions of these Terms of Use.
            In case where the YVOO would decide to send the such prior warning,
            it will leave 15 additional days to the Supplier to comply with
            these Terms and Conditions.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            5.3. In case where YVOO would suspend the Supplier’s account
            according to this clause, YVOO will finish all verification
            procedures/Service ordered by the Buyers (and related to the
            suspended Supplier) which are commenced but not finished at the time
            of the verification. With the results of the verification/completion
            of Service, YVOO will inform the Buyer that the Supplier in the
            meantime has been suspended. Besides finishing already commenced
            verification procedures, the Supplier will lose all other rights
            from the account (including the rights that Supplier might have as a
            Buyer) and it will be erased from YVOO’s portfolio. Would any other
            registered user of YVOO’s platform seek for the Supplier with
            suspended account, it will be shown that the profile is not active
            any more.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            5.4. In case where YVOO would suspend the Supplier’s account
            according to this clause, YVOO is entitled to keep the compensation
            for the registration paid for entire registration period,
            notwithstanding the account is suspended before expiry of the
            registration period. YVOO will be entitled to all other damages
            incurred thereof, including but not limited to all material damages,
            reputation and goodwill loss, as well as compensation for third
            party claims initiated against YVOO due to Supplier’s activities
            and/or omittances that lead to the suspension of the account.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            5.5. As of the moment when the Supplier’s account would be
            suspended, the Supplier is not authorized to use the cooperation
            with YVOO as a professional reference in any kind of presentation
            and/or communication.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400] mb-[60px]">
            5.6. The YVOO has a right, but is not obliged to, allow to the
            suspended Supplier the new registration in the future. YVOO will
            base this decision on subsequent Supplier’s behavior and goodwill
            that Supplier builds on the market.
          </div>
          <div className="md2:text-[24px] text-[20px] md2:leading-[30px] leading-[28px] font-[700] mb-[28px]">
            6. CONFIDENTIALITY
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            6.1. One of the main principles of YVOO’s work and the Service is
            transparency and possibility to make informed decision on buying of
            products and/or services on long distance. Therefore, by using YVOO
            platform, the Supplier accepts to reveal to YVOO potential Buyers
            all business relevant data related to the type, quality and features
            of the Supplier’s product and/or service. With respect to those
            categories of data, there is no confidentiality obligation.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            6.2. Confidentiality obligations regarding the Service will relate
            to the following occasions:
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         personal data related to private life of Buyers,
            Suppliers, members of their management or shareholders’ board, their
            employees or business partners that might be exposed to YVOO and/or
            YVOO Service Partners during the verification procedures{" "}
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         specific know-how implementation procedures that might be
            exposed to YVOO and/or YVOO Service Partners will not be further
            disclosed if the type, quality and features of the Supplier’s
            product and/or service can be transparently presented to the
            Buyer without those data.{" "}
          </div>
          <div className="md2:text-[24px] text-[20px] md2:leading-[30px] leading-[28px] font-[700] mb-[28px]">
            7. INTELLECTUAL PROPERTY RIGHTS
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            7.1. All intellectual property in and on the YVOO search engine is
            and remains with YVOO. The Supplier will respect the rights of YVOO.
            The Supplier has a right to use YVOO’s intellectual property in a
            manner as it follows:
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         to use YVOO’s logo or elements of visual identity for the
            purpose of presenting the cooperation with YVOO as a business
            reference at Supplier’s web page or promotional materials
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         to use YVOO’s logo or elements of visual identity in the
            signature of Supplier’s business emails or visit cards for the
            purpose of presenting the Supplier’s presence in YVOO’s network
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            whereas YVOO reserves the right to, without limitations, prohibit
            with immediate effect one or all aspects of the Supplier’s usage of
            YVOO’s intellectual property if YVOO would find such usage unlawful,
            inappropriate or unwanted for any reason.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            7.3. YVOO grants the buyer the worldwide, simple, non-exclusive,
            non-sublicensable and non-transferable right, limited in time to the
            registered term to use the YVOO platform and the ordered scope of
            services to the extent agreed in previous paragraph of this Article
            and to the extent agreed in these Terms of Use.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            7.4. Apart from the right of use expressly granted herein, the
            Supplier is not granted any further rights of any kind whatsoever,
            in particular to the company name, to industrial property rights
            such as patents, utility models, trademarks or other intellectual
            property, nor does YVOO have a corresponding obligation to grant
            such rights. The YVOO is a web service. There is no claim to the
            publication of search engine algorithms and other software,
            especially source codes.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            7.5. The Supplier is prohibited from:
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         granting third parties access to the YVOO platform, unless
            this is expressly permitted by these Terms of Use or expressly
            permitted by YVOO for specific case,
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         copying, displaying or mirroring components or contents of
            the YVOO platform with the exception of the purposes listed in this
            article,
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         carrying out reverse engineering of the YVOO platform,
            e.g. in order to (a) create a competing product or service, or (b)
            copying features, functions or graphics of the YVOO platform. The
            information obtained from the YVOO platform may not be sold, rented
            or otherwise made available to third parties by the purchaser at any
            time. Information, brand names and other content from the YVOO
            platform may not be changed, copied, reproduced, sold, rented, used,
            supplemented or otherwise exploited without prior written permission
            from YVOO.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            7.6. The Supplier is responsible for monitoring the use of the YVOO
            platform by its users (e.g. employees) and immediately notifies YVOO
            in writing of any use which goes beyond the contractual agreements.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            7.7. YVOO is granted the simple, free of charge, irrevocable and
            locally, temporally and materially unlimited as well as transferable
            and sub-licensable right to use, exploit, process, aggregate,
            analyze, reproduce, modify and further develop any data on the usage
            behavior, feedback and suggestions of the Supplier with regard to
            the YVOO platform, e.g. to improve the YVOO platform or to develop
            further products and services
          </div>
          <div className="md2:text-[24px] text-[20px] md2:leading-[30px] leading-[28px] font-[700] mb-[28px]">
            8. CUSTOMER SERVICE, INFORMATION DELIVERY
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            8.1. YVOO is available to Suppliers on the following contact data:
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            <a href="mailto:info@yvoo.io">info@yvoo.io</a>
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            8.2. YVOO is due to provide the answer to the request within 15 days
            as of the day of receipt.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            8.3. All communication, information, updates etc. will be sent to
            contact data that Supplier had delivered in it’s registration form.
            All contact data are available to the Supplier on user’s profile. In
            case of change of any contact data, the Supplier is due to make
            necessary amendments in user’s profile without delays.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400] mb-[60px]">
            8.4. All information sent to the Supplier by YVOO will be deemed
            validly sent if it is sent on contact data designated in Supplier’s
            user profile. Supplier will be held liable for all damages incurred
            by providing invalid or outdated contact data or by omitting to
            regularly check accuracy and/or to update the contact data.
          </div>
          <div className="md2:text-[24px] text-[20px] md2:leading-[30px] leading-[28px] font-[700] mb-[28px]">
            5. DISPUTE RESOLUTION
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[700]">
            Mediation
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            5.1. All disputes arising out or in connection with these Terms of
            Use and/or performance of rights and duties arising out or in
            connection with the Service and/or arising out or in connection of
            using YVOO platform, including but not limited to (in)validity,
            breach or termination or any legal consequences arising thereof will
            be firstly resolved in front of Mediation Protocol of Croatian
            Chamber of Commerce.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            5.2. The attempt will be deemed unsuccessful and the parties will be
            authorized to commence arbitration proceedings in following
            occasions:
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         if YVOO and the Supplier do not reach agreement within 30
            days as of the day when another party received the request for
            mediation
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            -         if one of the parties or both parties mutually declare
            after the first mediation meeting that they are not willing to
            proceed with the dispute resolution in mediation proceedings
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            5.3. The parties are willing to be present in mediation meeting
            either online, or in person, upon decision of each party for itself.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            5.4. If one of the parties would not attend the first mediation
            meeting without justification or would obstruct the meeting in any
            other manner, the second mediation meeting will be convened within
            15 days. If the second meeting would be unsuccessful due to same
            reason, the mediation proceedings will be deemed finished and
            another party will be authorized to commence arbitration.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            5.5. In such case, the obstructing party will be due to compensate
            all the costs incurred by the mediation proceedings, notwithstanding
            the outcome in further proceedings. In all other cases, each party
            will be bear its own costs of the proceedings, unless agreed
            otherwise.
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[700]">
            Arbitration
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            5.6. Would the parties not succeed to resolve the dispute in
            mediation proceedings, the dispute will finally be resolved in front
            of arbitration proceedings of Croatian Chamber of Commerce according
            to the Protocol on Arbitration Proceedings.
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            Number of arbitrators will be three.
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            Place of arbitration will be Zagreb, Croatia.
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[700]">
            Applicable Law
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            5.7. Law applicable to will be substantive law of the Republic of
            Croatia, excluding the collision rules of private international law.
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[700]">
            Language
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400]">
            5.8. The language of this Terms of Use is English. All potential
            disputes arising out or in connection to these Terms of Use will be
            resolved in English language.
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400] mb-[50px]">
            5.9. This clause is related strictly to the disputes between YVOO
            and Supplier, having no prejudice to dispute resolution and
            applicable law in disputes between Supplier and Buyer.{" "}
          </div>
          <br />
          <div className="md2:text-[24px] text-[20px] md2:leading-[30px] leading-[28px] font-[700] mb-[28px]">
            6. MISCELLANEOUS
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400] mb-[50px]">
            6.1. These Terms of Use are regularly updated with purpose of
            further clarifications if needed and/or in order adapt the Terms of
            Use to possible amendments and improvements of Service.
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400] mb-[50px]">
            6.2. All updates will be created and published in the same manner as
            these Terms of Use. All Suppliers and Buyers will be specifically
            informed of any amendment of Terms of Use either in first next
            occasion when they visit YVOO, or via email.{" "}
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400] mb-[50px]">
            6.3. Each amendment of these Terms of Use will designate the date as
            of which the amendments will be applicable.{" "}
          </div>
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400] mb-[50px]">
            6.4. For all clarifications and uncertainties regarding the meaning
            of the rights and duties and/or terms and conditions arising out of
            these Terms of Use, please contact YVOO at email address
            info@yvoo.io{" "}
          </div>
          <br />
          <div className="md2:text-[20px] text-[16px] md2:leading-[28px] leading-[22px] font-[400] mb-[50px]">
            Last time updated on 23.08.2021
          </div>
        </div>
      </div>
      <ModalRequest onClose={handleModal} visible={openModalRequest} />
    </main>
  );
}
