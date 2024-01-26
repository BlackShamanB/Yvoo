import Image from "next/image";

function Experience() {
  return (
    <div className="relative w-full flex-center px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] py-[46px] md:py-[60px] 2xl:py-[96px] bg-[#131D2A]">
      <Image
        src="/icons/experience-icon.svg"
        width={127}
        height={125}
        alt="experience"
        className="hidden md:block absolute -top-[38px] right-[24%]"
      />
      <div className="w-full">
        <h1 className="text-[32px] leading-[32px] font-[700] text-[#00D1EF] mb-[36px] 2xl:mb-[44px]">
          Experience the Difference:
        </h1>
        <div className="font-[400] text-[14px] customxs:text-[16px] leading-[17px] customxs:leading-[19px] [&>p]:md:max-w-[306px] [&>p]:2xl:max-w-[400px] gap-4 grid grid-cols-1 md:grid-cols-3">
          <p>
            <b>Unprecedented Speed:</b> Make sourcing decisions at an
            unparalleled pace. With{" "}
            <span className="underline">YVOO SearchPro+</span>, you can source
            and audit multiple suppliers in a matter of days, not months.
            Turbocharge your procurement process and gain a competitive edge.
          </p>
          <p>
            <b>Flawless Audits:</b> Achieve an unmatched audit success rate with
            every new supplier.{" "}
            <span className="underline">YVOO SearchPro+</span> ensures strict
            compliance with your requirements and quality standards,
            safeguarding your business against risks and maintaining superior
            supplier performance.
          </p>
          <p>
            <b>Cost Efficiency:</b> Slash supplier qualification costs by a
            remarkable 70% without compromising on quality. YVOO B2BSourcerPro+
            streamlines your procurement efforts, allowing you to optimize
            resources and achieve substantial savings.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
