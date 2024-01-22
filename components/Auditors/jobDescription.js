"use client";

function JobDescription() {
  return (
    <div className="w-full px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[50px] md:py-[60px] 2xl:py-[106px] bg-[#F6F6F6]">
      <div className="flex flex-wrap md:flex-nowrap gap-[30px] 2xl:gap-[96px]">
        <div className="font-[400] text-[16px] leading-[19px] flex flex-col gap-4 flex-1 basis-[500px] [&>p]:text-black">
          <h1 className="text-black font-[700] text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] mb-[14px] md:mb-[26px]">
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

        <div className="font-[400] text-[16px] leading-[19px] flex flex-col gap-4 flex-1 basis-[500px] [&>p]:text-black">
          <h1 className="text-black font-[700] text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] mb-[14px] md:mb-[26px]">
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
            className="mt-[34px] filled_btn_primary !bg-black !border-black"
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
