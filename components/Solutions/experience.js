import Image from "next/image";

function Experience() {
  return (
    <div className="relative w-full flex-center 3xl:px-[204px] 2xl:px-[162px] md:px-[85px] px-[42px] pt-[100px] md:pt-[120px] 2xl:pt-[120px] pb-[100px] md:pb-[120px] 2xl:pb-[120px] bg-[#131D2A]">
      <div className="w-full" data-scroll data-scroll-speed="0.1">
        <div className="font-[400] text-[14px] md:text-[16px] leading-[20px] [&>p]:2xl:max-w-[306px] [&>p]:2xl:max-w-[400px] gap-[30px] 2xl:gap-[38px] 3xl:gap-[60px] grid grid-cols-1 2xl:grid-cols-3">
          <div className="flex flex-col gap-[24px]">
            <Image
              src={"/icons/Speed.svg"}
              alt="back arrow"
              width="80"
              height="80"
            />
            <div className="text-blue font-[700] text-[30px] leading-[38px]">
              Unprecedented Speed:
            </div>
            <p className="font-[400] text-[20px] leading-[28px]">
              Make sourcing decisions faster than ever. With <span className="font-[700]">Matchory</span>, you gain
              instant access to a global database of <span className="font-[700]">14M+ suppliers</span>, enabling
              rapid and <span className="font-[700]">AI&#8209;powered supplier discovery</span>. Identify the best-fit
              suppliers in <span className="font-[700]">seconds</span>, reducing procurement cycles from months to
              days.
            </p>
          </div>
          <div className="flex flex-col gap-[24px]">
            <Image
              src={"/icons/Precision.svg"}
              alt="back arrow"
              width="80"
              height="80"
            />
            <div className="text-blue font-[700] text-[30px] leading-[38px]">
              Data-Driven Precision:
            </div>
            <p className="font-[400] text-[20px] leading-[28px]">
              Ensure every supplier meets your <span className="font-[700]">quality, compliance, and ESG
              standards. Matchory’s AI&#8209;powered filtering</span> ranks suppliers based
              on your exact requirements, eliminating inefficiencies in supplier
              selection.
            </p>
          </div>
          <div className="flex flex-col gap-[24px]">
            <Image
              src={"/icons/Efficiency.svg"}
              alt="back arrow"
              width="80"
              height="80"
            />
            <div className="text-blue font-[700] text-[30px] leading-[38px]">
              Cost Efficiency:
            </div>
            <p className="font-[400] text-[20px] leading-[28px]">
              Reduce supplier qualification costs by up to 70% while maintaining
              sourcing quality. By&nbsp;<span className="font-[700]">automating supplier discovery</span> and reducing
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
