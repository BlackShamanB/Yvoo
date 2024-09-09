import Image from "next/image";

function Experience() {
  return (
    <div className="relative w-full flex-center 3xl:px-[204px] 2xl:px-[162px] md:px-[85px] px-[42px] pt-[100px] md:pt-[120px] 2xl:pt-[120px] pb-[100px] md:pb-[120px] 2xl:pb-[100px] bg-[#131D2A]">
      <div className="w-full" data-scroll data-scroll-speed="0.1">
        <h1 className="2xl:text-[32px] md:text-[28px] text-[26px]  2xl:leading-[36px] md:leading-[32px] leading-[30px] font-[700] text-[#00D1EF] 3xl:mb-[43px] 2xl:mb-[46px] mb-[30px] 3xl:max-w-[none] md:max-w-[345px]">
          Experience the Difference:
        </h1>
        <div className="font-[400] text-[14px] md:text-[16px] leading-[20px] [&>p]:2xl:max-w-[306px] [&>p]:2xl:max-w-[400px] gap-[30px] 2xl:gap-[38px] 3xl:gap-[162px] grid grid-cols-1 2xl:grid-cols-3">
          <p>
            Unprecedented Speed: Make sourcing decisions at an 
            unparalleled pace. With{" "}
            <span className="underline">YVOO SearchPro+</span>, you can source 
            and audit multiple suppliers in a matter of days, not months. 
            Turbocharge your procurement process and gain a competitive edge.
          </p>
          <p>
            Flawless Audits: Achieve an unmatched audit success rate with 
            every new supplier.{" "} 
            <span className="underline">YVOO ScanPro+</span> ensures strict
            compliance with your requirements and quality standards, 
            safeguarding your business against risks and maintaining superior 
            supplier performance.
          </p>
          <p>
            Cost Efficiency: Slash supplier qualification costs by a 
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
