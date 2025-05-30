"use client";
import Image from "next/image";
import ImgLeftToRight from "../ImgLeftToRight";
function JobDescription() {
  const handleModal = () => {
    setOpenModalRequest((prev) => !prev);
  };
  return (
    <div className="relative w-full bg-white md:bg-pricingBgMd bg-pricingBg bg-no-repeat bg-right-top mb-[417px]">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="relative flex flex-col gap-[60px]">
          <div className="justify-items-center">
            <Image
              src="/images/Pricing1.webp"
              width={673}
              height={688}
              className="md:ml-[116px]"
            ></Image>
          </div>
          <div>
            <Image src="/images/Pricing2.webp" width={719} height={346}></Image>
          </div>
          <div className="pb-[295px]">
            <Image
              src="/images/Pricing3.webp"
              width={592}
              height={592}
              className="md:absolute md:left-[37%]"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col gap-[42px] text-black justify-center md:pl-[85px] md:pr-[202px]">
          {" "}
          <div>
            <div className="text-black md:text-[40px] text-[28px] md:leading-[48px] leading-[34px] font-[700]">
              Global audits. Local expertise. Built around your needs.
              <br />
              <br />
            </div>
            <div className="font-[300] text-[24px] leading-[30px]">
              Whether you're onboarding a new supplier, ensuring compliance, or
              auditing across multiple sites - YVOO helps you stay in control.
            </div>
            <div className="font-[300] text-[24px] leading-[30px]">
              Our certified auditors,smart audit framework, and flexible
              on-siteservices make it easy to scale supplier assurance
              worldwide.
            </div>
          </div>
          <div>
            <div className="font-[500] text-[30px] leading-[38px]">
              Not sure what fits best?
              <br />
              <br />
            </div>
            <div className="font-[300] text-[24px] leading-[30px]">
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
              <div className="text-black md:text-[16px] text-[12px] md:leading-[20px] leading-[16px] min-w-[100px]">
                Get Your Verified Supplier Report
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
