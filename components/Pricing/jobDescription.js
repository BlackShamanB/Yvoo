"use client";
import Image from "next/image";
import ImgLeftToRight from "../ImgLeftToRight";
import MagnifyOnScroll from "../MagnifyOnScroll";
function JobDescription() {
  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };
  return (
    <div className="relative w-full bg-white md:bg-pricingBgMd bg-pricingBg bg-no-repeat md:bg-right-top bg-left-center md:mb-[417px]">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="relative flex flex-col md:gap-[60px] gap-[30px] md:px-[0] px-[41px]">
          <div className="justify-items-center">            
            <MagnifyOnScroll
              src="/images/Pricing1.webp"
              width={673}
              height={688}
              imgClasses="md:ml-[116px] ml-auto md:max-w-[unset] max-w-[90%]"
            ></MagnifyOnScroll>
          </div>
          <div>
            <MagnifyOnScroll
              src="/images/Pricing2.webp"
              width={719}
              height={346}
              imgClasses="md:ml-[unset] ml-[-41px]"
            ></MagnifyOnScroll>
          </div>
          <div className="md:pb-[295px] pb-[75px]">
            <MagnifyOnScroll
              src="/images/Pricing3.webp"
              width={592}
              height={592}
              imgClasses="md:absolute md:left-[37%] ml-[41px] abcd"
            ></MagnifyOnScroll>
          </div>
        </div>
        <div className="flex flex-col gap-[42px] text-black justify-center md:pl-[85px] md:pr-[202px] px-[41px] md:pb-[0] pb-[80px]">
          {" "}
          <div>
            <div className="text-black md:text-[40px] text-[26px] md:leading-[48px] leading-[34px] font-[700]">
              Global audits. Local expertise. <br /> Built around your needs.
              <br />
              <br />
            </div>
            <div className="font-[300] md:text-[24px] text-[18px] md:leading-[30px] leading-[26px]">
              Whether you're onboarding a new supplier, ensuring compliance, or
              auditing across multiple sites - YVOO helps you stay in control.
            </div>
            <div className="font-[300] md:text-[24px] text-[18px] md:leading-[30px] leading-[26px]">
              Our certified auditors,smart audit framework, and flexible
              on-siteservices make it easy to scale supplier assurance
              worldwide.
            </div>
          </div>
          <div>
            <div className="font-[500] md:text-[30px] text-[20px] md:leading-[38px] leading-[28px]">
              Not sure what fits best?
              <br />
              <br />
            </div>
            <div className="font-[300] md:text-[24px] text-[18px] md:leading-[30px] leading-[26px]">
              We’ll help definethe right scope - from one-time auditsto complete
              inspection programs.
            </div>
          </div>
          <div className="flex flex-row md:gap-[30px] gap-[14px]">
            <div
              className="text-black md:text-[16px] text-[12px] md:leading-[20px] leading-[16px] font-[500] w-[max-content] md:p-[20px_64px] p-[16px_34px] bg-blue rounded-[30px] uppercase whitespace-nowrap"
              onClick={handleModal}
            >
              talk to our team
            </div>
            <div className="flex flex-row items-center gap-[8px]">
              <Image src="/icons/blue_arrow.svg" width={16} height={16}></Image>
              <div className="text-black md:text-[16px] text-[12px] md:leading-[20px] leading-[16px] md:min-w-[100px]">
                Request a custom offer
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
