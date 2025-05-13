import Image from "next/image";

function Stats() {
  return (
    <div className="w-full flex-center flex-col px-[41px] md:px-[0] 2xl:px-[181px] 3xl:px-[202px] pb-[120px] md:pb-[119px] 2xl:pb-[240px] pt-[120px] md:pt-[140px] 3xl:pt-[180px] bg-[#131D2A]">
      <div className="grid grid-cols-1 md:grid-cols-[173px_172px_173px] 2xl:grid-cols-3 md:gap-[61px] gap-[32px] mb-[80px] md:mb-[65px] justify-items-start w-full" data-scroll data-scroll-speed="0.13">
        <div className="[&>p]:text-[#06D7F9] flex md:gap-[20px] gap-[4px] md:flex-wrap md:flex-row flex-col content-center">
          <p className="font-inter font-[800] text-[50px] leading-[58px]">
            10X
          </p>
          <p className="font-[700] md:text-[16px] text-[14px] leading-[20px] 2xl:max-w-[200px] max-w-[unset] 2xl:mt-[0] content-center">
            Faster <br className="2xl:block hidden" /> Sourcing Decisions
          </p>
        </div>
        <div className="[&>p]:text-[#06D7F9] flex 2xl:gap-[20px] gap-[4px] 2xl:flex-wrap 2xl:flex-row flex-col content-center">
          <p className="font-inter font-[800] text-[50px] leading-[58px] 2xl:ml-[0] md:ml-[-17px]">
            100%
          </p>
          <p className="font-[700] md:text-[16px] text-[14px] leading-[20px] 2xl:max-w-[140px] 2xl:mt-[0] content-center">
            Audit<br className="2xl:block hidden"></br> Success Rate
          </p>
        </div>
        <div className="[&>p]:text-[#06D7F9] flex 2xl:gap-[20px] gap-[4px] 2xl:flex-wrap 2xl:flex-row flex-col content-center">
          <p className="font-inter font-[800] text-[50px] leading-[58px]">
            70%
          </p>
          <p className="font-[700] md:text-[16px] text-[14px] leading-[20px] 2xl:max-w-[177px] content-center">
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
          src="/icons/stats-image.svg"
          width={1105}
          height={619}
          alt="stats"
          sizes="100vw"
          // style={{ width: "1105px", height: "619px" }}
          className="hidden 2xl:block 3xl:ml-[-26px] max-w-[100%]"
        />
      </div>
    </div>
  );
}

export default Stats;
