import Image from "next/image";

function Stats() {
  return (
    <div className="w-full flex-center flex-col px-[20px] md:px-[43px] 2xl:px-[181px] 3xl:px-[202px] pb-[100px] md:pb-[100px] 2xl:pb-[199px] 3xl:pb-[200px] pt-[109px] md:pt-[188px] 2xl:pt-[68px] 3xl:pt-[291px] bg-[#131D2A] -mt-[1px]">
      <div className="grid grid-cols-1 md:grid-cols-[181px_208px_233px] 2xl:grid-cols-3 2xl:gap-[61px] md:gap-[30px] gap-[40px] mb-[60px] md:mb-[62px] 2xl:mb-[100px] 3xl:mb-[96px]" data-scroll data-scroll-speed="0.13">
        <div className="[&>p]:text-[#06D7F9] flex items-center 2xl:gap-[12px] gap-[8px] 2xl:flex-wrap">
          <p className="font-machina font-[800] 2xl:text-[50px] text-[30px] 2xl:leading-[50px] leading-[34px] md:ml-[0] ml-[19px]">
            10X
          </p>
          <p className="font-[700] 2xl:text-[16px] text-[14px] leading-[20px] 2xl:max-w-[200px] max-w-[109px] 2xl:mt-[0] md:mt-[3px] mt-[0px]">
            Faster Sourcing <br /> Decisions
          </p>
        </div>
        <div className="[&>p]:text-[#06D7F9] flex items-center 2xl:gap-[12px] gap-[8px] 2xl:flex-wrap">
          <p className="font-machina font-[800] 2xl:text-[50px] text-[30px] 2xl:leading-[50px] leading-[34px] md:ml-[0] ml-[-17px]">
            100%
          </p>
          <p className="font-[700] 2xl:text-[16px] text-[14px] leading-[20px] 2xl:max-w-[140px] max-w-[99px] 2xl:mt-[0] md:mt-[3px]">
            Audit<br className="2xl:block hidden"></br> Success Rate
          </p>
        </div>
        <div className="[&>p]:text-[#06D7F9] flex items-center 2xl:gap-[12px] gap-[8px] 2xl:flex-wrap">
          <p className="font-machina font-[800] 2xl:text-[50px] text-[30px] 2xl:leading-[50px] leading-[34px]">
            70%
          </p>
          <p className="font-[700] 2xl:text-[16px] text-[14px] leading-[20px] 2xl:max-w-[177px] max-w-[147px] 2xl:mt-[0] md:mt-[3px]">
            Reduction in Supplier Qualification Costs
          </p>
        </div>
      </div>
      <div className="relative w-full flex justify-center" data-scroll data-scroll-speed="0.13">
        <Image
          src="/images/stats-image-mobile.svg"
          width={0}
          height={0}
          alt="stats-mobile"
          sizes="100vw"
          style={{ width: "379px", height: "924px" }}
          className="2xl:hidden w-calc-100-plus-84 max-w-calc-100-plus-84"
        />
        <Image
          src="/images/stats-image.png"
          width={0}
          height={0}
          alt="stats"
          sizes="100vw"
          style={{ width: "1076px", height: "475px" }}
          className="hidden 2xl:block"
        />
      </div>
    </div>
  );
}

export default Stats;
