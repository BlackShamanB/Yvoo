"use client";
import Image from "next/image";
function JobDescription() {
  return (
    <div className="relative w-full px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] pt-[50px] md:pt-[60px] 2xl:pt-[256px] pb-[185px] bg-[#131D2A]">
      <Image
        src="/icons/icon-line.svg"
        width={584}
        height={106}
        alt="triangle"
        className="absolute 3xl:top-[65%] 3xl:top-[2%] 2xl:top-[48%] md:top-[37.5%] top-[18%] 3xl:left-[33.5%] 2xl:left-[-15%] md:left-[-45%] left-[-62%] mouse-parallax z-[1]"
      />
      <div className="flex flex-wrap md:flex-nowrap gap-[30px] 2xl:gap-[170px]">
        <div className="font-[400] text-[14px] md:text-[16px] flex flex-col gap-[22px] flex-1 basis-[500px] [&>p]:font-[400] [&>p]:text-[14px] md:[&>p]:text-[16px] [&>p]:leading-[20px] 3xl:max-w-[673px]">
          <h1 className="font-[700] text-[26px] md:text-[28px] 2xl:text-[32px] leading-[30px] md:leading-[32px] 2xl:leading-[36px] tracking-[-2px]">
            Job Description
          </h1>
          <p>
            As a YVOO agent, you'll play a crucial role in ensuring that
            companies' external suppliers meet their quality standards. Your
            responsibilities will include planning and scheduling evaluations,
            assessing the capabilities and legitimacy of potential suppliers,
            and producing detailed reports outlining their strengths and
            weaknesses.
          </p>
          <p>
            During on-site audits conducted at the supplier's manufacturing
            locations, you'll closely examine processes, engage with personnel,
            and analyze work instructions, quality plans, and statistical
            process control records. The aim is to determine if a new supplier
            qualifies as an approved vendor or verify that current suppliers
            meet regulatory and other requirements.
          </p>
          <p>
            Our user-friendly ScanPro+ app will guide you through the entire
            process, making evaluations smooth and effortless.
          </p>
        </div>

        <div className="font-[400] text-[14px] md:text-[16px] leading-[20px] flex flex-col gap-[22px] flex-1 basis-[500px]">
          <h1 className="font-[700] text-[26px] md:text-[28px] 2xl:text-[32px] leading-[30px] md:leading-[32px] 2xl:leading-[36px] tracking-[-2px]">
            Skills Required
          </h1>
          <p>
            While past auditing experience and professional certification are
            beneficial, they are not mandatory. YVOO agents must possess strong
            analytical abilities and be capable of assessing supplier
            performance against various criteria.
          </p>
          <p>
            Take the first step towards revolutionizing supplier audits with
            YVOO ScanPro+. Apply now to become an agent and start earning money
            in a flexible and rewarding way
          </p>
          <button
            className="filled_btn_blue 2xl:mt-[26px] md:mt-[36px] mt-[24px] md:max-w-[223px] max-w-[136px]"
            onClick={() => {
              window.open("https://scanpro.yvoo.io", "_blank");
            }}
          >
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
