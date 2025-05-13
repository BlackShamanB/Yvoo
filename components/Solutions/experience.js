import Image from "next/image";

function Experience() {
  return (
    <div className="relative w-full flex-center 3xl:px-[204px] 2xl:px-[162px] md:px-[85px] px-[42px] pt-[80px] md:pt-[120px] pb-[80px] md:pb-[120px] bg-[#131D2A]">
      <div className="w-full" data-scroll data-scroll-speed="0.1">
        <div className="font-[400] text-[14px] md:text-[16px] leading-[20px] [&>p]:2xl:max-w-[306px] [&>p]:2xl:max-w-[400px] gap-[30px] 2xl:gap-[38px] 3xl:gap-[60px] grid grid-cols-1 2xl:grid-cols-3">
          <div className="flex flex-col md:gap-[24px] gap-[16px]">
            <Image
              src={"/icons/Speed.svg"}
              alt="back arrow"
              width="80"
              height="80"
            />
            <div className="text-blue font-[700] md:text-[30px] text-[20px] md:leading-[38px] leading-[28px] md:mt-[0] mt-[8px]">
              Unprecedented Speed:
            </div>
            <p className="font-[400] md:text-[20px] text-[16px] md:leading-[28px] leading-[22px]">
              Make sourcing decisions faster than ever. With <span className="font-[700]">Matchory</span>, you gain
              instant access to a global database of <span className="font-[700]">14M+ suppliers</span>, enabling
              rapid and <span className="font-[700]">AI&#8209;powered supplier discovery</span>. Identify the best-fit
              suppliers in <span className="font-[700]">seconds</span>, reducing procurement cycles from months to
              days.
            </p>
          </div>
          <div className="flex flex-col md:gap-[24px] gap-[16px] md:mt-[0] mt-[30px]">
            <Image
              src={"/icons/Precision.svg"}
              alt="back arrow"
              width="80"
              height="80"
            />
            <div className="text-blue font-[700] md:text-[30px] text-[20px] md:leading-[38px] leading-[28px] md:mt-[0] mt-[8px]">
              Data-Driven Precision:
            </div>
            <p className="font-[400] md:text-[20px] text-[16px] md:leading-[28px] leading-[22px]">
              Ensure every supplier meets your <span className="font-[700]">quality, compliance, and ESG
              standards. Matchory’s AI&#8209;powered filtering</span> ranks suppliers based
              on your exact requirements, eliminating inefficiencies in supplier
              selection.
            </p>
          </div>
          <div className="flex flex-col gap-[24px] md:mt-[0] mt-[30px]">
            <Image
              src={"/icons/Efficiency.svg"}
              alt="back arrow"
              width="80"
              height="80"
            />
            <div className="text-blue font-[700] md:text-[30px] text-[20px] md:leading-[38px] leading-[28px]">
              Cost Efficiency:
            </div>
            <p className="font-[400] md:text-[20px] text-[16px] md:leading-[28px] leading-[22px]">
              Reduce supplier qualification costs by up to 70% while maintaining
              sourcing quality.<br/> By&nbsp;<span className="font-[700]">automating supplier discovery</span> and reducing
              manual efforts, <span className="font-[700]">Matchory + YVOO</span> streamline procurement, optimizing
              resources and delivering <span className="font-[700]">significant cost savings</span>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
