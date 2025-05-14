"use client";
import Image from "next/image";
import ImgLeftToRight from "../ImgLeftToRight"
function JobDescription() {
  return (
    <div className="relative w-full px-[41px] md:px-[85px] 2xl:px-[162px] 3xl:px-[202px] pt-[140px] md:pt-[228px] 2xl:pt-[258px] 3xl:pt-[256px] 3xl:pb-[185px] 2xl:pb-[178px] md:pb-[132px] pb-[80px] bg-[#131D2A]">
      <ImgLeftToRight
        src="/icons/icon-line.svg"
        width={584}
        height={106}
        alt="line"
        classesImg="3xl:max-w-[unset] 2xl:max-w-[458px] md:max-w-[320px] max-w-[142px]"
        classesContainer="absolute overflow-hidden 3xl:top-[2%] 2xl:top-[0%] md:top-[-1.5%] top-[-1%] 3xl:left-[33.5%] 2xl:left-[35%] left-[0%] z-[1]"
        data-scroll
        data-scroll-speed="0.5"
      />
      <div className="flex flex-wrap 2xl:flex-nowrap 3xl:gap-[170px] 2xl:gap-[110px] md:gap-[62px] gap-[60px]">
        <div className="font-[400] text-[14px] md:text-[16px] flex flex-col 2xl:gap-[22px] md:gap-[18px] flex-1 basis-[500px] [&>p]:font-[400] [&>p]:text-[14px] md:[&>p]:text-[16px] [&>p]:leading-[20px] 3xl:max-w-[673px] 2xl:max-w-[503px]">
          <h1
            className="font-[700] text-[26px] md:text-[28px] 2xl:text-[32px] leading-[30px] md:leading-[32px] 2xl:leading-[36px] md:tracking-[-2px] md:mb-[0] mb-[12px]"
            data-scroll
            data-scroll-speed="0.18"
          >
            Job Description
          </h1>
          <p
            className="md:mb-[0] mb-[20px]"
            data-scroll
            data-scroll-speed="0.15"
          >
            As a YVOO agent, you'll play a crucial role in ensuring that
            companies' external suppliers meet their quality standards. Your
            responsibilities will include planning and scheduling evaluations,
            assessing the capabilities and legitimacy of potential suppliers,
            and producing detailed reports outlining their strengths and
            weaknesses.
          </p>
          <p
            className="md:mb-[0] mb-[20px]"
            data-scroll
            data-scroll-speed="0.12"
          >
            During on-site audits conducted at the supplier's manufacturing
            locations, you'll closely examine processes, engage with personnel,
            and analyze work instructions, quality plans, and statistical
            process control records. The aim is to determine if a new supplier
            qualifies as an approved vendor or verify that current suppliers
            meet regulatory and other requirements.
          </p>
          <p data-scroll data-scroll-speed="0.1">
            Our user-friendly ScanPro+ app will guide you through the entire
            process, making evaluations smooth and effortless.
          </p>
        </div>

        <div className="font-[400] text-[14px] md:text-[16px] leading-[20px] flex flex-col 2xl:gap-[22px] md:gap-[18px] flex-1 basis-[500px] 2xl:max-w-[unset] max-w-[503px]">
          <h1
            className="font-[700] text-[26px] md:text-[28px] 2xl:text-[32px] leading-[30px] md:leading-[32px] 2xl:leading-[36px] md:tracking-[-2px] md:mb-[0] mb-[12px]"
            data-scroll
            data-scroll-speed="0.1"
          >
            Skills Required
          </h1>
          <p
            className="md:mb-[0] mb-[20px]"
            data-scroll
            data-scroll-speed="0.12"
          >
            While past auditing experience and professional certification are
            beneficial, they are not mandatory. YVOO agents must possess strong
            analytical abilities and be capable of assessing supplier
            performance against various criteria.
          </p>
          <p
            className="md:mb-[0] mb-[32px]"
            data-scroll
            data-scroll-speed="0.15"
          >
            Take the first step towards revolutionizing supplier audits with
            YVOO ScanPro+. Apply now to become an agent and start earning money
            in a flexible and rewarding way.
          </p>
          <button
            className="rounded-[30px] blue_btn btn_animated_blue md:mt-[26px] mt-[0px] !max-w-[max-content] md:!p-[18px_62px] !p-[14px_32px] !h-[auto]"
            onClick={() => {
              window.open("https://scanpro.yvoo.io", "_blank");
            }}
            data-scroll
            data-scroll-speed="0.17"
          >
            Apply now
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobDescription;
