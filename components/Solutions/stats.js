import Image from "next/image";

function Stats() {
  return (
    <div className="w-full flex-center flex-col px-[20px] md:px-[0] 2xl:px-[181px] 3xl:px-[202px] pb-[100px] md:pb-[119px] 2xl:pb-[199px] 3xl:pb-[140px] pt-[108px] md:pt-[148px] 2xl:pt-[68px] 3xl:pt-[140px] bg-[#131D2A] -mt-[1px]">
      <div className="grid grid-cols-1 md:grid-cols-[173px_172px_173px] 2xl:grid-cols-3 2xl:gap-[61px] md:gap-[40px] gap-[40px] mb-[50px] md:mb-[62px] 2xl:mb-[100px] 3xl:mb-[60px] md:justify-items-start	 justify-items-center	" data-scroll data-scroll-speed="0.13">
        <div className="[&>p]:text-[#06D7F9] flex 2xl:gap-[12px] gap-[8px] 2xl:flex-wrap 2xl:flex-row md:flex-col flex-row">
          <p className="font-inter font-[800] 2xl:text-[50px] md:text-[40px] text-[30px] 2xl:leading-[50px] md:leading-[44px] leading-[34px] md:ml-[0] ml-[19px] pt-[6px]">
            10X
          </p>
          <p className="font-[700] md:text-[16px] text-[14px] leading-[20px] 2xl:max-w-[200px] max-w-[unset] 2xl:mt-[0] md:mt-[0] mt-[0px]">
            Faster <br className="2xl:block hidden" /> Sourcing <br className="2xl:hidden block" /> Decisions
          </p>
        </div>
        <div className="[&>p]:text-[#06D7F9] flex 2xl:gap-[12px] gap-[8px] 2xl:flex-wrap 2xl:flex-row md:flex-col flex-row">
          <p className="font-inter font-[800] 2xl:text-[50px] md:text-[40px]  text-[30px] 2xl:leading-[50px] md:leading-[44px] leading-[34px] 2xl:ml-[0] md:ml-[-17px] pt-[6px]">
            100%
          </p>
          <p className="font-[700] md:text-[16px] text-[14px] leading-[20px] 2xl:max-w-[140px] max-w-[121px] 2xl:mt-[0] md:mt-[0]">
            Audit<br className="2xl:block hidden"></br> Success Rate
          </p>
        </div>
        <div className="[&>p]:text-[#06D7F9] flex 2xl:gap-[12px] gap-[8px] 2xl:flex-wrap 2xl:flex-row md:flex-col flex-row md:max-w-[unset] max-w-[232px]">
          <p className="font-inter font-[800] 2xl:text-[50px] md:text-[40px]  text-[30px] 2xl:leading-[50px] md:leading-[44px] leading-[34px] pt-[6px]">
            70%
          </p>
          <p className="font-[700] md:text-[16px] text-[14px] leading-[20px] 2xl:max-w-[177px] md:max-w-[unset] max-w-[278px] 2xl:mt-[0] md:mt-[0]">
            Reduction in Supplier Qualification Costs
          </p>
        </div>
      </div>
      <div className="relative w-full flex justify-center" data-scroll data-scroll-speed="0.13">
        <Image
          src="/images/stats-image-mobile-xs.svg"
          width={0}
          height={0}
          alt="stats-mobile"
          sizes="100vw"
          style={{ width: "330px", height: "1040px" }}
          className="md:hidden block w-calc-100-plus-84 max-w-calc-100-plus-84"
        />
        <Image
          src="/images/stats-image-mobile-md.svg"
          width={0}
          height={0}
          alt="stats-mobile"
          sizes="100vw"
          style={{ width: "601px", height: "1040px" }}
          className="2xl:hidden md:block hidden w-calc-100-plus-84 max-w-calc-100-plus-84"
        />
        <Image
          src="/images/stats-image.svg"
          width={0}
          height={0}
          alt="stats"
          sizes="100vw"
          style={{ width: "1105px", height: "607px" }}
          className="hidden 2xl:block 3xl:ml-[-26px]"
        />
      </div>
    </div>
  );
}

export default Stats;
