import Image from "next/image";

function Stats() {
  return (
    <div className="w-full flex-center flex-col px-[20px] customxs:px-[50px] lg:px-[176px] 2xl:px-[202px] pb-[46px] md:pb-[66px] 3xl:pb-[200px] pt-[46px] md:pt-[66px] 3xl:pt-[292px] bg-[#131D2A] -mt-[1px]">
      <div className="grid grid-cols-1 customxs:grid-cols-3 gap-[52px] mb-[50px] md:mb-[62px] 2xl:mb:[92px]">
        <div className="[&>p]:text-[#06D7F9] flex items-center md:justify-center gap-[24px] flex-wrap">
          <p className="font-machina font-[800] text-[40px] leading-[40px] md:text-[50px] md:leading-[50px]">
            10X
          </p>
          <p className="font-[700] text-[16px] leading-[19px]">
            Faster Sourcing <br /> Decisions
          </p>
        </div>
        <div className="[&>p]:text-[#06D7F9] flex items-center md:justify-center gap-[24px] flex-wrap">
          <p className="font-machina font-[800] text-[40px] leading-[40px] md:text-[50px] md:leading-[50px]">
            100%
          </p>
          <p className="font-[700] text-[16px] leading-[19px] max-w-[160px]">
            Audit Success Rate
          </p>
        </div>
        <div className="[&>p]:text-[#06D7F9] flex items-center md:justify-center gap-[24px] flex-wrap">
          <p className="font-machina font-[800] text-[40px] leading-[40px] md:text-[50px] md:leading-[50px]">
            70%
          </p>
          <p className="font-[700] text-[16px] leading-[19px] max-w-[160px]">
            Reduction in Supplier Qualification Costs
          </p>
        </div>
      </div>
      <div className="relative w-full flex justify-center">
        <Image
          src="/images/stats-image-mobile.png"
          width={0}
          height={0}
          alt="stats-mobile"
          sizes="100vw"
          style={{ width: "469px", height: "860px" }}
          className="md:hidden"
        />
        <Image
          src="/images/stats-image.png"
          width={0}
          height={0}
          alt="stats"
          sizes="100vw"
          style={{ width: "1076px", height: "475px" }}
          className="hidden md:block"
        />
      </div>
    </div>
  );
}

export default Stats;
